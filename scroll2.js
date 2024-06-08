const cardimage = {
    "image": [
        {
            "href": "https://www.google.com",
            "itemRate": "ITEMS AT ₹189",
            "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/pizzaHut.avif?updatedAt=1717847547270",
            "alt": "pizza",
            "restaurant": "Pizza Hut",
            "rating": "4 • 25-30 mins",
            "description": "Chinese, Asian, Tibetan, Desserts Old Mahabalipuram Road OMR"
        },
        {
            "itemRate": "ITEMS AT ₹199",
            "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/chinese%20wok.avif?updatedAt=1717847549281", 
            "alt": "Chinese Wok",
            "restaurant": "Chinese Wok",
            "rating": "4 • 30-35 mins",
            "description": "Chinese, Asian, Tibetan, Desserts Old Mahabalipuram Road OMR"
        },
        {
            "itemRate": "60% OFF UPTO ₹120",
            "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/UBQ%20by%20Barbeque%20Nation.avif?updatedAt=1717847547346", 
            "alt": "UBQ by Barbeque Nation",
            "restaurant": "UBQ by Barbeque Nation",
            "rating": "3.9 • 45-50 mins",
            "description": "North Indian, Barbecue, Biryani, Kebabs, Mughlai, Desserts Thuraipakkam"
        },
        {
            "itemRate": "40% OFF UPTO ₹80",
            "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/Havmor%20Havfunn%20Ice%20Cream.avif?updatedAt=1717847546656", 
            "alt": "Havmor Havfunn Ice Cream",
            "restaurant": "Havmor Havfunn Ice Cream",
            "rating": "4.5 • 20-25 mins",
            "description": "Ice Cream, Beverages Karapakkam"
        },
        {
            "itemRate": "50% OFF UPTO ₹100",
            "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/Burger%20King.avif?updatedAt=1717847549138", 
            "alt": "Burger King",
            "restaurant": "Burger King",
            "rating": "4.3 • 20-25 mins",
            "description": "Burgers, American Kancheepuram"
        },
        {
            "itemRate": "40% OFF UPTO ₹80",
            "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/McDonald's.avif?updatedAt=1717847546784", 
            "alt": "McDonald's",
            "restaurant": "McDonald's",
            "rating": "4.4 • 25-30 mins",
            "description": "Burgers, Beverages, Cafe, Desserts Nehru Nagar"
        },
        {
            "itemRate": "40% OFF UPTO ₹80",
            "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/KFC.avif?updatedAt=1717847546670", 
            "alt": "KFC",
            "restaurant": "KFC",
            "rating": "4.2 • 20-25 mins",
            "description": "Burgers, Fast Food, Rolls & Wraps Sholinganallur"
        },
        {
            "itemRate": "₹150 OFF ABOVE ₹299",
            "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/Domino's%20Pizza.avif?updatedAt=1717847546311", 
            "alt": "Domino's Pizza",
            "restaurant": "Domino's Pizza",
            "rating": "4.2 • 20-25 mins",
            "description": "Pizzas, Italian, Pastas, Desserts Sholinganallur"
        },
        {
            "itemRate": "ITEMS AT ₹99",
            "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/Wow!%20Momo.avif?updatedAt=1717847547035", 
            "alt": "Wow! Momo",
            "restaurant": "Wow! Momo",
            "rating": "4.1 • 40-45 mins",
            "description": "Tibetan, Healthy Food, Asian, Chinese, Snacks, Continental, Desserts, Beverages Sholinganallur Signal"
        },
        {
            "itemRate": "50% OFF UPTO ₹100",
            "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/La%20Pino'z%20Pizza.avif?updatedAt=1717847546407", 
            "alt": "La Pino'z Pizza",
            "restaurant": "La Pino'z Pizza",
            "rating": "4 • 30-35 mins",
            "description": "Pizzas, Pastas, Italian, Desserts, Beverages Sholinganallur"
        },
        {
            "itemRate": "10% OFF ABOVE ₹1000",
            "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/Eat%20N%20Drink.avif?updatedAt=1717847546378", 
            "alt": "Eat N Drink",
            "restaurant": "Eat N Drink",
            "rating": "4.6 • 25-30 mins",
            "description": "North Indian, Fast Food, Juices, Beverages Karapakkam"
        },
        {
            "itemRate": "40% OFF UPTO ₹80",
            "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-card/Ambur%20Star%20Briyani.avif?updatedAt=1717847546950", 
            "alt": "Ambur Star Briyani",
            "restaurant": "Ambur Star Briyani",
            "rating": "4.3 • 15-20 mins",
            "description": "Indian, Chinese, Arabian, Continental Sholinganallur"
        }
    ]
};

