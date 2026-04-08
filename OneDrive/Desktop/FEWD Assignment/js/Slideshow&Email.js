document.addEventListener("DOMContentLoaded", () => {

   const slides = document.querySelectorAll(".slide");
let current = 0;
let interval;

/* show slide */
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

/* next */
function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}

/* autoplay */
function startSlideshow() {
    interval = setInterval(nextSlide, 3500);
}

/* pause on hover (premium UX) */
document.querySelector(".slideshow").addEventListener("mouseenter", () => {
    clearInterval(interval);
});

document.querySelector(".slideshow").addEventListener("mouseleave", () => {
    startSlideshow();
});

/* init */
showSlide(current);
startSlideshow();

    /* ================= EMAIL MODAL ================= */
    const modal = document.getElementById("welcomeModal");
    const closeBtn = document.getElementById("closeModal");
    const form = document.getElementById("signupForm");

   // ✅ SHOW ONLY IF NOT LOGGED IN
const isLoggedIn = localStorage.getItem("loggedIn") === "true";

if (modal && !isLoggedIn && !sessionStorage.getItem("popupShown")) {
    setTimeout(() => {
        modal.classList.remove("hidden");
        modal.style.display = "flex";

        sessionStorage.setItem("popupShown", "true");
    }, 1200);
}

    closeBtn?.addEventListener("click", () => {
        modal.style.display = "none";
    });

    form?.addEventListener("submit", (e) => {
        e.preventDefault();

        // Redirect to login page
        window.location.href = "Login-Sign_up.html";
    });

});