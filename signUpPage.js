// register page function:

document.addEventListener("DOMContentLoaded", (e)=>{
    e.preventDefault();


const submitBtn =  document.getElementById('submitBtn');

   if (!submitBtn) {
    console.error("Error: #submitbtn not found in the DOM");
    return;
}
    submitBtn.addEventListener("click", function(){
        const nameUser  = document.getElementById('nameUser').value;
        const userName  = document.getElementById('userName').value;
        const userEmail = document.getElementById('userEmail').value;   
        const emailregex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        
        if(nameUser.trim() == ""){
            alert("please enter username! & username not found")
            return;
        }else if(userName.trim() == ""){
            alert("Enter any name dont leave blank space!");
            return;
        }else if(userEmail.trim !== "" & emailregex.test(userName)){
            alert("Enter invalid email! & mail not found");
            return
        }else{
            alert("Data successfully added!");
            window.location.href = "index.html"
            document.getElementById('registeForm').reset();
        }
        
        const Detalis  = JSON.parse(localStorage.getItem("userValues")) || [];
            const signUpDetalis = {
                nameUser: nameUser,
                userName: userName,
                userEmail: userEmail,
                userID: true
            }
            Detalis.push(signUpDetalis);
    
        localStorage.setItem("userValues", JSON.stringify(Detalis));
        document.getElementById("registeForm").reset();
        console.log(Detalis);
    })
});