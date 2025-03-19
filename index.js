
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("submitbtn").addEventListener("click", (event) => {
        event.preventDefault();
        
        let inputField = document.getElementById('inputName').value;
        let userName = document.getElementById('inputUsername').value;
        let userEmail = document.getElementById('inputEmail').value;
        

        if(!inputField.trim() === "" & !inputField === /^[A-Za-z]+$/.test(inputField)){
            // showAlert("enter username, Don't leave blank space!", "error-message");
            setTimeout(() => {
                inputField.innerHTML = "Don' leave blank space invalid name";
                inputField.classList.add("error")
            }, 2000);t
            return;
        }else{
            // alert("Corrected username");
            setTimeout(() => {
                inputField.innerHTML = "Corrected username";
                inputField.classList.add("success");
            }, 2000);
            return;
        }

        // if(userName.trim() === ""){
        //     // showAlert("enter username, Don't leave blank space!", "error-message");
        //     alert("Don't leavre blank space ,Invalid username")
        // }else if(!/^[A-Za-z]+$/.test(userName)){
        //     // showAlert("verifyed username" ,"success-message");
        //     alert("format username verfiyed");
        // }else{
        //     alert("Corrected username");
        // }



        // if(!/^[A-Za-z]+$/.test(inputField)){
        //     showAlert("don't enter special characters!", "error-message");
        // }else{
        //     showAlert("valid username", "success-message")
        //     return;
        // }

        // if(userEmail.trim() === ""){
        //     showAlert("don't type blank space" ,"error-message");
        // }else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail)){
        //     showAlert("don't type unvalid email", "error-message");
        // }else{
        //     showAlert("verifyed email", "success-message");
        // }
        


        // let userObjData = JSON.parse(localStorage.getItem("registerUsers")) || [];
    
        // const loignUserDetails = {
        //     username: inputField,
        //     name: userName,
        //     useremail: userEmail
        // }
        // userObjData.push(loignUserDetails);
        // localStorage.setItem("registerUsers", JSON.stringify(userObjData));
        // document.getElementById("registerForm").innerHTML = "";
    })
})

function showError(){

}

function showSuccess(){
    
}
