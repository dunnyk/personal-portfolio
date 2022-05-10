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


function displayMenu(){
  const hamburgerBtn = document.querySelector('.hamburger');
  const navLinksWrapper = document.querySelector('.hide-mobile');

  hamburgerBtn.addEventListener('click', () => {
    navLinksWrapper.style.display = "flex"
  })
  // navLinksWrapper.style.display = 'flex';
  // navLinksWrapper.lastElementChild.style.display = 'none';
}

displayMenu()