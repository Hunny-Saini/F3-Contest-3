//checking if there is no data in local storage
if(!localStorage.getItem("user")){
    window.location.href = "index.html";
}

//function to show data on profile page
function showData(){
    var user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    //showing data on profile page
    document.getElementById("name").innerHTML = `Full Name : ${user.name}`;
    document.getElementById("email").innerHTML = `Email : ${user.email}`;
    document.getElementById("pass").innerHTML = `Password : ${user.password}`;
};

//logout function
logoutBtn.addEventListener("click",logout)
function logout(){
    localStorage.removeItem("user");
    window.location.href = "index.html";
}

showData();