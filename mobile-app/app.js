// WHealth Calculator - Consolidated Mobile App JS
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initCalculators();
});

// 1. Theme Configuration
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  
  const savedTheme = localStorage.getItem('app-theme') || 'light';
  body.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('app-theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (theme === 'dark') {
    icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
  } else {
    icon.innerHTML = `
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    `;
  }
}

// 2. Navigation Controller
let navHistory = ['view-home'];

function initNavigation() {
  const tabs = document.querySelectorAll('.nav-tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-target');
      showView(target);
    });
  });

  // Sidebar Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const closeMenu = document.getElementById('close-menu');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const sidebarDrawer = document.getElementById('sidebar-drawer');
  const navLinkBtns = document.querySelectorAll('.nav-link-btn');

  function openSidebar() {
    sidebarOverlay.classList.remove('hidden');
    sidebarDrawer.classList.remove('closed');
  }

  function closeSidebar() {
    sidebarOverlay.classList.add('hidden');
    sidebarDrawer.classList.add('closed');
  }

  if (menuToggle) menuToggle.addEventListener('click', openSidebar);
  if (closeMenu) closeMenu.addEventListener('click', closeSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

  navLinkBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetView = btn.getAttribute('data-view');
      if (targetView) {
        showView(targetView);
      }
      closeSidebar();
    });
  });
}

