/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let Sections = Array.from(document.querySelectorAll("section"));
let menuBar = document.getElementById("navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createListItems() {
  for (section of Sections) {
    nameSection = section.getAttribute("data-nav");
    linkSection = section.getAttribute("id");
    // create item for each one
    listItem = document.createElement("li");

    //add text in list item
    listItem.innerHTML = `<a href="#${linkSection}" class="menu__link">${nameSection}</a>`;
    menuBar.appendChild(listItem)
  }
}

//Detramine if section is in viewport by using getboundingclientract


function sectionInViewport(ele)
{
  let sectionPort = ele .getBoundingClientRect();
  return (sectionPort.top >= 0);
}
  


//detramine section in active class or not 

function acctiveClass()
{
  for (section of Sections) {
    //if section ina viewport
    if (sectionInViewport(section)) {
      //if that not have active class gave it active
      if (!section.classList.contains("your-active-class"))
      {
        section.classList.add("your-active-class");
      }
      else
      {
        section.classList.remove("your-active-class");
        }
    }
  }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
createListItems();

// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', acctiveClass);
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


