/* NAVBAR AUTH SYSTEM */

function updateNavbar(){
    const loggedIn = localStorage.getItem("loggedIn") === "true";

    const loginLink = document.getElementById("loginLink");
    const profileBox = document.getElementById("profileBox");

    if(!loginLink || !profileBox) return;

    if(loggedIn){
        loginLink.style.display = "none";
        profileBox.classList.remove("hidden");
    }else{
        loginLink.style.display = "inline-block";
        profileBox.classList.add("hidden");
    }
}

function toggleProfileMenu(){
    document.getElementById("profileMenu")?.classList.toggle("hidden");
}

function logout(){
    localStorage.removeItem("loggedIn");
    window.location.href = "home.html";
}

/* AUTO RUN ON EVERY PAGE */
document.addEventListener("DOMContentLoaded", updateNavbar);