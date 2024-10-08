const prices = ["Price based on truck bed size.", "$800 + shipping", "$750 + shipping", "$400(Seasoned) 375(Green) + shipping", "$7 each or 3 for $20"]; // Add prices here, seperated by commas, and put in "".
const products = ["Truck Load", "Trailer Load (2 Cord Seasoned Wood)", "Trailer Load (2 Cord green wood)", "By the cord", "Small Bags"]; // Add rpoducts here, seperated by commas and put in "". For example: "2 coords of wood"
const descriptions = ["Bring your own truck and get it filled.", "We bring a trailer load to you.", "We bring a trailer load to you.", "Choose how many cord you want.", "Stop at our stand and pick them up."]; // Here you can put descriptions about the products. Works the same as above.
const images = ["TrailerLoad.jpg", "TrailerLoad.jpg", "TrailerLoad.jpg", "TrailerLoad.jpg", "FirewoodStand.jpg"]; // Here you put the file directory of the images of the products. Make sure to put them in "" and seperate them by commas.
const imageSizes = [100, 100, 100, 100, 100]; // Here enter how many pixels wide you want your image to be. Do not put in "".
const imageHeights = [100, 100, 100, 100, 100]; // Same as imageSizes.



for(i = 0; i<products.length; i++) {
    let priceNode = document.createTextNode(prices[i]);
    let productNode = document.createTextNode(products[i]);
    let descNode = document.createTextNode(descriptions[i]);

    let wholecontainer = document.createElement("div");
    let textcontainer = document.createElement("div");
    let innertextcontainer = document.createElement("div");
    let price = document.createElement("p");
    let product = document.createElement("p");
    let desc = document.createElement("p");

    price.appendChild(priceNode);
    product.appendChild(productNode);
    desc.appendChild(descNode);

    let image = document.createElement("img");
    image.src = images[i];
    image.width = imageSizes[i];
    image.height = imageHeights[i];

    innertextcontainer.appendChild(product);
    innertextcontainer.appendChild(desc);
    innertextcontainer.appendChild(price);

    product.style.fontFamily = "robotoBold";
    desc.style.fontFamily = "robotoRegular";
    price.style.fontFamily = "robotoMedium";

    product.style.fontSize = "20px";
    desc.style.fontSize = "15px";

    textcontainer.appendChild(innertextcontainer);

    innertextcontainer.style.margin = "0px";
    innertextcontainer.style.display = "block";
    innertextcontainer.style.width = "fit-content";
    innertextcontainer.style.height = "fit-content";
    innertextcontainer.style.textAlign = "left";
    
    textcontainer.style.margin = "0px";
    textcontainer.style.display = "inline-flex";
    textcontainer.style.width = "fit-content";
    textcontainer.style.height = "fit-content";

    wholecontainer.appendChild(image);
    wholecontainer.appendChild(textcontainer);

    textcontainer.style.top = 0;
    textcontainer.style.paddingLeft = "10px";

    wholecontainer.style.padding = "25px";
    wholecontainer.style.display = "flex";
    wholecontainer.style.width = "fit-content";
    wholecontainer.style.cursor = "pointer";

    let a = document.createElement("a");
    a.href = "#gap4";

    a.appendChild(wholecontainer);

    document.getElementById("productobjects").appendChild(a);



    let footerpar = document.createElement("p");
    let footernode = document.createTextNode(products[i] + " - " + prices[i]);

    footerpar.appendChild(footernode);

    document.getElementById("footerpricingpar").appendChild(footerpar);
}
