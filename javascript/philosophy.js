let header1Color = '#AD2626';
let header2Color = 'white';

function classHoverEffect(className) {
    let elements = document.getElementsByClassName(className);

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = header1Color;
    }
}

function clearHover(className) {
    let elements = document.getElementsByClassName(className);

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = header2Color;
    }
}


// Function to check if the user has scrolled to the bottom
function isBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

// Function to fetch and append new content
function loadMoreContent() {
    // Show loader
    document.getElementById('loader').style.display = 'block';

    // Append new content to the container
    const newContent = document.createElement('span');
    newContent.innerHTML =  `
      <span class="philo-hover derrida-hover" onmouseover="classHoverEffect('derrida-hover')" onmouseout="clearHover('derrida-hover')">
        <a href="https://www.woutermaas.com/philosophy/Deconstructing Transformers - Wouter Maas.pdf">Derrida</a>
      </span>
      <span class="philo-hover democracy-hover" onmouseover="classHoverEffect('democracy-hover')" onmouseout="clearHover('democracy-hover')">
        <a>Representative Algorithms</a>
      </span>
      <span class="philo-hover heidegger-hover" onmouseover="classHoverEffect('heidegger-hover')" onmouseout="clearHover('heidegger-hover')">
        <a>Heidegger</a>
      </span>
      <span class="philo-hover capitalism-hover" onmouseover="classHoverEffect('capitalism-hover')" onmouseout="clearHover('capitalism-hover')">
        <a>Capitalism</a>
      </span>
      <span class="philo-hover derrida-hover" onmouseover="classHoverEffect('derrida-hover')" onmouseout="clearHover('derrida-hover')">
        <a href="https://www.woutermaas.com/philosophy/Deconstructing Transformers - Wouter Maas.pdf">Postmodernism</a>
      </span>
      <span class="philo-hover democracy-hover" onmouseover="classHoverEffect('democracy-hover')" onmouseout="clearHover('democracy-hover')">
        <a>Multi-Party Computation</a>
      </span>
      <span class="philo-hover foucault-hover" onmouseover="classHoverEffect('foucault-hover')" onmouseout="clearHover('foucault-hover')">
        <a>Foucault</a>
      </span>
      <span class="philo-hover kafka-hover" onmouseover="classHoverEffect('kafka-hover')" onmouseout="clearHover('kafka-hover')">
        <a>Existentialism</a>
      </span>
      <span class="philo-hover capitalism-hover" onmouseover="classHoverEffect('capitalism-hover')" onmouseout="clearHover('capitalism-hover')">
        <a>Poetry</a>
      </span>
      <span class="philo-hover derrida-hover" onmouseover="classHoverEffect('derrida-hover')" onmouseout="clearHover('derrida-hover')">
        <a href="https://www.woutermaas.com/philosophy/Deconstructing Transformers - Wouter Maas.pdf">Large Language Models</a>
      </span>
      <span class="philo-hover dante-hover" onmouseover="classHoverEffect('dante-hover')" onmouseout="clearHover('dante-hover')">
        <a href="https://www.woutermaas.com/philosophy/Freedom, suicide, and martyrdom - Wouter Maas.pdf">Dante</a>
      </span>
      <span class="philo-hover kafka-hover" onmouseover="classHoverEffect('kafka-hover')" onmouseout="clearHover('kafka-hover')">
        <a>Kafka</a>
      </span>
      <span class="philo-hover democracy-hover" onmouseover="classHoverEffect('democracy-hover')" onmouseout="clearHover('democracy-hover')">
        <a href="https://www.woutermaas.com/philosophy/Secure MPC-Sortition - Consolidating Innovations in Democracy and Cryptography - Wouter Maas.pdf">Deliberative Democracy</a>
      </span>
      <span class="philo-hover dante-hover" onmouseover="classHoverEffect('dante-hover')" onmouseout="clearHover('dante-hover')">
        <a href="https://www.woutermaas.com/philosophy/Freedom, suicide, and martyrdom - Wouter Maas.pdf">Freedom</a>
      </span>
      <span class="philo-hover heidegger-hover" onmouseover="classHoverEffect('heidegger-hover')" onmouseout="clearHover('heidegger-hover')">
        <a>Hobbes</a>
      </span>
      <span class="philo-hover foucault-hover" onmouseover="classHoverEffect('foucault-hover')" onmouseout="clearHover('foucault-hover')">
        <a>Chinese Surveillance</a>
      </span>
      <span class="philo-hover dante-hover" onmouseover="classHoverEffect('dante-hover')" onmouseout="clearHover('dante-hover')">
        <a>Mbembe</a>
      </span>
  `;
    document.getElementById('scrollable-container').appendChild(newContent);
    document.getElementById('loader').style.display = 'none';
}

// Event listener for scroll events
window.addEventListener('scroll', () => {
    // Check if the user has scrolled to the bottom
    if (isBottom()) {
        loadMoreContent();
    }
});