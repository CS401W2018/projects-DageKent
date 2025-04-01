document.getElementById("workForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("mail").value;
    const pass = document.getElementById("pass").value;
    const age = document.getElementById("age").value;
    const state = document.getElementById("state").value;

    if (!fullname) {
    alert("You need to enter your name.");
    return;
    }
    if (!pass) {
        alert("You need to enter your password.");
        return;
    }
    if (!age) {
        alert("You need to enter your age.");
        return;
    }

    if (age<18) {
        alert("Sorry, you need to be 18 or more than 18.");
        return;
    }
    if (state === "blank") { 
        alert("You need to select a state."); 
        return; 
    }

    const data = {
        fullname:fullname,
        Email:email,
        Password: pass,
        Age: age,
        State: state
        
    }
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("content").innerHTML = response.message;
            document.getElementById("workForm").reset();
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };
    xhr.send();
    console.log(data);

});