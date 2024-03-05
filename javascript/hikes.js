
const compressedImagesPath = "/resources/photos/il_sentiero_compressed/"
const fullSizeImagesPath = "/resources/photos/il_sentiero_full-size/"
const placeHolderImagesPath = "/resources/photos/il_sentiero_placeholders/"

const blurredImageDivs = document.querySelectorAll(".blurred-img")
blurredImageDivs.forEach(div => {
    const img = div.querySelector("img")
    div.style.backgroundImage = `url(${placeHolderImagesPath}${div.id}.jpg)`
    
    function loaded() {
        div.classList.add("loaded")
    }

    if (img.complete) {
        loaded()
    } else {
        img.addEventListener("load", loaded)
    }
});

function toggleIMG(element) {
    const id = element.parentElement.id;
    const containerDiv = document.querySelector(`#${id}`).parentElement
    const img = containerDiv.querySelector("img")
    const path = `${fullSizeImagesPath}${id}.jpg`
    img.src = path
    img.classList.toggle("scale-up-center")
}
