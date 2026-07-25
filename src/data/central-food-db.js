// Centralized Master Food Database (Linked directly to public/data/foods.json & public/data/diet-db.json)
var FOODS_JSON_ARRAY = [
  {
    "name": "1 tsp Sugar",
    "cal": 40,
    "prot": 1.2,
    "carb": 6,
    "fat": 1.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "cup",
    "country": "IN"
  },
  {
    "name": "Dadaboudi Mutton Biriyani",
    "cal": 180,
    "prot": 4.5,
    "carb": 28,
    "fat": 5.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "Bowl",
    "country": "AE"
  },
  {
    "name": "1 Whole, 2 Whites",
    "cal": 110,
    "prot": 14,
    "carb": 0.8,
    "fat": 5.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "eggs",
    "country": "UK"
  },
  {
    "name": "2 Whole",
    "cal": 140,
    "prot": 12,
    "carb": 0.6,
    "fat": 9.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "eggs",
    "country": "ZA"
  },
  {
    "name": "2 Whole, 1 White",
    "cal": 160,
    "prot": 15,
    "carb": 1,
    "fat": 10.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "eggs",
    "country": "IN"
  },
  {
    "name": "70% Kakao",
    "cal": 85,
    "prot": 1,
    "carb": 7,
    "fat": 6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Abendbrot (Dark bread, Gouda & Ham)",
    "cal": 340,
    "prot": 22,
    "carb": 33,
    "fat": 12.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "DE"
  },
  {
    "name": "Açai bowl with banana",
    "cal": 135,
    "prot": 1.7,
    "carb": 27.5,
    "fat": 2.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Alcatra",
    "cal": 210,
    "prot": 26,
    "carb": 0,
    "fat": 11,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "All-Natural Peanut Butter",
    "cal": 120,
    "prot": 5,
    "carb": 4,
    "fat": 10,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Almonds",
    "cal": 90,
    "prot": 3.2,
    "carb": 3,
    "fat": 7.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Almonds (Raw)",
    "cal": 579,
    "prot": 21.2,
    "carb": 21.7,
    "fat": 49.9,
    "fiber": 12.5,
    "calcium": 269,
    "iron": 3.7,
    "unit": "grams (g)",
    "country": "GLOBAL"
  },
  {
    "name": "Almonds & Cashews",
    "cal": 145,
    "prot": 4.8,
    "carb": 7.2,
    "fat": 12,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Aloo Paratha",
    "cal": 210,
    "prot": 4.5,
    "carb": 33,
    "fat": 7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "GLOBAL"
  },
  {
    "name": "Alur Dom",
    "cal": 120,
    "prot": 2,
    "carb": 18,
    "fat": 5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Apfelmus",
    "cal": 60,
    "prot": 0.2,
    "carb": 15,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Apple",
    "cal": 52,
    "prot": 0.3,
    "carb": 13.8,
    "fat": 0.2,
    "fiber": 2.4,
    "calcium": 6,
    "iron": 0.1,
    "unit": "medium fruit",
    "country": "GLOBAL"
  },
  {
    "name": "Apple & Peanut Butter",
    "cal": 200,
    "prot": 5.5,
    "carb": 24,
    "fat": 10.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Apple & Quark",
    "cal": 152,
    "prot": 18.3,
    "carb": 20,
    "fat": 0.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "DE"
  },
  {
    "name": "Apple & Walnuts",
    "cal": 175,
    "prot": 2.7,
    "carb": 21,
    "fat": 9.9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Applesauce (Apfelmus)",
    "cal": 60,
    "prot": 0.2,
    "carb": 15,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Arabic Coffee (Gahwa)",
    "cal": 2,
    "prot": 0.1,
    "carb": 0.4,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "cup",
    "country": "AE"
  },
  {
    "name": "Arabic Flatbread (Khubz)",
    "cal": 150,
    "prot": 5,
    "carb": 30,
    "fat": 1.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "AE"
  },
  {
    "name": "Arabic Pita Bread",
    "cal": 140,
    "prot": 4.5,
    "carb": 28,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "AE"
  },
  {
    "name": "Arabic Pita Bread (Khubz)",
    "cal": 105,
    "prot": 3.3,
    "carb": 22.5,
    "fat": 0.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "AE"
  },
  {
    "name": "Arabic Pita Wrap",
    "cal": 140,
    "prot": 4.5,
    "carb": 28,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "AE"
  },
  {
    "name": "Arnotts Salada Crackers",
    "cal": 80,
    "prot": 1.8,
    "carb": 14.5,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "AU"
  },
  {
    "name": "Assorted Nigiri (Tuna, Salmon, Prawn)",
    "cal": 240,
    "prot": 15,
    "carb": 35,
    "fat": 2.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "JP"
  },
  {
    "name": "Australian Feta Cheese",
    "cal": 65,
    "prot": 3.5,
    "carb": 1,
    "fat": 5.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Australian Honey",
    "cal": 22,
    "prot": 0,
    "carb": 6,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "tsp",
    "country": "AU"
  },
  {
    "name": "Australian Lamb Loin Chops",
    "cal": 260,
    "prot": 26,
    "carb": 0,
    "fat": 17,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Avocado Toast with Tofu Scramble",
    "cal": 320,
    "prot": 17.5,
    "carb": 36,
    "fat": 13.7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Baby Carrots",
    "cal": 40,
    "prot": 0.9,
    "carb": 9.5,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Baby Spinach",
    "cal": 23,
    "prot": 2.9,
    "carb": 3.6,
    "fat": 0.4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Baby Spinach & Balsamic Glaze",
    "cal": 30,
    "prot": 1.2,
    "carb": 4.5,
    "fat": 0.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Baked Cod Fillet",
    "cal": 140,
    "prot": 30,
    "carb": 0,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Baked Cod, Wild Rice & Green Beans",
    "cal": 320,
    "prot": 36.6,
    "carb": 32,
    "fat": 5.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Baked Eggplant with Miso glaze",
    "cal": 120,
    "prot": 2,
    "carb": 22,
    "fat": 3.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Baked Falafel",
    "cal": 160,
    "prot": 5,
    "carb": 18,
    "fat": 8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "GLOBAL"
  },
  {
    "name": "Baked Falafel Plate & Fattoush",
    "cal": 290,
    "prot": 9.8,
    "carb": 37.5,
    "fat": 13.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AE"
  },
  {
    "name": "Baked Garlic Chicken & Sweet Potatoes",
    "cal": 316,
    "prot": 41,
    "carb": 25.5,
    "fat": 4.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AE"
  },
  {
    "name": "Baked Garlic Chicken Breast",
    "cal": 198,
    "prot": 37,
    "carb": 0,
    "fat": 4.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Baked Heinz Beans",
    "cal": 80,
    "prot": 4.8,
    "carb": 13,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Baked Jacket Potato",
    "cal": 185,
    "prot": 4.2,
    "carb": 42,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Baked Japanese Sweet Potato",
    "cal": 130,
    "prot": 1.8,
    "carb": 30,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Baked Potato with skin",
    "cal": 110,
    "prot": 2.5,
    "carb": 25,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "Baked Satsumaimo",
    "cal": 130,
    "prot": 1.8,
    "carb": 30,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "Baked Sweet Potato",
    "cal": 108,
    "prot": 2.2,
    "carb": 24,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Baked Sweet Potato Fries",
    "cal": 70,
    "prot": 1.2,
    "carb": 16,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Baked Sweet Potato Wedges",
    "cal": 70,
    "prot": 1.2,
    "carb": 16,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "Banana",
    "cal": 89,
    "prot": 1.1,
    "carb": 22.8,
    "fat": 0.3,
    "fiber": 2.6,
    "calcium": 5,
    "iron": 0.3,
    "unit": "medium fruit",
    "country": "GLOBAL"
  },
  {
    "name": "Banana mashed with Oat bran",
    "cal": 145,
    "prot": 3.2,
    "carb": 33,
    "fat": 1.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Barbecued Beef Picanha",
    "cal": 330,
    "prot": 30,
    "carb": 0,
    "fat": 22,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Barley Flour Wrap",
    "cal": 140,
    "prot": 4.5,
    "carb": 25,
    "fat": 2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "AU"
  },
  {
    "name": "Barley Tea",
    "cal": 2,
    "prot": 0,
    "carb": 0.5,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "cup",
    "country": "JP"
  },
  {
    "name": "Barley Tea & Walnuts",
    "cal": 102,
    "prot": 2.2,
    "carb": 2.5,
    "fat": 10,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "Basmati Rice",
    "cal": 130,
    "prot": 2.7,
    "carb": 28,
    "fat": 0.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Basmati Rice Saffron",
    "cal": 125,
    "prot": 2.5,
    "carb": 27.5,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Basmati Rice with Saffron",
    "cal": 150,
    "prot": 3.2,
    "carb": 32,
    "fat": 0.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Batata Doce",
    "cal": 108,
    "prot": 2,
    "carb": 24,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Beef Biltong",
    "cal": 90,
    "prot": 15,
    "carb": 0.6,
    "fat": 3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Beef Bobotie (Egg/Custard topping)",
    "cal": 320,
    "prot": 22,
    "carb": 16,
    "fat": 18,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "Beef Bobotie & Rice",
    "cal": 460,
    "prot": 24.6,
    "carb": 46,
    "fat": 19,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Beef Droëwors",
    "cal": 140,
    "prot": 12,
    "carb": 0.5,
    "fat": 10,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "Beef Droëwors (Dried Sausage)",
    "cal": 140,
    "prot": 12,
    "carb": 0.5,
    "fat": 10,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Beef Jerky & Walnuts",
    "cal": 216,
    "prot": 12.2,
    "carb": 5,
    "fat": 17,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Beef Mince with Okra & Rice",
    "cal": 365,
    "prot": 26.5,
    "carb": 33.5,
    "fat": 12.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Beef Steak & Beans",
    "cal": 445,
    "prot": 34.5,
    "carb": 46,
    "fat": 13,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Bergkäse Mountain Cheese",
    "cal": 140,
    "prot": 10,
    "carb": 0.2,
    "fat": 11,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Black Coffee",
    "cal": 2,
    "prot": 0.1,
    "carb": 0.4,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "cup",
    "country": "BR"
  },
  {
    "name": "Black Tea (No Sugar)",
    "cal": 2,
    "prot": 0,
    "carb": 0.5,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "cup",
    "country": "IN"
  },
  {
    "name": "Black, Kidney, Pinto",
    "cal": 240,
    "prot": 14,
    "carb": 42,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Boiled",
    "cal": 155,
    "prot": 12.6,
    "carb": 1.1,
    "fat": 10.6,
    "fiber": 0,
    "calcium": 50,
    "iron": 1.2,
    "unit": "grams (g)",
    "country": "GLOBAL"
  },
  {
    "name": "Boiled Cassava (Mandioca)",
    "cal": 160,
    "prot": 1.5,
    "carb": 38,
    "fat": 0.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Boiled Edamame",
    "cal": 88,
    "prot": 8.8,
    "carb": 7.2,
    "fat": 3.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Boiled Edamame (in pods)",
    "cal": 110,
    "prot": 11,
    "carb": 9,
    "fat": 4.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Boiled Edamame Beans",
    "cal": 88,
    "prot": 8.8,
    "carb": 7.2,
    "fat": 3.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Boiled Egg",
    "cal": 74,
    "prot": 6.3,
    "carb": 0.4,
    "fat": 5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "DE"
  },
  {
    "name": "Boiled Egg Whites",
    "cal": 68,
    "prot": 14.5,
    "carb": 1,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "eggs",
    "country": "GLOBAL"
  },
  {
    "name": "Boiled Egg Whites & Tea",
    "cal": 53,
    "prot": 11,
    "carb": 1.3,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Boiled New Potatoes",
    "cal": 80,
    "prot": 2,
    "carb": 18,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Boiled Potatoes (Salzkartoffeln)",
    "cal": 95,
    "prot": 2.4,
    "carb": 21,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Boiled Potatoes in stew",
    "cal": 80,
    "prot": 2,
    "carb": 18,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Boiled Potatoes with parsley",
    "cal": 95,
    "prot": 2.4,
    "carb": 21,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Boiled Quail Eggs",
    "cal": 64,
    "prot": 5.2,
    "carb": 0.4,
    "fat": 4.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "JP"
  },
  {
    "name": "Boiled Quail Eggs & Green Tea",
    "cal": 66,
    "prot": 5.3,
    "carb": 0.8,
    "fat": 4.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "Boiled Sweet Potato (Batata Doce)",
    "cal": 108,
    "prot": 2,
    "carb": 24,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Braai Chicken, Chakalaka & Pap",
    "cal": 370,
    "prot": 38.9,
    "carb": 36,
    "fat": 6.4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Brazil Nuts",
    "cal": 160,
    "prot": 3.5,
    "carb": 3,
    "fat": 16,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Brazilian Collard Greens (Couve)",
    "cal": 30,
    "prot": 1.5,
    "carb": 4.5,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Brazilian Rump Steak (Alcatra)",
    "cal": 210,
    "prot": 26,
    "carb": 0,
    "fat": 11,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Breaded Chicken Schnitzel",
    "cal": 260,
    "prot": 28,
    "carb": 14,
    "fat": 10,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "British Gala Apple",
    "cal": 75,
    "prot": 0.4,
    "carb": 19,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "UK"
  },
  {
    "name": "British Honey Roast Ham",
    "cal": 50,
    "prot": 8,
    "carb": 0.5,
    "fat": 1.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Broccoli (Steam)",
    "cal": 35,
    "prot": 2.4,
    "carb": 7.2,
    "fat": 0.4,
    "fiber": 3.3,
    "calcium": 47,
    "iron": 0.7,
    "unit": "grams (g)",
    "country": "GLOBAL"
  },
  {
    "name": "Brown Lentil Stew with root vegetables",
    "cal": 210,
    "prot": 12,
    "carb": 34,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Brown Rice",
    "cal": 112,
    "prot": 2.6,
    "carb": 23.5,
    "fat": 0.9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Brown Rice (Cooked)",
    "cal": 111,
    "prot": 2.6,
    "carb": 23,
    "fat": 0.9,
    "fiber": 1.8,
    "calcium": 10,
    "iron": 0.4,
    "unit": "grams (g)",
    "country": "GLOBAL"
  },
  {
    "name": "Brown Rice Cakes",
    "cal": 70,
    "prot": 1.5,
    "carb": 14,
    "fat": 0.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "US"
  },
  {
    "name": "Brown Rice, Paneer Bhurji & Spinach",
    "cal": 315,
    "prot": 22.6,
    "carb": 29,
    "fat": 12.4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Brown Soda Bread Toast",
    "cal": 85,
    "prot": 3.5,
    "carb": 16,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "slice",
    "country": "UK"
  },
  {
    "name": "Buckwheat Soba Noodles",
    "cal": 200,
    "prot": 7.5,
    "carb": 42,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Burger (chicken)",
    "cal": 350,
    "prot": 22,
    "carb": 36,
    "fat": 13,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "GLOBAL"
  },
  {
    "name": "Burger (veg)",
    "cal": 290,
    "prot": 9,
    "carb": 38,
    "fat": 11,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "GLOBAL"
  },
  {
    "name": "Butter",
    "cal": 72,
    "prot": 0.1,
    "carb": 0.1,
    "fat": 8.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Butter (for cooking)",
    "cal": 36,
    "prot": 0,
    "carb": 0,
    "fat": 4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Butter Chicken",
    "cal": 340,
    "prot": 22,
    "carb": 8,
    "fat": 24,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Butter Chicken & Garlic Naan",
    "cal": 560,
    "prot": 30.5,
    "carb": 50,
    "fat": 25,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Butternut Squash Soup & Lentil Bobotie",
    "cal": 270,
    "prot": 10,
    "carb": 44,
    "fat": 6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Camel Milk",
    "cal": 90,
    "prot": 6.2,
    "carb": 9.2,
    "fat": 3.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "AE"
  },
  {
    "name": "Campanha",
    "cal": 20,
    "prot": 0.5,
    "carb": 3.5,
    "fat": 0.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Canned Black Beans",
    "cal": 110,
    "prot": 7,
    "carb": 20,
    "fat": 0.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Canned Brown Lentils",
    "cal": 110,
    "prot": 8,
    "carb": 18,
    "fat": 0.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Canned Chickpeas (Garbanzo)",
    "cal": 130,
    "prot": 7,
    "carb": 22,
    "fat": 2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Canned Light Tuna in brine",
    "cal": 65,
    "prot": 15,
    "carb": 0,
    "fat": 0.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Canned Tuna",
    "cal": 116,
    "prot": 26,
    "carb": 0,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Canned Tuna in water",
    "cal": 90,
    "prot": 20,
    "carb": 0,
    "fat": 0.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Cape Malay Chicken Curry",
    "cal": 240,
    "prot": 22,
    "carb": 12,
    "fat": 11,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "Cape Malay Chicken Curry & Rice",
    "cal": 390,
    "prot": 25,
    "carb": 45,
    "fat": 11.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Cape Malay Lentil Curry & Rice",
    "cal": 295,
    "prot": 11.5,
    "carb": 55.5,
    "fat": 2.7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Cape Malay Spiced Lentils",
    "cal": 170,
    "prot": 9,
    "carb": 28,
    "fat": 2.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "Carne Moída com Quiabo",
    "cal": 240,
    "prot": 24,
    "carb": 6,
    "fat": 12,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Carrot Sticks",
    "cal": 40,
    "prot": 0.9,
    "carb": 9.5,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Cassava Farofa",
    "cal": 70,
    "prot": 0.3,
    "carb": 16,
    "fat": 0.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Celery & Baby Carrots",
    "cal": 30,
    "prot": 0.7,
    "carb": 7,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Chakalaka & Pap with Beans",
    "cal": 290,
    "prot": 8.5,
    "carb": 54,
    "fat": 3.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Chamomile Herbal Tea",
    "cal": 2,
    "prot": 0,
    "carb": 0.5,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "cup",
    "country": "US"
  },
  {
    "name": "Chamomile Tea",
    "cal": 2,
    "prot": 0,
    "carb": 0.5,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "cup",
    "country": "AE"
  },
  {
    "name": "Chamomile Tea & Digestive Biscuit",
    "cal": 72,
    "prot": 1,
    "carb": 10.5,
    "fat": 3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Chapatis",
    "cal": 160,
    "prot": 6,
    "carb": 32,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "GLOBAL"
  },
  {
    "name": "Cheese",
    "cal": 280,
    "prot": 12,
    "carb": 32,
    "fat": 10,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "slice",
    "country": "GLOBAL"
  },
  {
    "name": "Cheese & Onion Pasty & Greens",
    "cal": 320,
    "prot": 10,
    "carb": 37,
    "fat": 15.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Chia Seeds",
    "cal": 50,
    "prot": 1.7,
    "carb": 4.2,
    "fat": 3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Chicken",
    "cal": 350,
    "prot": 22,
    "carb": 36,
    "fat": 13,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "GLOBAL"
  },
  {
    "name": "Chicken & Barley Soup",
    "cal": 210,
    "prot": 18,
    "carb": 22,
    "fat": 4.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "UK"
  },
  {
    "name": "Chicken Biryani",
    "cal": 360,
    "prot": 24,
    "carb": 45,
    "fat": 9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Chicken Biryani (Lean breast meat)",
    "cal": 340,
    "prot": 24,
    "carb": 42,
    "fat": 8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Chicken Biryani & Raita",
    "cal": 390,
    "prot": 26.8,
    "carb": 46,
    "fat": 10,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Chicken Breast (Cooked)",
    "cal": 165,
    "prot": 31,
    "carb": 0,
    "fat": 3.6,
    "fiber": 0,
    "calcium": 15,
    "iron": 1,
    "unit": "grams (g)",
    "country": "GLOBAL"
  },
  {
    "name": "Chicken breast & Avocado wrap",
    "cal": 380,
    "prot": 42.1,
    "carb": 27.8,
    "fat": 10.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Chicken Breast Filet",
    "cal": 180,
    "prot": 36,
    "carb": 0,
    "fat": 3.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Chicken Coxinha & Espresso",
    "cal": 232,
    "prot": 9.6,
    "carb": 24.4,
    "fat": 11,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Chicken Curry",
    "cal": 240,
    "prot": 22,
    "carb": 6,
    "fat": 14,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Chicken Curry & Basmati Rice",
    "cal": 385,
    "prot": 31.7,
    "carb": 39,
    "fat": 8.4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Chicken Egg Roll",
    "cal": 450,
    "prot": 22,
    "carb": 40,
    "fat": 22,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "roll",
    "country": "GLOBAL"
  },
  {
    "name": "Chicken Empada (Pastry)",
    "cal": 210,
    "prot": 8.5,
    "carb": 22,
    "fat": 10,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Chicken Empada pie",
    "cal": 210,
    "prot": 8.5,
    "carb": 22,
    "fat": 10,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Chicken Keema Paratha",
    "cal": 395,
    "prot": 18,
    "carb": 54.5,
    "fat": 11,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Chicken Machboos",
    "cal": 380,
    "prot": 26,
    "carb": 48,
    "fat": 10,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Chicken Machboos & Saloona",
    "cal": 415,
    "prot": 26.8,
    "carb": 54,
    "fat": 11,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AE"
  },
  {
    "name": "Chicken Polony slices & Cucumber",
    "cal": 110,
    "prot": 9.5,
    "carb": 5.5,
    "fat": 5.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Chicken Roll",
    "cal": 360,
    "prot": 18,
    "carb": 36,
    "fat": 16,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "roll",
    "country": "GLOBAL"
  },
  {
    "name": "Chicken Salami (Lean)",
    "cal": 85,
    "prot": 10,
    "carb": 1.5,
    "fat": 4.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Chicken Salami Slices",
    "cal": 100,
    "prot": 10.5,
    "carb": 4.5,
    "fat": 4.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Chicken Schnitzel, Potatoes & Sauerkraut",
    "cal": 370,
    "prot": 31.2,
    "carb": 38.5,
    "fat": 10.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "DE"
  },
  {
    "name": "Chicken Shawarma strips & Hummus",
    "cal": 200,
    "prot": 24.1,
    "carb": 6.5,
    "fat": 9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AE"
  },
  {
    "name": "Chicken Tikka Bites & Green Tea",
    "cal": 122,
    "prot": 19.1,
    "carb": 1.6,
    "fat": 4.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Chicken, Barley & Vegetable Soup",
    "cal": 340,
    "prot": 23,
    "carb": 48,
    "fat": 5.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Chicken, Rice, Beans & Couve",
    "cal": 400,
    "prot": 47.5,
    "carb": 36.5,
    "fat": 6.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Chickpea & Spinach Curry with Rice",
    "cal": 330,
    "prot": 11.2,
    "carb": 60,
    "fat": 4.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Chickpea Spinach Masala",
    "cal": 180,
    "prot": 8,
    "carb": 28,
    "fat": 4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Chole Bhature",
    "cal": 450,
    "prot": 12,
    "carb": 60,
    "fat": 18,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "plate",
    "country": "GLOBAL"
  },
  {
    "name": "Churrasco Beef & Cassava",
    "cal": 510,
    "prot": 32,
    "carb": 41.5,
    "fat": 22.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Clear Chicken Broth",
    "cal": 40,
    "prot": 4.5,
    "carb": 2,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "IN"
  },
  {
    "name": "Clear Honey",
    "cal": 60,
    "prot": 0,
    "carb": 15,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "tbsp",
    "country": "UK"
  },
  {
    "name": "Coconut Chutney",
    "cal": 90,
    "prot": 1,
    "carb": 3,
    "fat": 8.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Coffee with Whole Milk",
    "cal": 45,
    "prot": 2,
    "carb": 3,
    "fat": 2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "BR"
  },
  {
    "name": "Cold Soba Noodles & Tempura Veggies",
    "cal": 330,
    "prot": 9.5,
    "carb": 61,
    "fat": 6.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "Cooked",
    "cal": 165,
    "prot": 31,
    "carb": 0,
    "fat": 3.6,
    "fiber": 0,
    "calcium": 15,
    "iron": 1,
    "unit": "grams (g)",
    "country": "GLOBAL"
  },
  {
    "name": "Cooked Brown Rice",
    "cal": 110,
    "prot": 2.6,
    "carb": 23,
    "fat": 0.9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Cooked Quinoa",
    "cal": 120,
    "prot": 4.4,
    "carb": 21.3,
    "fat": 1.9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Cooked Rice & Carioca Beans",
    "cal": 210,
    "prot": 8,
    "carb": 42,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Cooked Wild Rice",
    "cal": 120,
    "prot": 4.8,
    "carb": 25,
    "fat": 0.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Cottage Cheese",
    "cal": 265,
    "prot": 18.3,
    "carb": 1.2,
    "fat": 20.8,
    "fiber": 0,
    "calcium": 480,
    "iron": 0.2,
    "unit": "grams (g)",
    "country": "GLOBAL"
  },
  {
    "name": "Cottage Cheese (Hüttenkäse)",
    "cal": 72,
    "prot": 9.6,
    "carb": 2.2,
    "fat": 2.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Cottage Cheese & Cherries",
    "cal": 115,
    "prot": 12.5,
    "carb": 9,
    "fat": 2.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Couve",
    "cal": 30,
    "prot": 1.5,
    "carb": 4.5,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Cow",
    "cal": 61,
    "prot": 3.2,
    "carb": 4.8,
    "fat": 3.3,
    "fiber": 0,
    "calcium": 113,
    "iron": 0.1,
    "unit": "ml",
    "country": "GLOBAL"
  },
  {
    "name": "Cow Milk 1.5% Fat",
    "cal": 96,
    "prot": 7,
    "carb": 9.8,
    "fat": 3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "DE"
  },
  {
    "name": "Coxinha",
    "cal": 230,
    "prot": 9.5,
    "carb": 24,
    "fat": 11,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Crackers with Vegemite & Butter",
    "cal": 126,
    "prot": 3.1,
    "carb": 15.5,
    "fat": 5.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Creamy Butternut Squash Soup",
    "cal": 90,
    "prot": 1.5,
    "carb": 18,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "ZA"
  },
  {
    "name": "Creamy Mushroom Risotto",
    "cal": 240,
    "prot": 5,
    "carb": 38,
    "fat": 7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Creamy Pork/Turkey Geschnetzeltes",
    "cal": 260,
    "prot": 24,
    "carb": 4,
    "fat": 16,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Crisp Apple",
    "cal": 80,
    "prot": 0.5,
    "carb": 20,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "US"
  },
  {
    "name": "Crumbled Feta Cheese",
    "cal": 78,
    "prot": 4.2,
    "carb": 1.2,
    "fat": 6.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "Crushed Almonds",
    "cal": 60,
    "prot": 2,
    "carb": 2,
    "fat": 5.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Cucumber & Avocado Maki Rolls",
    "cal": 180,
    "prot": 3.2,
    "carb": 38,
    "fat": 2.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "JP"
  },
  {
    "name": "Cucumber & Tomato Chopped",
    "cal": 20,
    "prot": 0.8,
    "carb": 4,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Cucumber Mint Raita",
    "cal": 60,
    "prot": 3.2,
    "carb": 4.5,
    "fat": 3.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Cucumber Onion Salad",
    "cal": 15,
    "prot": 0.5,
    "carb": 3,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Cucumber Salad (Sunomono)",
    "cal": 15,
    "prot": 0.4,
    "carb": 3,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Cucumber Slices",
    "cal": 15,
    "prot": 0.7,
    "carb": 3.6,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Cured Beef Jerky",
    "cal": 116,
    "prot": 10,
    "carb": 3,
    "fat": 7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Cured Landjäger Sausage",
    "cal": 160,
    "prot": 11,
    "carb": 0.5,
    "fat": 13,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Cured Turkey Jerky",
    "cal": 90,
    "prot": 11,
    "carb": 2,
    "fat": 4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Dairy Butter",
    "cal": 36,
    "prot": 0,
    "carb": 0,
    "fat": 4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Dal Fry",
    "cal": 140,
    "prot": 7,
    "carb": 20,
    "fat": 4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "GLOBAL"
  },
  {
    "name": "Dal Tadka",
    "cal": 120,
    "prot": 6.5,
    "carb": 18,
    "fat": 3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "GLOBAL"
  },
  {
    "name": "Dark Bread with Quark & Jam",
    "cal": 250,
    "prot": 12.8,
    "carb": 44.4,
    "fat": 1.9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "DE"
  },
  {
    "name": "Dark bread, Gouda & Ham",
    "cal": 340,
    "prot": 22,
    "carb": 33,
    "fat": 12.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "DE"
  },
  {
    "name": "Dark Chocolate (70% Kakao)",
    "cal": 85,
    "prot": 1,
    "carb": 7,
    "fat": 6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Dark Rye",
    "cal": 85,
    "prot": 2.8,
    "carb": 16,
    "fat": 0.9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "slice",
    "country": "DE"
  },
  {
    "name": "Dark Rye Bread Slice",
    "cal": 80,
    "prot": 2.8,
    "carb": 16,
    "fat": 0.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "slice",
    "country": "UK"
  },
  {
    "name": "Dark Rye Bread Toast",
    "cal": 160,
    "prot": 5.6,
    "carb": 32,
    "fat": 1.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "slices",
    "country": "ZA"
  },
  {
    "name": "Dates",
    "cal": 60,
    "prot": 0.4,
    "carb": 16,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "GLOBAL"
  },
  {
    "name": "Dates & Arabic Coffee",
    "cal": 134,
    "prot": 0.9,
    "carb": 36.4,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AE"
  },
  {
    "name": "Dhokla",
    "cal": 150,
    "prot": 5,
    "carb": 26,
    "fat": 3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "GLOBAL"
  },
  {
    "name": "Digestive Biscuit",
    "cal": 70,
    "prot": 1,
    "carb": 10,
    "fat": 3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "UK"
  },
  {
    "name": "Digestive Biscuits & Tea",
    "cal": 155,
    "prot": 2.6,
    "carb": 21,
    "fat": 6.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Double Egg Roll",
    "cal": 410,
    "prot": 15,
    "carb": 38,
    "fat": 20,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "roll",
    "country": "GLOBAL"
  },
  {
    "name": "Dried Apricots",
    "cal": 60,
    "prot": 0.8,
    "carb": 15,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Dried Sausage",
    "cal": 140,
    "prot": 12,
    "carb": 0.5,
    "fat": 10,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Edamame Beans",
    "cal": 110,
    "prot": 11,
    "carb": 9,
    "fat": 4.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "Egg Bhurji",
    "cal": 190,
    "prot": 14,
    "carb": 4,
    "fat": 13,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "plate",
    "country": "GLOBAL"
  },
  {
    "name": "Egg Bhurji & Whole Wheat Toast",
    "cal": 340,
    "prot": 24,
    "carb": 35,
    "fat": 12.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Egg Curry & Whole Wheat Roti",
    "cal": 370,
    "prot": 19,
    "carb": 40.6,
    "fat": 14.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Egg Roll",
    "cal": 320,
    "prot": 9.5,
    "carb": 38,
    "fat": 14.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "roll",
    "country": "GLOBAL"
  },
  {
    "name": "Egg White Salad Cups",
    "cal": 133,
    "prot": 15.3,
    "carb": 5,
    "fat": 5.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Egg Whites",
    "cal": 68,
    "prot": 14.5,
    "carb": 1,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "eggs",
    "country": "US"
  },
  {
    "name": "Egg/Custard topping",
    "cal": 320,
    "prot": 22,
    "carb": 16,
    "fat": 18,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "Eggs (2 Whole, 1 White)",
    "cal": 160,
    "prot": 15,
    "carb": 1,
    "fat": 10.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "eggs",
    "country": "IN"
  },
  {
    "name": "Eggs Shakshuka (Tomato sauce)",
    "cal": 170,
    "prot": 13,
    "carb": 5,
    "fat": 11,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "eggs",
    "country": "AE"
  },
  {
    "name": "Emirati Vegetable Saloona Stew",
    "cal": 140,
    "prot": 3.5,
    "carb": 22,
    "fat": 4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Emmentaler Cheese Slices",
    "cal": 115,
    "prot": 8.5,
    "carb": 0.2,
    "fat": 9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "English Breakfast Tea with Dash Milk",
    "cal": 15,
    "prot": 0.6,
    "carb": 1,
    "fat": 0.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "cup",
    "country": "UK"
  },
  {
    "name": "English Mature Cheddar",
    "cal": 83,
    "prot": 5,
    "carb": 0.3,
    "fat": 7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Espresso Coffee",
    "cal": 2,
    "prot": 0.1,
    "carb": 0.4,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "BR"
  },
  {
    "name": "Falafel & Tahini",
    "cal": 260,
    "prot": 8.5,
    "carb": 24,
    "fat": 15.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AE"
  },
  {
    "name": "Falafel Wrap with Hummus",
    "cal": 380,
    "prot": 12.6,
    "carb": 54.5,
    "fat": 13.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AE"
  },
  {
    "name": "Fattoush Salad",
    "cal": 70,
    "prot": 1.8,
    "carb": 9.5,
    "fat": 3.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Fava Beans",
    "cal": 165,
    "prot": 10,
    "carb": 24,
    "fat": 3.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Fermented Sauerkraut",
    "cal": 15,
    "prot": 0.8,
    "carb": 3.5,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Fermented Soybeans",
    "cal": 100,
    "prot": 9,
    "carb": 6,
    "fat": 5.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "File de Frango",
    "cal": 210,
    "prot": 40,
    "carb": 0,
    "fat": 4.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Firm Tofu cubed",
    "cal": 90,
    "prot": 9,
    "carb": 2,
    "fat": 5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Fish Cake (Kamaboko) slices",
    "cal": 80,
    "prot": 10,
    "carb": 8,
    "fat": 0.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "Fish Curry",
    "cal": 180,
    "prot": 18,
    "carb": 5,
    "fat": 9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Fish Curry (Machher Jhol) & Rice",
    "cal": 375,
    "prot": 26.2,
    "carb": 41,
    "fat": 10.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Fish Fry",
    "cal": 220,
    "prot": 18,
    "carb": 8,
    "fat": 13,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Fish Fry & Rice",
    "cal": 370,
    "prot": 25.2,
    "carb": 34,
    "fat": 12.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Flattened Rice (Poha)",
    "cal": 260,
    "prot": 4.8,
    "carb": 58,
    "fat": 1.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "For cooking",
    "cal": 36,
    "prot": 0,
    "carb": 0,
    "fat": 4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Foul Mudammas (Fava Beans)",
    "cal": 165,
    "prot": 10,
    "carb": 24,
    "fat": 3.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Foul Mudammas with Olive Oil & Pita",
    "cal": 385,
    "prot": 14.2,
    "carb": 50,
    "fat": 14.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AE"
  },
  {
    "name": "Foxnuts",
    "cal": 95,
    "prot": 2.4,
    "carb": 19,
    "fat": 0.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "French Fries",
    "cal": 312,
    "prot": 3.4,
    "carb": 41,
    "fat": 15,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "French Roll (Pão de Sal)",
    "cal": 140,
    "prot": 4,
    "carb": 28,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "BR"
  },
  {
    "name": "Fresh Apple slices",
    "cal": 25,
    "prot": 0.2,
    "carb": 6.5,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Fresh Avocado",
    "cal": 65,
    "prot": 0.8,
    "carb": 3.5,
    "fat": 6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Fresh Avocado slices",
    "cal": 50,
    "prot": 0.6,
    "carb": 2.8,
    "fat": 4.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Fresh Blueberries",
    "cal": 30,
    "prot": 0.4,
    "carb": 7,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Fresh Cucumber slices",
    "cal": 8,
    "prot": 0.3,
    "carb": 1.8,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Fresh Cucumber Tomato Salad",
    "cal": 15,
    "prot": 0.5,
    "carb": 3,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Fresh Curly Kale",
    "cal": 25,
    "prot": 1.5,
    "carb": 4.5,
    "fat": 0.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Fresh Fruit Salad",
    "cal": 75,
    "prot": 0.8,
    "carb": 18,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Fresh Labneh cheese dip",
    "cal": 60,
    "prot": 2.2,
    "carb": 1.8,
    "fat": 5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Fresh Papaya cubes",
    "cal": 35,
    "prot": 0.4,
    "carb": 9,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Fresh Passionfruit Pulp",
    "cal": 30,
    "prot": 0.7,
    "carb": 7,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Fresh Plain Curd",
    "cal": 60,
    "prot": 3.5,
    "carb": 4.5,
    "fat": 3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Fresh Red Apple",
    "cal": 52,
    "prot": 0.3,
    "carb": 14,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Fresh Ricotta & Spinach filling",
    "cal": 90,
    "prot": 6,
    "carb": 3,
    "fat": 6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Fresh Rocket & Horseradish",
    "cal": 15,
    "prot": 0.5,
    "carb": 1.5,
    "fat": 0.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Fresh Salsa & Spinach",
    "cal": 20,
    "prot": 0.8,
    "carb": 4,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Fresh Sashimi (Tuna & Salmon)",
    "cal": 165,
    "prot": 26,
    "carb": 0,
    "fat": 6.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Fried Atlantic Herring",
    "cal": 240,
    "prot": 22,
    "carb": 0,
    "fat": 16,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Fried Egg",
    "cal": 80,
    "prot": 6,
    "carb": 0.3,
    "fat": 6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "BR"
  },
  {
    "name": "Gahwa",
    "cal": 2,
    "prot": 0.1,
    "carb": 0.4,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "cup",
    "country": "AE"
  },
  {
    "name": "Garbanzo",
    "cal": 130,
    "prot": 7,
    "carb": 22,
    "fat": 2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Garlic Butter Green Beans",
    "cal": 60,
    "prot": 1.8,
    "carb": 7,
    "fat": 3.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Garlic Naan Bread",
    "cal": 240,
    "prot": 6.5,
    "carb": 42,
    "fat": 5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "IN"
  },
  {
    "name": "Garlic Paste (Toum)",
    "cal": 50,
    "prot": 0.1,
    "carb": 2,
    "fat": 4.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "German Dark Bread",
    "cal": 170,
    "prot": 5.5,
    "carb": 32,
    "fat": 1.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "slices",
    "country": "DE"
  },
  {
    "name": "German Dark Rye Bread (Vollkornbrot)",
    "cal": 170,
    "prot": 5.5,
    "carb": 32,
    "fat": 1.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "slices",
    "country": "DE"
  },
  {
    "name": "German Grain Bread",
    "cal": 170,
    "prot": 5.5,
    "carb": 32,
    "fat": 1.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "slices",
    "country": "DE"
  },
  {
    "name": "German Magerquark",
    "cal": 100,
    "prot": 18,
    "carb": 6,
    "fat": 0.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "German Pickles (Gewürzgurken)",
    "cal": 10,
    "prot": 0.3,
    "carb": 2,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "German Potato Pancakes (Kartoffelpuffer)",
    "cal": 230,
    "prot": 3.5,
    "carb": 32,
    "fat": 9.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "German Potato Salad (Oil/Vinegar dressing)",
    "cal": 150,
    "prot": 2.2,
    "carb": 24,
    "fat": 5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "German Smoked Ham",
    "cal": 75,
    "prot": 11,
    "carb": 0.5,
    "fat": 3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "German Smoked Ham (Schinken)",
    "cal": 60,
    "prot": 9,
    "carb": 0.4,
    "fat": 2.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Geschnetzeltes & Spätzle",
    "cal": 450,
    "prot": 30.5,
    "carb": 40,
    "fat": 18,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "DE"
  },
  {
    "name": "Gewürzgurken",
    "cal": 10,
    "prot": 0.3,
    "carb": 2,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Ghee",
    "cal": 45,
    "prot": 0,
    "carb": 0,
    "fat": 5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "GLOBAL"
  },
  {
    "name": "Gherkin (Pickled Cucumber)",
    "cal": 8,
    "prot": 0.2,
    "carb": 1.6,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Ghugni",
    "cal": 160,
    "prot": 7.5,
    "carb": 24,
    "fat": 4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Ginger Tea with Cow Milk (1 tsp Sugar)",
    "cal": 40,
    "prot": 1.2,
    "carb": 6,
    "fat": 1.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "cup",
    "country": "IN"
  },
  {
    "name": "Gouda Cheese Slice",
    "cal": 110,
    "prot": 7.5,
    "carb": 0.6,
    "fat": 8.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Gouda Cheese Slices",
    "cal": 145,
    "prot": 10,
    "carb": 0.8,
    "fat": 11,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Granary Bread Toast",
    "cal": 90,
    "prot": 4.5,
    "carb": 16,
    "fat": 1.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "slice",
    "country": "UK"
  },
  {
    "name": "Grated Cheddar Cheese",
    "cal": 83,
    "prot": 5,
    "carb": 0.3,
    "fat": 7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Grated Paneer filling",
    "cal": 110,
    "prot": 7.5,
    "carb": 1.2,
    "fat": 8.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Greek Style Natural Yogurt",
    "cal": 90,
    "prot": 14,
    "carb": 5.5,
    "fat": 0.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Greek Yogurt",
    "cal": 59,
    "prot": 10,
    "carb": 3.6,
    "fat": 0.4,
    "fiber": 0,
    "calcium": 110,
    "iron": 0.1,
    "unit": "grams (g)",
    "country": "GLOBAL"
  },
  {
    "name": "Greek Yogurt & Passionfruit",
    "cal": 120,
    "prot": 14.7,
    "carb": 12.5,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Greek Yogurt Parfait with Granola",
    "cal": 246,
    "prot": 20.3,
    "carb": 32,
    "fat": 4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Green Salad with vinaigrette",
    "cal": 30,
    "prot": 0.8,
    "carb": 3,
    "fat": 2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Green Tea",
    "cal": 2,
    "prot": 0.1,
    "carb": 0.4,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "cup",
    "country": "IN"
  },
  {
    "name": "Green Tea (No Sugar)",
    "cal": 2,
    "prot": 0.1,
    "carb": 0.4,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "cup",
    "country": "IN"
  },
  {
    "name": "Grilled Asparagus Spears",
    "cal": 16,
    "prot": 1.8,
    "carb": 3.2,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Grilled Barramundi & Sweet Potato",
    "cal": 306,
    "prot": 31.7,
    "carb": 29.2,
    "fat": 5.9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Grilled Barramundi Fillet",
    "cal": 170,
    "prot": 28,
    "carb": 0,
    "fat": 5.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Grilled Braai Chicken Breast",
    "cal": 190,
    "prot": 35,
    "carb": 0,
    "fat": 4.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "Grilled Broccoli",
    "cal": 28,
    "prot": 2.2,
    "carb": 5.5,
    "fat": 0.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Grilled Broccolini",
    "cal": 28,
    "prot": 2.4,
    "carb": 4.8,
    "fat": 0.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Grilled Cape Hake Fillet",
    "cal": 150,
    "prot": 32,
    "carb": 0,
    "fat": 2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "Grilled Chicken & Sweet Potato",
    "cal": 316,
    "prot": 40.2,
    "carb": 29.5,
    "fat": 4.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Grilled Chicken Breast",
    "cal": 165,
    "prot": 31,
    "carb": 0,
    "fat": 3.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Grilled Chicken Breast (File de Frango)",
    "cal": 210,
    "prot": 40,
    "carb": 0,
    "fat": 4.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Grilled Chicken Breast slices",
    "cal": 190,
    "prot": 37,
    "carb": 0,
    "fat": 4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Grilled Chicken Tikka",
    "cal": 120,
    "prot": 19,
    "carb": 1.2,
    "fat": 4.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Grilled Chicken, Quinoa & Broccoli",
    "cal": 419,
    "prot": 54.1,
    "carb": 32.5,
    "fat": 7.7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Grilled Hake & Baked Potato",
    "cal": 260,
    "prot": 34.5,
    "carb": 25,
    "fat": 2.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Grilled Halloumi & Flatbread",
    "cal": 348,
    "prot": 17.8,
    "carb": 33,
    "fat": 16.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AE"
  },
  {
    "name": "Grilled Halloumi & Roasted Vegetable Salad",
    "cal": 295,
    "prot": 15.2,
    "carb": 20.7,
    "fat": 17,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Grilled Halloumi Cheese",
    "cal": 190,
    "prot": 12.5,
    "carb": 1.2,
    "fat": 15,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Grilled Lamb Chops, Pumpkin & Broccolini",
    "cal": 338,
    "prot": 29.4,
    "carb": 15.8,
    "fat": 17.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Grilled Lamb Tikka",
    "cal": 250,
    "prot": 28,
    "carb": 0,
    "fat": 15,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Grilled Mackerel (Saba)",
    "cal": 200,
    "prot": 18,
    "carb": 0,
    "fat": 14,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Grilled Mackerel & Rice",
    "cal": 340,
    "prot": 20.9,
    "carb": 30.5,
    "fat": 14.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "Grilled Mushroom & Tomato",
    "cal": 20,
    "prot": 1,
    "carb": 3.5,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Grilled Paneer",
    "cal": 265,
    "prot": 18.3,
    "carb": 1.2,
    "fat": 20.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Grilled Paneer Cubes",
    "cal": 140,
    "prot": 9,
    "carb": 1.5,
    "fat": 11,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Grilled Paneer Tikka Masala Curry",
    "cal": 240,
    "prot": 12,
    "carb": 8,
    "fat": 18,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Grilled Pink Salmon",
    "cal": 180,
    "prot": 24,
    "carb": 0,
    "fat": 9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Grilled Plum Tomato halves",
    "cal": 22,
    "prot": 1,
    "carb": 4.8,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Grilled Sea Bass Fillet",
    "cal": 160,
    "prot": 26,
    "carb": 0,
    "fat": 6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Grilled Shish Tawook",
    "cal": 210,
    "prot": 32,
    "carb": 1,
    "fat": 8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Grilled Tomato halves",
    "cal": 22,
    "prot": 1,
    "carb": 4.8,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Gulab Jamun",
    "cal": 150,
    "prot": 2,
    "carb": 26,
    "fat": 5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "GLOBAL"
  },
  {
    "name": "Ham roll-ups with Gherkin",
    "cal": 83,
    "prot": 11.2,
    "carb": 2.1,
    "fat": 3.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "DE"
  },
  {
    "name": "Hard Boiled",
    "cal": 140,
    "prot": 12,
    "carb": 0.6,
    "fat": 9.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "eggs",
    "country": "IN"
  },
  {
    "name": "Hard Boiled Egg",
    "cal": 74,
    "prot": 6.3,
    "carb": 0.4,
    "fat": 5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "UK"
  },
  {
    "name": "Hard Boiled Egg & Almonds",
    "cal": 164,
    "prot": 9.5,
    "carb": 3.4,
    "fat": 12.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Hard Boiled Egg & Ham slices",
    "cal": 124,
    "prot": 14.3,
    "carb": 0.9,
    "fat": 6.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Hearty Lentil Vegetable Soup",
    "cal": 150,
    "prot": 8,
    "carb": 24,
    "fat": 2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "UK"
  },
  {
    "name": "Heinz Baked Beans",
    "cal": 80,
    "prot": 4.8,
    "carb": 13,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Honey",
    "cal": 64,
    "prot": 0,
    "carb": 17,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "tbsp",
    "country": "IN"
  },
  {
    "name": "Honey Granola",
    "cal": 130,
    "prot": 3,
    "carb": 22,
    "fat": 3.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Hot Sencha Green Tea",
    "cal": 2,
    "prot": 0.1,
    "carb": 0.4,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "cup",
    "country": "JP"
  },
  {
    "name": "Hummus",
    "cal": 140,
    "prot": 4.2,
    "carb": 12,
    "fat": 9.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Hummus & Carrot Sticks",
    "cal": 180,
    "prot": 5.1,
    "carb": 20.5,
    "fat": 9.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AE"
  },
  {
    "name": "Hummus Dip",
    "cal": 50,
    "prot": 1.5,
    "carb": 4.3,
    "fat": 3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Hummus, Celery & Carrots",
    "cal": 170,
    "prot": 4.7,
    "carb": 17,
    "fat": 10.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Hüttenkäse",
    "cal": 72,
    "prot": 9.6,
    "carb": 2.2,
    "fat": 2.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Idli & Sambhar",
    "cal": 210,
    "prot": 7,
    "carb": 40,
    "fat": 2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "plate",
    "country": "GLOBAL"
  },
  {
    "name": "Idli, Sambhar & Chutney",
    "cal": 320,
    "prot": 8,
    "carb": 49,
    "fat": 11,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "In pods",
    "cal": 110,
    "prot": 11,
    "carb": 9,
    "fat": 4.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Italian Turkey Meatballs",
    "cal": 210,
    "prot": 22,
    "carb": 4,
    "fat": 12,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Jacket Potato with Baked Beans & Cheese",
    "cal": 348,
    "prot": 14,
    "carb": 55.3,
    "fat": 7.4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Jacket Potato with Tuna Mayo",
    "cal": 315,
    "prot": 24.3,
    "carb": 43,
    "fat": 5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Japanese Rolled Omelet (Tamagoyaki)",
    "cal": 120,
    "prot": 8.5,
    "carb": 4,
    "fat": 8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Jeera Rice",
    "cal": 210,
    "prot": 3.5,
    "carb": 44,
    "fat": 2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Jerky",
    "cal": 90,
    "prot": 18,
    "carb": 0.8,
    "fat": 1.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Juicy Orange",
    "cal": 60,
    "prot": 1.2,
    "carb": 14,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "AU"
  },
  {
    "name": "Kamaboko",
    "cal": 80,
    "prot": 10,
    "carb": 8,
    "fat": 0.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "Kangaroo Biltong (Jerky)",
    "cal": 90,
    "prot": 18,
    "carb": 0.8,
    "fat": 1.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Kangaroo Fillet & Sweet Potato Mash",
    "cal": 286,
    "prot": 42.6,
    "carb": 23.2,
    "fat": 2.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Kangaroo Fillet steak",
    "cal": 180,
    "prot": 39,
    "carb": 0,
    "fat": 1.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Kangaroo Steak & Eggs",
    "cal": 280,
    "prot": 36,
    "carb": 17.3,
    "fat": 7.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Kartoffelpuffer",
    "cal": 230,
    "prot": 3.5,
    "carb": 32,
    "fat": 9.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Käsespätzle & Salad",
    "cal": 410,
    "prot": 18.8,
    "carb": 48.2,
    "fat": 15.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "DE"
  },
  {
    "name": "Kathi Roll",
    "cal": 360,
    "prot": 16,
    "carb": 38,
    "fat": 16,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "roll",
    "country": "GLOBAL"
  },
  {
    "name": "Keema",
    "cal": 90,
    "prot": 12,
    "carb": 0.5,
    "fat": 4.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Khaman Dhokla & Tea",
    "cal": 152,
    "prot": 5.1,
    "carb": 26.4,
    "fat": 3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Khichdi, Papad & Raita",
    "cal": 325,
    "prot": 12.8,
    "carb": 54,
    "fat": 5.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Khubz",
    "cal": 150,
    "prot": 5,
    "carb": 30,
    "fat": 1.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "AE"
  },
  {
    "name": "Knäckebrot",
    "cal": 70,
    "prot": 2,
    "carb": 14,
    "fat": 0.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "DE"
  },
  {
    "name": "Knäckebrot & Cottage Cheese",
    "cal": 142,
    "prot": 11.6,
    "carb": 16.2,
    "fat": 2.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "DE"
  },
  {
    "name": "Kolkata Egg Roll",
    "cal": 320,
    "prot": 9.5,
    "carb": 38,
    "fat": 14.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "roll",
    "country": "GLOBAL"
  },
  {
    "name": "Labneh Dip",
    "cal": 80,
    "prot": 3,
    "carb": 2.4,
    "fat": 6.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Lamb Tikka skewers & Hummus",
    "cal": 450,
    "prot": 33.7,
    "carb": 20,
    "fat": 27.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AE"
  },
  {
    "name": "Landjäger",
    "cal": 160,
    "prot": 11,
    "carb": 0.5,
    "fat": 13,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "DE"
  },
  {
    "name": "Large British Eggs",
    "cal": 156,
    "prot": 13,
    "carb": 0.8,
    "fat": 11,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "eggs",
    "country": "UK"
  },
  {
    "name": "Large Poached Eggs",
    "cal": 140,
    "prot": 12,
    "carb": 0.6,
    "fat": 9.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "eggs",
    "country": "AU"
  },
  {
    "name": "Lean",
    "cal": 85,
    "prot": 10,
    "carb": 1.5,
    "fat": 4.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Lean Beef Biltong",
    "cal": 120,
    "prot": 21,
    "carb": 0.8,
    "fat": 3.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Lean Beef Mince with Okra (Carne Moída com Quiabo)",
    "cal": 240,
    "prot": 24,
    "carb": 6,
    "fat": 12,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Lean Beef Sirloin Steak",
    "cal": 290,
    "prot": 33,
    "carb": 0,
    "fat": 16,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Lean breast meat",
    "cal": 340,
    "prot": 24,
    "carb": 42,
    "fat": 8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Lean Chicken Curry",
    "cal": 220,
    "prot": 28,
    "carb": 4,
    "fat": 8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Lean Kangaroo Fillet",
    "cal": 120,
    "prot": 26,
    "carb": 0,
    "fat": 1.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Lean Kangaroo Jerky",
    "cal": 90,
    "prot": 18,
    "carb": 0.8,
    "fat": 1.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Lemon Olive Oil Vinaigrette",
    "cal": 70,
    "prot": 0,
    "carb": 0.5,
    "fat": 7.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "US"
  },
  {
    "name": "Lemon Tea (No Sugar)",
    "cal": 4,
    "prot": 0.1,
    "carb": 1,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "cup",
    "country": "IN"
  },
  {
    "name": "Lentil & Vegetable Soup with Rye Bread",
    "cal": 230,
    "prot": 10.8,
    "carb": 40,
    "fat": 2.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Lentil Bobotie Slice",
    "cal": 180,
    "prot": 8.5,
    "carb": 26,
    "fat": 4.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "Lentil Burger & Beetroot Salad",
    "cal": 315,
    "prot": 14.8,
    "carb": 49,
    "fat": 6.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Lentil Potato Shepherd's Pie",
    "cal": 260,
    "prot": 12,
    "carb": 42,
    "fat": 4.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Lentil Potato Stew (Linseneintopf)",
    "cal": 290,
    "prot": 14,
    "carb": 52,
    "fat": 1.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "DE"
  },
  {
    "name": "Lentil Shepherd's Pie & Broccoli",
    "cal": 295,
    "prot": 14.8,
    "carb": 49,
    "fat": 4.9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Lentil Soup, Hummus & Khubz",
    "cal": 335,
    "prot": 13.3,
    "carb": 51.5,
    "fat": 10.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AE"
  },
  {
    "name": "Lettuce, Tomato, Onion",
    "cal": 20,
    "prot": 0.8,
    "carb": 4,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Light Chicken Broth",
    "cal": 90,
    "prot": 14.5,
    "carb": 2,
    "fat": 2.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Light Cream Cheese",
    "cal": 40,
    "prot": 1.5,
    "carb": 1.2,
    "fat": 3.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Light Mayonnaise",
    "cal": 40,
    "prot": 0.1,
    "carb": 1,
    "fat": 4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Light Turkey Breast slices",
    "cal": 67,
    "prot": 13,
    "carb": 1,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Linseneintopf",
    "cal": 290,
    "prot": 14,
    "carb": 52,
    "fat": 1.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "DE"
  },
  {
    "name": "Low-Fat Cottage Cheese",
    "cal": 90,
    "prot": 12,
    "carb": 3,
    "fat": 2.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Low-Fat Dairy Milk",
    "cal": 90,
    "prot": 6.8,
    "carb": 9.8,
    "fat": 2.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "AU"
  },
  {
    "name": "Low-Fat German Quark",
    "cal": 40,
    "prot": 7.2,
    "carb": 2.4,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Low-Fat Milk",
    "cal": 90,
    "prot": 6.8,
    "carb": 9.6,
    "fat": 2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "IN"
  },
  {
    "name": "Low-Fat Paneer Bhurji",
    "cal": 180,
    "prot": 18,
    "carb": 3,
    "fat": 11,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Low-Fat Paneer Stuffing",
    "cal": 135,
    "prot": 14,
    "carb": 2,
    "fat": 8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Luchi",
    "cal": 180,
    "prot": 3.5,
    "carb": 24,
    "fat": 8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "GLOBAL"
  },
  {
    "name": "Macadamia Nuts & Orange",
    "cal": 200,
    "prot": 2.8,
    "carb": 16.8,
    "fat": 15.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Machher Jhol",
    "cal": 375,
    "prot": 26.2,
    "carb": 41,
    "fat": 10.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Maize Meal Pap",
    "cal": 150,
    "prot": 3,
    "carb": 32,
    "fat": 0.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "Maize Porridge (pap)",
    "cal": 110,
    "prot": 2.3,
    "carb": 25,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Maize Porridge (Pap) with Milk & Honey",
    "cal": 355,
    "prot": 10.6,
    "carb": 62.6,
    "fat": 6.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Maize Porridge & Eggs",
    "cal": 250,
    "prot": 14.2,
    "carb": 24.6,
    "fat": 10.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Manakish",
    "cal": 180,
    "prot": 4.5,
    "carb": 28,
    "fat": 5.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "AE"
  },
  {
    "name": "Mandioca",
    "cal": 160,
    "prot": 1.5,
    "carb": 38,
    "fat": 0.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Maracujá",
    "cal": 4,
    "prot": 0,
    "carb": 1,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "cup",
    "country": "BR"
  },
  {
    "name": "Marinara Tomato Sauce",
    "cal": 50,
    "prot": 1.5,
    "carb": 8,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Marinated Organic Tempeh",
    "cal": 150,
    "prot": 16,
    "carb": 7,
    "fat": 7.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Masala Dosa",
    "cal": 220,
    "prot": 4.5,
    "carb": 38,
    "fat": 6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "GLOBAL"
  },
  {
    "name": "Masala Omelet & Toast",
    "cal": 336,
    "prot": 20,
    "carb": 30.6,
    "fat": 15.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Mashed Avocado",
    "cal": 80,
    "prot": 1,
    "carb": 4.3,
    "fat": 7.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Mashed Banana",
    "cal": 90,
    "prot": 1,
    "carb": 23,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Mashed Potatoes (no cream)",
    "cal": 105,
    "prot": 2.2,
    "carb": 22,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Mashed Sweet Potato (no cream)",
    "cal": 90,
    "prot": 1.8,
    "carb": 20,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Matcha Green Tea Powder",
    "cal": 10,
    "prot": 0.8,
    "carb": 1.2,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Matcha Soy Milk",
    "cal": 95,
    "prot": 8.8,
    "carb": 5.2,
    "fat": 4.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "McVities Digestive Biscuits",
    "cal": 140,
    "prot": 2,
    "carb": 20,
    "fat": 6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "UK"
  },
  {
    "name": "Medjool Date",
    "cal": 66,
    "prot": 0.4,
    "carb": 18,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "AE"
  },
  {
    "name": "Medjool Dates",
    "cal": 132,
    "prot": 0.8,
    "carb": 36,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "AE"
  },
  {
    "name": "Micellar Casein Protein",
    "cal": 110,
    "prot": 24,
    "carb": 1.5,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Milk",
    "cal": 120,
    "prot": 6.8,
    "carb": 9.6,
    "fat": 6.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "GLOBAL"
  },
  {
    "name": "Minced Chicken (Keema)",
    "cal": 90,
    "prot": 12,
    "carb": 0.5,
    "fat": 4.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Minced Lamb Shepherd's Pie",
    "cal": 320,
    "prot": 20,
    "carb": 32,
    "fat": 12,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Mint & Coriander Chutney",
    "cal": 15,
    "prot": 0.5,
    "carb": 2,
    "fat": 0.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Miso Eggplant (Nasu Dengaku) & Rice",
    "cal": 245,
    "prot": 4.5,
    "carb": 49.5,
    "fat": 3.7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "Mixed Garden Greens",
    "cal": 20,
    "prot": 1.5,
    "carb": 4,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Mixed Greens & Tomato Salad",
    "cal": 20,
    "prot": 0.8,
    "carb": 4,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Mixed Nuts Portfolio",
    "cal": 190,
    "prot": 5.3,
    "carb": 19,
    "fat": 12.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Mixed Veg (Onion, Peas)",
    "cal": 20,
    "prot": 1,
    "carb": 4.2,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Mixed Vegetable Raita",
    "cal": 50,
    "prot": 2.8,
    "carb": 4,
    "fat": 2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Mixed Vegetable Sabzi",
    "cal": 70,
    "prot": 2,
    "carb": 10,
    "fat": 2.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Mixed Vegetable Sambhar",
    "cal": 80,
    "prot": 3,
    "carb": 14,
    "fat": 2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "IN"
  },
  {
    "name": "Mixed Vegetables (Onion, Tomato)",
    "cal": 20,
    "prot": 1,
    "carb": 4,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Mixed Vegetables (Shiitake, Scallion, Carrot)",
    "cal": 35,
    "prot": 1.2,
    "carb": 7,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Mochar Chop",
    "cal": 180,
    "prot": 4,
    "carb": 22,
    "fat": 8.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "GLOBAL"
  },
  {
    "name": "Moong Dal & Rice Khichdi",
    "cal": 240,
    "prot": 8.5,
    "carb": 44,
    "fat": 3.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Moong Dal Chilla",
    "cal": 220,
    "prot": 12,
    "carb": 36,
    "fat": 3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "IN"
  },
  {
    "name": "Moong Dal Chilla & Mint Chutney",
    "cal": 345,
    "prot": 20,
    "carb": 39.2,
    "fat": 12,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Moong Dal Tadka",
    "cal": 100,
    "prot": 6,
    "carb": 16,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Mozzarella String Cheese",
    "cal": 80,
    "prot": 7,
    "carb": 1,
    "fat": 5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "US"
  },
  {
    "name": "Muesli Oats Mix",
    "cal": 180,
    "prot": 6,
    "carb": 32,
    "fat": 2.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Muesli with Apple & Walnuts",
    "cal": 366,
    "prot": 14.7,
    "carb": 49.5,
    "fat": 12.4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "DE"
  },
  {
    "name": "Mugicha",
    "cal": 2,
    "prot": 0,
    "carb": 0.5,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "cup",
    "country": "JP"
  },
  {
    "name": "Mujadara (Rice & Lentils with caramelized onions)",
    "cal": 260,
    "prot": 9.5,
    "carb": 48,
    "fat": 3.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Mujadara & Tomato Salad",
    "cal": 285,
    "prot": 10.3,
    "carb": 52,
    "fat": 4.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AE"
  },
  {
    "name": "Multigrain Roll",
    "cal": 130,
    "prot": 4.8,
    "carb": 24,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "AU"
  },
  {
    "name": "Mushroom Risotto & Greens",
    "cal": 260,
    "prot": 6.8,
    "carb": 40.8,
    "fat": 7.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Mutton Curry",
    "cal": 310,
    "prot": 24,
    "carb": 5,
    "fat": 21,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Nairns Rough Oatcakes",
    "cal": 90,
    "prot": 2.2,
    "carb": 11.5,
    "fat": 3.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "UK"
  },
  {
    "name": "Nasu Dengaku",
    "cal": 245,
    "prot": 4.5,
    "carb": 49.5,
    "fat": 3.7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "Natto (Fermented Soybeans)",
    "cal": 100,
    "prot": 9,
    "carb": 6,
    "fat": 5.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Natto, Rice & Pickle",
    "cal": 230,
    "prot": 11.6,
    "carb": 34.5,
    "fat": 5.7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "No cream",
    "cal": 105,
    "prot": 2.2,
    "carb": 22,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "No Milk",
    "cal": 2,
    "prot": 0,
    "carb": 0.5,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "cup",
    "country": "ZA"
  },
  {
    "name": "No Sugar",
    "cal": 4,
    "prot": 0.1,
    "carb": 1,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "cup",
    "country": "IN"
  },
  {
    "name": "Non-Fat",
    "cal": 100,
    "prot": 17,
    "carb": 6,
    "fat": 0.4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Oat Bran",
    "cal": 55,
    "prot": 2.2,
    "carb": 10,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Oatcakes & Cheddar Cheese",
    "cal": 173,
    "prot": 7.2,
    "carb": 11.8,
    "fat": 10.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Oatmeal",
    "cal": 389,
    "prot": 16.9,
    "carb": 66.3,
    "fat": 6.9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Oatmeal Oats",
    "cal": 150,
    "prot": 5,
    "carb": 26,
    "fat": 2.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Oatmeal with Almonds & Milk",
    "cal": 534,
    "prot": 19,
    "carb": 72,
    "fat": 20,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Oatmeal with Blueberries & Chia",
    "cal": 340,
    "prot": 15.6,
    "carb": 54.2,
    "fat": 6.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Oatmeal with Papaya & Honey",
    "cal": 237,
    "prot": 10.6,
    "carb": 42.5,
    "fat": 2.7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Oats (Raw)",
    "cal": 389,
    "prot": 16.9,
    "carb": 66.3,
    "fat": 6.9,
    "fiber": 10.6,
    "calcium": 54,
    "iron": 4.7,
    "unit": "grams (g)",
    "country": "GLOBAL"
  },
  {
    "name": "Oil/Vinegar dressing",
    "cal": 150,
    "prot": 2.2,
    "carb": 24,
    "fat": 5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Olive Oil & Balsamic dressing",
    "cal": 110,
    "prot": 0,
    "carb": 1.5,
    "fat": 12,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "US"
  },
  {
    "name": "Olive Oil Dressing",
    "cal": 45,
    "prot": 0,
    "carb": 0,
    "fat": 5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "IN"
  },
  {
    "name": "Olive Oil drizzled",
    "cal": 90,
    "prot": 0,
    "carb": 0,
    "fat": 10,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "AE"
  },
  {
    "name": "Omelet with Spinach & Ricotta",
    "cal": 230,
    "prot": 18,
    "carb": 3.6,
    "fat": 15.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Onion Cucumber Raita",
    "cal": 50,
    "prot": 2.8,
    "carb": 4,
    "fat": 2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Onion, Peas",
    "cal": 20,
    "prot": 1,
    "carb": 4.2,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Onion, Tomato",
    "cal": 20,
    "prot": 1,
    "carb": 4,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Organic Açai Pulp",
    "cal": 90,
    "prot": 1.2,
    "carb": 16,
    "fat": 2.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Organic Tofu",
    "cal": 76,
    "prot": 8,
    "carb": 1.9,
    "fat": 4.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Organic Tofu (Scrambled)",
    "cal": 80,
    "prot": 8.5,
    "carb": 1.5,
    "fat": 4.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Ouma Condensed Milk Rusk",
    "cal": 120,
    "prot": 2,
    "carb": 18,
    "fat": 4.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "ZA"
  },
  {
    "name": "Palak",
    "cal": 25,
    "prot": 2,
    "carb": 3,
    "fat": 0.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Palm Oil/Dendê & Coconut",
    "cal": 220,
    "prot": 3.5,
    "carb": 18,
    "fat": 16,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Pan-Fried Herring & Potatoes",
    "cal": 335,
    "prot": 24.4,
    "carb": 21,
    "fat": 16.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "DE"
  },
  {
    "name": "Pan-Fried Teriyaki Tofu",
    "cal": 140,
    "prot": 11,
    "carb": 7,
    "fat": 7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Paneer (Cottage Cheese)",
    "cal": 265,
    "prot": 18.3,
    "carb": 1.2,
    "fat": 20.8,
    "fiber": 0,
    "calcium": 480,
    "iron": 0.2,
    "unit": "grams (g)",
    "country": "GLOBAL"
  },
  {
    "name": "Paneer Butter Masala",
    "cal": 320,
    "prot": 12,
    "carb": 10,
    "fat": 26,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Paneer Paratha & Curd",
    "cal": 455,
    "prot": 23.5,
    "carb": 50.5,
    "fat": 17,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Paneer Tikka Masala & Rice",
    "cal": 365,
    "prot": 14.5,
    "carb": 35.5,
    "fat": 18.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AE"
  },
  {
    "name": "Pani Puri",
    "cal": 150,
    "prot": 2.5,
    "carb": 24,
    "fat": 4.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "GLOBAL"
  },
  {
    "name": "Pão de Queijo & Cafe com Leite",
    "cal": 265,
    "prot": 6.2,
    "carb": 31,
    "fat": 12,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Pão de Queijo & Espresso",
    "cal": 152,
    "prot": 2.9,
    "carb": 19.4,
    "fat": 6.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Pão de Sal",
    "cal": 140,
    "prot": 4,
    "carb": 28,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "BR"
  },
  {
    "name": "Pão de Sal, Eggs & Coffee",
    "cal": 292,
    "prot": 16.1,
    "carb": 29,
    "fat": 12,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Pap",
    "cal": 110,
    "prot": 2.3,
    "carb": 25,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Papaya & Apple Slices",
    "cal": 75,
    "prot": 0.8,
    "carb": 18,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Paratha",
    "cal": 260,
    "prot": 4.5,
    "carb": 38,
    "fat": 10,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "GLOBAL"
  },
  {
    "name": "Passionfruit Tea (Maracujá)",
    "cal": 4,
    "prot": 0,
    "carb": 1,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "cup",
    "country": "BR"
  },
  {
    "name": "Passionfruit Tea & Almonds",
    "cal": 94,
    "prot": 3.2,
    "carb": 4,
    "fat": 7.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Pastry",
    "cal": 210,
    "prot": 8.5,
    "carb": 22,
    "fat": 10,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Peanut Butter",
    "cal": 95,
    "prot": 4,
    "carb": 3,
    "fat": 8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Peanuts & Raisins",
    "cal": 159,
    "prot": 5.5,
    "carb": 15,
    "fat": 9.7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Pepper, Onion",
    "cal": 35,
    "prot": 1.2,
    "carb": 7,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Peppermint Herbal Tea",
    "cal": 2,
    "prot": 0,
    "carb": 0.5,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "cup",
    "country": "DE"
  },
  {
    "name": "Peppermint Tea & Dark Chocolate",
    "cal": 87,
    "prot": 1,
    "carb": 7.5,
    "fat": 6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "DE"
  },
  {
    "name": "Pickled Beetroot Salad",
    "cal": 35,
    "prot": 1,
    "carb": 7,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Pickled Cabbage Salad",
    "cal": 15,
    "prot": 0.5,
    "carb": 3,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Pickled Cucumber",
    "cal": 5,
    "prot": 0.1,
    "carb": 1,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Pickled Radish (Takuan)",
    "cal": 10,
    "prot": 0.2,
    "carb": 2,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Pitted Tart Cherries",
    "cal": 25,
    "prot": 0.5,
    "carb": 6,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Pizza Slice (cheese)",
    "cal": 280,
    "prot": 12,
    "carb": 32,
    "fat": 10,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "slice",
    "country": "GLOBAL"
  },
  {
    "name": "Plain Greek Yogurt (Non-Fat)",
    "cal": 100,
    "prot": 17,
    "carb": 6,
    "fat": 0.4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Plain Low-fat Curd",
    "cal": 60,
    "prot": 3.5,
    "carb": 4.5,
    "fat": 3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Poached Egg",
    "cal": 70,
    "prot": 6,
    "carb": 0.3,
    "fat": 4.9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "egg",
    "country": "AU"
  },
  {
    "name": "Poached Eggs & Grilled Tomatoes",
    "cal": 268,
    "prot": 18.5,
    "carb": 21.6,
    "fat": 12.4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Poha",
    "cal": 180,
    "prot": 3.5,
    "carb": 36,
    "fat": 2.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Poha & Green Tea",
    "cal": 367,
    "prot": 9.7,
    "carb": 65,
    "fat": 8.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Porridge with Honey & Banana",
    "cal": 390,
    "prot": 13.5,
    "carb": 70,
    "fat": 6.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Potato Pancakes & Applesauce",
    "cal": 290,
    "prot": 3.7,
    "carb": 47,
    "fat": 9.9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "DE"
  },
  {
    "name": "Prato Feito (Beef Steak & Beans)",
    "cal": 445,
    "prot": 34.5,
    "carb": 46,
    "fat": 13,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Prato Feito Vegetariano",
    "cal": 310,
    "prot": 14.8,
    "carb": 46.3,
    "fat": 7.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Premium Lentil Patty",
    "cal": 150,
    "prot": 9,
    "carb": 18,
    "fat": 4.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "AU"
  },
  {
    "name": "Puchka",
    "cal": 150,
    "prot": 2.5,
    "carb": 24,
    "fat": 4.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "GLOBAL"
  },
  {
    "name": "Pumpkin Lentil Salad",
    "cal": 190,
    "prot": 10.2,
    "carb": 33,
    "fat": 2.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Pumpkin Seeds & Dried Apricots",
    "cal": 145,
    "prot": 5.3,
    "carb": 17,
    "fat": 7.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Puri Sabji",
    "cal": 350,
    "prot": 8,
    "carb": 45,
    "fat": 16,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "plate",
    "country": "GLOBAL"
  },
  {
    "name": "Queijo Minas Cheese",
    "cal": 100,
    "prot": 7.2,
    "carb": 1,
    "fat": 7.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Quinoa, Chickpea & Kale Salad",
    "cal": 345,
    "prot": 12.9,
    "carb": 48.3,
    "fat": 11.7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Raisins",
    "cal": 45,
    "prot": 0.5,
    "carb": 11.8,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Rasgulla",
    "cal": 120,
    "prot": 2,
    "carb": 26,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "GLOBAL"
  },
  {
    "name": "Raw",
    "cal": 389,
    "prot": 16.9,
    "carb": 66.3,
    "fat": 6.9,
    "fiber": 10.6,
    "calcium": 54,
    "iron": 4.7,
    "unit": "grams (g)",
    "country": "GLOBAL"
  },
  {
    "name": "Raw Almonds",
    "cal": 173,
    "prot": 6.3,
    "carb": 6.1,
    "fat": 15,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Raw Honey",
    "cal": 60,
    "prot": 0,
    "carb": 15,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "tbsp",
    "country": "ZA"
  },
  {
    "name": "Raw Macadamia Nuts",
    "cal": 140,
    "prot": 1.6,
    "carb": 2.8,
    "fat": 15,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Raw Whole Almonds",
    "cal": 90,
    "prot": 3.2,
    "carb": 3,
    "fat": 7.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Rice & Lentils with caramelized onions",
    "cal": 260,
    "prot": 9.5,
    "carb": 48,
    "fat": 3.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Rice Cakes & Cottage Cheese",
    "cal": 160,
    "prot": 13.5,
    "carb": 17,
    "fat": 3.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Rice, Beans, Sautéed Mushrooms & Farofa",
    "cal": 320,
    "prot": 10.5,
    "carb": 62.5,
    "fat": 3.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Roast Beef & Rocket Wrap",
    "cal": 295,
    "prot": 28,
    "carb": 25.5,
    "fat": 8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Roast Chicken, Mash & Veg",
    "cal": 345,
    "prot": 34.6,
    "carb": 28,
    "fat": 10.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Roasted Barley Tea (Mugicha)",
    "cal": 2,
    "prot": 0,
    "carb": 0.5,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "cup",
    "country": "JP"
  },
  {
    "name": "Roasted Black Chana",
    "cal": 140,
    "prot": 8,
    "carb": 22,
    "fat": 2.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Roasted Chana & Lemon tea",
    "cal": 144,
    "prot": 8.1,
    "carb": 23,
    "fat": 2.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Roasted Chicken Leg (Skinless)",
    "cal": 210,
    "prot": 30,
    "carb": 0,
    "fat": 9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Roasted Chickpea Flour",
    "cal": 120,
    "prot": 6.5,
    "carb": 19.5,
    "fat": 1.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Roasted Garlic Hummus",
    "cal": 140,
    "prot": 4,
    "carb": 10,
    "fat": 10,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Roasted Kent Pumpkin",
    "cal": 50,
    "prot": 1,
    "carb": 11,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Roasted Makhana",
    "cal": 70,
    "prot": 2,
    "carb": 14.5,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Roasted Makhana (Foxnuts)",
    "cal": 95,
    "prot": 2.4,
    "carb": 19,
    "fat": 0.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Roasted Makhana & Ginger Chai",
    "cal": 135,
    "prot": 3.6,
    "carb": 25,
    "fat": 1.7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Roasted Papad",
    "cal": 35,
    "prot": 1.5,
    "carb": 6,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "IN"
  },
  {
    "name": "Roasted Peanuts",
    "cal": 85,
    "prot": 3.8,
    "carb": 2.4,
    "fat": 7.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Roasted Potatoes in Olive oil",
    "cal": 130,
    "prot": 2,
    "carb": 24,
    "fat": 3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Roasted Pumpkin & Eggplant",
    "cal": 75,
    "prot": 1.5,
    "carb": 15,
    "fat": 1.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Roasted Pumpkin & Zucchini",
    "cal": 75,
    "prot": 1.5,
    "carb": 15,
    "fat": 1.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Roasted Pumpkin cubes",
    "cal": 50,
    "prot": 1,
    "carb": 11,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Roasted Sweet Potato",
    "cal": 90,
    "prot": 1.8,
    "carb": 20,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "Roasted Veggie & Quinoa Bowl",
    "cal": 255,
    "prot": 8.7,
    "carb": 37.1,
    "fat": 8.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Rohu Fish Curry",
    "cal": 190,
    "prot": 22,
    "carb": 3,
    "fat": 9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Rolled Oats",
    "cal": 230,
    "prot": 8,
    "carb": 40,
    "fat": 4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Rooibos Herbal Tea (No Milk)",
    "cal": 2,
    "prot": 0,
    "carb": 0.5,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "cup",
    "country": "ZA"
  },
  {
    "name": "Rooibos Tea & Ouma Rusk",
    "cal": 122,
    "prot": 2,
    "carb": 18.5,
    "fat": 4.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Rooibos Tea with Low-Fat Milk",
    "cal": 50,
    "prot": 3.2,
    "carb": 5.5,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "ZA"
  },
  {
    "name": "Rooibos Tea, Milk & Honey",
    "cal": 72,
    "prot": 3.2,
    "carb": 11.5,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Roti / Chapati",
    "cal": 80,
    "prot": 3,
    "carb": 16,
    "fat": 0.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "GLOBAL"
  },
  {
    "name": "Roti, Dal, Veg Sabzi & Curd",
    "cal": 410,
    "prot": 17.9,
    "carb": 66.5,
    "fat": 8.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Roti, Grilled Chicken & Dal Tadka",
    "cal": 405,
    "prot": 41,
    "carb": 45,
    "fat": 5.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Roti, Yellow Moong Dal, Grilled Paneer & Salad",
    "cal": 415,
    "prot": 20.7,
    "carb": 52.5,
    "fat": 13.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Rye Crispbread (Knäckebrot)",
    "cal": 70,
    "prot": 2,
    "carb": 14,
    "fat": 0.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "DE"
  },
  {
    "name": "Rye Toast with Avocado & Tomato",
    "cal": 235,
    "prot": 6.9,
    "carb": 37.7,
    "fat": 7.7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Saba",
    "cal": 200,
    "prot": 18,
    "carb": 0,
    "fat": 14,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Salad (Lettuce, Tomato, Onion)",
    "cal": 20,
    "prot": 0.8,
    "carb": 4,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Salmon (Cooked)",
    "cal": 206,
    "prot": 22.1,
    "carb": 0,
    "fat": 12.3,
    "fiber": 0,
    "calcium": 12,
    "iron": 0.8,
    "unit": "grams (g)",
    "country": "GLOBAL"
  },
  {
    "name": "Salmon Fillet",
    "cal": 206,
    "prot": 22,
    "carb": 0,
    "fat": 13,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Salmon Salad with Vinaigrette",
    "cal": 310,
    "prot": 25.5,
    "carb": 5.5,
    "fat": 21.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Salmon, Rice & Miso Soup",
    "cal": 315,
    "prot": 23,
    "carb": 37,
    "fat": 7.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "Saloona Broth",
    "cal": 35,
    "prot": 0.8,
    "carb": 6,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "AE"
  },
  {
    "name": "Salted Grilled Salmon (Shake)",
    "cal": 130,
    "prot": 18,
    "carb": 0,
    "fat": 6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Salzkartoffeln",
    "cal": 95,
    "prot": 2.4,
    "carb": 21,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Samosa",
    "cal": 260,
    "prot": 3.5,
    "carb": 32,
    "fat": 13,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "GLOBAL"
  },
  {
    "name": "Samosas",
    "cal": 520,
    "prot": 7,
    "carb": 64,
    "fat": 26,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "GLOBAL"
  },
  {
    "name": "Sandesh",
    "cal": 80,
    "prot": 2.5,
    "carb": 11,
    "fat": 3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "GLOBAL"
  },
  {
    "name": "Sanitarium Weet-Bix",
    "cal": 110,
    "prot": 3.8,
    "carb": 22,
    "fat": 0.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "AU"
  },
  {
    "name": "Sashimi Assortment & Miso Soup",
    "cal": 325,
    "prot": 30.5,
    "carb": 31.5,
    "fat": 7.4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "Sattu (Roasted Chickpea Flour)",
    "cal": 120,
    "prot": 6.5,
    "carb": 19.5,
    "fat": 1.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Sattu Protein Drink",
    "cal": 120,
    "prot": 6,
    "carb": 19.5,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Sausage slices (Landjäger)",
    "cal": 160,
    "prot": 11,
    "carb": 0.5,
    "fat": 13,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "DE"
  },
  {
    "name": "Sautéed Green Beans",
    "cal": 28,
    "prot": 1.5,
    "carb": 5.2,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Sautéed Mushrooms",
    "cal": 40,
    "prot": 2.2,
    "carb": 4.5,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Sauteed Spinach (Palak)",
    "cal": 25,
    "prot": 2,
    "carb": 3,
    "fat": 0.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Savory Chicken Croquette (Coxinha)",
    "cal": 230,
    "prot": 9.5,
    "carb": 24,
    "fat": 11,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Schinken",
    "cal": 60,
    "prot": 9,
    "carb": 0.4,
    "fat": 2.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Scotch Egg & Cucumber Slices",
    "cal": 225,
    "prot": 10.5,
    "carb": 15,
    "fat": 14.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Scottish Smoked Salmon",
    "cal": 110,
    "prot": 13.2,
    "carb": 0,
    "fat": 6.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Scrambled",
    "cal": 80,
    "prot": 8.5,
    "carb": 1.5,
    "fat": 4.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Scrambled Egg Whites & Cheese",
    "cal": 150,
    "prot": 18,
    "carb": 1.5,
    "fat": 8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Scrambled Eggs (1 Whole, 2 Whites)",
    "cal": 110,
    "prot": 14,
    "carb": 0.8,
    "fat": 5.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "eggs",
    "country": "UK"
  },
  {
    "name": "Scrambled Eggs (2 Whole)",
    "cal": 140,
    "prot": 12,
    "carb": 0.6,
    "fat": 9.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "eggs",
    "country": "ZA"
  },
  {
    "name": "Scrambled Eggs (Butter)",
    "cal": 150,
    "prot": 12,
    "carb": 0.6,
    "fat": 11,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "eggs",
    "country": "BR"
  },
  {
    "name": "Scrambled Eggs & Beef Biltong",
    "cal": 330,
    "prot": 35,
    "carb": 16.6,
    "fat": 14,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Scrambled Eggs, Avocado & Toast",
    "cal": 305,
    "prot": 19.8,
    "carb": 19.5,
    "fat": 17.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Scrambled Tofu & Grilled Tomatoes",
    "cal": 208,
    "prot": 15.5,
    "carb": 22.6,
    "fat": 6.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Sea Bass, New Potatoes & Spinach",
    "cal": 260,
    "prot": 29.8,
    "carb": 20.8,
    "fat": 6.4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Semi-Skimmed Milk",
    "cal": 95,
    "prot": 7,
    "carb": 9.5,
    "fat": 3.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "UK"
  },
  {
    "name": "Senbei",
    "cal": 90,
    "prot": 1.8,
    "carb": 20,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "JP"
  },
  {
    "name": "Senbei Crackers & Green Tea",
    "cal": 92,
    "prot": 1.9,
    "carb": 20.4,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "Shake",
    "cal": 130,
    "prot": 18,
    "carb": 0,
    "fat": 6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Shakshuka, Pita & Labneh",
    "cal": 370,
    "prot": 19.7,
    "carb": 34.8,
    "fat": 17,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AE"
  },
  {
    "name": "Shaved Beef Biltong",
    "cal": 90,
    "prot": 16,
    "carb": 0.6,
    "fat": 2.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "Shelled Pumpkin Seeds",
    "cal": 85,
    "prot": 4.5,
    "carb": 2,
    "fat": 7.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Shelled Walnuts",
    "cal": 100,
    "prot": 2.2,
    "carb": 2,
    "fat": 10,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Shepherds Pie & Broccoli",
    "cal": 348,
    "prot": 22.2,
    "carb": 37.5,
    "fat": 12.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Shiitake, Scallion, Carrot",
    "cal": 35,
    "prot": 1.2,
    "carb": 7,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Shish Tawook & Tabbouleh",
    "cal": 355,
    "prot": 34.1,
    "carb": 13,
    "fat": 18.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AE"
  },
  {
    "name": "Shorbat Adas",
    "cal": 120,
    "prot": 6.5,
    "carb": 20,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "AE"
  },
  {
    "name": "Shredded Cheddar Cheese",
    "cal": 80,
    "prot": 5,
    "carb": 0.5,
    "fat": 6.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Shredded Chicken Breast",
    "cal": 50,
    "prot": 10,
    "carb": 0,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Shredded Seaweed & Onion",
    "cal": 10,
    "prot": 0.5,
    "carb": 2,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Silken Tofu",
    "cal": 60,
    "prot": 6.5,
    "carb": 2,
    "fat": 3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Sirloin Steak, Sweet Potato & Asparagus",
    "cal": 414,
    "prot": 37,
    "carb": 27.2,
    "fat": 16.4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Skewered Grilled Chicken (Yakitori)",
    "cal": 190,
    "prot": 26,
    "carb": 4,
    "fat": 7.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Skim Milk",
    "cal": 70,
    "prot": 7,
    "carb": 10,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "US"
  },
  {
    "name": "Skinless",
    "cal": 210,
    "prot": 30,
    "carb": 0,
    "fat": 9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Sliced Almonds",
    "cal": 90,
    "prot": 3,
    "carb": 3,
    "fat": 8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Sliced Banana",
    "cal": 45,
    "prot": 0.5,
    "carb": 11.5,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Sliced Chicken Polony",
    "cal": 95,
    "prot": 9,
    "carb": 2.5,
    "fat": 5.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "Sliced Cucumber & Mint",
    "cal": 8,
    "prot": 0.3,
    "carb": 1.8,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Sliced Lean Turkey",
    "cal": 65,
    "prot": 13,
    "carb": 0.5,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Sliced Plum Tomato",
    "cal": 10,
    "prot": 0.5,
    "carb": 2.2,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "Sliced Roast Beef",
    "cal": 140,
    "prot": 23,
    "carb": 0,
    "fat": 5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Sliced Strawberries",
    "cal": 16,
    "prot": 0.3,
    "carb": 4,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Sliced Tomato",
    "cal": 6,
    "prot": 0.3,
    "carb": 1.3,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Sliced Turkey Breast",
    "cal": 90,
    "prot": 18,
    "carb": 0.8,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Smashed Avo & Poached Eggs",
    "cal": 295,
    "prot": 16.8,
    "carb": 21.1,
    "fat": 16.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Smashed Avo, Grilled Feta & Toast",
    "cal": 245,
    "prot": 9,
    "carb": 23.5,
    "fat": 14.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Smoked Salmon & Scrambled Eggs",
    "cal": 305,
    "prot": 30.7,
    "carb": 16.8,
    "fat": 12.7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Smooth Hummus Dip",
    "cal": 70,
    "prot": 2.1,
    "carb": 5.5,
    "fat": 4.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Soft",
    "cal": 110,
    "prot": 2.2,
    "carb": 24,
    "fat": 0.4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "Sourdough Bread Toast",
    "cal": 90,
    "prot": 4,
    "carb": 17,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "slice",
    "country": "AU"
  },
  {
    "name": "Sourdough Toast",
    "cal": 90,
    "prot": 4,
    "carb": 17,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "slice",
    "country": "AU"
  },
  {
    "name": "South African Chakalaka with Baked Beans",
    "cal": 140,
    "prot": 5.5,
    "carb": 22,
    "fat": 3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "South African Veggie Patty",
    "cal": 130,
    "prot": 10,
    "carb": 12,
    "fat": 4.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "ZA"
  },
  {
    "name": "Soy-glazed Rice Crackers (Senbei)",
    "cal": 90,
    "prot": 1.8,
    "carb": 20,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "JP"
  },
  {
    "name": "Soya Chunks Curry",
    "cal": 180,
    "prot": 20,
    "carb": 12,
    "fat": 6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Soya Chunks Curry & Rice",
    "cal": 305,
    "prot": 22.6,
    "carb": 39,
    "fat": 6.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Spiced Shawarma Chicken Breast",
    "cal": 130,
    "prot": 22,
    "carb": 1,
    "fat": 4.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Spiced Vegetable Chakalaka",
    "cal": 60,
    "prot": 1.5,
    "carb": 10,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "Spicy Onion Tomato Gravy",
    "cal": 70,
    "prot": 1.8,
    "carb": 8,
    "fat": 3.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Spicy Pan-fried Rohu Fish",
    "cal": 220,
    "prot": 22,
    "carb": 2,
    "fat": 12,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Spinach & Vinaigrette",
    "cal": 30,
    "prot": 1.2,
    "carb": 4,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Sprouted Moong Beans",
    "cal": 120,
    "prot": 9,
    "carb": 19,
    "fat": 0.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Sprouted Moong Chaat",
    "cal": 120,
    "prot": 9,
    "carb": 19,
    "fat": 0.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Steam",
    "cal": 35,
    "prot": 2.4,
    "carb": 7.2,
    "fat": 0.4,
    "fiber": 3.3,
    "calcium": 47,
    "iron": 0.7,
    "unit": "grams (g)",
    "country": "GLOBAL"
  },
  {
    "name": "Steamed Asparagus",
    "cal": 16,
    "prot": 1.8,
    "carb": 3.2,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Steamed Baby Spinach",
    "cal": 20,
    "prot": 1.8,
    "carb": 2.8,
    "fat": 0.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Steamed Basmati Rice",
    "cal": 150,
    "prot": 3.2,
    "carb": 32,
    "fat": 0.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Steamed Bok Choy with sesame",
    "cal": 35,
    "prot": 1.8,
    "carb": 3.5,
    "fat": 2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Steamed Broccoli",
    "cal": 28,
    "prot": 2.2,
    "carb": 5.5,
    "fat": 0.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Steamed Broccoli Florets",
    "cal": 35,
    "prot": 2.8,
    "carb": 7,
    "fat": 0.4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Steamed Brussels Sprouts",
    "cal": 30,
    "prot": 2.4,
    "carb": 6,
    "fat": 0.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Steamed Green Peas",
    "cal": 40,
    "prot": 2.5,
    "carb": 7,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Steamed Idlis",
    "cal": 150,
    "prot": 4,
    "carb": 32,
    "fat": 0.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "IN"
  },
  {
    "name": "Steamed Kamaboko Fish Cake",
    "cal": 80,
    "prot": 10,
    "carb": 8,
    "fat": 0.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Steamed Khaman Dhokla",
    "cal": 150,
    "prot": 5,
    "carb": 26,
    "fat": 3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "IN"
  },
  {
    "name": "Steamed Rice",
    "cal": 125,
    "prot": 2.6,
    "carb": 27,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Steamed Sweet Potato",
    "cal": 90,
    "prot": 1.8,
    "carb": 20,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Steamed White Rice",
    "cal": 130,
    "prot": 2.7,
    "carb": 28,
    "fat": 0.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Stew",
    "cal": 255,
    "prot": 5.5,
    "carb": 49.5,
    "fat": 3.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Stir-fry Veggies (Pepper, Onion)",
    "cal": 35,
    "prot": 1.2,
    "carb": 7,
    "fat": 0.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Strawberry Fruit Jam",
    "cal": 40,
    "prot": 0.1,
    "carb": 10,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "String Cheese & Almonds",
    "cal": 170,
    "prot": 10.2,
    "carb": 4,
    "fat": 12.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Sunomono",
    "cal": 15,
    "prot": 0.4,
    "carb": 3,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Sushi Selection & Edamame",
    "cal": 328,
    "prot": 23.8,
    "carb": 42.2,
    "fat": 6.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "Sweet Potato",
    "cal": 86,
    "prot": 1.6,
    "carb": 20,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Sweet Potato & Black Bean Bowl",
    "cal": 220,
    "prot": 9.6,
    "carb": 44,
    "fat": 0.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Sweet Potato & Feta Wrap",
    "cal": 298,
    "prot": 10,
    "carb": 43.2,
    "fat": 8.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Swiss Cheese Slices",
    "cal": 110,
    "prot": 8,
    "carb": 0.4,
    "fat": 8.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Tabbouleh Salad",
    "cal": 95,
    "prot": 2,
    "carb": 10,
    "fat": 6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Tahini Dip",
    "cal": 90,
    "prot": 2.5,
    "carb": 3,
    "fat": 8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Takuan",
    "cal": 10,
    "prot": 0.2,
    "carb": 2,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Tamagoyaki",
    "cal": 120,
    "prot": 8.5,
    "carb": 4,
    "fat": 8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Tamagoyaki, Rice & Pickle",
    "cal": 280,
    "prot": 11.7,
    "carb": 39,
    "fat": 8.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "Tapioca Crepe with Cheese & Tomato",
    "cal": 266,
    "prot": 7.7,
    "carb": 41.3,
    "fat": 7.7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Tapioca Crepe with Eggs & Cheese",
    "cal": 310,
    "prot": 18.2,
    "carb": 40.5,
    "fat": 8.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Tapioca Flour Crepe",
    "cal": 160,
    "prot": 0.2,
    "carb": 39,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Tempeh & Veggie Wrap",
    "cal": 300,
    "prot": 20.8,
    "carb": 33,
    "fat": 9.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Tempura Sweet Potato & Zucchini",
    "cal": 110,
    "prot": 1.5,
    "carb": 15,
    "fat": 5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Teriyaki Tofu & Bok Choy",
    "cal": 320,
    "prot": 18.3,
    "carb": 39,
    "fat": 10.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "Teriyaki Tofu Rice Bowl",
    "cal": 275,
    "prot": 14,
    "carb": 36.5,
    "fat": 7.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "Thai Green Tofu Curry & Rice",
    "cal": 315,
    "prot": 13.5,
    "carb": 39.5,
    "fat": 11.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Thick Labneh Dip",
    "cal": 80,
    "prot": 3,
    "carb": 2.4,
    "fat": 6.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Three Bean Veggie Chili",
    "cal": 320,
    "prot": 19,
    "carb": 42.5,
    "fat": 8.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Three-Bean Stew (Black, Kidney, Pinto)",
    "cal": 240,
    "prot": 14,
    "carb": 42,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Tofu in Thai Green Curry Sauce",
    "cal": 190,
    "prot": 11,
    "carb": 12,
    "fat": 11,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Tofu Scramble & Avocado Toast",
    "cal": 305,
    "prot": 17.3,
    "carb": 35,
    "fat": 12.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Tofu stir-fry with Brown Rice",
    "cal": 235,
    "prot": 12.8,
    "carb": 32,
    "fat": 6.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Tofu, Rice & Miso Soup",
    "cal": 245,
    "prot": 11.5,
    "carb": 39,
    "fat": 4.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "Tomato & Mustard Salad",
    "cal": 25,
    "prot": 0.8,
    "carb": 4,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Tomato Garlic Salad",
    "cal": 25,
    "prot": 0.8,
    "carb": 4,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Tomato Salsa (Campanha)",
    "cal": 20,
    "prot": 0.5,
    "carb": 3.5,
    "fat": 0.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Tomato sauce",
    "cal": 170,
    "prot": 13,
    "carb": 5,
    "fat": 11,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "eggs",
    "country": "AE"
  },
  {
    "name": "Tossed Feta & Olive oil",
    "cal": 60,
    "prot": 2.8,
    "carb": 0.8,
    "fat": 5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Toum",
    "cal": 50,
    "prot": 0.1,
    "carb": 2,
    "fat": 4.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Traditional Cheese Bread",
    "cal": 220,
    "prot": 4.2,
    "carb": 28,
    "fat": 10,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "BR"
  },
  {
    "name": "Traditional Egg Spätzle",
    "cal": 190,
    "prot": 6.5,
    "carb": 36,
    "fat": 2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Traditional Hummus",
    "cal": 140,
    "prot": 4.2,
    "carb": 11,
    "fat": 9.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Traditional Labneh",
    "cal": 40,
    "prot": 1.5,
    "carb": 1.2,
    "fat": 3.4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AE"
  },
  {
    "name": "Traditional Pork Scotch Egg",
    "cal": 210,
    "prot": 10,
    "carb": 12,
    "fat": 14,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Traditional Rolled Oats",
    "cal": 190,
    "prot": 6,
    "carb": 34,
    "fat": 3.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Traditional Spätzle Pasta",
    "cal": 240,
    "prot": 8,
    "carb": 45,
    "fat": 2.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "DE"
  },
  {
    "name": "Traditional Veg Potjiekos Stew",
    "cal": 130,
    "prot": 3,
    "carb": 22,
    "fat": 3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "Tsuyu Dipping Sauce",
    "cal": 20,
    "prot": 0.5,
    "carb": 4,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "JP"
  },
  {
    "name": "Tuna & Salmon",
    "cal": 165,
    "prot": 26,
    "carb": 0,
    "fat": 6.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Tuna Flakes cup",
    "cal": 67,
    "prot": 15,
    "carb": 0.5,
    "fat": 0.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "Tuna, Salmon, Prawn",
    "cal": 240,
    "prot": 15,
    "carb": 35,
    "fat": 2.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "JP"
  },
  {
    "name": "Turkey & Swiss Cheese Sandwich",
    "cal": 380,
    "prot": 38,
    "carb": 31.4,
    "fat": 12.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Turkey Bacon",
    "cal": 70,
    "prot": 6,
    "carb": 0.5,
    "fat": 5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "slices",
    "country": "US"
  },
  {
    "name": "Turkey Bacon, Egg White Omelet & Toast",
    "cal": 218,
    "prot": 24.5,
    "carb": 16.5,
    "fat": 6.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Turkey Breast slices",
    "cal": 65,
    "prot": 13,
    "carb": 0.5,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Turkey Jerky & Walnuts",
    "cal": 190,
    "prot": 13.2,
    "carb": 4,
    "fat": 14,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Turkey Meatballs & Whole Wheat Pasta",
    "cal": 540,
    "prot": 33.5,
    "carb": 70,
    "fat": 15,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Turkey roll-ups & Chamomile tea",
    "cal": 67,
    "prot": 13,
    "carb": 1,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Turkey Roll-ups with Cream Cheese",
    "cal": 130,
    "prot": 19.5,
    "carb": 2,
    "fat": 4.7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Turkey Roll-ups with Labneh",
    "cal": 130,
    "prot": 19.5,
    "carb": 2,
    "fat": 4.9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AE"
  },
  {
    "name": "Turkey slice & Chamomile Tea",
    "cal": 57,
    "prot": 11,
    "carb": 0.9,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AE"
  },
  {
    "name": "Turkey slices",
    "cal": 65,
    "prot": 13,
    "carb": 0.5,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "DE"
  },
  {
    "name": "Turkey slices & Chamomile Tea",
    "cal": 57,
    "prot": 11,
    "carb": 0.9,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Turkey slices & Macadamia nuts",
    "cal": 170,
    "prot": 14.2,
    "carb": 2.6,
    "fat": 12,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Turmeric & Black Pepper",
    "cal": 5,
    "prot": 0.1,
    "carb": 1,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Udon Noodles in Kelp Dashi",
    "cal": 220,
    "prot": 6,
    "carb": 46,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Unsweetened Soy Milk",
    "cal": 85,
    "prot": 8,
    "carb": 4,
    "fat": 4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "JP"
  },
  {
    "name": "Upma",
    "cal": 210,
    "prot": 4,
    "carb": 36,
    "fat": 5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "Veg",
    "cal": 290,
    "prot": 9,
    "carb": 38,
    "fat": 11,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "GLOBAL"
  },
  {
    "name": "Vegemite Yeast Extract",
    "cal": 10,
    "prot": 1.3,
    "carb": 1,
    "fat": 0.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "AU"
  },
  {
    "name": "Vegetable & Tofu Feijoada",
    "cal": 180,
    "prot": 9,
    "carb": 26,
    "fat": 4.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Vegetable Basmati Pulao",
    "cal": 250,
    "prot": 5.5,
    "carb": 46,
    "fat": 4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Vegetable Moqueca (Palm Oil/Dendê & Coconut)",
    "cal": 220,
    "prot": 3.5,
    "carb": 18,
    "fat": 16,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Vegetable Moqueca & Rice",
    "cal": 345,
    "prot": 6,
    "carb": 45.5,
    "fat": 16.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Vegetable Potjiekos (Stew) & Rice",
    "cal": 255,
    "prot": 5.5,
    "carb": 49.5,
    "fat": 3.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Vegetable Pulao & Cucumber Raita",
    "cal": 310,
    "prot": 8.7,
    "carb": 50.5,
    "fat": 7.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Vegetable Saloona & Rice",
    "cal": 290,
    "prot": 6.7,
    "carb": 54,
    "fat": 4.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AE"
  },
  {
    "name": "Vegetable Sushi Roll & Edamame",
    "cal": 268,
    "prot": 12,
    "carb": 45.2,
    "fat": 6.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "Vegetable Udon Noodle Soup",
    "cal": 255,
    "prot": 7.2,
    "carb": 53,
    "fat": 1.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "Vegetable Wellington & Roast Potatoes",
    "cal": 410,
    "prot": 12.5,
    "carb": 63,
    "fat": 12.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Vegetarian Abendbrot",
    "cal": 325,
    "prot": 15.8,
    "carb": 34.8,
    "fat": 12.9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "DE"
  },
  {
    "name": "Vegetarian Burger & Sweet Potato Fries",
    "cal": 330,
    "prot": 16.7,
    "carb": 52,
    "fat": 6.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Vegetarian Cheese & Onion Pasty",
    "cal": 280,
    "prot": 7.5,
    "carb": 30,
    "fat": 15,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Vegetarian Full English",
    "cal": 290,
    "prot": 19.3,
    "carb": 36.5,
    "fat": 6.9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Vegetarian Sausage",
    "cal": 110,
    "prot": 9.5,
    "carb": 5,
    "fat": 5.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "UK"
  },
  {
    "name": "Vegetarian Tofu Sausage",
    "cal": 120,
    "prot": 9,
    "carb": 4.5,
    "fat": 7.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "DE"
  },
  {
    "name": "Vegetarian Wellington Slice",
    "cal": 240,
    "prot": 8,
    "carb": 32,
    "fat": 9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Veggie & Grain Patty",
    "cal": 140,
    "prot": 11,
    "carb": 14,
    "fat": 5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "US"
  },
  {
    "name": "Veggie Burger & Baked Sweet Potato Fries",
    "cal": 320,
    "prot": 15.2,
    "carb": 50,
    "fat": 6.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Veggie Feijoada & Rice",
    "cal": 305,
    "prot": 11.5,
    "carb": 53.5,
    "fat": 4.7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "BR"
  },
  {
    "name": "Veggie Sausage & Potato Salad",
    "cal": 270,
    "prot": 11.2,
    "carb": 28.5,
    "fat": 12.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "DE"
  },
  {
    "name": "Vinagrete",
    "cal": 25,
    "prot": 0.5,
    "carb": 4,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Vinegar Salad (Vinagrete)",
    "cal": 25,
    "prot": 0.5,
    "carb": 4,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Vollkornbrot",
    "cal": 170,
    "prot": 5.5,
    "carb": 32,
    "fat": 1.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "slices",
    "country": "DE"
  },
  {
    "name": "Vollkornbrot (Dark Rye)",
    "cal": 85,
    "prot": 2.8,
    "carb": 16,
    "fat": 0.9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "slice",
    "country": "DE"
  },
  {
    "name": "Vollkornbrot with Cheese & Boiled Egg",
    "cal": 269,
    "prot": 16.6,
    "carb": 17,
    "fat": 14.4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "DE"
  },
  {
    "name": "Vollkornbrot with Cheese & Cucumber",
    "cal": 293,
    "prot": 14.3,
    "carb": 34,
    "fat": 10.9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "DE"
  },
  {
    "name": "Wakame Miso Soup",
    "cal": 35,
    "prot": 2,
    "carb": 4,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "JP"
  },
  {
    "name": "Walnut Halves",
    "cal": 100,
    "prot": 2.3,
    "carb": 2,
    "fat": 9.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "UK"
  },
  {
    "name": "Walnuts",
    "cal": 100,
    "prot": 2.2,
    "carb": 2,
    "fat": 10,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Warm Camel Milk & Date",
    "cal": 156,
    "prot": 6.6,
    "carb": 27.2,
    "fat": 3.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AE"
  },
  {
    "name": "Warm Cow Milk",
    "cal": 120,
    "prot": 6.8,
    "carb": 9.6,
    "fat": 6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "ZA"
  },
  {
    "name": "Warm Haldi Milk",
    "cal": 95,
    "prot": 6.9,
    "carb": 10.6,
    "fat": 2.1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Warm Milk & Honey",
    "cal": 117,
    "prot": 7,
    "carb": 15.5,
    "fat": 3.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Warm Milk with Almonds",
    "cal": 180,
    "prot": 8.5,
    "carb": 11.5,
    "fat": 11.7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "IN"
  },
  {
    "name": "Warm Milk with Honey",
    "cal": 117,
    "prot": 7,
    "carb": 15.5,
    "fat": 3.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "UK"
  },
  {
    "name": "Warm Oats with Chia & Berries",
    "cal": 240,
    "prot": 8.2,
    "carb": 37.2,
    "fat": 6.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "ZA"
  },
  {
    "name": "Water",
    "cal": 0,
    "prot": 0,
    "carb": 0,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "US"
  },
  {
    "name": "Water & Cinnamon",
    "cal": 0,
    "prot": 0,
    "carb": 0,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "ZA"
  },
  {
    "name": "Water & Lemon Juice",
    "cal": 5,
    "prot": 0.1,
    "carb": 1.2,
    "fat": 0,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "IN"
  },
  {
    "name": "Weet-Bix, Milk & Banana",
    "cal": 245,
    "prot": 11.1,
    "carb": 43.3,
    "fat": 2.9,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AU"
  },
  {
    "name": "Wheat Burger Bun",
    "cal": 120,
    "prot": 4,
    "carb": 22,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "ZA"
  },
  {
    "name": "Wheat Roti / Chapati",
    "cal": 120,
    "prot": 3.1,
    "carb": 22.4,
    "fat": 2.2,
    "fiber": 2.8,
    "calcium": 12,
    "iron": 0.9,
    "unit": "pieces",
    "country": "GLOBAL"
  },
  {
    "name": "Whey Protein",
    "cal": 120,
    "prot": 24,
    "carb": 3,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "scoop",
    "country": "GLOBAL"
  },
  {
    "name": "Whey Protein Isolate",
    "cal": 120,
    "prot": 25,
    "carb": 1.5,
    "fat": 1,
    "fiber": 0,
    "calcium": 120,
    "iron": 0.5,
    "unit": "scoop (30g)",
    "country": "GLOBAL"
  },
  {
    "name": "Whey Protein Shake & Carrots",
    "cal": 150,
    "prot": 25.9,
    "carb": 10.5,
    "fat": 0.7,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "Whey/Casein Protein shake",
    "cal": 110,
    "prot": 24,
    "carb": 1.5,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "US"
  },
  {
    "name": "White Maize Meal (Pap)",
    "cal": 175,
    "prot": 3.8,
    "carb": 38,
    "fat": 0.6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "White Maize Porridge (Soft)",
    "cal": 110,
    "prot": 2.2,
    "carb": 24,
    "fat": 0.4,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "White Rice",
    "cal": 195,
    "prot": 4,
    "carb": 42,
    "fat": 0.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "GLOBAL"
  },
  {
    "name": "White Rice (Cooked)",
    "cal": 130,
    "prot": 2.7,
    "carb": 28.2,
    "fat": 0.3,
    "fiber": 0.4,
    "calcium": 10,
    "iron": 0.2,
    "unit": "grams (g)",
    "country": "GLOBAL"
  },
  {
    "name": "White Rice & Carioca Beans",
    "cal": 210,
    "prot": 8,
    "carb": 42,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "BR"
  },
  {
    "name": "Whole Eggs",
    "cal": 140,
    "prot": 12,
    "carb": 0.6,
    "fat": 9.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "eggs",
    "country": "GLOBAL"
  },
  {
    "name": "Whole Eggs (Boiled)",
    "cal": 155,
    "prot": 12.6,
    "carb": 1.1,
    "fat": 10.6,
    "fiber": 0,
    "calcium": 50,
    "iron": 1.2,
    "unit": "grams (g)",
    "country": "GLOBAL"
  },
  {
    "name": "Whole Eggs (Hard Boiled)",
    "cal": 140,
    "prot": 12,
    "carb": 0.6,
    "fat": 9.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "eggs",
    "country": "IN"
  },
  {
    "name": "Whole Grain Sourdough",
    "cal": 100,
    "prot": 4.5,
    "carb": 18,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "slice",
    "country": "AU"
  },
  {
    "name": "Whole Milk",
    "cal": 150,
    "prot": 8,
    "carb": 12,
    "fat": 8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "IN"
  },
  {
    "name": "Whole Milk (Cow)",
    "cal": 61,
    "prot": 3.2,
    "carb": 4.8,
    "fat": 3.3,
    "fiber": 0,
    "calcium": 113,
    "iron": 0.1,
    "unit": "ml",
    "country": "GLOBAL"
  },
  {
    "name": "Whole Wheat Bread Slices",
    "cal": 160,
    "prot": 8,
    "carb": 30,
    "fat": 2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "US"
  },
  {
    "name": "Whole Wheat Bread Toast",
    "cal": 160,
    "prot": 8,
    "carb": 30,
    "fat": 2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "slices",
    "country": "GLOBAL"
  },
  {
    "name": "Whole Wheat Burger Bun",
    "cal": 120,
    "prot": 4.5,
    "carb": 22,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "US"
  },
  {
    "name": "Whole Wheat Dough",
    "cal": 260,
    "prot": 6,
    "carb": 54,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Whole Wheat Paratha",
    "cal": 260,
    "prot": 6,
    "carb": 44,
    "fat": 6,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "IN"
  },
  {
    "name": "Whole Wheat Pita Bread",
    "cal": 130,
    "prot": 4.2,
    "carb": 26,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "AE"
  },
  {
    "name": "Whole Wheat Roti",
    "cal": 160,
    "prot": 5.2,
    "carb": 32,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pcs",
    "country": "IN"
  },
  {
    "name": "Whole Wheat Spaghetti",
    "cal": 280,
    "prot": 10,
    "carb": 58,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "US"
  },
  {
    "name": "Whole Wheat Toast",
    "cal": 80,
    "prot": 4,
    "carb": 15,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "slice",
    "country": "US"
  },
  {
    "name": "Whole Wheat Wrap",
    "cal": 130,
    "prot": 4,
    "carb": 22,
    "fat": 2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "ZA"
  },
  {
    "name": "Wholemeal Crusty Roll",
    "cal": 130,
    "prot": 5,
    "carb": 26,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "UK"
  },
  {
    "name": "Wholemeal Flatbread Wrap",
    "cal": 130,
    "prot": 4,
    "carb": 22,
    "fat": 2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "AU"
  },
  {
    "name": "Wholemeal Toast",
    "cal": 80,
    "prot": 4,
    "carb": 15,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "slice",
    "country": "ZA"
  },
  {
    "name": "Wholemeal Tortilla Wrap",
    "cal": 140,
    "prot": 4.5,
    "carb": 24,
    "fat": 2.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "UK"
  },
  {
    "name": "Yakitori",
    "cal": 190,
    "prot": 26,
    "carb": 4,
    "fat": 7.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "JP"
  },
  {
    "name": "Yakitori Chicken Bento",
    "cal": 330,
    "prot": 29,
    "carb": 34.5,
    "fat": 7.8,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "JP"
  },
  {
    "name": "Yellow Dal Tadka",
    "cal": 80,
    "prot": 4.8,
    "carb": 13,
    "fat": 1.2,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "IN"
  },
  {
    "name": "Yellow Lentil Soup (Shorbat Adas)",
    "cal": 120,
    "prot": 6.5,
    "carb": 20,
    "fat": 1.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "AE"
  },
  {
    "name": "Yellow Moong Dal",
    "cal": 110,
    "prot": 7,
    "carb": 20,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "ml",
    "country": "GLOBAL"
  },
  {
    "name": "Yellow Rice with Raisins",
    "cal": 140,
    "prot": 2.6,
    "carb": 30,
    "fat": 1,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "g",
    "country": "ZA"
  },
  {
    "name": "Yellow Toor Dal (Cooked)",
    "cal": 116,
    "prot": 6.8,
    "carb": 19.8,
    "fat": 1.2,
    "fiber": 3.5,
    "calcium": 24,
    "iron": 1.1,
    "unit": "grams (g)",
    "country": "GLOBAL"
  },
  {
    "name": "Zaatar Flatbread & Labneh",
    "cal": 260,
    "prot": 7.5,
    "carb": 30.4,
    "fat": 12.3,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "meal serving",
    "country": "AE"
  },
  {
    "name": "Zaatar Spice Flatbread (Manakish)",
    "cal": 180,
    "prot": 4.5,
    "carb": 28,
    "fat": 5.5,
    "fiber": 0,
    "calcium": 0,
    "iron": 0,
    "unit": "pc",
    "country": "AE"
  }
]
;
var DIET_DATABASE = {
  "IN": {
    "name": "India",
    "meals": {
      "breakfast": {
        "name": "Breakfast",
        "time": "08:30 AM",
        "options": [
          {
            "name": "Poha & Green Tea",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "mumbai"
            ],
            "ingredients": [
              {
                "name": "Flattened Rice (Poha)",
                "baseQty": 80,
                "unit": "g",
                "cal": 260,
                "p": 4.8,
                "c": 58,
                "f": 1.2,
                "micros": {
                  "Iron (mg)": 2.6,
                  "Sodium (mg)": 12,
                  "Vitamin C (mg)": 8
                }
              },
              {
                "name": "Roasted Peanuts",
                "baseQty": 15,
                "unit": "g",
                "cal": 85,
                "p": 3.8,
                "c": 2.4,
                "f": 7.2,
                "micros": {
                  "Magnesium (mg)": 25,
                  "Vitamin E (mg)": 1.2
                }
              },
              {
                "name": "Mixed Veg (Onion, Peas)",
                "baseQty": 50,
                "unit": "g",
                "cal": 20,
                "p": 1,
                "c": 4.2,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 15,
                  "Potassium (mg)": 120
                }
              },
              {
                "name": "Green Tea",
                "baseQty": 1,
                "unit": "cup",
                "cal": 2,
                "p": 0.1,
                "c": 0.4,
                "f": 0,
                "micros": {
                  "Fluoride (mg)": 0.3
                }
              }
            ]
          },
          {
            "name": "Idli, Sambhar & Chutney",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "bangalore",
              "chennai"
            ],
            "ingredients": [
              {
                "name": "Steamed Idlis",
                "baseQty": 3,
                "unit": "pcs",
                "cal": 150,
                "p": 4,
                "c": 32,
                "f": 0.5,
                "micros": {
                  "Calcium (mg)": 10,
                  "Iron (mg)": 0.8
                }
              },
              {
                "name": "Mixed Vegetable Sambhar",
                "baseQty": 150,
                "unit": "ml",
                "cal": 80,
                "p": 3,
                "c": 14,
                "f": 2,
                "micros": {
                  "Vitamin C (mg)": 12,
                  "Potassium (mg)": 180
                }
              },
              {
                "name": "Coconut Chutney",
                "baseQty": 30,
                "unit": "g",
                "cal": 90,
                "p": 1,
                "c": 3,
                "f": 8.5,
                "micros": {
                  "Sodium (mg)": 85
                }
              }
            ]
          },
          {
            "name": "Paneer Paratha & Curd",
            "profile": "high-protein",
            "type": "veg",
            "cities": [
              "delhi"
            ],
            "ingredients": [
              {
                "name": "Whole Wheat Paratha",
                "baseQty": 2,
                "unit": "pcs",
                "cal": 260,
                "p": 6,
                "c": 44,
                "f": 6,
                "micros": {
                  "Iron (mg)": 1.8,
                  "Calcium (mg)": 20
                }
              },
              {
                "name": "Low-Fat Paneer Stuffing",
                "baseQty": 75,
                "unit": "g",
                "cal": 135,
                "p": 14,
                "c": 2,
                "f": 8,
                "micros": {
                  "Calcium (mg)": 240,
                  "Sodium (mg)": 40
                }
              },
              {
                "name": "Fresh Plain Curd",
                "baseQty": 100,
                "unit": "g",
                "cal": 60,
                "p": 3.5,
                "c": 4.5,
                "f": 3,
                "micros": {
                  "Calcium (mg)": 120,
                  "Potassium (mg)": 140
                }
              }
            ]
          },
          {
            "name": "Moong Dal Chilla & Mint Chutney",
            "profile": "high-protein",
            "type": "veg",
            "ingredients": [
              {
                "name": "Moong Dal Chilla",
                "baseQty": 2,
                "unit": "pcs",
                "cal": 220,
                "p": 12,
                "c": 36,
                "f": 3,
                "micros": {
                  "Iron (mg)": 3.2,
                  "Folate (mcg)": 80
                }
              },
              {
                "name": "Grated Paneer filling",
                "baseQty": 40,
                "unit": "g",
                "cal": 110,
                "p": 7.5,
                "c": 1.2,
                "f": 8.5,
                "micros": {
                  "Calcium (mg)": 130
                }
              },
              {
                "name": "Mint & Coriander Chutney",
                "baseQty": 20,
                "unit": "g",
                "cal": 15,
                "p": 0.5,
                "c": 2,
                "f": 0.5,
                "micros": {
                  "Vitamin C (mg)": 10
                }
              }
            ]
          },
          {
            "name": "Egg Bhurji & Whole Wheat Toast",
            "profile": "high-protein",
            "type": "non-veg",
            "cities": [
              "mumbai",
              "delhi"
            ],
            "ingredients": [
              {
                "name": "Eggs (2 Whole, 1 White)",
                "baseQty": 3,
                "unit": "eggs",
                "cal": 160,
                "p": 15,
                "c": 1,
                "f": 10.5,
                "micros": {
                  "Vitamin D (mcg)": 2,
                  "Calcium (mg)": 40
                }
              },
              {
                "name": "Whole Wheat Bread Toast",
                "baseQty": 2,
                "unit": "pcs",
                "cal": 160,
                "p": 8,
                "c": 30,
                "f": 2,
                "micros": {
                  "Iron (mg)": 1.6
                }
              },
              {
                "name": "Mixed Vegetables (Onion, Tomato)",
                "baseQty": 50,
                "unit": "g",
                "cal": 20,
                "p": 1,
                "c": 4,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 12
                }
              }
            ]
          },
          {
            "name": "Oatmeal with Almonds & Milk",
            "profile": "surplus",
            "type": "veg",
            "ingredients": [
              {
                "name": "Rolled Oats",
                "baseQty": 60,
                "unit": "g",
                "cal": 230,
                "p": 8,
                "c": 40,
                "f": 4,
                "micros": {
                  "Iron (mg)": 2.8,
                  "Magnesium (mg)": 75
                }
              },
              {
                "name": "Whole Milk",
                "baseQty": 250,
                "unit": "ml",
                "cal": 150,
                "p": 8,
                "c": 12,
                "f": 8,
                "micros": {
                  "Calcium (mg)": 290,
                  "Vitamin D (mcg)": 2.5
                }
              },
              {
                "name": "Sliced Almonds",
                "baseQty": 15,
                "unit": "g",
                "cal": 90,
                "p": 3,
                "c": 3,
                "f": 8,
                "micros": {
                  "Vitamin E (mg)": 4
                }
              },
              {
                "name": "Honey",
                "baseQty": 1,
                "unit": "tbsp",
                "cal": 64,
                "p": 0,
                "c": 17,
                "f": 0,
                "micros": {}
              }
            ]
          },
          {
            "name": "Masala Omelet & Toast",
            "profile": "balanced",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Whole Eggs",
                "baseQty": 2,
                "unit": "eggs",
                "cal": 140,
                "p": 12,
                "c": 0.6,
                "f": 9.8,
                "micros": {
                  "Vitamin D (mcg)": 1.2
                }
              },
              {
                "name": "Whole Wheat Bread Toast",
                "baseQty": 2,
                "unit": "pcs",
                "cal": 160,
                "p": 8,
                "c": 30,
                "f": 2,
                "micros": {
                  "Iron (mg)": 1.6
                }
              },
              {
                "name": "Butter (for cooking)",
                "baseQty": 5,
                "unit": "g",
                "cal": 36,
                "p": 0,
                "c": 0,
                "f": 4,
                "micros": {}
              }
            ]
          },
          {
            "name": "Chicken Keema Paratha",
            "profile": "surplus",
            "type": "non-veg",
            "cities": [
              "delhi"
            ],
            "ingredients": [
              {
                "name": "Whole Wheat Dough",
                "baseQty": 80,
                "unit": "g",
                "cal": 260,
                "p": 6,
                "c": 54,
                "f": 1.5,
                "micros": {
                  "Iron (mg)": 2
                }
              },
              {
                "name": "Minced Chicken (Keema)",
                "baseQty": 60,
                "unit": "g",
                "cal": 90,
                "p": 12,
                "c": 0.5,
                "f": 4.5,
                "micros": {
                  "Iron (mg)": 0.8
                }
              },
              {
                "name": "Ghee",
                "baseQty": 5,
                "unit": "g",
                "cal": 45,
                "p": 0,
                "c": 0,
                "f": 5,
                "micros": {}
              }
            ]
          }
        ]
      },
      "snack1": {
        "name": "Mid-morning Snack",
        "time": "11:00 AM",
        "options": [
          {
            "name": "Fresh Fruit Salad",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Papaya & Apple Slices",
                "baseQty": 150,
                "unit": "g",
                "cal": 75,
                "p": 0.8,
                "c": 18,
                "f": 0.2,
                "micros": {
                  "Vitamin C (mg)": 65,
                  "Vitamin A (mcg)": 50,
                  "Potassium (mg)": 220
                }
              }
            ]
          },
          {
            "name": "Roasted Chana & Lemon tea",
            "profile": "high-protein",
            "type": "veg",
            "ingredients": [
              {
                "name": "Roasted Black Chana",
                "baseQty": 40,
                "unit": "g",
                "cal": 140,
                "p": 8,
                "c": 22,
                "f": 2.2,
                "micros": {
                  "Iron (mg)": 2.2,
                  "Fibre (g)": 6
                }
              },
              {
                "name": "Lemon Tea (No Sugar)",
                "baseQty": 1,
                "unit": "cup",
                "cal": 4,
                "p": 0.1,
                "c": 1,
                "f": 0,
                "micros": {
                  "Vitamin C (mg)": 4
                }
              }
            ]
          },
          {
            "name": "Sprouted Moong Chaat",
            "profile": "high-protein",
            "type": "veg",
            "ingredients": [
              {
                "name": "Sprouted Moong Beans",
                "baseQty": 100,
                "unit": "g",
                "cal": 120,
                "p": 9,
                "c": 19,
                "f": 0.8,
                "micros": {
                  "Vitamin C (mg)": 14,
                  "Iron (mg)": 2,
                  "Potassium (mg)": 300
                }
              }
            ]
          },
          {
            "name": "Mixed Nuts Portfolio",
            "profile": "surplus",
            "type": "veg",
            "ingredients": [
              {
                "name": "Almonds & Cashews",
                "baseQty": 25,
                "unit": "g",
                "cal": 145,
                "p": 4.8,
                "c": 7.2,
                "f": 12,
                "micros": {
                  "Magnesium (mg)": 65,
                  "Iron (mg)": 1.2
                }
              },
              {
                "name": "Raisins",
                "baseQty": 15,
                "unit": "g",
                "cal": 45,
                "p": 0.5,
                "c": 11.8,
                "f": 0.1,
                "micros": {
                  "Potassium (mg)": 110
                }
              }
            ]
          },
          {
            "name": "Egg White Salad Cups",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Boiled Egg Whites",
                "baseQty": 4,
                "unit": "eggs",
                "cal": 68,
                "p": 14.5,
                "c": 1,
                "f": 0.2,
                "micros": {
                  "Potassium (mg)": 200
                }
              },
              {
                "name": "Cucumber & Tomato Chopped",
                "baseQty": 100,
                "unit": "g",
                "cal": 20,
                "p": 0.8,
                "c": 4,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 12
                }
              },
              {
                "name": "Olive Oil Dressing",
                "baseQty": 5,
                "unit": "ml",
                "cal": 45,
                "p": 0,
                "c": 0,
                "f": 5,
                "micros": {}
              }
            ]
          },
          {
            "name": "Chicken Salami Slices",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Chicken Salami (Lean)",
                "baseQty": 50,
                "unit": "g",
                "cal": 85,
                "p": 10,
                "c": 1.5,
                "f": 4.5,
                "micros": {
                  "Sodium (mg)": 350
                }
              },
              {
                "name": "Cucumber Slices",
                "baseQty": 100,
                "unit": "g",
                "cal": 15,
                "p": 0.5,
                "c": 3,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 8
                }
              }
            ]
          }
        ]
      },
      "lunch": {
        "name": "Lunch",
        "time": "01:30 PM",
        "options": [
          {
            "name": "Roti, Dal, Veg Sabzi & Curd",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "delhi",
              "mumbai"
            ],
            "ingredients": [
              {
                "name": "Whole Wheat Roti",
                "baseQty": 2,
                "unit": "pcs",
                "cal": 160,
                "p": 5.2,
                "c": 32,
                "f": 1,
                "micros": {
                  "Iron (mg)": 1.2
                }
              },
              {
                "name": "Yellow Moong Dal",
                "baseQty": 150,
                "unit": "g",
                "cal": 120,
                "p": 7.2,
                "c": 20,
                "f": 2,
                "micros": {
                  "Iron (mg)": 1.8,
                  "Potassium (mg)": 280
                }
              },
              {
                "name": "Mixed Vegetable Sabzi",
                "baseQty": 100,
                "unit": "g",
                "cal": 70,
                "p": 2,
                "c": 10,
                "f": 2.5,
                "micros": {
                  "Vitamin A (mcg)": 120,
                  "Vitamin C (mg)": 25
                }
              },
              {
                "name": "Plain Low-fat Curd",
                "baseQty": 100,
                "unit": "g",
                "cal": 60,
                "p": 3.5,
                "c": 4.5,
                "f": 3,
                "micros": {
                  "Calcium (mg)": 120
                }
              }
            ]
          },
          {
            "name": "Brown Rice, Paneer Bhurji & Spinach",
            "profile": "high-protein",
            "type": "veg",
            "ingredients": [
              {
                "name": "Cooked Brown Rice",
                "baseQty": 100,
                "unit": "g",
                "cal": 110,
                "p": 2.6,
                "c": 23,
                "f": 0.9,
                "micros": {
                  "Magnesium (mg)": 43
                }
              },
              {
                "name": "Low-Fat Paneer Bhurji",
                "baseQty": 100,
                "unit": "g",
                "cal": 180,
                "p": 18,
                "c": 3,
                "f": 11,
                "micros": {
                  "Calcium (mg)": 320
                }
              },
              {
                "name": "Sauteed Spinach (Palak)",
                "baseQty": 80,
                "unit": "g",
                "cal": 25,
                "p": 2,
                "c": 3,
                "f": 0.5,
                "micros": {
                  "Iron (mg)": 2.2,
                  "Vitamin A (mcg)": 380
                }
              }
            ]
          },
          {
            "name": "Chicken Curry & Basmati Rice",
            "profile": "high-protein",
            "type": "non-veg",
            "cities": [
              "delhi",
              "mumbai",
              "bangalore"
            ],
            "ingredients": [
              {
                "name": "Lean Chicken Curry",
                "baseQty": 150,
                "unit": "g",
                "cal": 220,
                "p": 28,
                "c": 4,
                "f": 8,
                "micros": {
                  "Iron (mg)": 1.4,
                  "Vitamin B12 (mcg)": 0.8
                }
              },
              {
                "name": "Steamed Basmati Rice",
                "baseQty": 120,
                "unit": "g",
                "cal": 150,
                "p": 3.2,
                "c": 32,
                "f": 0.3,
                "micros": {
                  "Selenium (mcg)": 12
                }
              },
              {
                "name": "Cucumber Onion Salad",
                "baseQty": 80,
                "unit": "g",
                "cal": 15,
                "p": 0.5,
                "c": 3,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 8
                }
              }
            ]
          },
          {
            "name": "Fish Curry (Machher Jhol) & Rice",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "kolkata",
              "chennai"
            ],
            "ingredients": [
              {
                "name": "Rohu Fish Curry",
                "baseQty": 120,
                "unit": "g",
                "cal": 190,
                "p": 22,
                "c": 3,
                "f": 9,
                "micros": {
                  "Vitamin D (mcg)": 2.5,
                  "Iron (mg)": 1.2
                }
              },
              {
                "name": "Steamed White Rice",
                "baseQty": 130,
                "unit": "g",
                "cal": 160,
                "p": 3.4,
                "c": 34,
                "f": 0.3,
                "micros": {
                  "Potassium (mg)": 40
                }
              },
              {
                "name": "Tomato & Mustard Salad",
                "baseQty": 70,
                "unit": "g",
                "cal": 25,
                "p": 0.8,
                "c": 4,
                "f": 1,
                "micros": {
                  "Vitamin C (mg)": 18
                }
              }
            ]
          },
          {
            "name": "Khichdi, Papad & Raita",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Moong Dal & Rice Khichdi",
                "baseQty": 200,
                "unit": "g",
                "cal": 240,
                "p": 8.5,
                "c": 44,
                "f": 3.5,
                "micros": {
                  "Iron (mg)": 2,
                  "Folate (mcg)": 50
                }
              },
              {
                "name": "Roasted Papad",
                "baseQty": 1,
                "unit": "pc",
                "cal": 35,
                "p": 1.5,
                "c": 6,
                "f": 0.1,
                "micros": {
                  "Sodium (mg)": 190
                }
              },
              {
                "name": "Mixed Vegetable Raita",
                "baseQty": 100,
                "unit": "g",
                "cal": 50,
                "p": 2.8,
                "c": 4,
                "f": 2,
                "micros": {
                  "Calcium (mg)": 100
                }
              }
            ]
          },
          {
            "name": "Egg Curry & Whole Wheat Roti",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "chennai",
              "mumbai"
            ],
            "ingredients": [
              {
                "name": "Whole Eggs (Hard Boiled)",
                "baseQty": 2,
                "unit": "eggs",
                "cal": 140,
                "p": 12,
                "c": 0.6,
                "f": 9.8,
                "micros": {
                  "Vitamin D (mcg)": 1.2
                }
              },
              {
                "name": "Spicy Onion Tomato Gravy",
                "baseQty": 100,
                "unit": "g",
                "cal": 70,
                "p": 1.8,
                "c": 8,
                "f": 3.5,
                "micros": {
                  "Vitamin C (mg)": 15
                }
              },
              {
                "name": "Whole Wheat Roti",
                "baseQty": 2,
                "unit": "pcs",
                "cal": 160,
                "p": 5.2,
                "c": 32,
                "f": 1,
                "micros": {
                  "Iron (mg)": 1.2
                }
              }
            ]
          }
        ]
      },
      "snack2": {
        "name": "Evening Snack",
        "time": "05:30 PM",
        "options": [
          {
            "name": "Roasted Makhana & Ginger Chai",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Roasted Makhana (Foxnuts)",
                "baseQty": 25,
                "unit": "g",
                "cal": 95,
                "p": 2.4,
                "c": 19,
                "f": 0.5,
                "micros": {
                  "Calcium (mg)": 45,
                  "Magnesium (mg)": 28
                }
              },
              {
                "name": "Ginger Tea with Cow Milk (1 tsp Sugar)",
                "baseQty": 1,
                "unit": "cup",
                "cal": 40,
                "p": 1.2,
                "c": 6,
                "f": 1.2,
                "micros": {
                  "Calcium (mg)": 40
                }
              }
            ]
          },
          {
            "name": "Khaman Dhokla & Tea",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Steamed Khaman Dhokla",
                "baseQty": 2,
                "unit": "pcs",
                "cal": 150,
                "p": 5,
                "c": 26,
                "f": 3,
                "micros": {
                  "Sodium (mg)": 220,
                  "Folate (mcg)": 25
                }
              },
              {
                "name": "Green Tea (No Sugar)",
                "baseQty": 1,
                "unit": "cup",
                "cal": 2,
                "p": 0.1,
                "c": 0.4,
                "f": 0,
                "micros": {
                  "Fluoride (mg)": 0.3
                }
              }
            ]
          },
          {
            "name": "Boiled Egg Whites & Tea",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Boiled Egg Whites",
                "baseQty": 3,
                "unit": "eggs",
                "cal": 51,
                "p": 11,
                "c": 0.8,
                "f": 0.2,
                "micros": {
                  "Sodium (mg)": 150,
                  "Potassium (mg)": 160
                }
              },
              {
                "name": "Black Tea (No Sugar)",
                "baseQty": 1,
                "unit": "cup",
                "cal": 2,
                "p": 0,
                "c": 0.5,
                "f": 0,
                "micros": {}
              }
            ]
          },
          {
            "name": "Sattu Protein Drink",
            "profile": "high-protein",
            "type": "veg",
            "ingredients": [
              {
                "name": "Sattu (Roasted Chickpea Flour)",
                "baseQty": 30,
                "unit": "g",
                "cal": 120,
                "p": 6.5,
                "c": 19.5,
                "f": 1.8,
                "micros": {
                  "Iron (mg)": 1.6,
                  "Magnesium (mg)": 35
                }
              },
              {
                "name": "Water & Lemon Juice",
                "baseQty": 250,
                "unit": "ml",
                "cal": 5,
                "p": 0.1,
                "c": 1.2,
                "f": 0,
                "micros": {
                  "Vitamin C (mg)": 12
                }
              }
            ]
          },
          {
            "name": "Chicken Tikka Bites & Green Tea",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Grilled Chicken Tikka",
                "baseQty": 80,
                "unit": "g",
                "cal": 120,
                "p": 19,
                "c": 1.2,
                "f": 4.2,
                "micros": {
                  "Iron (mg)": 0.8
                }
              },
              {
                "name": "Green Tea (No Sugar)",
                "baseQty": 1,
                "unit": "cup",
                "cal": 2,
                "p": 0.1,
                "c": 0.4,
                "f": 0,
                "micros": {
                  "Fluoride (mg)": 0.3
                }
              }
            ]
          }
        ]
      },
      "dinner": {
        "name": "Dinner",
        "time": "09:00 PM",
        "options": [
          {
            "name": "Roti, Yellow Moong Dal, Grilled Paneer & Salad",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Whole Wheat Roti",
                "baseQty": 2,
                "unit": "pcs",
                "cal": 160,
                "p": 5.2,
                "c": 32,
                "f": 1,
                "micros": {
                  "Iron (mg)": 1.2
                }
              },
              {
                "name": "Moong Dal Tadka",
                "baseQty": 120,
                "unit": "g",
                "cal": 100,
                "p": 6,
                "c": 16,
                "f": 1.5,
                "micros": {
                  "Potassium (mg)": 220
                }
              },
              {
                "name": "Grilled Paneer Cubes",
                "baseQty": 50,
                "unit": "g",
                "cal": 140,
                "p": 9,
                "c": 1.5,
                "f": 11,
                "micros": {
                  "Calcium (mg)": 200
                }
              },
              {
                "name": "Fresh Cucumber Tomato Salad",
                "baseQty": 80,
                "unit": "g",
                "cal": 15,
                "p": 0.5,
                "c": 3,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 12
                }
              }
            ]
          },
          {
            "name": "Roti, Grilled Chicken & Dal Tadka",
            "profile": "high-protein",
            "type": "non-veg",
            "cities": [
              "delhi",
              "mumbai"
            ],
            "ingredients": [
              {
                "name": "Whole Wheat Roti",
                "baseQty": 2,
                "unit": "pcs",
                "cal": 160,
                "p": 5.2,
                "c": 32,
                "f": 1,
                "micros": {
                  "Iron (mg)": 1.2
                }
              },
              {
                "name": "Grilled Chicken Breast",
                "baseQty": 100,
                "unit": "g",
                "cal": 165,
                "p": 31,
                "c": 0,
                "f": 3.6,
                "micros": {
                  "Niacin (mg)": 8.2,
                  "Selenium (mcg)": 24
                }
              },
              {
                "name": "Yellow Dal Tadka",
                "baseQty": 100,
                "unit": "g",
                "cal": 80,
                "p": 4.8,
                "c": 13,
                "f": 1.2,
                "micros": {
                  "Iron (mg)": 1.2
                }
              }
            ]
          },
          {
            "name": "Vegetable Pulao & Cucumber Raita",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Vegetable Basmati Pulao",
                "baseQty": 180,
                "unit": "g",
                "cal": 250,
                "p": 5.5,
                "c": 46,
                "f": 4,
                "micros": {
                  "Vitamin A (mcg)": 110,
                  "Vitamin C (mg)": 15
                }
              },
              {
                "name": "Cucumber Mint Raita",
                "baseQty": 120,
                "unit": "g",
                "cal": 60,
                "p": 3.2,
                "c": 4.5,
                "f": 3.2,
                "micros": {
                  "Calcium (mg)": 120
                }
              }
            ]
          },
          {
            "name": "Soya Chunks Curry & Rice",
            "profile": "high-protein",
            "type": "veg",
            "ingredients": [
              {
                "name": "Soya Chunks Curry",
                "baseQty": 120,
                "unit": "g",
                "cal": 180,
                "p": 20,
                "c": 12,
                "f": 6,
                "micros": {
                  "Iron (mg)": 4.5,
                  "Calcium (mg)": 110
                }
              },
              {
                "name": "Steamed Rice",
                "baseQty": 100,
                "unit": "g",
                "cal": 125,
                "p": 2.6,
                "c": 27,
                "f": 0.2,
                "micros": {
                  "Selenium (mcg)": 10
                }
              }
            ]
          },
          {
            "name": "Butter Chicken & Garlic Naan",
            "profile": "surplus",
            "type": "non-veg",
            "cities": [
              "delhi"
            ],
            "ingredients": [
              {
                "name": "Butter Chicken",
                "baseQty": 150,
                "unit": "g",
                "cal": 320,
                "p": 24,
                "c": 8,
                "f": 20,
                "micros": {
                  "Calcium (mg)": 80,
                  "Iron (mg)": 1.6
                }
              },
              {
                "name": "Garlic Naan Bread",
                "baseQty": 1,
                "unit": "pc",
                "cal": 240,
                "p": 6.5,
                "c": 42,
                "f": 5,
                "micros": {
                  "Iron (mg)": 1.8
                }
              }
            ]
          },
          {
            "name": "Fish Fry & Rice",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "kolkata",
              "chennai"
            ],
            "ingredients": [
              {
                "name": "Spicy Pan-fried Rohu Fish",
                "baseQty": 120,
                "unit": "g",
                "cal": 220,
                "p": 22,
                "c": 2,
                "f": 12,
                "micros": {
                  "Vitamin D (mcg)": 2.5,
                  "Iron (mg)": 1.4
                }
              },
              {
                "name": "Steamed Basmati Rice",
                "baseQty": 120,
                "unit": "g",
                "cal": 150,
                "p": 3.2,
                "c": 32,
                "f": 0.3,
                "micros": {}
              }
            ]
          },
          {
            "name": "Chicken Biryani & Raita",
            "profile": "surplus",
            "type": "non-veg",
            "cities": [
              "mumbai",
              "delhi"
            ],
            "ingredients": [
              {
                "name": "Chicken Biryani (Lean breast meat)",
                "baseQty": 200,
                "unit": "g",
                "cal": 340,
                "p": 24,
                "c": 42,
                "f": 8,
                "micros": {
                  "Iron (mg)": 1.8
                }
              },
              {
                "name": "Onion Cucumber Raita",
                "baseQty": 100,
                "unit": "g",
                "cal": 50,
                "p": 2.8,
                "c": 4,
                "f": 2,
                "micros": {
                  "Calcium (mg)": 100
                }
              }
            ]
          }
        ]
      },
      "bedtime": {
        "name": "Bedtime Snack",
        "time": "10:30 PM",
        "options": [
          {
            "name": "Warm Haldi Milk",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Low-Fat Milk",
                "baseQty": 200,
                "unit": "ml",
                "cal": 90,
                "p": 6.8,
                "c": 9.6,
                "f": 2,
                "micros": {
                  "Calcium (mg)": 240,
                  "Vitamin D (mcg)": 2
                }
              },
              {
                "name": "Turmeric & Black Pepper",
                "baseQty": 2,
                "unit": "g",
                "cal": 5,
                "p": 0.1,
                "c": 1,
                "f": 0.1,
                "micros": {
                  "Iron (mg)": 0.4
                }
              }
            ]
          },
          {
            "name": "Warm Milk with Almonds",
            "profile": "surplus",
            "type": "veg",
            "ingredients": [
              {
                "name": "Whole Milk",
                "baseQty": 200,
                "unit": "ml",
                "cal": 120,
                "p": 6.5,
                "c": 9.5,
                "f": 6.5,
                "micros": {
                  "Calcium (mg)": 230,
                  "Vitamin D (mcg)": 2
                }
              },
              {
                "name": "Crushed Almonds",
                "baseQty": 10,
                "unit": "g",
                "cal": 60,
                "p": 2,
                "c": 2,
                "f": 5.2,
                "micros": {
                  "Vitamin E (mg)": 2.5
                }
              }
            ]
          },
          {
            "name": "Light Chicken Broth",
            "profile": "balanced",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Clear Chicken Broth",
                "baseQty": 200,
                "unit": "ml",
                "cal": 40,
                "p": 4.5,
                "c": 2,
                "f": 1.5,
                "micros": {
                  "Sodium (mg)": 380
                }
              },
              {
                "name": "Shredded Chicken Breast",
                "baseQty": 40,
                "unit": "g",
                "cal": 50,
                "p": 10,
                "c": 0,
                "f": 1,
                "micros": {
                  "Iron (mg)": 0.4
                }
              }
            ]
          }
        ]
      }
    }
  },
  "US": {
    "name": "United States",
    "meals": {
      "breakfast": {
        "name": "Breakfast",
        "time": "07:30 AM",
        "options": [
          {
            "name": "Oatmeal with Blueberries & Chia",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Rolled Oats",
                "baseQty": 50,
                "unit": "g",
                "cal": 190,
                "p": 6.5,
                "c": 33,
                "f": 3.5,
                "micros": {
                  "Iron (mg)": 2.4,
                  "Fiber (g)": 5
                }
              },
              {
                "name": "Skim Milk",
                "baseQty": 200,
                "unit": "ml",
                "cal": 70,
                "p": 7,
                "c": 10,
                "f": 0.2,
                "micros": {
                  "Calcium (mg)": 250,
                  "Vitamin D (mcg)": 2.5
                }
              },
              {
                "name": "Fresh Blueberries",
                "baseQty": 50,
                "unit": "g",
                "cal": 30,
                "p": 0.4,
                "c": 7,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 7
                }
              },
              {
                "name": "Chia Seeds",
                "baseQty": 10,
                "unit": "g",
                "cal": 50,
                "p": 1.7,
                "c": 4.2,
                "f": 3,
                "micros": {
                  "Calcium (mg)": 60,
                  "Omega-3 (g)": 1.8
                }
              }
            ]
          },
          {
            "name": "Avocado Toast with Tofu Scramble",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "los-angeles",
              "san-francisco"
            ],
            "ingredients": [
              {
                "name": "Whole Wheat Bread Toast",
                "baseQty": 2,
                "unit": "pcs",
                "cal": 160,
                "p": 8,
                "c": 30,
                "f": 2,
                "micros": {
                  "Iron (mg)": 1.6
                }
              },
              {
                "name": "Organic Tofu (Scrambled)",
                "baseQty": 100,
                "unit": "g",
                "cal": 80,
                "p": 8.5,
                "c": 1.5,
                "f": 4.5,
                "micros": {
                  "Calcium (mg)": 150,
                  "Iron (mg)": 1.2
                }
              },
              {
                "name": "Mashed Avocado",
                "baseQty": 50,
                "unit": "g",
                "cal": 80,
                "p": 1,
                "c": 4.5,
                "f": 7.2,
                "micros": {
                  "Potassium (mg)": 250
                }
              }
            ]
          },
          {
            "name": "Scrambled Eggs, Avocado & Toast",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Eggs (2 Whole, 1 White)",
                "baseQty": 3,
                "unit": "eggs",
                "cal": 160,
                "p": 15,
                "c": 1,
                "f": 10.5,
                "micros": {
                  "Vitamin D (mcg)": 2,
                  "Choline (mg)": 250
                }
              },
              {
                "name": "Whole Wheat Bread Toast",
                "baseQty": 1,
                "unit": "slice",
                "cal": 80,
                "p": 4,
                "c": 15,
                "f": 1,
                "micros": {
                  "Selenium (mcg)": 10
                }
              },
              {
                "name": "Fresh Avocado",
                "baseQty": 40,
                "unit": "g",
                "cal": 65,
                "p": 0.8,
                "c": 3.5,
                "f": 6,
                "micros": {
                  "Potassium (mg)": 200,
                  "Folate (mcg)": 30
                }
              }
            ]
          },
          {
            "name": "Greek Yogurt Parfait with Granola",
            "profile": "high-protein",
            "type": "veg",
            "ingredients": [
              {
                "name": "Plain Greek Yogurt (Non-Fat)",
                "baseQty": 170,
                "unit": "g",
                "cal": 100,
                "p": 17,
                "c": 6,
                "f": 0.4,
                "micros": {
                  "Calcium (mg)": 180,
                  "Cobalamin B12 (mcg)": 1.2
                }
              },
              {
                "name": "Honey Granola",
                "baseQty": 30,
                "unit": "g",
                "cal": 130,
                "p": 3,
                "c": 22,
                "f": 3.5,
                "micros": {
                  "Iron (mg)": 0.8
                }
              },
              {
                "name": "Sliced Strawberries",
                "baseQty": 50,
                "unit": "g",
                "cal": 16,
                "p": 0.3,
                "c": 4,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 30
                }
              }
            ]
          },
          {
            "name": "Turkey Bacon, Egg White Omelet & Toast",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Egg Whites",
                "baseQty": 4,
                "unit": "eggs",
                "cal": 68,
                "p": 14.5,
                "c": 1,
                "f": 0.2,
                "micros": {
                  "Potassium (mg)": 200
                }
              },
              {
                "name": "Turkey Bacon",
                "baseQty": 2,
                "unit": "slices",
                "cal": 70,
                "p": 6,
                "c": 0.5,
                "f": 5,
                "micros": {
                  "Sodium (mg)": 280
                }
              },
              {
                "name": "Whole Wheat Toast",
                "baseQty": 1,
                "unit": "slice",
                "cal": 80,
                "p": 4,
                "c": 15,
                "f": 1,
                "micros": {
                  "Selenium (mcg)": 10
                }
              }
            ]
          },
          {
            "name": "Tofu Scramble & Avocado Toast",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "los-angeles",
              "san-francisco"
            ],
            "ingredients": [
              {
                "name": "Organic Tofu (Scrambled)",
                "baseQty": 100,
                "unit": "g",
                "cal": 80,
                "p": 8.5,
                "c": 1.5,
                "f": 4.5,
                "micros": {
                  "Calcium (mg)": 150
                }
              },
              {
                "name": "Whole Wheat Bread Toast",
                "baseQty": 2,
                "unit": "pcs",
                "cal": 160,
                "p": 8,
                "c": 30,
                "f": 2,
                "micros": {
                  "Iron (mg)": 1.6
                }
              },
              {
                "name": "Mashed Avocado",
                "baseQty": 40,
                "unit": "g",
                "cal": 65,
                "p": 0.8,
                "c": 3.5,
                "f": 6,
                "micros": {
                  "Potassium (mg)": 200
                }
              }
            ]
          }
        ]
      },
      "snack1": {
        "name": "Mid-morning Snack",
        "time": "10:30 AM",
        "options": [
          {
            "name": "Apple & Peanut Butter",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Crisp Apple",
                "baseQty": 1,
                "unit": "pc",
                "cal": 80,
                "p": 0.5,
                "c": 20,
                "f": 0.2,
                "micros": {
                  "Vitamin C (mg)": 8,
                  "Potassium (mg)": 190
                }
              },
              {
                "name": "All-Natural Peanut Butter",
                "baseQty": 20,
                "unit": "g",
                "cal": 120,
                "p": 5,
                "c": 4,
                "f": 10,
                "micros": {
                  "Magnesium (mg)": 30
                }
              }
            ]
          },
          {
            "name": "Rice Cakes & Cottage Cheese",
            "profile": "high-protein",
            "type": "veg",
            "ingredients": [
              {
                "name": "Low-Fat Cottage Cheese",
                "baseQty": 110,
                "unit": "g",
                "cal": 90,
                "p": 12,
                "c": 3,
                "f": 2.5,
                "micros": {
                  "Calcium (mg)": 80,
                  "Sodium (mg)": 380
                }
              },
              {
                "name": "Brown Rice Cakes",
                "baseQty": 2,
                "unit": "pcs",
                "cal": 70,
                "p": 1.5,
                "c": 14,
                "f": 0.6,
                "micros": {
                  "Manganese (mg)": 0.4
                }
              }
            ]
          },
          {
            "name": "Whey Protein Shake & Carrots",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Whey Protein Isolate",
                "baseQty": 30,
                "unit": "g",
                "cal": 110,
                "p": 25,
                "c": 1,
                "f": 0.5,
                "micros": {
                  "Calcium (mg)": 130,
                  "Sodium (mg)": 50
                }
              },
              {
                "name": "Baby Carrots",
                "baseQty": 100,
                "unit": "g",
                "cal": 40,
                "p": 0.9,
                "c": 9.5,
                "f": 0.2,
                "micros": {
                  "Vitamin A (mcg)": 850,
                  "Vitamin C (mg)": 6
                }
              }
            ]
          },
          {
            "name": "Turkey Roll-ups with Cream Cheese",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Sliced Turkey Breast",
                "baseQty": 80,
                "unit": "g",
                "cal": 90,
                "p": 18,
                "c": 0.8,
                "f": 1.5,
                "micros": {
                  "Sodium (mg)": 480
                }
              },
              {
                "name": "Light Cream Cheese",
                "baseQty": 20,
                "unit": "g",
                "cal": 40,
                "p": 1.5,
                "c": 1.2,
                "f": 3.2,
                "micros": {
                  "Calcium (mg)": 20
                }
              }
            ]
          }
        ]
      },
      "lunch": {
        "name": "Lunch",
        "time": "01:00 PM",
        "options": [
          {
            "name": "Quinoa, Chickpea & Kale Salad",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "los-angeles",
              "san-francisco"
            ],
            "ingredients": [
              {
                "name": "Cooked Quinoa",
                "baseQty": 100,
                "unit": "g",
                "cal": 120,
                "p": 4.4,
                "c": 21.3,
                "f": 1.9,
                "micros": {
                  "Iron (mg)": 1.5,
                  "Magnesium (mg)": 64
                }
              },
              {
                "name": "Canned Chickpeas (Garbanzo)",
                "baseQty": 100,
                "unit": "g",
                "cal": 130,
                "p": 7,
                "c": 22,
                "f": 2,
                "micros": {
                  "Iron (mg)": 1.6,
                  "Folate (mcg)": 80
                }
              },
              {
                "name": "Fresh Curly Kale",
                "baseQty": 50,
                "unit": "g",
                "cal": 25,
                "p": 1.5,
                "c": 4.5,
                "f": 0.3,
                "micros": {
                  "Vitamin C (mg)": 60,
                  "Vitamin K (mcg)": 400
                }
              },
              {
                "name": "Lemon Olive Oil Vinaigrette",
                "baseQty": 10,
                "unit": "ml",
                "cal": 70,
                "p": 0,
                "c": 0.5,
                "f": 7.5,
                "micros": {
                  "Vitamin E (mg)": 1.2
                }
              }
            ]
          },
          {
            "name": "Three Bean Veggie Chili",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Three-Bean Stew (Black, Kidney, Pinto)",
                "baseQty": 250,
                "unit": "g",
                "cal": 240,
                "p": 14,
                "c": 42,
                "f": 1.5,
                "micros": {
                  "Iron (mg)": 3.8,
                  "Fibre (g)": 11
                }
              },
              {
                "name": "Shredded Cheddar Cheese",
                "baseQty": 20,
                "unit": "g",
                "cal": 80,
                "p": 5,
                "c": 0.5,
                "f": 6.8,
                "micros": {
                  "Calcium (mg)": 140
                }
              }
            ]
          },
          {
            "name": "Grilled Chicken, Quinoa & Broccoli",
            "profile": "balanced",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Grilled Chicken Breast",
                "baseQty": 150,
                "unit": "g",
                "cal": 240,
                "p": 46,
                "c": 0,
                "f": 5,
                "micros": {
                  "Niacin (mg)": 14,
                  "Selenium (mcg)": 32
                }
              },
              {
                "name": "Cooked Quinoa",
                "baseQty": 120,
                "unit": "g",
                "cal": 144,
                "p": 5.3,
                "c": 25.5,
                "f": 2.3,
                "micros": {
                  "Iron (mg)": 1.8,
                  "Magnesium (mg)": 75
                }
              },
              {
                "name": "Steamed Broccoli Florets",
                "baseQty": 100,
                "unit": "g",
                "cal": 35,
                "p": 2.8,
                "c": 7,
                "f": 0.4,
                "micros": {
                  "Vitamin C (mg)": 89,
                  "Calcium (mg)": 47
                }
              }
            ]
          },
          {
            "name": "Turkey & Swiss Cheese Sandwich",
            "profile": "high-protein",
            "type": "non-veg",
            "cities": [
              "new-york"
            ],
            "ingredients": [
              {
                "name": "Sliced Turkey Breast",
                "baseQty": 100,
                "unit": "g",
                "cal": 110,
                "p": 22,
                "c": 1,
                "f": 2,
                "micros": {
                  "Sodium (mg)": 650,
                  "Cobalamin B12 (mcg)": 0.4
                }
              },
              {
                "name": "Swiss Cheese Slices",
                "baseQty": 30,
                "unit": "g",
                "cal": 110,
                "p": 8,
                "c": 0.4,
                "f": 8.5,
                "micros": {
                  "Calcium (mg)": 280
                }
              },
              {
                "name": "Whole Wheat Bread Slices",
                "baseQty": 2,
                "unit": "pcs",
                "cal": 160,
                "p": 8,
                "c": 30,
                "f": 2,
                "micros": {
                  "Iron (mg)": 1.6
                }
              }
            ]
          },
          {
            "name": "Salmon Salad with Vinaigrette",
            "profile": "high-protein",
            "type": "non-veg",
            "cities": [
              "san-francisco"
            ],
            "ingredients": [
              {
                "name": "Grilled Pink Salmon",
                "baseQty": 120,
                "unit": "g",
                "cal": 180,
                "p": 24,
                "c": 0,
                "f": 9,
                "micros": {
                  "Vitamin D (mcg)": 10,
                  "Omega-3 (g)": 2
                }
              },
              {
                "name": "Mixed Garden Greens",
                "baseQty": 100,
                "unit": "g",
                "cal": 20,
                "p": 1.5,
                "c": 4,
                "f": 0.2,
                "micros": {
                  "Vitamin C (mg)": 24,
                  "Vitamin A (mcg)": 180
                }
              },
              {
                "name": "Olive Oil & Balsamic dressing",
                "baseQty": 15,
                "unit": "ml",
                "cal": 110,
                "p": 0,
                "c": 1.5,
                "f": 12,
                "micros": {}
              }
            ]
          },
          {
            "name": "Sweet Potato & Black Bean Bowl",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Steamed Sweet Potato",
                "baseQty": 100,
                "unit": "g",
                "cal": 90,
                "p": 1.8,
                "c": 20,
                "f": 0.2,
                "micros": {
                  "Vitamin A (mcg)": 750
                }
              },
              {
                "name": "Canned Black Beans",
                "baseQty": 100,
                "unit": "g",
                "cal": 110,
                "p": 7,
                "c": 20,
                "f": 0.5,
                "micros": {
                  "Iron (mg)": 2
                }
              },
              {
                "name": "Fresh Salsa & Spinach",
                "baseQty": 80,
                "unit": "g",
                "cal": 20,
                "p": 0.8,
                "c": 4,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 15
                }
              }
            ]
          }
        ]
      },
      "snack2": {
        "name": "Evening Snack",
        "time": "04:30 PM",
        "options": [
          {
            "name": "Hummus, Celery & Carrots",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Roasted Garlic Hummus",
                "baseQty": 60,
                "unit": "g",
                "cal": 140,
                "p": 4,
                "c": 10,
                "f": 10,
                "micros": {
                  "Iron (mg)": 1.2,
                  "Folate (mcg)": 40
                }
              },
              {
                "name": "Celery & Baby Carrots",
                "baseQty": 100,
                "unit": "g",
                "cal": 30,
                "p": 0.7,
                "c": 7,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 5,
                  "Vitamin A (mcg)": 500
                }
              }
            ]
          },
          {
            "name": "String Cheese & Almonds",
            "profile": "high-protein",
            "type": "veg",
            "ingredients": [
              {
                "name": "Mozzarella String Cheese",
                "baseQty": 1,
                "unit": "pc",
                "cal": 80,
                "p": 7,
                "c": 1,
                "f": 5,
                "micros": {
                  "Calcium (mg)": 200,
                  "Sodium (mg)": 200
                }
              },
              {
                "name": "Raw Whole Almonds",
                "baseQty": 15,
                "unit": "g",
                "cal": 90,
                "p": 3.2,
                "c": 3,
                "f": 7.8,
                "micros": {
                  "Vitamin E (mg)": 4
                }
              }
            ]
          },
          {
            "name": "Beef Jerky & Walnuts",
            "profile": "surplus",
            "type": "non-veg",
            "cities": [
              "houston",
              "chicago"
            ],
            "ingredients": [
              {
                "name": "Cured Beef Jerky",
                "baseQty": 30,
                "unit": "g",
                "cal": 116,
                "p": 10,
                "c": 3,
                "f": 7,
                "micros": {
                  "Iron (mg)": 1.6,
                  "Sodium (mg)": 590
                }
              },
              {
                "name": "Shelled Walnuts",
                "baseQty": 15,
                "unit": "g",
                "cal": 100,
                "p": 2.2,
                "c": 2,
                "f": 10,
                "micros": {
                  "Omega-3 (g)": 1.2
                }
              }
            ]
          },
          {
            "name": "Turkey Jerky & Walnuts",
            "profile": "surplus",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Cured Turkey Jerky",
                "baseQty": 30,
                "unit": "g",
                "cal": 90,
                "p": 11,
                "c": 2,
                "f": 4,
                "micros": {
                  "Sodium (mg)": 450
                }
              },
              {
                "name": "Shelled Walnuts",
                "baseQty": 15,
                "unit": "g",
                "cal": 100,
                "p": 2.2,
                "c": 2,
                "f": 10,
                "micros": {
                  "Omega-3 (g)": 1.2
                }
              }
            ]
          }
        ]
      },
      "dinner": {
        "name": "Dinner",
        "time": "08:00 PM",
        "options": [
          {
            "name": "Lentil Shepherd's Pie & Broccoli",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Lentil Potato Shepherd's Pie",
                "baseQty": 250,
                "unit": "g",
                "cal": 260,
                "p": 12,
                "c": 42,
                "f": 4.5,
                "micros": {
                  "Iron (mg)": 3,
                  "Potassium (mg)": 410
                }
              },
              {
                "name": "Steamed Broccoli florets",
                "baseQty": 100,
                "unit": "g",
                "cal": 35,
                "p": 2.8,
                "c": 7,
                "f": 0.4,
                "micros": {
                  "Vitamin C (mg)": 89
                }
              }
            ]
          },
          {
            "name": "Vegetarian Burger & Sweet Potato Fries",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "los-angeles"
            ],
            "ingredients": [
              {
                "name": "Veggie & Grain Patty",
                "baseQty": 1,
                "unit": "pc",
                "cal": 140,
                "p": 11,
                "c": 14,
                "f": 5,
                "micros": {
                  "Iron (mg)": 1.8
                }
              },
              {
                "name": "Whole Wheat Burger Bun",
                "baseQty": 1,
                "unit": "pc",
                "cal": 120,
                "p": 4.5,
                "c": 22,
                "f": 1.5,
                "micros": {}
              },
              {
                "name": "Baked Sweet Potato Fries",
                "baseQty": 80,
                "unit": "g",
                "cal": 70,
                "p": 1.2,
                "c": 16,
                "f": 0.1,
                "micros": {
                  "Vitamin A (mcg)": 600
                }
              }
            ]
          },
          {
            "name": "Sirloin Steak, Sweet Potato & Asparagus",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "houston",
              "chicago"
            ],
            "ingredients": [
              {
                "name": "Lean Beef Sirloin Steak",
                "baseQty": 150,
                "unit": "g",
                "cal": 290,
                "p": 33,
                "c": 0,
                "f": 16,
                "micros": {
                  "Iron (mg)": 3.2,
                  "Zinc (mg)": 6.8,
                  "Vitamin B12 (mcg)": 2.2
                }
              },
              {
                "name": "Baked Sweet Potato",
                "baseQty": 120,
                "unit": "g",
                "cal": 108,
                "p": 2.2,
                "c": 24,
                "f": 0.2,
                "micros": {
                  "Vitamin A (mcg)": 900,
                  "Potassium (mg)": 450
                }
              },
              {
                "name": "Grilled Asparagus Spears",
                "baseQty": 80,
                "unit": "g",
                "cal": 16,
                "p": 1.8,
                "c": 3.2,
                "f": 0.2,
                "micros": {
                  "Folate (mcg)": 110,
                  "Vitamin K (mcg)": 50
                }
              }
            ]
          },
          {
            "name": "Baked Cod, Wild Rice & Green Beans",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Baked Cod Fillet",
                "baseQty": 150,
                "unit": "g",
                "cal": 140,
                "p": 30,
                "c": 0,
                "f": 1.5,
                "micros": {
                  "Selenium (mcg)": 40,
                  "Cobalamin B12 (mcg)": 1.4
                }
              },
              {
                "name": "Cooked Wild Rice",
                "baseQty": 120,
                "unit": "g",
                "cal": 120,
                "p": 4.8,
                "c": 25,
                "f": 0.6,
                "micros": {
                  "Zinc (mg)": 1.2
                }
              },
              {
                "name": "Garlic Butter Green Beans",
                "baseQty": 100,
                "unit": "g",
                "cal": 60,
                "p": 1.8,
                "c": 7,
                "f": 3.2,
                "micros": {
                  "Calcium (mg)": 37
                }
              }
            ]
          },
          {
            "name": "Turkey Meatballs & Whole Wheat Pasta",
            "profile": "surplus",
            "type": "non-veg",
            "cities": [
              "new-york"
            ],
            "ingredients": [
              {
                "name": "Italian Turkey Meatballs",
                "baseQty": 120,
                "unit": "g",
                "cal": 210,
                "p": 22,
                "c": 4,
                "f": 12,
                "micros": {
                  "Iron (mg)": 2
                }
              },
              {
                "name": "Whole Wheat Spaghetti",
                "baseQty": 80,
                "unit": "g",
                "cal": 280,
                "p": 10,
                "c": 58,
                "f": 1.5,
                "micros": {
                  "Magnesium (mg)": 60
                }
              },
              {
                "name": "Marinara Tomato Sauce",
                "baseQty": 100,
                "unit": "g",
                "cal": 50,
                "p": 1.5,
                "c": 8,
                "f": 1.5,
                "micros": {
                  "Vitamin C (mg)": 15,
                  "Lycopene (mg)": 10
                }
              }
            ]
          },
          {
            "name": "Tofu stir-fry with Brown Rice",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Firm Tofu cubed",
                "baseQty": 100,
                "unit": "g",
                "cal": 90,
                "p": 9,
                "c": 2,
                "f": 5,
                "micros": {
                  "Calcium (mg)": 160
                }
              },
              {
                "name": "Stir-fry Veggies (Pepper, Onion)",
                "baseQty": 100,
                "unit": "g",
                "cal": 35,
                "p": 1.2,
                "c": 7,
                "f": 0.2,
                "micros": {
                  "Vitamin C (mg)": 40
                }
              },
              {
                "name": "Cooked Brown Rice",
                "baseQty": 100,
                "unit": "g",
                "cal": 110,
                "p": 2.6,
                "c": 23,
                "f": 0.9,
                "micros": {}
              }
            ]
          }
        ]
      },
      "bedtime": {
        "name": "Bedtime Snack",
        "time": "10:00 PM",
        "options": [
          {
            "name": "Cottage Cheese & Cherries",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Low-Fat Cottage Cheese",
                "baseQty": 110,
                "unit": "g",
                "cal": 90,
                "p": 12,
                "c": 3,
                "f": 2.5,
                "micros": {
                  "Calcium (mg)": 80
                }
              },
              {
                "name": "Pitted Tart Cherries",
                "baseQty": 50,
                "unit": "g",
                "cal": 25,
                "p": 0.5,
                "c": 6,
                "f": 0.1,
                "micros": {
                  "Melatonin (mcg)": 0.5
                }
              }
            ]
          },
          {
            "name": "Whey/Casein Protein shake",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Micellar Casein Protein",
                "baseQty": 30,
                "unit": "g",
                "cal": 110,
                "p": 24,
                "c": 1.5,
                "f": 1,
                "micros": {
                  "Calcium (mg)": 350
                }
              },
              {
                "name": "Water",
                "baseQty": 250,
                "unit": "ml",
                "cal": 0,
                "p": 0,
                "c": 0,
                "f": 0,
                "micros": {}
              }
            ]
          },
          {
            "name": "Light Turkey Breast slices",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Sliced Lean Turkey",
                "baseQty": 60,
                "unit": "g",
                "cal": 65,
                "p": 13,
                "c": 0.5,
                "f": 1,
                "micros": {
                  "Sodium (mg)": 390
                }
              },
              {
                "name": "Chamomile Herbal Tea",
                "baseQty": 1,
                "unit": "cup",
                "cal": 2,
                "p": 0,
                "c": 0.5,
                "f": 0,
                "micros": {}
              }
            ]
          }
        ]
      }
    }
  },
  "UK": {
    "name": "United Kingdom",
    "meals": {
      "breakfast": {
        "name": "Breakfast",
        "time": "08:00 AM",
        "options": [
          {
            "name": "Porridge with Honey & Banana",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Traditional Rolled Oats",
                "baseQty": 50,
                "unit": "g",
                "cal": 190,
                "p": 6,
                "c": 34,
                "f": 3.2,
                "micros": {
                  "Iron (mg)": 2.2
                }
              },
              {
                "name": "Semi-Skimmed Milk",
                "baseQty": 200,
                "unit": "ml",
                "cal": 95,
                "p": 7,
                "c": 9.5,
                "f": 3.5,
                "micros": {
                  "Calcium (mg)": 240
                }
              },
              {
                "name": "Sliced Banana",
                "baseQty": 50,
                "unit": "g",
                "cal": 45,
                "p": 0.5,
                "c": 11.5,
                "f": 0.1,
                "micros": {
                  "Potassium (mg)": 180
                }
              },
              {
                "name": "Clear Honey",
                "baseQty": 1,
                "unit": "tbsp",
                "cal": 60,
                "p": 0,
                "c": 15,
                "f": 0,
                "micros": {}
              }
            ]
          },
          {
            "name": "Vegetarian Full English",
            "profile": "surplus",
            "type": "veg",
            "cities": [
              "london",
              "manchester"
            ],
            "ingredients": [
              {
                "name": "Baked Heinz Beans",
                "baseQty": 100,
                "unit": "g",
                "cal": 80,
                "p": 4.8,
                "c": 13,
                "f": 0.2,
                "micros": {
                  "Iron (mg)": 1.4,
                  "Fibre (g)": 5
                }
              },
              {
                "name": "Vegetarian Sausage",
                "baseQty": 1,
                "unit": "pc",
                "cal": 110,
                "p": 9.5,
                "c": 5,
                "f": 5.5,
                "micros": {
                  "Iron (mg)": 1.2
                }
              },
              {
                "name": "Grilled Mushroom & Tomato",
                "baseQty": 80,
                "unit": "g",
                "cal": 20,
                "p": 1,
                "c": 3.5,
                "f": 0.2,
                "micros": {
                  "Vitamin C (mg)": 10
                }
              },
              {
                "name": "Whole Wheat Toast",
                "baseQty": 1,
                "unit": "slice",
                "cal": 80,
                "p": 4,
                "c": 15,
                "f": 1,
                "micros": {}
              }
            ]
          },
          {
            "name": "Poached Eggs & Grilled Tomatoes",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Large British Eggs",
                "baseQty": 2,
                "unit": "eggs",
                "cal": 156,
                "p": 13,
                "c": 0.8,
                "f": 11,
                "micros": {
                  "Vitamin D (mcg)": 1.8,
                  "Calcium (mg)": 50
                }
              },
              {
                "name": "Grilled Plum Tomato halves",
                "baseQty": 100,
                "unit": "g",
                "cal": 22,
                "p": 1,
                "c": 4.8,
                "f": 0.2,
                "micros": {
                  "Vitamin C (mg)": 20
                }
              },
              {
                "name": "Granary Bread Toast",
                "baseQty": 1,
                "unit": "slice",
                "cal": 90,
                "p": 4.5,
                "c": 16,
                "f": 1.2,
                "micros": {
                  "Fibre (g)": 2.5
                }
              }
            ]
          },
          {
            "name": "Smoked Salmon & Scrambled Eggs",
            "profile": "high-protein",
            "type": "non-veg",
            "cities": [
              "london",
              "edinburgh"
            ],
            "ingredients": [
              {
                "name": "Scottish Smoked Salmon",
                "baseQty": 60,
                "unit": "g",
                "cal": 110,
                "p": 13.2,
                "c": 0,
                "f": 6.2,
                "micros": {
                  "Vitamin D (mcg)": 6,
                  "Omega-3 (g)": 1.2
                }
              },
              {
                "name": "Scrambled Eggs (1 Whole, 2 Whites)",
                "baseQty": 3,
                "unit": "eggs",
                "cal": 110,
                "p": 14,
                "c": 0.8,
                "f": 5.5,
                "micros": {
                  "Sodium (mg)": 140
                }
              },
              {
                "name": "Brown Soda Bread Toast",
                "baseQty": 1,
                "unit": "slice",
                "cal": 85,
                "p": 3.5,
                "c": 16,
                "f": 1,
                "micros": {
                  "Iron (mg)": 1
                }
              }
            ]
          },
          {
            "name": "Scrambled Tofu & Grilled Tomatoes",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Organic Tofu (Scrambled)",
                "baseQty": 120,
                "unit": "g",
                "cal": 96,
                "p": 10,
                "c": 1.8,
                "f": 5.4,
                "micros": {
                  "Calcium (mg)": 180
                }
              },
              {
                "name": "Grilled Tomato halves",
                "baseQty": 100,
                "unit": "g",
                "cal": 22,
                "p": 1,
                "c": 4.8,
                "f": 0.2,
                "micros": {
                  "Vitamin C (mg)": 20
                }
              },
              {
                "name": "Granary Bread Toast",
                "baseQty": 1,
                "unit": "slice",
                "cal": 90,
                "p": 4.5,
                "c": 16,
                "f": 1.2,
                "micros": {}
              }
            ]
          }
        ]
      },
      "snack1": {
        "name": "Mid-morning Snack",
        "time": "11:00 AM",
        "options": [
          {
            "name": "Oatcakes & Cheddar Cheese",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Nairns Rough Oatcakes",
                "baseQty": 2,
                "unit": "pcs",
                "cal": 90,
                "p": 2.2,
                "c": 11.5,
                "f": 3.8,
                "micros": {
                  "Fibre (g)": 1.8
                }
              },
              {
                "name": "English Mature Cheddar",
                "baseQty": 20,
                "unit": "g",
                "cal": 83,
                "p": 5,
                "c": 0.3,
                "f": 7,
                "micros": {
                  "Calcium (mg)": 150,
                  "Sodium (mg)": 130
                }
              }
            ]
          },
          {
            "name": "Apple & Walnuts",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "British Gala Apple",
                "baseQty": 1,
                "unit": "pc",
                "cal": 75,
                "p": 0.4,
                "c": 19,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 6
                }
              },
              {
                "name": "Walnut Halves",
                "baseQty": 15,
                "unit": "g",
                "cal": 100,
                "p": 2.3,
                "c": 2,
                "f": 9.8,
                "micros": {
                  "Magnesium (mg)": 20
                }
              }
            ]
          },
          {
            "name": "Hard Boiled Egg & Ham slices",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Hard Boiled Egg",
                "baseQty": 1,
                "unit": "pc",
                "cal": 74,
                "p": 6.3,
                "c": 0.4,
                "f": 5,
                "micros": {}
              },
              {
                "name": "British Honey Roast Ham",
                "baseQty": 40,
                "unit": "g",
                "cal": 50,
                "p": 8,
                "c": 0.5,
                "f": 1.8,
                "micros": {
                  "Sodium (mg)": 400
                }
              }
            ]
          }
        ]
      },
      "lunch": {
        "name": "Lunch",
        "time": "01:00 PM",
        "options": [
          {
            "name": "Jacket Potato with Baked Beans & Cheese",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Baked Jacket Potato",
                "baseQty": 200,
                "unit": "g",
                "cal": 185,
                "p": 4.2,
                "c": 42,
                "f": 0.2,
                "micros": {
                  "Potassium (mg)": 750,
                  "Vitamin C (mg)": 18
                }
              },
              {
                "name": "Heinz Baked Beans",
                "baseQty": 100,
                "unit": "g",
                "cal": 80,
                "p": 4.8,
                "c": 13,
                "f": 0.2,
                "micros": {
                  "Iron (mg)": 1.4
                }
              },
              {
                "name": "Grated Cheddar Cheese",
                "baseQty": 20,
                "unit": "g",
                "cal": 83,
                "p": 5,
                "c": 0.3,
                "f": 7,
                "micros": {
                  "Calcium (mg)": 150
                }
              }
            ]
          },
          {
            "name": "Lentil & Vegetable Soup with Rye Bread",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Hearty Lentil Vegetable Soup",
                "baseQty": 250,
                "unit": "ml",
                "cal": 150,
                "p": 8,
                "c": 24,
                "f": 2,
                "micros": {
                  "Iron (mg)": 2.6
                }
              },
              {
                "name": "Dark Rye Bread Slice",
                "baseQty": 1,
                "unit": "slice",
                "cal": 80,
                "p": 2.8,
                "c": 16,
                "f": 0.8,
                "micros": {
                  "Fibre (g)": 3
                }
              }
            ]
          },
          {
            "name": "Jacket Potato with Tuna Mayo",
            "profile": "balanced",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Baked Jacket Potato",
                "baseQty": 200,
                "unit": "g",
                "cal": 185,
                "p": 4.2,
                "c": 42,
                "f": 0.2,
                "micros": {
                  "Potassium (mg)": 750,
                  "Vitamin C (mg)": 18
                }
              },
              {
                "name": "Canned Tuna in water",
                "baseQty": 80,
                "unit": "g",
                "cal": 90,
                "p": 20,
                "c": 0,
                "f": 0.8,
                "micros": {
                  "Selenium (mcg)": 50,
                  "Sodium (mg)": 240
                }
              },
              {
                "name": "Light Mayonnaise",
                "baseQty": 15,
                "unit": "g",
                "cal": 40,
                "p": 0.1,
                "c": 1,
                "f": 4,
                "micros": {}
              }
            ]
          },
          {
            "name": "Chicken, Barley & Vegetable Soup",
            "profile": "high-protein",
            "type": "non-veg",
            "cities": [
              "birmingham",
              "manchester"
            ],
            "ingredients": [
              {
                "name": "Chicken & Barley Soup",
                "baseQty": 300,
                "unit": "ml",
                "cal": 210,
                "p": 18,
                "c": 22,
                "f": 4.5,
                "micros": {
                  "Iron (mg)": 1.6
                }
              },
              {
                "name": "Wholemeal Crusty Roll",
                "baseQty": 1,
                "unit": "pc",
                "cal": 130,
                "p": 5,
                "c": 26,
                "f": 1,
                "micros": {
                  "Fibre (g)": 3.2
                }
              }
            ]
          },
          {
            "name": "Roast Beef & Rocket Wrap",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Sliced Roast Beef",
                "baseQty": 90,
                "unit": "g",
                "cal": 140,
                "p": 23,
                "c": 0,
                "f": 5,
                "micros": {
                  "Iron (mg)": 2.4,
                  "Zinc (mg)": 4.5,
                  "Vitamin B12 (mcg)": 1.8
                }
              },
              {
                "name": "Wholemeal Tortilla Wrap",
                "baseQty": 1,
                "unit": "pc",
                "cal": 140,
                "p": 4.5,
                "c": 24,
                "f": 2.5,
                "micros": {}
              },
              {
                "name": "Fresh Rocket & Horseradish",
                "baseQty": 30,
                "unit": "g",
                "cal": 15,
                "p": 0.5,
                "c": 1.5,
                "f": 0.5,
                "micros": {
                  "Vitamin C (mg)": 10
                }
              }
            ]
          },
          {
            "name": "Cheese & Onion Pasty & Greens",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Vegetarian Cheese & Onion Pasty",
                "baseQty": 120,
                "unit": "g",
                "cal": 280,
                "p": 7.5,
                "c": 30,
                "f": 15,
                "micros": {
                  "Calcium (mg)": 90
                }
              },
              {
                "name": "Steamed Green Peas",
                "baseQty": 50,
                "unit": "g",
                "cal": 40,
                "p": 2.5,
                "c": 7,
                "f": 0.2,
                "micros": {
                  "Vitamin C (mg)": 15
                }
              }
            ]
          }
        ]
      },
      "snack2": {
        "name": "Evening Snack",
        "time": "04:30 PM",
        "options": [
          {
            "name": "Digestive Biscuits & Tea",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "McVities Digestive Biscuits",
                "baseQty": 2,
                "unit": "pcs",
                "cal": 140,
                "p": 2,
                "c": 20,
                "f": 6,
                "micros": {
                  "Sodium (mg)": 160
                }
              },
              {
                "name": "English Breakfast Tea with Dash Milk",
                "baseQty": 1,
                "unit": "cup",
                "cal": 15,
                "p": 0.6,
                "c": 1,
                "f": 0.5,
                "micros": {
                  "Calcium (mg)": 20
                }
              }
            ]
          },
          {
            "name": "Pumpkin Seeds & Dried Apricots",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Shelled Pumpkin Seeds",
                "baseQty": 15,
                "unit": "g",
                "cal": 85,
                "p": 4.5,
                "c": 2,
                "f": 7.2,
                "micros": {
                  "Zinc (mg)": 1.2,
                  "Magnesium (mg)": 40
                }
              },
              {
                "name": "Dried Apricots",
                "baseQty": 25,
                "unit": "g",
                "cal": 60,
                "p": 0.8,
                "c": 15,
                "f": 0.1,
                "micros": {
                  "Potassium (mg)": 300,
                  "Iron (mg)": 0.8
                }
              }
            ]
          },
          {
            "name": "Scotch Egg & Cucumber Slices",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Traditional Pork Scotch Egg",
                "baseQty": 80,
                "unit": "g",
                "cal": 210,
                "p": 10,
                "c": 12,
                "f": 14,
                "micros": {
                  "Sodium (mg)": 450
                }
              },
              {
                "name": "Cucumber Slices",
                "baseQty": 100,
                "unit": "g",
                "cal": 15,
                "p": 0.5,
                "c": 3,
                "f": 0.1,
                "micros": {}
              }
            ]
          }
        ]
      },
      "dinner": {
        "name": "Dinner",
        "time": "07:30 PM",
        "options": [
          {
            "name": "Vegetable Wellington & Roast Potatoes",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Vegetarian Wellington Slice",
                "baseQty": 150,
                "unit": "g",
                "cal": 240,
                "p": 8,
                "c": 32,
                "f": 9,
                "micros": {
                  "Iron (mg)": 1.8
                }
              },
              {
                "name": "Roasted Potatoes in Olive oil",
                "baseQty": 100,
                "unit": "g",
                "cal": 130,
                "p": 2,
                "c": 24,
                "f": 3,
                "micros": {
                  "Potassium (mg)": 350
                }
              },
              {
                "name": "Steamed Green Peas",
                "baseQty": 50,
                "unit": "g",
                "cal": 40,
                "p": 2.5,
                "c": 7,
                "f": 0.2,
                "micros": {
                  "Vitamin C (mg)": 15
                }
              }
            ]
          },
          {
            "name": "Chickpea & Spinach Curry with Rice",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "birmingham"
            ],
            "ingredients": [
              {
                "name": "Chickpea Spinach Masala",
                "baseQty": 200,
                "unit": "g",
                "cal": 180,
                "p": 8,
                "c": 28,
                "f": 4,
                "micros": {
                  "Iron (mg)": 2.8,
                  "Folate (mcg)": 90
                }
              },
              {
                "name": "Steamed Basmati Rice",
                "baseQty": 120,
                "unit": "g",
                "cal": 150,
                "p": 3.2,
                "c": 32,
                "f": 0.3,
                "micros": {}
              }
            ]
          },
          {
            "name": "Roast Chicken, Mash & Veg",
            "profile": "balanced",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Roasted Chicken Leg (Skinless)",
                "baseQty": 130,
                "unit": "g",
                "cal": 210,
                "p": 30,
                "c": 0,
                "f": 9,
                "micros": {
                  "Iron (mg)": 1.6
                }
              },
              {
                "name": "Mashed Potatoes (no cream)",
                "baseQty": 120,
                "unit": "g",
                "cal": 105,
                "p": 2.2,
                "c": 22,
                "f": 1,
                "micros": {
                  "Potassium (mg)": 330
                }
              },
              {
                "name": "Steamed Brussels Sprouts",
                "baseQty": 80,
                "unit": "g",
                "cal": 30,
                "p": 2.4,
                "c": 6,
                "f": 0.3,
                "micros": {
                  "Vitamin C (mg)": 65
                }
              }
            ]
          },
          {
            "name": "Shepherds Pie & Broccoli",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "manchester",
              "cardiff"
            ],
            "ingredients": [
              {
                "name": "Minced Lamb Shepherd's Pie",
                "baseQty": 250,
                "unit": "g",
                "cal": 320,
                "p": 20,
                "c": 32,
                "f": 12,
                "micros": {
                  "Iron (mg)": 2.8,
                  "Zinc (mg)": 4.5,
                  "Vitamin B12 (mcg)": 2
                }
              },
              {
                "name": "Steamed Broccoli Florets",
                "baseQty": 80,
                "unit": "g",
                "cal": 28,
                "p": 2.2,
                "c": 5.5,
                "f": 0.3,
                "micros": {
                  "Vitamin C (mg)": 70
                }
              }
            ]
          },
          {
            "name": "Sea Bass, New Potatoes & Spinach",
            "profile": "high-protein",
            "type": "non-veg",
            "cities": [
              "london",
              "edinburgh",
              "cardiff"
            ],
            "ingredients": [
              {
                "name": "Grilled Sea Bass Fillet",
                "baseQty": 130,
                "unit": "g",
                "cal": 160,
                "p": 26,
                "c": 0,
                "f": 6,
                "micros": {
                  "Vitamin B12 (mcg)": 2.2,
                  "Selenium (mcg)": 35
                }
              },
              {
                "name": "Boiled New Potatoes",
                "baseQty": 100,
                "unit": "g",
                "cal": 80,
                "p": 2,
                "c": 18,
                "f": 0.1,
                "micros": {
                  "Potassium (mg)": 280
                }
              },
              {
                "name": "Steamed Baby Spinach",
                "baseQty": 80,
                "unit": "g",
                "cal": 20,
                "p": 1.8,
                "c": 2.8,
                "f": 0.3,
                "micros": {
                  "Iron (mg)": 2,
                  "Vitamin A (mcg)": 350
                }
              }
            ]
          },
          {
            "name": "Mushroom Risotto & Greens",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Creamy Mushroom Risotto",
                "baseQty": 200,
                "unit": "g",
                "cal": 240,
                "p": 5,
                "c": 38,
                "f": 7,
                "micros": {
                  "Iron (mg)": 1.2
                }
              },
              {
                "name": "Steamed Baby Spinach",
                "baseQty": 80,
                "unit": "g",
                "cal": 20,
                "p": 1.8,
                "c": 2.8,
                "f": 0.3,
                "micros": {
                  "Iron (mg)": 2
                }
              }
            ]
          }
        ]
      },
      "bedtime": {
        "name": "Bedtime Snack",
        "time": "10:00 PM",
        "options": [
          {
            "name": "Chamomile Tea & Digestive Biscuit",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Chamomile Herbal Tea",
                "baseQty": 1,
                "unit": "cup",
                "cal": 2,
                "p": 0,
                "c": 0.5,
                "f": 0,
                "micros": {}
              },
              {
                "name": "Digestive Biscuit",
                "baseQty": 1,
                "unit": "pc",
                "cal": 70,
                "p": 1,
                "c": 10,
                "f": 3,
                "micros": {
                  "Sodium (mg)": 80
                }
              }
            ]
          },
          {
            "name": "Warm Milk with Honey",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Semi-Skimmed Milk",
                "baseQty": 200,
                "unit": "ml",
                "cal": 95,
                "p": 7,
                "c": 9.5,
                "f": 3.5,
                "micros": {
                  "Calcium (mg)": 240
                }
              },
              {
                "name": "Clear Honey",
                "baseQty": 1,
                "unit": "tsp",
                "cal": 22,
                "p": 0,
                "c": 6,
                "f": 0,
                "micros": {}
              }
            ]
          },
          {
            "name": "Turkey slices & Chamomile Tea",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Sliced Turkey Breast",
                "baseQty": 50,
                "unit": "g",
                "cal": 55,
                "p": 11,
                "c": 0.4,
                "f": 1,
                "micros": {}
              },
              {
                "name": "Chamomile Herbal Tea",
                "baseQty": 1,
                "unit": "cup",
                "cal": 2,
                "p": 0,
                "c": 0.5,
                "f": 0,
                "micros": {}
              }
            ]
          }
        ]
      }
    }
  },
  "AU": {
    "name": "Australia",
    "meals": {
      "breakfast": {
        "name": "Breakfast",
        "time": "06:30 AM",
        "options": [
          {
            "name": "Smashed Avo, Grilled Feta & Toast",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "sydney",
              "melbourne"
            ],
            "ingredients": [
              {
                "name": "Whole Grain Sourdough",
                "baseQty": 1,
                "unit": "slice",
                "cal": 100,
                "p": 4.5,
                "c": 18,
                "f": 1.5,
                "micros": {
                  "Fibre (g)": 2.2
                }
              },
              {
                "name": "Fresh Avocado",
                "baseQty": 50,
                "unit": "g",
                "cal": 80,
                "p": 1,
                "c": 4.5,
                "f": 7.2,
                "micros": {
                  "Potassium (mg)": 250
                }
              },
              {
                "name": "Australian Feta Cheese",
                "baseQty": 25,
                "unit": "g",
                "cal": 65,
                "p": 3.5,
                "c": 1,
                "f": 5.5,
                "micros": {
                  "Calcium (mg)": 110,
                  "Sodium (mg)": 280
                }
              }
            ]
          },
          {
            "name": "Weet-Bix, Milk & Banana",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Sanitarium Weet-Bix",
                "baseQty": 2,
                "unit": "pcs",
                "cal": 110,
                "p": 3.8,
                "c": 22,
                "f": 0.6,
                "micros": {
                  "Iron (mg)": 3,
                  "Fibre (g)": 3
                }
              },
              {
                "name": "Low-Fat Dairy Milk",
                "baseQty": 200,
                "unit": "ml",
                "cal": 90,
                "p": 6.8,
                "c": 9.8,
                "f": 2.2,
                "micros": {
                  "Calcium (mg)": 240
                }
              },
              {
                "name": "Sliced Banana",
                "baseQty": 50,
                "unit": "g",
                "cal": 45,
                "p": 0.5,
                "c": 11.5,
                "f": 0.1,
                "micros": {
                  "Potassium (mg)": 180
                }
              }
            ]
          },
          {
            "name": "Smashed Avo & Poached Eggs",
            "profile": "balanced",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Large Poached Eggs",
                "baseQty": 2,
                "unit": "eggs",
                "cal": 140,
                "p": 12,
                "c": 0.6,
                "f": 9.8,
                "micros": {
                  "Vitamin D (mcg)": 1.6
                }
              },
              {
                "name": "Mashed Avocado",
                "baseQty": 40,
                "unit": "g",
                "cal": 65,
                "p": 0.8,
                "c": 3.5,
                "f": 6,
                "micros": {
                  "Potassium (mg)": 200
                }
              },
              {
                "name": "Sourdough Toast",
                "baseQty": 1,
                "unit": "slice",
                "cal": 90,
                "p": 4,
                "c": 17,
                "f": 1,
                "micros": {}
              }
            ]
          },
          {
            "name": "Kangaroo Steak & Eggs",
            "profile": "high-protein",
            "type": "non-veg",
            "cities": [
              "perth",
              "adelaide"
            ],
            "ingredients": [
              {
                "name": "Lean Kangaroo Fillet",
                "baseQty": 100,
                "unit": "g",
                "cal": 120,
                "p": 26,
                "c": 0,
                "f": 1.2,
                "micros": {
                  "Iron (mg)": 4,
                  "Zinc (mg)": 3.2
                }
              },
              {
                "name": "Poached Egg",
                "baseQty": 1,
                "unit": "egg",
                "cal": 70,
                "p": 6,
                "c": 0.3,
                "f": 4.9,
                "micros": {
                  "Calcium (mg)": 25
                }
              },
              {
                "name": "Sourdough Bread Toast",
                "baseQty": 1,
                "unit": "slice",
                "cal": 90,
                "p": 4,
                "c": 17,
                "f": 1,
                "micros": {}
              }
            ]
          },
          {
            "name": "Tofu Scramble & Avocado Toast",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Organic Tofu (Scrambled)",
                "baseQty": 100,
                "unit": "g",
                "cal": 80,
                "p": 8.5,
                "c": 1.5,
                "f": 4.5,
                "micros": {}
              },
              {
                "name": "Sourdough Toast",
                "baseQty": 1,
                "unit": "slice",
                "cal": 90,
                "p": 4,
                "c": 17,
                "f": 1,
                "micros": {}
              },
              {
                "name": "Mashed Avocado",
                "baseQty": 40,
                "unit": "g",
                "cal": 65,
                "p": 0.8,
                "c": 3.5,
                "f": 6,
                "micros": {}
              }
            ]
          }
        ]
      },
      "snack1": {
        "name": "Mid-morning Snack",
        "time": "09:30 AM",
        "options": [
          {
            "name": "Macadamia Nuts & Orange",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Raw Macadamia Nuts",
                "baseQty": 20,
                "unit": "g",
                "cal": 140,
                "p": 1.6,
                "c": 2.8,
                "f": 15,
                "micros": {
                  "Thiamine (mg)": 0.2,
                  "Manganese (mg)": 0.8
                }
              },
              {
                "name": "Juicy Orange",
                "baseQty": 1,
                "unit": "pc",
                "cal": 60,
                "p": 1.2,
                "c": 14,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 70,
                  "Folate (mcg)": 30
                }
              }
            ]
          },
          {
            "name": "Greek Yogurt & Passionfruit",
            "profile": "high-protein",
            "type": "veg",
            "ingredients": [
              {
                "name": "Greek Style Natural Yogurt",
                "baseQty": 150,
                "unit": "g",
                "cal": 90,
                "p": 14,
                "c": 5.5,
                "f": 0.8,
                "micros": {
                  "Calcium (mg)": 160
                }
              },
              {
                "name": "Fresh Passionfruit Pulp",
                "baseQty": 30,
                "unit": "g",
                "cal": 30,
                "p": 0.7,
                "c": 7,
                "f": 0.2,
                "micros": {
                  "Vitamin C (mg)": 10
                }
              }
            ]
          },
          {
            "name": "Turkey slices & Macadamia nuts",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Sliced Turkey Breast",
                "baseQty": 60,
                "unit": "g",
                "cal": 65,
                "p": 13,
                "c": 0.5,
                "f": 1,
                "micros": {}
              },
              {
                "name": "Raw Macadamia Nuts",
                "baseQty": 15,
                "unit": "g",
                "cal": 105,
                "p": 1.2,
                "c": 2.1,
                "f": 11,
                "micros": {}
              }
            ]
          }
        ]
      },
      "lunch": {
        "name": "Lunch",
        "time": "12:30 PM",
        "options": [
          {
            "name": "Roasted Veggie & Quinoa Bowl",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "melbourne"
            ],
            "ingredients": [
              {
                "name": "Cooked Quinoa",
                "baseQty": 100,
                "unit": "g",
                "cal": 120,
                "p": 4.4,
                "c": 21.3,
                "f": 1.9,
                "micros": {
                  "Iron (mg)": 1.5
                }
              },
              {
                "name": "Roasted Pumpkin & Eggplant",
                "baseQty": 150,
                "unit": "g",
                "cal": 75,
                "p": 1.5,
                "c": 15,
                "f": 1.2,
                "micros": {
                  "Vitamin A (mcg)": 180,
                  "Potassium (mg)": 380
                }
              },
              {
                "name": "Tossed Feta & Olive oil",
                "baseQty": 20,
                "unit": "g",
                "cal": 60,
                "p": 2.8,
                "c": 0.8,
                "f": 5,
                "micros": {
                  "Calcium (mg)": 90
                }
              }
            ]
          },
          {
            "name": "Tempeh & Veggie Wrap",
            "profile": "balanced",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Marinated Organic Tempeh",
                "baseQty": 80,
                "unit": "g",
                "cal": 150,
                "p": 16,
                "c": 7,
                "f": 7.5,
                "micros": {
                  "Iron (mg)": 2.2,
                  "Calcium (mg)": 90
                }
              },
              {
                "name": "Wholemeal Flatbread Wrap",
                "baseQty": 1,
                "unit": "pc",
                "cal": 130,
                "p": 4,
                "c": 22,
                "f": 2,
                "micros": {}
              },
              {
                "name": "Mixed Greens & Tomato Salad",
                "baseQty": 80,
                "unit": "g",
                "cal": 20,
                "p": 0.8,
                "c": 4,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 15
                }
              }
            ]
          },
          {
            "name": "Grilled Barramundi & Sweet Potato",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "sydney",
              "brisbane"
            ],
            "ingredients": [
              {
                "name": "Grilled Barramundi Fillet",
                "baseQty": 140,
                "unit": "g",
                "cal": 170,
                "p": 28,
                "c": 0,
                "f": 5.5,
                "micros": {
                  "Omega-3 (g)": 0.8,
                  "Potassium (mg)": 380
                }
              },
              {
                "name": "Steamed Sweet Potato",
                "baseQty": 120,
                "unit": "g",
                "cal": 108,
                "p": 2.2,
                "c": 24,
                "f": 0.2,
                "micros": {
                  "Vitamin A (mcg)": 900
                }
              },
              {
                "name": "Sautéed Green Beans",
                "baseQty": 80,
                "unit": "g",
                "cal": 28,
                "p": 1.5,
                "c": 5.2,
                "f": 0.2,
                "micros": {
                  "Vitamin C (mg)": 12
                }
              }
            ]
          },
          {
            "name": "Chicken breast & Avocado wrap",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Grilled Chicken Breast slices",
                "baseQty": 120,
                "unit": "g",
                "cal": 190,
                "p": 37,
                "c": 0,
                "f": 4,
                "micros": {
                  "Niacin (mg)": 11
                }
              },
              {
                "name": "Fresh Avocado slices",
                "baseQty": 30,
                "unit": "g",
                "cal": 50,
                "p": 0.6,
                "c": 2.8,
                "f": 4.8,
                "micros": {
                  "Potassium (mg)": 150
                }
              },
              {
                "name": "Barley Flour Wrap",
                "baseQty": 1,
                "unit": "pc",
                "cal": 140,
                "p": 4.5,
                "c": 25,
                "f": 2,
                "micros": {}
              }
            ]
          },
          {
            "name": "Pumpkin Lentil Salad",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Roasted Pumpkin cubes",
                "baseQty": 100,
                "unit": "g",
                "cal": 50,
                "p": 1,
                "c": 11,
                "f": 0.2,
                "micros": {}
              },
              {
                "name": "Canned Brown Lentils",
                "baseQty": 100,
                "unit": "g",
                "cal": 110,
                "p": 8,
                "c": 18,
                "f": 0.5,
                "micros": {
                  "Iron (mg)": 2.2
                }
              },
              {
                "name": "Spinach & Vinaigrette",
                "baseQty": 80,
                "unit": "g",
                "cal": 30,
                "p": 1.2,
                "c": 4,
                "f": 1.5,
                "micros": {}
              }
            ]
          }
        ]
      },
      "snack2": {
        "name": "Evening Snack",
        "time": "03:30 PM",
        "options": [
          {
            "name": "Crackers with Vegemite & Butter",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Arnotts Salada Crackers",
                "baseQty": 2,
                "unit": "pcs",
                "cal": 80,
                "p": 1.8,
                "c": 14.5,
                "f": 1.5,
                "micros": {
                  "Sodium (mg)": 210
                }
              },
              {
                "name": "Vegemite Yeast Extract",
                "baseQty": 5,
                "unit": "g",
                "cal": 10,
                "p": 1.3,
                "c": 1,
                "f": 0.1,
                "micros": {
                  "Thiamine B1 (mg)": 0.5,
                  "Riboflavin B2 (mg)": 0.4,
                  "Niacin (mg)": 5
                }
              },
              {
                "name": "Dairy Butter",
                "baseQty": 5,
                "unit": "g",
                "cal": 36,
                "p": 0,
                "c": 0,
                "f": 4,
                "micros": {
                  "Vitamin A (mcg)": 40
                }
              }
            ]
          },
          {
            "name": "Hard Boiled Egg & Almonds",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Hard Boiled Egg",
                "baseQty": 1,
                "unit": "pc",
                "cal": 74,
                "p": 6.3,
                "c": 0.4,
                "f": 5,
                "micros": {
                  "Vitamin D (mcg)": 1
                }
              },
              {
                "name": "Raw Almonds",
                "baseQty": 15,
                "unit": "g",
                "cal": 90,
                "p": 3.2,
                "c": 3,
                "f": 7.8,
                "micros": {
                  "Vitamin E (mg)": 4
                }
              }
            ]
          },
          {
            "name": "Kangaroo Biltong (Jerky)",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Lean Kangaroo Jerky",
                "baseQty": 30,
                "unit": "g",
                "cal": 90,
                "p": 18,
                "c": 0.8,
                "f": 1.2,
                "micros": {
                  "Iron (mg)": 3,
                  "Sodium (mg)": 480
                }
              }
            ]
          }
        ]
      },
      "dinner": {
        "name": "Dinner",
        "time": "06:30 PM",
        "options": [
          {
            "name": "Grilled Halloumi & Roasted Vegetable Salad",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "sydney",
              "adelaide"
            ],
            "ingredients": [
              {
                "name": "Grilled Halloumi Cheese",
                "baseQty": 60,
                "unit": "g",
                "cal": 190,
                "p": 12.5,
                "c": 1.2,
                "f": 15,
                "micros": {
                  "Calcium (mg)": 420,
                  "Sodium (mg)": 750
                }
              },
              {
                "name": "Roasted Pumpkin & Zucchini",
                "baseQty": 150,
                "unit": "g",
                "cal": 75,
                "p": 1.5,
                "c": 15,
                "f": 1.2,
                "micros": {
                  "Vitamin A (mcg)": 180,
                  "Potassium (mg)": 380
                }
              },
              {
                "name": "Baby Spinach & Balsamic Glaze",
                "baseQty": 80,
                "unit": "g",
                "cal": 30,
                "p": 1.2,
                "c": 4.5,
                "f": 0.8,
                "micros": {
                  "Vitamin C (mg)": 20
                }
              }
            ]
          },
          {
            "name": "Lentil Burger & Beetroot Salad",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "melbourne"
            ],
            "ingredients": [
              {
                "name": "Premium Lentil Patty",
                "baseQty": 1,
                "unit": "pc",
                "cal": 150,
                "p": 9,
                "c": 18,
                "f": 4.5,
                "micros": {
                  "Iron (mg)": 2.4
                }
              },
              {
                "name": "Multigrain Roll",
                "baseQty": 1,
                "unit": "pc",
                "cal": 130,
                "p": 4.8,
                "c": 24,
                "f": 1.5,
                "micros": {}
              },
              {
                "name": "Pickled Beetroot Salad",
                "baseQty": 80,
                "unit": "g",
                "cal": 35,
                "p": 1,
                "c": 7,
                "f": 0.1,
                "micros": {
                  "Folate (mcg)": 60,
                  "Iron (mg)": 0.6
                }
              }
            ]
          },
          {
            "name": "Grilled Lamb Chops, Pumpkin & Broccolini",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "perth",
              "adelaide",
              "brisbane"
            ],
            "ingredients": [
              {
                "name": "Australian Lamb Loin Chops",
                "baseQty": 120,
                "unit": "g",
                "cal": 260,
                "p": 26,
                "c": 0,
                "f": 17,
                "micros": {
                  "Iron (mg)": 2.2,
                  "Zinc (mg)": 4.8,
                  "Vitamin B12 (mcg)": 2.2
                }
              },
              {
                "name": "Roasted Kent Pumpkin",
                "baseQty": 100,
                "unit": "g",
                "cal": 50,
                "p": 1,
                "c": 11,
                "f": 0.2,
                "micros": {
                  "Vitamin A (mcg)": 220,
                  "Potassium (mg)": 320
                }
              },
              {
                "name": "Grilled Broccolini",
                "baseQty": 80,
                "unit": "g",
                "cal": 28,
                "p": 2.4,
                "c": 4.8,
                "f": 0.3,
                "micros": {
                  "Vitamin C (mg)": 60
                }
              }
            ]
          },
          {
            "name": "Kangaroo Fillet & Sweet Potato Mash",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Kangaroo Fillet steak",
                "baseQty": 150,
                "unit": "g",
                "cal": 180,
                "p": 39,
                "c": 0,
                "f": 1.8,
                "micros": {
                  "Iron (mg)": 6,
                  "Zinc (mg)": 4.8
                }
              },
              {
                "name": "Mashed Sweet Potato (no cream)",
                "baseQty": 100,
                "unit": "g",
                "cal": 90,
                "p": 1.8,
                "c": 20,
                "f": 0.2,
                "micros": {
                  "Vitamin A (mcg)": 750
                }
              },
              {
                "name": "Steamed Asparagus",
                "baseQty": 80,
                "unit": "g",
                "cal": 16,
                "p": 1.8,
                "c": 3.2,
                "f": 0.2,
                "micros": {
                  "Folate (mcg)": 110
                }
              }
            ]
          },
          {
            "name": "Thai Green Tofu Curry & Rice",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Tofu in Thai Green Curry Sauce",
                "baseQty": 150,
                "unit": "g",
                "cal": 190,
                "p": 11,
                "c": 12,
                "f": 11,
                "micros": {}
              },
              {
                "name": "Steamed Rice",
                "baseQty": 100,
                "unit": "g",
                "cal": 125,
                "p": 2.5,
                "c": 27.5,
                "f": 0.2,
                "micros": {}
              }
            ]
          }
        ]
      },
      "bedtime": {
        "name": "Bedtime Snack",
        "time": "09:00 PM",
        "options": [
          {
            "name": "Warm Milk & Honey",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Semi-Skimmed Milk",
                "baseQty": 200,
                "unit": "ml",
                "cal": 95,
                "p": 7,
                "c": 9.5,
                "f": 3.5,
                "micros": {
                  "Calcium (mg)": 240
                }
              },
              {
                "name": "Australian Honey",
                "baseQty": 1,
                "unit": "tsp",
                "cal": 22,
                "p": 0,
                "c": 6,
                "f": 0,
                "micros": {}
              }
            ]
          },
          {
            "name": "Turkey Breast slices",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Sliced Lean Turkey",
                "baseQty": 60,
                "unit": "g",
                "cal": 65,
                "p": 13,
                "c": 0.5,
                "f": 1,
                "micros": {}
              },
              {
                "name": "Water",
                "baseQty": 250,
                "unit": "ml",
                "cal": 0,
                "p": 0,
                "c": 0,
                "f": 0,
                "micros": {}
              }
            ]
          }
        ]
      }
    }
  },
  "JP": {
    "name": "Japan",
    "meals": {
      "breakfast": {
        "name": "Breakfast",
        "time": "07:00 AM",
        "options": [
          {
            "name": "Tofu, Rice & Miso Soup",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "kyoto"
            ],
            "ingredients": [
              {
                "name": "Steamed White Rice",
                "baseQty": 120,
                "unit": "g",
                "cal": 150,
                "p": 3,
                "c": 33,
                "f": 0.3,
                "micros": {}
              },
              {
                "name": "Silken Tofu",
                "baseQty": 100,
                "unit": "g",
                "cal": 60,
                "p": 6.5,
                "c": 2,
                "f": 3,
                "micros": {
                  "Calcium (mg)": 110,
                  "Iron (mg)": 1.2
                }
              },
              {
                "name": "Wakame Miso Soup",
                "baseQty": 150,
                "unit": "ml",
                "cal": 35,
                "p": 2,
                "c": 4,
                "f": 1,
                "micros": {
                  "Sodium (mg)": 600
                }
              }
            ]
          },
          {
            "name": "Tamagoyaki, Rice & Pickle",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Japanese Rolled Omelet (Tamagoyaki)",
                "baseQty": 80,
                "unit": "g",
                "cal": 120,
                "p": 8.5,
                "c": 4,
                "f": 8,
                "micros": {
                  "Vitamin D (mcg)": 1
                }
              },
              {
                "name": "Steamed White Rice",
                "baseQty": 120,
                "unit": "g",
                "cal": 150,
                "p": 3,
                "c": 33,
                "f": 0.3,
                "micros": {}
              },
              {
                "name": "Pickled Radish (Takuan)",
                "baseQty": 20,
                "unit": "g",
                "cal": 10,
                "p": 0.2,
                "c": 2,
                "f": 0,
                "micros": {
                  "Sodium (mg)": 240
                }
              }
            ]
          },
          {
            "name": "Salmon, Rice & Miso Soup",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "tokyo",
              "osaka",
              "sapporo",
              "fukuoka"
            ],
            "ingredients": [
              {
                "name": "Salted Grilled Salmon (Shake)",
                "baseQty": 80,
                "unit": "g",
                "cal": 130,
                "p": 18,
                "c": 0,
                "f": 6,
                "micros": {
                  "Vitamin D (mcg)": 8,
                  "Omega-3 (g)": 1.4
                }
              },
              {
                "name": "Steamed White Rice",
                "baseQty": 120,
                "unit": "g",
                "cal": 150,
                "p": 3,
                "c": 33,
                "f": 0.3,
                "micros": {}
              },
              {
                "name": "Wakame Miso Soup",
                "baseQty": 150,
                "unit": "ml",
                "cal": 35,
                "p": 2,
                "c": 4,
                "f": 1,
                "micros": {
                  "Sodium (mg)": 600
                }
              }
            ]
          },
          {
            "name": "Natto, Rice & Pickle",
            "profile": "high-protein",
            "type": "veg",
            "ingredients": [
              {
                "name": "Natto (Fermented Soybeans)",
                "baseQty": 50,
                "unit": "g",
                "cal": 100,
                "p": 9,
                "c": 6,
                "f": 5.5,
                "micros": {
                  "Iron (mg)": 1.5,
                  "Calcium (mg)": 45
                }
              },
              {
                "name": "Steamed White Rice",
                "baseQty": 100,
                "unit": "g",
                "cal": 125,
                "p": 2.5,
                "c": 27.5,
                "f": 0.2,
                "micros": {}
              },
              {
                "name": "Pickled Cucumber",
                "baseQty": 20,
                "unit": "g",
                "cal": 5,
                "p": 0.1,
                "c": 1,
                "f": 0,
                "micros": {}
              }
            ]
          }
        ]
      },
      "snack1": {
        "name": "Mid-morning Snack",
        "time": "10:00 AM",
        "options": [
          {
            "name": "Edamame Beans",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Boiled Edamame (in pods)",
                "baseQty": 100,
                "unit": "g",
                "cal": 110,
                "p": 11,
                "c": 9,
                "f": 4.8,
                "micros": {
                  "Iron (mg)": 2.2,
                  "Folate (mcg)": 120,
                  "Calcium (mg)": 60
                }
              }
            ]
          },
          {
            "name": "Matcha Soy Milk",
            "profile": "high-protein",
            "type": "veg",
            "ingredients": [
              {
                "name": "Unsweetened Soy Milk",
                "baseQty": 250,
                "unit": "ml",
                "cal": 85,
                "p": 8,
                "c": 4,
                "f": 4,
                "micros": {
                  "Calcium (mg)": 30,
                  "Iron (mg)": 1.2
                }
              },
              {
                "name": "Matcha Green Tea Powder",
                "baseQty": 3,
                "unit": "g",
                "cal": 10,
                "p": 0.8,
                "c": 1.2,
                "f": 0.1,
                "micros": {
                  "Antioxidants": 1
                }
              }
            ]
          },
          {
            "name": "Fish Cake (Kamaboko) slices",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Steamed Kamaboko Fish Cake",
                "baseQty": 80,
                "unit": "g",
                "cal": 80,
                "p": 10,
                "c": 8,
                "f": 0.8,
                "micros": {
                  "Sodium (mg)": 380
                }
              }
            ]
          }
        ]
      },
      "lunch": {
        "name": "Lunch",
        "time": "12:00 PM",
        "options": [
          {
            "name": "Vegetable Sushi Roll & Edamame",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Cucumber & Avocado Maki Rolls",
                "baseQty": 6,
                "unit": "pcs",
                "cal": 180,
                "p": 3.2,
                "c": 38,
                "f": 2.5,
                "micros": {
                  "Potassium (mg)": 140
                }
              },
              {
                "name": "Boiled Edamame",
                "baseQty": 80,
                "unit": "g",
                "cal": 88,
                "p": 8.8,
                "c": 7.2,
                "f": 3.8,
                "micros": {
                  "Iron (mg)": 1.8
                }
              }
            ]
          },
          {
            "name": "Cold Soba Noodles & Tempura Veggies",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "tokyo",
              "kyoto"
            ],
            "ingredients": [
              {
                "name": "Buckwheat Soba Noodles",
                "baseQty": 120,
                "unit": "g",
                "cal": 200,
                "p": 7.5,
                "c": 42,
                "f": 1,
                "micros": {
                  "Magnesium (mg)": 45,
                  "Fibre (g)": 2.4
                }
              },
              {
                "name": "Tempura Sweet Potato & Zucchini",
                "baseQty": 60,
                "unit": "g",
                "cal": 110,
                "p": 1.5,
                "c": 15,
                "f": 5,
                "micros": {
                  "Vitamin A (mcg)": 220
                }
              },
              {
                "name": "Tsuyu Dipping Sauce",
                "baseQty": 30,
                "unit": "ml",
                "cal": 20,
                "p": 0.5,
                "c": 4,
                "f": 0.1,
                "micros": {
                  "Sodium (mg)": 390
                }
              }
            ]
          },
          {
            "name": "Sushi Selection & Edamame",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "osaka",
              "tokyo",
              "fukuoka"
            ],
            "ingredients": [
              {
                "name": "Assorted Nigiri (Tuna, Salmon, Prawn)",
                "baseQty": 5,
                "unit": "pcs",
                "cal": 240,
                "p": 15,
                "c": 35,
                "f": 2.8,
                "micros": {
                  "Cobalamin B12 (mcg)": 1.8,
                  "Selenium (mcg)": 22
                }
              },
              {
                "name": "Boiled Edamame Beans",
                "baseQty": 80,
                "unit": "g",
                "cal": 88,
                "p": 8.8,
                "c": 7.2,
                "f": 3.8,
                "micros": {
                  "Iron (mg)": 1.8
                }
              }
            ]
          },
          {
            "name": "Yakitori Chicken Bento",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Skewered Grilled Chicken (Yakitori)",
                "baseQty": 120,
                "unit": "g",
                "cal": 190,
                "p": 26,
                "c": 4,
                "f": 7.5,
                "micros": {
                  "Iron (mg)": 1.2,
                  "Zinc (mg)": 1.5
                }
              },
              {
                "name": "Steamed White Rice",
                "baseQty": 100,
                "unit": "g",
                "cal": 125,
                "p": 2.5,
                "c": 27.5,
                "f": 0.2,
                "micros": {}
              },
              {
                "name": "Pickled Cabbage Salad",
                "baseQty": 50,
                "unit": "g",
                "cal": 15,
                "p": 0.5,
                "c": 3,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 12
                }
              }
            ]
          },
          {
            "name": "Teriyaki Tofu Rice Bowl",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Pan-Fried Teriyaki Tofu",
                "baseQty": 100,
                "unit": "g",
                "cal": 140,
                "p": 11,
                "c": 7,
                "f": 7,
                "micros": {}
              },
              {
                "name": "Steamed White Rice",
                "baseQty": 100,
                "unit": "g",
                "cal": 125,
                "p": 2.5,
                "c": 27.5,
                "f": 0.2,
                "micros": {}
              },
              {
                "name": "Shredded Seaweed & Onion",
                "baseQty": 30,
                "unit": "g",
                "cal": 10,
                "p": 0.5,
                "c": 2,
                "f": 0.1,
                "micros": {}
              }
            ]
          }
        ]
      },
      "snack2": {
        "name": "Evening Snack",
        "time": "03:30 PM",
        "options": [
          {
            "name": "Senbei Crackers & Green Tea",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Soy-glazed Rice Crackers (Senbei)",
                "baseQty": 2,
                "unit": "pcs",
                "cal": 90,
                "p": 1.8,
                "c": 20,
                "f": 0.2,
                "micros": {
                  "Sodium (mg)": 160
                }
              },
              {
                "name": "Hot Sencha Green Tea",
                "baseQty": 1,
                "unit": "cup",
                "cal": 2,
                "p": 0.1,
                "c": 0.4,
                "f": 0,
                "micros": {
                  "Antioxidants": 1
                }
              }
            ]
          },
          {
            "name": "Baked Satsumaimo",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Baked Japanese Sweet Potato",
                "baseQty": 120,
                "unit": "g",
                "cal": 130,
                "p": 1.8,
                "c": 30,
                "f": 0.2,
                "micros": {
                  "Vitamin A (mcg)": 1100,
                  "Potassium (mg)": 500
                }
              }
            ]
          },
          {
            "name": "Boiled Quail Eggs & Green Tea",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Boiled Quail Eggs",
                "baseQty": 4,
                "unit": "pcs",
                "cal": 64,
                "p": 5.2,
                "c": 0.4,
                "f": 4.8,
                "micros": {
                  "Vitamin A (mcg)": 40
                }
              },
              {
                "name": "Green Tea",
                "baseQty": 1,
                "unit": "cup",
                "cal": 2,
                "p": 0.1,
                "c": 0.4,
                "f": 0,
                "micros": {}
              }
            ]
          }
        ]
      },
      "dinner": {
        "name": "Dinner",
        "time": "08:30 PM",
        "options": [
          {
            "name": "Teriyaki Tofu & Bok Choy",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "kyoto"
            ],
            "ingredients": [
              {
                "name": "Pan-Fried Teriyaki Tofu",
                "baseQty": 120,
                "unit": "g",
                "cal": 160,
                "p": 14,
                "c": 8,
                "f": 8,
                "micros": {
                  "Calcium (mg)": 180,
                  "Iron (mg)": 2.2
                }
              },
              {
                "name": "Steamed Bok Choy with sesame",
                "baseQty": 100,
                "unit": "g",
                "cal": 35,
                "p": 1.8,
                "c": 3.5,
                "f": 2,
                "micros": {
                  "Vitamin C (mg)": 45,
                  "Calcium (mg)": 105
                }
              },
              {
                "name": "Steamed White Rice",
                "baseQty": 100,
                "unit": "g",
                "cal": 125,
                "p": 2.5,
                "c": 27.5,
                "f": 0.2,
                "micros": {}
              }
            ]
          },
          {
            "name": "Vegetable Udon Noodle Soup",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Udon Noodles in Kelp Dashi",
                "baseQty": 200,
                "unit": "g",
                "cal": 220,
                "p": 6,
                "c": 46,
                "f": 1,
                "micros": {
                  "Sodium (mg)": 650
                }
              },
              {
                "name": "Mixed Vegetables (Shiitake, Scallion, Carrot)",
                "baseQty": 80,
                "unit": "g",
                "cal": 35,
                "p": 1.2,
                "c": 7,
                "f": 0.2,
                "micros": {
                  "Vitamin A (mcg)": 150
                }
              }
            ]
          },
          {
            "name": "Sashimi Assortment & Miso Soup",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "tokyo",
              "sapporo",
              "fukuoka"
            ],
            "ingredients": [
              {
                "name": "Fresh Sashimi (Tuna & Salmon)",
                "baseQty": 120,
                "unit": "g",
                "cal": 165,
                "p": 26,
                "c": 0,
                "f": 6.2,
                "micros": {
                  "Vitamin D (mcg)": 10,
                  "Omega-3 (g)": 1.6
                }
              },
              {
                "name": "Steamed White Rice",
                "baseQty": 100,
                "unit": "g",
                "cal": 125,
                "p": 2.5,
                "c": 27.5,
                "f": 0.2,
                "micros": {}
              },
              {
                "name": "Wakame Miso Soup",
                "baseQty": 150,
                "unit": "ml",
                "cal": 35,
                "p": 2,
                "c": 4,
                "f": 1,
                "micros": {
                  "Sodium (mg)": 600
                }
              }
            ]
          },
          {
            "name": "Grilled Mackerel & Rice",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Grilled Mackerel (Saba)",
                "baseQty": 90,
                "unit": "g",
                "cal": 200,
                "p": 18,
                "c": 0,
                "f": 14,
                "micros": {
                  "Vitamin D (mcg)": 9,
                  "Omega-3 (g)": 2.2
                }
              },
              {
                "name": "Steamed White Rice",
                "baseQty": 100,
                "unit": "g",
                "cal": 125,
                "p": 2.5,
                "c": 27.5,
                "f": 0.2,
                "micros": {}
              },
              {
                "name": "Cucumber Salad (Sunomono)",
                "baseQty": 50,
                "unit": "g",
                "cal": 15,
                "p": 0.4,
                "c": 3,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 8
                }
              }
            ]
          },
          {
            "name": "Miso Eggplant (Nasu Dengaku) & Rice",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Baked Eggplant with Miso glaze",
                "baseQty": 150,
                "unit": "g",
                "cal": 120,
                "p": 2,
                "c": 22,
                "f": 3.5,
                "micros": {
                  "Potassium (mg)": 280
                }
              },
              {
                "name": "Steamed White Rice",
                "baseQty": 100,
                "unit": "g",
                "cal": 125,
                "p": 2.5,
                "c": 27.5,
                "f": 0.2,
                "micros": {}
              }
            ]
          }
        ]
      },
      "bedtime": {
        "name": "Bedtime Snack",
        "time": "10:30 PM",
        "options": [
          {
            "name": "Barley Tea & Walnuts",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Roasted Barley Tea (Mugicha)",
                "baseQty": 1,
                "unit": "cup",
                "cal": 2,
                "p": 0,
                "c": 0.5,
                "f": 0,
                "micros": {}
              },
              {
                "name": "Walnuts",
                "baseQty": 15,
                "unit": "g",
                "cal": 100,
                "p": 2.2,
                "c": 2,
                "f": 10,
                "micros": {
                  "Omega-3 (g)": 1.2
                }
              }
            ]
          },
          {
            "name": "Tuna Flakes cup",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Canned Light Tuna in brine",
                "baseQty": 60,
                "unit": "g",
                "cal": 65,
                "p": 15,
                "c": 0,
                "f": 0.5,
                "micros": {}
              },
              {
                "name": "Barley Tea",
                "baseQty": 1,
                "unit": "cup",
                "cal": 2,
                "p": 0,
                "c": 0.5,
                "f": 0,
                "micros": {}
              }
            ]
          }
        ]
      }
    }
  },
  "BR": {
    "name": "Brazil",
    "meals": {
      "breakfast": {
        "name": "Breakfast",
        "time": "07:30 AM",
        "options": [
          {
            "name": "Tapioca Crepe with Cheese & Tomato",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "rio-de-janeiro",
              "salvador"
            ],
            "ingredients": [
              {
                "name": "Tapioca Flour Crepe",
                "baseQty": 60,
                "unit": "g",
                "cal": 160,
                "p": 0.2,
                "c": 39,
                "f": 0.1,
                "micros": {
                  "Iron (mg)": 0.6
                }
              },
              {
                "name": "Queijo Minas Cheese",
                "baseQty": 40,
                "unit": "g",
                "cal": 100,
                "p": 7.2,
                "c": 1,
                "f": 7.5,
                "micros": {
                  "Calcium (mg)": 280
                }
              },
              {
                "name": "Sliced Tomato",
                "baseQty": 30,
                "unit": "g",
                "cal": 6,
                "p": 0.3,
                "c": 1.3,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 6
                }
              }
            ]
          },
          {
            "name": "Pão de Queijo & Cafe com Leite",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Traditional Cheese Bread",
                "baseQty": 3,
                "unit": "pcs",
                "cal": 220,
                "p": 4.2,
                "c": 28,
                "f": 10,
                "micros": {
                  "Calcium (mg)": 110,
                  "Sodium (mg)": 290
                }
              },
              {
                "name": "Coffee with Whole Milk",
                "baseQty": 150,
                "unit": "ml",
                "cal": 45,
                "p": 2,
                "c": 3,
                "f": 2,
                "micros": {
                  "Calcium (mg)": 70
                }
              }
            ]
          },
          {
            "name": "Pão de Sal, Eggs & Coffee",
            "profile": "balanced",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "French Roll (Pão de Sal)",
                "baseQty": 1,
                "unit": "pc",
                "cal": 140,
                "p": 4,
                "c": 28,
                "f": 1,
                "micros": {}
              },
              {
                "name": "Scrambled Eggs (Butter)",
                "baseQty": 2,
                "unit": "eggs",
                "cal": 150,
                "p": 12,
                "c": 0.6,
                "f": 11,
                "micros": {
                  "Vitamin D (mcg)": 1.2
                }
              },
              {
                "name": "Black Coffee",
                "baseQty": 1,
                "unit": "cup",
                "cal": 2,
                "p": 0.1,
                "c": 0.4,
                "f": 0,
                "micros": {}
              }
            ]
          },
          {
            "name": "Tapioca Crepe with Eggs & Cheese",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Tapioca Flour Crepe",
                "baseQty": 60,
                "unit": "g",
                "cal": 160,
                "p": 0.2,
                "c": 39,
                "f": 0.1,
                "micros": {}
              },
              {
                "name": "Scrambled Egg Whites & Cheese",
                "baseQty": 120,
                "unit": "g",
                "cal": 150,
                "p": 18,
                "c": 1.5,
                "f": 8,
                "micros": {
                  "Calcium (mg)": 190
                }
              }
            ]
          },
          {
            "name": "Oatmeal with Papaya & Honey",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Oatmeal Oats",
                "baseQty": 40,
                "unit": "g",
                "cal": 150,
                "p": 5,
                "c": 26,
                "f": 2.5,
                "micros": {}
              },
              {
                "name": "Fresh Papaya cubes",
                "baseQty": 80,
                "unit": "g",
                "cal": 35,
                "p": 0.4,
                "c": 9,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 45
                }
              },
              {
                "name": "Skim Milk",
                "baseQty": 150,
                "unit": "ml",
                "cal": 52,
                "p": 5.2,
                "c": 7.5,
                "f": 0.1,
                "micros": {}
              }
            ]
          }
        ]
      },
      "snack1": {
        "name": "Mid-morning Snack",
        "time": "10:30 AM",
        "options": [
          {
            "name": "Açai bowl with banana",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Organic Açai Pulp",
                "baseQty": 120,
                "unit": "g",
                "cal": 90,
                "p": 1.2,
                "c": 16,
                "f": 2.5,
                "micros": {
                  "Antioxidants": 1,
                  "Calcium (mg)": 40
                }
              },
              {
                "name": "Sliced Banana",
                "baseQty": 50,
                "unit": "g",
                "cal": 45,
                "p": 0.5,
                "c": 11.5,
                "f": 0.1,
                "micros": {
                  "Potassium (mg)": 180
                }
              }
            ]
          },
          {
            "name": "Brazil Nuts",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Brazil Nuts",
                "baseQty": 25,
                "unit": "g",
                "cal": 160,
                "p": 3.5,
                "c": 3,
                "f": 16,
                "micros": {
                  "Selenium (mcg)": 450,
                  "Magnesium (mg)": 90
                }
              }
            ]
          },
          {
            "name": "Chicken Empada (Pastry)",
            "profile": "balanced",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Chicken Empada pie",
                "baseQty": 80,
                "unit": "g",
                "cal": 210,
                "p": 8.5,
                "c": 22,
                "f": 10,
                "micros": {}
              }
            ]
          }
        ]
      },
      "lunch": {
        "name": "Lunch",
        "time": "01:00 PM",
        "options": [
          {
            "name": "Prato Feito Vegetariano",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "sao-paulo"
            ],
            "ingredients": [
              {
                "name": "Cooked Rice & Carioca Beans",
                "baseQty": 200,
                "unit": "g",
                "cal": 210,
                "p": 8,
                "c": 42,
                "f": 1,
                "micros": {
                  "Iron (mg)": 2.8,
                  "Potassium (mg)": 450
                }
              },
              {
                "name": "Fried Egg",
                "baseQty": 1,
                "unit": "pc",
                "cal": 80,
                "p": 6,
                "c": 0.3,
                "f": 6,
                "micros": {
                  "Calcium (mg)": 25
                }
              },
              {
                "name": "Salad (Lettuce, Tomato, Onion)",
                "baseQty": 100,
                "unit": "g",
                "cal": 20,
                "p": 0.8,
                "c": 4,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 15
                }
              }
            ]
          },
          {
            "name": "Prato Feito (Beef Steak & Beans)",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "brasilia",
              "porto-alegre"
            ],
            "ingredients": [
              {
                "name": "Brazilian Rump Steak (Alcatra)",
                "baseQty": 120,
                "unit": "g",
                "cal": 210,
                "p": 26,
                "c": 0,
                "f": 11,
                "micros": {
                  "Iron (mg)": 2.4,
                  "Zinc (mg)": 4.5,
                  "Vitamin B12 (mcg)": 1.6
                }
              },
              {
                "name": "White Rice & Carioca Beans",
                "baseQty": 200,
                "unit": "g",
                "cal": 210,
                "p": 8,
                "c": 42,
                "f": 1,
                "micros": {
                  "Iron (mg)": 2.8,
                  "Potassium (mg)": 450
                }
              },
              {
                "name": "Vinegar Salad (Vinagrete)",
                "baseQty": 50,
                "unit": "g",
                "cal": 25,
                "p": 0.5,
                "c": 4,
                "f": 1,
                "micros": {
                  "Vitamin C (mg)": 10
                }
              }
            ]
          },
          {
            "name": "Chicken, Rice, Beans & Couve",
            "profile": "high-protein",
            "type": "non-veg",
            "cities": [
              "sao-paulo",
              "rio-de-janeiro"
            ],
            "ingredients": [
              {
                "name": "Grilled Chicken Breast (File de Frango)",
                "baseQty": 140,
                "unit": "g",
                "cal": 210,
                "p": 40,
                "c": 0,
                "f": 4.5,
                "micros": {
                  "Niacin (mg)": 11
                }
              },
              {
                "name": "White Rice & Carioca Beans",
                "baseQty": 150,
                "unit": "g",
                "cal": 160,
                "p": 6,
                "c": 32,
                "f": 0.8,
                "micros": {
                  "Iron (mg)": 2
                }
              },
              {
                "name": "Brazilian Collard Greens (Couve)",
                "baseQty": 50,
                "unit": "g",
                "cal": 30,
                "p": 1.5,
                "c": 4.5,
                "f": 1,
                "micros": {
                  "Calcium (mg)": 80,
                  "Vitamin C (mg)": 35
                }
              }
            ]
          },
          {
            "name": "Rice, Beans, Sautéed Mushrooms & Farofa",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "White Rice & Carioca Beans",
                "baseQty": 200,
                "unit": "g",
                "cal": 210,
                "p": 8,
                "c": 42,
                "f": 1,
                "micros": {}
              },
              {
                "name": "Sautéed Mushrooms",
                "baseQty": 80,
                "unit": "g",
                "cal": 40,
                "p": 2.2,
                "c": 4.5,
                "f": 1.5,
                "micros": {}
              },
              {
                "name": "Cassava Farofa",
                "baseQty": 20,
                "unit": "g",
                "cal": 70,
                "p": 0.3,
                "c": 16,
                "f": 0.8,
                "micros": {}
              }
            ]
          }
        ]
      },
      "snack2": {
        "name": "Evening Snack",
        "time": "04:30 PM",
        "options": [
          {
            "name": "Pão de Queijo & Espresso",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Traditional Cheese Bread",
                "baseQty": 2,
                "unit": "pcs",
                "cal": 150,
                "p": 2.8,
                "c": 19,
                "f": 6.8,
                "micros": {
                  "Calcium (mg)": 75
                }
              },
              {
                "name": "Espresso Coffee",
                "baseQty": 50,
                "unit": "ml",
                "cal": 2,
                "p": 0.1,
                "c": 0.4,
                "f": 0,
                "micros": {}
              }
            ]
          },
          {
            "name": "Banana mashed with Oat bran",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Mashed Banana",
                "baseQty": 100,
                "unit": "g",
                "cal": 90,
                "p": 1,
                "c": 23,
                "f": 0.2,
                "micros": {
                  "Potassium (mg)": 360
                }
              },
              {
                "name": "Oat Bran",
                "baseQty": 15,
                "unit": "g",
                "cal": 55,
                "p": 2.2,
                "c": 10,
                "f": 1,
                "micros": {
                  "Iron (mg)": 0.8,
                  "Fibre (g)": 2.5
                }
              }
            ]
          },
          {
            "name": "Chicken Coxinha & Espresso",
            "profile": "balanced",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Savory Chicken Croquette (Coxinha)",
                "baseQty": 80,
                "unit": "g",
                "cal": 230,
                "p": 9.5,
                "c": 24,
                "f": 11,
                "micros": {}
              },
              {
                "name": "Espresso Coffee",
                "baseQty": 50,
                "unit": "ml",
                "cal": 2,
                "p": 0.1,
                "c": 0.4,
                "f": 0,
                "micros": {}
              }
            ]
          }
        ]
      },
      "dinner": {
        "name": "Dinner",
        "time": "08:30 PM",
        "options": [
          {
            "name": "Vegetable Moqueca & Rice",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "salvador"
            ],
            "ingredients": [
              {
                "name": "Vegetable Moqueca (Palm Oil/Dendê & Coconut)",
                "baseQty": 200,
                "unit": "g",
                "cal": 220,
                "p": 3.5,
                "c": 18,
                "f": 16,
                "micros": {
                  "Vitamin A (mcg)": 380,
                  "Vitamin C (mg)": 40
                }
              },
              {
                "name": "Steamed White Rice",
                "baseQty": 100,
                "unit": "g",
                "cal": 125,
                "p": 2.5,
                "c": 27.5,
                "f": 0.2,
                "micros": {}
              }
            ]
          },
          {
            "name": "Omelet with Spinach & Ricotta",
            "profile": "balanced",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Whole Eggs",
                "baseQty": 2,
                "unit": "eggs",
                "cal": 140,
                "p": 12,
                "c": 0.6,
                "f": 9.8,
                "micros": {}
              },
              {
                "name": "Fresh Ricotta & Spinach filling",
                "baseQty": 80,
                "unit": "g",
                "cal": 90,
                "p": 6,
                "c": 3,
                "f": 6,
                "micros": {
                  "Calcium (mg)": 150,
                  "Vitamin A (mcg)": 280
                }
              }
            ]
          },
          {
            "name": "Grilled Chicken & Sweet Potato",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "rio-de-janeiro"
            ],
            "ingredients": [
              {
                "name": "Chicken Breast Filet",
                "baseQty": 120,
                "unit": "g",
                "cal": 180,
                "p": 36,
                "c": 0,
                "f": 3.6,
                "micros": {
                  "Niacin (mg)": 10
                }
              },
              {
                "name": "Boiled Sweet Potato (Batata Doce)",
                "baseQty": 120,
                "unit": "g",
                "cal": 108,
                "p": 2,
                "c": 24,
                "f": 0.2,
                "micros": {
                  "Vitamin A (mcg)": 900
                }
              },
              {
                "name": "Steamed Broccoli",
                "baseQty": 80,
                "unit": "g",
                "cal": 28,
                "p": 2.2,
                "c": 5.5,
                "f": 0.3,
                "micros": {
                  "Vitamin C (mg)": 50
                }
              }
            ]
          },
          {
            "name": "Beef Mince with Okra & Rice",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "brasilia"
            ],
            "ingredients": [
              {
                "name": "Lean Beef Mince with Okra (Carne Moída com Quiabo)",
                "baseQty": 150,
                "unit": "g",
                "cal": 240,
                "p": 24,
                "c": 6,
                "f": 12,
                "micros": {
                  "Iron (mg)": 2.8,
                  "Folate (mcg)": 50
                }
              },
              {
                "name": "Steamed Rice",
                "baseQty": 100,
                "unit": "g",
                "cal": 125,
                "p": 2.5,
                "c": 27.5,
                "f": 0.2,
                "micros": {}
              }
            ]
          },
          {
            "name": "Churrasco Beef & Cassava",
            "profile": "surplus",
            "type": "non-veg",
            "cities": [
              "porto-alegre"
            ],
            "ingredients": [
              {
                "name": "Barbecued Beef Picanha",
                "baseQty": 150,
                "unit": "g",
                "cal": 330,
                "p": 30,
                "c": 0,
                "f": 22,
                "micros": {
                  "Iron (mg)": 3,
                  "Zinc (mg)": 5.5
                }
              },
              {
                "name": "Boiled Cassava (Mandioca)",
                "baseQty": 100,
                "unit": "g",
                "cal": 160,
                "p": 1.5,
                "c": 38,
                "f": 0.3,
                "micros": {
                  "Calcium (mg)": 30
                }
              },
              {
                "name": "Tomato Salsa (Campanha)",
                "baseQty": 50,
                "unit": "g",
                "cal": 20,
                "p": 0.5,
                "c": 3.5,
                "f": 0.5,
                "micros": {
                  "Vitamin C (mg)": 10
                }
              }
            ]
          },
          {
            "name": "Veggie Feijoada & Rice",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Vegetable & Tofu Feijoada",
                "baseQty": 200,
                "unit": "g",
                "cal": 180,
                "p": 9,
                "c": 26,
                "f": 4.5,
                "micros": {
                  "Iron (mg)": 2.4
                }
              },
              {
                "name": "Steamed White Rice",
                "baseQty": 100,
                "unit": "g",
                "cal": 125,
                "p": 2.5,
                "c": 27.5,
                "f": 0.2,
                "micros": {}
              }
            ]
          }
        ]
      },
      "bedtime": {
        "name": "Bedtime Snack",
        "time": "10:30 PM",
        "options": [
          {
            "name": "Passionfruit Tea & Almonds",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Passionfruit Tea (Maracujá)",
                "baseQty": 1,
                "unit": "cup",
                "cal": 4,
                "p": 0,
                "c": 1,
                "f": 0,
                "micros": {}
              },
              {
                "name": "Almonds",
                "baseQty": 15,
                "unit": "g",
                "cal": 90,
                "p": 3.2,
                "c": 3,
                "f": 7.8,
                "micros": {
                  "Vitamin E (mg)": 4
                }
              }
            ]
          },
          {
            "name": "Turkey roll-ups & Chamomile tea",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Sliced Turkey Breast",
                "baseQty": 60,
                "unit": "g",
                "cal": 65,
                "p": 13,
                "c": 0.5,
                "f": 1,
                "micros": {}
              },
              {
                "name": "Chamomile Herbal Tea",
                "baseQty": 1,
                "unit": "cup",
                "cal": 2,
                "p": 0,
                "c": 0.5,
                "f": 0,
                "micros": {}
              }
            ]
          }
        ]
      }
    }
  },
  "DE": {
    "name": "Germany",
    "meals": {
      "breakfast": {
        "name": "Breakfast",
        "time": "07:30 AM",
        "options": [
          {
            "name": "Muesli with Apple & Walnuts",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Muesli Oats Mix",
                "baseQty": 50,
                "unit": "g",
                "cal": 180,
                "p": 6,
                "c": 32,
                "f": 2.8,
                "micros": {
                  "Iron (mg)": 2.2
                }
              },
              {
                "name": "Fresh Apple slices",
                "baseQty": 50,
                "unit": "g",
                "cal": 25,
                "p": 0.2,
                "c": 6.5,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 4
                }
              },
              {
                "name": "Cow Milk 1.5% Fat",
                "baseQty": 200,
                "unit": "ml",
                "cal": 96,
                "p": 7,
                "c": 9.8,
                "f": 3,
                "micros": {
                  "Calcium (mg)": 240
                }
              },
              {
                "name": "Walnuts",
                "baseQty": 10,
                "unit": "g",
                "cal": 65,
                "p": 1.5,
                "c": 1.2,
                "f": 6.5,
                "micros": {}
              }
            ]
          },
          {
            "name": "Vollkornbrot with Cheese & Cucumber",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "German Dark Rye Bread (Vollkornbrot)",
                "baseQty": 2,
                "unit": "slices",
                "cal": 170,
                "p": 5.5,
                "c": 32,
                "f": 1.8,
                "micros": {
                  "Iron (mg)": 2,
                  "Fibre (g)": 6
                }
              },
              {
                "name": "Emmentaler Cheese Slices",
                "baseQty": 30,
                "unit": "g",
                "cal": 115,
                "p": 8.5,
                "c": 0.2,
                "f": 9,
                "micros": {
                  "Calcium (mg)": 300
                }
              },
              {
                "name": "Fresh Cucumber slices",
                "baseQty": 50,
                "unit": "g",
                "cal": 8,
                "p": 0.3,
                "c": 1.8,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 4
                }
              }
            ]
          },
          {
            "name": "Vollkornbrot with Cheese & Boiled Egg",
            "profile": "balanced",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Vollkornbrot (Dark Rye)",
                "baseQty": 1,
                "unit": "slice",
                "cal": 85,
                "p": 2.8,
                "c": 16,
                "f": 0.9,
                "micros": {
                  "Iron (mg)": 1
                }
              },
              {
                "name": "Gouda Cheese Slice",
                "baseQty": 30,
                "unit": "g",
                "cal": 110,
                "p": 7.5,
                "c": 0.6,
                "f": 8.5,
                "micros": {
                  "Calcium (mg)": 240
                }
              },
              {
                "name": "Boiled Egg",
                "baseQty": 1,
                "unit": "pc",
                "cal": 74,
                "p": 6.3,
                "c": 0.4,
                "f": 5,
                "micros": {
                  "Vitamin D (mcg)": 1
                }
              }
            ]
          },
          {
            "name": "Dark Bread with Quark & Jam",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Vollkornbrot (Dark Rye)",
                "baseQty": 2,
                "unit": "slices",
                "cal": 170,
                "p": 5.5,
                "c": 32,
                "f": 1.8,
                "micros": {}
              },
              {
                "name": "Low-Fat German Quark",
                "baseQty": 60,
                "unit": "g",
                "cal": 40,
                "p": 7.2,
                "c": 2.4,
                "f": 0.1,
                "micros": {
                  "Calcium (mg)": 55
                }
              },
              {
                "name": "Strawberry Fruit Jam",
                "baseQty": 15,
                "unit": "g",
                "cal": 40,
                "p": 0.1,
                "c": 10,
                "f": 0,
                "micros": {}
              }
            ]
          }
        ]
      },
      "snack1": {
        "name": "Mid-morning Snack",
        "time": "10:30 AM",
        "options": [
          {
            "name": "Apple & Quark",
            "profile": "high-protein",
            "type": "veg",
            "ingredients": [
              {
                "name": "German Magerquark",
                "baseQty": 150,
                "unit": "g",
                "cal": 100,
                "p": 18,
                "c": 6,
                "f": 0.3,
                "micros": {
                  "Calcium (mg)": 140
                }
              },
              {
                "name": "Fresh Red Apple",
                "baseQty": 100,
                "unit": "g",
                "cal": 52,
                "p": 0.3,
                "c": 14,
                "f": 0.2,
                "micros": {
                  "Vitamin C (mg)": 8
                }
              }
            ]
          },
          {
            "name": "Sausage slices (Landjäger)",
            "profile": "balanced",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Cured Landjäger Sausage",
                "baseQty": 40,
                "unit": "g",
                "cal": 160,
                "p": 11,
                "c": 0.5,
                "f": 13,
                "micros": {
                  "Sodium (mg)": 520
                }
              }
            ]
          }
        ]
      },
      "lunch": {
        "name": "Lunch",
        "time": "12:30 PM",
        "options": [
          {
            "name": "Käsespätzle & Salad",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "munich"
            ],
            "ingredients": [
              {
                "name": "Traditional Spätzle Pasta",
                "baseQty": 150,
                "unit": "g",
                "cal": 240,
                "p": 8,
                "c": 45,
                "f": 2.5,
                "micros": {
                  "Calcium (mg)": 30
                }
              },
              {
                "name": "Bergkäse Mountain Cheese",
                "baseQty": 35,
                "unit": "g",
                "cal": 140,
                "p": 10,
                "c": 0.2,
                "f": 11,
                "micros": {
                  "Calcium (mg)": 350
                }
              },
              {
                "name": "Green Salad with vinaigrette",
                "baseQty": 80,
                "unit": "g",
                "cal": 30,
                "p": 0.8,
                "c": 3,
                "f": 2,
                "micros": {
                  "Vitamin C (mg)": 12
                }
              }
            ]
          },
          {
            "name": "Lentil Potato Stew (Linseneintopf)",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "berlin",
              "cologne"
            ],
            "ingredients": [
              {
                "name": "Brown Lentil Stew with root vegetables",
                "baseQty": 250,
                "unit": "g",
                "cal": 210,
                "p": 12,
                "c": 34,
                "f": 1.5,
                "micros": {
                  "Iron (mg)": 3.4,
                  "Potassium (mg)": 450
                }
              },
              {
                "name": "Boiled Potatoes in stew",
                "baseQty": 100,
                "unit": "g",
                "cal": 80,
                "p": 2,
                "c": 18,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 15
                }
              }
            ]
          },
          {
            "name": "Chicken Schnitzel, Potatoes & Sauerkraut",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "munich",
              "frankfurt"
            ],
            "ingredients": [
              {
                "name": "Breaded Chicken Schnitzel",
                "baseQty": 120,
                "unit": "g",
                "cal": 260,
                "p": 28,
                "c": 14,
                "f": 10,
                "micros": {
                  "Iron (mg)": 1.4
                }
              },
              {
                "name": "Boiled Potatoes (Salzkartoffeln)",
                "baseQty": 120,
                "unit": "g",
                "cal": 95,
                "p": 2.4,
                "c": 21,
                "f": 0.2,
                "micros": {
                  "Potassium (mg)": 360
                }
              },
              {
                "name": "Fermented Sauerkraut",
                "baseQty": 80,
                "unit": "g",
                "cal": 15,
                "p": 0.8,
                "c": 3.5,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 24,
                  "Sodium (mg)": 520
                }
              }
            ]
          },
          {
            "name": "Geschnetzeltes & Spätzle",
            "profile": "surplus",
            "type": "veg",
            "ingredients": [
              {
                "name": "Creamy Pork/Turkey Geschnetzeltes",
                "baseQty": 150,
                "unit": "g",
                "cal": 260,
                "p": 24,
                "c": 4,
                "f": 16,
                "micros": {
                  "Iron (mg)": 1.6
                }
              },
              {
                "name": "Traditional Egg Spätzle",
                "baseQty": 120,
                "unit": "g",
                "cal": 190,
                "p": 6.5,
                "c": 36,
                "f": 2,
                "micros": {}
              }
            ]
          },
          {
            "name": "Potato Pancakes & Applesauce",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "German Potato Pancakes (Kartoffelpuffer)",
                "baseQty": 150,
                "unit": "g",
                "cal": 230,
                "p": 3.5,
                "c": 32,
                "f": 9.8,
                "micros": {}
              },
              {
                "name": "Applesauce (Apfelmus)",
                "baseQty": 80,
                "unit": "g",
                "cal": 60,
                "p": 0.2,
                "c": 15,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 5
                }
              }
            ]
          }
        ]
      },
      "snack2": {
        "name": "Evening Snack",
        "time": "04:00 PM",
        "options": [
          {
            "name": "Knäckebrot & Cottage Cheese",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Rye Crispbread (Knäckebrot)",
                "baseQty": 2,
                "unit": "pcs",
                "cal": 70,
                "p": 2,
                "c": 14,
                "f": 0.6,
                "micros": {
                  "Fibre (g)": 3
                }
              },
              {
                "name": "Cottage Cheese (Hüttenkäse)",
                "baseQty": 80,
                "unit": "g",
                "cal": 72,
                "p": 9.6,
                "c": 2.2,
                "f": 2.2,
                "micros": {
                  "Calcium (mg)": 60
                }
              }
            ]
          },
          {
            "name": "Ham roll-ups with Gherkin",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "German Smoked Ham",
                "baseQty": 50,
                "unit": "g",
                "cal": 75,
                "p": 11,
                "c": 0.5,
                "f": 3,
                "micros": {
                  "Sodium (mg)": 690
                }
              },
              {
                "name": "Gherkin (Pickled Cucumber)",
                "baseQty": 40,
                "unit": "g",
                "cal": 8,
                "p": 0.2,
                "c": 1.6,
                "f": 0.1,
                "micros": {}
              }
            ]
          }
        ]
      },
      "dinner": {
        "name": "Dinner",
        "time": "07:30 PM",
        "options": [
          {
            "name": "Vegetarian Abendbrot",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "berlin"
            ],
            "ingredients": [
              {
                "name": "German Grain Bread",
                "baseQty": 2,
                "unit": "slices",
                "cal": 170,
                "p": 5.5,
                "c": 32,
                "f": 1.8,
                "micros": {
                  "Fibre (g)": 5.5
                }
              },
              {
                "name": "Gouda Cheese Slices",
                "baseQty": 40,
                "unit": "g",
                "cal": 145,
                "p": 10,
                "c": 0.8,
                "f": 11,
                "micros": {
                  "Calcium (mg)": 320
                }
              },
              {
                "name": "German Pickles (Gewürzgurken)",
                "baseQty": 50,
                "unit": "g",
                "cal": 10,
                "p": 0.3,
                "c": 2,
                "f": 0.1,
                "micros": {
                  "Sodium (mg)": 450
                }
              }
            ]
          },
          {
            "name": "Abendbrot (Dark bread, Gouda & Ham)",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "munich",
              "frankfurt",
              "cologne"
            ],
            "ingredients": [
              {
                "name": "German Dark Bread",
                "baseQty": 2,
                "unit": "slices",
                "cal": 170,
                "p": 5.5,
                "c": 32,
                "f": 1.8,
                "micros": {
                  "Fibre (g)": 5.5
                }
              },
              {
                "name": "Gouda Cheese Slice",
                "baseQty": 30,
                "unit": "g",
                "cal": 110,
                "p": 7.5,
                "c": 0.6,
                "f": 8.5,
                "micros": {
                  "Calcium (mg)": 240
                }
              },
              {
                "name": "German Smoked Ham (Schinken)",
                "baseQty": 40,
                "unit": "g",
                "cal": 60,
                "p": 9,
                "c": 0.4,
                "f": 2.2,
                "micros": {
                  "Sodium (mg)": 580,
                  "Iron (mg)": 0.8
                }
              }
            ]
          },
          {
            "name": "Pan-Fried Herring & Potatoes",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "hamburg"
            ],
            "ingredients": [
              {
                "name": "Fried Atlantic Herring",
                "baseQty": 120,
                "unit": "g",
                "cal": 240,
                "p": 22,
                "c": 0,
                "f": 16,
                "micros": {
                  "Vitamin D (mcg)": 12,
                  "Omega-3 (g)": 2.4
                }
              },
              {
                "name": "Boiled Potatoes with parsley",
                "baseQty": 120,
                "unit": "g",
                "cal": 95,
                "p": 2.4,
                "c": 21,
                "f": 0.2,
                "micros": {
                  "Potassium (mg)": 360
                }
              }
            ]
          },
          {
            "name": "Veggie Sausage & Potato Salad",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Vegetarian Tofu Sausage",
                "baseQty": 1,
                "unit": "pc",
                "cal": 120,
                "p": 9,
                "c": 4.5,
                "f": 7.5,
                "micros": {}
              },
              {
                "name": "German Potato Salad (Oil/Vinegar dressing)",
                "baseQty": 120,
                "unit": "g",
                "cal": 150,
                "p": 2.2,
                "c": 24,
                "f": 5,
                "micros": {}
              }
            ]
          }
        ]
      },
      "bedtime": {
        "name": "Bedtime Snack",
        "time": "09:30 PM",
        "options": [
          {
            "name": "Peppermint Tea & Dark Chocolate",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Peppermint Herbal Tea",
                "baseQty": 1,
                "unit": "cup",
                "cal": 2,
                "p": 0,
                "c": 0.5,
                "f": 0,
                "micros": {}
              },
              {
                "name": "Dark Chocolate (70% Kakao)",
                "baseQty": 15,
                "unit": "g",
                "cal": 85,
                "p": 1,
                "c": 7,
                "f": 6,
                "micros": {
                  "Magnesium (mg)": 35
                }
              }
            ]
          },
          {
            "name": "Turkey slices",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Sliced Lean Turkey",
                "baseQty": 60,
                "unit": "g",
                "cal": 65,
                "p": 13,
                "c": 0.5,
                "f": 1,
                "micros": {}
              }
            ]
          }
        ]
      }
    }
  },
  "ZA": {
    "name": "South Africa",
    "meals": {
      "breakfast": {
        "name": "Breakfast",
        "time": "07:00 AM",
        "options": [
          {
            "name": "Maize Porridge (Pap) with Milk & Honey",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "White Maize Meal (Pap)",
                "baseQty": 50,
                "unit": "g",
                "cal": 175,
                "p": 3.8,
                "c": 38,
                "f": 0.6,
                "micros": {
                  "Iron (mg)": 1,
                  "Zinc (mg)": 0.8
                }
              },
              {
                "name": "Warm Cow Milk",
                "baseQty": 200,
                "unit": "ml",
                "cal": 120,
                "p": 6.8,
                "c": 9.6,
                "f": 6,
                "micros": {
                  "Calcium (mg)": 240
                }
              },
              {
                "name": "Raw Honey",
                "baseQty": 1,
                "unit": "tbsp",
                "cal": 60,
                "p": 0,
                "c": 15,
                "f": 0,
                "micros": {}
              }
            ]
          },
          {
            "name": "Warm Oats with Chia & Berries",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Rolled Oats",
                "baseQty": 50,
                "unit": "g",
                "cal": 190,
                "p": 6.5,
                "c": 33,
                "f": 3.5,
                "micros": {
                  "Iron (mg)": 2.2
                }
              },
              {
                "name": "Chia Seeds",
                "baseQty": 10,
                "unit": "g",
                "cal": 50,
                "p": 1.7,
                "c": 4.2,
                "f": 3,
                "micros": {
                  "Calcium (mg)": 60
                }
              },
              {
                "name": "Water & Cinnamon",
                "baseQty": 250,
                "unit": "ml",
                "cal": 0,
                "p": 0,
                "c": 0,
                "f": 0,
                "micros": {}
              }
            ]
          },
          {
            "name": "Maize Porridge & Eggs",
            "profile": "balanced",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "White Maize Porridge (Soft)",
                "baseQty": 150,
                "unit": "g",
                "cal": 110,
                "p": 2.2,
                "c": 24,
                "f": 0.4,
                "micros": {}
              },
              {
                "name": "Scrambled Eggs (2 Whole)",
                "baseQty": 2,
                "unit": "eggs",
                "cal": 140,
                "p": 12,
                "c": 0.6,
                "f": 9.8,
                "micros": {
                  "Vitamin D (mcg)": 1.2
                }
              }
            ]
          },
          {
            "name": "Scrambled Eggs & Beef Biltong",
            "profile": "high-protein",
            "type": "non-veg",
            "cities": [
              "johannesburg",
              "pretoria"
            ],
            "ingredients": [
              {
                "name": "Eggs (2 Whole, 1 White)",
                "baseQty": 3,
                "unit": "eggs",
                "cal": 160,
                "p": 15,
                "c": 1,
                "f": 10.5,
                "micros": {
                  "Calcium (mg)": 45
                }
              },
              {
                "name": "Shaved Beef Biltong",
                "baseQty": 30,
                "unit": "g",
                "cal": 90,
                "p": 16,
                "c": 0.6,
                "f": 2.5,
                "micros": {
                  "Iron (mg)": 2.2,
                  "Sodium (mg)": 550
                }
              },
              {
                "name": "Wholemeal Toast",
                "baseQty": 1,
                "unit": "slice",
                "cal": 80,
                "p": 4,
                "c": 15,
                "f": 1,
                "micros": {}
              }
            ]
          },
          {
            "name": "Rye Toast with Avocado & Tomato",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Dark Rye Bread Toast",
                "baseQty": 2,
                "unit": "slices",
                "cal": 160,
                "p": 5.6,
                "c": 32,
                "f": 1.6,
                "micros": {}
              },
              {
                "name": "Mashed Avocado",
                "baseQty": 40,
                "unit": "g",
                "cal": 65,
                "p": 0.8,
                "c": 3.5,
                "f": 6,
                "micros": {}
              },
              {
                "name": "Sliced Plum Tomato",
                "baseQty": 50,
                "unit": "g",
                "cal": 10,
                "p": 0.5,
                "c": 2.2,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 10
                }
              }
            ]
          }
        ]
      },
      "snack1": {
        "name": "Mid-morning Snack",
        "time": "10:00 AM",
        "options": [
          {
            "name": "Rooibos Tea & Ouma Rusk",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Rooibos Herbal Tea (No Milk)",
                "baseQty": 1,
                "unit": "cup",
                "cal": 2,
                "p": 0,
                "c": 0.5,
                "f": 0,
                "micros": {
                  "Antioxidants": 1
                }
              },
              {
                "name": "Ouma Condensed Milk Rusk",
                "baseQty": 1,
                "unit": "pc",
                "cal": 120,
                "p": 2,
                "c": 18,
                "f": 4.5,
                "micros": {
                  "Calcium (mg)": 20
                }
              }
            ]
          },
          {
            "name": "Lean Beef Biltong",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Shaved Beef Biltong",
                "baseQty": 40,
                "unit": "g",
                "cal": 120,
                "p": 21,
                "c": 0.8,
                "f": 3.3,
                "micros": {
                  "Iron (mg)": 2.8,
                  "Sodium (mg)": 720
                }
              }
            ]
          },
          {
            "name": "Chicken Polony slices & Cucumber",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Sliced Chicken Polony",
                "baseQty": 60,
                "unit": "g",
                "cal": 95,
                "p": 9,
                "c": 2.5,
                "f": 5.5,
                "micros": {
                  "Sodium (mg)": 440
                }
              },
              {
                "name": "Cucumber Slices",
                "baseQty": 100,
                "unit": "g",
                "cal": 15,
                "p": 0.5,
                "c": 3,
                "f": 0.1,
                "micros": {}
              }
            ]
          }
        ]
      },
      "lunch": {
        "name": "Lunch",
        "time": "01:00 PM",
        "options": [
          {
            "name": "Chakalaka & Pap with Beans",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "johannesburg",
              "durban"
            ],
            "ingredients": [
              {
                "name": "Maize Meal Pap",
                "baseQty": 150,
                "unit": "g",
                "cal": 150,
                "p": 3,
                "c": 32,
                "f": 0.5,
                "micros": {}
              },
              {
                "name": "South African Chakalaka with Baked Beans",
                "baseQty": 150,
                "unit": "g",
                "cal": 140,
                "p": 5.5,
                "c": 22,
                "f": 3,
                "micros": {
                  "Vitamin C (mg)": 20,
                  "Iron (mg)": 1.6
                }
              }
            ]
          },
          {
            "name": "Cape Malay Lentil Curry & Rice",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "cape-town"
            ],
            "ingredients": [
              {
                "name": "Cape Malay Spiced Lentils",
                "baseQty": 180,
                "unit": "g",
                "cal": 170,
                "p": 9,
                "c": 28,
                "f": 2.5,
                "micros": {
                  "Iron (mg)": 2.6,
                  "Folate (mcg)": 80
                }
              },
              {
                "name": "Steamed White Rice",
                "baseQty": 100,
                "unit": "g",
                "cal": 125,
                "p": 2.5,
                "c": 27.5,
                "f": 0.2,
                "micros": {}
              }
            ]
          },
          {
            "name": "Braai Chicken, Chakalaka & Pap",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "johannesburg",
              "pretoria"
            ],
            "ingredients": [
              {
                "name": "Grilled Braai Chicken Breast",
                "baseQty": 130,
                "unit": "g",
                "cal": 190,
                "p": 35,
                "c": 0,
                "f": 4.5,
                "micros": {
                  "Niacin (mg)": 10
                }
              },
              {
                "name": "Maize Meal Pap",
                "baseQty": 120,
                "unit": "g",
                "cal": 120,
                "p": 2.4,
                "c": 26,
                "f": 0.4,
                "micros": {}
              },
              {
                "name": "Spiced Vegetable Chakalaka",
                "baseQty": 80,
                "unit": "g",
                "cal": 60,
                "p": 1.5,
                "c": 10,
                "f": 1.5,
                "micros": {
                  "Vitamin C (mg)": 12
                }
              }
            ]
          },
          {
            "name": "Cape Malay Chicken Curry & Rice",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "cape-town"
            ],
            "ingredients": [
              {
                "name": "Cape Malay Chicken Curry",
                "baseQty": 180,
                "unit": "g",
                "cal": 240,
                "p": 22,
                "c": 12,
                "f": 11,
                "micros": {
                  "Iron (mg)": 1.6
                }
              },
              {
                "name": "Steamed White Rice",
                "baseQty": 120,
                "unit": "g",
                "cal": 150,
                "p": 3,
                "c": 33,
                "f": 0.3,
                "micros": {}
              }
            ]
          },
          {
            "name": "Sweet Potato & Feta Wrap",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Roasted Sweet Potato",
                "baseQty": 100,
                "unit": "g",
                "cal": 90,
                "p": 1.8,
                "c": 20,
                "f": 0.2,
                "micros": {}
              },
              {
                "name": "Crumbled Feta Cheese",
                "baseQty": 30,
                "unit": "g",
                "cal": 78,
                "p": 4.2,
                "c": 1.2,
                "f": 6.6,
                "micros": {
                  "Calcium (mg)": 130
                }
              },
              {
                "name": "Whole Wheat Wrap",
                "baseQty": 1,
                "unit": "pc",
                "cal": 130,
                "p": 4,
                "c": 22,
                "f": 2,
                "micros": {}
              }
            ]
          }
        ]
      },
      "snack2": {
        "name": "Evening Snack",
        "time": "04:00 PM",
        "options": [
          {
            "name": "Peanuts & Raisins",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Roasted Peanuts",
                "baseQty": 20,
                "unit": "g",
                "cal": 114,
                "p": 5,
                "c": 3.2,
                "f": 9.6,
                "micros": {
                  "Magnesium (mg)": 30
                }
              },
              {
                "name": "Raisins",
                "baseQty": 15,
                "unit": "g",
                "cal": 45,
                "p": 0.5,
                "c": 11.8,
                "f": 0.1,
                "micros": {
                  "Potassium (mg)": 110
                }
              }
            ]
          },
          {
            "name": "Beef Droëwors (Dried Sausage)",
            "profile": "surplus",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Beef Droëwors",
                "baseQty": 30,
                "unit": "g",
                "cal": 140,
                "p": 12,
                "c": 0.5,
                "f": 10,
                "micros": {
                  "Sodium (mg)": 390
                }
              }
            ]
          }
        ]
      },
      "dinner": {
        "name": "Dinner",
        "time": "07:30 PM",
        "options": [
          {
            "name": "Butternut Squash Soup & Lentil Bobotie",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "cape-town"
            ],
            "ingredients": [
              {
                "name": "Creamy Butternut Squash Soup",
                "baseQty": 150,
                "unit": "ml",
                "cal": 90,
                "p": 1.5,
                "c": 18,
                "f": 1.5,
                "micros": {
                  "Vitamin A (mcg)": 450
                }
              },
              {
                "name": "Lentil Bobotie Slice",
                "baseQty": 150,
                "unit": "g",
                "cal": 180,
                "p": 8.5,
                "c": 26,
                "f": 4.5,
                "micros": {
                  "Iron (mg)": 2.2
                }
              }
            ]
          },
          {
            "name": "Veggie Burger & Baked Sweet Potato Fries",
            "profile": "balanced",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "South African Veggie Patty",
                "baseQty": 1,
                "unit": "pc",
                "cal": 130,
                "p": 10,
                "c": 12,
                "f": 4.5,
                "micros": {
                  "Calcium (mg)": 40
                }
              },
              {
                "name": "Wheat Burger Bun",
                "baseQty": 1,
                "unit": "pc",
                "cal": 120,
                "p": 4,
                "c": 22,
                "f": 1.5,
                "micros": {}
              },
              {
                "name": "Baked Sweet Potato Wedges",
                "baseQty": 80,
                "unit": "g",
                "cal": 70,
                "p": 1.2,
                "c": 16,
                "f": 0.1,
                "micros": {
                  "Vitamin A (mcg)": 600
                }
              }
            ]
          },
          {
            "name": "Beef Bobotie & Rice",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "cape-town",
              "pretoria"
            ],
            "ingredients": [
              {
                "name": "Beef Bobotie (Egg/Custard topping)",
                "baseQty": 180,
                "unit": "g",
                "cal": 320,
                "p": 22,
                "c": 16,
                "f": 18,
                "micros": {
                  "Iron (mg)": 2.8,
                  "Zinc (mg)": 4.5,
                  "Vitamin B12 (mcg)": 1.6
                }
              },
              {
                "name": "Yellow Rice with Raisins",
                "baseQty": 100,
                "unit": "g",
                "cal": 140,
                "p": 2.6,
                "c": 30,
                "f": 1,
                "micros": {}
              }
            ]
          },
          {
            "name": "Grilled Hake & Baked Potato",
            "profile": "high-protein",
            "type": "non-veg",
            "cities": [
              "cape-town",
              "durban"
            ],
            "ingredients": [
              {
                "name": "Grilled Cape Hake Fillet",
                "baseQty": 150,
                "unit": "g",
                "cal": 150,
                "p": 32,
                "c": 0,
                "f": 2,
                "micros": {
                  "Selenium (mcg)": 38,
                  "Calcium (mg)": 40
                }
              },
              {
                "name": "Baked Potato with skin",
                "baseQty": 120,
                "unit": "g",
                "cal": 110,
                "p": 2.5,
                "c": 25,
                "f": 0.1,
                "micros": {
                  "Potassium (mg)": 450,
                  "Vitamin C (mg)": 12
                }
              }
            ]
          },
          {
            "name": "Vegetable Potjiekos (Stew) & Rice",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Traditional Veg Potjiekos Stew",
                "baseQty": 200,
                "unit": "g",
                "cal": 130,
                "p": 3,
                "c": 22,
                "f": 3,
                "micros": {
                  "Vitamin C (mg)": 20
                }
              },
              {
                "name": "Steamed Rice",
                "baseQty": 100,
                "unit": "g",
                "cal": 125,
                "p": 2.5,
                "c": 27.5,
                "f": 0.2,
                "micros": {}
              }
            ]
          }
        ]
      },
      "bedtime": {
        "name": "Bedtime Snack",
        "time": "09:30 PM",
        "options": [
          {
            "name": "Rooibos Tea, Milk & Honey",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Rooibos Tea with Low-Fat Milk",
                "baseQty": 200,
                "unit": "ml",
                "cal": 50,
                "p": 3.2,
                "c": 5.5,
                "f": 1.5,
                "micros": {
                  "Calcium (mg)": 110
                }
              },
              {
                "name": "Raw Honey",
                "baseQty": 1,
                "unit": "tsp",
                "cal": 22,
                "p": 0,
                "c": 6,
                "f": 0,
                "micros": {}
              }
            ]
          },
          {
            "name": "Turkey slices",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Sliced Lean Turkey",
                "baseQty": 60,
                "unit": "g",
                "cal": 65,
                "p": 13,
                "c": 0.5,
                "f": 1,
                "micros": {}
              }
            ]
          }
        ]
      }
    }
  },
  "AE": {
    "name": "United Arab Emirates",
    "meals": {
      "breakfast": {
        "name": "Breakfast",
        "time": "08:00 AM",
        "options": [
          {
            "name": "Grilled Halloumi & Flatbread",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Grilled Halloumi Cheese",
                "baseQty": 60,
                "unit": "g",
                "cal": 190,
                "p": 12.5,
                "c": 1.2,
                "f": 15,
                "micros": {
                  "Calcium (mg)": 420,
                  "Sodium (mg)": 750
                }
              },
              {
                "name": "Arabic Flatbread (Khubz)",
                "baseQty": 1,
                "unit": "pc",
                "cal": 150,
                "p": 5,
                "c": 30,
                "f": 1.2,
                "micros": {
                  "Iron (mg)": 1.2
                }
              },
              {
                "name": "Sliced Cucumber & Mint",
                "baseQty": 50,
                "unit": "g",
                "cal": 8,
                "p": 0.3,
                "c": 1.8,
                "f": 0.1,
                "micros": {
                  "Vitamin C (mg)": 4
                }
              }
            ]
          },
          {
            "name": "Foul Mudammas with Olive Oil & Pita",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Foul Mudammas (Fava Beans)",
                "baseQty": 150,
                "unit": "g",
                "cal": 165,
                "p": 10,
                "c": 24,
                "f": 3.5,
                "micros": {
                  "Iron (mg)": 2.4,
                  "Fibre (g)": 7.5
                }
              },
              {
                "name": "Olive Oil drizzled",
                "baseQty": 10,
                "unit": "ml",
                "cal": 90,
                "p": 0,
                "c": 0,
                "f": 10,
                "micros": {
                  "Vitamin E (mg)": 1.4
                }
              },
              {
                "name": "Whole Wheat Pita Bread",
                "baseQty": 1,
                "unit": "pc",
                "cal": 130,
                "p": 4.2,
                "c": 26,
                "f": 1,
                "micros": {}
              }
            ]
          },
          {
            "name": "Shakshuka, Pita & Labneh",
            "profile": "balanced",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Eggs Shakshuka (Tomato sauce)",
                "baseQty": 2,
                "unit": "eggs",
                "cal": 170,
                "p": 13,
                "c": 5,
                "f": 11,
                "micros": {
                  "Vitamin A (mcg)": 150
                }
              },
              {
                "name": "Arabic Pita Bread",
                "baseQty": 1,
                "unit": "pc",
                "cal": 140,
                "p": 4.5,
                "c": 28,
                "f": 1,
                "micros": {}
              },
              {
                "name": "Fresh Labneh cheese dip",
                "baseQty": 30,
                "unit": "g",
                "cal": 60,
                "p": 2.2,
                "c": 1.8,
                "f": 5,
                "micros": {
                  "Calcium (mg)": 80
                }
              }
            ]
          },
          {
            "name": "Zaatar Flatbread & Labneh",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Zaatar Spice Flatbread (Manakish)",
                "baseQty": 1,
                "unit": "pc",
                "cal": 180,
                "p": 4.5,
                "c": 28,
                "f": 5.5,
                "micros": {}
              },
              {
                "name": "Thick Labneh Dip",
                "baseQty": 40,
                "unit": "g",
                "cal": 80,
                "p": 3,
                "c": 2.4,
                "f": 6.8,
                "micros": {
                  "Calcium (mg)": 100
                }
              }
            ]
          }
        ]
      },
      "snack1": {
        "name": "Mid-morning Snack",
        "time": "11:00 AM",
        "options": [
          {
            "name": "Dates & Arabic Coffee",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Medjool Dates",
                "baseQty": 2,
                "unit": "pcs",
                "cal": 132,
                "p": 0.8,
                "c": 36,
                "f": 0.2,
                "micros": {
                  "Potassium (mg)": 330,
                  "Magnesium (mg)": 26
                }
              },
              {
                "name": "Arabic Coffee (Gahwa)",
                "baseQty": 1,
                "unit": "cup",
                "cal": 2,
                "p": 0.1,
                "c": 0.4,
                "f": 0,
                "micros": {}
              }
            ]
          },
          {
            "name": "Hummus & Carrot Sticks",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Traditional Hummus",
                "baseQty": 60,
                "unit": "g",
                "cal": 140,
                "p": 4.2,
                "c": 11,
                "f": 9.6,
                "micros": {
                  "Iron (mg)": 1.2
                }
              },
              {
                "name": "Carrot Sticks",
                "baseQty": 100,
                "unit": "g",
                "cal": 40,
                "p": 0.9,
                "c": 9.5,
                "f": 0.2,
                "micros": {
                  "Vitamin A (mcg)": 850
                }
              }
            ]
          },
          {
            "name": "Turkey Roll-ups with Labneh",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Sliced Turkey Breast",
                "baseQty": 80,
                "unit": "g",
                "cal": 90,
                "p": 18,
                "c": 0.8,
                "f": 1.5,
                "micros": {}
              },
              {
                "name": "Traditional Labneh",
                "baseQty": 20,
                "unit": "g",
                "cal": 40,
                "p": 1.5,
                "c": 1.2,
                "f": 3.4,
                "micros": {
                  "Calcium (mg)": 50
                }
              }
            ]
          }
        ]
      },
      "lunch": {
        "name": "Lunch",
        "time": "02:00 PM",
        "options": [
          {
            "name": "Vegetable Saloona & Rice",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "sharjah"
            ],
            "ingredients": [
              {
                "name": "Emirati Vegetable Saloona Stew",
                "baseQty": 200,
                "unit": "g",
                "cal": 140,
                "p": 3.5,
                "c": 22,
                "f": 4,
                "micros": {
                  "Vitamin C (mg)": 30,
                  "Potassium (mg)": 380
                }
              },
              {
                "name": "Basmati Rice with Saffron",
                "baseQty": 120,
                "unit": "g",
                "cal": 150,
                "p": 3.2,
                "c": 32,
                "f": 0.3,
                "micros": {}
              }
            ]
          },
          {
            "name": "Mujadara & Tomato Salad",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "dubai",
              "abu-dhabi"
            ],
            "ingredients": [
              {
                "name": "Mujadara (Rice & Lentils with caramelized onions)",
                "baseQty": 220,
                "unit": "g",
                "cal": 260,
                "p": 9.5,
                "c": 48,
                "f": 3.5,
                "micros": {
                  "Iron (mg)": 3,
                  "Potassium (mg)": 320
                }
              },
              {
                "name": "Tomato Garlic Salad",
                "baseQty": 80,
                "unit": "g",
                "cal": 25,
                "p": 0.8,
                "c": 4,
                "f": 1,
                "micros": {
                  "Vitamin C (mg)": 15
                }
              }
            ]
          },
          {
            "name": "Chicken Machboos & Saloona",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "dubai",
              "abu-dhabi",
              "sharjah"
            ],
            "ingredients": [
              {
                "name": "Chicken Machboos",
                "baseQty": 250,
                "unit": "g",
                "cal": 380,
                "p": 26,
                "c": 48,
                "f": 10,
                "micros": {
                  "Iron (mg)": 2.2,
                  "Zinc (mg)": 1.8
                }
              },
              {
                "name": "Saloona Broth",
                "baseQty": 100,
                "unit": "ml",
                "cal": 35,
                "p": 0.8,
                "c": 6,
                "f": 1,
                "micros": {
                  "Vitamin C (mg)": 10
                }
              }
            ]
          },
          {
            "name": "Shish Tawook & Tabbouleh",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Grilled Shish Tawook",
                "baseQty": 130,
                "unit": "g",
                "cal": 210,
                "p": 32,
                "c": 1,
                "f": 8,
                "micros": {
                  "Niacin (mg)": 12,
                  "Selenium (mcg)": 28
                }
              },
              {
                "name": "Tabbouleh Salad",
                "baseQty": 100,
                "unit": "g",
                "cal": 95,
                "p": 2,
                "c": 10,
                "f": 6,
                "micros": {
                  "Vitamin C (mg)": 60,
                  "Iron (mg)": 1.8
                }
              },
              {
                "name": "Garlic Paste (Toum)",
                "baseQty": 15,
                "unit": "g",
                "cal": 50,
                "p": 0.1,
                "c": 2,
                "f": 4.8,
                "micros": {}
              }
            ]
          },
          {
            "name": "Falafel Wrap with Hummus",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Baked Falafel",
                "baseQty": 3,
                "unit": "pcs",
                "cal": 170,
                "p": 6,
                "c": 21,
                "f": 7.5,
                "micros": {}
              },
              {
                "name": "Hummus Dip",
                "baseQty": 30,
                "unit": "g",
                "cal": 70,
                "p": 2.1,
                "c": 5.5,
                "f": 4.8,
                "micros": {}
              },
              {
                "name": "Arabic Pita Wrap",
                "baseQty": 1,
                "unit": "pc",
                "cal": 140,
                "p": 4.5,
                "c": 28,
                "f": 1,
                "micros": {}
              }
            ]
          }
        ]
      },
      "snack2": {
        "name": "Evening Snack",
        "time": "05:30 PM",
        "options": [
          {
            "name": "Falafel & Tahini",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Baked Falafel",
                "baseQty": 3,
                "unit": "pcs",
                "cal": 170,
                "p": 6,
                "c": 21,
                "f": 7.5,
                "micros": {
                  "Iron (mg)": 1.8,
                  "Sodium (mg)": 290
                }
              },
              {
                "name": "Tahini Dip",
                "baseQty": 15,
                "unit": "g",
                "cal": 90,
                "p": 2.5,
                "c": 3,
                "f": 8,
                "micros": {
                  "Calcium (mg)": 60
                }
              }
            ]
          },
          {
            "name": "Chicken Shawarma strips & Hummus",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Spiced Shawarma Chicken Breast",
                "baseQty": 80,
                "unit": "g",
                "cal": 130,
                "p": 22,
                "c": 1,
                "f": 4.2,
                "micros": {}
              },
              {
                "name": "Smooth Hummus Dip",
                "baseQty": 30,
                "unit": "g",
                "cal": 70,
                "p": 2.1,
                "c": 5.5,
                "f": 4.8,
                "micros": {}
              }
            ]
          }
        ]
      },
      "dinner": {
        "name": "Dinner",
        "time": "09:00 PM",
        "options": [
          {
            "name": "Lentil Soup, Hummus & Khubz",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Yellow Lentil Soup (Shorbat Adas)",
                "baseQty": 200,
                "unit": "ml",
                "cal": 120,
                "p": 6.5,
                "c": 20,
                "f": 1.5,
                "micros": {
                  "Iron (mg)": 1.8
                }
              },
              {
                "name": "Traditional Hummus",
                "baseQty": 50,
                "unit": "g",
                "cal": 110,
                "p": 3.5,
                "c": 9,
                "f": 7.8,
                "micros": {
                  "Iron (mg)": 1
                }
              },
              {
                "name": "Arabic Pita Bread (Khubz)",
                "baseQty": 0.75,
                "unit": "pc",
                "cal": 105,
                "p": 3.3,
                "c": 22.5,
                "f": 0.8,
                "micros": {}
              }
            ]
          },
          {
            "name": "Baked Falafel Plate & Fattoush",
            "profile": "balanced",
            "type": "veg",
            "cities": [
              "dubai"
            ],
            "ingredients": [
              {
                "name": "Baked Falafel",
                "baseQty": 4,
                "unit": "pcs",
                "cal": 220,
                "p": 8,
                "c": 28,
                "f": 10,
                "micros": {
                  "Iron (mg)": 2.4
                }
              },
              {
                "name": "Fattoush Salad",
                "baseQty": 120,
                "unit": "g",
                "cal": 70,
                "p": 1.8,
                "c": 9.5,
                "f": 3.5,
                "micros": {
                  "Vitamin C (mg)": 25
                }
              }
            ]
          },
          {
            "name": "Lamb Tikka skewers & Hummus",
            "profile": "balanced",
            "type": "non-veg",
            "cities": [
              "abu-dhabi",
              "dubai"
            ],
            "ingredients": [
              {
                "name": "Grilled Lamb Tikka",
                "baseQty": 120,
                "unit": "g",
                "cal": 250,
                "p": 28,
                "c": 0,
                "f": 15,
                "micros": {
                  "Iron (mg)": 2.6,
                  "Zinc (mg)": 5,
                  "Vitamin B12 (mcg)": 2.4
                }
              },
              {
                "name": "Hummus",
                "baseQty": 60,
                "unit": "g",
                "cal": 140,
                "p": 4.2,
                "c": 12,
                "f": 9.6,
                "micros": {
                  "Iron (mg)": 1.2
                }
              },
              {
                "name": "Fattoush Salad",
                "baseQty": 100,
                "unit": "g",
                "cal": 60,
                "p": 1.5,
                "c": 8,
                "f": 3,
                "micros": {
                  "Vitamin C (mg)": 22
                }
              }
            ]
          },
          {
            "name": "Baked Garlic Chicken & Sweet Potatoes",
            "profile": "high-protein",
            "type": "non-veg",
            "cities": [
              "sharjah"
            ],
            "ingredients": [
              {
                "name": "Baked Garlic Chicken Breast",
                "baseQty": 120,
                "unit": "g",
                "cal": 198,
                "p": 37,
                "c": 0,
                "f": 4.3,
                "micros": {
                  "Niacin (mg)": 15
                }
              },
              {
                "name": "Roasted Sweet Potato",
                "baseQty": 100,
                "unit": "g",
                "cal": 90,
                "p": 1.8,
                "c": 20,
                "f": 0.2,
                "micros": {
                  "Vitamin A (mcg)": 750
                }
              },
              {
                "name": "Grilled Broccoli",
                "baseQty": 80,
                "unit": "g",
                "cal": 28,
                "p": 2.2,
                "c": 5.5,
                "f": 0.3,
                "micros": {
                  "Vitamin C (mg)": 50
                }
              }
            ]
          },
          {
            "name": "Paneer Tikka Masala & Rice",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Grilled Paneer Tikka Masala Curry",
                "baseQty": 150,
                "unit": "g",
                "cal": 240,
                "p": 12,
                "c": 8,
                "f": 18,
                "micros": {
                  "Calcium (mg)": 280
                }
              },
              {
                "name": "Basmati Rice Saffron",
                "baseQty": 100,
                "unit": "g",
                "cal": 125,
                "p": 2.5,
                "c": 27.5,
                "f": 0.2,
                "micros": {}
              }
            ]
          }
        ]
      },
      "bedtime": {
        "name": "Bedtime Snack",
        "time": "11:00 PM",
        "options": [
          {
            "name": "Warm Camel Milk & Date",
            "profile": "balanced",
            "type": "veg",
            "ingredients": [
              {
                "name": "Camel Milk",
                "baseQty": 200,
                "unit": "ml",
                "cal": 90,
                "p": 6.2,
                "c": 9.2,
                "f": 3.5,
                "micros": {
                  "Calcium (mg)": 220,
                  "Vitamin C (mg)": 5
                }
              },
              {
                "name": "Medjool Date",
                "baseQty": 1,
                "unit": "pc",
                "cal": 66,
                "p": 0.4,
                "c": 18,
                "f": 0.1,
                "micros": {}
              }
            ]
          },
          {
            "name": "Turkey slice & Chamomile Tea",
            "profile": "high-protein",
            "type": "non-veg",
            "ingredients": [
              {
                "name": "Sliced Lean Turkey",
                "baseQty": 50,
                "unit": "g",
                "cal": 55,
                "p": 11,
                "c": 0.4,
                "f": 1,
                "micros": {}
              },
              {
                "name": "Chamomile Tea",
                "baseQty": 1,
                "unit": "cup",
                "cal": 2,
                "p": 0,
                "c": 0.5,
                "f": 0,
                "micros": {}
              }
            ]
          }
        ]
      }
    }
  }
};
var COMMON_FOODS_DIRECTORY = {
  "1 tsp sugar": {
    "baseQty": 100,
    "unit": "cup",
    "cal": 40,
    "p": 1.2,
    "c": 6,
    "f": 1.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "dadaboudi mutton biriyani": {
    "baseQty": 100,
    "unit": "Bowl",
    "cal": 180,
    "p": 4.5,
    "c": 28,
    "f": 5.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "1 whole, 2 whites": {
    "baseQty": 100,
    "unit": "eggs",
    "cal": 110,
    "p": 14,
    "c": 0.8,
    "f": 5.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "2 whole": {
    "baseQty": 100,
    "unit": "eggs",
    "cal": 140,
    "p": 12,
    "c": 0.6,
    "f": 9.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "2 whole, 1 white": {
    "baseQty": 100,
    "unit": "eggs",
    "cal": 160,
    "p": 15,
    "c": 1,
    "f": 10.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "70% kakao": {
    "baseQty": 100,
    "unit": "g",
    "cal": 85,
    "p": 1,
    "c": 7,
    "f": 6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "abendbrot (dark bread, gouda & ham)": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 340,
    "p": 22,
    "c": 33,
    "f": 12.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "açai bowl with banana": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 135,
    "p": 1.7,
    "c": 27.5,
    "f": 2.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "alcatra": {
    "baseQty": 100,
    "unit": "g",
    "cal": 210,
    "p": 26,
    "c": 0,
    "f": 11,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "all-natural peanut butter": {
    "baseQty": 100,
    "unit": "g",
    "cal": 120,
    "p": 5,
    "c": 4,
    "f": 10,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "almonds": {
    "baseQty": 100,
    "unit": "g",
    "cal": 90,
    "p": 3.2,
    "c": 3,
    "f": 7.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "almonds (raw)": {
    "baseQty": 100,
    "unit": "grams (g)",
    "cal": 579,
    "p": 21.2,
    "c": 21.7,
    "f": 49.9,
    "micros": {
      "fiber": 12.5,
      "calcium": 269,
      "iron": 3.7
    }
  },
  "almonds & cashews": {
    "baseQty": 100,
    "unit": "g",
    "cal": 145,
    "p": 4.8,
    "c": 7.2,
    "f": 12,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "aloo paratha": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 210,
    "p": 4.5,
    "c": 33,
    "f": 7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "alur dom": {
    "baseQty": 100,
    "unit": "g",
    "cal": 120,
    "p": 2,
    "c": 18,
    "f": 5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "apfelmus": {
    "baseQty": 100,
    "unit": "g",
    "cal": 60,
    "p": 0.2,
    "c": 15,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "apple": {
    "baseQty": 100,
    "unit": "medium fruit",
    "cal": 52,
    "p": 0.3,
    "c": 13.8,
    "f": 0.2,
    "micros": {
      "fiber": 2.4,
      "calcium": 6,
      "iron": 0.1
    }
  },
  "apple & peanut butter": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 200,
    "p": 5.5,
    "c": 24,
    "f": 10.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "apple & quark": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 152,
    "p": 18.3,
    "c": 20,
    "f": 0.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "apple & walnuts": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 175,
    "p": 2.7,
    "c": 21,
    "f": 9.9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "applesauce (apfelmus)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 60,
    "p": 0.2,
    "c": 15,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "arabic coffee (gahwa)": {
    "baseQty": 100,
    "unit": "cup",
    "cal": 2,
    "p": 0.1,
    "c": 0.4,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "arabic flatbread (khubz)": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 150,
    "p": 5,
    "c": 30,
    "f": 1.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "arabic pita bread": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 140,
    "p": 4.5,
    "c": 28,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "arabic pita bread (khubz)": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 105,
    "p": 3.3,
    "c": 22.5,
    "f": 0.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "arabic pita wrap": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 140,
    "p": 4.5,
    "c": 28,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "arnotts salada crackers": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 80,
    "p": 1.8,
    "c": 14.5,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "assorted nigiri (tuna, salmon, prawn)": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 240,
    "p": 15,
    "c": 35,
    "f": 2.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "australian feta cheese": {
    "baseQty": 100,
    "unit": "g",
    "cal": 65,
    "p": 3.5,
    "c": 1,
    "f": 5.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "australian honey": {
    "baseQty": 100,
    "unit": "tsp",
    "cal": 22,
    "p": 0,
    "c": 6,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "australian lamb loin chops": {
    "baseQty": 100,
    "unit": "g",
    "cal": 260,
    "p": 26,
    "c": 0,
    "f": 17,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "avocado toast with tofu scramble": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 320,
    "p": 17.5,
    "c": 36,
    "f": 13.7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "baby carrots": {
    "baseQty": 100,
    "unit": "g",
    "cal": 40,
    "p": 0.9,
    "c": 9.5,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "baby spinach": {
    "baseQty": 100,
    "unit": "g",
    "cal": 23,
    "p": 2.9,
    "c": 3.6,
    "f": 0.4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "baby spinach & balsamic glaze": {
    "baseQty": 100,
    "unit": "g",
    "cal": 30,
    "p": 1.2,
    "c": 4.5,
    "f": 0.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "baked cod fillet": {
    "baseQty": 100,
    "unit": "g",
    "cal": 140,
    "p": 30,
    "c": 0,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "baked cod, wild rice & green beans": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 320,
    "p": 36.6,
    "c": 32,
    "f": 5.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "baked eggplant with miso glaze": {
    "baseQty": 100,
    "unit": "g",
    "cal": 120,
    "p": 2,
    "c": 22,
    "f": 3.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "baked falafel": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 160,
    "p": 5,
    "c": 18,
    "f": 8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "baked falafel plate & fattoush": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 290,
    "p": 9.8,
    "c": 37.5,
    "f": 13.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "baked garlic chicken & sweet potatoes": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 316,
    "p": 41,
    "c": 25.5,
    "f": 4.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "baked garlic chicken breast": {
    "baseQty": 100,
    "unit": "g",
    "cal": 198,
    "p": 37,
    "c": 0,
    "f": 4.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "baked heinz beans": {
    "baseQty": 100,
    "unit": "g",
    "cal": 80,
    "p": 4.8,
    "c": 13,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "baked jacket potato": {
    "baseQty": 100,
    "unit": "g",
    "cal": 185,
    "p": 4.2,
    "c": 42,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "baked japanese sweet potato": {
    "baseQty": 100,
    "unit": "g",
    "cal": 130,
    "p": 1.8,
    "c": 30,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "baked potato with skin": {
    "baseQty": 100,
    "unit": "g",
    "cal": 110,
    "p": 2.5,
    "c": 25,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "baked satsumaimo": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 130,
    "p": 1.8,
    "c": 30,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "baked sweet potato": {
    "baseQty": 100,
    "unit": "g",
    "cal": 108,
    "p": 2.2,
    "c": 24,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "baked sweet potato fries": {
    "baseQty": 100,
    "unit": "g",
    "cal": 70,
    "p": 1.2,
    "c": 16,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "baked sweet potato wedges": {
    "baseQty": 100,
    "unit": "g",
    "cal": 70,
    "p": 1.2,
    "c": 16,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "banana": {
    "baseQty": 100,
    "unit": "medium fruit",
    "cal": 89,
    "p": 1.1,
    "c": 22.8,
    "f": 0.3,
    "micros": {
      "fiber": 2.6,
      "calcium": 5,
      "iron": 0.3
    }
  },
  "banana mashed with oat bran": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 145,
    "p": 3.2,
    "c": 33,
    "f": 1.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "barbecued beef picanha": {
    "baseQty": 100,
    "unit": "g",
    "cal": 330,
    "p": 30,
    "c": 0,
    "f": 22,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "barley flour wrap": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 140,
    "p": 4.5,
    "c": 25,
    "f": 2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "barley tea": {
    "baseQty": 100,
    "unit": "cup",
    "cal": 2,
    "p": 0,
    "c": 0.5,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "barley tea & walnuts": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 102,
    "p": 2.2,
    "c": 2.5,
    "f": 10,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "basmati rice": {
    "baseQty": 100,
    "unit": "g",
    "cal": 130,
    "p": 2.7,
    "c": 28,
    "f": 0.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "basmati rice saffron": {
    "baseQty": 100,
    "unit": "g",
    "cal": 125,
    "p": 2.5,
    "c": 27.5,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "basmati rice with saffron": {
    "baseQty": 100,
    "unit": "g",
    "cal": 150,
    "p": 3.2,
    "c": 32,
    "f": 0.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "batata doce": {
    "baseQty": 100,
    "unit": "g",
    "cal": 108,
    "p": 2,
    "c": 24,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "beef biltong": {
    "baseQty": 100,
    "unit": "g",
    "cal": 90,
    "p": 15,
    "c": 0.6,
    "f": 3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "beef bobotie (egg/custard topping)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 320,
    "p": 22,
    "c": 16,
    "f": 18,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "beef bobotie & rice": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 460,
    "p": 24.6,
    "c": 46,
    "f": 19,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "beef droëwors": {
    "baseQty": 100,
    "unit": "g",
    "cal": 140,
    "p": 12,
    "c": 0.5,
    "f": 10,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "beef droëwors (dried sausage)": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 140,
    "p": 12,
    "c": 0.5,
    "f": 10,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "beef jerky & walnuts": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 216,
    "p": 12.2,
    "c": 5,
    "f": 17,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "beef mince with okra & rice": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 365,
    "p": 26.5,
    "c": 33.5,
    "f": 12.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "beef steak & beans": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 445,
    "p": 34.5,
    "c": 46,
    "f": 13,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "bergkäse mountain cheese": {
    "baseQty": 100,
    "unit": "g",
    "cal": 140,
    "p": 10,
    "c": 0.2,
    "f": 11,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "black coffee": {
    "baseQty": 100,
    "unit": "cup",
    "cal": 2,
    "p": 0.1,
    "c": 0.4,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "black tea (no sugar)": {
    "baseQty": 100,
    "unit": "cup",
    "cal": 2,
    "p": 0,
    "c": 0.5,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "black, kidney, pinto": {
    "baseQty": 100,
    "unit": "g",
    "cal": 240,
    "p": 14,
    "c": 42,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "boiled": {
    "baseQty": 100,
    "unit": "grams (g)",
    "cal": 155,
    "p": 12.6,
    "c": 1.1,
    "f": 10.6,
    "micros": {
      "fiber": 0,
      "calcium": 50,
      "iron": 1.2
    }
  },
  "boiled cassava (mandioca)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 160,
    "p": 1.5,
    "c": 38,
    "f": 0.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "boiled edamame": {
    "baseQty": 100,
    "unit": "g",
    "cal": 88,
    "p": 8.8,
    "c": 7.2,
    "f": 3.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "boiled edamame (in pods)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 110,
    "p": 11,
    "c": 9,
    "f": 4.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "boiled edamame beans": {
    "baseQty": 100,
    "unit": "g",
    "cal": 88,
    "p": 8.8,
    "c": 7.2,
    "f": 3.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "boiled egg": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 74,
    "p": 6.3,
    "c": 0.4,
    "f": 5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "boiled egg whites": {
    "baseQty": 100,
    "unit": "eggs",
    "cal": 68,
    "p": 14.5,
    "c": 1,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "boiled egg whites & tea": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 53,
    "p": 11,
    "c": 1.3,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "boiled new potatoes": {
    "baseQty": 100,
    "unit": "g",
    "cal": 80,
    "p": 2,
    "c": 18,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "boiled potatoes (salzkartoffeln)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 95,
    "p": 2.4,
    "c": 21,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "boiled potatoes in stew": {
    "baseQty": 100,
    "unit": "g",
    "cal": 80,
    "p": 2,
    "c": 18,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "boiled potatoes with parsley": {
    "baseQty": 100,
    "unit": "g",
    "cal": 95,
    "p": 2.4,
    "c": 21,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "boiled quail eggs": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 64,
    "p": 5.2,
    "c": 0.4,
    "f": 4.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "boiled quail eggs & green tea": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 66,
    "p": 5.3,
    "c": 0.8,
    "f": 4.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "boiled sweet potato (batata doce)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 108,
    "p": 2,
    "c": 24,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "braai chicken, chakalaka & pap": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 370,
    "p": 38.9,
    "c": 36,
    "f": 6.4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "brazil nuts": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 160,
    "p": 3.5,
    "c": 3,
    "f": 16,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "brazilian collard greens (couve)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 30,
    "p": 1.5,
    "c": 4.5,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "brazilian rump steak (alcatra)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 210,
    "p": 26,
    "c": 0,
    "f": 11,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "breaded chicken schnitzel": {
    "baseQty": 100,
    "unit": "g",
    "cal": 260,
    "p": 28,
    "c": 14,
    "f": 10,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "british gala apple": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 75,
    "p": 0.4,
    "c": 19,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "british honey roast ham": {
    "baseQty": 100,
    "unit": "g",
    "cal": 50,
    "p": 8,
    "c": 0.5,
    "f": 1.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "broccoli (steam)": {
    "baseQty": 100,
    "unit": "grams (g)",
    "cal": 35,
    "p": 2.4,
    "c": 7.2,
    "f": 0.4,
    "micros": {
      "fiber": 3.3,
      "calcium": 47,
      "iron": 0.7
    }
  },
  "brown lentil stew with root vegetables": {
    "baseQty": 100,
    "unit": "g",
    "cal": 210,
    "p": 12,
    "c": 34,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "brown rice": {
    "baseQty": 100,
    "unit": "g",
    "cal": 112,
    "p": 2.6,
    "c": 23.5,
    "f": 0.9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "brown rice (cooked)": {
    "baseQty": 100,
    "unit": "grams (g)",
    "cal": 111,
    "p": 2.6,
    "c": 23,
    "f": 0.9,
    "micros": {
      "fiber": 1.8,
      "calcium": 10,
      "iron": 0.4
    }
  },
  "brown rice cakes": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 70,
    "p": 1.5,
    "c": 14,
    "f": 0.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "brown rice, paneer bhurji & spinach": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 315,
    "p": 22.6,
    "c": 29,
    "f": 12.4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "brown soda bread toast": {
    "baseQty": 100,
    "unit": "slice",
    "cal": 85,
    "p": 3.5,
    "c": 16,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "buckwheat soba noodles": {
    "baseQty": 100,
    "unit": "g",
    "cal": 200,
    "p": 7.5,
    "c": 42,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "burger (chicken)": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 350,
    "p": 22,
    "c": 36,
    "f": 13,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "burger (veg)": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 290,
    "p": 9,
    "c": 38,
    "f": 11,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "butter": {
    "baseQty": 100,
    "unit": "g",
    "cal": 72,
    "p": 0.1,
    "c": 0.1,
    "f": 8.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "butter (for cooking)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 36,
    "p": 0,
    "c": 0,
    "f": 4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "butter chicken": {
    "baseQty": 100,
    "unit": "g",
    "cal": 340,
    "p": 22,
    "c": 8,
    "f": 24,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "butter chicken & garlic naan": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 560,
    "p": 30.5,
    "c": 50,
    "f": 25,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "butternut squash soup & lentil bobotie": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 270,
    "p": 10,
    "c": 44,
    "f": 6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "camel milk": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 90,
    "p": 6.2,
    "c": 9.2,
    "f": 3.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "campanha": {
    "baseQty": 100,
    "unit": "g",
    "cal": 20,
    "p": 0.5,
    "c": 3.5,
    "f": 0.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "canned black beans": {
    "baseQty": 100,
    "unit": "g",
    "cal": 110,
    "p": 7,
    "c": 20,
    "f": 0.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "canned brown lentils": {
    "baseQty": 100,
    "unit": "g",
    "cal": 110,
    "p": 8,
    "c": 18,
    "f": 0.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "canned chickpeas (garbanzo)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 130,
    "p": 7,
    "c": 22,
    "f": 2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "canned light tuna in brine": {
    "baseQty": 100,
    "unit": "g",
    "cal": 65,
    "p": 15,
    "c": 0,
    "f": 0.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "canned tuna": {
    "baseQty": 100,
    "unit": "g",
    "cal": 116,
    "p": 26,
    "c": 0,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "canned tuna in water": {
    "baseQty": 100,
    "unit": "g",
    "cal": 90,
    "p": 20,
    "c": 0,
    "f": 0.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cape malay chicken curry": {
    "baseQty": 100,
    "unit": "g",
    "cal": 240,
    "p": 22,
    "c": 12,
    "f": 11,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cape malay chicken curry & rice": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 390,
    "p": 25,
    "c": 45,
    "f": 11.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cape malay lentil curry & rice": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 295,
    "p": 11.5,
    "c": 55.5,
    "f": 2.7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cape malay spiced lentils": {
    "baseQty": 100,
    "unit": "g",
    "cal": 170,
    "p": 9,
    "c": 28,
    "f": 2.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "carne moída com quiabo": {
    "baseQty": 100,
    "unit": "g",
    "cal": 240,
    "p": 24,
    "c": 6,
    "f": 12,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "carrot sticks": {
    "baseQty": 100,
    "unit": "g",
    "cal": 40,
    "p": 0.9,
    "c": 9.5,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cassava farofa": {
    "baseQty": 100,
    "unit": "g",
    "cal": 70,
    "p": 0.3,
    "c": 16,
    "f": 0.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "celery & baby carrots": {
    "baseQty": 100,
    "unit": "g",
    "cal": 30,
    "p": 0.7,
    "c": 7,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chakalaka & pap with beans": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 290,
    "p": 8.5,
    "c": 54,
    "f": 3.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chamomile herbal tea": {
    "baseQty": 100,
    "unit": "cup",
    "cal": 2,
    "p": 0,
    "c": 0.5,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chamomile tea": {
    "baseQty": 100,
    "unit": "cup",
    "cal": 2,
    "p": 0,
    "c": 0.5,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chamomile tea & digestive biscuit": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 72,
    "p": 1,
    "c": 10.5,
    "f": 3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chapatis": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 160,
    "p": 6,
    "c": 32,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cheese": {
    "baseQty": 100,
    "unit": "slice",
    "cal": 280,
    "p": 12,
    "c": 32,
    "f": 10,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cheese & onion pasty & greens": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 320,
    "p": 10,
    "c": 37,
    "f": 15.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chia seeds": {
    "baseQty": 100,
    "unit": "g",
    "cal": 50,
    "p": 1.7,
    "c": 4.2,
    "f": 3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 350,
    "p": 22,
    "c": 36,
    "f": 13,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken & barley soup": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 210,
    "p": 18,
    "c": 22,
    "f": 4.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken biryani": {
    "baseQty": 100,
    "unit": "g",
    "cal": 360,
    "p": 24,
    "c": 45,
    "f": 9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken biryani (lean breast meat)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 340,
    "p": 24,
    "c": 42,
    "f": 8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken biryani & raita": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 390,
    "p": 26.8,
    "c": 46,
    "f": 10,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken breast (cooked)": {
    "baseQty": 100,
    "unit": "grams (g)",
    "cal": 165,
    "p": 31,
    "c": 0,
    "f": 3.6,
    "micros": {
      "fiber": 0,
      "calcium": 15,
      "iron": 1
    }
  },
  "chicken breast & avocado wrap": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 380,
    "p": 42.1,
    "c": 27.8,
    "f": 10.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken breast filet": {
    "baseQty": 100,
    "unit": "g",
    "cal": 180,
    "p": 36,
    "c": 0,
    "f": 3.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken coxinha & espresso": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 232,
    "p": 9.6,
    "c": 24.4,
    "f": 11,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken curry": {
    "baseQty": 100,
    "unit": "g",
    "cal": 240,
    "p": 22,
    "c": 6,
    "f": 14,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken curry & basmati rice": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 385,
    "p": 31.7,
    "c": 39,
    "f": 8.4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken egg roll": {
    "baseQty": 100,
    "unit": "roll",
    "cal": 450,
    "p": 22,
    "c": 40,
    "f": 22,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken empada (pastry)": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 210,
    "p": 8.5,
    "c": 22,
    "f": 10,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken empada pie": {
    "baseQty": 100,
    "unit": "g",
    "cal": 210,
    "p": 8.5,
    "c": 22,
    "f": 10,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken keema paratha": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 395,
    "p": 18,
    "c": 54.5,
    "f": 11,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken machboos": {
    "baseQty": 100,
    "unit": "g",
    "cal": 380,
    "p": 26,
    "c": 48,
    "f": 10,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken machboos & saloona": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 415,
    "p": 26.8,
    "c": 54,
    "f": 11,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken polony slices & cucumber": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 110,
    "p": 9.5,
    "c": 5.5,
    "f": 5.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken roll": {
    "baseQty": 100,
    "unit": "roll",
    "cal": 360,
    "p": 18,
    "c": 36,
    "f": 16,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken salami (lean)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 85,
    "p": 10,
    "c": 1.5,
    "f": 4.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken salami slices": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 100,
    "p": 10.5,
    "c": 4.5,
    "f": 4.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken schnitzel, potatoes & sauerkraut": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 370,
    "p": 31.2,
    "c": 38.5,
    "f": 10.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken shawarma strips & hummus": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 200,
    "p": 24.1,
    "c": 6.5,
    "f": 9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken tikka bites & green tea": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 122,
    "p": 19.1,
    "c": 1.6,
    "f": 4.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken, barley & vegetable soup": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 340,
    "p": 23,
    "c": 48,
    "f": 5.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chicken, rice, beans & couve": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 400,
    "p": 47.5,
    "c": 36.5,
    "f": 6.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chickpea & spinach curry with rice": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 330,
    "p": 11.2,
    "c": 60,
    "f": 4.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chickpea spinach masala": {
    "baseQty": 100,
    "unit": "g",
    "cal": 180,
    "p": 8,
    "c": 28,
    "f": 4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "chole bhature": {
    "baseQty": 100,
    "unit": "plate",
    "cal": 450,
    "p": 12,
    "c": 60,
    "f": 18,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "churrasco beef & cassava": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 510,
    "p": 32,
    "c": 41.5,
    "f": 22.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "clear chicken broth": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 40,
    "p": 4.5,
    "c": 2,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "clear honey": {
    "baseQty": 100,
    "unit": "tbsp",
    "cal": 60,
    "p": 0,
    "c": 15,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "coconut chutney": {
    "baseQty": 100,
    "unit": "g",
    "cal": 90,
    "p": 1,
    "c": 3,
    "f": 8.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "coffee with whole milk": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 45,
    "p": 2,
    "c": 3,
    "f": 2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cold soba noodles & tempura veggies": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 330,
    "p": 9.5,
    "c": 61,
    "f": 6.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cooked": {
    "baseQty": 100,
    "unit": "grams (g)",
    "cal": 165,
    "p": 31,
    "c": 0,
    "f": 3.6,
    "micros": {
      "fiber": 0,
      "calcium": 15,
      "iron": 1
    }
  },
  "cooked brown rice": {
    "baseQty": 100,
    "unit": "g",
    "cal": 110,
    "p": 2.6,
    "c": 23,
    "f": 0.9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cooked quinoa": {
    "baseQty": 100,
    "unit": "g",
    "cal": 120,
    "p": 4.4,
    "c": 21.3,
    "f": 1.9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cooked rice & carioca beans": {
    "baseQty": 100,
    "unit": "g",
    "cal": 210,
    "p": 8,
    "c": 42,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cooked wild rice": {
    "baseQty": 100,
    "unit": "g",
    "cal": 120,
    "p": 4.8,
    "c": 25,
    "f": 0.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cottage cheese": {
    "baseQty": 100,
    "unit": "grams (g)",
    "cal": 265,
    "p": 18.3,
    "c": 1.2,
    "f": 20.8,
    "micros": {
      "fiber": 0,
      "calcium": 480,
      "iron": 0.2
    }
  },
  "cottage cheese (hüttenkäse)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 72,
    "p": 9.6,
    "c": 2.2,
    "f": 2.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cottage cheese & cherries": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 115,
    "p": 12.5,
    "c": 9,
    "f": 2.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "couve": {
    "baseQty": 100,
    "unit": "g",
    "cal": 30,
    "p": 1.5,
    "c": 4.5,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cow": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 61,
    "p": 3.2,
    "c": 4.8,
    "f": 3.3,
    "micros": {
      "fiber": 0,
      "calcium": 113,
      "iron": 0.1
    }
  },
  "cow milk 1.5% fat": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 96,
    "p": 7,
    "c": 9.8,
    "f": 3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "coxinha": {
    "baseQty": 100,
    "unit": "g",
    "cal": 230,
    "p": 9.5,
    "c": 24,
    "f": 11,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "crackers with vegemite & butter": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 126,
    "p": 3.1,
    "c": 15.5,
    "f": 5.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "creamy butternut squash soup": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 90,
    "p": 1.5,
    "c": 18,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "creamy mushroom risotto": {
    "baseQty": 100,
    "unit": "g",
    "cal": 240,
    "p": 5,
    "c": 38,
    "f": 7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "creamy pork/turkey geschnetzeltes": {
    "baseQty": 100,
    "unit": "g",
    "cal": 260,
    "p": 24,
    "c": 4,
    "f": 16,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "crisp apple": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 80,
    "p": 0.5,
    "c": 20,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "crumbled feta cheese": {
    "baseQty": 100,
    "unit": "g",
    "cal": 78,
    "p": 4.2,
    "c": 1.2,
    "f": 6.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "crushed almonds": {
    "baseQty": 100,
    "unit": "g",
    "cal": 60,
    "p": 2,
    "c": 2,
    "f": 5.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cucumber & avocado maki rolls": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 180,
    "p": 3.2,
    "c": 38,
    "f": 2.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cucumber & tomato chopped": {
    "baseQty": 100,
    "unit": "g",
    "cal": 20,
    "p": 0.8,
    "c": 4,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cucumber mint raita": {
    "baseQty": 100,
    "unit": "g",
    "cal": 60,
    "p": 3.2,
    "c": 4.5,
    "f": 3.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cucumber onion salad": {
    "baseQty": 100,
    "unit": "g",
    "cal": 15,
    "p": 0.5,
    "c": 3,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cucumber salad (sunomono)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 15,
    "p": 0.4,
    "c": 3,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cucumber slices": {
    "baseQty": 100,
    "unit": "g",
    "cal": 15,
    "p": 0.7,
    "c": 3.6,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cured beef jerky": {
    "baseQty": 100,
    "unit": "g",
    "cal": 116,
    "p": 10,
    "c": 3,
    "f": 7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cured landjäger sausage": {
    "baseQty": 100,
    "unit": "g",
    "cal": 160,
    "p": 11,
    "c": 0.5,
    "f": 13,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "cured turkey jerky": {
    "baseQty": 100,
    "unit": "g",
    "cal": 90,
    "p": 11,
    "c": 2,
    "f": 4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "dairy butter": {
    "baseQty": 100,
    "unit": "g",
    "cal": 36,
    "p": 0,
    "c": 0,
    "f": 4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "dal fry": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 140,
    "p": 7,
    "c": 20,
    "f": 4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "dal tadka": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 120,
    "p": 6.5,
    "c": 18,
    "f": 3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "dark bread with quark & jam": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 250,
    "p": 12.8,
    "c": 44.4,
    "f": 1.9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "dark bread, gouda & ham": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 340,
    "p": 22,
    "c": 33,
    "f": 12.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "dark chocolate (70% kakao)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 85,
    "p": 1,
    "c": 7,
    "f": 6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "dark rye": {
    "baseQty": 100,
    "unit": "slice",
    "cal": 85,
    "p": 2.8,
    "c": 16,
    "f": 0.9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "dark rye bread slice": {
    "baseQty": 100,
    "unit": "slice",
    "cal": 80,
    "p": 2.8,
    "c": 16,
    "f": 0.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "dark rye bread toast": {
    "baseQty": 100,
    "unit": "slices",
    "cal": 160,
    "p": 5.6,
    "c": 32,
    "f": 1.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "dates": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 60,
    "p": 0.4,
    "c": 16,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "dates & arabic coffee": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 134,
    "p": 0.9,
    "c": 36.4,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "dhokla": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 150,
    "p": 5,
    "c": 26,
    "f": 3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "digestive biscuit": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 70,
    "p": 1,
    "c": 10,
    "f": 3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "digestive biscuits & tea": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 155,
    "p": 2.6,
    "c": 21,
    "f": 6.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "double egg roll": {
    "baseQty": 100,
    "unit": "roll",
    "cal": 410,
    "p": 15,
    "c": 38,
    "f": 20,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "dried apricots": {
    "baseQty": 100,
    "unit": "g",
    "cal": 60,
    "p": 0.8,
    "c": 15,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "dried sausage": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 140,
    "p": 12,
    "c": 0.5,
    "f": 10,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "edamame beans": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 110,
    "p": 11,
    "c": 9,
    "f": 4.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "egg bhurji": {
    "baseQty": 100,
    "unit": "plate",
    "cal": 190,
    "p": 14,
    "c": 4,
    "f": 13,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "egg bhurji & whole wheat toast": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 340,
    "p": 24,
    "c": 35,
    "f": 12.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "egg curry & whole wheat roti": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 370,
    "p": 19,
    "c": 40.6,
    "f": 14.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "egg roll": {
    "baseQty": 100,
    "unit": "roll",
    "cal": 320,
    "p": 9.5,
    "c": 38,
    "f": 14.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "egg white salad cups": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 133,
    "p": 15.3,
    "c": 5,
    "f": 5.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "egg whites": {
    "baseQty": 100,
    "unit": "eggs",
    "cal": 68,
    "p": 14.5,
    "c": 1,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "egg/custard topping": {
    "baseQty": 100,
    "unit": "g",
    "cal": 320,
    "p": 22,
    "c": 16,
    "f": 18,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "eggs (2 whole, 1 white)": {
    "baseQty": 100,
    "unit": "eggs",
    "cal": 160,
    "p": 15,
    "c": 1,
    "f": 10.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "eggs shakshuka (tomato sauce)": {
    "baseQty": 100,
    "unit": "eggs",
    "cal": 170,
    "p": 13,
    "c": 5,
    "f": 11,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "emirati vegetable saloona stew": {
    "baseQty": 100,
    "unit": "g",
    "cal": 140,
    "p": 3.5,
    "c": 22,
    "f": 4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "emmentaler cheese slices": {
    "baseQty": 100,
    "unit": "g",
    "cal": 115,
    "p": 8.5,
    "c": 0.2,
    "f": 9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "english breakfast tea with dash milk": {
    "baseQty": 100,
    "unit": "cup",
    "cal": 15,
    "p": 0.6,
    "c": 1,
    "f": 0.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "english mature cheddar": {
    "baseQty": 100,
    "unit": "g",
    "cal": 83,
    "p": 5,
    "c": 0.3,
    "f": 7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "espresso coffee": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 2,
    "p": 0.1,
    "c": 0.4,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "falafel & tahini": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 260,
    "p": 8.5,
    "c": 24,
    "f": 15.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "falafel wrap with hummus": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 380,
    "p": 12.6,
    "c": 54.5,
    "f": 13.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fattoush salad": {
    "baseQty": 100,
    "unit": "g",
    "cal": 70,
    "p": 1.8,
    "c": 9.5,
    "f": 3.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fava beans": {
    "baseQty": 100,
    "unit": "g",
    "cal": 165,
    "p": 10,
    "c": 24,
    "f": 3.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fermented sauerkraut": {
    "baseQty": 100,
    "unit": "g",
    "cal": 15,
    "p": 0.8,
    "c": 3.5,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fermented soybeans": {
    "baseQty": 100,
    "unit": "g",
    "cal": 100,
    "p": 9,
    "c": 6,
    "f": 5.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "file de frango": {
    "baseQty": 100,
    "unit": "g",
    "cal": 210,
    "p": 40,
    "c": 0,
    "f": 4.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "firm tofu cubed": {
    "baseQty": 100,
    "unit": "g",
    "cal": 90,
    "p": 9,
    "c": 2,
    "f": 5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fish cake (kamaboko) slices": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 80,
    "p": 10,
    "c": 8,
    "f": 0.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fish curry": {
    "baseQty": 100,
    "unit": "g",
    "cal": 180,
    "p": 18,
    "c": 5,
    "f": 9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fish curry (machher jhol) & rice": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 375,
    "p": 26.2,
    "c": 41,
    "f": 10.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fish fry": {
    "baseQty": 100,
    "unit": "g",
    "cal": 220,
    "p": 18,
    "c": 8,
    "f": 13,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fish fry & rice": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 370,
    "p": 25.2,
    "c": 34,
    "f": 12.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "flattened rice (poha)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 260,
    "p": 4.8,
    "c": 58,
    "f": 1.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "for cooking": {
    "baseQty": 100,
    "unit": "g",
    "cal": 36,
    "p": 0,
    "c": 0,
    "f": 4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "foul mudammas (fava beans)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 165,
    "p": 10,
    "c": 24,
    "f": 3.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "foul mudammas with olive oil & pita": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 385,
    "p": 14.2,
    "c": 50,
    "f": 14.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "foxnuts": {
    "baseQty": 100,
    "unit": "g",
    "cal": 95,
    "p": 2.4,
    "c": 19,
    "f": 0.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "french fries": {
    "baseQty": 100,
    "unit": "g",
    "cal": 312,
    "p": 3.4,
    "c": 41,
    "f": 15,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "french roll (pão de sal)": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 140,
    "p": 4,
    "c": 28,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fresh apple slices": {
    "baseQty": 100,
    "unit": "g",
    "cal": 25,
    "p": 0.2,
    "c": 6.5,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fresh avocado": {
    "baseQty": 100,
    "unit": "g",
    "cal": 65,
    "p": 0.8,
    "c": 3.5,
    "f": 6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fresh avocado slices": {
    "baseQty": 100,
    "unit": "g",
    "cal": 50,
    "p": 0.6,
    "c": 2.8,
    "f": 4.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fresh blueberries": {
    "baseQty": 100,
    "unit": "g",
    "cal": 30,
    "p": 0.4,
    "c": 7,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fresh cucumber slices": {
    "baseQty": 100,
    "unit": "g",
    "cal": 8,
    "p": 0.3,
    "c": 1.8,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fresh cucumber tomato salad": {
    "baseQty": 100,
    "unit": "g",
    "cal": 15,
    "p": 0.5,
    "c": 3,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fresh curly kale": {
    "baseQty": 100,
    "unit": "g",
    "cal": 25,
    "p": 1.5,
    "c": 4.5,
    "f": 0.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fresh fruit salad": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 75,
    "p": 0.8,
    "c": 18,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fresh labneh cheese dip": {
    "baseQty": 100,
    "unit": "g",
    "cal": 60,
    "p": 2.2,
    "c": 1.8,
    "f": 5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fresh papaya cubes": {
    "baseQty": 100,
    "unit": "g",
    "cal": 35,
    "p": 0.4,
    "c": 9,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fresh passionfruit pulp": {
    "baseQty": 100,
    "unit": "g",
    "cal": 30,
    "p": 0.7,
    "c": 7,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fresh plain curd": {
    "baseQty": 100,
    "unit": "g",
    "cal": 60,
    "p": 3.5,
    "c": 4.5,
    "f": 3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fresh red apple": {
    "baseQty": 100,
    "unit": "g",
    "cal": 52,
    "p": 0.3,
    "c": 14,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fresh ricotta & spinach filling": {
    "baseQty": 100,
    "unit": "g",
    "cal": 90,
    "p": 6,
    "c": 3,
    "f": 6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fresh rocket & horseradish": {
    "baseQty": 100,
    "unit": "g",
    "cal": 15,
    "p": 0.5,
    "c": 1.5,
    "f": 0.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fresh salsa & spinach": {
    "baseQty": 100,
    "unit": "g",
    "cal": 20,
    "p": 0.8,
    "c": 4,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fresh sashimi (tuna & salmon)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 165,
    "p": 26,
    "c": 0,
    "f": 6.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fried atlantic herring": {
    "baseQty": 100,
    "unit": "g",
    "cal": 240,
    "p": 22,
    "c": 0,
    "f": 16,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "fried egg": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 80,
    "p": 6,
    "c": 0.3,
    "f": 6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "gahwa": {
    "baseQty": 100,
    "unit": "cup",
    "cal": 2,
    "p": 0.1,
    "c": 0.4,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "garbanzo": {
    "baseQty": 100,
    "unit": "g",
    "cal": 130,
    "p": 7,
    "c": 22,
    "f": 2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "garlic butter green beans": {
    "baseQty": 100,
    "unit": "g",
    "cal": 60,
    "p": 1.8,
    "c": 7,
    "f": 3.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "garlic naan bread": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 240,
    "p": 6.5,
    "c": 42,
    "f": 5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "garlic paste (toum)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 50,
    "p": 0.1,
    "c": 2,
    "f": 4.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "german dark bread": {
    "baseQty": 100,
    "unit": "slices",
    "cal": 170,
    "p": 5.5,
    "c": 32,
    "f": 1.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "german dark rye bread (vollkornbrot)": {
    "baseQty": 100,
    "unit": "slices",
    "cal": 170,
    "p": 5.5,
    "c": 32,
    "f": 1.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "german grain bread": {
    "baseQty": 100,
    "unit": "slices",
    "cal": 170,
    "p": 5.5,
    "c": 32,
    "f": 1.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "german magerquark": {
    "baseQty": 100,
    "unit": "g",
    "cal": 100,
    "p": 18,
    "c": 6,
    "f": 0.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "german pickles (gewürzgurken)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 10,
    "p": 0.3,
    "c": 2,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "german potato pancakes (kartoffelpuffer)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 230,
    "p": 3.5,
    "c": 32,
    "f": 9.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "german potato salad (oil/vinegar dressing)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 150,
    "p": 2.2,
    "c": 24,
    "f": 5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "german smoked ham": {
    "baseQty": 100,
    "unit": "g",
    "cal": 75,
    "p": 11,
    "c": 0.5,
    "f": 3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "german smoked ham (schinken)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 60,
    "p": 9,
    "c": 0.4,
    "f": 2.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "geschnetzeltes & spätzle": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 450,
    "p": 30.5,
    "c": 40,
    "f": 18,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "gewürzgurken": {
    "baseQty": 100,
    "unit": "g",
    "cal": 10,
    "p": 0.3,
    "c": 2,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "ghee": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 45,
    "p": 0,
    "c": 0,
    "f": 5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "gherkin (pickled cucumber)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 8,
    "p": 0.2,
    "c": 1.6,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "ghugni": {
    "baseQty": 100,
    "unit": "g",
    "cal": 160,
    "p": 7.5,
    "c": 24,
    "f": 4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "ginger tea with cow milk (1 tsp sugar)": {
    "baseQty": 100,
    "unit": "cup",
    "cal": 40,
    "p": 1.2,
    "c": 6,
    "f": 1.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "gouda cheese slice": {
    "baseQty": 100,
    "unit": "g",
    "cal": 110,
    "p": 7.5,
    "c": 0.6,
    "f": 8.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "gouda cheese slices": {
    "baseQty": 100,
    "unit": "g",
    "cal": 145,
    "p": 10,
    "c": 0.8,
    "f": 11,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "granary bread toast": {
    "baseQty": 100,
    "unit": "slice",
    "cal": 90,
    "p": 4.5,
    "c": 16,
    "f": 1.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grated cheddar cheese": {
    "baseQty": 100,
    "unit": "g",
    "cal": 83,
    "p": 5,
    "c": 0.3,
    "f": 7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grated paneer filling": {
    "baseQty": 100,
    "unit": "g",
    "cal": 110,
    "p": 7.5,
    "c": 1.2,
    "f": 8.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "greek style natural yogurt": {
    "baseQty": 100,
    "unit": "g",
    "cal": 90,
    "p": 14,
    "c": 5.5,
    "f": 0.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "greek yogurt": {
    "baseQty": 100,
    "unit": "grams (g)",
    "cal": 59,
    "p": 10,
    "c": 3.6,
    "f": 0.4,
    "micros": {
      "fiber": 0,
      "calcium": 110,
      "iron": 0.1
    }
  },
  "greek yogurt & passionfruit": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 120,
    "p": 14.7,
    "c": 12.5,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "greek yogurt parfait with granola": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 246,
    "p": 20.3,
    "c": 32,
    "f": 4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "green salad with vinaigrette": {
    "baseQty": 100,
    "unit": "g",
    "cal": 30,
    "p": 0.8,
    "c": 3,
    "f": 2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "green tea": {
    "baseQty": 100,
    "unit": "cup",
    "cal": 2,
    "p": 0.1,
    "c": 0.4,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "green tea (no sugar)": {
    "baseQty": 100,
    "unit": "cup",
    "cal": 2,
    "p": 0.1,
    "c": 0.4,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled asparagus spears": {
    "baseQty": 100,
    "unit": "g",
    "cal": 16,
    "p": 1.8,
    "c": 3.2,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled barramundi & sweet potato": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 306,
    "p": 31.7,
    "c": 29.2,
    "f": 5.9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled barramundi fillet": {
    "baseQty": 100,
    "unit": "g",
    "cal": 170,
    "p": 28,
    "c": 0,
    "f": 5.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled braai chicken breast": {
    "baseQty": 100,
    "unit": "g",
    "cal": 190,
    "p": 35,
    "c": 0,
    "f": 4.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled broccoli": {
    "baseQty": 100,
    "unit": "g",
    "cal": 28,
    "p": 2.2,
    "c": 5.5,
    "f": 0.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled broccolini": {
    "baseQty": 100,
    "unit": "g",
    "cal": 28,
    "p": 2.4,
    "c": 4.8,
    "f": 0.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled cape hake fillet": {
    "baseQty": 100,
    "unit": "g",
    "cal": 150,
    "p": 32,
    "c": 0,
    "f": 2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled chicken & sweet potato": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 316,
    "p": 40.2,
    "c": 29.5,
    "f": 4.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled chicken breast": {
    "baseQty": 100,
    "unit": "g",
    "cal": 165,
    "p": 31,
    "c": 0,
    "f": 3.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled chicken breast (file de frango)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 210,
    "p": 40,
    "c": 0,
    "f": 4.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled chicken breast slices": {
    "baseQty": 100,
    "unit": "g",
    "cal": 190,
    "p": 37,
    "c": 0,
    "f": 4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled chicken tikka": {
    "baseQty": 100,
    "unit": "g",
    "cal": 120,
    "p": 19,
    "c": 1.2,
    "f": 4.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled chicken, quinoa & broccoli": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 419,
    "p": 54.1,
    "c": 32.5,
    "f": 7.7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled hake & baked potato": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 260,
    "p": 34.5,
    "c": 25,
    "f": 2.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled halloumi & flatbread": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 348,
    "p": 17.8,
    "c": 33,
    "f": 16.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled halloumi & roasted vegetable salad": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 295,
    "p": 15.2,
    "c": 20.7,
    "f": 17,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled halloumi cheese": {
    "baseQty": 100,
    "unit": "g",
    "cal": 190,
    "p": 12.5,
    "c": 1.2,
    "f": 15,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled lamb chops, pumpkin & broccolini": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 338,
    "p": 29.4,
    "c": 15.8,
    "f": 17.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled lamb tikka": {
    "baseQty": 100,
    "unit": "g",
    "cal": 250,
    "p": 28,
    "c": 0,
    "f": 15,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled mackerel (saba)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 200,
    "p": 18,
    "c": 0,
    "f": 14,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled mackerel & rice": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 340,
    "p": 20.9,
    "c": 30.5,
    "f": 14.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled mushroom & tomato": {
    "baseQty": 100,
    "unit": "g",
    "cal": 20,
    "p": 1,
    "c": 3.5,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled paneer": {
    "baseQty": 100,
    "unit": "g",
    "cal": 265,
    "p": 18.3,
    "c": 1.2,
    "f": 20.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled paneer cubes": {
    "baseQty": 100,
    "unit": "g",
    "cal": 140,
    "p": 9,
    "c": 1.5,
    "f": 11,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled paneer tikka masala curry": {
    "baseQty": 100,
    "unit": "g",
    "cal": 240,
    "p": 12,
    "c": 8,
    "f": 18,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled pink salmon": {
    "baseQty": 100,
    "unit": "g",
    "cal": 180,
    "p": 24,
    "c": 0,
    "f": 9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled plum tomato halves": {
    "baseQty": 100,
    "unit": "g",
    "cal": 22,
    "p": 1,
    "c": 4.8,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled sea bass fillet": {
    "baseQty": 100,
    "unit": "g",
    "cal": 160,
    "p": 26,
    "c": 0,
    "f": 6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled shish tawook": {
    "baseQty": 100,
    "unit": "g",
    "cal": 210,
    "p": 32,
    "c": 1,
    "f": 8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "grilled tomato halves": {
    "baseQty": 100,
    "unit": "g",
    "cal": 22,
    "p": 1,
    "c": 4.8,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "gulab jamun": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 150,
    "p": 2,
    "c": 26,
    "f": 5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "ham roll-ups with gherkin": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 83,
    "p": 11.2,
    "c": 2.1,
    "f": 3.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "hard boiled": {
    "baseQty": 100,
    "unit": "eggs",
    "cal": 140,
    "p": 12,
    "c": 0.6,
    "f": 9.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "hard boiled egg": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 74,
    "p": 6.3,
    "c": 0.4,
    "f": 5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "hard boiled egg & almonds": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 164,
    "p": 9.5,
    "c": 3.4,
    "f": 12.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "hard boiled egg & ham slices": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 124,
    "p": 14.3,
    "c": 0.9,
    "f": 6.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "hearty lentil vegetable soup": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 150,
    "p": 8,
    "c": 24,
    "f": 2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "heinz baked beans": {
    "baseQty": 100,
    "unit": "g",
    "cal": 80,
    "p": 4.8,
    "c": 13,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "honey": {
    "baseQty": 100,
    "unit": "tbsp",
    "cal": 64,
    "p": 0,
    "c": 17,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "honey granola": {
    "baseQty": 100,
    "unit": "g",
    "cal": 130,
    "p": 3,
    "c": 22,
    "f": 3.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "hot sencha green tea": {
    "baseQty": 100,
    "unit": "cup",
    "cal": 2,
    "p": 0.1,
    "c": 0.4,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "hummus": {
    "baseQty": 100,
    "unit": "g",
    "cal": 140,
    "p": 4.2,
    "c": 12,
    "f": 9.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "hummus & carrot sticks": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 180,
    "p": 5.1,
    "c": 20.5,
    "f": 9.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "hummus dip": {
    "baseQty": 100,
    "unit": "g",
    "cal": 50,
    "p": 1.5,
    "c": 4.3,
    "f": 3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "hummus, celery & carrots": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 170,
    "p": 4.7,
    "c": 17,
    "f": 10.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "hüttenkäse": {
    "baseQty": 100,
    "unit": "g",
    "cal": 72,
    "p": 9.6,
    "c": 2.2,
    "f": 2.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "idli & sambhar": {
    "baseQty": 100,
    "unit": "plate",
    "cal": 210,
    "p": 7,
    "c": 40,
    "f": 2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "idli, sambhar & chutney": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 320,
    "p": 8,
    "c": 49,
    "f": 11,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "in pods": {
    "baseQty": 100,
    "unit": "g",
    "cal": 110,
    "p": 11,
    "c": 9,
    "f": 4.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "italian turkey meatballs": {
    "baseQty": 100,
    "unit": "g",
    "cal": 210,
    "p": 22,
    "c": 4,
    "f": 12,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "jacket potato with baked beans & cheese": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 348,
    "p": 14,
    "c": 55.3,
    "f": 7.4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "jacket potato with tuna mayo": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 315,
    "p": 24.3,
    "c": 43,
    "f": 5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "japanese rolled omelet (tamagoyaki)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 120,
    "p": 8.5,
    "c": 4,
    "f": 8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "jeera rice": {
    "baseQty": 100,
    "unit": "g",
    "cal": 210,
    "p": 3.5,
    "c": 44,
    "f": 2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "jerky": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 90,
    "p": 18,
    "c": 0.8,
    "f": 1.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "juicy orange": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 60,
    "p": 1.2,
    "c": 14,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "kamaboko": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 80,
    "p": 10,
    "c": 8,
    "f": 0.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "kangaroo biltong (jerky)": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 90,
    "p": 18,
    "c": 0.8,
    "f": 1.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "kangaroo fillet & sweet potato mash": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 286,
    "p": 42.6,
    "c": 23.2,
    "f": 2.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "kangaroo fillet steak": {
    "baseQty": 100,
    "unit": "g",
    "cal": 180,
    "p": 39,
    "c": 0,
    "f": 1.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "kangaroo steak & eggs": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 280,
    "p": 36,
    "c": 17.3,
    "f": 7.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "kartoffelpuffer": {
    "baseQty": 100,
    "unit": "g",
    "cal": 230,
    "p": 3.5,
    "c": 32,
    "f": 9.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "käsespätzle & salad": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 410,
    "p": 18.8,
    "c": 48.2,
    "f": 15.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "kathi roll": {
    "baseQty": 100,
    "unit": "roll",
    "cal": 360,
    "p": 16,
    "c": 38,
    "f": 16,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "keema": {
    "baseQty": 100,
    "unit": "g",
    "cal": 90,
    "p": 12,
    "c": 0.5,
    "f": 4.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "khaman dhokla & tea": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 152,
    "p": 5.1,
    "c": 26.4,
    "f": 3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "khichdi, papad & raita": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 325,
    "p": 12.8,
    "c": 54,
    "f": 5.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "khubz": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 150,
    "p": 5,
    "c": 30,
    "f": 1.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "knäckebrot": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 70,
    "p": 2,
    "c": 14,
    "f": 0.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "knäckebrot & cottage cheese": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 142,
    "p": 11.6,
    "c": 16.2,
    "f": 2.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "kolkata egg roll": {
    "baseQty": 100,
    "unit": "roll",
    "cal": 320,
    "p": 9.5,
    "c": 38,
    "f": 14.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "labneh dip": {
    "baseQty": 100,
    "unit": "g",
    "cal": 80,
    "p": 3,
    "c": 2.4,
    "f": 6.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "lamb tikka skewers & hummus": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 450,
    "p": 33.7,
    "c": 20,
    "f": 27.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "landjäger": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 160,
    "p": 11,
    "c": 0.5,
    "f": 13,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "large british eggs": {
    "baseQty": 100,
    "unit": "eggs",
    "cal": 156,
    "p": 13,
    "c": 0.8,
    "f": 11,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "large poached eggs": {
    "baseQty": 100,
    "unit": "eggs",
    "cal": 140,
    "p": 12,
    "c": 0.6,
    "f": 9.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "lean": {
    "baseQty": 100,
    "unit": "g",
    "cal": 85,
    "p": 10,
    "c": 1.5,
    "f": 4.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "lean beef biltong": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 120,
    "p": 21,
    "c": 0.8,
    "f": 3.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "lean beef mince with okra (carne moída com quiabo)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 240,
    "p": 24,
    "c": 6,
    "f": 12,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "lean beef sirloin steak": {
    "baseQty": 100,
    "unit": "g",
    "cal": 290,
    "p": 33,
    "c": 0,
    "f": 16,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "lean breast meat": {
    "baseQty": 100,
    "unit": "g",
    "cal": 340,
    "p": 24,
    "c": 42,
    "f": 8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "lean chicken curry": {
    "baseQty": 100,
    "unit": "g",
    "cal": 220,
    "p": 28,
    "c": 4,
    "f": 8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "lean kangaroo fillet": {
    "baseQty": 100,
    "unit": "g",
    "cal": 120,
    "p": 26,
    "c": 0,
    "f": 1.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "lean kangaroo jerky": {
    "baseQty": 100,
    "unit": "g",
    "cal": 90,
    "p": 18,
    "c": 0.8,
    "f": 1.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "lemon olive oil vinaigrette": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 70,
    "p": 0,
    "c": 0.5,
    "f": 7.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "lemon tea (no sugar)": {
    "baseQty": 100,
    "unit": "cup",
    "cal": 4,
    "p": 0.1,
    "c": 1,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "lentil & vegetable soup with rye bread": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 230,
    "p": 10.8,
    "c": 40,
    "f": 2.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "lentil bobotie slice": {
    "baseQty": 100,
    "unit": "g",
    "cal": 180,
    "p": 8.5,
    "c": 26,
    "f": 4.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "lentil burger & beetroot salad": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 315,
    "p": 14.8,
    "c": 49,
    "f": 6.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "lentil potato shepherd's pie": {
    "baseQty": 100,
    "unit": "g",
    "cal": 260,
    "p": 12,
    "c": 42,
    "f": 4.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "lentil potato stew (linseneintopf)": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 290,
    "p": 14,
    "c": 52,
    "f": 1.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "lentil shepherd's pie & broccoli": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 295,
    "p": 14.8,
    "c": 49,
    "f": 4.9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "lentil soup, hummus & khubz": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 335,
    "p": 13.3,
    "c": 51.5,
    "f": 10.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "lettuce, tomato, onion": {
    "baseQty": 100,
    "unit": "g",
    "cal": 20,
    "p": 0.8,
    "c": 4,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "light chicken broth": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 90,
    "p": 14.5,
    "c": 2,
    "f": 2.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "light cream cheese": {
    "baseQty": 100,
    "unit": "g",
    "cal": 40,
    "p": 1.5,
    "c": 1.2,
    "f": 3.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "light mayonnaise": {
    "baseQty": 100,
    "unit": "g",
    "cal": 40,
    "p": 0.1,
    "c": 1,
    "f": 4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "light turkey breast slices": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 67,
    "p": 13,
    "c": 1,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "linseneintopf": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 290,
    "p": 14,
    "c": 52,
    "f": 1.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "low-fat cottage cheese": {
    "baseQty": 100,
    "unit": "g",
    "cal": 90,
    "p": 12,
    "c": 3,
    "f": 2.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "low-fat dairy milk": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 90,
    "p": 6.8,
    "c": 9.8,
    "f": 2.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "low-fat german quark": {
    "baseQty": 100,
    "unit": "g",
    "cal": 40,
    "p": 7.2,
    "c": 2.4,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "low-fat milk": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 90,
    "p": 6.8,
    "c": 9.6,
    "f": 2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "low-fat paneer bhurji": {
    "baseQty": 100,
    "unit": "g",
    "cal": 180,
    "p": 18,
    "c": 3,
    "f": 11,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "low-fat paneer stuffing": {
    "baseQty": 100,
    "unit": "g",
    "cal": 135,
    "p": 14,
    "c": 2,
    "f": 8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "luchi": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 180,
    "p": 3.5,
    "c": 24,
    "f": 8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "macadamia nuts & orange": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 200,
    "p": 2.8,
    "c": 16.8,
    "f": 15.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "machher jhol": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 375,
    "p": 26.2,
    "c": 41,
    "f": 10.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "maize meal pap": {
    "baseQty": 100,
    "unit": "g",
    "cal": 150,
    "p": 3,
    "c": 32,
    "f": 0.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "maize porridge (pap)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 110,
    "p": 2.3,
    "c": 25,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "maize porridge (pap) with milk & honey": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 355,
    "p": 10.6,
    "c": 62.6,
    "f": 6.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "maize porridge & eggs": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 250,
    "p": 14.2,
    "c": 24.6,
    "f": 10.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "manakish": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 180,
    "p": 4.5,
    "c": 28,
    "f": 5.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mandioca": {
    "baseQty": 100,
    "unit": "g",
    "cal": 160,
    "p": 1.5,
    "c": 38,
    "f": 0.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "maracujá": {
    "baseQty": 100,
    "unit": "cup",
    "cal": 4,
    "p": 0,
    "c": 1,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "marinara tomato sauce": {
    "baseQty": 100,
    "unit": "g",
    "cal": 50,
    "p": 1.5,
    "c": 8,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "marinated organic tempeh": {
    "baseQty": 100,
    "unit": "g",
    "cal": 150,
    "p": 16,
    "c": 7,
    "f": 7.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "masala dosa": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 220,
    "p": 4.5,
    "c": 38,
    "f": 6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "masala omelet & toast": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 336,
    "p": 20,
    "c": 30.6,
    "f": 15.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mashed avocado": {
    "baseQty": 100,
    "unit": "g",
    "cal": 80,
    "p": 1,
    "c": 4.3,
    "f": 7.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mashed banana": {
    "baseQty": 100,
    "unit": "g",
    "cal": 90,
    "p": 1,
    "c": 23,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mashed potatoes (no cream)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 105,
    "p": 2.2,
    "c": 22,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mashed sweet potato (no cream)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 90,
    "p": 1.8,
    "c": 20,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "matcha green tea powder": {
    "baseQty": 100,
    "unit": "g",
    "cal": 10,
    "p": 0.8,
    "c": 1.2,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "matcha soy milk": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 95,
    "p": 8.8,
    "c": 5.2,
    "f": 4.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mcvities digestive biscuits": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 140,
    "p": 2,
    "c": 20,
    "f": 6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "medjool date": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 66,
    "p": 0.4,
    "c": 18,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "medjool dates": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 132,
    "p": 0.8,
    "c": 36,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "micellar casein protein": {
    "baseQty": 100,
    "unit": "g",
    "cal": 110,
    "p": 24,
    "c": 1.5,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "milk": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 120,
    "p": 6.8,
    "c": 9.6,
    "f": 6.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "minced chicken (keema)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 90,
    "p": 12,
    "c": 0.5,
    "f": 4.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "minced lamb shepherd's pie": {
    "baseQty": 100,
    "unit": "g",
    "cal": 320,
    "p": 20,
    "c": 32,
    "f": 12,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mint & coriander chutney": {
    "baseQty": 100,
    "unit": "g",
    "cal": 15,
    "p": 0.5,
    "c": 2,
    "f": 0.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "miso eggplant (nasu dengaku) & rice": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 245,
    "p": 4.5,
    "c": 49.5,
    "f": 3.7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mixed garden greens": {
    "baseQty": 100,
    "unit": "g",
    "cal": 20,
    "p": 1.5,
    "c": 4,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mixed greens & tomato salad": {
    "baseQty": 100,
    "unit": "g",
    "cal": 20,
    "p": 0.8,
    "c": 4,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mixed nuts portfolio": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 190,
    "p": 5.3,
    "c": 19,
    "f": 12.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mixed veg (onion, peas)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 20,
    "p": 1,
    "c": 4.2,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mixed vegetable raita": {
    "baseQty": 100,
    "unit": "g",
    "cal": 50,
    "p": 2.8,
    "c": 4,
    "f": 2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mixed vegetable sabzi": {
    "baseQty": 100,
    "unit": "g",
    "cal": 70,
    "p": 2,
    "c": 10,
    "f": 2.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mixed vegetable sambhar": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 80,
    "p": 3,
    "c": 14,
    "f": 2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mixed vegetables (onion, tomato)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 20,
    "p": 1,
    "c": 4,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mixed vegetables (shiitake, scallion, carrot)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 35,
    "p": 1.2,
    "c": 7,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mochar chop": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 180,
    "p": 4,
    "c": 22,
    "f": 8.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "moong dal & rice khichdi": {
    "baseQty": 100,
    "unit": "g",
    "cal": 240,
    "p": 8.5,
    "c": 44,
    "f": 3.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "moong dal chilla": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 220,
    "p": 12,
    "c": 36,
    "f": 3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "moong dal chilla & mint chutney": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 345,
    "p": 20,
    "c": 39.2,
    "f": 12,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "moong dal tadka": {
    "baseQty": 100,
    "unit": "g",
    "cal": 100,
    "p": 6,
    "c": 16,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mozzarella string cheese": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 80,
    "p": 7,
    "c": 1,
    "f": 5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "muesli oats mix": {
    "baseQty": 100,
    "unit": "g",
    "cal": 180,
    "p": 6,
    "c": 32,
    "f": 2.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "muesli with apple & walnuts": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 366,
    "p": 14.7,
    "c": 49.5,
    "f": 12.4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mugicha": {
    "baseQty": 100,
    "unit": "cup",
    "cal": 2,
    "p": 0,
    "c": 0.5,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mujadara (rice & lentils with caramelized onions)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 260,
    "p": 9.5,
    "c": 48,
    "f": 3.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mujadara & tomato salad": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 285,
    "p": 10.3,
    "c": 52,
    "f": 4.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "multigrain roll": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 130,
    "p": 4.8,
    "c": 24,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mushroom risotto & greens": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 260,
    "p": 6.8,
    "c": 40.8,
    "f": 7.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "mutton curry": {
    "baseQty": 100,
    "unit": "g",
    "cal": 310,
    "p": 24,
    "c": 5,
    "f": 21,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "nairns rough oatcakes": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 90,
    "p": 2.2,
    "c": 11.5,
    "f": 3.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "nasu dengaku": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 245,
    "p": 4.5,
    "c": 49.5,
    "f": 3.7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "natto (fermented soybeans)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 100,
    "p": 9,
    "c": 6,
    "f": 5.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "natto, rice & pickle": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 230,
    "p": 11.6,
    "c": 34.5,
    "f": 5.7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "no cream": {
    "baseQty": 100,
    "unit": "g",
    "cal": 105,
    "p": 2.2,
    "c": 22,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "no milk": {
    "baseQty": 100,
    "unit": "cup",
    "cal": 2,
    "p": 0,
    "c": 0.5,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "no sugar": {
    "baseQty": 100,
    "unit": "cup",
    "cal": 4,
    "p": 0.1,
    "c": 1,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "non-fat": {
    "baseQty": 100,
    "unit": "g",
    "cal": 100,
    "p": 17,
    "c": 6,
    "f": 0.4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "oat bran": {
    "baseQty": 100,
    "unit": "g",
    "cal": 55,
    "p": 2.2,
    "c": 10,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "oatcakes & cheddar cheese": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 173,
    "p": 7.2,
    "c": 11.8,
    "f": 10.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "oatmeal": {
    "baseQty": 100,
    "unit": "g",
    "cal": 389,
    "p": 16.9,
    "c": 66.3,
    "f": 6.9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "oatmeal oats": {
    "baseQty": 100,
    "unit": "g",
    "cal": 150,
    "p": 5,
    "c": 26,
    "f": 2.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "oatmeal with almonds & milk": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 534,
    "p": 19,
    "c": 72,
    "f": 20,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "oatmeal with blueberries & chia": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 340,
    "p": 15.6,
    "c": 54.2,
    "f": 6.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "oatmeal with papaya & honey": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 237,
    "p": 10.6,
    "c": 42.5,
    "f": 2.7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "oats (raw)": {
    "baseQty": 100,
    "unit": "grams (g)",
    "cal": 389,
    "p": 16.9,
    "c": 66.3,
    "f": 6.9,
    "micros": {
      "fiber": 10.6,
      "calcium": 54,
      "iron": 4.7
    }
  },
  "oil/vinegar dressing": {
    "baseQty": 100,
    "unit": "g",
    "cal": 150,
    "p": 2.2,
    "c": 24,
    "f": 5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "olive oil & balsamic dressing": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 110,
    "p": 0,
    "c": 1.5,
    "f": 12,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "olive oil dressing": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 45,
    "p": 0,
    "c": 0,
    "f": 5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "olive oil drizzled": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 90,
    "p": 0,
    "c": 0,
    "f": 10,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "omelet with spinach & ricotta": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 230,
    "p": 18,
    "c": 3.6,
    "f": 15.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "onion cucumber raita": {
    "baseQty": 100,
    "unit": "g",
    "cal": 50,
    "p": 2.8,
    "c": 4,
    "f": 2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "onion, peas": {
    "baseQty": 100,
    "unit": "g",
    "cal": 20,
    "p": 1,
    "c": 4.2,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "onion, tomato": {
    "baseQty": 100,
    "unit": "g",
    "cal": 20,
    "p": 1,
    "c": 4,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "organic açai pulp": {
    "baseQty": 100,
    "unit": "g",
    "cal": 90,
    "p": 1.2,
    "c": 16,
    "f": 2.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "organic tofu": {
    "baseQty": 100,
    "unit": "g",
    "cal": 76,
    "p": 8,
    "c": 1.9,
    "f": 4.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "organic tofu (scrambled)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 80,
    "p": 8.5,
    "c": 1.5,
    "f": 4.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "ouma condensed milk rusk": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 120,
    "p": 2,
    "c": 18,
    "f": 4.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "palak": {
    "baseQty": 100,
    "unit": "g",
    "cal": 25,
    "p": 2,
    "c": 3,
    "f": 0.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "palm oil/dendê & coconut": {
    "baseQty": 100,
    "unit": "g",
    "cal": 220,
    "p": 3.5,
    "c": 18,
    "f": 16,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "pan-fried herring & potatoes": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 335,
    "p": 24.4,
    "c": 21,
    "f": 16.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "pan-fried teriyaki tofu": {
    "baseQty": 100,
    "unit": "g",
    "cal": 140,
    "p": 11,
    "c": 7,
    "f": 7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "paneer (cottage cheese)": {
    "baseQty": 100,
    "unit": "grams (g)",
    "cal": 265,
    "p": 18.3,
    "c": 1.2,
    "f": 20.8,
    "micros": {
      "fiber": 0,
      "calcium": 480,
      "iron": 0.2
    }
  },
  "paneer butter masala": {
    "baseQty": 100,
    "unit": "g",
    "cal": 320,
    "p": 12,
    "c": 10,
    "f": 26,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "paneer paratha & curd": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 455,
    "p": 23.5,
    "c": 50.5,
    "f": 17,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "paneer tikka masala & rice": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 365,
    "p": 14.5,
    "c": 35.5,
    "f": 18.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "pani puri": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 150,
    "p": 2.5,
    "c": 24,
    "f": 4.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "pão de queijo & cafe com leite": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 265,
    "p": 6.2,
    "c": 31,
    "f": 12,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "pão de queijo & espresso": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 152,
    "p": 2.9,
    "c": 19.4,
    "f": 6.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "pão de sal": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 140,
    "p": 4,
    "c": 28,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "pão de sal, eggs & coffee": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 292,
    "p": 16.1,
    "c": 29,
    "f": 12,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "pap": {
    "baseQty": 100,
    "unit": "g",
    "cal": 110,
    "p": 2.3,
    "c": 25,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "papaya & apple slices": {
    "baseQty": 100,
    "unit": "g",
    "cal": 75,
    "p": 0.8,
    "c": 18,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "paratha": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 260,
    "p": 4.5,
    "c": 38,
    "f": 10,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "passionfruit tea (maracujá)": {
    "baseQty": 100,
    "unit": "cup",
    "cal": 4,
    "p": 0,
    "c": 1,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "passionfruit tea & almonds": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 94,
    "p": 3.2,
    "c": 4,
    "f": 7.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "pastry": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 210,
    "p": 8.5,
    "c": 22,
    "f": 10,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "peanut butter": {
    "baseQty": 100,
    "unit": "g",
    "cal": 95,
    "p": 4,
    "c": 3,
    "f": 8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "peanuts & raisins": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 159,
    "p": 5.5,
    "c": 15,
    "f": 9.7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "pepper, onion": {
    "baseQty": 100,
    "unit": "g",
    "cal": 35,
    "p": 1.2,
    "c": 7,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "peppermint herbal tea": {
    "baseQty": 100,
    "unit": "cup",
    "cal": 2,
    "p": 0,
    "c": 0.5,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "peppermint tea & dark chocolate": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 87,
    "p": 1,
    "c": 7.5,
    "f": 6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "pickled beetroot salad": {
    "baseQty": 100,
    "unit": "g",
    "cal": 35,
    "p": 1,
    "c": 7,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "pickled cabbage salad": {
    "baseQty": 100,
    "unit": "g",
    "cal": 15,
    "p": 0.5,
    "c": 3,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "pickled cucumber": {
    "baseQty": 100,
    "unit": "g",
    "cal": 5,
    "p": 0.1,
    "c": 1,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "pickled radish (takuan)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 10,
    "p": 0.2,
    "c": 2,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "pitted tart cherries": {
    "baseQty": 100,
    "unit": "g",
    "cal": 25,
    "p": 0.5,
    "c": 6,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "pizza slice (cheese)": {
    "baseQty": 100,
    "unit": "slice",
    "cal": 280,
    "p": 12,
    "c": 32,
    "f": 10,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "plain greek yogurt (non-fat)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 100,
    "p": 17,
    "c": 6,
    "f": 0.4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "plain low-fat curd": {
    "baseQty": 100,
    "unit": "g",
    "cal": 60,
    "p": 3.5,
    "c": 4.5,
    "f": 3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "poached egg": {
    "baseQty": 100,
    "unit": "egg",
    "cal": 70,
    "p": 6,
    "c": 0.3,
    "f": 4.9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "poached eggs & grilled tomatoes": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 268,
    "p": 18.5,
    "c": 21.6,
    "f": 12.4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "poha": {
    "baseQty": 100,
    "unit": "g",
    "cal": 180,
    "p": 3.5,
    "c": 36,
    "f": 2.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "poha & green tea": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 367,
    "p": 9.7,
    "c": 65,
    "f": 8.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "porridge with honey & banana": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 390,
    "p": 13.5,
    "c": 70,
    "f": 6.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "potato pancakes & applesauce": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 290,
    "p": 3.7,
    "c": 47,
    "f": 9.9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "prato feito (beef steak & beans)": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 445,
    "p": 34.5,
    "c": 46,
    "f": 13,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "prato feito vegetariano": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 310,
    "p": 14.8,
    "c": 46.3,
    "f": 7.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "premium lentil patty": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 150,
    "p": 9,
    "c": 18,
    "f": 4.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "puchka": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 150,
    "p": 2.5,
    "c": 24,
    "f": 4.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "pumpkin lentil salad": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 190,
    "p": 10.2,
    "c": 33,
    "f": 2.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "pumpkin seeds & dried apricots": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 145,
    "p": 5.3,
    "c": 17,
    "f": 7.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "puri sabji": {
    "baseQty": 100,
    "unit": "plate",
    "cal": 350,
    "p": 8,
    "c": 45,
    "f": 16,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "queijo minas cheese": {
    "baseQty": 100,
    "unit": "g",
    "cal": 100,
    "p": 7.2,
    "c": 1,
    "f": 7.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "quinoa, chickpea & kale salad": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 345,
    "p": 12.9,
    "c": 48.3,
    "f": 11.7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "raisins": {
    "baseQty": 100,
    "unit": "g",
    "cal": 45,
    "p": 0.5,
    "c": 11.8,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "rasgulla": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 120,
    "p": 2,
    "c": 26,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "raw": {
    "baseQty": 100,
    "unit": "grams (g)",
    "cal": 389,
    "p": 16.9,
    "c": 66.3,
    "f": 6.9,
    "micros": {
      "fiber": 10.6,
      "calcium": 54,
      "iron": 4.7
    }
  },
  "raw almonds": {
    "baseQty": 100,
    "unit": "g",
    "cal": 173,
    "p": 6.3,
    "c": 6.1,
    "f": 15,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "raw honey": {
    "baseQty": 100,
    "unit": "tbsp",
    "cal": 60,
    "p": 0,
    "c": 15,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "raw macadamia nuts": {
    "baseQty": 100,
    "unit": "g",
    "cal": 140,
    "p": 1.6,
    "c": 2.8,
    "f": 15,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "raw whole almonds": {
    "baseQty": 100,
    "unit": "g",
    "cal": 90,
    "p": 3.2,
    "c": 3,
    "f": 7.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "rice & lentils with caramelized onions": {
    "baseQty": 100,
    "unit": "g",
    "cal": 260,
    "p": 9.5,
    "c": 48,
    "f": 3.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "rice cakes & cottage cheese": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 160,
    "p": 13.5,
    "c": 17,
    "f": 3.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "rice, beans, sautéed mushrooms & farofa": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 320,
    "p": 10.5,
    "c": 62.5,
    "f": 3.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roast beef & rocket wrap": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 295,
    "p": 28,
    "c": 25.5,
    "f": 8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roast chicken, mash & veg": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 345,
    "p": 34.6,
    "c": 28,
    "f": 10.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roasted barley tea (mugicha)": {
    "baseQty": 100,
    "unit": "cup",
    "cal": 2,
    "p": 0,
    "c": 0.5,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roasted black chana": {
    "baseQty": 100,
    "unit": "g",
    "cal": 140,
    "p": 8,
    "c": 22,
    "f": 2.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roasted chana & lemon tea": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 144,
    "p": 8.1,
    "c": 23,
    "f": 2.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roasted chicken leg (skinless)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 210,
    "p": 30,
    "c": 0,
    "f": 9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roasted chickpea flour": {
    "baseQty": 100,
    "unit": "g",
    "cal": 120,
    "p": 6.5,
    "c": 19.5,
    "f": 1.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roasted garlic hummus": {
    "baseQty": 100,
    "unit": "g",
    "cal": 140,
    "p": 4,
    "c": 10,
    "f": 10,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roasted kent pumpkin": {
    "baseQty": 100,
    "unit": "g",
    "cal": 50,
    "p": 1,
    "c": 11,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roasted makhana": {
    "baseQty": 100,
    "unit": "g",
    "cal": 70,
    "p": 2,
    "c": 14.5,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roasted makhana (foxnuts)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 95,
    "p": 2.4,
    "c": 19,
    "f": 0.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roasted makhana & ginger chai": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 135,
    "p": 3.6,
    "c": 25,
    "f": 1.7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roasted papad": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 35,
    "p": 1.5,
    "c": 6,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roasted peanuts": {
    "baseQty": 100,
    "unit": "g",
    "cal": 85,
    "p": 3.8,
    "c": 2.4,
    "f": 7.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roasted potatoes in olive oil": {
    "baseQty": 100,
    "unit": "g",
    "cal": 130,
    "p": 2,
    "c": 24,
    "f": 3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roasted pumpkin & eggplant": {
    "baseQty": 100,
    "unit": "g",
    "cal": 75,
    "p": 1.5,
    "c": 15,
    "f": 1.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roasted pumpkin & zucchini": {
    "baseQty": 100,
    "unit": "g",
    "cal": 75,
    "p": 1.5,
    "c": 15,
    "f": 1.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roasted pumpkin cubes": {
    "baseQty": 100,
    "unit": "g",
    "cal": 50,
    "p": 1,
    "c": 11,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roasted sweet potato": {
    "baseQty": 100,
    "unit": "g",
    "cal": 90,
    "p": 1.8,
    "c": 20,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roasted veggie & quinoa bowl": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 255,
    "p": 8.7,
    "c": 37.1,
    "f": 8.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "rohu fish curry": {
    "baseQty": 100,
    "unit": "g",
    "cal": 190,
    "p": 22,
    "c": 3,
    "f": 9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "rolled oats": {
    "baseQty": 100,
    "unit": "g",
    "cal": 230,
    "p": 8,
    "c": 40,
    "f": 4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "rooibos herbal tea (no milk)": {
    "baseQty": 100,
    "unit": "cup",
    "cal": 2,
    "p": 0,
    "c": 0.5,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "rooibos tea & ouma rusk": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 122,
    "p": 2,
    "c": 18.5,
    "f": 4.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "rooibos tea with low-fat milk": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 50,
    "p": 3.2,
    "c": 5.5,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "rooibos tea, milk & honey": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 72,
    "p": 3.2,
    "c": 11.5,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roti / chapati": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 80,
    "p": 3,
    "c": 16,
    "f": 0.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roti, dal, veg sabzi & curd": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 410,
    "p": 17.9,
    "c": 66.5,
    "f": 8.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roti, grilled chicken & dal tadka": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 405,
    "p": 41,
    "c": 45,
    "f": 5.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "roti, yellow moong dal, grilled paneer & salad": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 415,
    "p": 20.7,
    "c": 52.5,
    "f": 13.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "rye crispbread (knäckebrot)": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 70,
    "p": 2,
    "c": 14,
    "f": 0.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "rye toast with avocado & tomato": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 235,
    "p": 6.9,
    "c": 37.7,
    "f": 7.7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "saba": {
    "baseQty": 100,
    "unit": "g",
    "cal": 200,
    "p": 18,
    "c": 0,
    "f": 14,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "salad (lettuce, tomato, onion)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 20,
    "p": 0.8,
    "c": 4,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "salmon (cooked)": {
    "baseQty": 100,
    "unit": "grams (g)",
    "cal": 206,
    "p": 22.1,
    "c": 0,
    "f": 12.3,
    "micros": {
      "fiber": 0,
      "calcium": 12,
      "iron": 0.8
    }
  },
  "salmon fillet": {
    "baseQty": 100,
    "unit": "g",
    "cal": 206,
    "p": 22,
    "c": 0,
    "f": 13,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "salmon salad with vinaigrette": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 310,
    "p": 25.5,
    "c": 5.5,
    "f": 21.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "salmon, rice & miso soup": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 315,
    "p": 23,
    "c": 37,
    "f": 7.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "saloona broth": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 35,
    "p": 0.8,
    "c": 6,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "salted grilled salmon (shake)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 130,
    "p": 18,
    "c": 0,
    "f": 6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "salzkartoffeln": {
    "baseQty": 100,
    "unit": "g",
    "cal": 95,
    "p": 2.4,
    "c": 21,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "samosa": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 260,
    "p": 3.5,
    "c": 32,
    "f": 13,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "samosas": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 520,
    "p": 7,
    "c": 64,
    "f": 26,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sandesh": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 80,
    "p": 2.5,
    "c": 11,
    "f": 3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sanitarium weet-bix": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 110,
    "p": 3.8,
    "c": 22,
    "f": 0.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sashimi assortment & miso soup": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 325,
    "p": 30.5,
    "c": 31.5,
    "f": 7.4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sattu (roasted chickpea flour)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 120,
    "p": 6.5,
    "c": 19.5,
    "f": 1.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sattu protein drink": {
    "baseQty": 100,
    "unit": "g",
    "cal": 120,
    "p": 6,
    "c": 19.5,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sausage slices (landjäger)": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 160,
    "p": 11,
    "c": 0.5,
    "f": 13,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sautéed green beans": {
    "baseQty": 100,
    "unit": "g",
    "cal": 28,
    "p": 1.5,
    "c": 5.2,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sautéed mushrooms": {
    "baseQty": 100,
    "unit": "g",
    "cal": 40,
    "p": 2.2,
    "c": 4.5,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sauteed spinach (palak)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 25,
    "p": 2,
    "c": 3,
    "f": 0.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "savory chicken croquette (coxinha)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 230,
    "p": 9.5,
    "c": 24,
    "f": 11,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "schinken": {
    "baseQty": 100,
    "unit": "g",
    "cal": 60,
    "p": 9,
    "c": 0.4,
    "f": 2.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "scotch egg & cucumber slices": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 225,
    "p": 10.5,
    "c": 15,
    "f": 14.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "scottish smoked salmon": {
    "baseQty": 100,
    "unit": "g",
    "cal": 110,
    "p": 13.2,
    "c": 0,
    "f": 6.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "scrambled": {
    "baseQty": 100,
    "unit": "g",
    "cal": 80,
    "p": 8.5,
    "c": 1.5,
    "f": 4.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "scrambled egg whites & cheese": {
    "baseQty": 100,
    "unit": "g",
    "cal": 150,
    "p": 18,
    "c": 1.5,
    "f": 8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "scrambled eggs (1 whole, 2 whites)": {
    "baseQty": 100,
    "unit": "eggs",
    "cal": 110,
    "p": 14,
    "c": 0.8,
    "f": 5.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "scrambled eggs (2 whole)": {
    "baseQty": 100,
    "unit": "eggs",
    "cal": 140,
    "p": 12,
    "c": 0.6,
    "f": 9.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "scrambled eggs (butter)": {
    "baseQty": 100,
    "unit": "eggs",
    "cal": 150,
    "p": 12,
    "c": 0.6,
    "f": 11,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "scrambled eggs & beef biltong": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 330,
    "p": 35,
    "c": 16.6,
    "f": 14,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "scrambled eggs, avocado & toast": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 305,
    "p": 19.8,
    "c": 19.5,
    "f": 17.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "scrambled tofu & grilled tomatoes": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 208,
    "p": 15.5,
    "c": 22.6,
    "f": 6.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sea bass, new potatoes & spinach": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 260,
    "p": 29.8,
    "c": 20.8,
    "f": 6.4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "semi-skimmed milk": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 95,
    "p": 7,
    "c": 9.5,
    "f": 3.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "senbei": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 90,
    "p": 1.8,
    "c": 20,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "senbei crackers & green tea": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 92,
    "p": 1.9,
    "c": 20.4,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "shake": {
    "baseQty": 100,
    "unit": "g",
    "cal": 130,
    "p": 18,
    "c": 0,
    "f": 6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "shakshuka, pita & labneh": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 370,
    "p": 19.7,
    "c": 34.8,
    "f": 17,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "shaved beef biltong": {
    "baseQty": 100,
    "unit": "g",
    "cal": 90,
    "p": 16,
    "c": 0.6,
    "f": 2.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "shelled pumpkin seeds": {
    "baseQty": 100,
    "unit": "g",
    "cal": 85,
    "p": 4.5,
    "c": 2,
    "f": 7.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "shelled walnuts": {
    "baseQty": 100,
    "unit": "g",
    "cal": 100,
    "p": 2.2,
    "c": 2,
    "f": 10,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "shepherds pie & broccoli": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 348,
    "p": 22.2,
    "c": 37.5,
    "f": 12.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "shiitake, scallion, carrot": {
    "baseQty": 100,
    "unit": "g",
    "cal": 35,
    "p": 1.2,
    "c": 7,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "shish tawook & tabbouleh": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 355,
    "p": 34.1,
    "c": 13,
    "f": 18.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "shorbat adas": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 120,
    "p": 6.5,
    "c": 20,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "shredded cheddar cheese": {
    "baseQty": 100,
    "unit": "g",
    "cal": 80,
    "p": 5,
    "c": 0.5,
    "f": 6.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "shredded chicken breast": {
    "baseQty": 100,
    "unit": "g",
    "cal": 50,
    "p": 10,
    "c": 0,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "shredded seaweed & onion": {
    "baseQty": 100,
    "unit": "g",
    "cal": 10,
    "p": 0.5,
    "c": 2,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "silken tofu": {
    "baseQty": 100,
    "unit": "g",
    "cal": 60,
    "p": 6.5,
    "c": 2,
    "f": 3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sirloin steak, sweet potato & asparagus": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 414,
    "p": 37,
    "c": 27.2,
    "f": 16.4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "skewered grilled chicken (yakitori)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 190,
    "p": 26,
    "c": 4,
    "f": 7.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "skim milk": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 70,
    "p": 7,
    "c": 10,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "skinless": {
    "baseQty": 100,
    "unit": "g",
    "cal": 210,
    "p": 30,
    "c": 0,
    "f": 9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sliced almonds": {
    "baseQty": 100,
    "unit": "g",
    "cal": 90,
    "p": 3,
    "c": 3,
    "f": 8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sliced banana": {
    "baseQty": 100,
    "unit": "g",
    "cal": 45,
    "p": 0.5,
    "c": 11.5,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sliced chicken polony": {
    "baseQty": 100,
    "unit": "g",
    "cal": 95,
    "p": 9,
    "c": 2.5,
    "f": 5.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sliced cucumber & mint": {
    "baseQty": 100,
    "unit": "g",
    "cal": 8,
    "p": 0.3,
    "c": 1.8,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sliced lean turkey": {
    "baseQty": 100,
    "unit": "g",
    "cal": 65,
    "p": 13,
    "c": 0.5,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sliced plum tomato": {
    "baseQty": 100,
    "unit": "g",
    "cal": 10,
    "p": 0.5,
    "c": 2.2,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sliced roast beef": {
    "baseQty": 100,
    "unit": "g",
    "cal": 140,
    "p": 23,
    "c": 0,
    "f": 5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sliced strawberries": {
    "baseQty": 100,
    "unit": "g",
    "cal": 16,
    "p": 0.3,
    "c": 4,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sliced tomato": {
    "baseQty": 100,
    "unit": "g",
    "cal": 6,
    "p": 0.3,
    "c": 1.3,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sliced turkey breast": {
    "baseQty": 100,
    "unit": "g",
    "cal": 90,
    "p": 18,
    "c": 0.8,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "smashed avo & poached eggs": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 295,
    "p": 16.8,
    "c": 21.1,
    "f": 16.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "smashed avo, grilled feta & toast": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 245,
    "p": 9,
    "c": 23.5,
    "f": 14.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "smoked salmon & scrambled eggs": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 305,
    "p": 30.7,
    "c": 16.8,
    "f": 12.7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "smooth hummus dip": {
    "baseQty": 100,
    "unit": "g",
    "cal": 70,
    "p": 2.1,
    "c": 5.5,
    "f": 4.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "soft": {
    "baseQty": 100,
    "unit": "g",
    "cal": 110,
    "p": 2.2,
    "c": 24,
    "f": 0.4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sourdough bread toast": {
    "baseQty": 100,
    "unit": "slice",
    "cal": 90,
    "p": 4,
    "c": 17,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sourdough toast": {
    "baseQty": 100,
    "unit": "slice",
    "cal": 90,
    "p": 4,
    "c": 17,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "south african chakalaka with baked beans": {
    "baseQty": 100,
    "unit": "g",
    "cal": 140,
    "p": 5.5,
    "c": 22,
    "f": 3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "south african veggie patty": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 130,
    "p": 10,
    "c": 12,
    "f": 4.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "soy-glazed rice crackers (senbei)": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 90,
    "p": 1.8,
    "c": 20,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "soya chunks curry": {
    "baseQty": 100,
    "unit": "g",
    "cal": 180,
    "p": 20,
    "c": 12,
    "f": 6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "soya chunks curry & rice": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 305,
    "p": 22.6,
    "c": 39,
    "f": 6.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "spiced shawarma chicken breast": {
    "baseQty": 100,
    "unit": "g",
    "cal": 130,
    "p": 22,
    "c": 1,
    "f": 4.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "spiced vegetable chakalaka": {
    "baseQty": 100,
    "unit": "g",
    "cal": 60,
    "p": 1.5,
    "c": 10,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "spicy onion tomato gravy": {
    "baseQty": 100,
    "unit": "g",
    "cal": 70,
    "p": 1.8,
    "c": 8,
    "f": 3.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "spicy pan-fried rohu fish": {
    "baseQty": 100,
    "unit": "g",
    "cal": 220,
    "p": 22,
    "c": 2,
    "f": 12,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "spinach & vinaigrette": {
    "baseQty": 100,
    "unit": "g",
    "cal": 30,
    "p": 1.2,
    "c": 4,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sprouted moong beans": {
    "baseQty": 100,
    "unit": "g",
    "cal": 120,
    "p": 9,
    "c": 19,
    "f": 0.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sprouted moong chaat": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 120,
    "p": 9,
    "c": 19,
    "f": 0.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "steam": {
    "baseQty": 100,
    "unit": "grams (g)",
    "cal": 35,
    "p": 2.4,
    "c": 7.2,
    "f": 0.4,
    "micros": {
      "fiber": 3.3,
      "calcium": 47,
      "iron": 0.7
    }
  },
  "steamed asparagus": {
    "baseQty": 100,
    "unit": "g",
    "cal": 16,
    "p": 1.8,
    "c": 3.2,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "steamed baby spinach": {
    "baseQty": 100,
    "unit": "g",
    "cal": 20,
    "p": 1.8,
    "c": 2.8,
    "f": 0.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "steamed basmati rice": {
    "baseQty": 100,
    "unit": "g",
    "cal": 150,
    "p": 3.2,
    "c": 32,
    "f": 0.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "steamed bok choy with sesame": {
    "baseQty": 100,
    "unit": "g",
    "cal": 35,
    "p": 1.8,
    "c": 3.5,
    "f": 2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "steamed broccoli": {
    "baseQty": 100,
    "unit": "g",
    "cal": 28,
    "p": 2.2,
    "c": 5.5,
    "f": 0.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "steamed broccoli florets": {
    "baseQty": 100,
    "unit": "g",
    "cal": 35,
    "p": 2.8,
    "c": 7,
    "f": 0.4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "steamed brussels sprouts": {
    "baseQty": 100,
    "unit": "g",
    "cal": 30,
    "p": 2.4,
    "c": 6,
    "f": 0.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "steamed green peas": {
    "baseQty": 100,
    "unit": "g",
    "cal": 40,
    "p": 2.5,
    "c": 7,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "steamed idlis": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 150,
    "p": 4,
    "c": 32,
    "f": 0.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "steamed kamaboko fish cake": {
    "baseQty": 100,
    "unit": "g",
    "cal": 80,
    "p": 10,
    "c": 8,
    "f": 0.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "steamed khaman dhokla": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 150,
    "p": 5,
    "c": 26,
    "f": 3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "steamed rice": {
    "baseQty": 100,
    "unit": "g",
    "cal": 125,
    "p": 2.6,
    "c": 27,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "steamed sweet potato": {
    "baseQty": 100,
    "unit": "g",
    "cal": 90,
    "p": 1.8,
    "c": 20,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "steamed white rice": {
    "baseQty": 100,
    "unit": "g",
    "cal": 130,
    "p": 2.7,
    "c": 28,
    "f": 0.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "stew": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 255,
    "p": 5.5,
    "c": 49.5,
    "f": 3.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "stir-fry veggies (pepper, onion)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 35,
    "p": 1.2,
    "c": 7,
    "f": 0.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "strawberry fruit jam": {
    "baseQty": 100,
    "unit": "g",
    "cal": 40,
    "p": 0.1,
    "c": 10,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "string cheese & almonds": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 170,
    "p": 10.2,
    "c": 4,
    "f": 12.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sunomono": {
    "baseQty": 100,
    "unit": "g",
    "cal": 15,
    "p": 0.4,
    "c": 3,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sushi selection & edamame": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 328,
    "p": 23.8,
    "c": 42.2,
    "f": 6.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sweet potato": {
    "baseQty": 100,
    "unit": "g",
    "cal": 86,
    "p": 1.6,
    "c": 20,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sweet potato & black bean bowl": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 220,
    "p": 9.6,
    "c": 44,
    "f": 0.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "sweet potato & feta wrap": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 298,
    "p": 10,
    "c": 43.2,
    "f": 8.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "swiss cheese slices": {
    "baseQty": 100,
    "unit": "g",
    "cal": 110,
    "p": 8,
    "c": 0.4,
    "f": 8.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "tabbouleh salad": {
    "baseQty": 100,
    "unit": "g",
    "cal": 95,
    "p": 2,
    "c": 10,
    "f": 6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "tahini dip": {
    "baseQty": 100,
    "unit": "g",
    "cal": 90,
    "p": 2.5,
    "c": 3,
    "f": 8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "takuan": {
    "baseQty": 100,
    "unit": "g",
    "cal": 10,
    "p": 0.2,
    "c": 2,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "tamagoyaki": {
    "baseQty": 100,
    "unit": "g",
    "cal": 120,
    "p": 8.5,
    "c": 4,
    "f": 8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "tamagoyaki, rice & pickle": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 280,
    "p": 11.7,
    "c": 39,
    "f": 8.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "tapioca crepe with cheese & tomato": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 266,
    "p": 7.7,
    "c": 41.3,
    "f": 7.7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "tapioca crepe with eggs & cheese": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 310,
    "p": 18.2,
    "c": 40.5,
    "f": 8.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "tapioca flour crepe": {
    "baseQty": 100,
    "unit": "g",
    "cal": 160,
    "p": 0.2,
    "c": 39,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "tempeh & veggie wrap": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 300,
    "p": 20.8,
    "c": 33,
    "f": 9.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "tempura sweet potato & zucchini": {
    "baseQty": 100,
    "unit": "g",
    "cal": 110,
    "p": 1.5,
    "c": 15,
    "f": 5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "teriyaki tofu & bok choy": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 320,
    "p": 18.3,
    "c": 39,
    "f": 10.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "teriyaki tofu rice bowl": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 275,
    "p": 14,
    "c": 36.5,
    "f": 7.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "thai green tofu curry & rice": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 315,
    "p": 13.5,
    "c": 39.5,
    "f": 11.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "thick labneh dip": {
    "baseQty": 100,
    "unit": "g",
    "cal": 80,
    "p": 3,
    "c": 2.4,
    "f": 6.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "three bean veggie chili": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 320,
    "p": 19,
    "c": 42.5,
    "f": 8.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "three-bean stew (black, kidney, pinto)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 240,
    "p": 14,
    "c": 42,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "tofu in thai green curry sauce": {
    "baseQty": 100,
    "unit": "g",
    "cal": 190,
    "p": 11,
    "c": 12,
    "f": 11,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "tofu scramble & avocado toast": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 305,
    "p": 17.3,
    "c": 35,
    "f": 12.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "tofu stir-fry with brown rice": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 235,
    "p": 12.8,
    "c": 32,
    "f": 6.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "tofu, rice & miso soup": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 245,
    "p": 11.5,
    "c": 39,
    "f": 4.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "tomato & mustard salad": {
    "baseQty": 100,
    "unit": "g",
    "cal": 25,
    "p": 0.8,
    "c": 4,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "tomato garlic salad": {
    "baseQty": 100,
    "unit": "g",
    "cal": 25,
    "p": 0.8,
    "c": 4,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "tomato salsa (campanha)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 20,
    "p": 0.5,
    "c": 3.5,
    "f": 0.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "tomato sauce": {
    "baseQty": 100,
    "unit": "eggs",
    "cal": 170,
    "p": 13,
    "c": 5,
    "f": 11,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "tossed feta & olive oil": {
    "baseQty": 100,
    "unit": "g",
    "cal": 60,
    "p": 2.8,
    "c": 0.8,
    "f": 5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "toum": {
    "baseQty": 100,
    "unit": "g",
    "cal": 50,
    "p": 0.1,
    "c": 2,
    "f": 4.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "traditional cheese bread": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 220,
    "p": 4.2,
    "c": 28,
    "f": 10,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "traditional egg spätzle": {
    "baseQty": 100,
    "unit": "g",
    "cal": 190,
    "p": 6.5,
    "c": 36,
    "f": 2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "traditional hummus": {
    "baseQty": 100,
    "unit": "g",
    "cal": 140,
    "p": 4.2,
    "c": 11,
    "f": 9.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "traditional labneh": {
    "baseQty": 100,
    "unit": "g",
    "cal": 40,
    "p": 1.5,
    "c": 1.2,
    "f": 3.4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "traditional pork scotch egg": {
    "baseQty": 100,
    "unit": "g",
    "cal": 210,
    "p": 10,
    "c": 12,
    "f": 14,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "traditional rolled oats": {
    "baseQty": 100,
    "unit": "g",
    "cal": 190,
    "p": 6,
    "c": 34,
    "f": 3.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "traditional spätzle pasta": {
    "baseQty": 100,
    "unit": "g",
    "cal": 240,
    "p": 8,
    "c": 45,
    "f": 2.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "traditional veg potjiekos stew": {
    "baseQty": 100,
    "unit": "g",
    "cal": 130,
    "p": 3,
    "c": 22,
    "f": 3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "tsuyu dipping sauce": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 20,
    "p": 0.5,
    "c": 4,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "tuna & salmon": {
    "baseQty": 100,
    "unit": "g",
    "cal": 165,
    "p": 26,
    "c": 0,
    "f": 6.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "tuna flakes cup": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 67,
    "p": 15,
    "c": 0.5,
    "f": 0.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "tuna, salmon, prawn": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 240,
    "p": 15,
    "c": 35,
    "f": 2.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "turkey & swiss cheese sandwich": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 380,
    "p": 38,
    "c": 31.4,
    "f": 12.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "turkey bacon": {
    "baseQty": 100,
    "unit": "slices",
    "cal": 70,
    "p": 6,
    "c": 0.5,
    "f": 5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "turkey bacon, egg white omelet & toast": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 218,
    "p": 24.5,
    "c": 16.5,
    "f": 6.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "turkey breast slices": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 65,
    "p": 13,
    "c": 0.5,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "turkey jerky & walnuts": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 190,
    "p": 13.2,
    "c": 4,
    "f": 14,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "turkey meatballs & whole wheat pasta": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 540,
    "p": 33.5,
    "c": 70,
    "f": 15,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "turkey roll-ups & chamomile tea": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 67,
    "p": 13,
    "c": 1,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "turkey roll-ups with cream cheese": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 130,
    "p": 19.5,
    "c": 2,
    "f": 4.7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "turkey roll-ups with labneh": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 130,
    "p": 19.5,
    "c": 2,
    "f": 4.9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "turkey slice & chamomile tea": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 57,
    "p": 11,
    "c": 0.9,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "turkey slices": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 65,
    "p": 13,
    "c": 0.5,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "turkey slices & chamomile tea": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 57,
    "p": 11,
    "c": 0.9,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "turkey slices & macadamia nuts": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 170,
    "p": 14.2,
    "c": 2.6,
    "f": 12,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "turmeric & black pepper": {
    "baseQty": 100,
    "unit": "g",
    "cal": 5,
    "p": 0.1,
    "c": 1,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "udon noodles in kelp dashi": {
    "baseQty": 100,
    "unit": "g",
    "cal": 220,
    "p": 6,
    "c": 46,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "unsweetened soy milk": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 85,
    "p": 8,
    "c": 4,
    "f": 4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "upma": {
    "baseQty": 100,
    "unit": "g",
    "cal": 210,
    "p": 4,
    "c": 36,
    "f": 5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "veg": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 290,
    "p": 9,
    "c": 38,
    "f": 11,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vegemite yeast extract": {
    "baseQty": 100,
    "unit": "g",
    "cal": 10,
    "p": 1.3,
    "c": 1,
    "f": 0.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vegetable & tofu feijoada": {
    "baseQty": 100,
    "unit": "g",
    "cal": 180,
    "p": 9,
    "c": 26,
    "f": 4.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vegetable basmati pulao": {
    "baseQty": 100,
    "unit": "g",
    "cal": 250,
    "p": 5.5,
    "c": 46,
    "f": 4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vegetable moqueca (palm oil/dendê & coconut)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 220,
    "p": 3.5,
    "c": 18,
    "f": 16,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vegetable moqueca & rice": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 345,
    "p": 6,
    "c": 45.5,
    "f": 16.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vegetable potjiekos (stew) & rice": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 255,
    "p": 5.5,
    "c": 49.5,
    "f": 3.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vegetable pulao & cucumber raita": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 310,
    "p": 8.7,
    "c": 50.5,
    "f": 7.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vegetable saloona & rice": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 290,
    "p": 6.7,
    "c": 54,
    "f": 4.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vegetable sushi roll & edamame": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 268,
    "p": 12,
    "c": 45.2,
    "f": 6.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vegetable udon noodle soup": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 255,
    "p": 7.2,
    "c": 53,
    "f": 1.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vegetable wellington & roast potatoes": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 410,
    "p": 12.5,
    "c": 63,
    "f": 12.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vegetarian abendbrot": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 325,
    "p": 15.8,
    "c": 34.8,
    "f": 12.9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vegetarian burger & sweet potato fries": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 330,
    "p": 16.7,
    "c": 52,
    "f": 6.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vegetarian cheese & onion pasty": {
    "baseQty": 100,
    "unit": "g",
    "cal": 280,
    "p": 7.5,
    "c": 30,
    "f": 15,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vegetarian full english": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 290,
    "p": 19.3,
    "c": 36.5,
    "f": 6.9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vegetarian sausage": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 110,
    "p": 9.5,
    "c": 5,
    "f": 5.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vegetarian tofu sausage": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 120,
    "p": 9,
    "c": 4.5,
    "f": 7.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vegetarian wellington slice": {
    "baseQty": 100,
    "unit": "g",
    "cal": 240,
    "p": 8,
    "c": 32,
    "f": 9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "veggie & grain patty": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 140,
    "p": 11,
    "c": 14,
    "f": 5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "veggie burger & baked sweet potato fries": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 320,
    "p": 15.2,
    "c": 50,
    "f": 6.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "veggie feijoada & rice": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 305,
    "p": 11.5,
    "c": 53.5,
    "f": 4.7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "veggie sausage & potato salad": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 270,
    "p": 11.2,
    "c": 28.5,
    "f": 12.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vinagrete": {
    "baseQty": 100,
    "unit": "g",
    "cal": 25,
    "p": 0.5,
    "c": 4,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vinegar salad (vinagrete)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 25,
    "p": 0.5,
    "c": 4,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vollkornbrot": {
    "baseQty": 100,
    "unit": "slices",
    "cal": 170,
    "p": 5.5,
    "c": 32,
    "f": 1.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vollkornbrot (dark rye)": {
    "baseQty": 100,
    "unit": "slice",
    "cal": 85,
    "p": 2.8,
    "c": 16,
    "f": 0.9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vollkornbrot with cheese & boiled egg": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 269,
    "p": 16.6,
    "c": 17,
    "f": 14.4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "vollkornbrot with cheese & cucumber": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 293,
    "p": 14.3,
    "c": 34,
    "f": 10.9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "wakame miso soup": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 35,
    "p": 2,
    "c": 4,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "walnut halves": {
    "baseQty": 100,
    "unit": "g",
    "cal": 100,
    "p": 2.3,
    "c": 2,
    "f": 9.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "walnuts": {
    "baseQty": 100,
    "unit": "g",
    "cal": 100,
    "p": 2.2,
    "c": 2,
    "f": 10,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "warm camel milk & date": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 156,
    "p": 6.6,
    "c": 27.2,
    "f": 3.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "warm cow milk": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 120,
    "p": 6.8,
    "c": 9.6,
    "f": 6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "warm haldi milk": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 95,
    "p": 6.9,
    "c": 10.6,
    "f": 2.1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "warm milk & honey": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 117,
    "p": 7,
    "c": 15.5,
    "f": 3.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "warm milk with almonds": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 180,
    "p": 8.5,
    "c": 11.5,
    "f": 11.7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "warm milk with honey": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 117,
    "p": 7,
    "c": 15.5,
    "f": 3.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "warm oats with chia & berries": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 240,
    "p": 8.2,
    "c": 37.2,
    "f": 6.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "water": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 0,
    "p": 0,
    "c": 0,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "water & cinnamon": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 0,
    "p": 0,
    "c": 0,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "water & lemon juice": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 5,
    "p": 0.1,
    "c": 1.2,
    "f": 0,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "weet-bix, milk & banana": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 245,
    "p": 11.1,
    "c": 43.3,
    "f": 2.9,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "wheat burger bun": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 120,
    "p": 4,
    "c": 22,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "wheat roti / chapati": {
    "baseQty": 100,
    "unit": "pieces",
    "cal": 120,
    "p": 3.1,
    "c": 22.4,
    "f": 2.2,
    "micros": {
      "fiber": 2.8,
      "calcium": 12,
      "iron": 0.9
    }
  },
  "whey protein": {
    "baseQty": 100,
    "unit": "scoop",
    "cal": 120,
    "p": 24,
    "c": 3,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "whey protein isolate": {
    "baseQty": 100,
    "unit": "scoop (30g)",
    "cal": 120,
    "p": 25,
    "c": 1.5,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 120,
      "iron": 0.5
    }
  },
  "whey protein shake & carrots": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 150,
    "p": 25.9,
    "c": 10.5,
    "f": 0.7,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "whey/casein protein shake": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 110,
    "p": 24,
    "c": 1.5,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "white maize meal (pap)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 175,
    "p": 3.8,
    "c": 38,
    "f": 0.6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "white maize porridge (soft)": {
    "baseQty": 100,
    "unit": "g",
    "cal": 110,
    "p": 2.2,
    "c": 24,
    "f": 0.4,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "white rice": {
    "baseQty": 100,
    "unit": "g",
    "cal": 195,
    "p": 4,
    "c": 42,
    "f": 0.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "white rice (cooked)": {
    "baseQty": 100,
    "unit": "grams (g)",
    "cal": 130,
    "p": 2.7,
    "c": 28.2,
    "f": 0.3,
    "micros": {
      "fiber": 0.4,
      "calcium": 10,
      "iron": 0.2
    }
  },
  "white rice & carioca beans": {
    "baseQty": 100,
    "unit": "g",
    "cal": 210,
    "p": 8,
    "c": 42,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "whole eggs": {
    "baseQty": 100,
    "unit": "eggs",
    "cal": 140,
    "p": 12,
    "c": 0.6,
    "f": 9.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "whole eggs (boiled)": {
    "baseQty": 100,
    "unit": "grams (g)",
    "cal": 155,
    "p": 12.6,
    "c": 1.1,
    "f": 10.6,
    "micros": {
      "fiber": 0,
      "calcium": 50,
      "iron": 1.2
    }
  },
  "whole eggs (hard boiled)": {
    "baseQty": 100,
    "unit": "eggs",
    "cal": 140,
    "p": 12,
    "c": 0.6,
    "f": 9.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "whole grain sourdough": {
    "baseQty": 100,
    "unit": "slice",
    "cal": 100,
    "p": 4.5,
    "c": 18,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "whole milk": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 150,
    "p": 8,
    "c": 12,
    "f": 8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "whole milk (cow)": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 61,
    "p": 3.2,
    "c": 4.8,
    "f": 3.3,
    "micros": {
      "fiber": 0,
      "calcium": 113,
      "iron": 0.1
    }
  },
  "whole wheat bread slices": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 160,
    "p": 8,
    "c": 30,
    "f": 2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "whole wheat bread toast": {
    "baseQty": 100,
    "unit": "slices",
    "cal": 160,
    "p": 8,
    "c": 30,
    "f": 2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "whole wheat burger bun": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 120,
    "p": 4.5,
    "c": 22,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "whole wheat dough": {
    "baseQty": 100,
    "unit": "g",
    "cal": 260,
    "p": 6,
    "c": 54,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "whole wheat paratha": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 260,
    "p": 6,
    "c": 44,
    "f": 6,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "whole wheat pita bread": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 130,
    "p": 4.2,
    "c": 26,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "whole wheat roti": {
    "baseQty": 100,
    "unit": "pcs",
    "cal": 160,
    "p": 5.2,
    "c": 32,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "whole wheat spaghetti": {
    "baseQty": 100,
    "unit": "g",
    "cal": 280,
    "p": 10,
    "c": 58,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "whole wheat toast": {
    "baseQty": 100,
    "unit": "slice",
    "cal": 80,
    "p": 4,
    "c": 15,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "whole wheat wrap": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 130,
    "p": 4,
    "c": 22,
    "f": 2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "wholemeal crusty roll": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 130,
    "p": 5,
    "c": 26,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "wholemeal flatbread wrap": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 130,
    "p": 4,
    "c": 22,
    "f": 2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "wholemeal toast": {
    "baseQty": 100,
    "unit": "slice",
    "cal": 80,
    "p": 4,
    "c": 15,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "wholemeal tortilla wrap": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 140,
    "p": 4.5,
    "c": 24,
    "f": 2.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "yakitori": {
    "baseQty": 100,
    "unit": "g",
    "cal": 190,
    "p": 26,
    "c": 4,
    "f": 7.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "yakitori chicken bento": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 330,
    "p": 29,
    "c": 34.5,
    "f": 7.8,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "yellow dal tadka": {
    "baseQty": 100,
    "unit": "g",
    "cal": 80,
    "p": 4.8,
    "c": 13,
    "f": 1.2,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "yellow lentil soup (shorbat adas)": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 120,
    "p": 6.5,
    "c": 20,
    "f": 1.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "yellow moong dal": {
    "baseQty": 100,
    "unit": "ml",
    "cal": 110,
    "p": 7,
    "c": 20,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "yellow rice with raisins": {
    "baseQty": 100,
    "unit": "g",
    "cal": 140,
    "p": 2.6,
    "c": 30,
    "f": 1,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "yellow toor dal (cooked)": {
    "baseQty": 100,
    "unit": "grams (g)",
    "cal": 116,
    "p": 6.8,
    "c": 19.8,
    "f": 1.2,
    "micros": {
      "fiber": 3.5,
      "calcium": 24,
      "iron": 1.1
    }
  },
  "zaatar flatbread & labneh": {
    "baseQty": 100,
    "unit": "meal serving",
    "cal": 260,
    "p": 7.5,
    "c": 30.4,
    "f": 12.3,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  },
  "zaatar spice flatbread (manakish)": {
    "baseQty": 100,
    "unit": "pc",
    "cal": 180,
    "p": 4.5,
    "c": 28,
    "f": 5.5,
    "micros": {
      "fiber": 0,
      "calcium": 0,
      "iron": 0
    }
  }
};
var citiesMap = {
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
    };;

if (typeof window !== "undefined") {
  window.FOODS_JSON_ARRAY = FOODS_JSON_ARRAY;
  window.DIET_DATABASE = DIET_DATABASE;
  window.COMMON_FOODS_DIRECTORY = COMMON_FOODS_DIRECTORY;
  window.citiesMap = citiesMap;

  // Dynamic Live Fetch from public/data/foods.json for instant website & webview sync
  if (typeof fetch === "function") {
    fetch('/data/foods.json')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          window.FOODS_JSON_ARRAY = data;
          data.forEach(item => {
            const k = item.name.toLowerCase().trim();
            window.COMMON_FOODS_DIRECTORY[k] = {
              baseQty: item.baseQty || 100,
              unit: item.unit || 'g',
              cal: item.cal || 0,
              p: item.prot || 0,
              c: item.carb || 0,
              f: item.fat || 0,
              micros: {
                fiber: item.fiber || 0,
                calcium: item.calcium || 0,
                iron: item.iron || 0
              }
            };
          });
          if (typeof window.compileFoodsDirectory === 'function') {
            window.compileFoodsDirectory();
          }
        }
      })
      .catch(function(err) {});
  }
}

if (typeof globalThis !== "undefined") {
  globalThis.FOODS_JSON_ARRAY = FOODS_JSON_ARRAY;
  globalThis.DIET_DATABASE = DIET_DATABASE;
  globalThis.COMMON_FOODS_DIRECTORY = COMMON_FOODS_DIRECTORY;
  globalThis.citiesMap = citiesMap;
}
