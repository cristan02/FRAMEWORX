const form = document.getElementById("contact");
const artist_name = document.getElementById("artist");
const message_text = document.querySelector("#message");


form.addEventListener("submit", function (event) {
	let valid_fname = validify_name(form.elements["fname"] , "Enter First name" , "Invalid First name");
    let valid_lname = validify_name(form.elements["lname"] , "Enter Last name" , "Invalid Lirst name");
    let valid_email = validify_email(form.elements["email"]);
    let valid_message = validify_message(message_text);

    if (valid_fname &&  valid_lname &&  valid_email && valid_message) {
		alert("Message sent to " + artist_name.value);
	}
    else{
        event.preventDefault();
    }
});

function validify_name(name , message , inv_message){
    
    const msg = name.parentNode.querySelector("small");
    const name_trm = name.value.trim();
    const name_format = /^[A-Za-z]+$/;

    if (name_trm === "") {
	    msg.innerText = message; 
        return false;
    }
    else if(!name_format.test(name_trm)){
        msg.innerText = inv_message;
        return false;
    }
    else{
	    msg.innerText = "";
        return true;
    }
}

function validify_email(email){

    const email_trm = email.value.trim();
    const email_format = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const msg = email.parentNode.querySelector("small");

    if (email_trm === "") {        
	    msg.innerText = "Enter e-mail ID";
        return false;
    }
    else if(!email_format.test(email_trm)){
        msg.innerText = "Invalid E-mail ID";
        return false;
    }
    else{
	    msg.innerText = "";
        return true;
    }
}

function validify_message(message){

    const msg = message.parentNode.querySelector("small");

    if (message.value.trim() === "") {
	    msg.innerText = "Cannot send empty message";
        return false;   
    }
    else{
	    msg.innerText = "";
        return true;
    }
}