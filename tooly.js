
let log = "";
var precision = 3;
var weight;
var weight1units;
var weight2units;
var length;
var length1units;
var length2units;
var area;
var area1units;
var area2units;
var volume;
var volume2units;
var volume1units;
var homePrice;
var downpayment;
var loanLength;
var interestAnnual;
var i;
var numPayments;
var propertyTaxMonthly;
var homeInsuranceMonthly = 66;
var monthlyPayment;
var principal;
var yearlyPayment;
var totalPayment;
var totalTaxes;

function registerListeners(){
    var menuItem;
    // unit 1 menu buttons
    menuItem = document.getElementById("tooly1");
    menuItem.addEventListener("click",
        function(){localStorage["toolNo"] = 1; getContent("tooly1.html");}, false);

    menuItem = document.getElementById("tooly2");
    menuItem.addEventListener("click",
        function(){localStorage["toolNo"] = 2; getContent("tooly2.html");}, false);

    // unit 2 menu buttons
    menuItem = document.getElementById("tooly3");
    menuItem.addEventListener("click",
        function(){localStorage["toolNo"] = 3; getContent("tooly3.html");}, false);


}

function changePrecision(){
    precision = document.getElementById("precision").value;
    document.getElementById("precVal").innerHTML = "["+precision+"]";
    convertWeight();
    convertLength();
    convertArea();
    convertVolume();
}

function changeDownPaymentPrice(){
    downpayment = document.getElementById("downPayment").value;
    document.getElementById("downPaymentVal").innerHTML = "["+downpayment+" %]";
    calculateMortgage();
}

function convertWeight(){
    weight = parseInt(document.getElementById("weight").value);
    if(weight.toString().length !== 0 &&  isNaN(weight)){
        //invalid input
        document.getElementById("errmsg1").innerHTML = "Please enter a valid number";
    }
    else{
        //valid input -- preform weight conversion
        document.getElementById("errmsg1").innerHTML = "";
        weight1units = document.getElementById("weight1").value;
        weight2units = document.getElementById("weight2").value;

        // convert all inputs to grams to avoid exponential cases
        switch(weight1units){
            case "g":
                break;
            case "kg":
                weight *= 1000;
                break;
            case "oz":
                weight *= 28.3495;
                break;
            case "lbs":
                weight *= 453.592;
                break;
        }
        // convert to final result
        switch (weight2units) {
            case "g":
                document.getElementById("weightfinal").innerHTML = weight.toFixed(precision) + " g";
                break;
            case "kg":
                weight /= 1000;
                document.getElementById("weightfinal").innerHTML = weight.toFixed(precision) + " kg";
                break;
            case "oz":
                weight /= 28.3495;
                document.getElementById("weightfinal").innerHTML = weight.toFixed(precision) + " oz";
                break;
            case "lbs":
                weight /= 453.592;
                document.getElementById("weightfinal").innerHTML = weight.toFixed(precision) + " lbs";
                break;
        }

    }
}

function convertLength(){
    length = parseInt(document.getElementById("length").value);
    if(length.toString().length !== 0 &&  isNaN(length)){
        //invalid input
        document.getElementById("errmsg2").innerHTML = "Please enter a valid number";
    }
    else{
        //valid input -- preform weight conversion
        document.getElementById("errmsg2").innerHTML = "";
        length1units = document.getElementById("length1").value;
        length2units = document.getElementById("length2").value;

        // convert all inputs to m to avoid exponential cases
        switch(length1units){
            case "mm":
                length /= 1000;
                break;
            case "cm":
                length /= 100;
                break;
            case "m":
                break;
            case "km":
                length *= 1000;
                break;
            case "inches":
                length *= 0.0254;
                break;
            case "ft":
                length *= 0.3048;
                break;
            case "miles":
                length /= 0.000621371;
                break;
        }
        // convert to final result from m
        switch(length2units){
            case "mm":
                length *= 1000;
                document.getElementById("lengthfinal").innerHTML = length.toFixed(precision) + " mm";
                break;
            case "cm":
                length *= 100;
                document.getElementById("lengthfinal").innerHTML = length.toFixed(precision) + " cm";
                break;
            case "m":
                document.getElementById("lengthfinal").innerHTML = length.toFixed(precision) + " m";
                break;
            case "km":
                length *= 0.001;
                document.getElementById("lengthfinal").innerHTML = length.toFixed(precision) + " km";
                break;
            case "inches":
                length /= 0.0254;
                document.getElementById("lengthfinal").innerHTML = length.toFixed(precision) + " inches";
                break;
            case "ft":
                length /= 0.3048;
                document.getElementById("lengthfinal").innerHTML = length.toFixed(precision) + " ft";
                break;
            case "miles":
                length *= 0.000621371;
                document.getElementById("lengthfinal").innerHTML = length.toFixed(precision) + " miles";

                break;
        }
    }
}

