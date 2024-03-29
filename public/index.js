const hamburger = document.querySelector("#burgerMenu");
const hamMenu = document.querySelector("#burgerOptions");
const darkBG = document.querySelector("#darkBG");

hamburger.addEventListener("click", () => {
  hamMenu.style.display = "flex";
  darkBG.style.display = "block";
});

darkBG.addEventListener("click", () => {
  hamMenu.style.display = "none";
  darkBG.style.display = "none";
});

//login
const exit = document.querySelector(".closeBtn");
const popUp = document.querySelector(".popUp");
const loginHead = document.querySelector("#loginHead");
const signUpBtn = document.querySelector("#signUpBtn");
const signIn = document.querySelector(".signIn");
const loginFooter = document.querySelector("#loginFooter");
const loginP = document.querySelector("#loginP");
const forgot = document.querySelector("#forgot");
const createInfo = document.querySelector("#createInfo");
const stylePref = document.querySelector("#styleContainer");
const signInBtn = document.querySelectorAll(".signInBtn");
const loginPop = document.querySelectorAll(".loginPop");

exit.addEventListener("click", () => {
  popUp.style.display = "none";
  darkBG.style.display = "none";
});

darkBG.addEventListener("click", () => {
  popUp.style.display = "none";
});

for (btn of signInBtn) {
  btn.addEventListener("click", () => {
    popUp.setAttribute("style", "display: block");
    darkBG.style.display = "block";
    if (hamMenu.style.display === "flex") {
      hamMenu.style.display = "none";
    }
  });
}

if (loginPop) {
  for (let i = 0; i < loginPop.length; i++) {
    loginPop[i].addEventListener("click", () => {
      popUp.setAttribute("style", "display: block");
    });
  }
}

signUpBtn.addEventListener("click", () => {
  if (stylePref.style.display === "block") {
    loginHead.textContent = "Sign In";
    signUpBtn.textContent = "Create an Account";
    loginFooter.textContent = "Sign Up";
    signIn.value = "Sign In";
    loginP.setAttribute("style", "display: block");
    forgot.setAttribute("style", "display: block");
    createInfo.setAttribute("style", "display: none");
    stylePref.setAttribute("style", "display: none");
  } else {
    loginHead.textContent = "Create an Account";
    signUpBtn.textContent = "Sign In";
    loginFooter.textContent = "Already Have an Account?";
    signIn.value = "Create an Account";
    loginP.setAttribute("style", "display: none");
    forgot.setAttribute("style", "display: none");
    createInfo.setAttribute("style", "display: block");
    stylePref.setAttribute("style", "display: block");
  }
});

//email popup
const emailPopUp = document.querySelector("#popUpEmail");
const emailClose = document.querySelector("#getOurEmailsContainer button");
const getEmail = document.querySelector("#footerGetEmail");

emailPopUp.addEventListener("click", () => {
  emailPopUp.style.display = "none";
  darkBG.style.display = "none";
});

getEmail.addEventListener("click", () => {
  emailPopUp.style.display = "block";
  darkBG.style.display = "block";
});

darkBG.addEventListener("click", () => {
  emailPopUp.style.display = "none";
  darkBG.style.display = "none";
});

// men.html, women.html, beauty.html javascript
const menListingRow = document.querySelector("#menListingRow");
const womenListingRow = document.querySelector("#womenListingRow");
const beautyListingRow = document.querySelector("#beautyListingRow");
const saleListingRow = document.querySelector("#saleListingRow");
const sort = document.querySelector("#sort");

// container for sales listing
let menListing = [
  {
    id: "0",
    name: "Man in Black",
    img1: "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    img2: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    price: "49.99",
    sale: "39.99",
    href: "/Man-in-Black",
  },
  {
    id: "1",
    name: "Man in Blue",
    img1: "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    img2: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    price: "59.99",
    href: "/Man-in-Blue",
  },
  {
    id: "2",
    name: "Tan Coat",
    img1: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    img2: "https://images.unsplash.com/photo-1553143820-6bb68bc34679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=623&q=80",
    price: "39.99",
    href: "/Tan-Coat",
  },
];

