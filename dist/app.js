const headAlert = document.getElementById("head-alert");

const colors = ["#130106","#077a52"];
const text = ["Free US Shipping on orders $55+", `<h5>introducing tropical green model 001-
<a class="underline hover:text-green-200" href="">shop now</a></h5>`];

let currentIndex = 0;

setInterval(function() {
    headAlert.style.backgroundColor = colors[currentIndex];
    headAlert.innerHTML = text[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
},3000)


//************close cart */
const closeCart = document.querySelector(".close");
const cartPart = document.querySelector(".cart-part");
const bag = document.querySelector(".bag");

closeCart.addEventListener("click", function() {
    cartPart.classList.add("right-[-20rem]");
})
bag.addEventListener("click", function() {
    cartPart.classList.remove("right-[-20rem]");
    cartPart.classList.add("right-0");
})

/**burger menu actions */

const menuBtn = document.querySelector(".menu");
const wrapperList = document.querySelector(".wrapper");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", function() {
    wrapperList.classList.add('wrapper-show');
})

closeBtn.addEventListener("click", function() {
    wrapperList.classList.remove('wrapper-show');
})
document.addEventListener("click", function (e) {
    if(!wrapperList.contains(e.target) && !menuBtn.contains(e.target)) {
        wrapperList.classList.remove("wrapper-show");
    }
   
})
// ************* scroll
const navBar = document.querySelector(".nav-bar");

window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const topheight = headAlert.getBoundingClientRect().height;
    if (scrollHeight > topheight) {
        navBar.style.top = "0.5rem";
    }
    if (scrollHeight < topheight) {
        navBar.style.top = "2.7rem";
    }
})

// products part
const products = [
    {
        id : 1,
        image : "./images/000 black.webp",
        title: "model 000: black",
        category: "model 000",
        price : "$145",
        hover : "images/hover black.webp",
    },
    {
        id : 2,
        image : "./images/000 white.webp",
        title: "model 000: white",
        category: "model 000",
        price : "$145",
        hover : "images/hover white.webp",
    },
    {
        id : 3,
        image : "./images/000 gray.webp",
        title: "model 000: gray",
        category: "model 000",
        price : "$145",
        hover : "images/hover gray.webp",
    },
    {
        id : 4,
        image : "./images/000 navy.webp",
        title: "model 000: navy",
        category: "model 000",
        price : "$145",
        hover : "images/hover navy.webp",
    },
    {
        id : 5,
        image : "./images/000 neon.webp",
        title: "model 000: neon",
        category: "model 000",
        price : "$145",
        hover : "images/hover neon.webp",
    },
    {
        id : 6,
        image : "./images/000 black and white.webp",
        title: "model 000: black and white",
        category: "model 000",
        price : "$145",
        hover : "images/hover black and white.webp",
    }
];

const productsElement = document.querySelector(".products");

// display all items when page loads
const links = document.querySelector(".links");
window.addEventListener("DOMContentLoaded", function() {
    displayContent(products);
    displayNewContent(newProducts);
                
})
//***************resize in window */
const headerImg = document.querySelector(".image-1");
window.addEventListener("resize", updateMenu);
function updateMenu() {
    const width = window.innerWidth;
    if(width >= 767) {
        links.classList.remove("hidden");
        headerImg.classList.remove("hidden");
    } else {
        links.classList.add("hidden");
        headerImg.classList.add("hidden");
    }
}


