// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Active link system
const links = document.querySelectorAll(".nav-link");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

function callNow() {
  window.location.href = "tel:+1-855-775-4304";
}

AOS.init({
  duration: 1000,
  once: false,
  easing: "ease-out-cubic"
});



const chatBtn = document.getElementById("chatBtn");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");

// Toggle chat
chatBtn.addEventListener("click", () => {
  chatBox.classList.toggle("hidden");
});


function openChat() {
  chatBox.classList.remove("hidden");
}

// Close chat
closeChat.addEventListener("click", () => {
  chatBox.classList.add("hidden");
});

// Auto open after 3 seconds (only on home page)
window.addEventListener("load", () => {
  const path = window.location.pathname;
  if (path === "/" || path.includes("index.html")) {
    setTimeout(() => {
      chatBox.classList.remove("hidden");
    }, 2000);
  }
});


const faqButtons = document.querySelectorAll(".faq-btn");

if (faqButtons) {
  faqButtons.forEach(btn => {
    btn.addEventListener("click", () => {

      const content = btn.nextElementSibling;
      const icon = btn.querySelector(".faq-icon");

      // Close all others
      document.querySelectorAll(".faq-content").forEach(c => {
        if (c !== content) c.classList.add("hidden");
      });

      document.querySelectorAll(".faq-icon").forEach(i => {
        if (i !== icon) i.classList.remove("rotate-180");
      });

      // Toggle current
      content.classList.toggle("hidden");
      icon.classList.toggle("rotate-180");
    });
  });

}
