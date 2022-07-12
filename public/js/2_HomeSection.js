/*With below listener my name title appears gradually moving upwards */
document.addEventListener('DOMContentLoaded', () => {
    let name = document.getElementById("name")
    setTimeout(() => {
        name.style.paddingTop = "300px"
        name.style.opacity = 1
    },1000
    )    
})

/*With below listener, we make my job title appearing after my
name moving and bouncing. */
document.addEventListener('DOMContentLoaded', () => {
    let job = document.getElementById("job")
    setTimeout(() => {
        job.classList.add("jobAnimationEnter")
        job.style.opacity = 1
    },2000
    )    
})