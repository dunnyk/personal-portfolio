const projects = [
    {
      name: "Dashboard Health Care",
      popUPname: 'Multi Post Stories',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard",
      cardImage: "url(./image/background.png)",
      popupImage: "./image/mobilePop-up.svg",
      popDescription: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                       took a galley of type and scrambled it to make a type specimen book.`,
      techStack: ["html", "bootstrap", "ruby"],
      liveDemo: "https://bobb-rob.github.io/portfolio-project-1/",
      sourceFile: "https://github.com/bobb-rob/portfolio-project-1",
      id: "1",
    },
    {
      name: "Website Portfolio",
      popUPname: 'Multi Post Stories',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard",
      cardImage: "url(./image/background.png)",
      popupImage: "./image/mobilePop-up.svg",
      popDescription: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                       took a galley of type and scrambled it to make a type specimen book.`,
      techStack: ["html", "bootstrap", "ruby"],
      liveDemo: "https://bobb-rob.github.io/portfolio-project-1/",
      sourceFile: "https://github.com/bobb-rob/portfolio-project-1",
      id: "2",
    },
    {
      name: "Profesional Art Printing Data",
      popUPname: 'Multi Post Stories',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard",
      cardImage: "url(./image/background.png)",
      popupImage: "./image/mobilePop-up.svg",
      popDescription: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                       took a galley of type and scrambled it to make a type specimen book.`,
      techStack: ["html", "bootstrap", "ruby"],
      liveDemo: "https://bobb-rob.github.io/portfolio-project-1/",
      sourceFile: "https://github.com/bobb-rob/portfolio-project-1",
      id: "3",
    },
    {
      name: "Profesional Art Printing Data",
      popUPname: 'Multi Post Stories',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard",
      cardImage: "url(./image/background.png)",
      popupImage: "./image/mobilePop-up.svg",
      popDescription: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                       took a galley of type and scrambled it to make a type specimen book.`,
      techStack: ["html", "bootstrap", "ruby"],
      liveDemo: "https://bobb-rob.github.io/portfolio-project-1/",
      sourceFile: "https://github.com/bobb-rob/portfolio-project-1",
      id: "4",
    },
    {
      name: "Profesional Art Printing Data",
      popUPname: 'Multi Post Stories',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard",
      cardImage: "url(./image/background.png)",
      popupImage: "./image/mobilePop-up.svg",
      popDescription: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                       took a galley of type and scrambled it to make a type specimen book.`,
      techStack: ["html", "bootstrap", "ruby"],
      liveDemo: "https://bobb-rob.github.io/portfolio-project-1/",
      sourceFile: "https://github.com/bobb-rob/portfolio-project-1",
      id: "5",
    },
    {
      name: "Profesional Art Printing Data",
      popUPname: 'Multi Post Stories',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard",
      cardImage: "url(./image/background.png)",
      popupImage: "./image/mobilePop-up.svg",
      popDescription: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                       took a galley of type and scrambled it to make a type specimen book.`,
      techStack: ["html", "bootstrap", "ruby"],
      liveDemo: "https://bobb-rob.github.io/portfolio-project-1/",
      sourceFile: "https://github.com/bobb-rob/portfolio-project-1",
      id: "6",
    },
  ];


  const injectDynamicData = (() => {
    // create Element function
    function createElement(elem, className = null) {
      const element = document.createElement(elem);
      if (className !== null) {
        element.classList.add(className);
      }
      return element;
    }
  
    // create close icon function
    const createCloseIcon = (location, closeWrap) => {
      const closeIcon = createElement("img", "close-icon");
      const closeWrapper = createElement(closeWrap, "close-icon-wrapper");
      closeIcon.src = "./image/cross.png";
      closeIcon.alt = "close icon";
      closeWrapper.appendChild(closeIcon);
      location.appendChild(closeWrapper);
    };

    // Projects card display function
    const cardContainer = document.getElementById("project-section");
    const createProjectCard = proj => {
      const listItem = createElement('li', 'project-card');
      listItem.style.background = `${proj.cardImage}`;
      listItem.id = proj.id;

      const projectsName = createElement('h3');
      projectsName.textContent = `${proj.name}`;

      const projectsDescription = createElement('p');
      projectsDescription.textContent = `${proj.description}`;

      const techListItem1 = createElement('li')
      techListItem1.textContent = `${proj.techStack[0]}`;

      const techListItem2 = createElement('li');
      techListItem2.textContent = `${proj.techStack[1]}`;

      const techListItem3 = createElement('li');
      techListItem3.textContent =  `${proj.techStack[2]}`;

      const techUl = createElement('ul', 'describing-tags');
      techUl.append(techListItem1, techListItem2, techListItem3);

      const cardDescription = createElement('div', 'card-description');
      cardDescription.append(projectName, projectsDescription, techUl);

      const projectButton = createElement('button', 'btn-card');
      projectButton.classList.add('btn');
      projectButton.type = 'button';
      projectButton.textContent = 'See Project';
      listItem.append(cardDescription, projectButton);
      return listItem;
    };



    // Project card display map

    projects.map((project) => cardContainer.appendChild(createProjectCard(project)));



    // Project pop up window create function
    const insertPopupWindow = (project) => {
      const popupModal = createElement('div', 'popup-modal');
      const popupContainer = createElement("div", "popContainer");
      popupContainer.innerHTML = `
              <h2>${project.popupName}</h2>
              <ul class="techno-stack">
                ${project.techStack.map((tech) => `<li>${tech}</li>`)}
              </ul>
              <div class="popup-img-p">
                  <img src="${project.popupImage}" alt="${project.projName}">

                  <div class="popup-btn-wrapper">
                      <p>${project.popDescription}</p>

                      <div class="pop-btn-wrap">
                        <button class="btn popup-btn" type="button">
                          <a href="${project.liveDemo}">See Live
                            <img src="./image/new-window-icon.svg" alt="New window icon">
                          </a>
                        </button>
                        <button class="btn popup-btn" type="button">
                          <a href="${project.sourceFile}">See Source
                            <img src="./image/github-icon.svg" alt="github icon">
                          </a>
                        </button>
                      </div>
                  </div>
              </div>
          `;
      popupModal.appendChild(popupContainer);
      return popupModal;
    };

    // elements
    const hamburgerBtn = document.querySelector(".hamburger"); // Hamburger
    const navLinksWrapper = document.querySelector(".hide-mobile"); // Menu link wrapper
    const cardButtons = document.querySelectorAll(".btn1"); // See project btns

    return {
      createElement,
      createCloseIcon,
      insertPopupWindow,
      hamburgerBtn,
      insertPopup,
      navLinksWrapper,
      cardContainer,
      cardButtons
    };
  })();

  const executeEvent = () => {
    // Add event listener to the hamburger btn
    injectDynamicData.hamburgerBtn.addEventListener("click", () => {
      injectDynamicData.createCloseIcon(injectDynamicData.navLinksWrapper, "li");
      injectDynamicData.navLinksWrapper.classList.add("display-f");
      document.querySelector(".envelope").classList.add("display-n");
      // Add the click event on the close btn on menu
      const hamburgerCloseIcon = document.querySelector("img.close-icon");
      hamburgerCloseIcon.addEventListener("click", () => {
        injectDynamicData.navLinksWrapper.classList.toggle("display-f");
        const mailIcon = document.querySelector(".envelope");
        mailIcon.classList.toggle("display-n");
        document.querySelector(".close-icon-wrapper").remove();
      });
    });
  
    // Attach click events on all the "a" tags both desktop and mobile
    const navLinksArr = Array.from(
      document.querySelectorAll("li.insert-event > a")
    );
    navLinksArr.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 768) {
          injectDynamicData.navLinksWrapper.classList.toggle("display-f"); // Remove display: flex !important class
        }
      });
    });
  
    // const cardBtnArr = Array.from(injectDynamicData.cardButtons);
    // cardBtnArr.forEach((btn) => {
    //   btn.addEventListener("click", (e) => {
    //     // Filter the project by id
    //     const project = projects.filter(
    //       (proj) => proj.id === e.target.parentElement.id
    //     );
    //     const i = project[0];
    //     injectDynamicData.workSection.appendChild(
    //       injectDynamicData.insertPopup(
    //         i.name,
    //         i.techStack,
    //         i.popupImage,
    //         i.description
    //       )
    //     );
  
    //     //  Listen for click on close icon in popup container
    //     injectDynamicData.createCloseIcon(document.querySelector(".popup-container"), "span");
    //     const popupCloseIcon = document.querySelector("span.close-icon-wrapper");
    //     popupCloseIcon.addEventListener("click", () => {
    //       document.querySelector(".project-modal").remove();
    //     });
    //     //  Listen for click outside popup container
    //     window.addEventListener("click", (e) => {
    //       if (e.target.classList.contains("project-modal")) {
    //         document.querySelector(".project-modal").remove();
    //       }
    //     });
    //   });
    // });
  
    // const firstCardButton = document.querySelector(".btn-feature");
    // firstCardButton.addEventListener("click", () => {
    //   window.location = "#card-container";
    // });
  };
  executeEvent();