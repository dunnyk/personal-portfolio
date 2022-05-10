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
  const cross = insertElement('img', 'cross');
  const li = insertElement('li', 'cross-icon-wrapper');

  function onClickDisappear() {
    navLinksWrapper.style.display = 'none';
    li.remove();
    cross.remove();
  }

  hamburgerBtn.addEventListener('click', () => {
    cross.src = './image/cross.png';
    li.appendChild(cross);
    cross.addEventListener('click', () => {
      onClickDisappear();
    });
    navLinksWrapper.appendChild(li);
    navLinksWrapper.style.display = 'flex';
  });

  const portfolioNav = document.querySelector('#portfolio');
  portfolioNav.addEventListener('click', (e) => {
    onClickDisappear();
    e.stopPropagation();
  });

  document.querySelector('#about').addEventListener('click', () => {
    onClickDisappear();
  });

  document.querySelector('#contact').addEventListener('click', () => {
    onClickDisappear();
  });
}

displayMenu();
