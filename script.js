const prices = ["$4.99", "$5.00", "54", "45", "45", "45"]; // Add prices here, seperated by commas, and put in "".
const products = ["Oreos", "whfgerjfger", "45", "45", "45", "45"]; // Add rpoducts here, seperated by commas and put in "". For example: "2 coords of wood"
const descriptions = ["Yum", "kerjhgkerhg", "45", "45", "45", "45"]; // Here you can put descriptions about the products. Works the same as above.
const images = ["Demo.png", "Demo.png", "Demo.png", "Demo.png", "Demo.png", "Demo.png"]; // Here you put the file directory of the images of the products. Make sure to put them in "" and seperate them by commas.
const imageSizes = [100, 100, 100, 100, 100, 100]; // Here enter how many pixels wide you want your image to be. Do not put in "".



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