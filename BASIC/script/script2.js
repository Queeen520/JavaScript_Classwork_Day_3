// ex 2 | Temperature v2.0
// Now when you have program Temperature v1.0 done from the other day, 
// it is time to upgrade it to the version 2.0. Now you should create a nice 
// looking responsive front-end for your program (mobile friendly) and create more messages 
//(e.g. if the temperature is above 32c output "The weather is hot" etc.)
// and you should display a proper image for the current weather condition.






function btnClick() {

    const temp = Math.floor(Math.random() * 33) -5;
    console.log(temp);

let br = "<br>"

let cold = "The current temperature is " + temp + "°C" + br  + "The weather is cold";
let moderate = "The current temperature is " + temp + "°C" + br  + "The weather is moderate";
let hot = "The current temperature is " + temp + "°C" + br  + "The weather is hot";


if (temp <= 11) {
        console.log("The weather is cold");
        
        let h2 = document.querySelector("h2"); 
            h2.innerHTML = cold;
        }
    
    else  if (temp >= 11 && temp <= 32 ) {
        console.log("The weather is moderate");

        let h2 = document.querySelector("h2"); 
            h2.innerHTML = moderate;
    }

    else  {
        console.log("The weather is hot");

        let h2 = document.querySelector("h2"); 
            h2.innerHTML = hot;
    };
};