let contactForm = document.getElementById("contactForm")
let name = document.getElementById("yourName")
let email = document.getElementById("yourEmail")
let subject = document.getElementById("subject")
let message = document.getElementById("message")

/*Below function will send the input elements of contact form to
the backend to send them to my email. */
const sendMail = () => {

    let formData = {
        name : name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    fetch("https://aris-empanta-portfolio.onrender.com/", {
                                     method: "POST",
                                     body: JSON.stringify(formData),
                                     headers: {
                                        "Content-type": "application/json; charset=UTF-8"
                                    }})
                                  .then( () => {
                                                 alert("Your message has been successfully sent!")
                                                 location.reload()
                                                })
                     
}

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