fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
.then(res => res.json())
.then(data => displayMeals(data.meals));



function displayMeals(meals){
    const mainDiv = document.getElementById('meals');
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        const mealInfo = `
        <img class="meal-img" src="${meal.strMealThumb}">
        <h3> ${meal.strMeal} </h3>
        <button onclick="displayFullMeal('${meal.idMeal}')" > Details</button>
        `
        mealDiv.innerHTML = mealInfo;
        mainDiv.appendChild(mealDiv);
    });
}

function displayFullMeal(id){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => displayMeal(data.meals[0]));
}

function displayMeal(meal){
        const mealDiv = document.getElementById('info');
        const thumb = document.getElementById('thumb');
        mealDiv.className = 'meal';

        const mealThumb = `
        <img class="meal-img" src="${meal.strMealThumb}">
        `
        const mealInfo = `
        <h3> Name: ${meal.strMeal} </h3>
        <p> Category : ${meal.strCategory} </p>
        <p> Area : ${meal.strArea} </p>
        <h4> Ingredients: </h4> <br>
        <span> 1:  ${meal.strIngredient1} </span>
        <span> 2: ${meal.strIngredient2} </span>
        <span> 3: ${meal.strIngredient3} </span>
        <span> 4: ${meal.strIngredient4} </span>
        <span> 5: ${meal.strIngredient5} </span>
        <span> 6: ${meal.strIngredient6} </span>
        <span> 7: ${meal.strIngredient7} </span>
        `
        mealDiv.innerHTML = mealInfo;
        thumb.innerHTML = mealThumb;
        
}


document.getElementById('searchBtn').addEventListener('click', function(){
    const foodName = document.getElementById('searchInput').value;
    getMeals(foodName);
});


function getMeals(foodName){
    const link = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
    fetch(link)
    .then(res => res.json())
    .then(result => showSearchResult(result.meals[0]));


}

function showSearchResult(result){
    document.getElementById('meals').style.display = "none";
    const mainDiv = document.getElementById('search-result');
    // console.log(result);
    const mealDiv = document.getElementById('srcResult');
        mealDiv.className = 'meal';
        const mealInfo = `
        <img class="meal-img" src="${result.strMealThumb}">
        <h3> ${result.strMeal} </h3>
        <button onclick="displayFullMeal('${result.idMeal}')" > Details</button>

        `
        // const displayResult = result.idMeal;
        // mealDiv.addEventListener("click" ,displayFullMeal(displayResult));
        mealDiv.innerHTML = mealInfo;
        mainDiv.appendChild(mealDiv);
}




// function showSearchResult(result){
//     document.getElementById('meals').style.display = "none";
//     console.log(result);
//     if(result.hasOwnProperty('name') == true ){
//         const mainDiv = document.getElementById('search-result');
//     // console.log(result);
//     const mealDiv = document.getElementById('srcResult');
//         mealDiv.className = 'meal';
//         const mealInfo = `
//         <img class="meal-img" src="${result.strMealThumb}">
//         <h3> ${result.strMeal} </h3>
//         <button onclick="displayFullMeal('${result.idMeal}')" > Details</button>

//         `
//         // const displayResult = result.idMeal;
//         // mealDiv.addEventListener("click" ,displayFullMeal(displayResult));
//         mealDiv.innerHTML = mealInfo;
//         mainDiv.appendChild(mealDiv);
//     }
//     else{

//     }
// }