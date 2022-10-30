// Get Data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const concern = document.querySelector("#concern");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

// Validate Data
function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag= true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag= true;
    }

    if(concern.value.length < 1){
        errorNodes[2].innerText = "Please enter your concern";
        concern.classList.add("error-border");
        errorFlag= true;
    }

    if(!errorFlag){
        success.innerText = "Success!";
    }
}

// Clear error / success messages
function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    concern.classList.remove("error-border");
}

// Check if email is valid
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email)
}