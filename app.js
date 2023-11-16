// template_5uqjfkm
// service_e4d38s5
//aMz-Z4PU-FguJeDiT

let contrastToggle = false;
let isModalOpen = false;
const scalefactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scalefactor;
  const y = event.clientY * scalefactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact() {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const succes = document.querySelector(".modal__overlay--succes");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_e4d38s5",
      "template_5uqjfkm",
      event.target,
      "aMz-Z4PU-FguJeDiT"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      succes.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on kayalinkedin@gmail.com"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = !isModalOpen;
  document.body.classList += " modal--open";
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function handleScrollAnimation() {
  const badgeWrappers = document.querySelectorAll(".badge__wrapper");

  badgeWrappers.forEach((badgeWrapper, index) => {
    if (isElementInViewport(badgeWrapper)) {
      badgeWrapper.classList.add("animate-badge");
    }
  });
}
window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);

function handleSkillsRightWrapperIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-slide");
      observer.unobserve(entry.target);
    }
  });
}


function handleSkillsRightWrapperIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-slide');
      observer.unobserve(entry.target);
    }
  });
}

function initializeSkillsRightWrapperObserver() {
  const skillsRightWrapper = document.querySelector('.skills__right--wrapper');

  const skillsRightWrapperObserver = new IntersectionObserver(
    handleSkillsRightWrapperIntersect,
    { threshold: 0.1 }
  );

  skillsRightWrapperObserver.observe(skillsRightWrapper);
}

window.addEventListener('load', initializeSkillsRightWrapperObserver);

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= windowHeight * 0.3; 
}

function handleScroll() {
  const projectsSection = document.querySelector("#projects");
  const projects = document.querySelectorAll(".project");

  if (isInViewport(projectsSection)) {
    projectsSection.style.opacity = 1;
    projectsSection.style.transform = "translateY(0)";

    projects.forEach((project, index) => {
      setTimeout(() => {
        project.style.opacity = 1;
        project.style.transform = "translateY(0)";
      }, 200 * index); 
    });

    window.removeEventListener("scroll", handleScroll);
  }
}

window.addEventListener("scroll", handleScroll);

handleScroll();