function convertArea(){
    area = parseInt(document.getElementById("area").value);
    if(area.toString().length !== 0 &&  isNaN(area)){
        //invalid input
        document.getElementById("errmsg3").innerHTML = "Please enter a valid number";
    }
    else{
        //valid input -- preform weight conversion
        document.getElementById("errmsg3").innerHTML = "";
        area1units = document.getElementById("area1").value;
        area2units = document.getElementById("area2").value;

        // convert all inputs to m^2 to avoid exponential cases
        switch(area1units){
            case "mm":
                area *= Math.pow(10, -6);
                break;
            case "cm":
                area *= 0.0001;
                break;
            case "m":
                break;
            case "km":
                area *= 1000000;
                break;
            case "inches":
                area *= 0.00064516;
                break;
            case "ft":
                area *= 0.092903;
                break;
            case "miles":
                area *= 2.59 * Math.pow(10, 6);
                break;
        }
        // convert to final result from m
        switch(area2units){
            case "mm":
                area /= Math.pow(10, -6);
                document.getElementById("areafinal").innerHTML = area.toFixed(precision) + " mm<sup>2</sup>";
                break;
            case "cm":
                area /= 0.0001;
                document.getElementById("areafinal").innerHTML = area.toFixed(precision) + " cm<sup>2</sup>";
                break;
            case "m":
                document.getElementById("areafinal").innerHTML = area.toFixed(precision) + " m<sup>2</sup>";
                break;
            case "km":
                area /= 1000000;
                document.getElementById("areafinal").innerHTML = area.toFixed(precision) + " km<sup>2</sup>";
                break;
            case "inches":
                area /= 0.00064516;
                document.getElementById("areafinal").innerHTML = area.toFixed(precision) + " inches<sup>2</sup>";
                break;
            case "ft":
                area /= 0.092903;
                document.getElementById("areafinal").innerHTML = area.toFixed(precision) + " ft<sup>2</sup>";
                break;
            case "miles":
                area /= 2.59 * Math.pow(10, 6);
                document.getElementById("areafinal").innerHTML = area.toFixed(precision) + " miles<sup>2</sup>";

                break;
        }
    }
}

function convertVolume(){
    volume = parseInt(document.getElementById("volume").value);
    if(volume.toString().length !== 0 &&  isNaN(volume)){
        //invalid input
        document.getElementById("errmsg4").innerHTML = "Please enter a valid number";
    }
    else{
        //valid input -- preform weight conversion
        document.getElementById("errmsg4").innerHTML = "";
        volume1units = document.getElementById("volume1").value;
        volume2units = document.getElementById("volume2").value;

        // convert all inputs to m^3 to avoid exponential cases
        switch(volume1units){
            case "L":
                volume *= 0.001;
                break;
            case "cup":
                volume *= 0.000236588;
                break;
            case "mm":
                volume *= Math.pow(10, -9);
                break;
            case "cm":
                volume *= Math.pow(10, -6);
                break;
            case "m":
                break;
            case "inches":
                volume *= 1.63871 * Math.pow(10, -5);
                break;
            case "ft":
                volume *= 0.0283168;
                break;
        }
        // convert to final result from m
        switch(volume2units){
            case "L":
                volume /= 0.001;
                document.getElementById("volumefinal").innerHTML = volume.toFixed(precision) + " L";
                break;
            case "cup":
                volume /= 0.000236588;
                document.getElementById("volumefinal").innerHTML = volume.toFixed(precision) + " cups";
                break;
            case "mm":
                volume /= Math.pow(10, -9);
                document.getElementById("volumefinal").innerHTML = volume.toFixed(precision) + " mm<sup>3</sup>";
                break;
            case "cm":
                volume /= Math.pow(10, -6);
                document.getElementById("volumefinal").innerHTML = volume.toFixed(precision) + " cm<sup>3</sup>";
                break;
            case "m":
                document.getElementById("volumefinal").innerHTML = volume.toFixed(precision) + " m<sup>3</sup>";
                break;
            case "inches":
                volume /= 1.63871 * Math.pow(10, -5);
                document.getElementById("volumefinal").innerHTML = volume.toFixed(precision) + " inches<sup>3</sup>";
                break;
            case "ft":
                volume /= 0.0283168;
                document.getElementById("volumefinal").innerHTML = volume.toFixed(precision) + " ft<sup>3</sup>";
                break;
        }
    }
}

