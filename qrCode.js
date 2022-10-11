generator = document.querySelector(".qrGenerator")
qrInp = document.querySelector("input")
qrBtn = document.querySelector("button")
qrImg = document.querySelector(".qrImage img")

qrBtn.addEventListener("click", () => {
    let userValue = qrInp.value
    if(!userValue) return;

    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${userValue}`

    qrImg.addEventListener("load", () => {
        generator.classList.add("active")
    })  
})


qrInp.addEventListener("keyup", () => {
    generator.classList.remove("active")
})