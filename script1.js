<<<<<<< HEAD
// Hamburger menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // swap icons
  hamburger.classList.toggle("hide");
  closeIcon.classList.toggle("show");
});

// close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("hide");
    closeIcon.classList.remove("show");
  });
});

// from validation
const requestBtn = document.querySelector(".mech");

requestBtn.addEventListener("click", () => {
  const issue = document.querySelectorAll(".problem")[0].value.trim();
  const location = document.querySelectorAll(".problem")[1].value.trim();

  if (!issue || !location) {
    alert("Please fill both Vehicle Issue and Location");
    return;
  }

  requestBtn.innerText = "Finding Mechanic...";
  requestBtn.disabled = true;

  setTimeout(() => {
    alert("Mechanic requested successfully! 🚗🔧");

    requestBtn.innerText = "Request Mechanic";
    requestBtn.disabled = false;

    document.querySelectorAll(".problem").forEach(input => {
      input.value = "";
    });

  }, 2000);
});

// smooth scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

//nav on scroll down
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
  } else {
    nav.style.boxShadow = "none";
  }
});

// Auto fill vehicle issue when service card is clicked
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const service = card.querySelector("p").innerText;

    document.querySelectorAll(".problem")[0].value = service;

    // scroll to form
    document.querySelector(".content-background")
      .scrollIntoView({ behavior: "smooth" });
  });
});

function getLocation() {
  const locationInput = document.querySelectorAll(".problem")[1];

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      locationInput.value = `Lat: ${lat}, Lon: ${lon}`;
    });
  } else {
    alert("Geolocation not supported");
  }
}

const cards = document.querySelectorAll(".card1");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

=======
// Hamburger menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // swap icons
  hamburger.classList.toggle("hide");
  closeIcon.classList.toggle("show");
});

// close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("hide");
    closeIcon.classList.remove("show");
  });
});

// from validation
const requestBtn = document.querySelector(".mech");

requestBtn.addEventListener("click", () => {
  const issue = document.querySelectorAll(".problem")[0].value.trim();
  const location = document.querySelectorAll(".problem")[1].value.trim();

  if (!issue || !location) {
    alert("Please fill both Vehicle Issue and Location");
    return;
  }

  requestBtn.innerText = "Finding Mechanic...";
  requestBtn.disabled = true;

  setTimeout(() => {
    alert("Mechanic requested successfully! 🚗🔧");

    requestBtn.innerText = "Request Mechanic";
    requestBtn.disabled = false;

    document.querySelectorAll(".problem").forEach(input => {
      input.value = "";
    });

  }, 2000);
});

// smooth scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

//nav on scroll down
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
  } else {
    nav.style.boxShadow = "none";
  }
});

// Auto fill vehicle issue when service card is clicked
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const service = card.querySelector("p").innerText;

    document.querySelectorAll(".problem")[0].value = service;

    // scroll to form
    document.querySelector(".content-background")
      .scrollIntoView({ behavior: "smooth" });
  });
});

function getLocation() {
  const locationInput = document.querySelectorAll(".problem")[1];

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      locationInput.value = `Lat: ${lat}, Lon: ${lon}`;
    });
  } else {
    alert("Geolocation not supported");
  }
}

const cards = document.querySelectorAll(".card1");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

>>>>>>> 365802d438e0ad9e8529b637458df664651bcd0b
