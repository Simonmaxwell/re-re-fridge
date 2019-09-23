import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { 
  	appState: "WelcomeScreen", 
  	desiredIngredients: [], 
  	repulsiveIngredients: [], 
  	resultRecipes: []
  },
  mutations: {},
  actions: {
  	findRecipesFromIngredients({commit, state}) {

  	}
  }
});