function showView(viewId, pushToHistory = true) {
  const views = document.querySelectorAll('.app-view');
  const tabs = document.querySelectorAll('.nav-tab');

  views.forEach(v => v.classList.remove('active'));
  const activeView = document.getElementById(viewId);
  if (activeView) {
    activeView.classList.add('active');
  }

  tabs.forEach(t => t.classList.remove('active'));
  
  let tabTarget = viewId;
  if (viewId === 'view-health' || viewId === 'view-health-menu' || viewId === 'view-track-food') {
    tabTarget = 'view-health';
  } else if (viewId === 'view-sip' || viewId === 'view-swp' || viewId === 'view-loan' || viewId === 'view-retirement' || viewId === 'view-risk' || viewId === 'view-wealth-menu') {
    tabTarget = 'view-wealth-menu';
  } else if (viewId === 'view-contact' || viewId === 'view-privacy' || viewId === 'view-terms') {
    tabTarget = 'view-contact';
  }
  
  const activeTab = document.querySelector(`.nav-tab[data-target="${tabTarget}"]`);
  if (activeTab) {
    activeTab.classList.add('active');
  }

  // Update nav-link-btn active states
  const navLinkBtns = document.querySelectorAll('.nav-link-btn');
  navLinkBtns.forEach(btn => {
    if (btn.getAttribute('data-view') === viewId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  if (pushToHistory) {
    if (navHistory[navHistory.length - 1] !== viewId) {
      navHistory.push(viewId);
    }
  }

  window.dispatchEvent(new Event('resize'));
}
window.showView = showView;

function goBack() {
  if (navHistory.length > 1) {
    navHistory.pop();
    const prevView = navHistory[navHistory.length - 1];
    showView(prevView, false);
  } else {
    showView('view-home', false);
  }
}
window.goBack = goBack;

// 3. General Utilities
function formatCurrency(val) {
  if (val >= 10000000) {
    return '₹' + (val / 10000000).toFixed(2) + ' Cr';
  } else if (val >= 100000) {
    return '₹' + (val / 100000).toFixed(2) + ' L';
  }
  return '₹' + Math.round(val).toLocaleString('en-IN');
}

// Format raw values
function formatRawCurrency(val) {
  return '₹' + Math.round(val).toLocaleString('en-IN');
}

function syncInputs(numId, sliderId, onUpdate) {
  const numInput = document.getElementById(numId);
  const sliderInput = document.getElementById(sliderId);

  numInput.addEventListener('input', () => {
    let val = parseFloat(numInput.value) || 0;
    const max = parseFloat(numInput.max);
    const min = parseFloat(numInput.min);
    if (val > max) val = max;
    sliderInput.value = val;
    onUpdate();
  });

  sliderInput.addEventListener('input', () => {
    numInput.value = sliderInput.value;
    onUpdate();
  });
}

function initCalculators() {
  initSipCalculator();
  initSwpCalculator();
  initLoanCalculator();
  initRetirementCalculator();
  initHealthCalculatorCombined();
  initRiskCalculatorCombined();
  initTrackFood();
}

// 4. SIP & Lumpsum Calculator
function initSipCalculator() {
  let isLumpsum = false;
  const tabMonthly = document.getElementById('tab-sip-monthly');
  const tabLumpsum = document.getElementById('tab-sip-lumpsum');
  const amountLabel = document.getElementById('sip-amount-label');
  const topupContainer = document.getElementById('sip-topup-container');

  tabMonthly.addEventListener('click', () => {
    isLumpsum = false;
    tabMonthly.classList.add('active');
    tabLumpsum.classList.remove('active');
    amountLabel.innerText = "Monthly Investment";
    topupContainer.classList.remove('hidden');
    calculateSip();
  });

  tabLumpsum.addEventListener('click', () => {
    isLumpsum = true;
    tabLumpsum.classList.add('active');
    tabMonthly.classList.remove('active');
    amountLabel.innerText = "Lumpsum Investment";
    topupContainer.classList.add('hidden');
    calculateSip();
  });

  syncInputs('sip-amount', 'sip-amount-slider', calculateSip);
  syncInputs('sip-rate', 'sip-rate-slider', calculateSip);
  syncInputs('sip-tenure', 'sip-tenure-slider', calculateSip);
  syncInputs('sip-topup', 'sip-topup-slider', calculateSip);

  function calculateSip() {
    const P = parseFloat(document.getElementById('sip-amount').value) || 0;
    const R = parseFloat(document.getElementById('sip-rate').value) || 0;
    const years = parseFloat(document.getElementById('sip-tenure').value) || 0;
    const topupPct = parseFloat(document.getElementById('sip-topup').value) || 0;

    let invested = 0;
    let futureValue = 0;
    let chartData = [];
    let tableRowsHtml = '';

    if (isLumpsum) {
      invested = P;
      futureValue = P * Math.pow(1 + R / 100, years);
      chartData.push({ year: 0, invested: P, value: P });
      tableRowsHtml += `<tr><td>Start</td><td class="text-right">${formatRawCurrency(P)}</td><td class="text-right">₹0</td><td class="text-right">${formatRawCurrency(P)}</td></tr>`;
      
      for (let y = 1; y <= years; y++) {
        const val = P * Math.pow(1 + R / 100, y);
        chartData.push({ year: y, invested: P, value: val });
        tableRowsHtml += `<tr><td>Year ${y}</td><td class="text-right">${formatRawCurrency(P)}</td><td class="text-right">${formatRawCurrency(val - P)}</td><td class="text-right">${formatRawCurrency(val)}</td></tr>`;
      }
    } else {
      const monthlyRate = R / 12 / 100;
      let currentAmount = P;
      let totalInvested = 0;
      let currentVal = 0;
      chartData.push({ year: 0, invested: 0, value: 0 });
      tableRowsHtml += `<tr><td>Start</td><td class="text-right">₹0</td><td class="text-right">₹0</td><td class="text-right">₹0</td></tr>`;

      for (let y = 1; y <= years; y++) {
        for (let m = 1; m <= 12; m++) {
          totalInvested += currentAmount;
          currentVal = (currentVal + currentAmount) * (1 + monthlyRate);
        }
        chartData.push({ year: y, invested: totalInvested, value: currentVal });
        tableRowsHtml += `<tr><td>Year ${y}</td><td class="text-right">${formatRawCurrency(totalInvested)}</td><td class="text-right">${formatRawCurrency(currentVal - totalInvested)}</td><td class="text-right">${formatRawCurrency(currentVal)}</td></tr>`;
        currentAmount = currentAmount * (1 + topupPct / 100);
      }
      invested = totalInvested;
      futureValue = currentVal;
    }

    const estReturns = Math.max(0, futureValue - invested);
    document.getElementById('sip-invested').innerText = formatCurrency(invested);
    document.getElementById('sip-returns').innerText = formatCurrency(estReturns);
    document.getElementById('sip-total').innerText = formatCurrency(futureValue);
    document.getElementById('sip-table-body').innerHTML = tableRowsHtml;
    drawSvgChart('sip-chart', chartData, 'year', 'invested', 'value');
  }

  window.addEventListener('resize', calculateSip);
  calculateSip();
}

// 5. SWP Calculator
function initSwpCalculator() {
  syncInputs('swp-amount', 'swp-amount-slider', calculateSwp);
  syncInputs('swp-withdrawal', 'swp-withdrawal-slider', calculateSwp);
  syncInputs('swp-rate', 'swp-rate-slider', calculateSwp);
  syncInputs('swp-tenure', 'swp-tenure-slider', calculateSwp);

  function calculateSwp() {
    const totalInvestment = parseFloat(document.getElementById('swp-amount').value) || 0;
    const monthlyWithdrawal = parseFloat(document.getElementById('swp-withdrawal').value) || 0;
    const R = parseFloat(document.getElementById('swp-rate').value) || 0;
    const years = parseFloat(document.getElementById('swp-tenure').value) || 0;

    const monthlyRate = R / 12 / 100;
    let balance = totalInvestment;
    let totalWithdrawn = 0;
    
    let chartData = [];
    chartData.push({ year: 0, invested: totalInvestment, balance: totalInvestment, withdrawn: 0 });
    let tableRowsHtml = `<tr><td>Start</td><td class="text-right">${formatRawCurrency(totalInvestment)}</td><td class="text-right">₹0</td><td class="text-right">${formatRawCurrency(totalInvestment)}</td></tr>`;

    for (let y = 1; y <= years; y++) {
      for (let m = 1; m <= 12; m++) {
        let withdrawal = 0;
        if (balance >= monthlyWithdrawal) {
          withdrawal = monthlyWithdrawal;
        } else {
          withdrawal = Math.max(0, balance);
        }
        totalWithdrawn += withdrawal;
        balance = Math.max(0, balance - withdrawal);
        balance = balance * (1 + monthlyRate);
      }
      chartData.push({
        year: y,
        invested: totalInvestment,
        balance: Math.round(balance),
        withdrawn: Math.round(totalWithdrawn)
      });
      tableRowsHtml += `<tr><td>Year ${y}</td><td class="text-right">${formatRawCurrency(totalInvestment)}</td><td class="text-right">${formatRawCurrency(totalWithdrawn)}</td><td class="text-right">${formatRawCurrency(balance)}</td></tr>`;
    }

    document.getElementById('swp-invested').innerText = formatCurrency(totalInvestment);
    document.getElementById('swp-withdrawn').innerText = formatCurrency(totalWithdrawn);
    document.getElementById('swp-total').innerText = formatCurrency(balance);
    document.getElementById('swp-table-body').innerHTML = tableRowsHtml;
    drawSvgChart('swp-chart', chartData, 'year', 'withdrawn', 'balance');
  }

  window.addEventListener('resize', calculateSwp);
  calculateSwp();
}

// 6. Loan EMI Calculator
function initLoanCalculator() {
  const typeHome = document.getElementById('loan-type-home');
  const typePersonal = document.getElementById('loan-type-personal');
  const scheduleView = document.getElementById('loan-schedule-view');
  let isHomeLoan = true;

  typeHome.addEventListener('click', () => {
    isHomeLoan = true;
    typeHome.classList.add('active');
    typePersonal.classList.remove('active');
    configureLoanLimits();
  });

  typePersonal.addEventListener('click', () => {
    isHomeLoan = false;
    typePersonal.classList.add('active');
    typeHome.classList.remove('active');
    configureLoanLimits();
  });

  scheduleView.addEventListener('change', calculateLoan);
  syncInputs('loan-amount', 'loan-amount-slider', calculateLoan);
  syncInputs('loan-rate', 'loan-rate-slider', calculateLoan);
  syncInputs('loan-tenure', 'loan-tenure-slider', calculateLoan);

  function configureLoanLimits() {
    const amt = document.getElementById('loan-amount');
    const amtSlider = document.getElementById('loan-amount-slider');
    const rate = document.getElementById('loan-rate');
    const rateSlider = document.getElementById('loan-rate-slider');
    const tenure = document.getElementById('loan-tenure');
    const tenureSlider = document.getElementById('loan-tenure-slider');

    if (isHomeLoan) {
      amt.min = 1000000; amt.max = 100000000; amt.value = 5000000;
      amtSlider.min = 1000000; amtSlider.max = 100000000; amtSlider.value = 5000000;
      document.getElementById('loan-min-limit').innerText = "₹10 L";
      document.getElementById('loan-max-limit').innerText = "₹10 Cr";
      tenure.max = 30; tenureSlider.max = 30;
      document.getElementById('loan-tenure-limit').innerText = "30 Yr";
    } else {
      amt.min = 10000; amt.max = 5000000; amt.value = 500000;
      amtSlider.min = 10000; amtSlider.max = 5000000; amtSlider.value = 500000;
      document.getElementById('loan-min-limit').innerText = "₹10,000";
      document.getElementById('loan-max-limit').innerText = "₹50 L";
      tenure.max = 7; tenure.value = 5;
      tenureSlider.max = 7; tenureSlider.value = 5;
      document.getElementById('loan-tenure-limit').innerText = "7 Yr";
    }
    calculateLoan();
  }

  function calculateLoan() {
    const P = parseFloat(document.getElementById('loan-amount').value) || 0;
    const R = parseFloat(document.getElementById('loan-rate').value) || 0;
    const years = parseFloat(document.getElementById('loan-tenure').value) || 0;
    const viewType = scheduleView.value;

    if (P === 0 || R === 0 || years === 0) {
      document.getElementById('loan-emi').innerText = formatCurrency(0);
      document.getElementById('loan-interest').innerText = formatCurrency(0);
      document.getElementById('loan-total').innerText = formatCurrency(0);
      document.getElementById('loan-table-body').innerHTML = '';
      return;
    }

    const r = R / 12 / 100;
    const n = years * 12;
    const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - P;

    document.getElementById('loan-emi').innerText = formatCurrency(emi);
    document.getElementById('loan-interest').innerText = formatCurrency(totalInterest);
    document.getElementById('loan-total').innerText = formatCurrency(totalAmount);

    let balance = P;
    let tableRowsHtml = '';

    if (viewType === 'monthly') {
      document.getElementById('loan-table-time-header').innerText = "Month";
      for (let m = 1; m <= Math.min(12, n); m++) {
        const interestPaid = balance * r;
        const principalPaid = emi - interestPaid;
        balance = Math.max(0, balance - principalPaid);
        tableRowsHtml += `<tr><td>Month ${m}</td><td class="text-right">${formatRawCurrency(principalPaid)}</td><td class="text-right">${formatRawCurrency(interestPaid)}</td><td class="text-right">${formatRawCurrency(balance)}</td></tr>`;
      }
    } else {
      document.getElementById('loan-table-time-header').innerText = "Year";
      for (let y = 1; y <= years; y++) {
        let yearlyInterest = 0;
        let yearlyPrincipal = 0;
        for (let m = 1; m <= 12; m++) {
          const interestPaid = balance * r;
          const principalPaid = emi - interestPaid;
          yearlyInterest += interestPaid;
          yearlyPrincipal += principalPaid;
          balance = Math.max(0, balance - principalPaid);
        }
        tableRowsHtml += `<tr><td>Year ${y}</td><td class="text-right">${formatRawCurrency(yearlyPrincipal)}</td><td class="text-right">${formatRawCurrency(yearlyInterest)}</td><td class="text-right">${formatRawCurrency(balance)}</td></tr>`;
      }
    }
    document.getElementById('loan-table-body').innerHTML = tableRowsHtml;
    drawLoanPieChart(P, totalInterest);
  }

  window.addEventListener('resize', calculateLoan);
  calculateLoan();
}

// 7. Retirement Goal Planner
function initRetirementCalculator() {
  syncInputs('ret-expense', 'ret-expense-slider', calculateRetirement);
  syncInputs('ret-inflation', 'ret-inflation-slider', calculateRetirement);
  document.getElementById('ret-current-age').addEventListener('input', calculateRetirement);
  document.getElementById('ret-target-age').addEventListener('input', calculateRetirement);
  document.getElementById('ret-pre-rate').addEventListener('input', calculateRetirement);
  document.getElementById('ret-post-rate').addEventListener('input', calculateRetirement);

  function calculateRetirement() {
    const curAge = parseFloat(document.getElementById('ret-current-age').value) || 0;
    const retAge = parseFloat(document.getElementById('ret-target-age').value) || 0;
    const currentExpense = parseFloat(document.getElementById('ret-expense').value) || 0;
    const inflation = parseFloat(document.getElementById('ret-inflation').value) || 0;
    const preRate = parseFloat(document.getElementById('ret-pre-rate').value) || 0;
    const postRate = parseFloat(document.getElementById('ret-post-rate').value) || 0;

    if (retAge <= curAge) {
      document.getElementById('ret-corpus').innerText = formatCurrency(0);
      document.getElementById('ret-savings').innerText = formatCurrency(0);
      document.getElementById('ret-table-body').innerHTML = '';
      return;
    }

    const yearsToRetire = retAge - curAge;
    const lifeExpectancy = 80;
    const yearsInRetirement = Math.max(10, lifeExpectancy - retAge);

    const monthlyExpenseAtRetirement = currentExpense * Math.pow(1 + inflation / 100, yearsToRetire);
    const infM = inflation / 12 / 100;
    const postRateM = postRate / 12 / 100;
    const realReturnM = (1 + postRateM) / (1 + infM) - 1;
    const totalMonthsRetirement = yearsInRetirement * 12;

    const corpusNeeded = monthlyExpenseAtRetirement * ((1 - Math.pow(1 + realReturnM, -totalMonthsRetirement)) / realReturnM);
    const preRateM = preRate / 12 / 100;
    const totalMonthsAccumulation = yearsToRetire * 12;
    const monthlySavingsNeeded = corpusNeeded * (preRateM / (Math.pow(1 + preRateM, totalMonthsAccumulation) - 1));

    document.getElementById('ret-corpus').innerText = formatCurrency(corpusNeeded);
    document.getElementById('ret-savings').innerText = formatCurrency(monthlySavingsNeeded);

    let chartData = [];
    chartData.push({ year: 0, invested: 0, value: 0 });
    let totalInvested = 0;
    let currentCorpusVal = 0;
    let tableRowsHtml = `<tr><td>Start</td><td class="text-right">₹0</td><td class="text-right">₹0</td><td class="text-right">₹0</td></tr>`;

    for (let y = 1; y <= yearsToRetire; y++) {
      for (let m = 1; m <= 12; m++) {
        totalInvested += monthlySavingsNeeded;
        currentCorpusVal = (currentCorpusVal + monthlySavingsNeeded) * (1 + preRateM);
      }
      chartData.push({
        year: y,
        invested: Math.round(totalInvested),
        value: Math.round(currentCorpusVal)
      });
      tableRowsHtml += `<tr><td>Year ${y}</td><td class="text-right">${formatRawCurrency(totalInvested)}</td><td class="text-right">${formatRawCurrency(currentCorpusVal - totalInvested)}</td><td class="text-right">${formatRawCurrency(currentCorpusVal)}</td></tr>`;
    }

    document.getElementById('ret-table-body').innerHTML = tableRowsHtml;
    drawSvgChart('ret-chart', chartData, 'year', 'invested', 'value');
  }

  window.addEventListener('resize', calculateRetirement);
  calculateRetirement();
}

// 8. SVG Line Chart Renderer
function drawSvgChart(svgId, data, xKey, y1Key, y2Key) {
  const svg = document.getElementById(svgId);
  if (!svg) return;
  svg.innerHTML = ''; 

  const width = 400;
  const height = 200;
  const paddingLeft = 60;
  const paddingBottom = 25;
  const paddingTop = 15;
  const paddingRight = 15;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  const maxX = Math.max(...data.map(d => d[xKey]));
  const maxY = Math.max(...data.map(d => Math.max(d[y1Key], d[y2Key])));

  const gridHtml = `
    <line x1="${paddingLeft}" y1="${paddingTop}" x2="${paddingLeft + chartWidth}" y2="${paddingTop}" class="chart-grid"></line>
    <line x1="${paddingLeft}" y1="${paddingTop + chartHeight / 2}" x2="${paddingLeft + chartWidth}" y2="${paddingTop + chartHeight / 2}" class="chart-grid"></line>
    <line x1="${paddingLeft}" y1="${paddingTop + chartHeight}" x2="${paddingLeft + chartWidth}" y2="${paddingTop + chartHeight}" class="chart-grid"></line>
    <line x1="${paddingLeft}" y1="${paddingTop}" x2="${paddingLeft}" y2="${paddingTop + chartHeight}" stroke="var(--color-hairline)" stroke-width="1.5"></line>
    <line x1="${paddingLeft}" y1="${paddingTop + chartHeight}" x2="${paddingLeft + chartWidth}" y2="${paddingTop + chartHeight}" stroke="var(--color-hairline)" stroke-width="1.5"></line>
  `;

  const yLabel1 = formatCurrency(maxY);
  const yLabel2 = formatCurrency(maxY / 2);
  const labelsHtml = `
    <text x="${paddingLeft - 8}" y="${paddingTop + 4}" text-anchor="end" class="chart-axis-text">${yLabel1}</text>
    <text x="${paddingLeft - 8}" y="${paddingTop + chartHeight / 2 + 3}" text-anchor="end" class="chart-axis-text">${yLabel2}</text>
    <text x="${paddingLeft - 8}" y="${paddingTop + chartHeight + 2}" text-anchor="end" class="chart-axis-text">₹0</text>
    <text x="${paddingLeft}" y="${paddingTop + chartHeight + 16}" text-anchor="start" class="chart-axis-text">0 Yr</text>
    <text x="${paddingLeft + chartWidth}" y="${paddingTop + chartHeight + 16}" text-anchor="end" class="chart-axis-text">${maxX} Yr</text>
  `;

  let path1Points = [];
  let path2Points = [];
  let areaPoints = [];

  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const x = paddingLeft + (d[xKey] / (maxX || 1)) * chartWidth;
    const y1 = paddingTop + chartHeight - (d[y1Key] / (maxY || 1)) * chartHeight;
    const y2 = paddingTop + chartHeight - (d[y2Key] / (maxY || 1)) * chartHeight;
    
    path1Points.push(x + ',' + y1);
    path2Points.push(x + ',' + y2);
    if (i === 0) areaPoints.push(x + ',' + (paddingTop + chartHeight));
    areaPoints.push(x + ',' + y2);
    if (i === data.length - 1) areaPoints.push(x + ',' + (paddingTop + chartHeight));
  }

  const dPath1 = 'M ' + path1Points.join(' L ');
  const dPath2 = 'M ' + path2Points.join(' L ');
  const dArea = 'M ' + areaPoints.join(' L ') + ' Z';

  const pathsHtml = `
    <path d="${dArea}" class="chart-area"></path>
    <path d="${dPath1}" class="chart-line-secondary"></path>
    <path d="${dPath2}" class="chart-line-main"></path>
  `;

  svg.innerHTML = gridHtml + pathsHtml + labelsHtml;
}

// 9. SVG Donut Chart Renderer for Loan EMI
function drawLoanPieChart(principal, interest) {
  const svg = document.getElementById('loan-chart');
  if (!svg) return;
  svg.innerHTML = '';

  const total = principal + interest;
  if (total === 0) return;

  const pctPrincipal = principal / total;
  const pctInterest = interest / total;

  const radius = 70;
  const cx = 100;
  const cy = 100;

  function getCoordinatesForPercent(percent) {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  }

  const [startX, startY] = getCoordinatesForPercent(0);
  const [endX, endY] = getCoordinatesForPercent(pctInterest);
  const largeArcFlag = pctInterest > 0.5 ? 1 : 0;
  
  const pathDataInterest = [
    `M ${cx} ${cy}`,
    `L ${cx + startX * radius} ${cy + startY * radius}`,
    `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${cx + endX * radius} ${cy + endY * radius}`,
    'Z'
  ].join(' ');

  const [startX2, startY2] = getCoordinatesForPercent(pctInterest);
  const [endX2, endY2] = getCoordinatesForPercent(1);
  const largeArcFlag2 = pctPrincipal > 0.5 ? 1 : 0;

  const pathDataPrincipal = [
    `M ${cx} ${cy}`,
    `L ${cx + startX2 * radius} ${cy + startY2 * radius}`,
    `A ${radius} ${radius} 0 ${largeArcFlag2} 1 ${cx + endX2 * radius} ${cy + endY2 * radius}`,
    'Z'
  ].join(' ');

  const chartHtml = `
    <path d="${pathDataPrincipal}" fill="var(--color-ink)" stroke="var(--color-surface)" stroke-width="1.5"></path>
    <path d="${pathDataInterest}" fill="var(--color-hairline-strong)" stroke="var(--color-surface)" stroke-width="1.5"></path>
    <circle cx="${cx}" cy="${cy}" r="45" fill="var(--color-surface)"></circle>
    <text x="${cx}" y="${cy - 2}" text-anchor="middle" font-size="10" font-weight="600" fill="var(--color-mute)" font-family="var(--font-sans)">PRINCIPAL</text>
    <text x="${cx}" y="${cy + 10}" text-anchor="middle" font-size="10" font-weight="700" fill="var(--color-ink)" font-family="var(--font-mono)">${Math.round(pctPrincipal*100)}%</text>
  `;

  svg.innerHTML = chartHtml;
}


  function initHealthCalculatorCombined() {
    // Inputs elements
    const genderInputs = document.querySelectorAll('button[id^="health-gender-"]') ;
    const ageInput = document.getElementById('health-age-slider') ;
    const ageNumInput = document.getElementById('health-age') ;
    const heightUnit = document.getElementById('health-height-unit') ;
    const heightMetricContainer = document.getElementById('height-metric-container') ;
    const heightImperialContainer = document.getElementById('height-imperial-container') ;
    const heightCmInput = document.getElementById('health-height-cm') ;
    const heightFtInput = document.getElementById('health-height-ft') ;
    const heightInInput = document.getElementById('health-height-in') ;
    const weightUnit = document.getElementById('health-weight-unit') ;
    const weightUnitLabel = document.getElementById('health-weight-unit-label') ;
    const weightInput = document.getElementById('health-weight') ;
    const activitySelect = document.getElementById('health-activity') ;
    const goalSelect = document.getElementById('health-goal') ;

    // Display elements
    const bmrValue = document.getElementById('health-bmr') ;
    const tdeeValue = document.getElementById('health-tdee') ;
    const targetValue = document.getElementById('health-target') ;
    const bmiValue = document.getElementById('health-bmi') ;
    const bmiSubtitle = document.getElementById('health-bmi-subtitle') ;
    const centerCal = document.getElementById('center-cal') ;

    const carbPctLabel = document.getElementById('carb-pct') ;
    const carbGLbl = document.getElementById('carb-g') ;
    const carbCalLbl = document.getElementById('carb-cal') ;

    const proteinPctLabel = document.getElementById('protein-pct') ;
    const proteinGLbl = document.getElementById('protein-g') ;
    const proteinCalLbl = document.getElementById('protein-cal') ;

    const fatPctLabel = document.getElementById('fat-pct') ;
    const fatGLbl = document.getElementById('fat-g') ;
    const fatCalLbl = document.getElementById('fat-cal') ;

    // Donut chart SVGs
    const donutCarbs = document.getElementById('donut-carbs')  ;
    const donutProtein = document.getElementById('donut-protein')  ;
    const donutFat = document.getElementById('donut-fat')  ;

    const CIRCUMFERENCE = 314.16;

    // Location Selectors
    const countrySelect = document.getElementById('health-country') ;
    const citySelect = document.getElementById('health-city') ;
    const dietaryPreferenceSelect = document.getElementById('health-dietary') ;
    
    // Diet display containers
    const dietEmptyState = document.getElementById('diet-empty-state') ;
    const dietActivePanel = document.getElementById('diet-active-panel') ;
    
    const dietHabitsText = document.getElementById('diet-habits-text') ;
    const dietTimezoneText = document.getElementById('diet-timezone-text') ;
    const mealsTimelineContainer = document.getElementById('meals-timeline-container') ;
    
    const printDietBtn = document.getElementById('print-diet-btn') ;
    const focusLocationBtn = document.getElementById('focus-location-btn') ;
    const calculateBtn = document.getElementById('health-calculate-btn') ;
    
    // Summary display elements
    const summaryTargetCal = document.getElementById('summary-target-cal') ;
    const summaryActualCal = document.getElementById('summary-actual-cal') ;
    const summaryDiffCal = document.getElementById('summary-diff-cal') ;

    const summaryTargetProt = document.getElementById('summary-target-prot') ;
    const summaryActualProt = document.getElementById('summary-actual-prot') ;
    const summaryDiffProt = document.getElementById('summary-diff-prot') ;

    const summaryTargetCarb = document.getElementById('summary-target-carb') ;
    const summaryActualCarb = document.getElementById('summary-actual-carb') ;
    const summaryDiffCarb = document.getElementById('summary-diff-carb') ;

    const summaryTargetFat = document.getElementById('summary-target-fat') ;
    const summaryActualFat = document.getElementById('summary-actual-fat') ;
    const summaryDiffFat = document.getElementById('summary-diff-fat') ;

    const nutritionalMatchBadge = document.getElementById('nutritional-match-badge') ;
    const summaryMicrosList = document.getElementById('summary-micros-list') ;

    const selectedSwaps = {
      breakfast: 0,
      snack1: 0,
      lunch: 0,
      snack2: 0,
      dinner: 0,
      bedtime: 0
    };

    const resetDietBtn = document.getElementById('reset-diet-btn') ;

    const COMMON_FOODS_DIRECTORY = {
      "oatmeal": { baseQty: 100, unit: "g", cal: 389, p: 16.9, c: 66.3, f: 6.9 },
      "whole eggs": { baseQty: 2, unit: "eggs", cal: 140, p: 12.0, c: 0.6, f: 9.8 },
      "boiled egg whites": { baseQty: 4, unit: "eggs", cal: 68, p: 14.5, c: 1.0, f: 0.2 },
      "whole wheat bread toast": { baseQty: 2, unit: "slices", cal: 160, p: 8.0, c: 30.0, f: 2.0 },
      "milk": { baseQty: 200, unit: "ml", cal: 120, p: 6.8, c: 9.6, f: 6.5 },
      "grilled chicken breast": { baseQty: 100, unit: "g", cal: 165, p: 31.0, c: 0, f: 3.6 },
      "basmati rice": { baseQty: 100, unit: "g", cal: 130, p: 2.7, c: 28.0, f: 0.3 },
      "brown rice": { baseQty: 100, unit: "g", cal: 112, p: 2.6, c: 23.5, f: 0.9 },
      "banana": { baseQty: 1, unit: "pc", cal: 105, p: 1.3, c: 27.0, f: 0.3 },
      "apple": { baseQty: 1, unit: "pc", cal: 95, p: 0.5, c: 25.0, f: 0.3 },
      "mashed avocado": { baseQty: 50, unit: "g", cal: 80, p: 1.0, c: 4.3, f: 7.3 },
      "organic tofu": { baseQty: 100, unit: "g", cal: 76, p: 8.0, c: 1.9, f: 4.8 },
      "greek yogurt": { baseQty: 100, unit: "g", cal: 59, p: 10.0, c: 3.6, f: 0.4 },
      "grilled paneer": { baseQty: 100, unit: "g", cal: 265, p: 18.3, c: 1.2, f: 20.8 },
      "raw almonds": { baseQty: 30, unit: "g", cal: 173, p: 6.3, c: 6.1, f: 15.0 },
      "peanut butter": { baseQty: 16, unit: "g", cal: 95, p: 4.0, c: 3.0, f: 8.0 },
      "salmon fillet": { baseQty: 100, unit: "g", cal: 206, p: 22.0, c: 0, f: 13.0 },
      "canned tuna": { baseQty: 100, unit: "g", cal: 116, p: 26.0, c: 0, f: 1.0 },
      "cottage cheese": { baseQty: 100, unit: "g", cal: 98, p: 11.0, c: 3.4, f: 4.3 },
      "whey protein": { baseQty: 1, unit: "scoop", cal: 120, p: 24.0, c: 3.0, f: 1.5 },
      "sweet potato": { baseQty: 100, unit: "g", cal: 86, p: 1.6, c: 20.0, f: 0.1 },
      "baby spinach": { baseQty: 100, unit: "g", cal: 23, p: 2.9, c: 3.6, f: 0.4 },
      "cucumber slices": { baseQty: 100, unit: "g", cal: 15, p: 0.7, c: 3.6, f: 0.1 },
      "butter": { baseQty: 10, unit: "g", cal: 72, p: 0.1, c: 0.1, f: 8.1 },
      "ghee": { baseQty: 5, unit: "ml", cal: 45, p: 0, c: 0, f: 5.0 },
      "dates": { baseQty: 3, unit: "pcs", cal: 60, p: 0.4, c: 16.0, f: 0.1 },
      "hummus dip": { baseQty: 30, unit: "g", cal: 50, p: 1.5, c: 4.3, f: 3.0 },
      "baked falafel": { baseQty: 3, unit: "pcs", cal: 160, p: 5.0, c: 18.0, f: 8.0 },
      "roasted makhana": { baseQty: 20, unit: "g", cal: 70, p: 2.0, c: 14.5, f: 0.1 },
      "sattu protein drink": { baseQty: 30, unit: "g", cal: 120, p: 6.0, c: 19.5, f: 1.5 },
      "maize porridge (pap)": { baseQty: 100, unit: "g", cal: 110, p: 2.3, c: 25.0, f: 0.2 },
      "beef biltong": { baseQty: 30, unit: "g", cal: 90, p: 15.0, c: 0.6, f: 3.0 },
      "labneh dip": { baseQty: 40, unit: "g", cal: 80, p: 3.0, c: 2.4, f: 6.8 },
      // Added regional foods
      "puri sabji": { baseQty: 1, unit: "plate", cal: 350, p: 8.0, c: 45.0, f: 16.0 },
      "steamed white rice": { baseQty: 100, unit: "g", cal: 130, p: 2.7, c: 28.0, f: 0.3 },
      "masala dosa": { baseQty: 1, unit: "pc", cal: 220, p: 4.5, c: 38.0, f: 6.0 },
      "paneer butter masala": { baseQty: 150, unit: "g", cal: 320, p: 12.0, c: 10.0, f: 26.0 },
      "samosa": { baseQty: 1, unit: "pc", cal: 260, p: 3.5, c: 32.0, f: 13.0 },
      "gulab jamun": { baseQty: 1, unit: "pc", cal: 150, p: 2.0, c: 26.0, f: 5.0 },
      "aloo paratha": { baseQty: 1, unit: "pc", cal: 210, p: 4.5, c: 33.0, f: 7.0 },
      "dal tadka": { baseQty: 150, unit: "ml", cal: 120, p: 6.5, c: 18.0, f: 3.0 },
      "roti / chapati": { baseQty: 1, unit: "pc", cal: 80, p: 3.0, c: 16.0, f: 0.5 },
      "yellow moong dal": { baseQty: 150, unit: "ml", cal: 110, p: 7.0, c: 20.0, f: 1.0 },
      "chole bhature": { baseQty: 1, unit: "plate", cal: 450, p: 12.0, c: 60.0, f: 18.0 },
      "idli & sambhar": { baseQty: 1, unit: "plate", cal: 210, p: 7.0, c: 40.0, f: 2.0 },
      "butter chicken": { baseQty: 150, unit: "g", cal: 340, p: 22.0, c: 8.0, f: 24.0 },
      "chicken biryani": { baseQty: 200, unit: "g", cal: 360, p: 24.0, c: 45.0, f: 9.0 },
      "fish fry": { baseQty: 100, unit: "g", cal: 220, p: 18.0, c: 8.0, f: 13.0 },
      "egg bhurji": { baseQty: 1, unit: "plate", cal: 190, p: 14.0, c: 4.0, f: 13.0 },
      "pizza slice (cheese)": { baseQty: 1, unit: "slice", cal: 280, p: 12.0, c: 32.0, f: 10.0 },
      "burger (veg)": { baseQty: 1, unit: "pc", cal: 290, p: 9.0, c: 38.0, f: 11.0 },
      "burger (chicken)": { baseQty: 1, unit: "pc", cal: 350, p: 22.0, c: 36.0, f: 13.0 },
      "french fries": { baseQty: 100, unit: "g", cal: 312, p: 3.4, c: 41.0, f: 15.0 },
      // Extra Indian and Kolkata Street Foods
      "egg roll": { baseQty: 1, unit: "roll", cal: 320, p: 9.5, c: 38.0, f: 14.5 },
      "kolkata egg roll": { baseQty: 1, unit: "roll", cal: 320, p: 9.5, c: 38.0, f: 14.5 },
      "double egg roll": { baseQty: 1, unit: "roll", cal: 410, p: 15.0, c: 38.0, f: 20.0 },
      "chicken roll": { baseQty: 1, unit: "roll", cal: 360, p: 18.0, c: 36.0, f: 16.0 },
      "chicken egg roll": { baseQty: 1, unit: "roll", cal: 450, p: 22.0, c: 40.0, f: 22.0 },
      "puchka": { baseQty: 5, unit: "pcs", cal: 150, p: 2.5, c: 24.0, f: 4.5 },
      "pani puri": { baseQty: 5, unit: "pcs", cal: 150, p: 2.5, c: 24.0, f: 4.5 },
      "luchi": { baseQty: 2, unit: "pcs", cal: 180, p: 3.5, c: 24.0, f: 8.0 },
      "alur dom": { baseQty: 100, unit: "g", cal: 120, p: 2.0, c: 18.0, f: 5.0 },
      "chapatis": { baseQty: 2, unit: "pcs", cal: 160, p: 6.0, c: 32.0, f: 1.0 },
      "paratha": { baseQty: 1, unit: "pc", cal: 260, p: 4.5, c: 38.0, f: 10.0 },
      "white rice": { baseQty: 150, unit: "g", cal: 195, p: 4.0, c: 42.0, f: 0.5 },
      "chicken curry": { baseQty: 150, unit: "g", cal: 240, p: 22.0, c: 6.0, f: 14.0 },
      "fish curry": { baseQty: 150, unit: "g", cal: 180, p: 18.0, c: 5.0, f: 9.0 },
      "upma": { baseQty: 150, unit: "g", cal: 210, p: 4.0, c: 36.0, f: 5.0 },
      "poha": { baseQty: 100, unit: "g", cal: 180, p: 3.5, c: 36.0, f: 2.5 },
      "dhokla": { baseQty: 2, unit: "pcs", cal: 150, p: 5.0, c: 26.0, f: 3.0 },
      "samosas": { baseQty: 2, unit: "pcs", cal: 520, p: 7.0, c: 64.0, f: 26.0 },
      "mutton curry": { baseQty: 150, unit: "g", cal: 310, p: 24.0, c: 5.0, f: 21.0 },
      "dal fry": { baseQty: 150, unit: "ml", cal: 140, p: 7.0, c: 20.0, f: 4.0 },
      "jeera rice": { baseQty: 150, unit: "g", cal: 210, p: 3.5, c: 44.0, f: 2.0 },
      "kathi roll": { baseQty: 1, unit: "roll", cal: 360, p: 16.0, c: 38.0, f: 16.0 },
      "mochar chop": { baseQty: 2, unit: "pcs", cal: 180, p: 4.0, c: 22.0, f: 8.5 },
      "ghugni": { baseQty: 150, unit: "g", cal: 160, p: 7.5, c: 24.0, f: 4.0 },
      "rasgulla": { baseQty: 1, unit: "pc", cal: 120, p: 2.0, c: 26.0, f: 1.0 },
      "sandesh": { baseQty: 1, unit: "pc", cal: 80, p: 2.5, c: 11.0, f: 3.0 }
    };

    let compiledDirectory = {};
    
    function compileFoodsDirectory() {
      compiledDirectory = { ...COMMON_FOODS_DIRECTORY };
      
      // Traverse DIET_DATABASE
      Object.keys(DIET_DATABASE).forEach(cCode => {
        const country = DIET_DATABASE[cCode];
        Object.keys(country.meals).forEach(mKey => {
          const meal = country.meals[mKey];
          meal.options.forEach(opt => {
            opt.ingredients.forEach(ing => {
              const nameLower = ing.name.toLowerCase().trim();
              if (!compiledDirectory[nameLower]) {
                compiledDirectory[nameLower] = {
                  baseQty: ing.baseQty,
                  unit: ing.unit,
                  cal: ing.cal,
                  p: ing.p,
                  c: ing.c,
                  f: ing.f,
                  micros: ing.micros || {}
                };
              }
            });
          });
        });
      });
    }

    

    

    let activeDietPlan = [];
    let targetCaloriesVar = 2000;
    let targetPVar = 100;
    let targetCVar = 250;
    let targetFVar = 65;

    

    const citiesMap = {
      IN: [
        { id: 'mumbai', name: 'Mumbai', tz: 'IST (UTC+5:30)', habits: 'Dinner is typically eaten late (8:30 PM - 9:30 PM). Vegetarian-friendly, rice & lentil-heavy meals are standard daily mainstays.', timings: { breakfast: '08:30 AM', snack1: '11:00 AM', lunch: '01:30 PM', snack2: '05:30 PM', dinner: '09:30 PM', bedtime: '11:00 PM' } },
        { id: 'delhi', name: 'Delhi', tz: 'IST (UTC+5:30)', habits: 'Hearty breakfasts. Rich wheat, dairy (paneer, ghee), and legume-heavy diet are local staples.', timings: { breakfast: '08:30 AM', snack1: '11:30 AM', lunch: '02:00 PM', snack2: '06:00 PM', dinner: '09:30 PM', bedtime: '11:00 PM' } },
        { id: 'bangalore', name: 'Bangalore', tz: 'IST (UTC+5:30)', habits: 'Southern breakfast (idli, dosa) timings are early. High rice and coconut usage.', timings: { breakfast: '07:30 AM', snack1: '10:30 AM', lunch: '01:00 PM', snack2: '05:00 PM', dinner: '08:30 PM', bedtime: '10:00 PM' } },
        { id: 'chennai', name: 'Chennai', tz: 'IST (UTC+5:30)', habits: 'Traditional rice-based meals, sambhar, rasam. Early dinners are culturally common.', timings: { breakfast: '07:30 AM', snack1: '10:30 AM', lunch: '01:00 PM', snack2: '05:00 PM', dinner: '08:00 PM', bedtime: '09:30 PM' } },
        { id: 'kolkata', name: 'Kolkata', tz: 'IST (UTC+5:30)', habits: 'Fish, rice, and mustard oil-centric diet. High carbohydrate culture.', timings: { breakfast: '08:00 AM', snack1: '11:00 AM', lunch: '01:30 PM', snack2: '05:30 PM', dinner: '09:00 PM', bedtime: '10:30 PM' } }
      ],
      US: [
        { id: 'new-york', name: 'New York', tz: 'EST (UTC-5)', habits: 'Fast-paced grab-and-go breakfast. Dinner is late due to long working hours.', timings: { breakfast: '08:00 AM', snack1: '10:30 AM', lunch: '01:00 PM', snack2: '04:30 PM', dinner: '08:00 PM', bedtime: '10:00 PM' } },
        { id: 'los-angeles', name: 'Los Angeles', tz: 'PST (UTC-8)', habits: 'Health-conscious, high-protein, organic food culture. Early light dinners.', timings: { breakfast: '07:00 AM', snack1: '10:00 AM', lunch: '12:30 PM', snack2: '04:00 PM', dinner: '06:30 PM', bedtime: '09:00 PM' } },
        { id: 'chicago', name: 'Chicago', tz: 'CST (UTC-6)', habits: 'Hearty midwestern portions. High protein, meat & potato diet, especially in winter.', timings: { breakfast: '07:30 AM', snack1: '10:00 AM', lunch: '12:30 PM', snack2: '04:00 PM', dinner: '07:00 PM', bedtime: '09:30 PM' } },
        { id: 'houston', name: 'Houston', tz: 'CST (UTC-6)', habits: 'Southern influence, beef-heavy, Tex-Mex-friendly local choices.', timings: { breakfast: '07:30 AM', snack1: '10:00 AM', lunch: '12:30 PM', snack2: '04:00 PM', dinner: '07:00 PM', bedtime: '09:30 PM' } },
        { id: 'san-francisco', name: 'San Francisco', tz: 'PST (UTC-8)', habits: 'Focus on fresh farm-to-table ingredients, seafood, and sourdough options.', timings: { breakfast: '07:00 AM', snack1: '10:00 AM', lunch: '12:30 PM', snack2: '04:00 PM', dinner: '06:30 PM', bedtime: '09:00 PM' } }
      ],
      UK: [
        { id: 'london', name: 'London', tz: 'GMT/BST (UTC+0/+1)', habits: 'Diverse international and classic British foods. Breakfast is often quick, lunch is a sandwich.', timings: { breakfast: '08:00 AM', snack1: '11:00 AM', lunch: '01:00 PM', snack2: '04:30 PM', dinner: '07:30 PM', bedtime: '10:00 PM' } },
        { id: 'birmingham', name: 'Birmingham', tz: 'GMT/BST (UTC+0/+1)', habits: 'Industrial influence, curry-culture blend (Balti). Dinner is a warm cooked meal.', timings: { breakfast: '07:45 AM', snack1: '10:30 AM', lunch: '12:45 PM', snack2: '04:15 PM', dinner: '07:15 PM', bedtime: '09:45 PM' } },
        { id: 'manchester', name: 'Manchester', tz: 'GMT/BST (UTC+0/+1)', habits: 'Hearty pub-inspired dinner choices, warm tea snacks are culturally central.', timings: { breakfast: '07:45 AM', snack1: '10:30 AM', lunch: '12:45 PM', snack2: '04:15 PM', dinner: '07:15 PM', bedtime: '09:45 PM' } },
        { id: 'edinburgh', name: 'Edinburgh', tz: 'GMT/BST (UTC+0/+1)', habits: 'Scottish oats breakfast. Root vegetables and local game/fish are common.', timings: { breakfast: '08:00 AM', snack1: '11:00 AM', lunch: '01:00 PM', snack2: '04:30 PM', dinner: '07:30 PM', bedtime: '10:00 PM' } },
        { id: 'cardiff', name: 'Cardiff', tz: 'GMT/BST (UTC+0/+1)', habits: 'Welsh cakes for snack. High seafood and lamb intake in meals.', timings: { breakfast: '07:45 AM', snack1: '10:45 AM', lunch: '01:00 PM', snack2: '04:30 PM', dinner: '07:30 PM', bedtime: '10:00 PM' } }
      ],
      AU: [
        { id: 'sydney', name: 'Sydney', tz: 'AEST (UTC+10)', habits: 'Early active mornings. Avocado toast, coffee-centric, fresh coastal seafood dinners.', timings: { breakfast: '06:30 AM', snack1: '09:30 AM', lunch: '12:30 PM', snack2: '03:30 PM', dinner: '06:30 PM', bedtime: '09:00 PM' } },
        { id: 'melbourne', name: 'Melbourne', tz: 'AEST (UTC+10)', habits: 'Strong cafe culture, brunch is popular. Mediterranean/Asian influence.', timings: { breakfast: '07:00 AM', snack1: '10:00 AM', lunch: '01:00 PM', snack2: '04:00 PM', dinner: '07:00 PM', bedtime: '09:30 PM' } },
        { id: 'brisbane', name: 'Brisbane', tz: 'AEST (UTC+10)', habits: 'Subtropical climate. Light, refreshing salads, grilled seafood, early dinners.', timings: { breakfast: '06:00 AM', snack1: '09:00 AM', lunch: '12:00 PM', snack2: '03:00 PM', dinner: '06:00 PM', bedtime: '08:30 PM' } },
        { id: 'perth', name: 'Perth', tz: 'AWST (UTC+8)', habits: 'Outdoor-focused lifestyle. Barbecue (grill) culture, high lean meats.', timings: { breakfast: '06:30 AM', snack1: '09:30 AM', lunch: '12:30 PM', snack2: '03:30 PM', dinner: '06:30 PM', bedtime: '09:00 PM' } },
        { id: 'adelaide', name: 'Adelaide', tz: 'ACST (UTC+9:30)', habits: 'Wine-region influence. Focus on fresh local produce, olive oil, and almonds.', timings: { breakfast: '07:00 AM', snack1: '10:00 AM', lunch: '01:00 PM', snack2: '04:00 PM', dinner: '07:00 PM', bedtime: '09:30 PM' } }
      ],
      JP: [
        { id: 'tokyo', name: 'Tokyo', tz: 'JST (UTC+9)', habits: 'Breakfast is eaten early. High consumption of fish, rice, tofu, and miso soup. Dinner is late.', timings: { breakfast: '07:00 AM', snack1: '10:00 AM', lunch: '12:00 PM', snack2: '03:30 PM', dinner: '08:30 PM', bedtime: '10:30 PM' } },
        { id: 'osaka', name: 'Osaka', tz: 'JST (UTC+9)', habits: 'Street food-heavy culture. Rice, dashi-based broths, and seafood are mainstays.', timings: { breakfast: '07:30 AM', snack1: '10:30 AM', lunch: '12:30 PM', snack2: '04:00 PM', dinner: '08:00 PM', bedtime: '10:00 PM' } },
        { id: 'kyoto', name: 'Kyoto', tz: 'JST (UTC+9)', habits: 'Traditional Kaiseki style. High vegetables, tofu, matcha, and clean broths.', timings: { breakfast: '07:30 AM', snack1: '10:30 AM', lunch: '12:30 PM', snack2: '04:00 PM', dinner: '07:30 PM', bedtime: '09:30 PM' } },
        { id: 'sapporo', name: 'Sapporo', tz: 'JST (UTC+9)', habits: 'Colder climate. High potato, corn, dairy, and miso-ramen styled ingredients.', timings: { breakfast: '07:00 AM', snack1: '10:00 AM', lunch: '12:00 PM', snack2: '03:30 PM', dinner: '07:30 PM', bedtime: '09:30 PM' } },
        { id: 'fukuoka', name: 'Fukuoka', tz: 'JST (UTC+9)', habits: 'Pork bone broths, ramen, grilled poultry, and local sea vegetables.', timings: { breakfast: '07:30 AM', snack1: '10:30 AM', lunch: '12:30 PM', snack2: '04:00 PM', dinner: '08:00 PM', bedtime: '10:00 PM' } }
      ],
      BR: [
        { id: 'sao-paulo', name: 'São Paulo', tz: 'BRT (UTC-3)', habits: 'Heavy pizza & Italian influence. Rice & beans at lunch is a standard daily staple.', timings: { breakfast: '07:30 AM', snack1: '10:30 AM', lunch: '01:00 PM', snack2: '04:30 PM', dinner: '08:30 PM', bedtime: '10:30 PM' } },
        { id: 'rio-de-janeiro', name: 'Rio de Janeiro', tz: 'BRT (UTC-3)', habits: 'Beach lifestyle. High juice bar culture, acai bowls, light seafood dinners.', timings: { breakfast: '08:00 AM', snack1: '11:00 AM', lunch: '01:30 PM', snack2: '05:00 PM', dinner: '08:00 PM', bedtime: '10:00 PM' } },
        { id: 'brasilia', name: 'Brasília', tz: 'BRT (UTC-3)', habits: 'Central plateau diet. High beef consumption, tapioca, and tropical fruits.', timings: { breakfast: '07:30 AM', snack1: '10:30 AM', lunch: '01:00 PM', snack2: '04:30 PM', dinner: '08:00 PM', bedtime: '10:00 PM' } },
        { id: 'salvador', name: 'Salvador', tz: 'BRT (UTC-3)', habits: 'Bahian cuisine: coconut milk, palm oil (dendê), and seafood stews.', timings: { breakfast: '07:00 AM', snack1: '10:00 AM', lunch: '12:30 PM', snack2: '04:00 PM', dinner: '07:30 PM', bedtime: '09:30 PM' } },
        { id: 'porto-alegre', name: 'Porto Alegre', tz: 'BRT (UTC-3)', habits: 'Churrasco (barbecue) culture. Extremely high beef and yerba mate (chimarrão) intake.', timings: { breakfast: '07:30 AM', snack1: '10:30 AM', lunch: '01:00 PM', snack2: '04:30 PM', dinner: '08:30 PM', bedtime: '10:30 PM' } }
      ],
      DE: [
        { id: 'berlin', name: 'Berlin', tz: 'CET/CEST (UTC+1/+2)', habits: 'Diverse vegan/vegetarian friendly culture. Döner/Currywurst local street adaptions.', timings: { breakfast: '07:30 AM', snack1: '10:30 AM', lunch: '12:30 PM', snack2: '04:00 PM', dinner: '07:30 PM', bedtime: '09:30 PM' } },
        { id: 'munich', name: 'Munich', tz: 'CET/CEST (UTC+1/+2)', habits: 'Hearty Bavarian breakfast (brezels), roast meats, cabbage. Early dinners.', timings: { breakfast: '07:00 AM', snack1: '10:00 AM', lunch: '12:00 PM', snack2: '03:30 PM', dinner: '07:00 PM', bedtime: '09:00 PM' } },
        { id: 'hamburg', name: 'Hamburg', tz: 'CET/CEST (UTC+1/+2)', habits: 'Northern port city. High herring, salmon, and seafood consumption.', timings: { breakfast: '07:30 AM', snack1: '10:30 AM', lunch: '12:30 PM', snack2: '04:00 PM', dinner: '07:30 PM', bedtime: '09:30 PM' } },
        { id: 'frankfurt', name: 'Frankfurt', tz: 'CET/CEST (UTC+1/+2)', habits: 'Central German breads, boiled eggs with green sauce (Grüne Soße).', timings: { breakfast: '07:30 AM', snack1: '10:30 AM', lunch: '12:30 PM', snack2: '04:00 PM', dinner: '07:30 PM', bedtime: '09:30 PM' } },
        { id: 'cologne', name: 'Cologne', tz: 'CET/CEST (UTC+1/+2)', habits: 'Rhenish dishes. Sauerbraten, rye rolls with cheese (Halve Hahn).', timings: { breakfast: '07:30 AM', snack1: '10:30 AM', lunch: '12:30 PM', snack2: '04:00 PM', dinner: '07:30 PM', bedtime: '09:30 PM' } }
      ],
      ZA: [
        { id: 'johannesburg', name: 'Johannesburg', tz: 'SAST (UTC+2)', habits: 'High meat diet (biltong, beef), maize meal (pap). Dinner is late.', timings: { breakfast: '07:00 AM', snack1: '10:00 AM', lunch: '01:00 PM', snack2: '04:00 PM', dinner: '08:00 PM', bedtime: '10:00 PM' } },
        { id: 'cape-town', name: 'Cape Town', tz: 'SAST (UTC+2)', habits: 'Coastal Mediterranean diet. Fresh snoek fish, vineyards produce, salads.', timings: { breakfast: '07:30 AM', snack1: '10:30 AM', lunch: '01:00 PM', snack2: '04:30 PM', dinner: '07:30 PM', bedtime: '09:30 PM' } },
        { id: 'durban', name: 'Durban', tz: 'SAST (UTC+2)', habits: 'Indian-durban curry culture (bunny chow style bread, lentils). Spicy foods.', timings: { breakfast: '07:00 AM', snack1: '10:00 AM', lunch: '01:00 PM', snack2: '04:00 PM', dinner: '07:30 PM', bedtime: '09:30 PM' } },
        { id: 'pretoria', name: 'Pretoria', tz: 'SAST (UTC+2)', habits: 'Traditional Afrikaner diet. High meat, stews (potjiekos), and root veggies.', timings: { breakfast: '07:00 AM', snack1: '10:00 AM', lunch: '01:00 PM', snack2: '04:00 PM', dinner: '07:30 PM', bedtime: '09:30 PM' } }
      ],
      AE: [
        { id: 'dubai', name: 'Dubai', tz: 'GST (UTC+4)', habits: 'Late dinners are common. High consumption of dates, lamb, rice, flatbreads.', timings: { breakfast: '08:00 AM', snack1: '11:00 AM', lunch: '02:00 PM', snack2: '05:30 PM', dinner: '09:30 PM', bedtime: '11:00 PM' } },
        { id: 'abu-dhabi', name: 'Abu Dhabi', tz: 'GST (UTC+4)', habits: 'Traditional Emirati dishes. Seafood is highly popular along with saffron rice.', timings: { breakfast: '08:00 AM', snack1: '11:00 AM', lunch: '02:00 PM', snack2: '05:30 PM', dinner: '09:00 PM', bedtime: '10:30 PM' } },
        { id: 'sharjah', name: 'Sharjah', tz: 'GST (UTC+4)', habits: 'Halal-focused local flatbreads, stews, dates, and cardamom-scented coffee.', timings: { breakfast: '08:00 AM', snack1: '11:00 AM', lunch: '01:30 PM', snack2: '05:30 PM', dinner: '09:00 PM', bedtime: '10:30 PM' } }
      ]
    };

    
    
    
    
    
    
    

    
// DIET_DATABASE replaced with external file reference
const DIET_DATABASE = window.DIET_DATABASE;
;

    function generateDietPlan(targetCalories, targetP, targetC, targetF, _goal) {
      const country = countrySelect.value;
      const cityId = citySelect.value;

      if (!country || !cityId) {
        dietEmptyState.classList.remove('hidden');
        dietActivePanel.classList.add('hidden');
        if (printDietBtn) printDietBtn.classList.add('hidden');
        if (resetDietBtn) resetDietBtn.classList.add('hidden');
        return;
      }

      dietEmptyState.classList.add('hidden');
      dietActivePanel.classList.remove('hidden');
      if (printDietBtn) printDietBtn.classList.remove('hidden');
      if (resetDietBtn) resetDietBtn.classList.remove('hidden');

      const cityInfo = citiesMap[country].find(c => c.id === cityId);
      if (cityInfo) {
        dietHabitsText.textContent = cityInfo.habits;
        dietTimezoneText.textContent = cityInfo.tz;
      }

      targetCaloriesVar = targetCalories;
      targetPVar = targetP;
      targetCVar = targetC;
      targetFVar = targetF;

      const mealWeights = { breakfast: 0.25, snack1: 0.10, lunch: 0.30, snack2: 0.10, dinner: 0.25 };
      const mealsKeys = ['breakfast', 'snack1', 'lunch', 'snack2', 'dinner'];

      const countryData = DIET_DATABASE[country];
      activeDietPlan = [];

      mealsKeys.forEach(mealKey => {
        if (!countryData || !countryData.meals[mealKey]) return;
        const mealSchedule = countryData.meals[mealKey];
        const options = mealSchedule.options;

        if (selectedSwaps[mealKey] === undefined || selectedSwaps[mealKey] >= options.length) {
          selectedSwaps[mealKey] = 0;
        }

        const activeOptIdx = selectedSwaps[mealKey];
        const activeOption = options[activeOptIdx];

        const baseCal = activeOption.ingredients.reduce((acc, ing) => acc + ing.cal, 0);
        const scale = (targetCalories * mealWeights[mealKey]) / baseCal;

        const mealTime = (cityInfo && cityInfo.timings && cityInfo.timings[mealKey])
          ? cityInfo.timings[mealKey]
          : mealSchedule.time;

        activeDietPlan.push({
          id: mealKey,
          key: mealKey,
          name: activeOption.name,
          time: mealTime,
          options: options,
          activeOptIdx: activeOptIdx,
          ingredients: activeOption.ingredients.map(ing => ({
            name: ing.name,
            qty: ing.baseQty * scale,
            unit: ing.unit,
            cal: ing.cal * scale,
            p: ing.p * scale,
            c: ing.c * scale,
            f: ing.f * scale,
            micros: Object.entries(ing.micros).map(([n, v]) => `${n}: ${(v * scale).toFixed(1)}`).join(', ')
          }))
        });
      });

      adjustDietPlanToTargets(targetCalories, targetP, targetC, targetF);

      renderActiveDietPlan(targetCaloriesVar, targetPVar, targetCVar, targetFVar);
    }

    function adjustDietPlanToTargets(_targetCalories, targetP, targetC, targetF) {
      const items = [];

      activeDietPlan.forEach(meal => {
        meal.ingredients.forEach(ing => {
          const baseFood = compiledDirectory[ing.name.toLowerCase().trim()];
          const baseQty = baseFood ? baseFood.baseQty : ing.qty;
          const baseCal = baseFood ? baseFood.cal : ing.cal;
          const baseP = baseFood ? baseFood.p : ing.p;
          const baseC = baseFood ? baseFood.c : ing.c;
          const baseF = baseFood ? baseFood.f : ing.f;

          const pCal = baseP * 4;
          const cCal = baseC * 4;
          const fCal = baseF * 9;

          let category = 'c';
          if (pCal > cCal && pCal > fCal) {
            category = 'p';
          } else if (fCal > pCal && fCal > cCal) {
            category = 'f';
          }

          items.push({
            ing,
            baseQty,
            baseCal,
            baseP,
            baseC,
            baseF,
            category
          });
        });
      });

      let scaleP = 1.0;
      let scaleC = 1.0;
      let scaleF = 1.0;

      for (let iter = 0; iter < 20; iter++) {
        let currentP = 0;
        let currentC = 0;
        let currentF = 0;

        items.forEach(item => {
          let s = 1.0;
          if (item.category === 'p') s = scaleP;
          else if (item.category === 'c') s = scaleC;
          else if (item.category === 'f') s = scaleF;

          currentP += item.baseP * s;
          currentC += item.baseC * s;
          currentF += item.baseF * s;
        });

        let sumBaseP_P = 0;
        items.forEach(item => {
          if (item.category === 'p') sumBaseP_P += item.baseP;
        });
        if (sumBaseP_P > 0) {
          const errorP = targetP - currentP;
          scaleP += errorP / sumBaseP_P;
          scaleP = Math.max(0.3, Math.min(3.0, scaleP));
        }

        currentP = 0; currentC = 0; currentF = 0;
        items.forEach(item => {
          let s = 1.0;
          if (item.category === 'p') s = scaleP;
          else if (item.category === 'c') s = scaleC;
          else if (item.category === 'f') s = scaleF;
          currentP += item.baseP * s;
          currentC += item.baseC * s;
          currentF += item.baseF * s;
        });

        let sumBaseC_C = 0;
        items.forEach(item => {
          if (item.category === 'c') sumBaseC_C += item.baseC;
        });
        if (sumBaseC_C > 0) {
          const errorC = targetC - currentC;
          scaleC += errorC / sumBaseC_C;
          scaleC = Math.max(0.3, Math.min(3.0, scaleC));
        }

        currentP = 0; currentC = 0; currentF = 0;
        items.forEach(item => {
          let s = 1.0;
          if (item.category === 'p') s = scaleP;
          else if (item.category === 'c') s = scaleC;
          else if (item.category === 'f') s = scaleF;
          currentP += item.baseP * s;
          currentC += item.baseC * s;
          currentF += item.baseF * s;
        });

        let sumBaseF_F = 0;
        items.forEach(item => {
          if (item.category === 'f') sumBaseF_F += item.baseF;
        });
        if (sumBaseF_F > 0) {
          const errorF = targetF - currentF;
          scaleF += errorF / sumBaseF_F;
          scaleF = Math.max(0.3, Math.min(3.0, scaleF));
        }
      }

      items.forEach(item => {
        let s = 1.0;
        if (item.category === 'p') s = scaleP;
        else if (item.category === 'c') s = scaleC;
        else if (item.category === 'f') s = scaleF;

        item.ing.qty = item.baseQty * s;
        item.ing.cal = item.baseCal * s;
        item.ing.p = item.baseP * s;
        item.ing.c = item.baseC * s;
        item.ing.f = item.baseF * s;

        const bFood = compiledDirectory[item.ing.name.toLowerCase().trim()];
        const baseMicros = bFood && bFood.micros ? bFood.micros : {};
        item.ing.micros = Object.entries(baseMicros).map(([n, v]) => `${n}: ${((v ) * s).toFixed(1)}`).join(', ');
      });
    }

    function getMealCategoryTitle(key, name) {
      if (key === 'breakfast') return 'Breakfast';
      if (key === 'snack1') return 'Mid-Morning Snack';
      if (key === 'lunch') return 'Lunch';
      if (key === 'snack2') return 'Evening Snack';
      if (key === 'dinner') return 'Dinner';
      if (key === 'bedtime') return 'Bedtime Snack';
      return name;
    }

    function renderActiveDietPlan(targetCalories, targetP, targetC, targetF) {
      mealsTimelineContainer.innerHTML = '';

      let actualCal = 0;
      let actualP = 0;
      let actualC = 0;
      let actualF = 0;
      const actualMicros = {};

      activeDietPlan.forEach((meal, mealIdx) => {
        const mealCal = meal.ingredients.reduce((sum, ing) => sum + ing.cal, 0);
        const mealP = meal.ingredients.reduce((sum, ing) => sum + ing.p, 0);
        const mealC = meal.ingredients.reduce((sum, ing) => sum + ing.c, 0);
        const mealF = meal.ingredients.reduce((sum, ing) => sum + ing.f, 0);

        actualCal += mealCal;
        actualP += mealP;
        actualC += mealC;
        actualF += mealF;

        meal.ingredients.forEach(ing => {
          if (ing.micros) {
            const microTokens = ing.micros.split(', ');
            microTokens.forEach(tok => {
              const parts = tok.split(': ');
              if (parts.length === 2) {
                const name = parts[0].trim();
                const val = parts[1].trim();
                const numVal = parseFloat(val);
                if (actualMicros[name]) {
                  actualMicros[name] += numVal;
                } else {
                  actualMicros[name] = numVal;
                }
              }
            });
          }
        });

        const card = document.createElement('div');
        card.className = 'meal-card';

        const headerDiv = document.createElement('div');
        headerDiv.className = 'meal-card-header';

        const categoryTitle = getMealCategoryTitle(meal.key, meal.name);

        const metaDiv = document.createElement('div');
        metaDiv.className = 'meal-meta';
        
        const numSpan = document.createElement('span');
        numSpan.className = 'meal-num';
        numSpan.textContent = `MEAL 0${mealIdx + 1}`;
        
        const titleH4 = document.createElement('h4');
        titleH4.className = 'meal-title';
        titleH4.innerHTML = `
          <span>${categoryTitle}</span>
          <button class="delete-meal-btn" data-id="${meal.id}" title="Delete Meal">✕</button>
        `;

        metaDiv.appendChild(numSpan);
        metaDiv.appendChild(titleH4);

        if (!meal.key.startsWith('custom')) {
          const recipeSub = document.createElement('span');
          recipeSub.className = 'meal-recipe-sub';
          recipeSub.textContent = `Recipe: ${meal.name}`;
          metaDiv.appendChild(recipeSub);
        }

        const timeDiv = document.createElement('div');
        timeDiv.className = 'meal-time-wrap';
        timeDiv.innerHTML = `
          <span class="meal-time">${meal.time}</span>
          <span class="meal-timezone">local time</span>
        `;

        headerDiv.appendChild(metaDiv);
        headerDiv.appendChild(timeDiv);
        card.appendChild(headerDiv);

        const ingList = document.createElement('div');
        ingList.className = 'meal-ingredients';

        meal.ingredients.forEach((ing, ingIdx) => {
          const row = document.createElement('div');
          row.className = 'ing-row';

          const nameWrap = document.createElement('div');
          nameWrap.className = 'ing-name-wrap';
          nameWrap.innerHTML = `
            <button class="delete-ing-btn" data-meal-id="${meal.id}" data-ing-idx="${ingIdx}" title="Remove Food">✕</button>
            <span>${ing.name}</span>
          `;

          const qtyWrap = document.createElement('div');
          qtyWrap.className = 'ing-qty-wrap';

          const qtyInput = document.createElement('input');
          qtyInput.type = 'number';
          qtyInput.value = Math.round(ing.qty).toString();
          qtyInput.className = 'ing-qty-input';
          qtyInput.addEventListener('change', (e) => {
            const newQty = parseFloat((e.target ).value);
            if (newQty > 0) {
              const ratio = newQty / ing.qty;
              ing.qty = newQty;
              ing.cal *= ratio;
              ing.p *= ratio;
              ing.c *= ratio;
              ing.f *= ratio;
              if (ing.micros) {
                ing.micros = ing.micros.split(', ').map(tok => {
                  const parts = tok.split(': ');
                  if (parts.length === 2) {
                    const name = parts[0];
                    const val = parseFloat(parts[1]) * ratio;
                    return `${name}: ${val.toFixed(1)}`;
                  }
                  return tok;
                }).join(', ');
              }
              renderActiveDietPlan(targetCalories, targetP, targetC, targetF);
            }
          });

          const unitSpan = document.createElement('span');
          unitSpan.className = 'ing-unit';
          unitSpan.textContent = ing.unit;

          const calSpan = document.createElement('span');
          calSpan.className = 'ing-cal';
          calSpan.textContent = `${Math.round(ing.cal)} kcal`;

          qtyWrap.appendChild(qtyInput);
          qtyWrap.appendChild(unitSpan);
          qtyWrap.appendChild(calSpan);

          row.appendChild(nameWrap);
          row.appendChild(qtyWrap);
          ingList.appendChild(row);
        });
        card.appendChild(ingList);

        const formContainer = document.createElement('div');
        formContainer.style.marginTop = '4px';

        const addFoodBtn = document.createElement('button');
        addFoodBtn.style.width = '100%';
        addFoodBtn.style.padding = '6px 0';
        addFoodBtn.style.border = '1px dashed var(--color-hairline)';
        addFoodBtn.style.borderRadius = '8px';
        addFoodBtn.style.fontSize = '10px';
        addFoodBtn.style.fontFamily = 'var(--font-mono)';
        addFoodBtn.style.color = 'var(--color-mute)';
        addFoodBtn.style.cursor = 'pointer';
        addFoodBtn.textContent = '+ Add Food Item';

        const inlineForm = document.createElement('div');
        inlineForm.className = 'hidden';
        inlineForm.style.border = '1px solid var(--color-hairline)';
        inlineForm.style.borderRadius = '8px';
        inlineForm.style.padding = '8px';
        inlineForm.style.backgroundColor = 'var(--color-canvas)';
        inlineForm.style.marginTop = '6px';
        inlineForm.style.display = 'flex';
        inlineForm.style.flexDirection = 'column';
        inlineForm.style.gap = '6px';
        
        inlineForm.innerHTML = `
          <div style="position: relative; width: 100%;">
            <input type="text" placeholder="Food Name" class="food-name" style="width:100%; height:32px; padding:0 8px; border:1px solid var(--color-hairline); border-radius:6px; background-color:var(--color-surface); color:var(--color-ink); outline:none; font-size:11px;" autocomplete="off" />
            <div class="suggestions-dropdown hidden" style="position:absolute; left:0; right:0; top:100%; margin-top:2px; bg-color:var(--color-surface); border:1px solid var(--color-hairline); border-radius:6px; box-shadow:var(--shadow-md); z-index:50; max-height:160px; overflow-y:auto; background:var(--color-surface); font-size:11px;"></div>
          </div>
          <div style="display:grid; grid-template-cols: 1fr 1fr; gap:6px;">
            <input type="number" placeholder="Qty" class="food-qty" style="width:100%; height:32px; padding:0 8px; border:1px solid var(--color-hairline); border-radius:6px; background-color:var(--color-surface); color:var(--color-ink); outline:none; font-size:11px;" />
            <input type="text" placeholder="Unit" class="food-unit" style="width:100%; height:32px; padding:0 8px; border:1px solid var(--color-hairline); border-radius:6px; background-color:var(--color-surface); color:var(--color-ink); outline:none; font-size:11px;" value="g" />
          </div>
          <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:4px; font-family:var(--font-mono); font-size:9px;">
            <input type="number" placeholder="Kcal" class="food-cal" style="width:100%; height:32px; padding:0 4px; border:1px solid var(--color-hairline); border-radius:6px; background-color:var(--color-surface); color:var(--color-ink); outline:none; text-align:center;" />
            <input type="number" placeholder="P(g)" class="food-p" style="width:100%; height:32px; padding:0 4px; border:1px solid var(--color-hairline); border-radius:6px; background-color:var(--color-surface); color:var(--color-ink); outline:none; text-align:center;" />
            <input type="number" placeholder="C(g)" class="food-c" style="width:100%; height:32px; padding:0 4px; border:1px solid var(--color-hairline); border-radius:6px; background-color:var(--color-surface); color:var(--color-ink); outline:none; text-align:center;" />
            <input type="number" placeholder="F(g)" class="food-f" style="width:100%; height:32px; padding:0 4px; border:1px solid var(--color-hairline); border-radius:6px; background-color:var(--color-surface); color:var(--color-ink); outline:none; text-align:center;" />
          </div>
          <div style="display:flex; gap:6px; justify-content:flex-end;">
            <button class="cancel-add-btn" style="padding:4px 8px; border:1px solid var(--color-hairline); border-radius:6px; font-size:10px; cursor:pointer;">Cancel</button>
            <button class="save-food-btn" style="padding:4px 8px; background-color:var(--color-link); color:white; border-radius:6px; font-size:10px; font-weight:600; cursor:pointer;">Save</button>
          </div>
        `;

        const nameInput = inlineForm.querySelector('.food-name') ;
        const dropdown = inlineForm.querySelector('.suggestions-dropdown') ;
        const qtyInput2 = inlineForm.querySelector('.food-qty') ;
        const unitInput = inlineForm.querySelector('.food-unit') ;
        const calInput = inlineForm.querySelector('.food-cal') ;
        const pInput = inlineForm.querySelector('.food-p') ;
        const cInput = inlineForm.querySelector('.food-c') ;
        const fInput = inlineForm.querySelector('.food-f') ;

        nameInput.addEventListener('input', () => {
          const nameVal = nameInput.value.trim().toLowerCase();
          dropdown.innerHTML = '';
          
          if (nameVal.length < 2) {
            dropdown.classList.add('hidden');
            return;
          }

          const matches = Object.keys(compiledDirectory).filter(key => key.includes(nameVal)).slice(0, 6);

          if (matches.length === 0) {
            dropdown.classList.add('hidden');
            return;
          }

          dropdown.classList.remove('hidden');
          matches.forEach(matchKey => {
            const item = document.createElement('div');
            item.style.padding = '6px 10px';
            item.style.borderBottom = '1px solid var(--color-hairline)';
            item.style.cursor = 'pointer';
            item.style.textAlign = 'left';
            
            const capitalized = matchKey.replace(/\b\w/g, c => c.toUpperCase());
            item.textContent = capitalized;

            item.addEventListener('click', () => {
              nameInput.value = capitalized;
              dropdown.classList.add('hidden');

              const matchedFood = compiledDirectory[matchKey];
              if (matchedFood) {
                unitInput.value = matchedFood.unit;
                qtyInput2.value = matchedFood.baseQty.toString();
                calInput.value = Math.round(matchedFood.cal).toString();
                pInput.value = (Math.round(matchedFood.p * 10) / 10).toString();
                cInput.value = (Math.round(matchedFood.c * 10) / 10).toString();
                fInput.value = (Math.round(matchedFood.f * 10) / 10).toString();
              }
            });
            dropdown.appendChild(item);
          });
        });

        nameInput.addEventListener('change', () => {
          const nameVal = nameInput.value.trim().toLowerCase();
          const matchedFood = compiledDirectory[nameVal];
          if (matchedFood) {
            unitInput.value = matchedFood.unit;
            qtyInput2.value = matchedFood.baseQty.toString();
            calInput.value = Math.round(matchedFood.cal).toString();
            pInput.value = (Math.round(matchedFood.p * 10) / 10).toString();
            cInput.value = (Math.round(matchedFood.c * 10) / 10).toString();
            fInput.value = (Math.round(matchedFood.f * 10) / 10).toString();
          }
        });

        qtyInput2.addEventListener('input', () => {
          const nameVal = nameInput.value.trim().toLowerCase();
          const matchedFood = compiledDirectory[nameVal];
          const newQty = parseFloat(qtyInput2.value) || 0;
          if (matchedFood && newQty > 0) {
            const ratio = newQty / matchedFood.baseQty;
            calInput.value = Math.round(matchedFood.cal * ratio).toString();
            pInput.value = (Math.round(matchedFood.p * ratio * 10) / 10).toString();
            cInput.value = (Math.round(matchedFood.c * ratio * 10) / 10).toString();
            fInput.value = (Math.round(matchedFood.f * ratio * 10) / 10).toString();
          }
        });

        addFoodBtn.addEventListener('click', () => {
          inlineForm.classList.remove('hidden');
          addFoodBtn.classList.add('hidden');
        });

        inlineForm.querySelector('.cancel-add-btn')?.addEventListener('click', () => {
          inlineForm.classList.add('hidden');
          addFoodBtn.classList.remove('hidden');
        });

        document.addEventListener('click', (e) => {
          if (!inlineForm.contains(e.target )) {
            dropdown.classList.add('hidden');
          }
        });

        inlineForm.querySelector('.save-food-btn')?.addEventListener('click', () => {
          const nameVal = (inlineForm.querySelector('.food-name') ).value;
          const qtyVal = parseFloat((inlineForm.querySelector('.food-qty') ).value) || 100;
          const unitVal = (inlineForm.querySelector('.food-unit') ).value || 'g';
          const calVal = parseFloat((inlineForm.querySelector('.food-cal') ).value) || 0;
          const pVal = parseFloat((inlineForm.querySelector('.food-p') ).value) || 0;
          const cVal = parseFloat((inlineForm.querySelector('.food-c') ).value) || 0;
          const fVal = parseFloat((inlineForm.querySelector('.food-f') ).value) || 0;

          if (nameVal) {
            meal.ingredients.push({
              name: nameVal,
              qty: qtyVal,
              unit: unitVal,
              cal: calVal,
              p: pVal,
              c: cVal,
              f: fVal,
              micros: ''
            });
            renderActiveDietPlan(targetCalories, targetP, targetC, targetF);
          }
        });

        formContainer.appendChild(addFoodBtn);
        formContainer.appendChild(inlineForm);
        card.appendChild(formContainer);

        const footerDiv = document.createElement('div');
        footerDiv.className = 'meal-footer';

        const macroSummary = document.createElement('div');
        macroSummary.className = 'meal-macro-sum';
        macroSummary.innerHTML = `
          <span class="macro-badge cal">${Math.round(mealCal)} kcal</span>
          <span class="macro-badge carb">C: ${Math.round(mealC)}g</span>
          <span class="macro-badge prot">P: ${Math.round(mealP)}g</span>
          <span class="macro-badge fat">F: ${Math.round(mealF)}g</span>
        `;
        footerDiv.appendChild(macroSummary);

        if (meal.options && meal.options.length > 1) {
          const btnRow = document.createElement('div');
          btnRow.className = 'meal-swap-row';

          const dietPref = dietaryPreferenceSelect.value;

          meal.options.forEach((opt, optIdx) => {
            if (dietPref === 'veg' && opt.type === 'non-veg') return;

            const btn = document.createElement('button');
            btn.className = 'meal-swap-btn';
            
            if (optIdx === meal.activeOptIdx) {
              btn.style.borderColor = 'var(--color-link)';
              btn.style.color = 'var(--color-link)';
              btn.style.fontWeight = '600';
            }
            btn.textContent = opt.name.split(' & ')[0].split(', ')[0];
            btn.title = opt.name;

            btn.addEventListener('click', () => {
              selectedSwaps[meal.key] = optIdx;
              generateDietPlan(targetCalories, targetP, targetC, targetF, goalSelect.value);
            });
            btnRow.appendChild(btn);
          });

          footerDiv.appendChild(btnRow);
        }
        card.appendChild(footerDiv);

        mealsTimelineContainer.appendChild(card);
      });
        
        // Handle Ingredient Deletion Event delegation
      document.querySelectorAll('.delete-ing-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const mealId = (e.currentTarget ).dataset.mealId;
          const ingIdx = parseInt((e.currentTarget ).dataset.ingIdx || '0');
          activeDietPlan.forEach(m => {
            if (m.id === mealId) {
              m.ingredients.splice(ingIdx, 1);
            }
          });
          renderActiveDietPlan(targetCalories, targetP, targetC, targetF);
        });
      });

      // Handle Meal Deletion Event delegation
      document.querySelectorAll('.delete-meal-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const mealId = (e.currentTarget ).dataset.id;
          activeDietPlan = activeDietPlan.filter(m => m.id !== mealId);
          renderActiveDietPlan(targetCalories, targetP, targetC, targetF);
        });
      });

      // Render summary panel
      summaryTargetCal.textContent = `${Math.round(targetCalories).toLocaleString()} kcal`;
      summaryActualCal.textContent = `${Math.round(actualCal).toLocaleString()} kcal`;
      const diffCal = Math.round(actualCal - targetCalories);
      summaryDiffCal.textContent = `${diffCal > 0 ? '+' : ''}${diffCal} kcal`;
      summaryDiffCal.className = `py-2 text-right font-mono text-xs font-semibold ${Math.abs(diffCal) <= 50 ? 'text-success' : 'text-warning'}`;

      summaryTargetProt.textContent = `${Math.round(targetP)} g`;
      summaryActualProt.textContent = `${Math.round(actualP)} g`;
      const diffProt = Math.round(actualP - targetP);
      summaryDiffProt.textContent = `${diffProt > 0 ? '+' : ''}${diffProt} g`;
      summaryDiffProt.className = `py-2 text-right font-mono text-xs font-semibold ${Math.abs(diffProt) <= 5 ? 'text-success' : 'text-warning'}`;

      summaryTargetCarb.textContent = `${Math.round(targetC)} g`;
      summaryActualCarb.textContent = `${Math.round(actualC)} g`;
      const diffCarb = Math.round(actualC - targetC);
      summaryDiffCarb.textContent = `${diffCarb > 0 ? '+' : ''}${diffCarb} g`;
      summaryDiffCarb.className = `py-2 text-right font-mono text-xs font-semibold ${Math.abs(diffCarb) <= 10 ? 'text-success' : 'text-warning'}`;

      summaryTargetFat.textContent = `${Math.round(targetF)} g`;
      summaryActualFat.textContent = `${Math.round(actualF)} g`;
      const diffFat = Math.round(actualF - targetF);
      summaryDiffFat.textContent = `${diffFat > 0 ? '+' : ''}${diffFat} g`;
      summaryDiffFat.className = `py-2 text-right font-mono text-xs font-semibold ${Math.abs(diffFat) <= 5 ? 'text-success' : 'text-warning'}`;

      const isMatch = Math.abs(diffCal) <= 100 && Math.abs(diffProt) <= 10 && Math.abs(diffCarb) <= 15 && Math.abs(diffFat) <= 8;
      if (isMatch) {
        nutritionalMatchBadge.className = 'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium font-mono bg-success/10 text-success border border-success/20';
        nutritionalMatchBadge.innerHTML = '<span>✓</span> Daily requirements met (±5%)';
      } else {
        nutritionalMatchBadge.className = 'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium font-mono bg-warning/10 text-warning border border-warning/20';
        nutritionalMatchBadge.innerHTML = '<span>!</span> Daily requirements customized';
      }

      // Render total micros list
      summaryMicrosList.innerHTML = '';
      Object.entries(actualMicros).forEach(([name, val]) => {
        const div = document.createElement('div');
        div.className = 'flex justify-between border-b border-hairline/45 pb-1';
        const cleanName = name.replace(' (mg)','').replace(' (mcg)','').replace(' (g)','');
        const unit = name.includes('mg') ? 'mg' : name.includes('mcg') ? 'mcg' : 'g';
        div.innerHTML = `<span>${cleanName}:</span><span class="font-semibold text-ink">${Math.round(val * 10) / 10} ${unit}</span>`;
        summaryMicrosList.appendChild(div);
      });
    }

    function populateCities() {
      const country = countrySelect.value;
      citySelect.innerHTML = '';
      
      if (!country || !citiesMap[country]) {
        citySelect.disabled = true;
        const opt = document.createElement('option');
        opt.value = '';
        opt.disabled = true;
        opt.selected = true;
        opt.textContent = 'Select a country first';
        citySelect.appendChild(opt);
        return;
      }
      
      citySelect.disabled = false;
      
      citiesMap[country].forEach((city, idx) => {
        const opt = document.createElement('option');
        opt.value = city.id;
        opt.textContent = `${city.name} (${city.tz})`;
        if (idx === 0) {
          opt.selected = true;
        }
        citySelect.appendChild(opt);
      });
    }

    function resetSwaps(goal) {
      const country = countrySelect.value;
      if (!country || !DIET_DATABASE[country]) return;

      const dietPref = dietaryPreferenceSelect.value;
      const cityId = citySelect.value;

      let profile = 'balanced';
      if (goal === 'loss' || goal === 'fat-loss') {
        profile = 'high-protein';
      } else if (goal === 'gain' || goal === 'bodybuilding' || goal === 'lean-mass') {
        profile = 'surplus';
      }

      const countryData = DIET_DATABASE[country];
      const mealsKeys = ['breakfast', 'snack1', 'lunch', 'snack2', 'dinner', 'bedtime'];
      
      mealsKeys.forEach(mealKey => {
        const mealSchedule = countryData.meals[mealKey];
        if (mealSchedule) {
          const options = mealSchedule.options;
          const hasNonVeg = options.some(opt => opt.type === 'non-veg');
          
          let bestIdx = 0;
          let bestScore = -9999;
          
          options.forEach((opt, idx) => {
            let score = 0;
            
            // 1. Dietary Preference restriction
            if (dietPref === 'veg') {
              if (opt.type === 'non-veg') {
                score -= 1000; // Disqualify non-veg for vegetarians
              } else {
                score += 10;
              }
            } else {
              if (hasNonVeg && opt.type === 'veg') {
                score -= 1000; // Disqualify veg for non-vegetarians if non-veg alternatives exist
              } else {
                score += 10;
              }
            }
            
            // 2. Goal Profile match
            if (opt.profile === profile) {
              score += 20;
            }
            
            // 3. City representation match
            if (opt.cities) {
              if (opt.cities.includes(cityId)) {
                score += 30; // Highly preferred for this city!
              } else {
                score -= 5;  // De-prioritize for other cities if it's tagged for a specific city
              }
            }
            
            if (score > bestScore) {
              bestScore = score;
              bestIdx = idx;
            }
          });
          if (bestIdx !== -1) {
            selectedSwaps[mealKey] = bestIdx;
          } else {
            selectedSwaps[mealKey] = 0;
          }
        }
      });
    }

      countrySelect.addEventListener('change', () => {
        populateCities();
      });

      citySelect.addEventListener('change', () => {
        // Wait for Calculate button click
      });

      goalSelect.addEventListener('change', () => {
        // Wait for Calculate button click
      });

      dietaryPreferenceSelect.addEventListener('change', () => {
        // Wait for Calculate button click
      });

      if (focusLocationBtn) focusLocationBtn.addEventListener('click', () => {
        countrySelect.focus();
        countrySelect.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
      
      if (printDietBtn) printDietBtn.addEventListener('click', () => {
        window.print();
      });

      if (resetDietBtn) resetDietBtn.addEventListener('click', () => {
        resetSwaps(goalSelect.value);
        calculate();
      });

      document.getElementById('add-custom-meal-btn')?.addEventListener('click', () => {
        activeDietPlan.push({
          id: Math.random().toString(36).substring(2, 9),
          key: 'custom-' + Date.now(),
          name: 'Custom Meal ' + (activeDietPlan.length + 1),
          time: '12:00 PM',
          ingredients: []
        });
        renderActiveDietPlan(targetCaloriesVar, targetPVar, targetCVar, targetFVar);
      });

      // Toggle unit containers
      heightUnit.addEventListener('change', () => {
        if (heightUnit.value === 'metric') {
          heightMetricContainer.classList.remove('hidden');
          heightImperialContainer.classList.add('hidden');
        } else {
          heightMetricContainer.classList.add('hidden');
          heightImperialContainer.classList.remove('hidden');
        }
        calculate();
      });

      weightUnit.addEventListener('change', () => {
        if (weightUnit.value === 'metric') {
          weightUnitLabel.textContent = 'kg';
          // Convert lbs to kg approximately for seamless UX
          const currentVal = parseFloat(weightInput.value);
          if (currentVal) {
            weightInput.value = Math.round(currentVal * 0.45359237).toString();
          }
        } else {
          weightUnitLabel.textContent = 'lbs';
          // Convert kg to lbs approximately for seamless UX
          const currentVal = parseFloat(weightInput.value);
          if (currentVal) {
            weightInput.value = Math.round(currentVal / 0.45359237).toString();
          }
        }
        calculate();
      });

      // Gender buttons segment controls toggle
      genderInputs.forEach(btn => {
        btn.addEventListener('click', () => {
          genderInputs.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          calculate();
        });
      });

      // Event listeners
      ageInput.addEventListener('input', () => {
        ageNumInput.value = ageInput.value;
      });

      ageNumInput.addEventListener('input', () => {
        let val = parseInt(ageNumInput.value) || 0;
        ageInput.value = Math.max(15, Math.min(80, val)).toString();
      });

      const clampAgeInput = () => {
        let val = parseInt(ageNumInput.value) || 28;
        if (val < 15) val = 15;
        if (val > 80) val = 80;
        ageNumInput.value = val.toString();
        ageInput.value = val.toString();
      };
      ageNumInput.addEventListener('blur', clampAgeInput);
      ageNumInput.addEventListener('change', clampAgeInput);

      calculateBtn.addEventListener('click', () => {
        resetSwaps(goalSelect.value);
        calculate();
      });

      function calculate() {
        // Gather inputs
        const gender = document.getElementById('health-gender-female').classList.contains('active') ? 'female' : 'male';
        const rawAge = parseInt(ageNumInput.value) || parseInt(ageInput.value) || 28;
        const age = Math.max(15, Math.min(80, rawAge));
        const activity = parseFloat(activitySelect.value);
        const goal = goalSelect.value;

        // 1. Get weight in kg
        let weightKg = parseFloat(weightInput.value) || 70;
        if (weightUnit.value === 'imperial') {
          weightKg = weightKg * 0.45359237;
        }

        // 2. Get height in cm
        let heightCm = 175;
        if (heightUnit.value === 'metric') {
          heightCm = parseFloat(heightCmInput.value) || 175;
        } else {
          const ft = parseFloat(heightFtInput.value) || 5;
          const inch = parseFloat(heightInInput.value) || 0;
          heightCm = (ft * 30.48) + (inch * 2.54);
        }

        // 3. Miffln-St Jeor equation
        let bmr = 0;
        if (gender === 'male') {
          bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5;
        } else {
          bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
        }

        const tdee = bmr * activity;

        // 4. Calculate caloric target based on goal
        let targetCalories = tdee;
        if (goal === 'loss') {
          targetCalories = Math.max(gender === 'female' ? 1200 : 1500, tdee - 500);
        } else if (goal === 'fat-loss') {
          targetCalories = Math.max(gender === 'female' ? 1200 : 1500, tdee - 500);
        } else if (goal === 'gain') {
          targetCalories = tdee + 500;
        } else if (goal === 'bodybuilding') {
          targetCalories = tdee + 400;
      } else if (goal === 'lean-mass') {
        targetCalories = tdee + 250;
      }

      // 5. Macro ratio mapping (Protein, Fat, Carbs)
      let p_pct = 20, f_pct = 30, c_pct = 50; // maintain default
      if (goal === 'loss') {
        p_pct = 30; f_pct = 30; c_pct = 40;
      } else if (goal === 'fat-loss') {
        p_pct = 35; f_pct = 25; c_pct = 40;
      } else if (goal === 'gain') {
        p_pct = 20; f_pct = 25; c_pct = 55;
      } else if (goal === 'bodybuilding') {
        p_pct = 30; f_pct = 25; c_pct = 45;
      } else if (goal === 'lean-mass') {
        p_pct = 30; f_pct = 25; c_pct = 45;
      }

      // Compute macro values
      const proteinCal = targetCalories * (p_pct / 100);
      const fatCal = targetCalories * (f_pct / 100);
      const carbsCal = targetCalories * (c_pct / 100);

      const proteinG = proteinCal / 4;
      const fatG = fatCal / 9;
      const carbsG = carbsCal / 4;

      // Display outputs
      bmrValue.textContent = `${Math.round(bmr).toLocaleString()} kcal`;
      tdeeValue.textContent = `${Math.round(tdee).toLocaleString()} kcal`;
      targetValue.textContent = `${Math.round(targetCalories).toLocaleString()} kcal`;
      centerCal.textContent = `${Math.round(targetCalories).toLocaleString()} kcal`;

      const goalLose = document.getElementById('health-goal-lose');
      const goalMaintain = document.getElementById('health-goal-maintain');
      const goalGain = document.getElementById('health-goal-gain');

      if (goalLose) goalLose.textContent = `${Math.round(Math.max(gender === 'female' ? 1200 : 1500, tdee - 500)).toLocaleString()} kcal`;
      if (goalMaintain) goalMaintain.textContent = `${Math.round(tdee).toLocaleString()} kcal`;
      if (goalGain) goalGain.textContent = `${Math.round(tdee + 500).toLocaleString()} kcal`;

      // BMI & Ideal Healthy Weight calculations
      const heightM = heightCm / 100;
      const bmi = weightKg / (heightM * heightM);
      const minWeightKg = 18.5 * (heightM * heightM);
      const maxWeightKg = 24.9 * (heightM * heightM);

      let bmiStatus = 'Normal';
      if (bmi < 18.5) {
        bmiStatus = 'Underweight';
      } else if (bmi >= 25 && bmi < 30) {
        bmiStatus = 'Overweight';
      } else if (bmi >= 30) {
        bmiStatus = 'Obese';
      }

      // Ideal Body Weight calculation (Devine Formula 1974)
      const heightInches = heightCm / 2.54;
      let ibwKg = 50.0;
      if (gender === 'male') {
        ibwKg = 50.0 + 2.3 * (heightInches - 60);
      } else {
        ibwKg = 45.5 + 2.3 * (heightInches - 60);
      }
      if (ibwKg < 35) ibwKg = 35;

      let targetWeightStr = '';
      let weightRangeStr = '';
      if (weightUnit.value === 'metric') {
        targetWeightStr = `${Math.round(ibwKg)} kg`;
        weightRangeStr = `${Math.round(minWeightKg)} - ${Math.round(maxWeightKg)} kg`;
      } else {
        const ibwLbs = ibwKg * 2.20462;
        targetWeightStr = `${Math.round(ibwLbs)} lbs`;
        const minLbs = minWeightKg * 2.20462;
        const maxLbs = maxWeightKg * 2.20462;
        weightRangeStr = `${Math.round(minLbs)} - ${Math.round(maxLbs)} lbs`;
      }

      bmiValue.textContent = `${bmi.toFixed(1)} (${bmiStatus})`;
      bmiSubtitle.textContent = `Target: ${targetWeightStr} (Range: ${weightRangeStr})`;

      carbPctLabel.textContent = `(${c_pct}%)`;
      carbGLbl.textContent = `${Math.round(carbsG)} g`;
      carbCalLbl.textContent = `${Math.round(carbsCal).toLocaleString()} kcal`;

      proteinPctLabel.textContent = `(${p_pct}%)`;
      proteinGLbl.textContent = `${Math.round(proteinG)} g`;
      proteinCalLbl.textContent = `${Math.round(proteinCal).toLocaleString()} kcal`;

      fatPctLabel.textContent = `(${f_pct}%)`;
      fatGLbl.textContent = `${Math.round(fatG)} g`;
      fatCalLbl.textContent = `${Math.round(fatCal).toLocaleString()} kcal`;

      // 6. Update Donut Chart
      // To align circles correctly we stack stroke-dashoffset:
      // Carbs: 50% (c_pct)
      // Protein: 30% (p_pct)
      // Fat: 20% (f_pct)
      
      const carbsStroke = CIRCUMFERENCE * (c_pct / 100);
      const proteinStroke = CIRCUMFERENCE * (p_pct / 100);
      const fatStroke = CIRCUMFERENCE * (f_pct / 100);

      // Dash arrays represent stroke-length, spacing
      donutCarbs.style.strokeDasharray = `${carbsStroke} ${CIRCUMFERENCE}`;
      donutProtein.style.strokeDasharray = `${proteinStroke} ${CIRCUMFERENCE}`;
      donutFat.style.strokeDasharray = `${fatStroke} ${CIRCUMFERENCE}`;

      // Dash offsets specify where strokes start
      donutCarbs.style.strokeDashoffset = '0';
      donutProtein.style.strokeDashoffset = (-carbsStroke).toString();
      donutFat.style.strokeDashoffset = (-(carbsStroke + proteinStroke)).toString();

      // Generate the location-specific diet plan
      generateDietPlan(targetCalories, proteinG, carbsG, fatG, goal);
    }

    // Populate suggestions directory
    compileFoodsDirectory();

    // Initial run
    populateCities();
    calculate();
  }

  // Handle page load
  initHealthCalculatorCombined();
  // Support Astro view transitions / fast loads
  document.addEventListener('astro:page-load', initHealthCalculatorCombined);


// 10. Risk Allocation & Portfolio Planner
function initRiskCalculatorCombined() {
  const ageInput = document.getElementById('risk-age-slider');
  const ageNum = document.getElementById('risk-age');
  const tenureSelect = document.getElementById('risk-tenure');
  const riskIndexLabel = document.getElementById('risk-index-label');

  const legendEquityPct = document.getElementById('legend-equity-pct');
  const legendGoldPct = document.getElementById('legend-gold-pct');
  const legendDebtPct = document.getElementById('legend-debt-pct');

  const donutEquity = document.getElementById('donut-equity');
  const donutGold = document.getElementById('donut-gold');
  const donutDebt = document.getElementById('donut-debt');

  const equityBreakdownCard = document.getElementById('equity-breakdown-card');
  const noEquityMessage = document.getElementById('no-equity-message');

  const donutStocks = document.getElementById('donut-stocks');
  const donutLargecap = document.getElementById('donut-largecap');
  const donutMidcap = document.getElementById('donut-midcap');
  const donutSmallcap = document.getElementById('donut-smallcap');
  const donutLiquid = document.getElementById('donut-liquid');
  const centerEquityTotal = document.getElementById('center-equity-total');

  const legendStocksPct = document.getElementById('legend-stocks-pct');
  const legendLargecapPct = document.getElementById('legend-largecap-pct');
  const legendMidcapPct = document.getElementById('legend-midcap-pct');
  const legendSmallcapPct = document.getElementById('legend-smallcap-pct');
  const legendLiquidPct = document.getElementById('legend-liquid-pct');

  const legendStocksSub = document.getElementById('legend-stocks-sub');
  const legendLargecapSub = document.getElementById('legend-largecap-sub');
  const legendMidcapSub = document.getElementById('legend-midcap-sub');
  const legendSmallcapSub = document.getElementById('legend-smallcap-sub');
  const legendLiquidSub = document.getElementById('legend-liquid-sub');

  const CIRCUMFERENCE = 314.16;

  const conBtn = document.getElementById('risk-lvl-con');
  const modBtn = document.getElementById('risk-lvl-mod');
  const aggBtn = document.getElementById('risk-lvl-agg');
  let riskAppetite = 'moderate'; 

  conBtn.addEventListener('click', () => {
    riskAppetite = 'conservative';
    conBtn.classList.add('active');
    modBtn.classList.remove('active');
    aggBtn.classList.remove('active');
    calculate();
  });

  modBtn.addEventListener('click', () => {
    riskAppetite = 'moderate';
    modBtn.classList.add('active');
    conBtn.classList.remove('active');
    aggBtn.classList.remove('active');
    calculate();
  });

  aggBtn.addEventListener('click', () => {
    riskAppetite = 'aggressive';
    aggBtn.classList.add('active');
    conBtn.classList.remove('active');
    modBtn.classList.remove('active');
    calculate();
  });

  ageInput.addEventListener('input', () => {
    ageNum.value = ageInput.value;
    calculate();
  });

  ageNum.addEventListener('input', () => {
    let val = parseInt(ageNum.value) || 0;
    ageInput.value = Math.max(18, Math.min(75, val)).toString();
    calculate();
  });

  const clampAgeInput = () => {
    let val = parseInt(ageNum.value) || 30;
    if (val < 18) val = 18;
    if (val > 75) val = 75;
    ageNum.value = val.toString();
    ageInput.value = val.toString();
    calculate();
  };
  ageNum.addEventListener('blur', clampAgeInput);
  ageNum.addEventListener('change', clampAgeInput);
  tenureSelect.addEventListener('change', calculate);

  function calculate() {
    const rawAge = parseInt(ageNum.value) || parseInt(ageInput.value) || 30;
    const age = Math.max(18, Math.min(75, rawAge));
    const tenure = tenureSelect.value;

    let equity = 0;
    let gold = 0;
    let debt = 0;

    if (tenure === '1y') {
      equity = 0;
      gold = 10;
      debt = 90;
    } else {
      let baseEquity = 0;
      if (tenure === '1-5y') {
        baseEquity = 35;
      } else if (tenure === '5-10y') {
        baseEquity = 70;
      } else {
        baseEquity = 90;
      }

      let multiplier = 1.0;
      if (age <= 30) {
        multiplier = 1.0;
      } else if (age <= 50) {
        multiplier = 1.0 - (age - 30) * 0.015;
      } else if (age <= 60) {
        multiplier = 0.70 - (age - 50) * 0.02;
      } else {
        multiplier = Math.max(0.15, 0.50 - (age - 60) * 0.01);
      }

      equity = Math.round(baseEquity * multiplier);
      
      if (riskAppetite === 'conservative') {
        equity = Math.max(10, equity - 20);
      } else if (riskAppetite === 'aggressive') {
        equity = Math.min(90, equity + 15);
      }

      if (equity > 50) {
        gold = 10;
      } else if (equity > 20) {
        gold = 15;
      } else {
        gold = 10;
      }
      debt = 100 - equity - gold;
    }

    let riskProfile = 'Moderate';
    if (tenure === '1y') {
      riskProfile = 'Capital Preservation Portfolio';
      riskIndexLabel.className = 'font-sans text-xs font-bold text-mute uppercase mt-1';
    } else if (equity >= 70) {
      riskProfile = 'Aggressive Growth Portfolio';
      riskIndexLabel.className = 'font-sans text-xs font-bold text-accent uppercase mt-1';
    } else if (equity >= 40) {
      riskProfile = 'Balanced Growth Portfolio';
      riskIndexLabel.className = 'font-sans text-xs font-bold text-link uppercase mt-1';
    } else {
      riskProfile = 'Conservative Income Portfolio';
      riskIndexLabel.className = 'font-sans text-xs font-bold text-warning uppercase mt-1';
    }
    riskIndexLabel.textContent = riskProfile;

    legendEquityPct.textContent = equity + '%';
    legendGoldPct.textContent = gold + '%';
    legendDebtPct.textContent = debt + '%';

    const eqStroke = CIRCUMFERENCE * (equity / 100);
    const goldStroke = CIRCUMFERENCE * (gold / 100);
    const debtStroke = CIRCUMFERENCE * (debt / 100);

    donutEquity.style.strokeDasharray = eqStroke + ' ' + CIRCUMFERENCE;
    donutGold.style.strokeDasharray = goldStroke + ' ' + CIRCUMFERENCE;
    donutDebt.style.strokeDasharray = debtStroke + ' ' + CIRCUMFERENCE;

    donutEquity.style.strokeDashoffset = '0';
    donutGold.style.strokeDashoffset = (-eqStroke).toString();
    donutDebt.style.strokeDashoffset = (-(eqStroke + goldStroke)).toString();

    if (equity === 0) {
      equityBreakdownCard.classList.add('hidden');
      noEquityMessage.classList.remove('hidden');
    } else {
      equityBreakdownCard.classList.remove('hidden');
      noEquityMessage.classList.add('hidden');

      let stocksPctOfEq = 0;
      let midcapPctOfEq = 0;
      let smallcapPctOfEq = 0;

      if (age <= 25) {
        stocksPctOfEq = 40;
      } else if (age < 65) {
        stocksPctOfEq = Math.round(40 - (age - 25) * 1.0);
      } else {
        stocksPctOfEq = 0;
      }

      const mfPctOfEq = 100 - stocksPctOfEq;

      if (age <= 25) {
        smallcapPctOfEq = 30;
      } else if (age < 55) {
        smallcapPctOfEq = Math.round(30 - (age - 25) * 1.0);
      } else {
        smallcapPctOfEq = 0;
      }

      if (age <= 25) {
        midcapPctOfEq = 30;
      } else if (age < 75) {
        midcapPctOfEq = Math.round(30 - (age - 25) * 0.5);
      } else {
        midcapPctOfEq = 5;
      }

      let debtMF = 0;
      let liquidMF = 0;
      if (age < 35) {
        debtMF = 0;
        liquidMF = 0;
      } else if (age <= 50) {
        debtMF = 5;
        liquidMF = 5;
      } else if (age <= 65) {
        debtMF = 15;
        liquidMF = 10;
      } else {
        debtMF = 25;
        liquidMF = 15;
      }

      const largecapMF = Math.max(0, 100 - smallcapPctOfEq - midcapPctOfEq - debtMF - liquidMF);
      const largecapOverallPct = Math.round((largecapMF / 100) * mfPctOfEq);
      const midcapOverallPct = Math.round((midcapPctOfEq / 100) * mfPctOfEq);
      const smallcapOverallPct = Math.round((smallcapPctOfEq / 100) * mfPctOfEq);
      const liquidOverallPct = Math.round(((debtMF + liquidMF) / 100) * mfPctOfEq);

      const currentSum = stocksPctOfEq + largecapOverallPct + midcapOverallPct + smallcapOverallPct + liquidOverallPct;
      const diff = 100 - currentSum;
      const finalLargecapPct = Math.max(0, largecapOverallPct + diff);

      function distributeValues(total, percentages) {
        let values = percentages.map(p => Math.round((p / 100) * total));
        let sum = values.reduce((a, b) => a + b, 0);
        let diff = total - sum;
        if (diff !== 0) {
          let sortedIndices = [...percentages.keys()].sort((a, b) => percentages[b] - percentages[a]);
          for (let idx of sortedIndices) {
            if (values[idx] + diff >= 0) {
              values[idx] += diff;
              break;
            }
          }
        }
        return values;
      }

      const subAllocations = distributeValues(equity, [
        stocksPctOfEq,
        finalLargecapPct,
        midcapOverallPct,
        smallcapOverallPct,
        liquidOverallPct
      ]);

      const stocksOverall = subAllocations[0];
      const largecapOverall = subAllocations[1];
      const midcapOverall = subAllocations[2];
      const smallcapOverall = subAllocations[3];
      const liquidOverall = subAllocations[4];

      legendStocksPct.textContent = stocksOverall + '%';
      if (legendStocksSub) legendStocksSub.textContent = stocksPctOfEq + '% of Eq';

      legendLargecapPct.textContent = largecapOverall + '%';
      if (legendLargecapSub) legendLargecapSub.textContent = finalLargecapPct + '% of Eq';

      legendMidcapPct.textContent = midcapOverall + '%';
      if (legendMidcapSub) legendMidcapSub.textContent = midcapOverallPct + '% of Eq';

      legendSmallcapPct.textContent = smallcapOverall + '%';
      if (legendSmallcapSub) legendSmallcapSub.textContent = smallcapOverallPct + '% of Eq';

      legendLiquidPct.textContent = liquidOverall + '%';
      if (legendLiquidSub) legendLiquidSub.textContent = (liquidMF + debtMF) + '% of Eq';

      centerEquityTotal.textContent = equity + '%';

      const stStroke = CIRCUMFERENCE * (stocksOverall / 100);
      const lgStroke = CIRCUMFERENCE * (largecapOverall / 100);
      const mdStroke = CIRCUMFERENCE * (midcapOverall / 100);
      const smStroke = CIRCUMFERENCE * (smallcapOverall / 100);
      const liqStroke = CIRCUMFERENCE * (liquidOverall / 100);

      donutStocks.style.strokeDasharray = stStroke + ' ' + CIRCUMFERENCE;
      donutLargecap.style.strokeDasharray = lgStroke + ' ' + CIRCUMFERENCE;
      donutMidcap.style.strokeDasharray = mdStroke + ' ' + CIRCUMFERENCE;
      donutSmallcap.style.strokeDasharray = smStroke + ' ' + CIRCUMFERENCE;
      donutLiquid.style.strokeDasharray = liqStroke + ' ' + CIRCUMFERENCE;

      donutStocks.style.strokeDashoffset = '0';
      donutLargecap.style.strokeDashoffset = (-stStroke).toString();
      donutMidcap.style.strokeDashoffset = (-(stStroke + lgStroke)).toString();
      donutSmallcap.style.strokeDasharray = smStroke + ' ' + CIRCUMFERENCE;
      donutLiquid.style.strokeDasharray = liqStroke + ' ' + CIRCUMFERENCE;

      donutStocks.style.strokeDashoffset = '0';
      donutLargecap.style.strokeDashoffset = (-stStroke).toString();
      donutMidcap.style.strokeDashoffset = (-(stStroke + lgStroke)).toString();
      donutSmallcap.style.strokeDashoffset = (-(stStroke + lgStroke + mdStroke)).toString();
      donutLiquid.style.strokeDashoffset = (-(stStroke + lgStroke + mdStroke + smStroke)).toString();
    }
  }

  window.addEventListener('resize', calculate);
  calculate();
}

// 11. Track Food & Nutrition Manager
let tfLoggedItemsByDate = {};
let tfSavedMeals = [];
let tfCategories = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];
let selectedTrackFoodDate = getTodayDateString();

