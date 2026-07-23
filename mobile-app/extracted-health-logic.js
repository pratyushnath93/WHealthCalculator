
  function setupHealthCalculator() {
    // Inputs elements
    const genderInputs = document.getElementsByName('gender') as NodeListOf<HTMLInputElement>;
    const ageInput = document.getElementById('age') as HTMLInputElement;
    const ageNumInput = document.getElementById('age-num') as HTMLInputElement;
    const heightUnit = document.getElementById('height-unit') as HTMLSelectElement;
    const heightMetricContainer = document.getElementById('height-metric-container') as HTMLDivElement;
    const heightImperialContainer = document.getElementById('height-imperial-container') as HTMLDivElement;
    const heightCmInput = document.getElementById('height-cm') as HTMLInputElement;
    const heightFtInput = document.getElementById('height-ft') as HTMLInputElement;
    const heightInInput = document.getElementById('height-in') as HTMLInputElement;
    const weightUnit = document.getElementById('weight-unit') as HTMLSelectElement;
    const weightUnitLabel = document.getElementById('weight-unit-label') as HTMLSpanElement;
    const weightInput = document.getElementById('weight') as HTMLInputElement;
    const activitySelect = document.getElementById('activity') as HTMLSelectElement;
    const goalSelect = document.getElementById('goal') as HTMLSelectElement;

    // Display elements
    const bmrValue = document.querySelector('#bmr-card .font-sans') as HTMLDivElement;
    const tdeeValue = document.querySelector('#tdee-card .font-sans') as HTMLDivElement;
    const targetValue = document.querySelector('#target-card .font-sans') as HTMLDivElement;
    const bmiValue = document.querySelector('#bmi-card .font-sans') as HTMLDivElement;
    const bmiSubtitle = document.querySelector('#bmi-card .metric-subtitle') as HTMLDivElement;
    const centerCal = document.getElementById('center-cal') as HTMLSpanElement;

    const carbPctLabel = document.getElementById('carb-pct') as HTMLSpanElement;
    const carbGLbl = document.getElementById('carb-g') as HTMLDivElement;
    const carbCalLbl = document.getElementById('carb-cal') as HTMLDivElement;

    const proteinPctLabel = document.getElementById('protein-pct') as HTMLSpanElement;
    const proteinGLbl = document.getElementById('protein-g') as HTMLDivElement;
    const proteinCalLbl = document.getElementById('protein-cal') as HTMLDivElement;

    const fatPctLabel = document.getElementById('fat-pct') as HTMLSpanElement;
    const fatGLbl = document.getElementById('fat-g') as HTMLDivElement;
    const fatCalLbl = document.getElementById('fat-cal') as HTMLDivElement;

    // Donut chart SVGs
    const donutCarbs = document.getElementById('donut-carbs') as unknown as SVGCircleElement;
    const donutProtein = document.getElementById('donut-protein') as unknown as SVGCircleElement;
    const donutFat = document.getElementById('donut-fat') as unknown as SVGCircleElement;

    const CIRCUMFERENCE = 314.16;

    // Location Selectors
    const countrySelect = document.getElementById('country') as HTMLSelectElement;
    const citySelect = document.getElementById('city') as HTMLSelectElement;
    const dietaryPreferenceSelect = document.getElementById('dietary-preference') as HTMLSelectElement;
    
    // Diet display containers
    const dietEmptyState = document.getElementById('diet-empty-state') as HTMLDivElement;
    const dietActivePanel = document.getElementById('diet-active-panel') as HTMLDivElement;
    
    const dietHabitsText = document.getElementById('diet-habits-text') as HTMLParagraphElement;
    const dietTimezoneText = document.getElementById('diet-timezone-text') as HTMLSpanElement;
    const mealsTimelineContainer = document.getElementById('meals-timeline-container') as HTMLDivElement;
    
    const printDietBtn = document.getElementById('print-diet-btn') as HTMLButtonElement;
    const focusLocationBtn = document.getElementById('focus-location-btn') as HTMLButtonElement;
    const calculateBtn = document.getElementById('calculate-btn') as HTMLButtonElement;
    
    // Summary display elements
    const summaryTargetCal = document.getElementById('summary-target-cal') as HTMLTableCellElement;
    const summaryActualCal = document.getElementById('summary-actual-cal') as HTMLTableCellElement;
    const summaryDiffCal = document.getElementById('summary-diff-cal') as HTMLTableCellElement;

    const summaryTargetProt = document.getElementById('summary-target-prot') as HTMLTableCellElement;
    const summaryActualProt = document.getElementById('summary-actual-prot') as HTMLTableCellElement;
    const summaryDiffProt = document.getElementById('summary-diff-prot') as HTMLTableCellElement;

    const summaryTargetCarb = document.getElementById('summary-target-carb') as HTMLTableCellElement;
    const summaryActualCarb = document.getElementById('summary-actual-carb') as HTMLTableCellElement;
    const summaryDiffCarb = document.getElementById('summary-diff-carb') as HTMLTableCellElement;

    const summaryTargetFat = document.getElementById('summary-target-fat') as HTMLTableCellElement;
    const summaryActualFat = document.getElementById('summary-actual-fat') as HTMLTableCellElement;
    const summaryDiffFat = document.getElementById('summary-diff-fat') as HTMLTableCellElement;

    const nutritionalMatchBadge = document.getElementById('nutritional-match-badge') as HTMLSpanElement;
    const summaryMicrosList = document.getElementById('summary-micros-list') as HTMLDivElement;

    const selectedSwaps: Record<string, number> = {
      breakfast: 0,
      snack1: 0,
      lunch: 0,
      snack2: 0,
      dinner: 0,
      bedtime: 0
    };

    const resetDietBtn = document.getElementById('reset-diet-btn') as HTMLButtonElement;

    const COMMON_FOODS_DIRECTORY: Record<string, { baseQty: number; unit: string; cal: number; p: number; c: number; f: number }> = {
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

    let compiledDirectory: Record<string, { baseQty: number; unit: string; cal: number; p: number; c: number; f: number; micros?: Record<string, number> }> = {};
    
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

    interface ActiveIngredient {
      name: string;
      qty: number;
      unit: string;
      cal: number;
      p: number;
      c: number;
      f: number;
      micros: string;
    }

    interface ActiveMeal {
      id: string;
      key: string;
      name: string;
      time: string;
      ingredients: ActiveIngredient[];
      options?: MealOption[];
      activeOptIdx?: number;
    }

    let activeDietPlan: ActiveMeal[] = [];
    let targetCaloriesVar = 2000;
    let targetPVar = 100;
    let targetCVar = 250;
    let targetFVar = 65;

    interface CityInfo {
      id: string;
      name: string;
      tz: string;
      habits: string;
      timings: Record<string, string>;
    }

    const citiesMap: Record<string, CityInfo[]> = {
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

    interface Ingredient {
      name: string;
      baseQty: number;
      unit: string;
      cal: number;
      p: number;
      c: number;
      f: number;
      micros: Record<string, number>;
    }
    
    interface MealOption {
      name: string;
      profile: 'balanced' | 'high-protein' | 'surplus';
      type: 'veg' | 'non-veg';
      cities?: string[];
      ingredients: Ingredient[];
    }
    
    interface MealSchedule {
      name: string;
      time: string;
      options: MealOption[];
    }
    
    interface CountryConfig {
      name: string;
      meals: Record<string, MealSchedule>;
    }

    
// DIET_DATABASE replaced with external file reference
const DIET_DATABASE = window.DIET_DATABASE;
;

    function generateDietPlan(targetCalories: number, targetP: number, targetC: number, targetF: number, _goal: string) {
      const country = countrySelect.value;
      const cityId = citySelect.value;

      if (!country || !cityId) {
        dietEmptyState.classList.remove('hidden');
        dietActivePanel.classList.add('hidden');
        printDietBtn.classList.add('hidden');
        resetDietBtn.classList.add('hidden');
        return;
      }

      dietEmptyState.classList.add('hidden');
      dietActivePanel.classList.remove('hidden');
      printDietBtn.classList.remove('hidden');
      resetDietBtn.classList.remove('hidden');

      const cityInfo = citiesMap[country].find(c => c.id === cityId);
      if (cityInfo) {
        dietHabitsText.textContent = cityInfo.habits;
        dietTimezoneText.textContent = cityInfo.tz;
      }

      targetCaloriesVar = targetCalories;
      targetPVar = targetP;
      targetCVar = targetC;
      targetFVar = targetF;

      const mealWeights: Record<string, number> = { breakfast: 0.25, snack1: 0.10, lunch: 0.30, snack2: 0.10, dinner: 0.25 };
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

    function adjustDietPlanToTargets(_targetCalories: number, targetP: number, targetC: number, targetF: number) {
      const items: Array<{
        ing: any;
        baseQty: number;
        baseCal: number;
        baseP: number;
        baseC: number;
        baseF: number;
        category: 'p' | 'c' | 'f';
      }> = [];

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

          let category: 'p' | 'c' | 'f' = 'c';
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
        item.ing.micros = Object.entries(baseMicros).map(([n, v]) => `${n}: ${((v as number) * s).toFixed(1)}`).join(', ');
      });
    }

    function getMealCategoryTitle(key: string, name: string): string {
      if (key === 'breakfast') return 'Breakfast';
      if (key === 'snack1') return 'Mid-Morning Snack';
      if (key === 'lunch') return 'Lunch';
      if (key === 'snack2') return 'Evening Snack';
      if (key === 'dinner') return 'Dinner';
      if (key === 'bedtime') return 'Bedtime Snack';
      return name;
    }

    function renderActiveDietPlan(targetCalories: number, targetP: number, targetC: number, targetF: number) {
      mealsTimelineContainer.innerHTML = '';

      let actualCal = 0;
      let actualP = 0;
      let actualC = 0;
      let actualF = 0;
      const actualMicros: Record<string, number> = {};

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
            const newQty = parseFloat((e.target as HTMLInputElement).value);
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

        const nameInput = inlineForm.querySelector('.food-name') as HTMLInputElement;
        const dropdown = inlineForm.querySelector('.suggestions-dropdown') as HTMLDivElement;
        const qtyInput2 = inlineForm.querySelector('.food-qty') as HTMLInputElement;
        const unitInput = inlineForm.querySelector('.food-unit') as HTMLInputElement;
        const calInput = inlineForm.querySelector('.food-cal') as HTMLInputElement;
        const pInput = inlineForm.querySelector('.food-p') as HTMLInputElement;
        const cInput = inlineForm.querySelector('.food-c') as HTMLInputElement;
        const fInput = inlineForm.querySelector('.food-f') as HTMLInputElement;

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
          if (!inlineForm.contains(e.target as Node)) {
            dropdown.classList.add('hidden');
          }
        });

        inlineForm.querySelector('.save-food-btn')?.addEventListener('click', () => {
          const nameVal = (inlineForm.querySelector('.food-name') as HTMLInputElement).value;
          const qtyVal = parseFloat((inlineForm.querySelector('.food-qty') as HTMLInputElement).value) || 100;
          const unitVal = (inlineForm.querySelector('.food-unit') as HTMLInputElement).value || 'g';
          const calVal = parseFloat((inlineForm.querySelector('.food-cal') as HTMLInputElement).value) || 0;
          const pVal = parseFloat((inlineForm.querySelector('.food-p') as HTMLInputElement).value) || 0;
          const cVal = parseFloat((inlineForm.querySelector('.food-c') as HTMLInputElement).value) || 0;
          const fVal = parseFloat((inlineForm.querySelector('.food-f') as HTMLInputElement).value) || 0;

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
          btnRow.style.display = 'flex';
          btnRow.style.flexWrap = 'wrap';
          btnRow.style.gap = '4px';

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
          const mealId = (e.currentTarget as HTMLButtonElement).dataset.mealId;
          const ingIdx = parseInt((e.currentTarget as HTMLButtonElement).dataset.ingIdx || '0');
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
          const mealId = (e.currentTarget as HTMLButtonElement).dataset.id;
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

    function resetSwaps(goal: string) {
      const country = countrySelect.value;
      if (!country || !DIET_DATABASE[country]) return;

      const dietPref = dietaryPreferenceSelect.value;
      const cityId = citySelect.value;

      let profile: 'balanced' | 'high-protein' | 'surplus' = 'balanced';
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
          
          selectedSwaps[mealKey] = bestIdx;
        } else {
          selectedSwaps[mealKey] = 0;
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

    focusLocationBtn.addEventListener('click', () => {
      countrySelect.focus();
      countrySelect.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    
    printDietBtn.addEventListener('click', () => {
      window.print();
    });

    resetDietBtn.addEventListener('click', () => {
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
      let gender = 'male';
      genderInputs.forEach(radio => {
        if (radio.checked) gender = radio.value;
      });

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
  setupHealthCalculator();
  // Support Astro view transitions / fast loads
  document.addEventListener('astro:page-load', setupHealthCalculator);
