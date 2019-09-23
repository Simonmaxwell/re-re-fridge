const createRecipeObjects = (response, state) => {
	var recipes = [];
	for( let i = 0; i < response.hits.length; i++) {
		let ingredientListItems = [];
		for( let k = 0; k < response.hits[i].recipe.ingredientLines.length; k++) {
			ingredientListItems.push(response.hits[i].recipe.ingredientLines[k]);
		}
		recipes.push({
			recipeUrl: response.hits[i].recipe.url,
			recipeImageUrl: response.hits[i].recipe.image,
			recipeName: response.hits[i].recipe.label,
			listOfIngredients: ingredientListItems
		});
	}
	recipeFilter(recipes);
}

const recipeFilter = (recipes) => {
	let goodRecipes = [];
	let recipeValidity = true;
	for (let i = 0; i < recipes.length; i++) {
		for (let k = 0; k < recipes[i].listOfIngredients.length; k++) {
			for ( let j = 0; j < nongredients.length; j++) {
				if (recipes[i].listOfIngredients[k].indexOf(nongredients[j]) != -1) {
					recipeValidity = false;
				};
			};
		};
		if (recipeValidity) {
			goodRecipes.push(recipes[i]);
		}
	};
	return goodRecipes;
};

export default createRecipeObjects;