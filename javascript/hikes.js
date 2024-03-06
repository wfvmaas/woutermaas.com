
const compressedImagesPath = "/resources/photos/il_sentiero_compressed/"
const fullSizeImagesPath = "/resources/photos/il_sentiero_full-size/"
const placeHolderImagesPath = "/resources/photos/il_sentiero_placeholders/"

const blurredImageDivs = document.querySelectorAll(".gallery__blurred-img")

blurredImageDivs.forEach(div => {
    const id = div.parentElement.id
    const img = div.querySelector("img")
    div.style.backgroundImage = `url(${placeHolderImagesPath}${id}.jpg)`
    
    function loaded() {
        div.classList.add("gallery__blurred-img--loaded")
    }

    if (img.complete) {
        loaded()
    } else {
        img.addEventListener("load", loaded)
    }
});

function toggleIMG(element) {
    const id = element.parentElement.parentElement.parentElement.parentElement.id;
    const outerContainerDiv = document.querySelector(`#${id}`)
    const img = outerContainerDiv.querySelector("img")
    const innerContainerDiv = img.parentElement.parentElement
    const newPath = `${fullSizeImagesPath}${id}.jpg`
    img.src = newPath
    innerContainerDiv.classList.toggle("gallery__container--scale-up")
}