function displayContent() {
    let displayItems = products.map(function(product) {
        return `
        <div class="product" data-id="${product.id}">
            <a href="">
            <img class="image" decoding="async" loading="lazy" data-source="${product.image}" data-hover="${product.hover}" src="${product.image}" alt="${product.title}"> 
            <div class="description">  
             <h3 class="product-title">${product.title}</h3>
             <span class="price">${product.price}</span>
             </div>
            </a>
         </div>
        `;
    }).join("");
    productsElement.innerHTML = displayItems;

    const productItems = document.querySelectorAll(".product");

    productItems.forEach(function(item) {
        item.addEventListener("mouseover", function(e) {
            const targetItem = e.currentTarget.querySelector(".image");
            const description = e.currentTarget.querySelector(".description");
            const price = e.currentTarget.querySelector(".price");
            targetItem.src = targetItem.dataset.hover;
            description.style.color = "white";
            price.style.color = "white";
        })

        item.addEventListener("mouseout", function(e) {
            const targetImg = e.currentTarget.querySelector(".image");
            targetImg.src = targetImg.dataset.source;
            const description = e.currentTarget.querySelector(".description");
            description.style.color = "#212121";
            const price = e.currentTarget.querySelector(".price");
            price.style.color = "rgb(130, 126, 126)";
        })
    })
}

const newProducts = [
    {
        id : 1,
        image : "./images/001 black.webp",
        class : "black",
        title: "model 001: black",
        category: "model 001",
        price : "$145",
        hover : "images/001 hover black.webp",
    },
    {
        id : 2,
        image : "./images/001 white.webp",
        class : "white",
        title: "model 001: white",
        category: "model 001",
        price : "$145",
        hover : "images/001 hover white.webp",
    },
    {
        id : 3,
        image : "./images/001 clove green.webp",
        class : "clove-green",
        title: "model 001: clove green",
        category: "model 001",
        price : "$145",
        hover : "images/001 hover clove green.webp",
    }
];

const product001Element = document.querySelector(".products001");

function displayNewContent(newProducts) {
    let displayItems = newProducts.map(function(product) {
        return `
        <div class="product-001 ${product.class}" data-id="${product.id}">
            <a href="">
            <img class="image" decoding="async" loading="lazy" data-source="${product.image}" data-hover="${product.hover}" src="${product.image}" alt="${product.title}"> 
            <div class="description">  
             <h3 class="product-title">${product.title}</h3>
             <span class="price">${product.price}</span>
             </div>
            </a>
         </div>
        `;
    }).join("");
    product001Element.innerHTML = displayItems;

    const productItems = document.querySelectorAll(".product-001");

    productItems.forEach(function(item) {
        item.addEventListener("mouseover", function(e) {
            const targetItem = e.currentTarget.querySelector(".image");
            const description = e.currentTarget.querySelector(".description");
            const price = e.currentTarget.querySelector(".price");
            targetItem.src = targetItem.dataset.hover;
            description.style.color = "white";
            price.style.color = "white";
        })

        item.addEventListener("mouseout", function(e) {
            const targetImg = e.currentTarget.querySelector(".image");
            targetImg.src = targetImg.dataset.source;
            const description = e.currentTarget.querySelector(".description");
            description.style.color = "#212121";
            const price = e.currentTarget.querySelector(".price");
            price.style.color = "rgb(130, 126, 126)";
        })
    })
}

// ****************** shopping btn ***********************
const btns = document.querySelectorAll(".btn");
const explore = document.querySelector(".explore");
const heroHeader = document.querySelector(".hero-header");
const about = document.querySelector(".about");
const images = document.querySelector(".everyday-images");
const mainShop = document.querySelector(".main-shop");
const menubtn = document.querySelector(".menu");

