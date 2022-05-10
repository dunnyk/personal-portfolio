function displayMenu() {
  function insertElement(elem, className) {
    const element = document.createElement(elem);
    element.className = className;
    return element;
  }

  const hamburgerBtn = document.querySelector(".hamburger");
  const navLinksWrapper = document.querySelector(".hide-mobile");
  const cross = insertElement("img", "cross");
  const li = insertElement("li", "cross-icon-wrapper");

  function onClickDisappear() {
    navLinksWrapper.style.display = "none";
    li.remove();
    cross.remove();
  }

  hamburgerBtn.addEventListener("click", () => {
    cross.src = "./image/cross.png";
    li.appendChild(cross);
    navLinksWrapper.appendChild(li);
    navLinksWrapper.style.display = "flex";
    cross.addEventListener("click", () => {
      onClickDisappear();
    });

    const portfolioNav = document.querySelector("#Work-section");
    portfolioNav.addEventListener("click", () => {
      onClickDisappear();
      e.stopPropagation();
    });

    document.querySelector("#about").addEventListener("click", () => {
      onClickDisappear();
    });

    document.querySelector("#contact").addEventListener("click", () => {
      onClickDisappear();
    });
  });
}

displayMenu();