let tfStagedAddItems = [];
let activeFoodItem = null;
let activeModalSavedMealId = null;

function getTodayDateString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const FOOD_DATABASE = {
  "oats": { name: "Oatmeal / Oats", baseQty: 100, unit: "g", cal: 389, prot: 16.9, carb: 66, fat: 6.9 },
  "chicken_breast": { name: "Chicken Breast (Cooked)", baseQty: 100, unit: "g", cal: 165, prot: 31, carb: 0, fat: 3.6 },
  "paneer": { name: "Paneer / Cottage Cheese", baseQty: 100, unit: "g", cal: 265, prot: 18.3, carb: 1.2, fat: 20.8 },
  "eggs": { name: "Whole Boiled Eggs (2 pcs)", baseQty: 100, unit: "g", cal: 143, prot: 12.6, carb: 0.7, fat: 9.5 },
  "egg_whites": { name: "Egg Whites (3 pcs)", baseQty: 100, unit: "g", cal: 52, prot: 11, carb: 0.7, fat: 0.2 },
  "rice": { name: "Cooked Rice (White/Brown)", baseQty: 100, unit: "g", cal: 130, prot: 2.7, carb: 28, fat: 0.3 },
  "roti": { name: "Roti / Chapati (2 pcs)", baseQty: 80, unit: "g", cal: 208, prot: 6.2, carb: 40, fat: 0.8 },
  "dal": { name: "Cooked Dal / Lentils", baseQty: 100, unit: "g", cal: 116, prot: 9, carb: 20, fat: 0.4 },
  "whey": { name: "Whey Protein Powder", baseQty: 30, unit: "g", cal: 120, prot: 24, carb: 2, fat: 1.5 },
  "greek_yogurt": { name: "Greek Yogurt / Dahi", baseQty: 100, unit: "g", cal: 59, prot: 10, carb: 3.6, fat: 0.4 },
  "milk": { name: "Whole Milk", baseQty: 100, unit: "ml", cal: 61, prot: 3.2, carb: 4.8, fat: 3.3 },
  "almonds": { name: "Almonds / Nuts", baseQty: 30, unit: "g", cal: 173, prot: 6.3, carb: 6.6, fat: 15 },
  "peanut_butter": { name: "Peanut Butter", baseQty: 32, unit: "g", cal: 188, prot: 8, carb: 6, fat: 16 },
  "banana": { name: "Banana (1 Medium)", baseQty: 100, unit: "g", cal: 89, prot: 1.1, carb: 23, fat: 0.3 },
  "apple": { name: "Apple (1 Medium)", baseQty: 100, unit: "g", cal: 52, prot: 0.3, carb: 14, fat: 0.2 },
  "sweet_potato": { name: "Sweet Potato (Boiled)", baseQty: 100, unit: "g", cal: 86, prot: 1.6, carb: 20, fat: 0.1 },
  "fish": { name: "Grilled Fish / Salmon", baseQty: 100, unit: "g", cal: 206, prot: 22, carb: 0, fat: 12 },
  "tofu": { name: "Tofu", baseQty: 100, unit: "g", cal: 76, prot: 8, carb: 1.9, fat: 4.8 },
  "poha": { name: "Cooked Poha", baseQty: 100, unit: "g", cal: 130, prot: 2.5, carb: 28, fat: 0.5 },
  "idli": { name: "Steamed Idli (2 pcs)", baseQty: 80, unit: "g", cal: 100, prot: 3, carb: 22, fat: 0.4 },
  "dosa": { name: "Plain Dosa (1 pc)", baseQty: 80, unit: "g", cal: 120, prot: 3, carb: 23, fat: 2.5 },
  "mixed_veg": { name: "Mixed Vegetables / Salad", baseQty: 100, unit: "g", cal: 34, prot: 2.8, carb: 7, fat: 0.4 },
  "olive_oil": { name: "Olive Oil / Butter", baseQty: 14, unit: "g", cal: 119, prot: 0, carb: 0, fat: 13.5 }
};

