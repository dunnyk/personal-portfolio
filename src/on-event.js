// const hamburgerBtn = document.querySelector('.hamburger');
// const navLinksWrapper = document.querySelector('.hide-mobile');

// hamburgerBtn.addEventListener('click', () => {
//   console.log("CLicked????????????")
//   navLinksWrapper.style.display = 'block';
//   navLinksWrapper.lastElementChild.style.display = 'none';
// });

// function displayMenu(){
//   console.log("Cion")
// }

// hamburgerBtn.addEventListener('click', () => {
//   console.log("CLicked????????????")
//   navLinksWrapper.style.display = 'block';
//   navLinksWrapper.lastElementChild.style.display = 'none';
// });

function displayMenu() {
  function insertElement(elem, className) {
    const element = document.createElement(elem);
    element.className = className;
    return element;
  }

  const hamburgerBtn = document.querySelector('.hamburger');
  const navLinksWrapper = document.querySelector('.hide-mobile');

  hamburgerBtn.addEventListener('click', () => {
    const cross = insertElement('img', 'cross');
    cross.src = './image/cross.png';
    const li = insertElement('li', 'cross-icon-wrapper');
    li.appendChild(cross);

    cross.addEventListener('click', () => {
      navLinksWrapper.style.display = 'none';
      li.remove();
      cross.remove();
    });
    navLinksWrapper.appendChild(li);
    navLinksWrapper.style.display = 'flex';
  });
}

displayMenu();
