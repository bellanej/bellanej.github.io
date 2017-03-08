//this function randomly selects a recipe in nodelist and displays it
function showRecipe() {
  var recipes = this.querySelectorAll(".hiddenRecipe");
  var randomRecipes = recipes[Math.floor(Math.random() * recipes.length)];
  document.getElementById("slumpedRecipe").innerHTML = randomRecipes.innerHTML;      
}
//this loops makes each recipesDiv clickable
var recipeClick = document.querySelectorAll(".recipe");
for (var i = 0; i < recipeClick.length; i++) {
  recipeClick[i].addEventListener("click", showRecipe);
}
