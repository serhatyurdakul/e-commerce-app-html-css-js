function tabsFunc() {
  const btnTab = document.querySelectorAll(".tab-button");
  const contentDOM = document.querySelectorAll(".content");
  const tabsWrapperDOM = document.querySelector(".single-tabs");

  tabsWrapperDOM.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    if (id) {
      btnTab.forEach((button) => {
        button.classList.remove("active");
      });
      e.target.classList.add("active");
      contentDOM.forEach((content) => content.classList.remove("active"));
      const element = document.getElementById(id)
      element.classList.add("active")
    }
  });

  //forEach ile active eklemek
  /*   btnTab.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      btnTab.forEach((item) => {
        item.classList.remove("active");
      });
      button.classList.add("active");
    });
  }); */
}

export default tabsFunc();
