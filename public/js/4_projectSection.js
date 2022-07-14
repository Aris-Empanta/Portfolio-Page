/*With the below function, when i scroll down to the project section, the title 'My work' appears gradually. */
document.addEventListener('scroll', () => {
    function showTitle() {
        const title = document.getElementById('projectTitle')
        //the number of pixels the element is scrolled down
        const currentScrollPosition = window.pageYOffset;
        //The distance of the top border of the element with id=projectsSection, to the top of the parent element which is 'body' 
        const elementOffsetTop = document.getElementById('projectsSection').offsetTop
        /*The condition below, will have as a result, the projects to appear slowly only if scroll anywhere inside the 
        project section and a little bit above*/
        if(currentScrollPosition + 500 > elementOffsetTop &&
            currentScrollPosition <= elementOffsetTop + 1250 ){            
            title.style.opacity = 1
          }
        }   
    setTimeout(showTitle, 500)
});


/*With the below function, when i scroll down to the project section, the projects appear gradually. */
document.addEventListener('scroll', () => {
    function showProjects() {
        const projects = document.getElementsByClassName('myProjects')
        //the number of pixels the element is scrolled down
        const currentScrollPosition = window.pageYOffset;
        //The distance of the top border of the element with id=projectsSection, to the top of the parent element which is 'body' 
        const elementOffsetTop = document.getElementById('projectsSection').offsetTop
        /*The condition below, will have as a result, the projects to appear slowly only if scroll anywhere inside the 
        project section and a little bit above*/
        if(currentScrollPosition + 500 > elementOffsetTop &&
            currentScrollPosition <= elementOffsetTop + 1250 ){            
            for (i = 0; i < projects.length; i++) {
            projects[i].style.opacity = 1
          }
        }       
    }
    setTimeout(showProjects, 1500)
});



const sowDesc =  () => {  
    let firstProjectDescription = document.getElementById("firstProjectDescription")
    firstProjectDescription.style.opacity = 1
}

const hideDesc =  () => {  
    let firstProjectDescription = document.getElementById("firstProjectDescription")
    firstProjectDescription.style.opacity = 0
}
