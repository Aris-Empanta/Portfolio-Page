let menu = document.getElementById("navWrapper");
let about = document.getElementById('about') 
let projects = document.getElementById('projects')
let contact = document.getElementById('contact')
let github = document.getElementById('github')


/*With below function, once we press the bars icon in smaller screens,
it will expand all the navbar section elements. Also, we make the navbar
elements appear gradually one by one in smaller screens.*/
const getResponsive = () => {
    if (menu.className === "navBar" ) {
      about.style.fontSize = 0
      projects.style.fontSize = 0
      contact.style.fontSize = 0 
      github.style.fontSize = 0 
      menu.className += " showMenu";
        setTimeout(() => {
          about.style.fontSize = '1.5rem'
        },250)
        setTimeout(() => {
          projects.style.fontSize = '1.5rem'
        },750) 
        setTimeout(() => {
          contact.style.fontSize = '1.5rem'
        },1250)
        setTimeout(() => {
          github.style.fontSize = '1.5rem'
        },1750)
      }else if (menu.className === "navBar showMenu" )  {
        menu.className = "navBar"
      } 
}

/*With below functions, once we press a link on navbar in smaller screens,
the menu collapses and remains only the bars icon. */
const hideMenu = () => {
  menu.className = "navBar"
}
