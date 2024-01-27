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

document.addEventListener('DOMContentLoaded', function () {
    loadMoreContent();
});

// Function to check if the user has scrolled to the bottom
function isBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

// Function to fetch and append new content
function loadMoreContent() {
    // Show loader
    document.getElementById('loader').style.display = 'block';

    // Create a div container to hold the new spans
    const newContentContainer = document.createElement('span');

    // Append new content to the container
    const contentHTML = `
  <span class="philo-hover derrida-hover fade-in" onmouseover="classHoverEffect('derrida-hover')" onmouseout="clearHover('derrida-hover')">
    <a href="https://www.woutermaas.com/philosophy/Deconstructing Transformers - Wouter Maas.pdf">Derrida</a>
  </span>
  <span class="philo-hover democracy-hover fade-in" onmouseover="classHoverEffect('democracy-hover')" onmouseout="clearHover('democracy-hover')">
    <a href="https://www.woutermaas.com/philosophy/Secure MPC-Sortition - Consolidating Innovations in Democracy and Cryptography - Wouter Maas.pdf">Representative Algorithms</a>
  </span>
  <span class="philo-hover heidegger-hover fade-in" onmouseover="classHoverEffect('heidegger-hover')" onmouseout="clearHover('heidegger-hover')">
    <a href="https://www.woutermaas.com/philosophy/Anxiety in the state of nature.pdf">Heidegger</a>
  </span>
  <span class="philo-hover capitalism-hover fade-in" onmouseover="classHoverEffect('capitalism-hover')" onmouseout="clearHover('capitalism-hover')">
    <a href="https://www.woutermaas.com/philosophy/kapitalisme.html">Capitalism</a>
  </span>
  <span class="philo-hover derrida-hover fade-in" onmouseover="classHoverEffect('derrida-hover')" onmouseout="clearHover('derrida-hover')">
    <a href="https://www.woutermaas.com/philosophy/Deconstructing Transformers - Wouter Maas.pdf">Postmodernism</a>
  </span>
  <span class="philo-hover democracy-hover fade-in" onmouseover="classHoverEffect('democracy-hover')" onmouseout="clearHover('democracy-hover')">
    <a href="https://www.woutermaas.com/philosophy/Secure MPC-Sortition - Consolidating Innovations in Democracy and Cryptography - Wouter Maas.pdf">Multi-Party Computation</a>
  </span>
  <span class="philo-hover foucault-hover fade-in" onmouseover="classHoverEffect('foucault-hover')" onmouseout="clearHover('foucault-hover')">
    <a href="https://www.woutermaas.com/philosophy/Foucault and China.pdf">Foucault</a>
  </span>
  <span class="philo-hover kafka-hover fade-in" onmouseover="classHoverEffect('kafka-hover')" onmouseout="clearHover('kafka-hover')">
    <a href="https://www.woutermaas.com/philosophy/Essay Kafka Wouter Maas.pdf">Existentialism</a>
  </span>
  <span class="philo-hover capitalism-hover fade-in" onmouseover="classHoverEffect('capitalism-hover')" onmouseout="clearHover('capitalism-hover')">
    <a href="https://www.woutermaas.com/philosophy/kapitalisme.html">Poetry</a>
  </span>
  <span class="philo-hover wouter-hover fade-in">
  <p>Wouter Vos Maas</p>
  </span>
  <span class="philo-hover derrida-hover fade-in" onmouseover="classHoverEffect('derrida-hover')" onmouseout="clearHover('derrida-hover')">
    <a href="https://www.woutermaas.com/philosophy/Deconstructing Transformers - Wouter Maas.pdf">Large Language Models</a>
  </span>
  <span class="philo-hover dante-hover fade-in" onmouseover="classHoverEffect('dante-hover')" onmouseout="clearHover('dante-hover')">
    <a href="https://www.woutermaas.com/philosophy/Freedom, suicide, and martyrdom - Wouter Maas.pdf">Dante</a>
  </span>
  <span class="philo-hover kafka-hover fade-in" onmouseover="classHoverEffect('kafka-hover')" onmouseout="clearHover('kafka-hover')">
    <a href="https://www.woutermaas.com/philosophy/Essay Kafka Wouter Maas.pdf">Kafka</a>
  </span>
  <span class="philo-hover democracy-hover fade-in" onmouseover="classHoverEffect('democracy-hover')" onmouseout="clearHover('democracy-hover')">
    <a href="https://www.woutermaas.com/philosophy/Secure MPC-Sortition - Consolidating Innovations in Democracy and Cryptography - Wouter Maas.pdf">Deliberative Democracy</a>
  </span>
  <span class="philo-hover dante-hover fade-in" onmouseover="classHoverEffect('dante-hover')" onmouseout="clearHover('dante-hover')">
    <a href="https://www.woutermaas.com/philosophy/Freedom, suicide, and martyrdom - Wouter Maas.pdf">Freedom</a>
  </span>
  <span class="philo-hover heidegger-hover fade-in" onmouseover="classHoverEffect('heidegger-hover')" onmouseout="clearHover('heidegger-hover')">
    <a href="https://www.woutermaas.com/philosophy/Anxiety in the state of nature.pdf">Hobbes</a>
  </span>
  <span class="philo-hover foucault-hover fade-in" onmouseover="classHoverEffect('foucault-hover')" onmouseout="clearHover('foucault-hover')">
    <a href="https://www.woutermaas.com/philosophy/Foucault and China.pdf">The Synopticum</a>
  </span>
  <span class="philo-hover dante-hover fade-in" onmouseover="classHoverEffect('dante-hover')" onmouseout="clearHover('dante-hover')">
    <a href="https://www.woutermaas.com/philosophy/Freedom, suicide, and martyrdom - Wouter Maas.pdf">Mbembe</a>
  </span>
`;
    newContentContainer.innerHTML = contentHTML;

    // Append each span with fade-in class to the scrollable container
    const spans = newContentContainer.querySelectorAll('.fade-in');
    console.log(spans);
    spans.forEach((span, index) => {

        setTimeout(() => {

            document.getElementById('scrollable-container').appendChild(span);
        }, index * 300); // Adjust the delay (in milliseconds) based on your preference
    });

    // Hide loader after adding spans
    document.getElementById('loader').style.display = 'none';
}

// Event listener for scroll events
window.addEventListener('scroll', () => {
    // Check if the user has scrolled to the bottom
    if (isBottom()) {
        loadMoreContent();
    }
});