let womenListing = [
  {
    id: "0",
    name: "Black Striped Pants",
    img1: "https://images.unsplash.com/photo-1551048632-24e444b48a3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    img2: "https://images.unsplash.com/photo-1551048633-8c03f448307f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    price: "49.99",
    sale: "39.99",
    href: "/Black-Striped-Pants",
  },
  {
    id: "1",
    name: "Cali Motor Tee",
    img1: "https://images.unsplash.com/photo-1621694691103-e326ece9252b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    img2: "https://images.unsplash.com/photo-1621694691240-b63c0deaba70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    price: "29.99",
    href: "/Cali-Motor-Tee",
  },
  {
    id: "2",
    name: "Black Ring Top",
    img1: "https://images.unsplash.com/photo-1621784562807-cb450c2f5efc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    img2: "https://images.unsplash.com/photo-1621784563286-84f7646ef221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    price: "39.99",
    href: "/Black-Ring-Top",
  },
];

let beautyListing = [
  {
    id: "0",
    name: "Soap",
    img1: "https://images.unsplash.com/photo-1589060040782-234fa4ee0b61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    img2: "https://images.unsplash.com/photo-1589060040843-7a31813e6fb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    price: "9.99",
    sale: "6.99",
    href: "/Soap",
  },
  {
    id: "1",
    name: "Make up set",
    img1: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    img2: "https://images.unsplash.com/photo-1589825853236-7a9e04b56687?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    price: "39.99",
    href: "/Make-up-set",
  },
  {
    id: "2",
    name: "Tote Bag",
    img1: "https://images.unsplash.com/photo-1572196284554-4e321b0e7e0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    img2: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    price: "19.99",
    href: "/Tote-Bag",
  },
];

let saleListing = [
  {
    id: "0",
    name: "Man in Black",
    img1: "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    img2: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    price: "49.99",
    sale: "39.99",
    href: "/Man-in-Black",
  },
  {
    id: "1",
    name: "Black Striped Pants",
    img1: "https://images.unsplash.com/photo-1551048632-24e444b48a3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    img2: "https://images.unsplash.com/photo-1551048633-8c03f448307f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    price: "49.99",
    sale: "39.99",
    href: "/Black-Striped-Pants",
  },
  {
    id: "2",
    name: "Soap",
    img1: "https://images.unsplash.com/photo-1589060040782-234fa4ee0b61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    img2: "https://images.unsplash.com/photo-1589060040843-7a31813e6fb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    price: "9.99",
    sale: "6.99",
    href: "/Soap",
  },
];

//generates the listing for men.html
generateListing(menListing, menListingRow);

//generates the listing for women.html
generateListing(womenListing, womenListingRow);

//generates the listing for beauty.html
generateListing(beautyListing, beautyListingRow);

//generates the listing for sale.html
generateListing(saleListing, saleListingRow);

//function to generate each listing page
function generateListing(listing, location) {
  if (location) {
    makeListing(listing, location);
    hoverImg(listing);
    sortListing(listing, location);
  }
}

// appends the listings onto the designated page
function makeListing(listing, location) {
  for (content of listing) {
    let newListing = document.createElement("div");
    let imgListing = document.createElement("img");
    let imgLink = document.createElement("a");
    let itemName = document.createElement("a");
    let itemPrice = document.createElement("p");

    imgLink.append(imgListing);

    newListing.append(imgLink);
    newListing.append(itemName);
    newListing.append(itemPrice);

    newListing.setAttribute("class", "itemListing");
    imgListing.setAttribute("alt", content.name);
    imgListing.setAttribute("id", content.id);
    imgListing.src = content.img1;
    itemName.textContent = content.name;
    itemName.href = content.href;
    imgLink.href = content.href;
    itemPrice.textContent = `$${content.price}`;

    //checks if the listing has a sale property and if so then updates the page to have the sale price
    if (content.sale) {
      let itemSale = document.createElement("p");
      newListing.append(itemSale);
      itemSale.textContent = `$${content.sale}`;
      itemPrice.setAttribute("style", "text-decoration: line-through;");
      itemSale.setAttribute("style", "color: red;");
    }

    location.append(newListing);
  }
}

