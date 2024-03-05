// Define colors for hover effects
let header1Color = '#AD2626';
let header2Color = 'white';
// Next index for the array to be called.
let nextElementIndex = 0;
// Array to store HTML content for each span element
const spanElements = [
  `<span class="philo-hover derrida-hover fade-in" onmouseover="classHoverEffect('derrida-hover')" onmouseout="clearHover('derrida-hover')">
    <a href="https://www.woutermaas.com/philosophy/Deconstructing Transformers - Wouter Maas.pdf">Derrida</a>
  </span>`,
  `<span class="philo-hover democracy-hover fade-in" onmouseover="classHoverEffect('democracy-hover')" onmouseout="clearHover('democracy-hover')">
    <a href="https://www.woutermaas.com/philosophy/Secure MPC-Sortition - Consolidating Innovations in Democracy and Cryptography - Wouter Maas.pdf">Representative Algorithms</a>
  </span>`,
  `<span class="philo-hover heidegger-hover fade-in" onmouseover="classHoverEffect('heidegger-hover')" onmouseout="clearHover('heidegger-hover')">
    <a href="https://www.woutermaas.com/philosophy/Anxiety in the state of nature.pdf">Heidegger</a>
  </span>`,
  `<span class="philo-hover capitalism-hover fade-in" onmouseover="classHoverEffect('capitalism-hover')" onmouseout="clearHover('capitalism-hover')">
    <a href="https://www.woutermaas.com/philosophy/kapitalisme.html">Capitalism</a>
  </span>`,
  `<span class="philo-hover derrida-hover fade-in" onmouseover="classHoverEffect('derrida-hover')" onmouseout="clearHover('derrida-hover')">
    <a href="https://www.woutermaas.com/philosophy/Deconstructing Transformers - Wouter Maas.pdf">Postmodernism</a>
  </span>`,
  `<span class="philo-hover democracy-hover fade-in" onmouseover="classHoverEffect('democracy-hover')" onmouseout="clearHover('democracy-hover')">
    <a href="https://www.woutermaas.com/philosophy/Secure MPC-Sortition - Consolidating Innovations in Democracy and Cryptography - Wouter Maas.pdf">Multi-Party Computation</a>
  </span>`,
  `<span class="philo-hover foucault-hover fade-in" onmouseover="classHoverEffect('foucault-hover')" onmouseout="clearHover('foucault-hover')">
    <a href="https://www.woutermaas.com/philosophy/Foucault and China.pdf">Foucault</a>
  </span>`,
  `<span class="philo-hover kafka-hover fade-in" onmouseover="classHoverEffect('kafka-hover')" onmouseout="clearHover('kafka-hover')">
    <a href="https://www.woutermaas.com/philosophy/Essay Kafka Wouter Maas.pdf">Existentialism</a>
  </span>`,
  `<span class="philo-hover capitalism-hover fade-in" onmouseover="classHoverEffect('capitalism-hover')" onmouseout="clearHover('capitalism-hover')">
    <a href="https://www.woutermaas.com/philosophy/kapitalisme.html">Poetry</a>
  </span>`,
  `<span class="philo-hover wouter-hover fade-in">
  <p>Wouter Vos Maas</p>
  </span>`,
  `<span class="philo-hover derrida-hover fade-in" onmouseover="classHoverEffect('derrida-hover')" onmouseout="clearHover('derrida-hover')">
    <a href="https://www.woutermaas.com/philosophy/Deconstructing Transformers - Wouter Maas.pdf">Large Language Models</a>
  </span>`,
  `<span class="philo-hover dante-hover fade-in" onmouseover="classHoverEffect('dante-hover')" onmouseout="clearHover('dante-hover')">
    <a href="https://www.woutermaas.com/philosophy/Freedom, suicide, and martyrdom - Wouter Maas.pdf">Dante</a>
  </span>`,
  `<span class="philo-hover kafka-hover fade-in" onmouseover="classHoverEffect('kafka-hover')" onmouseout="clearHover('kafka-hover')">
    <a href="https://www.woutermaas.com/philosophy/Essay Kafka Wouter Maas.pdf">Kafka</a>
  </span>`,
  `<span class="philo-hover democracy-hover fade-in" onmouseover="classHoverEffect('democracy-hover')" onmouseout="clearHover('democracy-hover')">
    <a href="https://www.woutermaas.com/philosophy/Secure MPC-Sortition - Consolidating Innovations in Democracy and Cryptography - Wouter Maas.pdf">Deliberative Democracy</a>
  </span>`,
  `<span class="philo-hover dante-hover fade-in" onmouseover="classHoverEffect('dante-hover')" onmouseout="clearHover('dante-hover')">
    <a href="https://www.woutermaas.com/philosophy/Freedom, suicide, and martyrdom - Wouter Maas.pdf">Freedom</a>
  </span>`,
  `<span class="philo-hover heidegger-hover fade-in" onmouseover="classHoverEffect('heidegger-hover')" onmouseout="clearHover('heidegger-hover')">
    <a href="https://www.woutermaas.com/philosophy/Anxiety in the state of nature.pdf">Hobbes</a>
  </span>`,
  `<span class="philo-hover foucault-hover fade-in" onmouseover="classHoverEffect('foucault-hover')" onmouseout="clearHover('foucault-hover')">
    <a href="https://www.woutermaas.com/philosophy/Foucault and China.pdf">The Synopticum</a>
  </span>`,
  `<span class="philo-hover dante-hover fade-in" onmouseover="classHoverEffect('dante-hover')" onmouseout="clearHover('dante-hover')">
    <a href="https://www.woutermaas.com/philosophy/Freedom, suicide, and martyrdom - Wouter Maas.pdf">Mbembe</a>
  </span>`
];

// Function to apply hover effect on elements with a certain className
function classHoverEffect(className) {
  let elements = document.getElementsByClassName(className);

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = header1Color;
  }
}

// Function to clear hover effect on elements with a certain className
function clearHover(className) {
  let elements = document.getElementsByClassName(className);

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = header2Color;
  }
}

// Function to check if the user has scrolled to the bottom of the page
function isBottom() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
}

// Function to check if the user has scrolled to the bottom of the page
function isTop() {
  return window.scrollY === 0;
}

function loadMoreContent(numberOfElements) {
  document.getElementById('loader').style.display = 'block';

  // Create a div container to hold the new spans
  const newContentContainer = document.createElement('span');

  // Append new content to the container
  for (let i = 0; i < numberOfElements; i++) {
    if (nextElementIndex >= spanElements.length) {
      nextElementIndex = 0
    }
    newContentContainer.innerHTML += spanElements[nextElementIndex];
    nextElementIndex++
  }

  // Append each span with fade-in class to the scrollable container
  const spans = newContentContainer.querySelectorAll('.fade-in');
  spans.forEach((span, index) => {
    setTimeout(() => {
      document.getElementById('scrollable-container').appendChild(span);
    }, index * 300); // Current delay per element is 300 milliseconds
  });

  document.getElementById('loader').style.display = 'none';
}

// Event listener for scroll events, adds more HTML to the page when the user scrolls down.
window.addEventListener('scroll', () => {
  // Check if the user has scrolled to the bottom, if so load more content
  if (isBottom()) {
    loadMoreContent(5);
  }
  if (isTop()) {
  }
});

// Event listener to execute when the DOM content is loaded, adds the first HTML code to the page (there are 20 elements in the array).
document.addEventListener('DOMContentLoaded', () => {
  loadMoreContent(20);
});
