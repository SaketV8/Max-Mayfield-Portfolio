const bannerClose = () => {
    const bannerView = document.querySelector(".banner");
    const closeBtn = document.querySelector(".banner__close__btn");
    

    closeBtn.addEventListener("click", () => {
        bannerView.style.display = "none";
        // console.log("Banner Closed");
      });
}

export default bannerClose