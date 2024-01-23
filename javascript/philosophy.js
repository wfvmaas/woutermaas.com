let  header1Color = '#AD2626';
let header2Color = 'white';

function classHoverEffect (className) {
    let elements = document.getElementsByClassName(className);
    
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = header1Color;
    }
}

function clearHover (className) {
    let elements = document.getElementsByClassName(className);
    
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = header2Color;
    }
}