const model000 = [
    {
    id: 'shopping',
    title: '000 black',
    image1: './products/000 black 1.webp',
    image2: './products/000 black 2.webp',
    image3: './products/000 black 3.webp',
    video: './products/000 black vid.mp4'
    },
    {
    id: 'shopping',
    title: '000 white',
    image1: './products/000 white 1.webp',
    image2: './products/000 white 2.webp',
    image3: './products/000 white 3.webp',
    video: './products/000 white vid.mp4'
    },
    {
    id: 'shopping',
    title: '000 blackandwhite',
    image1: './products/000 blackandwhite 1.webp',
    image2: './products/000 blackandwhite 2.webp',
    image3: './products/000 blackandwhite 3.webp',
    video: './products/000 blackandwhite vid.mp4'
    },
    {
        id: 'shopping',
        title: '000 grey',
        image1: './products/000 grey 1.webp',
        image2: './products/000 grey 2.webp',
        image3: './products/000 grey 3.webp',
        video: './products/000 grey vid.mp4'
     },
     {
        id: 'shopping',
        title: '000 navy',
        image1: './products/000 navy 1.webp',
        image2: './products/000 navy 2.webp',
        image3: './products/000 navy 3.webp',
        video: './products/000 navy vid.webp'
     },
     {
        id: 'shopping',
        title: '000 neon',
        image1: './products/000 neon 1.webp',
        image2: './products/000 neon 2.webp',
        image3: './products/000 neon 3.webp',
        video: './products/000 neon 4.webp'
     },
]

const backContainer = document.querySelector(".back-container");


btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        explore.classList.toggle("hidden");
        heroHeader.classList.toggle("hidden");
        about.classList.toggle("hidden");
        images.classList.toggle("hidden");

        const backBtn = `<i class="back fa-solid fa-arrow-left"></i>`
        backContainer.classList.remove("hidden")
        backContainer.innerHTML = backBtn;
        menuBtn.classList.add("hidden");
        links.classList.add("hidden");

        const back = document.querySelector(".back");

        mainHtml();
    })
})

//load items
window.addEventListener("DOMContentLoaded", function() {
    addToCart();
    totalSum();
    bagCounter();
});

function mainHtml() {
    const htmlStruct =`
    <!-- products -->
        <main class="product-part pt-12">
            <div class="desc flex justify-between p-4 capitalize">
                <div class="name">
                    <h2>model 000</h2>
                    <h5>cushlony comfort</h5>
                </div>
                <div class="price-tag font-bold">
                    $145
                </div>
            </div>
            <!-- product-pics -->
            <section class="product-container pb-4">
                <div class="product-pics w-full h-screen relative">
                    <img class="product-pic" loading="eager" src="./products/000 black 1.webp" alt="000 black">
                    <img class="product-pic hidden" src="./products/000 black 2.webp" alt="000 black">
                    <img class="product-pic hidden" src="./products/000 black 3.webp" alt="000 black">
                    <video class="product-pic video hidden" src="./products/000 black vid.mp4" autoplay loop muted></video>
                </div>
                <div class="pic-btns">
                    <button>
                        <img class="btn-pic" loading="eager" src="./products/000 black 1.webp" alt="000 black">
                    </button>
                    <button>
                        <img class="btn-pic" src="./products/000 black 2.webp" alt="000 black">
                    </button>
                    <button>
                        <img class="btn-pic" src="./products/000 black 3.webp" alt="000 black">
                    </button>
                </div>
            </section>
            <!-- buttons -->
            <section class="btns-container flex flex-col justify-center items-center bg-white p-4 capitalize text-l w-full">  
                <div class="color mb-2">
                    <h3>color:</h3>
                    <span id="color"></span>
                </div>
                <div class="circle-btns my-3">
                    <div class="cbtn white-black" data-id="000 blackandwhite"></div>
                    <div class="cbtn black" data-id="000 black"></div>
                    <div class="cbtn grey" data-id="000 grey"></div>
                    <div class="cbtn navy" data-id="000 navy"></div>
                    <div class="cbtn neon" data-id="000 neon"></div>
                 </div>

                <button class="addtocartbtn relative my-0 py-0 m-auto bg-black w-[50%] h-12 rounded-full text-white md:mt-5 md:w-[70%] md:h-[9%]" type="submit" data-test="add-to-cart">
                    <span class="flex items-center justify-center gap-2 whitespace-pre-wrap md:text-[1.2rem]">
                        <span>Add to cart</span>
                    </span>
                </button>
            </section>
        </main>
    `;
    mainShop.innerHTML = htmlStruct;
    const cbtns = document.querySelectorAll(".cbtn");
    const productContainer = document.querySelector(".product-container");
    cbtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            const id = btn.getAttribute("data-id");
        model000.map(function(item) {
            if(id === item.title) {
                const newImage = `
                <div class="product-pics w-full h-screen relative">
                    <img class="product-pic" loading="eager" src="${item.image1}" alt="000 black">
                    <img class="product-pic hidden" src="${item.image2}" alt="000 black">
                    <img class="product-pic hidden" src="${item.image3}" alt="000 black">
                    <video class="product-pic video hidden" src="${item.video}" autoplay loop muted></video>
                </div>
                <div class="pic-btns">
                    <button>
                        <img class="btn-pic" loading="eager" src="${item.image1}" alt="000 black">
                    </button>
                    <button>
                        <img class="btn-pic" src="${item.image2}" alt="000 black">
                    </button>
                    <button>
                        <img class="btn-pic" src="${item.image3}" alt="000 black">
                    </button>
                </div>
                `;
                productContainer.innerHTML = newImage;

            }
        })
        })
        
    });
    
    displayCartItems();
    
    
}



