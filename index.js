// create needed constants
const testDiv = document.querySelector('.test');
const resultDiv = document.querySelector('.result');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const resetBtn = document.querySelector('#reset');

const carQ = document.querySelector('#car');


const yourname = document.querySelector('.yourname');
const yourclass = document.querySelector('.yourclass');

//slider code from w3school
var slider = document.getElementById("myRange");
var output = document.getElementById("output");
output.innerHTML = slider.value; // Display the default slider value


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}

// Stop the form from submitting when a button is pressed
form.addEventListener('submit', e => e.preventDefault());

// run function when the 'submit' button is clicked
submitBtn.addEventListener('click', () => {


    let upper = 0;
    let uppermiddle = 0;
    let middle = 0;
    let middlelow = 0;
    let lower = 0;

    // store the entered name in web storage
    localStorage.setItem('name', nameInput.value);
    const name = localStorage.getItem('name');

    //How do you do
    if (document.getElementById('howdoyoudo').value.indexOf('How do you do') > -1 || document.getElementById('howdoyoudo').value.indexOf('how do you do') > -1) {
        upper += 1
        uppermiddle += 1
    }

    //Pardon jquery used
    var pardon = $('input[name="pardon"]:checked').val();
    console.log(pardon)
    if (pardon == "what") {
        upper += 1
        lower += 1
    } else if (pardon == "sorry") {
        uppermiddle += 1
    } else if (pardon == "pardon") {
        middle += 1
        middlelow += 1
    }



    //Dinner or tea
    var dinner = $('input[name="dinner"]:checked').val();
    console.log(dinner)
    if (dinner == "tea") {
        lower += 1
    } else if (dinner == "dinner") {
        middlelow += 1
        middle += 1
    } else if (dinner == "supper") {
        uppermiddle += 1
        upper += 1
    }


    //Pudding?
    var pudding = $('input[name="pudding"]:checked').val();
    console.log(pudding)
    if (pudding == "sweet" || pudding == "afters") {
        middle += 1
        middlelow += 1
        lower += 1
    } else if (pudding == "pudding") {
        upper += 1
        uppermiddle += 1
    }





    //Mum or Mummy
    var mumdad = $('input[name="mumdad"]:checked').val();
    console.log(mumdad)
    if (mumdad == "mumdad") {
        middle += 1
        middlelow += 1
        lower += 1
    } else if (mumdad == "mummydaddy") {
        upper += 1
        uppermiddle += 1
    }





    //car of choice
    const car = carQ.value;
    console.log(car)
    if (car == "Toyota" || car == "Subaru") {
        middlelow += 1
        lower += 1
    } else if (car == "Ford Mondeo" || car == "Mercedes-Benz") {
        middle += 1
    } else if (car == "Volkswagen" || car == "Audi" || car == "Mini") {
        uppermiddle += 1
        upper += 1
    }

    //Carwash jquery used
    var carwash = $('input[name="carwash"]:checked').val();
    console.log(carwash)
    if (carwash == "rain") {
        if (car == "Toyota" || car == "Subaru") {
            lower += 1
        } else {
            upper += 1
        }
    } else if (carwash == "myself") {
        middlelow = middlelow + 1
    } else if (carwash == "carwash") {
        middle += 1
        uppermiddle += 1
    } else if (carwash == "hire") {
        upper += 1
    }



    //Car decorate
    var cardeco = $('input[name="cardeco"]:checked').val();
    console.log(cardeco)
    if (cardeco == "y") {
        middlelow += 1
        lower += 1
    }




    //toilet
    var wc = [];
    $('input[name="wc"]:checked').each(function() {
        wc.push(this.value);
    });
    console.log(wc)
    if ($.inArray('toilet', wc) >= 0) {
        lower += 1;
        middlelow += 1;
        middle += 1;
    }
    if ($.inArray('bathroom', wc) >= 0 || ($.inArray('restroom', wc) >= 0)) {
        lower += 1;
        middlelow += 1;
    }
    if ($.inArray('lavatory', wc) >= 0) {
        upper += 1;
        uppermiddle += 1;
    }


    //Living or sitting
    var sitting = $('input[name="sitting"]:checked').val();
    console.log(sitting)
    if (sitting == "living") {
        uppermiddle += 0.5
        middle += 1
        middlelow += 1
        lower += 1
    } else if (sitting == "lounge") {
        middle += 1
        middlelow += 1
        lower += 1
    } else if (sitting == "sitting") {
        upper += 1
        uppermiddle += 1
    }


    //net curtain
    var net = $('input[name="net"]:checked').val();
    console.log(net)
    if (net == "y") {
        middlelow += 1
        lower += 1
    }


    //coaster
    var coaster = $('input[name="coaster"]:checked').val();
    console.log(coaster)
    if (coaster == "y") {
        middle += 1;
        middlelow += 1
    }

    //ikea
    var ikea = $('input[name="ikea"]:checked').val();
    console.log(ikea)
    if (ikea == "y") {
        middle += 1;
        middlelow += 1
        lower += 1
    } else if (ikea == "n") {
        upper += 1
        uppermiddle += 1
    }



    //garden
    var garden = $('input[name="garden"]:checked').val();
    console.log(garden)
    if (garden == "colourful") {
        middle += 1;
        middlelow += 1
        lower += 1
    } else if (garden == "muted") {
        upper += 1
        uppermiddle += 1
    }



    //shopping
    var shopping = [];
    $('input[name="shopping"]:checked').each(function() {
        shopping.push(this.value);
    });
    console.log(shopping)
    if ($.inArray('aldi', shopping) >= 0 || ($.inArray('lidl', shopping) >= 0)) {
        lower += 1;
        middlelow += 1;
    } else if ($.inArray('sainsburys', shopping) >= 0 || ($.inArray('tesco', shopping) >= 0)) {
        middle += 1;
        uppermiddle += 1;
    } else if ($.inArray('charity', shopping) >= 0 || $.inArray('ms', shopping) >= 0 || ($.inArray('waitrose', shopping) >= 0)) {
        upper += 1;
    }


    //tea
    var sugar = slider.value
    console.log(sugar)
    if (sugar > 2) {
        lower += 1
    } else if (sugar == 2) {
        middlelow += 1
    } else if (sugar == 1) {
        middle += 1
    }


    //jam
    var jam = $('input[name="jam"]:checked').val();
    console.log(jam)
    if (jam == "thin") {
        middlelow += 1
        lower += 1
    } else if (jam == "thick") {
        upper += 1
        uppermiddle += 1
        middle += 1;
    }


    //slow eater
    var sloweat = $('input[name="sloweat"]:checked').val();
    console.log(sloweat)
    if (sloweat == "spread") {
        middlelow += 1
        lower += 1
    } else if (sloweat == "bitesize") {
        upper += 1
        uppermiddle += 1
        middle += 1;
    }



    let highest = Math.max(upper, uppermiddle, middle, middlelow, lower)
    console.log('Score for upper/uppermiddle/middle/middlelow/low:', upper, uppermiddle, middle, middlelow, lower)

    resultDiv.style.display = 'block';
    testDiv.style.display = 'none';
    yourname.textContent = ` ${name}`;


    if (highest == 0) {
        yourclass.textContent = `Please fill in something in the questionnaire D:`;
    } else if (upper == highest) {
        yourclass.textContent = `UPPER`;

    } else if (uppermiddle == highest) {
        yourclass.textContent = `UPPER MIDDLE`;

    } else if (middle == highest) {
        yourclass.textContent = `MIDDLE`;

    } else if (middlelow == highest) {
        yourclass.textContent = `MIDDLE LOW`;

    } else if (lower == highest) {
        yourclass.textContent = `WORKING`;

    }

});

// run function when the 'reset' button is clicked
resetBtn.addEventListener('click', () => {
    // Remove the stored name from web storage
    localStorage.removeItem('name');

    resultDiv.style.display = 'none';
    testDiv.style.display = 'block';

});

///run 

resultDiv.style.display = 'none';
testDiv.style.display = 'block';