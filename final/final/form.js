document.getElementById("eForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("mail").value;
    const age = document.getElementById("age").value;
    const size = document.getElementById("size").value;
    const date = document.getElementById("date").value;
    const comments = document.getElementById("comments").value;

    if (!fullname) {
    alert("You need to enter your name.");
    return;
    }
    if (!age) {
        alert("You need to enter your age.");
        return;
    }
    if (!size || size < 1) {
        alert("Please enter number of travelers (at least 1).");
        return;
    }
    if (!date) {
        alert("Please select a preferred travel date.");
        return;
    }
    if (!email) {
        alert("You need to enter your email.");
        return;
    }


    const data = {
        fullname:fullname,
        Email:email,
        Age: age,
        GroupSize: size,
        TravelDate: date,
        Comments: comments
        
    }
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("signIn").innerHTML = response.message;
            document.getElementById("eForm").reset();
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };
    xhr.send();
    console.log(data);

});
