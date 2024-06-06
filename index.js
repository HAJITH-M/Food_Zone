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
    restaurantElement.classList.add("border", "border-x-gray-300", "rounded-xl", "py-3", "flex", "items-center", "justify-center", "mx-3");
    restaurantListContainer.appendChild(restaurantElement);
  });
