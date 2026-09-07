// ================================================================
// RECIPE DATABASE — 100 recipes, no API, all stored locally here.
// Each recipe has: name, diet (veg/nonveg), icon (Font Awesome class),
// color (used for its card), ingredients list, and detailed steps.
// ================================================================

const recipes = [

// ---------------- RICE & GRAIN (10) ----------------
{ name: "Tomato Rice", diet: "veg", icon: "fa-bowl-rice", color: "#ef4444",
  ingredients: ["tomato", "rice", "onion", "garlic", "salt", "oil"],
  steps: "1. Cook 1 cup rice with 2 cups water until soft, then spread it on a plate to cool so the grains stay separate. 2. Heat 2 tbsp oil in a pan on medium heat, add chopped garlic and onion, and saute for 3-4 minutes until the onion turns golden. 3. Add finely chopped tomatoes and salt, cover and cook for 5-6 minutes, mashing occasionally, until it turns into a soft, thick mixture. 4. Add the cooled rice, mix gently so every grain is coated in the tomato mixture, cook for 2 more minutes on low heat, and serve hot." },

{ name: "Egg Fried Rice", diet: "nonveg", icon: "fa-egg", color: "#f59e0b",
  ingredients: ["egg", "rice", "onion", "soy sauce", "oil", "garlic"],
  steps: "1. Cook rice a day ahead if possible (or cool freshly cooked rice completely) so the grains are firm and don't turn mushy when fried. 2. Heat 1 tbsp oil in a wok on high heat, crack in the eggs, scramble quickly into small pieces, and remove to a plate. 3. In the same wok, add more oil, saute chopped garlic and onion for 2 minutes, then add the cold rice, breaking up any clumps with the back of a spatula. 4. Stir-fry on high heat for 3-4 minutes, add soy sauce and the scrambled egg back in, toss everything together, and serve immediately while hot." },

{ name: "Garlic Butter Rice", diet: "veg", icon: "fa-bowl-rice", color: "#0ea5e9",
  ingredients: ["rice", "garlic", "butter", "salt"],
  steps: "1. Cook the rice with a pinch of salt until each grain is tender but not sticky, then fluff it gently with a fork and set aside. 2. Melt 2 tbsp butter in a pan on low heat and add finely minced garlic. 3. Saute the garlic slowly for 2-3 minutes, stirring constantly so it turns golden and fragrant without burning (burnt garlic turns bitter). 4. Add the cooked rice to the garlic butter, toss well on low heat for a minute so every grain is coated, then serve warm." },

{ name: "Chicken Fried Rice", diet: "nonveg", icon: "fa-drumstick-bite", color: "#db2777",
  ingredients: ["chicken", "rice", "onion", "soy sauce", "garlic", "oil"],
  steps: "1. Cut chicken into small bite-sized cubes and season lightly with salt and pepper. 2. Heat oil in a wok on high heat, add garlic and chicken, and stir-fry for 5-6 minutes until the chicken is fully cooked and lightly browned on the edges. 3. Push the chicken to one side, add chopped onion to the empty space, and saute for 2 minutes until softened. 4. Add cold cooked rice and soy sauce, mix everything together on high heat for 3-4 minutes so the rice picks up a slight char, then serve hot." },

{ name: "Lemon Rice", diet: "veg", icon: "fa-lemon", color: "#eab308",
  ingredients: ["rice", "lemon", "mustard seeds", "curry leaves", "oil", "salt"],
  steps: "1. Cook the rice until soft, spread it out on a plate, and let it cool completely (warm rice will turn mushy when mixed). 2. Heat oil in a pan, add mustard seeds, and let them splutter for a few seconds. 3. Add curry leaves and a pinch of turmeric, stir for 30 seconds until fragrant. 4. Turn off the heat, add the cooled rice, a generous squeeze of fresh lemon juice, and salt, then mix gently and serve at room temperature." },

{ name: "Vegetable Pulao", diet: "veg", icon: "fa-carrot", color: "#22c55e",
  ingredients: ["rice", "carrot", "peas", "onion", "garlic", "oil", "salt"],
  steps: "1. Wash the rice and soak it in water for 15 minutes, then drain well. 2. Heat oil in a pot, add chopped onion and garlic, and saute for 2-3 minutes until translucent. 3. Add diced carrot and peas, stir-fry for 2 minutes, then add the drained rice and salt, mixing gently so the grains don't break. 4. Add water (about 1.5 times the rice quantity), bring to a boil, then cover and simmer on low heat for 15 minutes until the rice is fully cooked and fluffy." },

{ name: "Coconut Rice", diet: "veg", icon: "fa-bowl-rice", color: "#14b8a6",
  ingredients: ["rice", "coconut", "mustard seeds", "curry leaves", "oil", "salt"],
  steps: "1. Cook the rice until tender, then spread it out to cool so the grains stay separate. 2. Heat oil in a pan, add mustard seeds and let them splutter, then add curry leaves. 3. Add grated coconut and a pinch of salt, stir-fry on low heat for 2-3 minutes until the coconut turns light golden and smells toasted. 4. Add the cooled rice, mix thoroughly on low heat for 2 minutes so the flavors combine, and serve warm." },

{ name: "Curd Rice", diet: "veg", icon: "fa-bowl-rice", color: "#0ea5e9",
  ingredients: ["rice", "yogurt", "mustard seeds", "curry leaves", "salt", "oil"],
  steps: "1. Cook the rice until very soft (slightly overcooked is fine for this dish) and let it cool to room temperature. 2. Mash the rice lightly with a spoon, then mix in fresh yogurt and salt until it reaches a creamy, smooth consistency. 3. In a small pan, heat oil, add mustard seeds until they splutter, then add curry leaves for 20 seconds. 4. Pour this tempering over the curd rice, mix well, and refrigerate for 15 minutes before serving for the best taste." },

{ name: "Peas Pulao", diet: "veg", icon: "fa-seedling", color: "#84cc16",
  ingredients: ["rice", "peas", "onion", "garlic", "oil", "salt"],
  steps: "1. Wash and soak rice for 15 minutes, then drain. 2. Heat oil in a pot, add chopped garlic and onion, and saute until the onion turns light golden. 3. Add green peas and salt, stir-fry for 2 minutes, then add the drained rice, mixing gently. 4. Add water, bring to a boil, cover, and simmer on low heat for 15 minutes until the rice is cooked through and each grain is separate." },

{ name: "Mushroom Rice", diet: "veg", icon: "fa-bowl-rice", color: "#6366f1",
  ingredients: ["rice", "mushroom", "onion", "garlic", "butter", "salt"],
  steps: "1. Slice the mushrooms and cook the rice separately until tender, then set both aside. 2. Melt butter in a pan, add chopped garlic and onion, and saute for 2-3 minutes until soft. 3. Add sliced mushrooms and salt, cook on medium-high heat for 5-6 minutes until they release their water and turn golden brown. 4. Add the cooked rice, toss everything together for 2 minutes on low heat, and serve hot." },

// ---------------- CURRIES & GRAVIES (10) ----------------
{ name: "Chicken Curry (Simple)", diet: "nonveg", icon: "fa-drumstick-bite", color: "#dc2626",
  ingredients: ["chicken", "onion", "tomato", "garlic", "ginger", "oil", "salt"],
  steps: "1. Heat oil in a deep pan, add finely chopped onion, and cook on medium heat for 5-6 minutes, stirring often, until it turns golden brown. 2. Add minced garlic and ginger, cook for 1 minute until fragrant, then add chopped tomatoes and cook for 5-6 minutes, mashing them down, until the mixture turns thick and the oil begins to separate at the edges. 3. Add the chicken pieces and salt, stir well to coat every piece in the masala, then cover and cook on low heat for 20-25 minutes, stirring occasionally, until the chicken is fully cooked and tender. 4. Add a splash of water if the gravy looks too thick, simmer for 5 more minutes, and serve hot with rice or bread." },

{ name: "Paneer Butter Masala", diet: "veg", icon: "fa-cheese", color: "#f97316",
  ingredients: ["paneer", "tomato", "butter", "onion", "garlic", "cream", "salt"],
  steps: "1. Melt butter in a pan, add chopped onion and garlic, and saute for 4-5 minutes until soft and lightly golden. 2. Add chopped tomatoes and cook for 8-10 minutes on medium heat until they break down completely into a thick, jammy sauce. 3. Let the mixture cool slightly, blend it into a smooth puree, then return it to the pan along with salt and a little cream, and simmer for 5 minutes. 4. Add cubed paneer, gently stir to coat each piece in the sauce, and simmer for another 5 minutes on low heat before serving." },

{ name: "Chana Masala (Chickpea Curry)", diet: "veg", icon: "fa-seedling", color: "#ca8a04",
  ingredients: ["chickpeas", "onion", "tomato", "garlic", "ginger", "oil", "salt"],
  steps: "1. If using dried chickpeas, soak them overnight and boil until soft; if using canned, simply drain and rinse them. 2. Heat oil in a pan, add chopped onion, and cook for 5-6 minutes until deep golden brown, then add minced garlic and ginger and cook for 1 more minute. 3. Add chopped tomatoes and salt, cook for 6-8 minutes until the mixture turns thick and the raw smell disappears. 4. Add the chickpeas along with a little water, mash a few chickpeas lightly with the back of a spoon to thicken the curry, and simmer for 10 minutes before serving." },

{ name: "Dal Tadka (Lentil Curry)", diet: "veg", icon: "fa-seedling", color: "#eab308",
  ingredients: ["lentils", "onion", "tomato", "garlic", "turmeric", "oil", "salt"],
  steps: "1. Wash the lentils thoroughly, then boil them with turmeric and salt in about 3 cups of water until soft and mushy, about 20 minutes; mash lightly with a spoon or whisk. 2. In a separate small pan, heat oil, add chopped garlic, and fry until it turns light golden and fragrant. 3. Add chopped onion and cook for 3-4 minutes until soft, then add chopped tomato and cook for another 3-4 minutes until it softens. 4. Pour this tempering over the boiled lentils, mix well, simmer for 5 minutes, and serve hot." },

{ name: "Egg Curry", diet: "nonveg", icon: "fa-egg", color: "#f43f5e",
  ingredients: ["egg", "onion", "tomato", "garlic", "ginger", "oil", "salt"],
  steps: "1. Boil the eggs for 9-10 minutes, cool them in cold water, then peel and set aside. 2. Heat oil in a pan, add chopped onion, and cook until golden brown, then add minced garlic and ginger and cook for 1 minute. 3. Add chopped tomatoes and salt, cook until the mixture becomes thick and the oil separates at the edges. 4. Add a little water to form a gravy, place the boiled eggs into the curry, spoon the gravy over them, and simmer for 5-7 minutes before serving." },

{ name: "Potato Curry", diet: "veg", icon: "fa-carrot", color: "#ca8a04",
  ingredients: ["potato", "onion", "tomato", "garlic", "oil", "salt"],
  steps: "1. Peel and cube the potatoes, then boil them until just fork-tender (not falling apart) and drain. 2. Heat oil in a pan, add chopped onion and garlic, and saute for 4-5 minutes until golden. 3. Add chopped tomato and salt, cook for 5 minutes until soft and well combined. 4. Add the boiled potatoes and a splash of water, gently mix so the potatoes don't break, and simmer for 8-10 minutes so the flavors soak in before serving." },

{ name: "Palak Paneer", diet: "veg", icon: "fa-leaf", color: "#16a34a",
  ingredients: ["spinach", "paneer", "onion", "garlic", "butter", "salt"],
  steps: "1. Blanch the spinach leaves in boiling water for 2 minutes, then transfer immediately to cold water to keep the bright green color, drain, and blend into a smooth puree. 2. Melt butter in a pan, add chopped garlic and onion, and saute for 4-5 minutes until soft and golden. 3. Add the spinach puree and salt, and simmer on low heat for 6-8 minutes, stirring occasionally so it doesn't stick to the pan. 4. Add cubed paneer, gently fold it in, and simmer for another 5 minutes before serving hot." },

{ name: "Rajma (Kidney Bean Curry)", diet: "veg", icon: "fa-seedling", color: "#dc2626",
  ingredients: ["kidney beans", "onion", "tomato", "garlic", "ginger", "oil", "salt"],
  steps: "1. If using dried kidney beans, soak them overnight and boil until completely soft; if using canned, drain and rinse. 2. Heat oil in a pan, add chopped onion, and cook for 6-7 minutes until deeply golden, then add minced garlic and ginger and cook for 1 minute. 3. Add chopped tomatoes and salt, and cook for 8-10 minutes until the mixture turns thick and glossy. 4. Add the boiled kidney beans with a little of their cooking water, mash a few beans to thicken the gravy, and simmer for 15 minutes on low heat before serving." },

{ name: "Mixed Vegetable Curry", diet: "veg", icon: "fa-carrot", color: "#22c55e",
  ingredients: ["carrot", "potato", "peas", "onion", "tomato", "garlic", "oil", "salt"],
  steps: "1. Chop the carrot and potato into small, even cubes so they cook at the same rate. 2. Heat oil in a pan, add chopped onion and garlic, and saute for 4-5 minutes until soft. 3. Add chopped tomato and salt, cook until it softens, then add the carrot, potato, and peas along with a splash of water. 4. Cover and simmer on low heat for 15-18 minutes, stirring occasionally, until all the vegetables are tender, then serve hot." },

{ name: "Mushroom Masala", diet: "veg", icon: "fa-drumstick-bite", color: "#8b5cf6",
  ingredients: ["mushroom", "onion", "tomato", "garlic", "ginger", "oil", "salt"],
  steps: "1. Clean the mushrooms with a damp cloth (avoid soaking them in water) and slice them evenly. 2. Heat oil in a pan, add chopped onion, and cook until golden, then add minced garlic and ginger and cook for 1 minute. 3. Add chopped tomatoes and salt, cook until thick, then add the sliced mushrooms. 4. Cook uncovered on medium heat for 8-10 minutes, stirring occasionally, until the mushrooms soften and release their juices into the gravy, then serve hot." },

// ---------------- BREADS & SANDWICHES (10) ----------------
{ name: "Vegetable Sandwich", diet: "veg", icon: "fa-bread-slice", color: "#22c55e",
  ingredients: ["bread", "tomato", "onion", "cucumber", "butter", "salt"],
  steps: "1. Wash and thinly slice the tomato, cucumber, and onion so they layer evenly without making the sandwich soggy. 2. Lightly butter each slice of bread on one side, which acts as a barrier to keep the bread from getting wet from the vegetables. 3. Layer the tomato, cucumber, and onion slices on one piece of bread, sprinkle a pinch of salt and pepper over the top for flavor. 4. Close the sandwich with the second slice, press down gently, and cut diagonally into two triangles before serving." },

{ name: "Grilled Cheese Sandwich", diet: "veg", icon: "fa-cheese", color: "#eab308",
  ingredients: ["bread", "cheese", "butter", "salt"],
  steps: "1. Butter one side of each bread slice generously, as this side will go against the pan and needs to crisp up. 2. Place a generous layer of cheese between the two slices, with the buttered sides facing outward. 3. Heat a pan on medium-low heat and place the sandwich in it, pressing down gently with a spatula so it cooks evenly. 4. Cook for 3-4 minutes per side until golden brown and crispy on the outside and the cheese has fully melted inside, then slice and serve warm." },

{ name: "Egg Sandwich", diet: "nonveg", icon: "fa-egg", color: "#f59e0b",
  ingredients: ["egg", "bread", "onion", "butter", "salt"],
  steps: "1. Boil the eggs for 9-10 minutes, cool in cold water, peel, and chop or mash them in a bowl. 2. Mix the chopped egg with finely chopped onion, a pinch of salt, and a little butter or mayonnaise to bind the mixture together. 3. Butter both slices of bread lightly, then spread the egg mixture evenly over one slice. 4. Close the sandwich with the second slice, press gently, and cut into halves or triangles before serving." },

{ name: "Peanut Butter Banana Toast", diet: "veg", icon: "fa-bread-slice", color: "#ca8a04",
  ingredients: ["bread", "banana", "peanut butter", "honey"],
  steps: "1. Toast the bread slices until golden and crisp, either in a toaster or on a dry pan over medium heat. 2. Spread a generous layer of peanut butter evenly across each warm slice while it's still hot, so it softens slightly. 3. Slice the banana into thin rounds and arrange them neatly on top of the peanut butter. 4. Drizzle a little honey over the top for extra sweetness and serve immediately while the toast is still warm." },

{ name: "Garlic Bread", diet: "veg", icon: "fa-bread-slice", color: "#84cc16",
  ingredients: ["bread", "garlic", "butter", "salt"],
  steps: "1. Mix softened butter with finely minced garlic and a pinch of salt in a small bowl until well combined into a smooth paste. 2. Spread this garlic butter generously and evenly over each slice of bread, making sure to cover all the way to the edges. 3. Place the bread slices on a baking tray and bake in a preheated oven at 180°C (350°F) for 8-10 minutes until the edges turn golden and crisp. 4. Remove from the oven, let cool for a minute, and serve warm as a side dish." },

{ name: "Cheese Toast", diet: "veg", icon: "fa-cheese", color: "#f59e0b",
  ingredients: ["bread", "cheese", "butter", "tomato", "salt"],
  steps: "1. Butter one side of each bread slice and place them butter-side down on a baking tray or pan. 2. Top each slice with a layer of grated cheese and a few thin tomato slices, then sprinkle a pinch of salt over the top. 3. If using an oven, bake at 180°C (350°F) for 8-10 minutes until the cheese melts and bubbles; if using a pan, cover with a lid on low heat for 4-5 minutes. 4. Once the cheese is fully melted and golden in spots, remove, slice, and serve hot." },

{ name: "Club Sandwich", diet: "nonveg", icon: "fa-bread-slice", color: "#db2777",
  ingredients: ["bread", "chicken", "egg", "tomato", "onion", "butter", "salt"],
  steps: "1. Cook the chicken piece in a lightly oiled pan with a pinch of salt until fully cooked through, then slice it thinly; separately, boil and slice the egg. 2. Toast three slices of bread until golden and lightly butter each one. 3. Layer the first slice with chicken, tomato, and onion; place the second bread slice on top and layer it with sliced egg. 4. Top with the third bread slice, press down firmly, cut diagonally into quarters, and secure each piece with a toothpick before serving." },

{ name: "Avocado Toast", diet: "veg", icon: "fa-bread-slice", color: "#22c55e",
  ingredients: ["bread", "avocado", "lemon", "salt"],
  steps: "1. Toast the bread slices until golden and crisp on the outside. 2. Scoop the ripe avocado flesh into a bowl and mash it with a fork until mostly smooth but still slightly chunky. 3. Add a squeeze of fresh lemon juice and a pinch of salt to the mashed avocado, mixing well to prevent it from browning and to enhance the flavor. 4. Spread the avocado mixture generously over the warm toast and serve immediately." },

{ name: "French Toast", diet: "nonveg", icon: "fa-bread-slice", color: "#f97316",
  ingredients: ["bread", "egg", "milk", "sugar", "butter", "cinnamon"],
  steps: "1. In a wide bowl, whisk together the eggs, a splash of milk, a spoonful of sugar, and a pinch of cinnamon until well combined. 2. Dip each bread slice into the egg mixture, letting it soak for a few seconds on each side so it absorbs the liquid without falling apart. 3. Heat butter in a pan on medium heat and place the soaked bread slices in, cooking for 2-3 minutes per side until golden brown. 4. Remove from the pan and serve warm, optionally topped with a drizzle of honey or extra sugar." },

{ name: "Bruschetta", diet: "veg", icon: "fa-bread-slice", color: "#ef4444",
  ingredients: ["bread", "tomato", "garlic", "onion", "olive oil", "salt"],
  steps: "1. Slice the bread into thick pieces and toast or lightly grill them until golden and crisp on both sides. 2. While still warm, rub each slice gently with a cut clove of garlic so the surface picks up a mild garlic flavor. 3. In a bowl, mix finely chopped tomato, onion, a drizzle of olive oil, and a pinch of salt to make the topping. 4. Spoon the tomato mixture generously over each toasted slice and serve immediately before the bread softens." },

// ---------------- EGGS (10) ----------------
{ name: "Masala Omelette", diet: "nonveg", icon: "fa-egg", color: "#eab308",
  ingredients: ["egg", "onion", "tomato", "salt", "oil"],
  steps: "1. Crack the eggs into a bowl and whisk well until the yolks and whites are fully combined and slightly frothy. 2. Add finely chopped onion, tomato, and a pinch of salt to the eggs, mixing everything together. 3. Heat oil in a non-stick pan on medium heat, then pour in the egg mixture, spreading it evenly across the pan. 4. Cook for 2-3 minutes until the bottom sets and turns golden, then carefully flip and cook the other side for another 1-2 minutes before serving." },

{ name: "Egg Bhurji", diet: "nonveg", icon: "fa-egg", color: "#f97316",
  ingredients: ["egg", "onion", "tomato", "garlic", "salt", "oil"],
  steps: "1. Heat oil in a pan, add minced garlic and chopped onion, and saute for 3-4 minutes until the onion turns soft and translucent. 2. Add chopped tomato and cook for 3-4 minutes until it softens and releases its juices. 3. Crack the eggs directly into the pan and add salt, then immediately start scrambling everything together with a spatula. 4. Keep stirring and breaking up the eggs on medium heat for 3-4 minutes until fully cooked with no runny bits left, then serve hot." },

{ name: "Boiled Egg Salad", diet: "nonveg", icon: "fa-egg", color: "#0ea5e9",
  ingredients: ["egg", "cucumber", "onion", "lemon", "salt"],
  steps: "1. Boil the eggs for 9-10 minutes until fully hard-boiled, then cool them in cold water before peeling. 2. Chop the boiled eggs into small chunks and place them in a mixing bowl. 3. Add diced cucumber, finely chopped onion, a squeeze of fresh lemon juice, and a pinch of salt to the bowl. 4. Toss everything gently together until well combined and serve chilled or at room temperature." },

{ name: "Egg Curry (Dry)", diet: "nonveg", icon: "fa-egg", color: "#dc2626",
  ingredients: ["egg", "onion", "garlic", "salt", "oil"],
  steps: "1. Boil the eggs for 9-10 minutes, then cool, peel, and cut each egg in half lengthwise. 2. Heat oil in a pan, add minced garlic and chopped onion, and saute on medium heat for 5-6 minutes until deeply golden brown. 3. Add salt and a splash of water, cooking for another 2 minutes to form a thick, dry masala base. 4. Gently place the halved eggs into the pan, spoon the masala over them, and cook for 3-4 minutes on low heat before serving." },

{ name: "Scrambled Eggs", diet: "nonveg", icon: "fa-egg", color: "#f59e0b",
  ingredients: ["egg", "butter", "milk", "salt"],
  steps: "1. Crack the eggs into a bowl, add a splash of milk and a pinch of salt, and whisk until fully combined and slightly airy. 2. Melt butter in a non-stick pan on low heat, making sure it doesn't brown. 3. Pour in the egg mixture and let it sit for a few seconds, then gently push the eggs from the edges toward the center using a spatula, repeating this motion slowly. 4. Continue cooking on low heat for 3-4 minutes until the eggs are softly set but still creamy, then remove from heat immediately and serve." },

{ name: "Egg Fried Toast", diet: "nonveg", icon: "fa-egg", color: "#eab308",
  ingredients: ["egg", "bread", "milk", "salt", "butter"],
  steps: "1. Whisk the egg with a splash of milk and a pinch of salt in a shallow bowl until well combined. 2. Dip a slice of bread into the egg mixture, coating both sides evenly for a few seconds each. 3. Heat butter in a pan on medium heat and place the coated bread slice in, cooking for 2-3 minutes until golden brown on the bottom. 4. Flip carefully and cook the other side for another 2 minutes until fully golden, then serve hot." },

{ name: "Deviled Eggs", diet: "nonveg", icon: "fa-egg", color: "#f43f5e",
  ingredients: ["egg", "onion", "salt", "black pepper"],
  steps: "1. Boil the eggs for 10 minutes until fully hard-boiled, then cool in cold water and peel carefully. 2. Slice each egg in half lengthwise and gently scoop out the yolks into a separate bowl, keeping the egg whites intact. 3. Mash the yolks with finely minced onion, a pinch of salt, and black pepper until smooth and well combined. 4. Spoon or pipe the yolk mixture back into the hollow egg whites and serve chilled." },

{ name: "Egg Muffins", diet: "nonveg", icon: "fa-egg", color: "#8b5cf6",
  ingredients: ["egg", "onion", "cheese", "capsicum", "salt"],
  steps: "1. Preheat the oven to 180°C (350°F) and lightly grease a muffin tray. 2. In a bowl, whisk the eggs with salt, then stir in finely chopped onion, capsicum, and grated cheese. 3. Pour the mixture evenly into the muffin tray cups, filling each about three-quarters full. 4. Bake for 15-18 minutes until the egg muffins are puffed up and fully set in the center, then let cool slightly before removing and serving." },

{ name: "Shakshuka", diet: "nonveg", icon: "fa-egg", color: "#f97316",
  ingredients: ["egg", "tomato", "onion", "garlic", "capsicum", "oil", "salt"],
  steps: "1. Heat oil in a wide pan, add chopped onion, garlic, and capsicum, and saute for 5-6 minutes until softened. 2. Add chopped tomatoes and salt, and cook uncovered for 10-12 minutes, stirring occasionally, until the mixture reduces into a thick sauce. 3. Using a spoon, make small wells in the sauce and crack an egg into each well. 4. Cover the pan and cook on low heat for 6-8 minutes until the egg whites are set but the yolks are still slightly soft, then serve directly from the pan." },

{ name: "Egg Paratha Filling", diet: "nonveg", icon: "fa-egg", color: "#eab308",
  ingredients: ["egg", "onion", "green chili", "salt", "oil"],
  steps: "1. Whisk the eggs in a bowl with finely chopped onion, chopped green chili, and a pinch of salt. 2. Heat a little oil in a pan and pour in the egg mixture, scrambling it lightly for about 2 minutes until just cooked but still soft (it will cook further inside the paratha). 3. Roll out your dough into a flat round and place a spoonful of the egg mixture in the center. 4. Fold the edges over the filling to seal it, then flatten gently and cook on a hot griddle with a little oil on both sides until golden and crisp." },

// ---------------- SALADS (10) ----------------
{ name: "Cucumber Salad", diet: "veg", icon: "fa-leaf", color: "#16a34a",
  ingredients: ["cucumber", "tomato", "onion", "salt", "lemon"],
  steps: "1. Wash the cucumber, tomato, and onion thoroughly, then chop them into small, even bite-sized pieces. 2. Combine all the chopped vegetables together in a large mixing bowl. 3. Add a pinch of salt and a generous squeeze of fresh lemon juice over the vegetables. 4. Toss everything gently until well combined and serve immediately for the freshest crunch." },

{ name: "Chickpea Salad", diet: "veg", icon: "fa-seedling", color: "#ca8a04",
  ingredients: ["chickpeas", "cucumber", "onion", "tomato", "lemon", "salt"],
  steps: "1. Drain and rinse boiled or canned chickpeas thoroughly under cold water. 2. Dice the cucumber, tomato, and onion into small, uniform pieces. 3. Combine the chickpeas with the chopped vegetables in a large bowl. 4. Drizzle with fresh lemon juice, season with salt, toss well, and let it sit for 5 minutes before serving so the flavors blend." },

{ name: "Potato Salad", diet: "veg", icon: "fa-carrot", color: "#eab308",
  ingredients: ["potato", "onion", "yogurt", "salt", "black pepper"],
  steps: "1. Boil the potatoes with their skin on until fork-tender, then cool, peel, and cut into cubes. 2. Finely chop the onion and add it to the cooled potato cubes in a large bowl. 3. Add yogurt, salt, and black pepper to the bowl. 4. Gently fold everything together so the potatoes don't break apart, then chill in the refrigerator for 20 minutes before serving." },

{ name: "Fruit Salad", diet: "veg", icon: "fa-apple-whole", color: "#f43f5e",
  ingredients: ["banana", "apple", "orange", "honey"],
  steps: "1. Wash all the fruits thoroughly and pat them dry. 2. Peel and chop the banana, apple, and orange into similar-sized bite pieces, removing any seeds. 3. Combine all the chopped fruit together gently in a large bowl, being careful not to mash the softer pieces. 4. Drizzle honey over the top, toss lightly, and serve immediately for the freshest taste and texture." },

{ name: "Corn Salad", diet: "veg", icon: "fa-carrot", color: "#eab308",
  ingredients: ["corn", "onion", "tomato", "lemon", "salt"],
  steps: "1. If using fresh corn, boil the cobs for 8-10 minutes then cut the kernels off; if using canned corn, simply drain it. 2. Finely chop the onion and tomato and combine them with the corn kernels in a bowl. 3. Add a squeeze of fresh lemon juice and a pinch of salt over the mixture. 4. Toss everything together well and serve chilled or at room temperature." },

{ name: "Greek-Style Salad", diet: "veg", icon: "fa-leaf", color: "#22c55e",
  ingredients: ["cucumber", "tomato", "onion", "cheese", "olive oil", "salt"],
  steps: "1. Chop the cucumber and tomato into large chunks, and slice the onion thinly. 2. Combine the vegetables in a large bowl and crumble a block of cheese roughly over the top. 3. Drizzle generously with olive oil and sprinkle a pinch of salt over everything. 4. Toss very gently so the cheese doesn't break apart too much, and serve immediately." },

{ name: "Carrot & Cabbage Slaw", diet: "veg", icon: "fa-carrot", color: "#f97316",
  ingredients: ["carrot", "cabbage", "lemon", "salt"],
  steps: "1. Grate the carrot and finely shred the cabbage using a knife or grater. 2. Combine the grated carrot and shredded cabbage together in a large mixing bowl. 3. Add a squeeze of fresh lemon juice and a pinch of salt over the mixture. 4. Toss well and let it sit for 10 minutes before serving so the vegetables soften slightly and absorb the flavor." },

{ name: "Sprouts Salad", diet: "veg", icon: "fa-seedling", color: "#84cc16",
  ingredients: ["sprouts", "onion", "tomato", "lemon", "salt"],
  steps: "1. Rinse the sprouts thoroughly under running water and drain well. 2. If you prefer them slightly softer, steam the sprouts for 3-4 minutes and let them cool; otherwise use them raw for extra crunch. 3. Combine the sprouts with finely chopped onion and tomato in a bowl. 4. Add a squeeze of lemon juice and a pinch of salt, toss well, and serve fresh." },

{ name: "Tomato Onion Salad", diet: "veg", icon: "fa-leaf", color: "#ef4444",
  ingredients: ["tomato", "onion", "lemon", "salt"],
  steps: "1. Slice the tomato and onion into thin, even rounds. 2. Arrange the slices together on a plate or combine them in a bowl. 3. Squeeze fresh lemon juice evenly over the top and sprinkle with a pinch of salt. 4. Let it rest for 5 minutes before serving so the onion mellows slightly and the flavors combine." },

{ name: "Spinach Salad", diet: "veg", icon: "fa-leaf", color: "#16a34a",
  ingredients: ["spinach", "onion", "lemon", "olive oil", "salt"],
  steps: "1. Wash the spinach leaves thoroughly and pat them completely dry to avoid a watery salad. 2. Tear or roughly chop the spinach leaves into a large bowl and add thinly sliced onion. 3. Drizzle with olive oil and fresh lemon juice, then sprinkle a pinch of salt over the top. 4. Toss gently just before serving so the spinach doesn't wilt too much from sitting in the dressing." },

// ---------------- SOUPS (10) ----------------
{ name: "Tomato Soup", diet: "veg", icon: "fa-mug-hot", color: "#ef4444",
  ingredients: ["tomato", "onion", "garlic", "butter", "salt"],
  steps: "1. Heat butter in a pot, add chopped garlic and onion, and saute for 3-4 minutes until soft and fragrant. 2. Add roughly chopped tomatoes and cook for 8-10 minutes on medium heat until they break down completely and turn soft. 3. Add a cup of water, bring to a boil, then simmer for 10 minutes so the flavors combine well. 4. Let the mixture cool slightly, blend until smooth, then strain if you prefer a silky texture, reheat, season with salt, and serve hot." },

{ name: "Vegetable Soup", diet: "veg", icon: "fa-mug-hot", color: "#22c55e",
  ingredients: ["carrot", "peas", "onion", "garlic", "tomato", "salt"],
  steps: "1. Heat a little oil in a pot, add chopped garlic and onion, and saute for 2-3 minutes until soft. 2. Add diced carrot, peas, and chopped tomato, stirring for 2 minutes to combine. 3. Add about 3 cups of water and bring the mixture to a boil. 4. Reduce heat and simmer for 15-20 minutes until all the vegetables are tender, season with salt, and serve hot." },

{ name: "Sweet Corn Soup", diet: "veg", icon: "fa-mug-hot", color: "#eab308",
  ingredients: ["corn", "onion", "garlic", "flour", "butter", "salt"],
  steps: "1. Melt butter in a pot, add chopped garlic and onion, and saute for 2-3 minutes until soft. 2. Add corn kernels and cook for 3-4 minutes, then add a spoonful of flour and stir continuously for a minute to remove the raw taste. 3. Slowly pour in about 3 cups of water while stirring constantly to avoid lumps, then bring to a gentle boil. 4. Simmer for 10-12 minutes until slightly thickened, season with salt, and serve hot." },

{ name: "Lentil Soup", diet: "veg", icon: "fa-mug-hot", color: "#ca8a04",
  ingredients: ["lentils", "onion", "garlic", "tomato", "turmeric", "salt"],
  steps: "1. Rinse the lentils well, then add them to a pot with water, turmeric, and salt, and boil for 20 minutes until fully soft. 2. In a separate small pan, heat a little oil and saute chopped garlic and onion until golden. 3. Add chopped tomato to this pan and cook for 3-4 minutes until softened. 4. Pour this mixture into the boiled lentils, stir well, simmer for 5 more minutes, and serve hot." },

{ name: "Chicken Soup", diet: "nonveg", icon: "fa-drumstick-bite", color: "#dc2626",
  ingredients: ["chicken", "onion", "garlic", "carrot", "salt", "black pepper"],
  steps: "1. Place chicken pieces, chopped onion, garlic, and carrot into a large pot with about 4 cups of water. 2. Bring to a boil, then reduce heat and simmer gently for 30-35 minutes until the chicken is fully cooked and tender, skimming off any foam that rises to the top. 3. Remove the chicken pieces, shred the meat with two forks, and discard the bones. 4. Return the shredded chicken to the pot, season with salt and black pepper, simmer for 5 more minutes, and serve hot." },

{ name: "Mushroom Soup", diet: "veg", icon: "fa-mug-hot", color: "#8b5cf6",
  ingredients: ["mushroom", "onion", "garlic", "butter", "milk", "salt"],
  steps: "1. Melt butter in a pot, add chopped garlic and onion, and saute for 2-3 minutes until soft. 2. Add sliced mushrooms and cook for 5-6 minutes until they soften and release their liquid. 3. Add a cup of water and simmer for 10 minutes, then blend the mixture until smooth. 4. Return to the pot, stir in a splash of milk and salt, gently reheat without boiling, and serve warm." },

{ name: "Spinach Soup", diet: "veg", icon: "fa-mug-hot", color: "#16a34a",
  ingredients: ["spinach", "onion", "garlic", "butter", "salt"],
  steps: "1. Wash the spinach leaves thoroughly to remove any grit or dirt. 2. Melt butter in a pot, add chopped garlic and onion, and saute for 2-3 minutes until soft. 3. Add the spinach leaves and a cup of water, and cook for 5-6 minutes until the spinach wilts completely. 4. Blend the mixture until smooth, return to the pot, season with salt, reheat gently, and serve hot." },

{ name: "Pumpkin Soup", diet: "veg", icon: "fa-mug-hot", color: "#f97316",
  ingredients: ["onion", "garlic", "butter", "milk", "salt"],
  steps: "1. Peel and cube the pumpkin (or squash), then boil it in water until completely soft, about 15 minutes. 2. In a separate pot, melt butter and saute chopped garlic and onion for 2-3 minutes until soft. 3. Drain the boiled pumpkin, add it to the pot with the onion and garlic, and blend everything together until smooth (add a little of the cooking water if needed). 4. Stir in a splash of milk and salt, reheat gently on low heat, and serve warm." },

{ name: "Garlic Soup", diet: "veg", icon: "fa-mug-hot", color: "#f59e0b",
  ingredients: ["garlic", "onion", "butter", "flour", "salt"],
  steps: "1. Melt butter in a pot on low heat, add a generous amount of thinly sliced garlic and chopped onion. 2. Cook slowly for 6-8 minutes, stirring often, until the garlic turns soft and golden but not browned or bitter. 3. Sprinkle in a spoonful of flour and stir for a minute, then slowly pour in about 3 cups of water while whisking to avoid lumps. 4. Bring to a gentle boil, simmer for 10 minutes, season with salt, and serve hot." },

{ name: "Carrot Soup", diet: "veg", icon: "fa-carrot", color: "#f97316",
  ingredients: ["carrot", "onion", "garlic", "butter", "salt"],
  steps: "1. Peel and chop the carrots into small pieces so they cook faster and evenly. 2. Melt butter in a pot, add chopped garlic and onion, and saute for 2-3 minutes until soft. 3. Add the chopped carrots and about 3 cups of water, bring to a boil, then simmer for 15-18 minutes until the carrots are completely soft. 4. Blend the mixture until smooth, return to the pot, season with salt, reheat, and serve warm." },

// ---------------- SNACKS (10) ----------------
{ name: "Potato Fry", diet: "veg", icon: "fa-carrot", color: "#ca8a04",
  ingredients: ["potato", "onion", "salt", "oil"],
  steps: "1. Peel the potatoes and cut them into small, even cubes so they cook uniformly. 2. Heat oil in a pan on medium heat, add chopped onion, and fry for 2-3 minutes until it starts to soften. 3. Add the potato cubes and salt, stir well to coat evenly, then cover and cook on medium-low heat for 12-15 minutes, stirring occasionally. 4. Uncover and cook for a final 3-4 minutes on slightly higher heat, stirring gently, until the potatoes turn golden and crisp on the edges." },

{ name: "Aloo Tikki (Potato Patties)", diet: "veg", icon: "fa-carrot", color: "#eab308",
  ingredients: ["potato", "green chili", "salt", "oil"],
  steps: "1. Boil the potatoes until fully soft, then peel and mash them thoroughly in a bowl with no lumps remaining. 2. Add finely chopped green chili and salt to the mashed potato, mixing well to combine evenly. 3. Divide the mixture into equal portions and shape each one into a flat, round patty using your palms. 4. Heat oil in a pan and shallow-fry each patty for 3-4 minutes per side until golden brown and crisp on both sides." },

{ name: "Vegetable Cutlet", diet: "veg", icon: "fa-carrot", color: "#22c55e",
  ingredients: ["potato", "carrot", "peas", "bread crumbs", "salt", "oil"],
  steps: "1. Boil the potatoes, carrot, and peas together until soft, then mash them all together in a large bowl. 2. Add salt and mix well, then shape the mixture into small oval or round patties. 3. Roll each patty in bread crumbs to coat it evenly on all sides, pressing gently so the crumbs stick. 4. Heat oil in a pan and shallow-fry the cutlets for 3-4 minutes per side until golden and crisp, then drain and serve hot." },

{ name: "Cheese Balls", diet: "veg", icon: "fa-cheese", color: "#f59e0b",
  ingredients: ["cheese", "flour", "bread crumbs", "salt", "oil"],
  steps: "1. Grate the cheese into a bowl and mix in a spoonful of flour and a pinch of salt until it forms a soft, workable dough. 2. Divide the mixture into small equal portions and roll each one into a smooth ball between your palms. 3. Roll each ball in bread crumbs, pressing gently so the coating sticks evenly all around. 4. Heat oil for deep frying on medium heat and fry the balls in batches for 2-3 minutes, turning occasionally, until golden brown and crisp on the outside." },

{ name: "Corn Fritters", diet: "veg", icon: "fa-carrot", color: "#eab308",
  ingredients: ["corn", "flour", "onion", "green chili", "salt", "oil"],
  steps: "1. In a bowl, combine corn kernels, flour, finely chopped onion, chopped green chili, and salt. 2. Add a small splash of water gradually, mixing until it forms a thick batter that holds together when spooned. 3. Heat oil in a pan on medium heat and drop spoonfuls of the batter into the hot oil, flattening slightly with the back of the spoon. 4. Fry for 2-3 minutes per side until golden brown and cooked through, then drain on a paper towel and serve hot." },

{ name: "Banana Chips", diet: "veg", icon: "fa-carrot", color: "#eab308",
  ingredients: ["banana", "oil", "salt"],
  steps: "1. Choose slightly raw (green) bananas, peel them carefully, and slice them into very thin, even rounds using a sharp knife or mandolin. 2. Soak the slices in salted water for 10 minutes to prevent browning and add flavor, then pat them completely dry. 3. Heat oil for deep frying on medium heat and carefully add the banana slices in a single layer, without overcrowding the pan. 4. Fry for 3-4 minutes, stirring occasionally, until golden and crisp, then drain on a paper towel, sprinkle with a little extra salt, and let cool before serving." },

{ name: "Masala Peanuts", diet: "veg", icon: "fa-seedling", color: "#ca8a04",
  ingredients: ["onion", "tomato", "lemon", "salt", "oil"],
  steps: "1. Roast raw peanuts in a dry pan on medium-low heat for 8-10 minutes, stirring frequently, until they turn golden and fragrant, then let them cool. 2. In a bowl, combine the roasted peanuts with finely chopped onion and tomato. 3. Add a squeeze of fresh lemon juice and a pinch of salt over the mixture. 4. Toss everything together well and serve immediately while the peanuts are still crunchy." },

{ name: "Bread Pakora", diet: "veg", icon: "fa-bread-slice", color: "#f97316",
  ingredients: ["bread", "flour", "onion", "green chili", "salt", "oil"],
  steps: "1. In a bowl, mix flour with water, chopped onion, chopped green chili, and salt to form a smooth, thick batter. 2. Cut the bread slices diagonally into triangles or halves. 3. Dip each bread piece into the batter, making sure it's fully and evenly coated on all sides. 4. Heat oil for deep frying and fry the coated bread pieces for 2-3 minutes per side until golden and crisp, then drain and serve hot." },

{ name: "Paneer Tikka", diet: "veg", icon: "fa-cheese", color: "#dc2626",
  ingredients: ["paneer", "capsicum", "onion", "yogurt", "salt", "oil"],
  steps: "1. Cut the paneer, capsicum, and onion into similar-sized cubes so they cook evenly together. 2. In a bowl, mix yogurt with salt and a little oil to make a marinade, then add the paneer and vegetable cubes, tossing gently to coat everything well. 3. Let the mixture marinate for at least 20 minutes (longer if time allows) so the flavors soak in. 4. Thread the paneer and vegetables onto skewers and grill or pan-fry on medium-high heat for 8-10 minutes, turning occasionally, until lightly charred on the edges." },

{ name: "Chicken Nuggets (Homemade)", diet: "nonveg", icon: "fa-drumstick-bite", color: "#f43f5e",
  ingredients: ["chicken", "flour", "bread crumbs", "egg", "salt", "oil"],
  steps: "1. Cut the chicken into small, bite-sized pieces and season with a pinch of salt. 2. Set up three shallow bowls: one with flour, one with a beaten egg, and one with bread crumbs. 3. Coat each chicken piece first in flour, then dip it in the beaten egg, and finally roll it in bread crumbs until fully covered. 4. Heat oil in a pan and shallow-fry the coated chicken pieces for 3-4 minutes per side until golden brown and cooked through, then drain and serve hot." },

// ---------------- PASTA & NOODLES (10) ----------------
{ name: "Vegetable Noodles", diet: "veg", icon: "fa-bowl-food", color: "#22c55e",
  ingredients: ["noodles", "carrot", "cabbage", "onion", "soy sauce", "oil"],
  steps: "1. Boil the noodles according to the package instructions until just tender, then drain and toss with a little oil to prevent sticking. 2. Heat oil in a wok on high heat, add thinly sliced onion, carrot, and cabbage, and stir-fry for 3-4 minutes until slightly softened but still crunchy. 3. Add the boiled noodles to the wok along with soy sauce. 4. Toss everything together on high heat for 2-3 minutes so the noodles pick up the sauce and vegetable flavors, then serve immediately." },

{ name: "White Sauce Pasta", diet: "veg", icon: "fa-bowl-food", color: "#0ea5e9",
  ingredients: ["pasta", "milk", "flour", "butter", "cheese", "salt"],
  steps: "1. Boil the pasta in salted water according to package instructions until al dente, then drain and set aside. 2. Melt butter in a pan on low heat, add flour, and whisk continuously for 1-2 minutes to cook off the raw taste without browning. 3. Slowly pour in milk while whisking constantly to avoid lumps, and cook for 4-5 minutes until the sauce thickens. 4. Stir in grated cheese and salt until melted and smooth, then add the boiled pasta, toss well to coat, and serve hot." },

{ name: "Tomato Pasta", diet: "veg", icon: "fa-bowl-food", color: "#ef4444",
  ingredients: ["pasta", "tomato", "garlic", "onion", "oil", "salt"],
  steps: "1. Boil the pasta in salted water until al dente, then drain, reserving a little of the pasta water. 2. Heat oil in a pan, add chopped garlic and onion, and saute for 2-3 minutes until fragrant. 3. Add chopped tomatoes and salt, and cook for 10-12 minutes on medium heat, mashing occasionally, until it turns into a thick, smooth sauce. 4. Add the boiled pasta to the sauce, along with a splash of the reserved pasta water if needed, toss well, and serve hot." },

{ name: "Cheese Macaroni", diet: "veg", icon: "fa-cheese", color: "#eab308",
  ingredients: ["pasta", "cheese", "butter", "milk", "salt"],
  steps: "1. Boil macaroni pasta in salted water until fully tender, then drain well. 2. Melt butter in a pan on low heat and stir in a splash of milk. 3. Add grated cheese and salt, stirring continuously until the cheese melts completely into a smooth, creamy sauce. 4. Add the boiled macaroni to the cheese sauce, mix well until every piece is coated, and serve hot." },

{ name: "Garlic Noodles", diet: "veg", icon: "fa-bowl-food", color: "#84cc16",
  ingredients: ["noodles", "garlic", "soy sauce", "oil", "salt"],
  steps: "1. Boil the noodles according to package instructions until tender, then drain and toss with a little oil to keep them from sticking together. 2. Heat oil in a pan on medium heat, add a generous amount of minced garlic, and saute for 1-2 minutes until fragrant and lightly golden (watch closely so it doesn't burn). 3. Add the boiled noodles to the pan along with soy sauce and a pinch of salt. 4. Toss everything together on medium-high heat for 2-3 minutes so the noodles absorb the garlic flavor evenly, then serve hot." },

{ name: "Chicken Pasta", diet: "nonveg", icon: "fa-drumstick-bite", color: "#dc2626",
  ingredients: ["pasta", "chicken", "garlic", "onion", "cream", "salt", "oil"],
  steps: "1. Boil the pasta in salted water until al dente, then drain and set aside. 2. Cut chicken into small strips, season with salt, and cook in a hot oiled pan for 5-6 minutes until fully cooked and lightly golden, then remove and set aside. 3. In the same pan, add chopped garlic and onion, saute for 2-3 minutes, then pour in a little cream and simmer for 3-4 minutes until slightly thickened. 4. Add the cooked chicken and boiled pasta to the sauce, toss well to combine, and serve hot." },

{ name: "Spaghetti Aglio e Olio", diet: "veg", icon: "fa-bowl-food", color: "#f59e0b",
  ingredients: ["pasta", "garlic", "olive oil", "salt"],
  steps: "1. Boil the spaghetti in salted water until al dente, then drain, reserving a small cup of the pasta water. 2. While the pasta cooks, heat olive oil in a pan on low heat and add thinly sliced garlic, cooking slowly for 3-4 minutes until golden and fragrant but not burnt. 3. Add the drained spaghetti directly into the pan with the garlic oil, along with a splash of the reserved pasta water. 4. Toss everything together on low heat for 1-2 minutes so the pasta absorbs the garlic oil evenly, season with salt, and serve immediately." },

{ name: "Vegetable Chowmein", diet: "veg", icon: "fa-bowl-food", color: "#22c55e",
  ingredients: ["noodles", "cabbage", "carrot", "onion", "soy sauce", "oil"],
  steps: "1. Boil the noodles until just tender, then drain and rinse briefly under cold water to stop them from cooking further. 2. Heat oil in a wok on high heat, add thinly sliced onion, cabbage, and carrot, and stir-fry for 3-4 minutes until slightly softened but still crunchy. 3. Add the boiled noodles and soy sauce to the wok. 4. Toss everything together vigorously on high heat for 3-4 minutes so the noodles get a slight char and absorb the flavors, then serve hot." },

{ name: "Pesto Pasta", diet: "veg", icon: "fa-bowl-food", color: "#16a34a",
  ingredients: ["pasta", "basil", "garlic", "olive oil", "cheese", "salt"],
  steps: "1. Boil the pasta in salted water until al dente, then drain, reserving a little pasta water. 2. In a blender, combine fresh basil leaves, garlic, olive oil, grated cheese, and a pinch of salt, and blend until it forms a smooth, thick paste. 3. Toss the boiled pasta with the pesto sauce in a large bowl, adding a splash of the reserved pasta water to help it coat evenly. 4. Mix well until every strand is coated in green pesto sauce, and serve immediately at room temperature or slightly warm." },

{ name: "Egg Noodles", diet: "nonveg", icon: "fa-egg", color: "#f59e0b",
  ingredients: ["noodles", "egg", "onion", "soy sauce", "oil"],
  steps: "1. Boil the noodles until just tender, then drain and set aside. 2. Heat oil in a wok, crack in the eggs, and scramble them quickly into small pieces, then push them to one side of the wok. 3. Add chopped onion to the empty space and stir-fry for 2 minutes until softened. 4. Add the boiled noodles and soy sauce, mix everything together including the scrambled egg, toss on high heat for 2-3 minutes, and serve hot." },

// ---------------- BREAKFAST (10) ----------------
{ name: "Vegetable Poha", diet: "veg", icon: "fa-bowl-rice", color: "#eab308",
  ingredients: ["poha", "onion", "peas", "mustard seeds", "curry leaves", "oil", "salt"],
  steps: "1. Rinse the flattened rice (poha) briefly under water in a strainer, just enough to soften it slightly, then set aside to drain (avoid soaking it too long or it will turn mushy). 2. Heat oil in a pan, add mustard seeds and let them splutter, then add curry leaves and chopped onion, sauteing for 3-4 minutes until the onion softens. 3. Add peas and a pinch of turmeric, cooking for 2 minutes. 4. Add the drained poha and salt, mix gently on low heat for 2-3 minutes until warmed through and well combined, then serve hot." },

{ name: "Upma", diet: "veg", icon: "fa-bowl-rice", color: "#ca8a04",
  ingredients: ["semolina", "onion", "mustard seeds", "curry leaves", "oil", "salt"],
  steps: "1. Dry roast the semolina in a pan on low heat for 4-5 minutes, stirring constantly, until it turns light golden and fragrant, then remove and set aside. 2. In the same pan, heat oil, add mustard seeds until they splutter, then add curry leaves and chopped onion, sauteing for 3 minutes until soft. 3. Add about 2 cups of water and salt to the pan, and bring it to a rolling boil. 4. Slowly pour in the roasted semolina while stirring continuously to avoid lumps, then cover and cook on low heat for 3-4 minutes until thickened, and serve hot." },

{ name: "Pancakes", diet: "nonveg", icon: "fa-cookie", color: "#f59e0b",
  ingredients: ["flour", "egg", "milk", "sugar", "butter"],
  steps: "1. In a large bowl, whisk together flour, sugar, and a pinch of salt. 2. In a separate bowl, whisk the egg and milk together, then pour this into the dry ingredients, mixing gently until just combined (a few small lumps are fine). 3. Heat a lightly buttered pan on medium-low heat and pour a small ladle of batter into the center, spreading slightly into a round shape. 4. Cook for 2-3 minutes until bubbles form on the surface, then flip and cook the other side for 1-2 minutes until golden, repeating with the remaining batter." },

{ name: "Overnight Oats", diet: "veg", icon: "fa-cookie", color: "#ca8a04",
  ingredients: ["oats", "milk", "honey", "banana"],
  steps: "1. In a jar or bowl, combine oats with milk in roughly equal parts, stirring well to make sure the oats are fully submerged. 2. Add a spoonful of honey and mix it through. 3. Cover and refrigerate overnight (or for at least 4 hours) so the oats soften and absorb the milk. 4. Before serving, slice a banana on top and stir gently, adding a little extra milk if it seems too thick." },

{ name: "Banana Smoothie Bowl", diet: "veg", icon: "fa-blender", color: "#eab308",
  ingredients: ["banana", "milk", "honey", "oats"],
  steps: "1. Peel and slice a ripe banana, then freeze the slices for at least 2 hours for a thicker, creamier texture (fresh banana also works if you're short on time). 2. Blend the frozen banana slices with a splash of milk and a spoonful of honey until smooth and thick, adding milk gradually to control the consistency. 3. Pour the blended mixture into a bowl. 4. Top with a sprinkle of oats and any extra fruit slices you like, then serve immediately with a spoon." },

{ name: "Bread Omelette", diet: "nonveg", icon: "fa-egg", color: "#f97316",
  ingredients: ["egg", "bread", "onion", "salt", "oil"],
  steps: "1. Whisk the eggs in a bowl with finely chopped onion and a pinch of salt until well combined. 2. Heat oil in a pan on medium heat and pour in the egg mixture, spreading it into a shape roughly the size of your bread slices. 3. Once the bottom sets (about 2 minutes), place a bread slice directly on top of the cooking egg, pressing down gently so it sticks. 4. Carefully flip the whole thing so the bread side is now down, cook for another 1-2 minutes until the egg is fully cooked, then serve warm." },

{ name: "Idli (Simple Version)", diet: "veg", icon: "fa-bowl-rice", color: "#0ea5e9",
  ingredients: ["rice", "lentils", "salt"],
  steps: "1. Soak rice and lentils separately in water for at least 5-6 hours, then drain and grind each into a smooth batter, adding a little water as needed. 2. Combine both batters together in a large bowl, add salt, and mix well; let the combined batter ferment in a warm place for 8-10 hours or overnight until it rises and turns slightly bubbly. 3. Grease the idli mould cups lightly and pour the fermented batter into each, filling about three-quarters full. 4. Steam in an idli steamer or a large covered pot with a little water at the bottom for 10-12 minutes until a toothpick inserted comes out clean, then serve hot." },

{ name: "Aloo Paratha", diet: "veg", icon: "fa-bread-slice", color: "#ca8a04",
  ingredients: ["potato", "flour", "green chili", "salt", "oil"],
  steps: "1. Boil the potatoes until soft, then peel and mash thoroughly, mixing in chopped green chili and salt. 2. Make a soft dough with flour and water, then divide it into balls and roll each into a small circle. 3. Place a spoonful of the potato mixture in the center of one circle, fold the edges up to seal it completely, then flatten gently and roll it out again into a slightly larger, thin circle. 4. Cook on a hot griddle with a little oil on both sides for 2-3 minutes each, pressing gently with a spatula, until golden brown spots appear, then serve hot." },

{ name: "Cornflakes with Milk", diet: "veg", icon: "fa-bowl-food", color: "#eab308",
  ingredients: ["milk", "honey", "banana"],
  steps: "1. Pour cornflakes into a bowl in your desired serving amount. 2. Slice a fresh banana and add it on top of the cornflakes. 3. Pour cold milk over the cornflakes and banana until they are just covered. 4. Drizzle a little honey on top for sweetness and serve immediately before the cornflakes lose their crunch." },

{ name: "Fruit Yogurt Bowl", diet: "veg", icon: "fa-blender", color: "#0ea5e9",
  ingredients: ["yogurt", "banana", "apple", "honey"],
  steps: "1. Spoon fresh yogurt into a serving bowl as the base. 2. Chop the banana and apple into small, bite-sized pieces. 3. Arrange the chopped fruit over the yogurt. 4. Drizzle honey over the top and serve immediately, mixing lightly just before eating." },

// ---------------- DESSERTS & DRINKS (10) ----------------
{ name: "Banana Milkshake", diet: "veg", icon: "fa-blender", color: "#eab308",
  ingredients: ["banana", "milk", "sugar"],
  steps: "1. Peel a ripe banana and break it into smaller chunks for easier blending. 2. Add the banana chunks to a blender along with cold milk and a spoonful of sugar. 3. Blend on high speed for 1-2 minutes until completely smooth and frothy. 4. Pour into a glass and serve immediately while cold." },

{ name: "Fruit Custard", diet: "veg", icon: "fa-ice-cream", color: "#f97316",
  ingredients: ["milk", "sugar", "banana", "apple"],
  steps: "1. Heat milk in a saucepan on medium heat until it just begins to simmer, then add sugar and stir until dissolved. 2. If using custard powder, mix a spoonful with a little cold milk to form a smooth paste, then stir it into the hot milk, cooking for 3-4 minutes until it thickens slightly. 3. Remove from heat and let the custard cool completely to room temperature. 4. Chop banana and apple into small pieces, fold them into the cooled custard, and refrigerate for at least 30 minutes before serving." },

{ name: "Chocolate Oats Balls", diet: "veg", icon: "fa-cookie", color: "#7c3aed",
  ingredients: ["oats", "chocolate", "honey", "peanut butter"],
  steps: "1. Melt the chocolate gently either in a microwave in short bursts or over a double boiler, stirring until smooth. 2. In a bowl, combine oats, a spoonful of peanut butter, and honey, mixing well until it starts to bind together. 3. Add the melted chocolate to the mixture and stir thoroughly until everything is evenly coated. 4. Roll the mixture into small balls using your palms and refrigerate for at least 30 minutes until firm before serving." },

{ name: "Rice Kheer", diet: "veg", icon: "fa-bowl-rice", color: "#f59e0b",
  ingredients: ["rice", "milk", "sugar", "cardamom"],
  steps: "1. Wash the rice and cook it with a little water until just soft, then set aside. 2. In a heavy-bottomed pot, bring milk to a gentle boil, then reduce heat to low and simmer, stirring occasionally to prevent it from sticking or burning. 3. Add the cooked rice to the simmering milk and continue cooking on low heat for 20-25 minutes, stirring frequently, until the mixture thickens and the rice is very soft. 4. Add sugar and a pinch of crushed cardamom, stir well, simmer for 5 more minutes, and serve warm or chilled." },

{ name: "Curd with Honey", diet: "veg", icon: "fa-ice-cream", color: "#0ea5e9",
  ingredients: ["yogurt", "honey"],
  steps: "1. Spoon fresh, chilled yogurt into a serving bowl. 2. Whisk it lightly with a spoon for a few seconds to make it smooth and creamy. 3. Drizzle a generous amount of honey evenly over the top. 4. Serve immediately, mixing the honey through just before eating." },

{ name: "Banana Pancake", diet: "nonveg", icon: "fa-cookie", color: "#eab308",
  ingredients: ["banana", "flour", "egg", "milk", "sugar"],
  steps: "1. Mash a ripe banana thoroughly in a bowl until smooth with no large lumps. 2. Add flour, an egg, a splash of milk, and a spoonful of sugar to the mashed banana, whisking until you get a smooth, pourable batter. 3. Heat a lightly greased pan on medium-low heat and pour a small amount of batter to form a round pancake. 4. Cook for 2-3 minutes until bubbles form on top, flip, and cook the other side for another 1-2 minutes until golden, then serve warm." },

{ name: "Apple Cinnamon Oats", diet: "veg", icon: "fa-cookie", color: "#ca8a04",
  ingredients: ["oats", "apple", "milk", "cinnamon", "honey"],
  steps: "1. Chop the apple into small cubes, leaving the skin on for extra texture and nutrition. 2. In a saucepan, combine oats with milk and bring to a gentle simmer on medium-low heat, stirring occasionally. 3. Add the chopped apple and a pinch of cinnamon, cooking for 5-6 minutes until the oats are soft and creamy and the apple has softened slightly. 4. Remove from heat, drizzle with honey, and serve warm." },

{ name: "Peanut Butter Banana Smoothie", diet: "veg", icon: "fa-blender", color: "#ca8a04",
  ingredients: ["banana", "peanut butter", "milk", "honey"],
  steps: "1. Peel a ripe banana and break it into chunks. 2. Add the banana to a blender along with a spoonful of peanut butter, cold milk, and a little honey. 3. Blend on high speed for 1-2 minutes until completely smooth and creamy, adding more milk if it's too thick. 4. Pour into a glass and serve immediately while chilled." },

{ name: "Chocolate Milkshake", diet: "veg", icon: "fa-blender", color: "#7c3aed",
  ingredients: ["milk", "chocolate", "sugar"],
  steps: "1. Break the chocolate into small pieces to help it blend more easily. 2. Add the chocolate pieces to a blender along with cold milk and a spoonful of sugar. 3. Blend on high speed for 1-2 minutes until the chocolate is fully incorporated and the mixture is smooth and frothy. 4. Pour into a glass and serve immediately, chilled." },

{ name: "Sweet Lassi", diet: "veg", icon: "fa-blender", color: "#eab308",
  ingredients: ["yogurt", "sugar", "milk"],
  steps: "1. Add fresh yogurt to a blender along with a splash of milk to loosen the texture. 2. Add a few spoonfuls of sugar depending on how sweet you'd like it. 3. Blend on high speed for 1-2 minutes until smooth and frothy, adding more milk if it's too thick. 4. Pour into a glass, chill in the refrigerator for a few minutes if possible, and serve cold." }

];
