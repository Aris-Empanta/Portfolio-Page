/*Below function will send the input elements of contact form to
the backend to send them to my email. */
const contactForm = document.getElementById("contactForm")

let name = document.getElementById("yourName")
let email = document.getElementById("yourEmail")
let subject = document.getElementById("subject")
let message = document.getElementById("message")


contactForm.addEventListener("submit", (e) => {

    let formData = {
        name : name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    console.log(formData)

    let xhr = new XMLHttpRequest()
    xhr.open("POST", "/")
    xhr.setRequestHeader("content-type", "application/json")
    xhr.onload = function (){
        console.log(xhr.responseText) 
        if(xhr.responseText == "success"){
            console.log("Email sent")
            name.value = ""
            email.value = ""
            subject.value = ""
            message.value = ""
        } else {
            console.log("Something went wrong")
        }


        xhr.send(JSON.stringify(formData))
    }

})

const firstBlinkLetter = document.getElementById("firstBlink")
const secondBlinkLetter = document.getElementById("secondBlink")

/*Below functions will add the blinking animation on "Contact Me" title
for 2 letters.*/
window.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        firstBlinkLetter.classList.add("onOff")
        setTimeout(() => {
            firstBlinkLetter.classList.remove("onOff")
        }, 500)
    }, 3500)
})

window.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        secondBlinkLetter.classList.add("onOff")
        setTimeout(() => {
            secondBlinkLetter.classList.remove("onOff")
        }, 500)
    }, 3000)
})