function initTrackFood() {
  loadTrackFoodData();
  initTrackFoodDateInput();
  populateCategorySelects();
  renderTrackFoodAll();
  renderTrackFoodInsights();
  renderTrackFoodSaved();
  render7DayTrendsChart();
  toggleTrackFoodAction('close');
}

function initTrackFoodDateInput() {
  const dateInput = document.getElementById('tf-log-date');
  if (dateInput) {
    dateInput.value = selectedTrackFoodDate;
  }
}

function setTrackFoodDateToday() {
  selectedTrackFoodDate = getTodayDateString();
  const dateInput = document.getElementById('tf-log-date');
  if (dateInput) dateInput.value = selectedTrackFoodDate;
  onTrackFoodDateChange();
}
window.setTrackFoodDateToday = setTrackFoodDateToday;

function onTrackFoodDateChange() {
  const dateInput = document.getElementById('tf-log-date');
  if (dateInput && dateInput.value) {
    selectedTrackFoodDate = dateInput.value;
  }
  renderTrackFoodAll();
  renderTrackFoodInsights();
  render7DayTrendsChart();
}
window.onTrackFoodDateChange = onTrackFoodDateChange;

function loadTrackFoodData() {
  try {
    const rawLoggedByDate = localStorage.getItem('tf_logged_items_by_date');
    if (rawLoggedByDate) {
      tfLoggedItemsByDate = JSON.parse(rawLoggedByDate);
    } else {
      const rawLegacy = localStorage.getItem('tf_logged_items');
      const legacyItems = rawLegacy ? JSON.parse(rawLegacy) : [
        { id: '1', category: 'Breakfast', name: 'Oatmeal & Milk with Berries', cal: 350, prot: 14, carb: 52, fat: 6 },
        { id: '2', category: 'Lunch', name: 'Grilled Chicken & Rice Bowl', cal: 520, prot: 45, carb: 48, fat: 12 }
      ];
      tfLoggedItemsByDate = {
        [selectedTrackFoodDate]: legacyItems
      };
      saveTrackFoodLogged();
    }

    const rawSaved = localStorage.getItem('tf_saved_meals');
    if (rawSaved) {
      tfSavedMeals = JSON.parse(rawSaved).filter(m => m.id !== 's1' && m.id !== 's2');
      saveTrackFoodSaved();
    } else {
      tfSavedMeals = [];
      saveTrackFoodSaved();
    }

    const rawCats = localStorage.getItem('tf_custom_categories');
    if (rawCats) {
      tfCategories = JSON.parse(rawCats);
    }
  } catch (e) {
    console.error('Error loading Track Food data:', e);
  }
}

