//To toggle the visibility of the recipe container
const buttonShowRecipe = document.querySelector(".btn-showRecipe");
const recipeToHidde = document.querySelector(".content-to-hidde");

const showRecipe = () => {
  recipeToHidde.classList.toggle("visible");
};

buttonShowRecipe.addEventListener("click", showRecipe);

////To send message directly to watsapp//

function redirectToWatsApp() {
  const phoneNumber = "+355697477372";
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=" + encodedPhoneNumber;

  window.open(whatsappUrl, "_blank");
}
const whatsappLink = document.getElementById("whatsappLink");

whatsappLink.addEventListener("click", redirectToWatsApp);

//SMOOTH SCROLLING////

const allLinks = document.querySelectorAll("a:link");
//console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

//to get the updated actual year

function getCurrentYear() {
  let currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;
}
getCurrentYear();

//to get the translation//

const language = {
  eng: {
    hi: "Welcome everyone!",
  },
  al: {
    hi: "Mirese erdhet!",
  },
};

////for lazy loading herosection img

document.addEventListener("DOMContentLoaded", function () {
  const lazyBgElements = document.querySelectorAll(".lazy-bg");

  const lazyLoad = (element) => {
    if (element.getAttribute("data-bg")) {
      element.style.backgroundImage = `url(${element.getAttribute("data-bg")})`;
      observer.unobserve(element);
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        lazyLoad(entry.target);
      }
    });
  });

  lazyBgElements.forEach((element) => {
    observer.observe(element);
  });
});
