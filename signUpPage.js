// register page function:
function registerPageLocalStorage(){
    document.getElementById('submitbtn').addEventListener("click", function(){
        const nameUser  = document.getElementById('nameUser').value;
            const userName  = document.getElementById('userName').value;
            const userEmail = document.getElementById('userEmail').value;            
                const Detalis  = JSON.parse(localStorage.getItem("userValues")) || [];
                const signUpDetalis = {
                    nameUser: nameUser,
                    userName: userName,
                    userEmail: userEmail
                }
                Detalis.push(signUpDetalis);
    
                localStorage.setItem("userValues", JSON.stringify(Detalis));
                document.getElementById("registerorm").reset();
                // localStorage.JSON.stringify(Detalis);
                console.log(Detalis);
            
                const getUserDetails = localStorage.getItem('userValues');
                // console.log(getUserDetails);
                
                getUserDetails.forEach(element => {
                    console.log(getUserDetails);
                });
                
    })
}
registerPageLocalStorage();