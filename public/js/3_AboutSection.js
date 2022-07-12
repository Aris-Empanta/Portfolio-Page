//Here is all the javascript needed for the About section

let rotate = 0

//The function that turns the image gallery left when click on left arrow on image.
function turnLeft(){
    rotate += 60
    document.querySelector(".box").style.transform = `rotateY(${rotate}deg)`   
}

//The function that turns the image gallery right when click on right arrow on image.
function turnRight(){
    rotate -= 60
    document.querySelector(".box").style.transform = `rotateY(${rotate}deg)`   
}

//The function that makes the skills image gallery turn to right every 5 seconds.
document.addEventListener('DOMContentLoaded', () => {
    function rotat(){
        document.querySelector(".box").style.transform = `rotateY(${rotate-60}deg)`
        rotate -= 60
    }
    setInterval(rotat, 5000)  
})

//With the function below, the 'Hello' text in about section will appear gradually
document.addEventListener('scroll', () => {
    function hello() {
        const hello = document.getElementById('Hello')
        //the number of pixels the page is scrolled down
        const currentScrollPosition = window.pageYOffset;
        //The distance of the top border of the element with id=About, to the top of the parent element which is 'body' 
        const topDistanceToParent = document.getElementById('About').offsetTop        
        /*The condition below, will have as a result, the 'Hello I am Aris' phrase to appear slowly  only if scroll
         anywhere inside the About section*/
        if(currentScrollPosition + 300 >= topDistanceToParent &&
            currentScrollPosition <= topDistanceToParent + 600 ){           
        hello.style.opacity = 1
        hello.style.transform = 'scale(1, 1)'
            }
       }

    setTimeout(hello, 1000)
});

//With the function below, the 'mySelf1' text in about section will appear gradually
document.addEventListener('scroll', () => {
    function mySelf() {
        const mySelf = document.getElementById('mySelf1')
        //the number of pixels the page is scrolled down
        const currentScrollPosition = window.pageYOffset;
        //The distance of the top border of the element with id=About, to the top of the parent element which is 'body' 
        const topDistanceToParent = document.getElementById('About').offsetTop        
        /*The condition below, will have as a result, the paragraph to appear slowly from the left only if scroll
        anywhere inside the about section and a little bit above*/
        if(currentScrollPosition + 300 >= topDistanceToParent &&
            currentScrollPosition <= topDistanceToParent + 400 ){           
        mySelf.style.opacity = 1
        mySelf.style.transform = 'translateX(0)'
            }
       }
    setTimeout(mySelf, 2000)
});

//With the function below, the 'mySelf2' text in about section will appear gradually
document.addEventListener('scroll', () => {
    function mySelf() {
        const mySelf = document.getElementById('mySelf2')
        //the number of pixels the page is scrolled down
        const currentScrollPosition = window.pageYOffset;
        //The distance of the top border of the element with id=About, to the top of the parent element which is 'body' 
        const topDistanceToParent = document.getElementById('About').offsetTop        
        /*The condition below, will have as a result, the paragraph to appear slowly from the left only if scroll
        anywhere inside the about section and a little bit above*/
        if(currentScrollPosition + 300 >= topDistanceToParent &&
            currentScrollPosition <= topDistanceToParent + 400  ){           
        mySelf.style.opacity = 1
        mySelf.style.transform = 'translateX(0)'
            }
       }
    setTimeout(mySelf, 2000)
});

//With the function below, the '#skillsUl' text in about section will appear gradually in smaller screens
document.addEventListener('scroll', () => {
    function skillsAppear() {
        const skillsUl= document.getElementById('skillsUl')
        //the number of pixels the page is scrolled down
        const currentScrollPosition = window.pageYOffset;
        //The distance of the top border of the element with id=About, to the top of the parent element which is 'body' 
        const topDistanceToParent = document.getElementById('About').offsetTop        
        /*The condition below, will have as a result, the skills phrase to appear slowly from the left only if scroll
        anywhere inside the about section and a little bit above*/
        if(currentScrollPosition >= topDistanceToParent + 200 &&
            currentScrollPosition <= topDistanceToParent + 1000  ){           
                skillsUl.style.opacity = 1
                skillsUl.style.transform = "translateX(0)"
        
            }
       }
    setTimeout(skillsAppear, 1000)
});

//The function that will make skill section letters go back and forth for each element one by one.
document.addEventListener('DOMContentLoaded', () => {
    
    const frontEnd1 = document.getElementById('frontEnd1')
    const frontEnd2 = document.getElementById('frontEnd2')
    const frontEnd3 = document.getElementById('frontEnd3')
    const Backend1 = document.getElementById('Backend1')
    const Backend2 = document.getElementById('Backend2')
    const Github =  document.getElementById('Github')

    const backAndForth = () => {
        const moveForward = (item) => {
            item.classList.add('backAndForth')
        }

        const moveBack = (item) => {
            item.classList.remove('backAndForth')
        }
        //Since we have arguments, we have to use callback to be executed when commanded.
        setTimeout(() => moveForward(frontEnd1), 0)
        setTimeout(() => moveBack(frontEnd1), 100)
        setTimeout(() => moveForward(frontEnd2), 200)
        setTimeout(() => moveBack(frontEnd2), 300)
        setTimeout(() => moveForward(frontEnd3), 400)
        setTimeout(() => moveBack(frontEnd3), 500)
        setTimeout(() => moveForward(Backend1), 600)
        setTimeout(() => moveBack(Backend1), 700)
        setTimeout(() => moveForward(Backend2), 800)
        setTimeout(() => moveBack(Backend2), 900)
        setTimeout(() => moveForward(Github), 1000)
        setTimeout(() => moveBack(Github), 1100)
    }
    setInterval(backAndForth, 2500)
    }
)