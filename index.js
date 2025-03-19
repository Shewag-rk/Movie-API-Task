// Registration From Javascript
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("submitbtn").addEventListener("click", (event) => {
        event.preventDefault();
        
        let inputField = document.getElementById('inputName').value;
        let userName = document.getElementById('inputUsername').value;
        let userEmail = document.getElementById('inputEmail').value;
    
        let userObjData = JSON.parse(localStorage.getItem("registerUsers")) || [];
    
        const loignUserDetails = {
            username: inputField,
            name: userName,
            useremail: userEmail
        }
        userObjData.push(loignUserDetails);
        // console.log(loignUserDetails);
        localStorage.setItem("registerUsers", JSON.stringify(userObjData));
        document.getElementById("registerForm").innerHTML = "";
        // alert("Added local storage");
    })
})