const gallery2 = document.getElementById("scrollgallery");

cardimage.image.map((images) => {

    const a = document.createElement('a');
    a.className = 'cursor-pointer'
    a.href = images.href;

    const div = document.createElement('div');

    const div2 = document.createElement('div');
    div2.className = 'gap-5 mt-4 w-72 transform transition-transform duration-100 hover:scale-95';

    const div3 = document.createElement('div');
    div3.className = 'relative';

    const img = document.createElement('img');
    img.className = 'object-cover h-44 rounded-2xl';
    img.src = images.src;
    img.alt = images.alt;
    img.width = 300;
    div3.appendChild(img);

    const paraitemRate = document.createElement('p');
    paraitemRate.className = 'font-[Roboto] text-xl bg-slate-800 bg-opacity-35 font-extrabold absolute bottom-0 pl-3 mt-1 rounded-bl-2xl rounded-br-2xl text-white w-full';
    paraitemRate.textContent = images.itemRate;
    div3.appendChild(paraitemRate);

    const div4 = document.createElement('div');
    div4.className = 'grid grid-cols-1 pt-2 pl-3';

    const p1 = document.createElement('p');
    p1.className = 'text-lg text-gray-700 font-semibold';
    p1.textContent = images.restaurant;
    div4.appendChild(p1);

    const div5 = document.createElement('div');
    div5.className = 'flex gap-1 items-center';

    const icon = document.createElement('img');
    icon.className = 'w-5 h-5';
    icon.src = 'https://ik.imagekit.io/k5gvskw6y/Food%20Zone/icons/star.png'
    div5.appendChild(icon);

    const pararating = document.createElement('p');
    pararating.className = 'text-lg text-gray-600 font-semibold';
    pararating.textContent = images.rating;
    div5.appendChild(pararating);

    div4.appendChild(div5);

    const paraAddress = document.createElement('p');
    paraAddress.className = 'text-gray-600 text-normal ';
    paraAddress.textContent = images.description;
    div4.appendChild(paraAddress);

    div2.appendChild(div3);
    div2.appendChild(div4);
    div.appendChild(div2);

    a.appendChild(div);

    gallery2.appendChild(a);
});







const cardsGallery = document.getElementById("cardsgallery");

cardimage.image.map((images) => {
    const link = document.createElement('a');
    link.className = 'cursor-pointer transform transition-transform duration-100 hover:scale-95';
    link.href = images.href;

    const card = document.createElement('div');

    const paraimgdiv = document.createElement('div')
    paraimgdiv.className = 'relative';

    const itemRate = document.createElement('p');
    itemRate.className = 'font-roboto text-xs md:text-xl bg-slate-900 bg-opacity-50 font-extrabold absolute top-73 translate-y-9 pl-3 mt-1 rounded-bl-2xl rounded-br-2xl text-white h-7 w-full flex items-center';
    itemRate.textContent = images.itemRate;
    paraimgdiv.appendChild(itemRate);

    const image = document.createElement('img');
    image.className = 'rounded-2xl w-full object-cover h-44';
    image.src = images.src;
    image.alt = images.alt;
    paraimgdiv.appendChild(image);

    card.appendChild(paraimgdiv);

    const info = document.createElement('div');
    info.className = 'grid grid-cols-1 pt-2 pl-3';

    const restaurantName = document.createElement('p');
    restaurantName.className = 'text-lg text-gray-700 font-semibold';
    restaurantName.textContent = images.restaurant;
    info.appendChild(restaurantName);

    const ratingContainer = document.createElement('div');
    ratingContainer.className = 'flex gap-1 items-center';

    const ratingIcon = document.createElement('img');
    ratingIcon.className = 'w-5 h-5';
    ratingIcon.src = 'https://ik.imagekit.io/k5gvskw6y/Food%20Zone/icons/star.png';
    ratingContainer.appendChild(ratingIcon);

    const ratingText = document.createElement('p');
    ratingText.className = 'text-lg text-gray-600 font-semibold';
    ratingText.textContent = images.rating;
    ratingContainer.appendChild(ratingText);

    const address = document.createElement('p');
    address.className = 'text-gray-600 text-normal';
    address.textContent = images.description;

    info.appendChild(ratingContainer);
    info.appendChild(address);

    card.appendChild(info);

    link.appendChild(card);

    cardsGallery.appendChild(link);
});
