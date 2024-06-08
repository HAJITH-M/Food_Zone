// hamburger

const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hidden");
  cross.classList.toggle("hidden");

  menu.classList.toggle("hidden");
});

cross.addEventListener("click", () => {
  hamburger.classList.toggle("hidden");
  cross.classList.toggle("hidden");
  menu.classList.toggle("hidden");
});  
  
  
  
  
  // Assuming you have your JSON data stored in a variable named 'citiesData'
  const citiesData = {
    "cities": {
      "city1": "Best Restaurants in Bangalore",
      "city2": "Best Restaurants in Pune",
      "city3": "Best Restaurants in Mumbai",
      "city4": "Best Restaurants in Delhi",
      "city5": "Best Restaurants in Hyderabad",
      "city6": "Best Restaurants in Kolkata",
      "city7": "Best Restaurants in Chennai",
      "city8": "Best Restaurants in Chandigarh",
      "city9": "Best Restaurants in Ahmedabad",
      "city10": "Best Restaurants in Jaipur",
      "city11": "Best Restaurants in Nagpur"
    }
  };

  // Extracting restaurant names from the cities data
  const restaurants = Object.values(citiesData.cities);

  // Access the DOM element where restaurants will be displayed
  const restaurantListContainer = document.getElementById("restaurantList");

  // Map through the restaurants array to create HTML elements
  restaurants.map((restaurant) => {
    const restaurantElement = document.createElement("p");
    restaurantElement.textContent = restaurant;
    restaurantElement.classList.add("text-sm","md:text-base","border","font-medium", "border-x-gray-300", "rounded-xl", "py-3", "px-1" , "flex", "items-center", "justify-center", );
    restaurantListContainer.appendChild(restaurantElement);
  });


    // Assuming you have your JSON data stored in a variable named 'bestCusineData'


const bestCusineData =  {
    "cities": {
        "city1": "Best Restaurants in Bangalore",
        "city2": "Best Restaurants in Pune",
        "city3": "Best Restaurants in Mumbai",
        "city4": "Best Restaurants in Delhi",
        "city5": "Best Restaurants in Hyderabad",
        "city6": "Best Restaurants in Kolkata",
        "city7": "Best Restaurants in Chennai",
        "city8": "Best Restaurants in Chandigarh",
        "city9": "Best Restaurants in Ahmedabad",
        "city10": "Best Restaurants in Jaipur",
        "city11": "Best Restaurants in Nagpur"
    }
}

const cusines = Object.values(bestCusineData.cities)

const cusineList = document.getElementById("citiesList");

cusines.map((cusine) => {
    const cusineElement = document.createElement("p");
    cusineElement.textContent = cusine;
    cusineElement.classList.add("text-sm","md:text-base","border","font-medium", "border-x-gray-300", "rounded-xl", "py-3", "px-1" , "flex", "items-center", "justify-center", );
    cusineList.appendChild(cusineElement);
})

  // Assuming you have your JSON data stored in a variable named 'actions'


const actions = {
  "actions": {
      "action1": "Explore Restaurants Near Me",
      "action2": "Explore Top Rated Restaurants Near Me"
  }
}


const actionList = Object.values(actions.actions)

const actionListcontainer = document.getElementById("actionList");

actionList.map((actions) => {
    const actionElement = document.createElement("p");
    actionElement.textContent = actions;
    actionElement.classList.add("text-sm","md:text-base","border","font-medium", "border-x-gray-300", "rounded-xl", "py-3", "px-1" , "flex", "items-center", "justify-center", );
    actionListcontainer.appendChild(actionElement);
})