function saveTrackFoodLogged() {
  localStorage.setItem('tf_logged_items_by_date', JSON.stringify(tfLoggedItemsByDate));
}

function saveTrackFoodSaved() {
  localStorage.setItem('tf_saved_meals', JSON.stringify(tfSavedMeals));
}

function saveTrackFoodCategories() {
  localStorage.setItem('tf_custom_categories', JSON.stringify(tfCategories));
}

function getLoggedItemsForSelectedDate() {
  if (!tfLoggedItemsByDate[selectedTrackFoodDate]) {
    tfLoggedItemsByDate[selectedTrackFoodDate] = [];
  }
  return tfLoggedItemsByDate[selectedTrackFoodDate];
}

function populateCategorySelects() {
  const addSel = document.getElementById('tf-add-category');
  const modalSel = document.getElementById('modal-cat-select');

  const optionsHtml = tfCategories.map(c => `<option value="${c}">${c}</option>`).join('');
  if (addSel) addSel.innerHTML = optionsHtml;
  if (modalSel) modalSel.innerHTML = optionsHtml;
}

function toggleTrackFoodAction(action) {
  const addForm = document.getElementById('form-add-food');
  const catBox = document.getElementById('form-add-category-box');

  const btnAdd = document.getElementById('btn-open-add-food');
  const btnCat = document.getElementById('btn-open-add-cat');

  [btnAdd, btnCat].forEach(btn => {
    if (btn) {
      btn.style.backgroundColor = 'var(--color-canvas-soft-2)';
      btn.style.color = 'var(--color-ink)';
      btn.style.borderColor = 'var(--color-hairline)';
    }
  });

  if (addForm) addForm.classList.add('hidden');
  if (catBox) catBox.classList.add('hidden');

  if (action === 'add-food') {
    if (addForm) addForm.classList.remove('hidden');
    if (btnAdd) {
      btnAdd.style.backgroundColor = '#0070f3';
      btnAdd.style.color = '#ffffff';
      btnAdd.style.borderColor = '#0070f3';
    }
    populateCategorySelects();
  } else if (action === 'add-cat') {
    if (catBox) catBox.classList.remove('hidden');
    if (btnCat) {
      btnCat.style.backgroundColor = '#0070f3';
      btnCat.style.color = '#ffffff';
      btnCat.style.borderColor = '#0070f3';
    }
  }
}
window.toggleTrackFoodAction = toggleTrackFoodAction;

