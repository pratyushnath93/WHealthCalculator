# WHealth Calculator App Testing Script
# This script launches the Android emulator, waits for it to boot, and installs the APK.

$androidCli = "C:\Users\praty\AppData\Local\Microsoft\WinGet\Packages\Google.AndroidCLI_Microsoft.Winget.Source_8wekyb3d8bbwe\android.exe"
$adb = "C:\Users\praty\AppData\Local\Android\Sdk\platform-tools\adb.exe"
$apkPath = "d:\My Project\whealth-calculator.apk"

Write-Host "==========================================" -ForegroundColor Green
Write-Host "Starting WHealth Calculator Android Emulator..." -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Green

# 1. Start the emulator in a separate process so it remains running
$emulatorExe = "C:\Users\praty\AppData\Local\Android\Sdk\emulator\emulator.exe"
Start-Process -FilePath $emulatorExe -ArgumentList "-avd", "medium_phone"

# 2. Wait for ADB to detect the emulator and wait for boot completion
Write-Host "Waiting for virtual phone to boot up..." -ForegroundColor Yellow
Write-Host "Note: This can take up to 60-90 seconds on the first launch." -ForegroundColor Yellow

$booted = $false
$elapsed = 0
$timeout = 120

while (-not $booted -and $elapsed -lt $timeout) {
    Start-Sleep -Seconds 5
    $elapsed += 5
    
    $devices = & $adb devices
    if ($devices -match "emulator-5554") {
        # Check if Android OS has completed booting
        $status = & $adb -s emulator-5554 shell getprop sys.boot_completed 2>$null
        if ($status -and $status.Trim() -eq "1") {
            $booted = $true
        } else {
            Write-Host "Phone detected... loading Android system ($elapsed seconds elapsed)..." -ForegroundColor Yellow
        }
    } else {
        Write-Host "Waiting for emulator process ($elapsed seconds elapsed)..." -ForegroundColor Gray
    }
}

if ($booted) {
    Write-Host "`nVirtual device is ready!" -ForegroundColor Green
    Write-Host "Installing WHealth Calculator app (whealth-calculator.apk)..." -ForegroundColor Green
    
    # 3. Install the APK
    $installResult = & $adb -s emulator-5554 install $apkPath
    Write-Host $installResult
    
    # 4. Launch the App
    Write-Host "Launching WHealth Calculator app..." -ForegroundColor Green
    & $adb -s emulator-5554 shell am start -n com.whealthcalculator.app/.MainActivity
    
    Write-Host "`n==========================================" -ForegroundColor Green
    Write-Host "SUCCESS: App installed and launched on the virtual phone!" -ForegroundColor Green
    Write-Host "==========================================" -ForegroundColor Green
} else {
    Write-Host "`nTimeout reached waiting for emulator boot. Please check if the emulator window opened." -ForegroundColor Red
}

Write-Host "`nPress Enter to close this window..."
Read-Host
