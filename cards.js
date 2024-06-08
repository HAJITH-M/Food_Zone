// const cardimage = {
//     "image": [
//         {
//             "href": "https://www.google.com",
//             "itemRate": "ITEMS AT ₹189",
//             "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/pizzaHut.avif?updatedAt=1717847547270",
//             "alt": "pizza",
//             "restaurant": "Pizza Hut",
//             "rating": "4 • 25-30 mins",
//             "description": "Chinese, Asian, Tibetan, Desserts Old Mahabalipuram Road OMR"
//         },
//         {
//             "itemRate": "ITEMS AT ₹199",
//             "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/chinese%20wok.avif?updatedAt=1717847549281",
//             "alt": "Chinese Wok",
//             "restaurant": "Chinese Wok",
//             "rating": "4 • 30-35 mins",
//             "description": "Chinese, Asian, Tibetan, Desserts Old Mahabalipuram Road OMR"
//         },
//         {
//             "itemRate": "60% OFF UPTO ₹120",
//             "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/UBQ%20by%20Barbeque%20Nation.avif?updatedAt=1717847547346",
//             "alt": "UBQ by Barbeque Nation",
//             "restaurant": "UBQ by Barbeque Nation",
//             "rating": "3.9 • 45-50 mins",
//             "description": "North Indian, Barbecue, Biryani, Kebabs, Mughlai, Desserts Thuraipakkam"
//         },
//         {
//             "itemRate": "",
//             "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/Havmor%20Havfunn%20Ice%20Cream.avif?updatedAt=1717847546656",
//             "alt": "Havmor Havfunn Ice Cream",
//             "restaurant": "Havmor Havfunn Ice Cream",
//             "rating": "4.5 • 20-25 mins",
//             "description": "Ice Cream, Beverages Karapakkam"
//         },
//         {
//             "itemRate": "50% OFF UPTO ₹100",
//             "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/Burger%20King.avif?updatedAt=1717847549138",
//             "alt": "Burger King",
//             "restaurant": "Burger King",
//             "rating": "4.3 • 20-25 mins",
//             "description": "Burgers, American Kancheepuram"
//         },
//         {
//             "itemRate": "40% OFF UPTO ₹80",
//             "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/McDonald's.avif?updatedAt=1717847546784",
//             "alt": "McDonald's",
//             "restaurant": "McDonald's",
//             "rating": "4.4 • 25-30 mins",
//             "description": "Burgers, Beverages, Cafe, Desserts Nehru Nagar"
//         },
//         {
//             "itemRate": "40% OFF UPTO ₹80",
//             "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/KFC.avif?updatedAt=1717847546670",
//             "alt": "KFC",
//             "restaurant": "KFC",
//             "rating": "4.2 • 20-25 mins",
//             "description": "Burgers, Fast Food, Rolls & Wraps Sholinganallur"
//         },
//         {
//             "itemRate": "₹150 OFF ABOVE ₹299",
//             "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/Domino's%20Pizza.avif?updatedAt=1717847546311",
//             "alt": "Domino's Pizza",
//             "restaurant": "Domino's Pizza",
//             "rating": "4.2 • 20-25 mins",
//             "description": "Pizzas, Italian, Pastas, Desserts Sholinganallur"
//         },
//         {
//             "itemRate": "ITEMS AT ₹99",
//             "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/Wow!%20Momo.avif?updatedAt=1717847547035",
//             "alt": "Wow! Momo",
//             "restaurant": "Wow! Momo",
//             "rating": "4.1 • 40-45 mins",
//             "description": "Tibetan, Healthy Food, Asian, Chinese, Snacks, Continental, Desserts, Beverages Sholinganallur Signal"
//         },
//         {
//             "itemRate": "50% OFF UPTO ₹100",
//             "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/La%20Pino'z%20Pizza.avif?updatedAt=1717847546407",
//             "alt": "La Pino'z Pizza",
//             "restaurant": "La Pino'z Pizza",
//             "rating": "4 • 30-35 mins",
//             "description": "Pizzas, Pastas, Italian, Desserts, Beverages Sholinganallur"
//         },
//         {
//             "itemRate": "10% OFF ABOVE ₹1000",
//             "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/Eat%20N%20Drink.avif?updatedAt=1717847546378",
//             "alt": "Eat N Drink",
//             "restaurant": "Eat N Drink",
//             "rating": "4.6 • 25-30 mins",
//             "description": "North Indian, Fast Food, Juices, Beverages Karapakkam"
//         },
//         {
//             "itemRate": "40% OFF UPTO ₹80",
//             "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/Ambur%20Star%20Briyani.avif?updatedAt=1717847546950",
//             "alt": "Ambur Star Briyani",
//             "restaurant": "Ambur Star Briyani",
//             "rating": "4.3 • 15-20 mins",
//             "description": "Indian, Chinese, Arabian, Continental Sholinganallur"
//         }
//     ]
// };

// const cardsGallery = document.getElementById("cardsgallery");

// cardimage.image.map((images) => {
//     const link = document.createElement('a');
//     link.className = 'cursor-pointer transform transition-transform duration-100 hover:scale-95';
//     link.href = images.href;

//     const card = document.createElement('div');
//     card.className = 'relative';

//     const itemRate = document.createElement('p');
//     itemRate.className = 'font-roboto text-xl bg-slate-800 bg-opacity-35 font-extrabold absolute top-73 translate-y-9 pl-3 mt-1 rounded-bl-2xl rounded-br-2xl text-white h-7 w-full flex items-center';
//     itemRate.textContent = images.itemRate;
//     card.appendChild(itemRate);

//     const image = document.createElement('img');
//     image.className = 'rounded-2xl w-full object-cover h-44';
//     image.src = images.src;
//     image.alt = images.alt;
//     card.appendChild(image);

//     const info = document.createElement('div');
//     info.className = 'grid grid-cols-1 pt-2 pl-3';

//     const restaurantName = document.createElement('p');
//     restaurantName.className = 'text-lg text-gray-700 font-semibold';
//     restaurantName.textContent = images.restaurant;
//     info.appendChild(restaurantName);

//     const ratingContainer = document.createElement('div');
//     ratingContainer.className = 'flex gap-1 items-center';

//     const ratingIcon = document.createElement('img');
//     ratingIcon.className = 'w-5 h-5';
//     ratingIcon.src = 'https://ik.imagekit.io/k5gvskw6y/Food%20Zone/icons/star.png';
//     ratingContainer.appendChild(ratingIcon);

//     const ratingText = document.createElement('p');
//     ratingText.className = 'text-lg text-gray-600 font-semibold';
//     ratingText.textContent = images.rating;
//     ratingContainer.appendChild(ratingText);

//     const address = document.createElement('p');
//     address.className = 'text-gray-600 text-normal';
//     address.textContent = images.description;

//     info.appendChild(ratingContainer);
//     info.appendChild(address);

//     card.appendChild(info);

//     link.appendChild(card);

//     cardsGallery.appendChild(link);
// });