function calculateMortgage(){
    homePrice = parseInt(document.getElementById("homePrice").value);
    interestAnnual = parseInt(document.getElementById("interest").value);
    if(homePrice.toString().length !== 0 &&  isNaN(homePrice)){
        //invalid input
        document.getElementById("errmsg7").innerHTML = "Please enter a valid number";
        return;
    }
    else{
        document.getElementById("errmsg7").innerHTML = "";
    }
    if(interestAnnual.toString().length !== 0 &&  isNaN(interestAnnual)){
        //invalid input
        document.getElementById("errmsg8").innerHTML = "Please enter a valid number";
        return;
    }
    else{
        document.getElementById("errmsg8").innerHTML = "";
    }

    downpayment = document.getElementById("downPayment").value;
    principal = homePrice-((downpayment/100)*homePrice);
    loanLength = document.getElementById("loanLength").value;
    i = interestAnnual/1200;
    numPayments = loanLength*12;
    propertyTaxMonthly = (homePrice * 0.237) / (loanLength*12);
    monthlyPayment = (principal) * ((i*Math.pow(1+i, loanLength*12)) / (Math.pow((1+i),loanLength*12)-1));
    monthlyPayment += (homeInsuranceMonthly + propertyTaxMonthly);
    yearlyPayment = monthlyPayment*12;
    totalPayment = yearlyPayment * loanLength;
    totalTaxes = totalPayment-homePrice;
    document.getElementById("finalMortgage").innerHTML = "Monthly payment: " + monthlyPayment.toFixed(2);
    document.getElementById("finalyearly").innerHTML = "Yearly payment: " + yearlyPayment.toFixed(2);
    document.getElementById("totalpaid").innerHTML = "Total payment: " + totalPayment.toFixed(2);
    document.getElementById("totaltaxes").innerHTML = "Total interest/taxes/insurance paid: " + totalTaxes.toFixed(2);
}

function convertToDec(){
    var binary = document.getElementById("base2").value.toString();
    var dec = 0;
    var current;
    var len = binary.length;
    var pwr = 1;
    var last = parseInt(binary.charAt(len-1));
    if(isNaN(last)){
        document.getElementById("errmsg5").innerHTML = "Please enter a valid number";
        return;
    }

    for(var i = len-1; i >= 0; i--){
        current = parseInt(binary.charAt(i));
        console.log("isnan: " + isNaN(current));
        if((current !== 1) && ((current) !== 0)) {
            document.getElementById("errmsg5").innerHTML = "Please enter a valid number";
            return;
        }
        dec += current * pwr;
        pwr = pwr*2;
    }
    document.getElementById("errmsg5").innerHTML = "";
    document.getElementById("base10").value = dec;
}

function convertToBin(){
    var bin = "";
    var decimal = parseInt(document.getElementById("base10").value);
    if(decimal.toString().length !== 0 &&  isNaN(decimal)){
        //invalid input
        document.getElementById("errmsg6").innerHTML = "Please enter a valid number";
    }
    else{
        document.getElementById("errmsg6").innerHTML = "";
        bin = decimal.toString(2);
    }
    document.getElementById("base2").value = bin;
}

function getContent(url){
    clearContent();
    try
    {
        asyncRequest = new XMLHttpRequest();
        asyncRequest.addEventListener(
            "readystatechange", stateChange, false);

        asyncRequest.open( "GET", url, true );
        asyncRequest.send( null );
    }
    catch ( exception )
    {
        alert( "Request failed." );
    }
}

function stateChange(){
    if ( asyncRequest.readyState == 4 && asyncRequest.status == 200 ){
        document.getElementById( "toolArea" ).innerHTML =
            asyncRequest.responseText;
    }
}

function clearContent(){
    document.getElementById( "toolArea" ).innerHTML = "";

}

function setup(){
    localStorage["toolNo"] = 1;
    getContent("tooly2.html");
    registerListeners();
}

window.addEventListener( "load",setup , false );