backContainer.addEventListener("click", function() {
        explore.classList.remove("hidden");
        heroHeader.classList.remove("hidden");
        about.classList.remove("hidden");
        images.classList.remove("hidden");

        const productPart = document.querySelector(".product-part");
        const productContainer = document.querySelector(".product-container");
        const btnsContainer = document.querySelector(".btns-container");
        const color = document.querySelector(".color");
        const circles = document.querySelector(".circle-btns");
        const desc = document.querySelector(".desc");
        productPart.classList.add("hidden");
        backContainer.classList.add("hidden");
        productContainer.classList.add("hidden");
        btnsContainer.classList.add("hidden");
        desc.classList.add("hidden");
        color.classList.add("hidden");
        circles.classList.add("hidden");
        circles.style.display = "none";
        
        
        const width = window.innerWidth;
        console.log(width)
        if(width === 767 || width > 767) {
            links.classList.remove("hidden");
            productPart.classList.add("hidden");
            backContainer.classList.add("hidden");
            productContainer.classList.add("hidden");
            btnsContainer.classList.add("hidden");
            desc.classList.add("hidden");
            color.classList.add("hidden");
            circles.classList.add("hidden");
        } else {
            links.classList.add("hidden");
            menuBtn.classList.remove("hidden");
            
        }
        
        
})

const emptyCart = document.querySelector(".emptycart");
const shopItems = document.querySelector(".shopitems");
const total = document.querySelector(".totalsum");
const sum = document.querySelector("#totalSum");
let selectedColor = null;
let quantity = 1;
let tsum = 0;

function displayCartItems() {
    const addtoCartbtn = document.querySelector(".addtocartbtn");
    let cbtns = document.querySelectorAll(".cbtn");
    cbtns.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
        // Remove the active class from all color buttons
        cbtns.forEach(button => {
        button.classList.remove('active');
  });

        // Add the active class to the clicked color button
        e.target.classList.add('active');

        // Get the selected color from the dataset
        selectedColor = e.target.dataset.id;

        })
    })


    // Event handler function for Add to Cart button click
    addtoCartbtn.addEventListener('click', handleAddToCartButtonClick);

    function handleAddToCartButtonClick() {
        emptyCart.classList.add("hidden");
    if (selectedColor) {
        // Add the item with the selected color to the cart
        addToCart(); 
        addToLocalStorage(selectedColor, quantity);
        totalSum();
        bagCounter();
    } else {
        alert('Please select a color.');
    }
    }


}

