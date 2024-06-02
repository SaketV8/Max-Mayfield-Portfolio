const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link");

  //state
  let isMobileNavOpen = false;

  headerBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "visible";
    }
    // console.log("Header btn Clicked", isMobileNavOpen);
  });
  
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMobileNavOpen = !isMobileNavOpen;
      mobileNav.style.display = "none";
      document.body.style.overflowY = "visible";
    });
  });
};

export default mobileNav;