function onFoodSearchInput(mode) {
  const inputId = mode === 'add' ? 'tf-add-name' : 'tf-save-food-input';
  const sugId = mode === 'add' ? 'tf-search-suggestions-add' : 'tf-search-suggestions-save';
  const input = document.getElementById(inputId);
  const sugBox = document.getElementById(sugId);

  if (!input || !sugBox) return;
  const query = input.value.trim().toLowerCase();

  if (query.length === 0) {
    sugBox.classList.add('hidden');
    return;
  }

  const matches = Object.keys(FOOD_DATABASE).filter(key => {
    return FOOD_DATABASE[key].name.toLowerCase().includes(query) || key.includes(query);
  });

  if (matches.length === 0) {
    sugBox.classList.add('hidden');
    return;
  }

  let html = '';
  matches.forEach(key => {
    const food = FOOD_DATABASE[key];
    html += `
      <div style="padding: 8px 12px; font-size:11px; cursor:pointer; border-bottom:1px solid var(--color-hairline);" onclick="selectFoodSuggestion('${key}', '${mode}')">
        <div class="font-bold text-ink">${food.name}</div>
        <div style="font-size:9px; color:var(--color-mute);" class="font-mono">${food.cal} kcal per ${food.baseQty}${food.unit} (${food.prot}g P | ${food.carb}g C | ${food.fat}g F)</div>
      </div>
    `;
  });

  sugBox.innerHTML = html;
  sugBox.classList.remove('hidden');
}
window.onFoodSearchInput = onFoodSearchInput;