function addToCart() {

   let cartItems = getLocalStorage();

     // Clear the cart container
    shopItems.innerHTML = '';

   if(cartItems.length > 0) {
    cartItems.forEach(function(item) {
        const element = document.createElement("div");
         element.classList.add("contain");
        const cartItem = `
            <!-- item -->
            <div class="shopitem flex flex-row items-center justify-between my-3">
            <div class="itemtitle flex flex-row items-center">
                <h3 class="name">${item.value}</h3>
            </div>
            <div class="addbuttons flex flex-row items-center">
                <button class="minus" data-id="${item.value}">-</button>
                <span id="count" data-num="${item.value}">${item.quantity}</span>
                <button class="plus" data-id="${item.value}">+</button>
            </div>
            </div>
            `;

    element.innerHTML = cartItem;
    shopItems.appendChild(element);
    })    
    emptyCart.classList.add("hidden");
}

     

    const plusbtns = document.querySelectorAll(".plus");
    const minusbtns = document.querySelectorAll(".minus"); 

    
    plusbtns.forEach(function(plusbtn) {
        plusbtn.addEventListener("click", plusFunc);
    })
        
    
    minusbtns.forEach(function(minusbtn) {
        minusbtn.addEventListener("click", minusFunc);

    })

    
    
    

    }

//************total sum */
function totalSum() {
    const itemsinStorage = getLocalStorage();
    let value = 0;

    if(itemsinStorage.length > 0) {
        total.classList.remove("hidden");
        itemsinStorage.forEach(item => {
           value += (item.quantity) * 145;
        })
        sum.textContent = value;
    } else {
        total.classList.add("hidden");
    }
}

  //***********bag number */
  const bagNum = document.querySelector(".count");
  function bagCounter() {
      const items = getLocalStorage();
      bagNum.textContent = items.length; 
      if(items.length > 0) {
          bagNum.style.backgroundColor = "red";
      } else {
        bagNum.style.backgroundColor = "rgb(43, 39, 39)";
      }
  }

//********************LOCAL STORAGE 

function addToLocalStorage(value, quantity) {
    //const grocery = {id:id, value:value}; or
    const cartItems = {value, quantity};
    let items = getLocalStorage();//check if item exists
    const existingItem =  items.find(cartItem => cartItem.value === value);
    if (existingItem) {
      alert('Item already exists in the cart.');
      return; // Exit the function to prevent duplicate addition
    }
    alert('item added');
    items.push(cartItems);
    localStorage.setItem('list', JSON.stringify(items));
    addToCart();
} 

function getLocalStorage() {
    return localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
}


  //*****************minus function */
  function minusFunc(e) {
    const itemId = e.target.dataset.id;
    updateCartItemQuantity(itemId, -1);
    addToCart();
    totalSum();
    bagCounter();
  }
  //********************plus btn */
  function plusFunc(e) {
    const itemId = e.target.dataset.id;
    updateCartItemQuantity(itemId, 1);
    addToCart();
    totalSum();
    bagCounter();
  };

  //********************************Function to update the quantity of a cart item
    function updateCartItemQuantity(itemId, quantityChange) {
        const cartItems = getLocalStorage();
        
        // Find the item with the given ID in the cart
        const itemToUpdate = cartItems.find(item => item.value === itemId);
        
        if (itemToUpdate) {
        // Update the quantity of the item
        itemToUpdate.quantity += quantityChange;
    
        if (itemToUpdate.quantity < 1) {
            // Remove the item from the cart if the quantity becomes zero or negative
            cartItems.splice(cartItems.indexOf(itemToUpdate), 1);
        }
        
        // Store the updated cart items back to local storage
        localStorage.setItem('list', JSON.stringify(cartItems));
        }
    }
    
    //*************delete identicals from local storage */
    function deleteIdenticalValuesFromLocalStorage(color) {
        const localStorageKeys = getLocalStorage(); // Get all keys from localStorage
      
        // Iterate over the localStorage keys
        localStorageKeys.forEach(function(key) {
            const values = key.value;
        
            // Check if the value is already present in the uniqueValues object
            if (values === color) {
                localStorageKeys.splice(localStorageKeys.indexOf(key));
                 alert("item is already in your cart.")
            } 
          });  

          // Store the updated cart items back to local storage
        localStorage.setItem('list', JSON.stringify(localStorageKeys));
        
        }
          
        