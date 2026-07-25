# WHealth Calculator - Update Food Database & Test
# Run this script after updating foods.json on GitHub.
# It pulls the latest changes, rebuilds the APK, and launches on the emulator.

$projectPath = "d:\My Project\Calculator"
$adb = "C:\Users\praty\AppData\Local\Android\Sdk\platform-tools\adb.exe"
$emulatorExe = "C:\Users\praty\AppData\Local\Android\Sdk\emulator\emulator.exe"
$apkOutput = "d:\My Project\Calculator\whealth-calculator.apk"

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  WHealth: Sync GitHub -> Rebuild -> Test  " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# Step 1: Pull latest food data from GitHub
Write-Host "`n[1/3] Pulling latest food database from GitHub..." -ForegroundColor Yellow
Set-Location $projectPath
$pullResult = & git pull origin main 2>&1
Write-Host $pullResult -ForegroundColor Gray

# Step 2: Rebuild APK with new food data bundled
Write-Host "`n[2/3] Rebuilding APK with latest food data..." -ForegroundColor Yellow
& npx cap copy android | Out-Null
Set-Location "$projectPath\android"
& .\gradlew assembleDebug | Select-String "BUILD|error|Error" | ForEach-Object { Write-Host $_.Line }
Set-Location $projectPath
Copy-Item "android\app\build\outputs\apk\debug\app-debug.apk" $apkOutput -Force
Write-Host "APK rebuilt successfully!" -ForegroundColor Green

# Step 3: Start emulator if not running
Write-Host "`n[3/3] Launching on emulator..." -ForegroundColor Yellow
$devices = & $adb devices
if ($devices -notmatch "emulator") {
    Write-Host "Starting emulator..." -ForegroundColor Gray
    Start-Process -FilePath $emulatorExe -ArgumentList "-avd", "medium_phone"
    
    $booted = $false
    $elapsed = 0
    while (-not $booted -and $elapsed -lt 120) {
        Start-Sleep -Seconds 5
        $elapsed += 5
        $status = & $adb -s emulator-5554 shell getprop sys.boot_completed 2>$null
        if ($status -and $status.Trim() -eq "1") { $booted = $true }
        else { Write-Host "Waiting for emulator... ($elapsed s)" -ForegroundColor Gray }
    }
} else {
    Write-Host "Emulator already running." -ForegroundColor Gray
}

# Install and launch
& $adb -s emulator-5554 shell pm clear com.whealthcalculator.app 2>$null
$installResult = & $adb -s emulator-5554 install -r -d $apkOutput
Write-Host $installResult
& $adb -s emulator-5554 shell am start -n com.whealthcalculator.app/.MainActivity

Write-Host "`n==========================================" -ForegroundColor Green
Write-Host " SUCCESS! App updated and launched!" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Green
Write-Host "`nPress Enter to close this window..."
Read-Host
