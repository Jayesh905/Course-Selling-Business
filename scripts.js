// ===============================
// THE FOUJI GYM - script.js
// ===============================

// Sticky Navbar
window.addEventListener("scroll", function () {
    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        nav.style.background = "#000";
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";
    } else {
        nav.style.background = "rgba(0,0,0,.8)";
        nav.style.boxShadow = "none";
    }
});

// Active Menu
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Fade Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

});

document.querySelectorAll(".box,.plan,.review,.gallery img").forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = ".7s";

    observer.observe(el);

});

// Scroll To Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "95px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#ff2e2e";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};

// Gallery Click Zoom
document.querySelectorAll(".gallery img").forEach(img => {

    img.onclick = function () {

        let popup = document.createElement("div");

        popup.style.position = "fixed";
        popup.style.left = "0";
        popup.style.top = "0";
        popup.style.width = "100%";
        popup.style.height = "100%";
        popup.style.background = "rgba(0,0,0,.9)";
        popup.style.display = "flex";
        popup.style.justifyContent = "center";
        popup.style.alignItems = "center";
        popup.style.cursor = "pointer";

        let image = document.createElement("img");

        image.src = this.src;
        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.borderRadius = "15px";

        popup.appendChild(image);

        popup.onclick = () => popup.remove();

        document.body.appendChild(popup);

    };

});

// Console Message
console.log("🔥 Welcome to The Fouji Gym Website");
