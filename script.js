const recipes = {
    pancakes: {
        title: "Fluffy Pancakes",
        ingredients: [
            "1 cup flour",
            "1 cup milk",
            "1 egg",
            "2 tablespoons sugar",
            "1 teaspoon baking powder",
            "2 tablespoons butter"
        ],
        instructions:
            "Mix all ingredients in a bowl. Heat a pan and add some butter. Pour the batter into the pan and cook until golden brown on both sides."
    },

    salad: {
        title: "Healthy Salad",
        ingredients: [
            "Lettuce",
            "Tomatoes",
            "Cucumber",
            "Onion",
            "Olive oil",
            "Salt and pepper"
        ],
        instructions:
            "Wash and chop the vegetables. Put everything into a bowl, add olive oil, salt and pepper, and mix well."
    },

    cake: {
        title: "Chocolate Cake",
        ingredients: [
            "1 cup flour",
            "1 cup sugar",
            "1/2 cup cocoa powder",
            "2 eggs",
            "1/2 cup milk",
            "1 teaspoon baking powder"
        ],
        instructions:
            "Mix the dry ingredients together. Add eggs and milk and mix well. Pour into a baking pan and bake at 180°C for about 30 minutes."
    }
};


function showRecipe(recipeName) {
    const recipe = recipes[recipeName];

    document.getElementById("modalTitle").textContent = recipe.title;

    const ingredientsList = document.getElementById("ingredients");

    ingredientsList.innerHTML = "";

    recipe.ingredients.forEach(function(ingredient) {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    document.getElementById("instructions").textContent =
        recipe.instructions;

    document.getElementById("recipeModal").style.display = "flex";
}


function closeRecipe() {
    document.getElementById("recipeModal").style.display = "none";
}


function filterRecipes(category) {
    const cards = document.querySelectorAll(".recipe-card");

    cards.forEach(function(card) {
        if (
            category === "all" ||
            card.dataset.category === category
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


document
    .getElementById("searchInput")
    .addEventListener("input", function() {

        const searchText = this.value.toLowerCase();
        const cards = document.querySelectorAll(".recipe-card");

        cards.forEach(function(card) {

            const title = card
                .querySelector("h2")
                .textContent
                .toLowerCase();

            if (title.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