function selectFoodSuggestion(key, mode) {
  const food = FOOD_DATABASE[key];
  if (!food) return;

  const sugAdd = document.getElementById('tf-search-suggestions-add');
  if (sugAdd) sugAdd.classList.add('hidden');

  activeFoodItem = food;

  if (mode === 'add') {
    document.getElementById('tf-add-name').value = food.name;
    document.getElementById('tf-add-qty').value = food.baseQty;
    document.getElementById('tf-add-unit-label').textContent = food.unit;
    calculateFoodNutritionFromQty();
  }
}
window.selectFoodSuggestion = selectFoodSuggestion;

function onSelectSavedMealInAddFood() {
  const selectedId = document.getElementById('tf-add-saved-meal-select').value;
  if (!selectedId) return;
  const savedMeal = tfSavedMeals.find(m => m.id === selectedId);
  if (!savedMeal) return;

  document.getElementById('tf-add-name').value = savedMeal.title;
  document.getElementById('tf-add-cal').value = savedMeal.cal;
  document.getElementById('tf-add-prot').value = savedMeal.prot;
  document.getElementById('tf-add-carb').value = savedMeal.carb;
  document.getElementById('tf-add-fat').value = savedMeal.fat;
}
window.onSelectSavedMealInAddFood = onSelectSavedMealInAddFood;

function populateSavedMealDropdown() {
  const select2 = document.getElementById('tf-add-saved-meal-select');
  
  const optionsHtml = tfSavedMeals.length === 0 
    ? '<option value="">No Saved Meals Available</option>'
    : '<option value="">-- Optional: Choose Saved Meal --</option>' + tfSavedMeals.map(m => `
        <option value="${m.id}">${m.title} (${m.cal} kcal | ${m.prot}g P | ${m.carb}g C | ${m.fat}g F)</option>
      `).join('');

  if (select2) select2.innerHTML = optionsHtml;
}

function calculateFoodNutritionFromQty() {
  const name = document.getElementById('tf-add-name').value.trim().toLowerCase();
  const dbKey = Object.keys(FOOD_DATABASE).find(k => FOOD_DATABASE[k].name.toLowerCase() === name || k === name) || (activeFoodItem ? Object.keys(FOOD_DATABASE).find(k => FOOD_DATABASE[k] === activeFoodItem) : null);

  if (!dbKey || !FOOD_DATABASE[dbKey]) return;
  const food = FOOD_DATABASE[dbKey];
  const qty = parseFloat(document.getElementById('tf-add-qty').value) || food.baseQty;
  const ratio = qty / food.baseQty;

  document.getElementById('tf-add-cal').value = Math.round(food.cal * ratio);
  document.getElementById('tf-add-prot').value = (food.prot * ratio).toFixed(1);
  document.getElementById('tf-add-carb').value = (food.carb * ratio).toFixed(1);
  document.getElementById('tf-add-fat').value = (food.fat * ratio).toFixed(1);
}
window.calculateFoodNutritionFromQty = calculateFoodNutritionFromQty;

function stageFoodItemAdd() {
  const name = document.getElementById('tf-add-name').value.trim() || 'Custom Diet Item';
  const cal = parseInt(document.getElementById('tf-add-cal').value) || 0;
  const prot = parseFloat(document.getElementById('tf-add-prot').value) || 0;
  const carb = parseFloat(document.getElementById('tf-add-carb').value) || 0;
  const fat = parseFloat(document.getElementById('tf-add-fat').value) || 0;
  const qty = parseInt(document.getElementById('tf-add-qty').value) || 100;

  const item = { id: Date.now().toString(), name: `${name} (${qty}g)`, cal, prot, carb, fat };
  tfStagedAddItems.push(item);
  renderAddStagingList();

  const elName = document.getElementById('tf-add-name'); if (elName) elName.value = '';
  const elCal = document.getElementById('tf-add-cal'); if (elCal) elCal.value = '';
  const elProt = document.getElementById('tf-add-prot'); if (elProt) elProt.value = '';
  const elCarb = document.getElementById('tf-add-carb'); if (elCarb) elCarb.value = '';
  const elFat = document.getElementById('tf-add-fat'); if (elFat) elFat.value = '';
}
window.stageFoodItemAdd = stageFoodItemAdd;

function removeStagedAddItem(id) {
  tfStagedAddItems = tfStagedAddItems.filter(i => i.id !== id);
  renderAddStagingList();
}
window.removeStagedAddItem = removeStagedAddItem;

function renderAddStagingList() {
  const container = document.getElementById('tf-add-staging-container');
  const list = document.getElementById('tf-add-staging-list');
  if (!container || !list) return;

  if (tfStagedAddItems.length === 0) {
    container.classList.add('hidden');
    return;
  }

  container.classList.remove('hidden');
  list.innerHTML = tfStagedAddItems.map(item => `
    <div style="display:flex; align-items:center; justify-content:space-between; font-size:10px; background:var(--color-surface); padding:4px 8px; border-radius:6px; border:1px solid var(--color-hairline);">
      <span><strong>${item.name}</strong> - ${item.cal} kcal (${item.prot}g P, ${item.carb}g C, ${item.fat}g F)</span>
      <button onclick="removeStagedAddItem('${item.id}')" style="color:#ef4444; border:none; background:none; cursor:pointer;">✕</button>
    </div>
  `).join('');
}

function addStagedOrSingleFoodItem() {
  const category = document.getElementById('tf-add-category').value;
  const loggedItems = getLoggedItemsForSelectedDate();

  if (tfStagedAddItems.length > 0) {
    tfStagedAddItems.forEach(item => {
      loggedItems.push({
        id: Date.now().toString() + '_' + Math.random().toString(36).substr(2, 4),
        category,
        name: item.name,
        cal: item.cal,
        prot: item.prot,
        carb: item.carb,
        fat: item.fat
      });
    });
    tfStagedAddItems = [];
    renderAddStagingList();
  } else {
    const name = document.getElementById('tf-add-name').value.trim() || 'Custom Diet Item';
    const cal = parseInt(document.getElementById('tf-add-cal').value) || 0;
    const prot = parseFloat(document.getElementById('tf-add-prot').value) || 0;
    const carb = parseFloat(document.getElementById('tf-add-carb').value) || 0;
    const fat = parseFloat(document.getElementById('tf-add-fat').value) || 0;

    loggedItems.push({
      id: Date.now().toString(),
      category,
      name,
      cal,
      prot,
      carb,
      fat
    });
  }

  saveTrackFoodLogged();
  toggleTrackFoodAction('close');

  const elName = document.getElementById('tf-add-name'); if (elName) elName.value = '';
  const elCal = document.getElementById('tf-add-cal'); if (elCal) elCal.value = '';
  const elProt = document.getElementById('tf-add-prot'); if (elProt) elProt.value = '';
  const elCarb = document.getElementById('tf-add-carb'); if (elCarb) elCarb.value = '';
  const elFat = document.getElementById('tf-add-fat'); if (elFat) elFat.value = '';
  const elSavedSel = document.getElementById('tf-add-saved-meal-select'); if (elSavedSel) elSavedSel.value = '';

  renderTrackFoodAll();
  renderTrackFoodInsights();
  render7DayTrendsChart();
}
window.addStagedOrSingleFoodItem = addStagedOrSingleFoodItem;

