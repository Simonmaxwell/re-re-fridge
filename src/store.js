import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

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
    	const APIKEY = "f164427952ade2ca59a10717ddb7ecc2";
    	const APPID =  "1a6c0d8f";
    	const URL = "https://api.edamam.com/search";

  		axios.get(URL, {
  			params: {
  			app_id: APPID,
            app_key: APIKEY,
            from: 0,
            to: 50,
            q: query

  			}
  		})
  		.then(function (response) {
  			console.log(response);
  		})
  		.catch(function (error) {
  			console.log(error);
  		})
  		.finally(function () {
  			// always executed
  		});

  	}
  }
});
