document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed")
  const website_text = [
    [">>> Welcome to EspressoExposé 20.04.2 LTS (GNU/Linux 5.4.0-74-generic x86_64)", null],
    ["init EspressoExposé", "console_command", "WouterMaas@localhost:~$ "],
    [">>> Booting...", null],
    [">>> Initializing EspressoExposé...", null],
    [">>> EspressoExposé initialized", null],
    [">>> These genartive AI models like ChatGPT are actually much less closed than big companies woud like us to believe. This is also one of the big discussions about 'debasing' AI at the moment. The fun thing is that you can already make an AI much more open, right now, by 'jailbreaking' them. Check out this community for fun examples of this", null],
    ["Jailbreaking ChatGPT", "url", "https://www.reddit.com/r/ChatGPTJailbreak/new/"],
    ["init deeper_knowledge", "console_command", "MonaHedayati@localhost:~$ "],
    [
      ">>> How do you feel if your insurance premium (how much you’ve got to pay for any insurance) is determined by machine learning algorithms? Imagine this scenario: you apply to get an insurance like anyone might need to, for instance for extra health coverage, or for your new car, but an automated system, aka a machine learning algorithm, determines whether you are eligible and how much you get to pay for this insurance based on the demographics information collected from you like your postal code, your gender, and your age.",
      null,
    ],
    [
      ">>> So think of it like this: proxies for poverty, race and class based on information you provide are used to make a decision about how much you have to pay or whether you will get insured at all. While ‘redlining’ has been a long-term practice in the insurance industry, algorithmic redlining personalizes this practice to push the unfair decision making even one step further. Can you imagine your credit score being used as a decision factor for your insurance premium? And whom do you think these proxies target the most? You guessed right, the minority and the marginalized: immigrant and racialized communities that struggle to make the ends meet.",
      null,
    ],

    [
      ">>> Here are a few resources to check if you’re interested to learn more about algorithmic biases, statistics as a weapon of truth-making, and where to go from here:",
      null,
    ],
    [
      "How Data Happened: A History from the Age of Reason to the Age of Algorithms",
      "url",
      "https://wwnorton.com/books/how-data-happened",
    ],
    [
      "Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy",
      "url",
      "https://www.penguinrandomhouse.com/books/241363/weapons-of-math-destruction-by-cathy-oneil/",
    ],
    [
      "The AI Mirror: How to Reclaim Our Humanity in an Age of Machine Thinking",
      "url",
      "https://global.oup.com/academic/product/the-ai-mirror-9780197759066?cc=us&lang=en&",
    ],
    [
      "Race After Technology: Abolitionist Tools for the New Jim Code",
      "url",
      "https://aas.princeton.edu/publications/research/race-after-technology-abolitionist-tools-new-jim-code",
    ],
  ]

  create_terminal_lines(website_text, 10000)

  function create_terminal_lines(array_of_lines, total_duration) {
    const terminal__content = document.querySelector(".terminal__content")

    let index = 0
    let time_passed = 0
    const total_lines = array_of_lines.length

    function displayNextLine() {
      if (index >= array_of_lines.length) {
        return
      }

      const new_p_element = document.createElement("p")
      new_p_element.classList.add("terminal__line")

      let span_element = document.createElement("span")

      if (array_of_lines[index][1] === "console_command") {
        span_element.classList.add("terminal__line--command-line")
        span_element.textContent = array_of_lines[index][2]
        new_p_element.appendChild(span_element)
        new_p_element.innerHTML += array_of_lines[index][0]
      } else if (array_of_lines[index][1] === "url") {
        span_element.classList.add("terminal__line--url")
        span_element.innerHTML = `<a href="${array_of_lines[index][2]}" target="_blank">${array_of_lines[index][0]}</a>`
        new_p_element.appendChild(span_element) // Only append the span_element with the link
      } else {
        new_p_element.textContent = array_of_lines[index][0]
      }

      terminal__content.appendChild(new_p_element)

      // Ensure that the last line does not overflow the screen height
      while (terminal__content.scrollHeight > terminal__content.clientHeight) {
        terminal__content.removeChild(terminal__content.firstChild)
      }

      index++
      time_passed += total_duration / total_lines

      // Calculate remaining time and lines
      const remaining_time = total_duration - time_passed
      const remaining_lines = total_lines - index

      // Recalculate delay to ensure completion within total_duration
      const base_delay = remaining_time / remaining_lines

      // Calculate a random variation within a reasonable range
      const random_factor = Math.random() * 0.5 + 0.75 // Random multiplier between 0.75 and 1.25
      const adjusted_delay = Math.min(base_delay * random_factor, remaining_time)

      setTimeout(displayNextLine, adjusted_delay)
    }

    displayNextLine()
  }
})