function saveFoodAsSavedMeal() {
  const category = document.getElementById('tf-add-category').value || 'Breakfast';
  let mealTitle = '';
  let cal = 0, prot = 0, carb = 0, fat = 0;

  if (tfStagedAddItems.length > 0) {
    mealTitle = prompt('Enter a name for this Saved Meal Batch:', tfStagedAddItems[0].name.split(' (')[0] + ' Combo');
    if (!mealTitle) return;

    tfStagedAddItems.forEach(item => {
      cal += item.cal;
      prot += item.prot;
      carb += item.carb;
      fat += item.fat;
    });
  } else {
    const rawName = document.getElementById('tf-add-name').value.trim();
    if (!rawName) {
      alert('Please select or type a food name first.');
      return;
    }
    mealTitle = rawName;
    cal = parseInt(document.getElementById('tf-add-cal').value) || 0;
    prot = parseFloat(document.getElementById('tf-add-prot').value) || 0;
    carb = parseFloat(document.getElementById('tf-add-carb').value) || 0;
    fat = parseFloat(document.getElementById('tf-add-fat').value) || 0;
  }

  const newSaved = {
    id: 's_' + Date.now(),
    title: mealTitle,
    category,
    cal: Math.round(cal),
    prot: Math.round(prot * 10) / 10,
    carb: Math.round(carb * 10) / 10,
    fat: Math.round(fat * 10) / 10
  };

  tfSavedMeals.push(newSaved);
  saveTrackFoodSaved();
  populateSavedMealDropdown();
  renderTrackFoodSaved();

  alert(`Saved "${mealTitle}" to Saved Meals Library!`);
}
window.saveFoodAsSavedMeal = saveFoodAsSavedMeal;

function addNewMealCategory() {
  const input = document.getElementById('tf-new-cat-input');
  const catName = input.value.trim();
  if (!catName) return;
  if (tfCategories.includes(catName)) {
    alert('Category already exists!');
    return;
  }
  tfCategories.push(catName);
  saveTrackFoodCategories();
  input.value = '';
  toggleTrackFoodAction('close');
  populateCategorySelects();
  renderTrackFoodAll();
  alert(`New Category "${catName}" Created Successfully!`);
}
window.addNewMealCategory = addNewMealCategory;

function deleteCustomCategory(catName) {
  if (confirm(`Delete category "${catName}"?`)) {
    tfCategories = tfCategories.filter(c => c !== catName);
    saveTrackFoodCategories();
    populateCategorySelects();
    renderTrackFoodAll();
  }
}
window.deleteCustomCategory = deleteCustomCategory;

function switchTrackFoodTab(tabKey) {
  const tabs = ['all', 'insights', 'saved'];
  tabs.forEach(key => {
    const btn = document.getElementById(`tab-tf-${key}`);
    const panel = document.getElementById(`panel-tf-${key}`);
    if (btn) btn.classList.toggle('active', key === tabKey);
    if (panel) panel.classList.toggle('hidden', key !== tabKey);
  });

  if (tabKey === 'all') renderTrackFoodAll();
  if (tabKey === 'insights') {
    renderTrackFoodInsights();
    render7DayTrendsChart();
  }
  if (tabKey === 'saved') renderTrackFoodSaved();
}
window.switchTrackFoodTab = switchTrackFoodTab;

function deleteLoggedItem(id) {
  const loggedItems = getLoggedItemsForSelectedDate();
  tfLoggedItemsByDate[selectedTrackFoodDate] = loggedItems.filter(item => item.id !== id);
  saveTrackFoodLogged();
  renderTrackFoodAll();
  renderTrackFoodInsights();
  render7DayTrendsChart();
}
window.deleteLoggedItem = deleteLoggedItem;

function deleteSavedMeal(id) {
  tfSavedMeals = tfSavedMeals.filter(m => m.id !== id);
  saveTrackFoodSaved();
  populateSavedMealDropdown();
  renderTrackFoodSaved();
}
window.deleteSavedMeal = deleteSavedMeal;

function renderTrackFoodAll() {
  const container = document.getElementById('tf-meals-log-container');
  if (!container) return;

  const loggedItems = getLoggedItemsForSelectedDate();
  const defaultIcons = { Breakfast: '🌅', Lunch: '☀️', Dinner: '🌙', Snacks: '🍎' };

  let totalCal = 0, totalProt = 0, totalCarb = 0, totalFat = 0;
  loggedItems.forEach(item => {
    totalCal += item.cal;
    totalProt += item.prot;
    totalCarb += item.carb;
    totalFat += item.fat;
  });

  const sumCalEl = document.getElementById('tf-sum-cal');
  const sumProtEl = document.getElementById('tf-sum-prot');
  const sumCarbEl = document.getElementById('tf-sum-carb');
  const sumFatEl = document.getElementById('tf-sum-fat');

  if (sumCalEl) sumCalEl.textContent = totalCal + ' kcal';
  if (sumProtEl) sumProtEl.textContent = Math.round(totalProt) + 'g';
  if (sumCarbEl) sumCarbEl.textContent = Math.round(totalCarb) + 'g';
  if (sumFatEl) sumFatEl.textContent = Math.round(totalFat) + 'g';

  let html = '';
  tfCategories.forEach(cat => {
    const items = loggedItems.filter(i => i.category === cat);
    let catCal = 0;
    items.forEach(i => catCal += i.cal);
    const icon = defaultIcons[cat] || '🍽️';
    const isCustom = !['Breakfast', 'Lunch', 'Dinner', 'Snacks'].includes(cat);

    html += `
      <div class="results-table-card">
        <div class="flex-row-center" style="justify-content: space-between; border-bottom: 1px solid var(--color-hairline); padding-bottom: 6px;">
          <div style="display:flex; align-items:center; gap:6px;">
            <span>${icon}</span>
            <span class="font-bold text-ink text-sm">${cat}</span>
            ${isCustom ? `<button onclick="deleteCustomCategory('${cat}')" style="font-size:10px; color:#ef4444; background:none; border:none; cursor:pointer;" title="Delete Category">🗑</button>` : ''}
          </div>
          <span class="font-mono text-xs font-bold text-mute">${catCal} kcal</span>
        </div>
    `;

    if (items.length === 0) {
      html += `<p style="font-size:11px; color:var(--color-mute); padding: 8px 0 2px 0; margin:0;">No foods logged for ${cat}.</p>`;
    } else {
      html += `<div style="display:flex; flex-direction:column; gap:6px; margin-top:8px;">`;
      items.forEach(item => {
        html += `
          <div style="display:flex; align-items:center; justify-content:space-between; background:var(--color-canvas-soft-2); padding: 8px 10px; border-radius: 8px; font-size:11px;">
            <div style="display:flex; flex-direction:column;">
              <span class="font-bold text-ink">${item.name}</span>
              <span style="font-size:9px; color:var(--color-mute);" class="font-mono">${item.cal} kcal | ${item.prot}g P | ${item.carb}g C | ${item.fat}g F</span>
            </div>
            <button class="icon-btn" onclick="deleteLoggedItem('${item.id}')" title="Delete Item" style="color: #ef4444; font-size: 14px;">🗑</button>
          </div>
        `;
      });
      html += `</div>`;
    }
    html += `</div>`;
  });

  container.innerHTML = html;
}

function renderTrackFoodInsights() {
  const loggedItems = getLoggedItemsForSelectedDate();
  let totalCal = 0, totalProt = 0, totalCarb = 0, totalFat = 0;
  loggedItems.forEach(item => {
    totalCal += item.cal;
    totalProt += item.prot;
    totalCarb += item.carb;
    totalFat += item.fat;
  });

  const centerCal = document.getElementById('tf-center-cal');
  const carbG = document.getElementById('tf-carb-g');
  const protG = document.getElementById('tf-protein-g');
  const fatG = document.getElementById('tf-fat-g');
  const carbPct = document.getElementById('tf-carb-pct');
  const protPct = document.getElementById('tf-protein-pct');
  const fatPct = document.getElementById('tf-fat-pct');

  if (centerCal) centerCal.textContent = totalCal + ' kcal';
  if (carbG) carbG.textContent = Math.round(totalCarb) + 'g';
  if (protG) protG.textContent = Math.round(totalProt) + 'g';
  if (fatG) fatG.textContent = Math.round(totalFat) + 'g';

  const totalMacroGrams = (totalProt * 4) + (totalCarb * 4) + (totalFat * 9) || 1;
  const cPctVal = Math.round(((totalCarb * 4) / totalMacroGrams) * 100);
  const pPctVal = Math.round(((totalProt * 4) / totalMacroGrams) * 100);
  const fPctVal = Math.round(((totalFat * 9) / totalMacroGrams) * 100);

  if (carbPct) carbPct.textContent = `(${cPctVal}%)`;
  if (protPct) protPct.textContent = `(${pPctVal}%)`;
  if (fatPct) fatPct.textContent = `(${fPctVal}%)`;

  const donutCarbs = document.getElementById('tf-donut-carbs');
  const donutProtein = document.getElementById('tf-donut-protein');
  const donutFat = document.getElementById('tf-donut-fat');

  const CIRCUMFERENCE = 314.16;
  if (donutCarbs && donutProtein && donutFat) {
    const cStroke = CIRCUMFERENCE * (cPctVal / 100);
    const pStroke = CIRCUMFERENCE * (pPctVal / 100);
    const fStroke = CIRCUMFERENCE * (fPctVal / 100);

    donutCarbs.style.strokeDasharray = cStroke + ' ' + CIRCUMFERENCE;
    donutProtein.style.strokeDasharray = pStroke + ' ' + CIRCUMFERENCE;
    donutFat.style.strokeDasharray = fStroke + ' ' + CIRCUMFERENCE;

    donutCarbs.style.strokeDashoffset = '0';
    donutProtein.style.strokeDashoffset = (-cStroke).toString();
    donutFat.style.strokeDashoffset = (-(cStroke + pStroke)).toString();
  }

  const mealBreakdown = document.getElementById('tf-per-meal-breakdown');
  if (mealBreakdown) {
    let html = '';
    tfCategories.forEach(cat => {
      const items = loggedItems.filter(i => i.category === cat);
      let catCal = 0, catP = 0, catC = 0, catF = 0;
      items.forEach(i => {
        catCal += i.cal;
        catP += i.prot;
        catC += i.carb;
        catF += i.fat;
      });
      const pct = totalCal > 0 ? Math.round((catCal / totalCal) * 100) : 0;

      html += `
        <div style="background:var(--color-canvas-soft-2); border-radius:10px; padding:10px; font-size:11px; margin-bottom:8px; border: 1px solid var(--color-hairline);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <span class="font-bold text-ink" style="font-size:12px;">${cat}</span>
            <span class="font-mono font-bold text-accent">${catCal} kcal (${pct}% of day)</span>
          </div>
          
          <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:6px; margin-bottom:6px; text-align:center;">
            <div style="background:var(--color-canvas); padding:4px 6px; border-radius:6px; border: 1px solid var(--color-hairline);">
              <span style="font-size:9px; color:#ff0080; display:block; font-weight:bold;">Protein</span>
              <strong class="font-mono text-xs">${Math.round(catP)}g</strong>
            </div>
            <div style="background:var(--color-canvas); padding:4px 6px; border-radius:6px; border: 1px solid var(--color-hairline);">
              <span style="font-size:9px; color:#0070f3; display:block; font-weight:bold;">Carbs</span>
              <strong class="font-mono text-xs">${Math.round(catC)}g</strong>
            </div>
            <div style="background:var(--color-canvas); padding:4px 6px; border-radius:6px; border: 1px solid var(--color-hairline);">
              <span style="font-size:9px; color:#f9cb28; display:block; font-weight:bold;">Fat</span>
              <strong class="font-mono text-xs">${Math.round(catF)}g</strong>
            </div>
          </div>

          <div style="width:100%; background:var(--color-canvas); height:6px; border-radius:3px; overflow:hidden;">
            <div style="width:${pct}%; background:var(--color-link); height:100%;"></div>
          </div>
        </div>
      `;
    });
    mealBreakdown.innerHTML = html;
  }
}

function render7DayTrendsChart() {
  const container = document.getElementById('tf-trends-chart-container');
  const select = document.getElementById('tf-trend-nutrient-select');
  if (!container) return;

  const nutrientKey = select ? select.value : 'cal';
  const nutrientLabels = {
    cal: { name: 'Calories', unit: 'kcal', color: '#0070f3' },
    prot: { name: 'Protein', unit: 'g', color: '#ff0080' },
    carb: { name: 'Carbohydrates', unit: 'g', color: '#0070f3' },
    fat: { name: 'Fat', unit: 'g', color: '#f9cb28' },
    fiber: { name: 'Fibre', unit: 'g', color: '#10b981' }
  };

  const meta = nutrientLabels[nutrientKey] || nutrientLabels.cal;

  const baseParts = selectedTrackFoodDate.split('-');
  const baseDate = new Date(parseInt(baseParts[0]), parseInt(baseParts[1]) - 1, parseInt(baseParts[2]));
  const trendData = [];

  for (let i = 6; i >= 0; i--) {
    const d = new Date(baseDate);
    d.setDate(d.getDate() - i);
    const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
    const monthName = d.toLocaleDateString('en-US', { month: 'short' });
    const displayLabel = `${dayName} ${d.getDate()} ${monthName}`;

    const items = tfLoggedItemsByDate[dateStr] || [];
    let sumVal = 0;
    items.forEach(item => {
      if (nutrientKey === 'cal') sumVal += item.cal || 0;
      else if (nutrientKey === 'prot') sumVal += item.prot || 0;
      else if (nutrientKey === 'carb') sumVal += item.carb || 0;
      else if (nutrientKey === 'fat') sumVal += item.fat || 0;
      else if (nutrientKey === 'fiber') sumVal += Math.round((item.carb || 0) * 0.15);
    });

    trendData.push({
      dateStr,
      displayLabel,
      val: Math.round(sumVal)
    });
  }

  const maxVal = Math.max(...trendData.map(d => d.val), 10);
  const svgWidth = 320;
  const svgHeight = 160;
  const barWidth = 28;
  const gap = 14;
  const startX = 12;

  let svgHtml = `
    <svg viewBox="0 0 ${svgWidth} ${svgHeight}" style="width:100%; height:100%; overflow:visible;">
      <line x1="0" y1="125" x2="${svgWidth}" y2="125" stroke="var(--color-hairline)" stroke-width="1"/>
  `;

  trendData.forEach((d, idx) => {
    const x = startX + idx * (barWidth + gap);
    const barHeight = Math.round((d.val / maxVal) * 95);
    const y = 125 - barHeight;
    const isSelectedDate = d.dateStr === selectedTrackFoodDate;

    svgHtml += `
      <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="4" fill="${meta.color}" opacity="${isSelectedDate ? '1.0' : '0.65'}"/>
      <text x="${x + barWidth / 2}" y="${y - 4}" text-anchor="middle" font-size="8" font-family="monospace" font-weight="bold" fill="var(--color-ink)">${d.val}</text>
      <text x="${x + barWidth / 2}" y="140" text-anchor="middle" font-size="7" font-family="sans-serif" fill="var(--color-mute)">${d.displayLabel.split(' ')[0]} ${d.displayLabel.split(' ')[1]}</text>
    `;
  });

  svgHtml += `</svg>`;
  container.innerHTML = svgHtml;
}
window.render7DayTrendsChart = render7DayTrendsChart;

function promptCategoryForSavedMeal(id) {
  const savedMeal = tfSavedMeals.find(m => m.id === id);
  if (!savedMeal) return;

  activeModalSavedMealId = id;
  const modal = document.getElementById('modal-category-picker');
  const titleEl = document.getElementById('modal-cat-title');
  const selectEl = document.getElementById('modal-cat-select');

  if (titleEl) titleEl.textContent = `Add "${savedMeal.title}" to Log`;
  if (selectEl) {
    selectEl.innerHTML = tfCategories.map(c => `<option value="${c}">${c}</option>`).join('');
  }

  if (modal) modal.classList.remove('hidden');
}
window.promptCategoryForSavedMeal = promptCategoryForSavedMeal;

function closeCategoryPickerModal() {
  const modal = document.getElementById('modal-category-picker');
  if (modal) modal.classList.add('hidden');
  activeModalSavedMealId = null;
}
window.closeCategoryPickerModal = closeCategoryPickerModal;

function confirmAddSavedMealFromModal() {
  if (!activeModalSavedMealId) return;
  const savedMeal = tfSavedMeals.find(m => m.id === activeModalSavedMealId);
  if (!savedMeal) return;

  const selectEl = document.getElementById('modal-cat-select');
  const chosenCategory = selectEl ? selectEl.value : 'Breakfast';

  const newItem = {
    id: Date.now().toString(),
    category: chosenCategory,
    name: savedMeal.title,
    cal: savedMeal.cal,
    prot: savedMeal.prot,
    carb: savedMeal.carb,
    fat: savedMeal.fat
  };

  const loggedItems = getLoggedItemsForSelectedDate();
  loggedItems.push(newItem);
  saveTrackFoodLogged();

  closeCategoryPickerModal();
  renderTrackFoodAll();
  renderTrackFoodInsights();
  render7DayTrendsChart();

  alert(`Added "${savedMeal.title}" to ${chosenCategory}!`);
}
window.confirmAddSavedMealFromModal = confirmAddSavedMealFromModal;

function renderTrackFoodSaved() {
  const container = document.getElementById('tf-saved-meals-list');
  if (!container) return;

  if (tfSavedMeals.length === 0) {
    container.innerHTML = `<p style="font-size:11px; color:var(--color-mute); margin:0;">No saved meals created yet. Save foods or meal batches from the "Add Food" section to quickly reuse them!</p>`;
    return;
  }

  let html = '';
  tfSavedMeals.forEach(meal => {
    html += `
      <div style="background:var(--color-canvas-soft); border:1px solid var(--color-hairline); border-radius:10px; padding:12px; font-size:11px; display:flex; flex-direction:column; gap:6px;">
        <div style="display:flex; align-items:center; justify-content:space-between;">
          <div style="display:flex; flex-direction:column; gap:2px;">
            <span class="font-bold text-ink text-sm">${meal.title}</span>
            <span style="font-size:10px; color:var(--color-mute);" class="font-mono">${meal.cal} kcal | ${meal.prot}g P | ${meal.carb}g C | ${meal.fat}g F</span>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <button class="action-btn" style="font-size:14px; width:34px; height:34px; border-radius:8px; display:flex; align-items:center; justify-content:center; padding:0;" onclick="promptCategoryForSavedMeal('${meal.id}')" title="Add to Meal Category">
              ➕
            </button>
            <button class="action-btn" style="font-size:12px; width:34px; height:34px; border-radius:8px; display:flex; align-items:center; justify-content:center; padding:0; background-color:rgba(239, 68, 68, 0.1); color:#ef4444; border:1px solid rgba(239, 68, 68, 0.2);" onclick="deleteSavedMeal('${meal.id}')" title="Delete Saved Meal">
              🗑
            </button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}