// changes listing img src on hover
function hoverImg(listing) {
  let x = [];
  for (let i = 0; i < listing.length; i++) {
    x.push(document.getElementById(listing[i].id));
    x[i].addEventListener("mouseover", () => {
      x[i].src = listing[i].img2;
    });
    x[i].addEventListener("mouseout", () => {
      x[i].src = listing[i].img1;
    });
  }
}

//sorts the page listing by the selected sort option
function sortListing(listing, location) {
  sort.addEventListener("change", function () {
    console.log("You selected: ", this.value);
    if (sort.value === "low") {
      listing = listing.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (sort.value === "high") {
      listing = listing.sort((a, b) => {
        return b.price - a.price;
      });
    } else if (sort.value === "new") {
      listing = listing.sort((a, b) => {
        return b.id - a.id;
      });
    } else {
      listing = listing.sort((a, b) => {
        return a.id - b.id;
      });
    }
    location.innerHTML = "";
    makeListing(listing, location);
    hoverImg(listing);
  });
}

/*
shipping.html, cart.html js
*/

const collapseBtn = document.querySelectorAll(".collapseBtn");
const shipCollapse = document.querySelectorAll(".shipCollapse");
const fas = document.querySelectorAll(".fa-plus");
const cartContent = document.querySelectorAll("#cartTable td")[1];
const cartEmpty = document.querySelector("#cartEmpty");

if (cartContent) {
  if (cartContent.innerHTML) {
    cartEmpty.style.display = "none";
  }
}
//toggle for the collapsibles on the bottom of shipping.html
if (collapseBtn) {
  for (let i = 0; i < collapseBtn.length; i++) {
    collapseBtn[i].addEventListener("click", () => {
      if (shipCollapse[i].style.display === "block") {
        shipCollapse[i].setAttribute("style", "display: none");
        fas[i].classList.remove("fa-minus");
        fas[i].classList.add("fa-plus");
      } else {
        shipCollapse[i].setAttribute("style", "display: block");
        fas[i].classList.remove("fa-plus");
        fas[i].classList.add("fa-minus");
      }
    });
  }
}

/*
home.ejs
*/

const seeMore = document.querySelector(".seeMore");
const UOabout = document.querySelector("#UOabout");
const aboutUOText = [
  "Urban Outfitters is a lifestyle retailer dedicated to inspiring customers through a unique combination of product, creativity and cultural understanding. Founded in 1970 in a small space across the street from the University of Pennsylvania, Urban Outfitters now operates over 2...",
  "Urban Outfitters is a lifestyle retailer dedicated to inspiring customers through a unique combination of product, creativity and cultural understanding. Founded in 1970 in a small space across the street from the University of Pennsylvania, Urban Outfitters now operates over 200 stores in the United States, Canada and Europe, offering experiential retail environments and a well-curated mix of on-trend women’s and men’s clothes, from boho dresses, denim and graphics to shoes, hats, and backpacks, as well as beauty, intimates, swim and a collection of handpicked vintage clothing. Urban Outfitters also carries everything you need to decorate your small space, apartment or dorm, with a UO Home collection that includes bedding, tapestries, rugs, shower curtains and furniture. Our Music + Tech collection is a go-to destination for vinyl, record players and tech accessories. Visit our stores, where all are welcome and there’s always something new to see, or shop online at UrbanOutfitters.com and get free shipping on US orders over $50. For special offers, one-of-a-kind prizes and more, download the UO app and join UO Rewards! Want to be part of the conversation? Follow, share and shop @UrbanOutfitters.",
];

if (seeMore) {
  seeMore.addEventListener("click", () => {
    if (seeMore.text === "See More") {
      seeMore.text = "See Less";
      UOabout.innerText = aboutUOText[1];
    } else {
      seeMore.text = "See More";
      UOabout.innerText = aboutUOText[0];
    }
  });
}

/*
product.ejs js
*/

const smallProductImg = document.querySelectorAll("#clickableImages img");
const focusedImage = document.querySelector("#focusedImage img");

//changes the product page focused image on click
if (focusedImage) {
  for (let i = 0; i < smallProductImg.length; i++) {
    smallProductImg[i].addEventListener("click", () => {
      focusedImage.src = smallProductImg[i].src;
    });
  }
}
