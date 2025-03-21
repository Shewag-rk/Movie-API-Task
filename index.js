const loginbtn = document.getElementById('loginbtn');
const getUserDetails = JSON.parse(window.localStorage.getItem('userValues'));
const emailregex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

// console.log(getUserDetails);

loginbtn.addEventListener('click', () =>{
    const username = document.getElementById('username').value;
    const useremail = document.getElementById('useremail').value;
    getUserDetails.forEach(element => {
        if(username.trim() == "" && element.userName !== username & element.userID == true){
            element.userID = false
            alert("please enter username! & username not found")
            return;
        }else if(useremail.trim !== "" & emailregex.test(useremail) & element.userEmail !== useremail){
            alert("Enter invalid email! & mail not found");
            return
        }else{
            alert("data matched");
            window.location.href = "moviesHome.html";
            document.getElementById('loginForm').reset();
        }
    
    });
})
