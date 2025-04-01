document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("mail").value;
    const pass = document.getElementById("pass").value;
    const age = document.getElementById("age").value;

    if (!fullname) {
    alert("You need to enter your name.");
    return;
    }
    if (!age) {
        alert("You need to enter your age.");
        return;
    }

    if (age<18) {
        alert("You need to be 18");
        return;
    }
    const data = {
        fullname:fullname,
        Email:email,
        Age: age
    }
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4 && xhr. status === 200) {
            const response = JSON.parse(xhr.responseText)
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML =""
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };
    xhr.send(JSON.stringify(data));
    console.log(data);

});