

const imageData = {
    "images": [
      {
        "href": "https://www.google.com",
        "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-images/Biryani_2.avif?updatedAt=1717835152529",
        "alt": "biriyani"
      },
      {
  
        "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-images/Shakes.avif?updatedAt=1717835152567",
        "alt": "shakes"
      },
      {
        "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-images/Burger.avif?updatedAt=1717835152569",
        "alt": "burger"
      },
      {
        "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-images/Pizza.avif?updatedAt=1717835152643",
        "alt": "pizza"
      },
      {
        "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-images/Burger.avif?updatedAt=1717835152569",
        "alt": "north_indian"
      },
      {
        "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-images/South_Indian_4.avif?updatedAt=1717835152717",
        "alt": "south_indian"
      },
      {
        "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-images/Noodles.avif?updatedAt=1717835152645",
        "alt": "noodels"
      },
      {
        "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-images/Rolls.avif?updatedAt=1717835397813",
        "alt": "rolls"
      },
      {
        "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-images/Dosa.avif?updatedAt=1717835397843",
        "alt": "dosa"
      },
      {
        "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-images/Chinese.avif?updatedAt=1717835397878",
        "alt": "chinese"
      },
      {
        "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-images/Kebabs.avif?updatedAt=1717835397874",
        "alt": "kebabs"
      },
      {
        "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-images/Paratha.avif?updatedAt=1717835397923",
        "alt": "paratha"
      },
      {
        "src": "https://ik.imagekit.io/k5gvskw6y/Food%20Zone/scroll-images/Puttu.avif?updatedAt=1717835397887",
        "alt": "puttu"
      },
     
      
    ]
  };
  
  const gallery = document.getElementById("gallery");
  imageData.images.map((images) => {
    const a = document.createElement("a");
    a.className = 'cursor-pointer'
  
    a.addEventListener("click", function(event){
      a.target = "_blank";
      a.href = images.href ;
      
  
    })
  
    const div = document.createElement('div');
    div.className = 'w-40';
  
    const img = document.createElement('img');
    
    img.src = images.src;
    img.alt = images.alt;
    img.width = 144;
  
    div.appendChild(img);
    a.appendChild(div);
    gallery.appendChild(a);
  })
  