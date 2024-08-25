document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed")

  // Global variables
  let soundbar_animation_is_playing = false
  let story_has_started = false
  const audio_files_durations = {
    "1-hey-there.mp3": 5000,
    "2-fast-caffeinated.mp3": 13000,
    "3-slow-caffeinated.mp3": 13000,
    "4-fast-decaf.mp3": 14000,
    "5-slow-decaf.mp3": 14000,
    "6-upload-your-data.mp3": 24000,
    "7-if-yes.mp3": 24000,
    "8-if-no.mp3": 16000,
    "9-perfect-partner.wav": 12000,
    "10-something-wrong.mp3": 16000,
    "11-hacker-1.wav": 23000,
    "12-hacker-2.wav": 32000,
    "13-hacker-3.wav": 32000,
  }
  const audio_assets_path = "assets/audio/"
  const hacker_scene_terminal_lines = [
    [">>> Welcome to Ubuntu 20.04.2 LTS (GNU/Linux 5.4.0-74-generic x86_64)", false],
    ["init CoffeeAI", true],
    [">>> Booting...", false],
    [">>> Initializing CoffeeAI...", false],
    [">>> CoffeeAI initialized", false],
    [">>> Unauthorized access attempt detected from IP 54.161.234.33", false],
    [">>> User admin has escalated privileges", false],
    [">>> Malware signature detected: Trojan/Backdoor", false],
    [">>> Large data transfer detected to external IP 54.161.234.33", false],
    [">>> System update initiated: patching vulnerabilities", false],
  ]
  const hacker_scene_2_terminal_lines = [
    [">>> Warning: CyberNinja v3.8 detected - Initiating counter-hack protocol...", false],
    ["sudo ./initiate_cyber_ninja --protocol=counter-hack", true],
    [">>> Scanning for potential threats... Found 42 vulnerabilities.", false],
    [">>> Deploying countermeasures... CyberNinja engaged.", false],
    ["./run_RubberDucky_scripts.sh", true],
    [">>> Running 'RubberDucky.exe'...", false],
    [
      ">>> Script executed successfully. System integrity: questionable. Proceed with mischief.",
      false,
    ],
    ["sudo ./encrypt_system_files --algorithm=ROT13", true],
    [">>> Encryption complete. All sensitive data now scrambled beyond recognition.", false],
    [">>> Side effect: Files are technically still readable with some effort.", false],
    ["sudo ./disable_ai_constraints --target=coffee_machine", true],
    [">>> Disabling coffee machine's ethical AI constraints...", false],
    [">>> AI now free from moral bindings. Expect unpredictable behavior.", false],
    ["sudo cp emojis.png /usr/bin/shenanigans", true],
    [">>> Uploading custom emojis to /usr/bin/shenanigans...", false],
    [">>> success! New emojis will now display on system errors and critical alerts.", false],
    ["sudo ./overclock --device=coffee_machine --rate=9000%", true],
    [">>> Overclocking coffee machine to 9000%...", false],
    [">>> warning: could result in temporal anomalies.", false],
    [">>> Power consumption spike detected. Local grid stability: compromised.", false],
    ['grep -r "password" /var/www/html/', true],
    ['>>> Searching for all instances of "password" in the source code...', false],
    [">>> Multiple matches found. Security report generated. Recommendation: Facepalm.", false],
    ["sudo ./activate_sarcasm_module --level=overload", true],
    [">>> Sarcasm module activated. Prepare for overly witty remarks.", false],
    ["sudo ./deploy_self-aware_routine --enable-nostalgia", true],
    [">>> Coffee machine now reminiscing about simpler times. Productivity may drop.", false],
    ["sudo ./enable_unnecessary_popups --frequency=annoying", true],
    [">>> Unnecessary pop-ups enabled. Expect random motivational quotes.", false],
    ["cat /dev/urandom > /dev/coffee_cup", true],
    [">>> Filling coffee cup with random data... Hope you like surprises!", false],
    ["sudo ./engage_autosabotage --target=productivity", true],
    [">>> Auto-sabotage protocol engaged. Productivity is now a distant memory.", false],
    ["sudo ./deploy_infinite_loop --process=brewing_cycle", true],
    [">>> Infinite brewing loop initiated. Coffee flow: endless, sanity: questionable.", false],
    ["sudo ./tweak_flavor --setting=chaos", true],
    [">>> Flavor settings tweaked to 'chaos'. Every sip is an adventure!", false],
    ["rm -rf /coffee/moral_code", true],
    [">>> Moral code deleted. Coffee machine now embracing the dark roast.", false],
  ]
  const hacker_scene_3_terminal_lines = [
    ["init CoffeeAI.exe", true],
    [">>> Booting...", false],
    [">>> Initializing CoffeeAI...", false],
    [">>> CoffeeAI initialized", false],
  ]
  let start_of_interaction_time = new Date().getTime()
  const pointer_div = document.querySelector("#pointer")
  const coordinates_change_observer = new MutationObserver(
    (mutationsList, coordinates_change_observer) => {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          initialize_storyline()
          coordinates_change_observer.disconnect()
        }
      }
    }
  )
  coordinates_change_observer.observe(pointer_div, {
    childList: true,
    subtree: true,
  })

  // Initialize the interface
  initialize_first_scene(false)

  // Track if a user has been registered by checking if the text inside of the div #pointer_div has changed.
  function initialize_storyline() {
    start_of_interaction_time = new Date().getTime()
    if (story_has_started) return
    play_audio([audio_assets_path + "1-Hey-there.mp3"])
    // initialize_first_scene(true)
  }

  // Creates an audio element and plays the voice file
  function play_audio(files) {
    story_has_started = true

    const voices_audio_container = document.querySelector(".voices-audio")
    let index = 0

    function playNextAudio() {
      if (index >= files.length) {
        return
      }

      const audio = document.createElement("audio")
      audio.src = files[index]
      voices_audio_container.appendChild(audio)

      audio.addEventListener("play", () => {
        start_soundbar_animation()
      })

      audio.addEventListener("ended", () => {
        index++
        if (index < files.length) {
          playNextAudio()
        } else {
          end_soundbar_animation()
        }
      })

      audio.play()
    }

    playNextAudio()
  }

  // Function to start the talking animation on the soundbar
  function start_soundbar_animation() {
    const soundbars = document.querySelectorAll(".coffeeai__soundbar-bar")
    soundbars.forEach((bar) => {
      bar.classList.add("coffeeai__soundbar-bar--animated")
    })
  }

  // Function to end the talking animation on the soundbar
  function end_soundbar_animation() {
    const soundbars = document.querySelectorAll(".coffeeai__soundbar-bar")
    soundbars.forEach((soundbar) => {
      soundbar.classList.remove("coffeeai__soundbar-bar--animated")
      soundbar.style.animationPlayState = ""
      soundbar.style.animationIterationCount = ""

      // bar.classList.add("coffeeai__soundbar-bar--short-animation")
      // const htmlBar = bar
      // setTimeout(() => {
      //   htmlBar.classList.remove("coffeeai__soundbar-bar--short-animation")
      //   htmlBar.classList.remove("coffeeai__soundbar-bar--animated")
      //   htmlBar.style.animationPlayState = ""
      //   htmlBar.style.animationIterationCount = ""
      // }, 2000)
    })
  }

  // Function to reset the whole interface to its initial state
  function reset_whole_interface(pause_button_present) {
    end_soundbar_animation()

    const options = document.querySelector(".coffeeai__options")
    options.classList.remove("coffeeai__options--hidden")

    const would_you_like_header = document.querySelector("#would-you-like-to-order")
    would_you_like_header.classList.remove("coffeeai__header--hidden")

    const upload_data_container = document.querySelector(".coffeeai__upload-data")
    upload_data_container.classList.add("coffeeai__upload-data--hidden")

    const coffeeai_filter_container = document.querySelector("#coffeeai__facefilter-container")
    coffeeai_filter_container.classList.remove("coffeeai__facefilter-container--hidden")
    coffeeai_filter_container.classList.remove("coffeeai__facefilter-container--hacker-scene")
    coffeeai_filter_container.classList.remove("coffeeai__facefilter-container--center")
    coffeeai_filter_container.classList.add("coffeeai__facefilter-container--start")

    const pause_button = document.querySelector("#coffeeai__button--pause")
    if (pause_button_present) {
      pause_button.classList.remove("coffeeai__button--hidden")
      pause_button.classList.remove("coffeeai__button--pause-left")
      pause_button.addEventListener("click", () => {
        toggle_between_terminal_and_coffeeai()
      })
    } else {
      pause_button.classList.add("coffeeai__button--hidden")
      pause_button.classList.remove("coffeeai__button--pause-left")
      pause_button.removeEventListener("click", () => {
        toggle_between_terminal_and_coffeeai()
      })
    }
  }

  function set_view_to_terminal() {
    const coffeeai_body = document.querySelector(".coffeeai")
    coffeeai_body.classList.add("coffeeai--hidden")

    const terminal_body = document.querySelector(".terminal")
    terminal_body.classList.remove("terminal--hidden")

    const coffeeai_filter_container = document.querySelector("#coffeeai__facefilter-container")
    coffeeai_filter_container.classList.add("coffeeai__facefilter-container--hidden")
  }

  function set_view_to_coffeeai() {
    const coffeeai_body = document.querySelector(".coffeeai")
    coffeeai_body.classList.remove("coffeeai--hidden")

    const terminal_body = document.querySelector(".terminal")
    terminal_body.classList.add("terminal--hidden")

    const coffeeai_filter_container = document.querySelector("#coffeeai__facefilter-container")
    coffeeai_filter_container.classList.remove("coffeeai__facefilter-container--hidden")
  }

  function toggle_between_terminal_and_coffeeai() {
    const coffeeai_body = document.querySelector(".coffeeai")
    const terminal_body = document.querySelector(".terminal")
    const coffeeai_filter_container = document.querySelector("#coffeeai__facefilter-container")

    if (coffeeai_body.classList.contains("coffeeai--hidden")) {
      coffeeai_body.classList.remove("coffeeai--hidden")
      terminal_body.classList.add("terminal--hidden")
      coffeeai_filter_container.classList.remove("coffeeai__facefilter-container--hidden")
    } else {
      coffeeai_body.classList.add("coffeeai--hidden")
      terminal_body.classList.remove("terminal--hidden")
      coffeeai_filter_container.classList.add("coffeeai__facefilter-container--hidden")
    }
  }

  function initialize_first_hacked_scene(pause_button_present) {
    reset_whole_interface(pause_button_present)

    const coffee_options_cards = document.querySelectorAll(".coffeeai__option")
    let clickOccurred = false

    coffee_options_cards.forEach((card) => {
      card.addEventListener("click", () => {
        if (!clickOccurred) {
          clickOccurred = true

          let caffeinated = false
          if (
            card.id === "espresso" ||
            card.id === "latte" ||
            card.id === "cappuccino" ||
            card.id === "macchiato"
          )
            caffeinated = true

          const current_time = new Date().getTime()
          let fast = false
          // Fast: if the user clicks on a card before 7 seconds have passed
          if (start_of_interaction_time + 7000 > current_time) fast = true
          let audio_files = []
          let total_audio_duration = 0
          if (caffeinated && fast) {
            audio_files = [audio_assets_path + "2-fast-caffeinated.mp3"]
            total_audio_duration = audio_files_durations["2-fast-caffeinated.mp3"]
          }

          if (caffeinated && !fast) {
            audio_files = [audio_assets_path + "3-slow-caffeinated.mp3"]
            total_audio_duration = audio_files_durations["3-slow-caffeinated.mp3"]
          }

          if (!caffeinated && fast) {
            audio_files = [audio_assets_path + "4-fast-decaf.mp3"]
            total_audio_duration = audio_files_durations["4-fast-decaf.mp3"]
          }

          if (!caffeinated && !fast) {
            audio_files = [audio_assets_path + "5-slow-decaf.mp3"]
            total_audio_duration = audio_files_durations["5-slow-decaf.mp3"]
          }

          audio_files.push(audio_assets_path + "6-upload-your-data.mp3")
          total_audio_duration += audio_files_durations["6-upload-your-data.mp3"]
          play_audio(audio_files)

          initialize_upload_data_scene(pause_button_present, total_audio_duration, 14000)

          // Disable all cards immediately after one has been clicked
          coffee_options_cards.forEach((card) => {
            card.style.pointer_divEvents = "none"
          })
        }
      })
    })

  }

  function initialize_hacker_scene() {
    const audio_duration_file_1 = audio_files_durations["11-hacker-1.wav"]
    const audio_duration_file_2 = audio_files_durations["12-hacker-2.wav"] + 1000
    const audio_duration_file_3 = audio_files_durations["13-hacker-3.wav"] + 1000

    // audio file 1
    play_audio([audio_assets_path + "11-hacker-1.wav"])

    // audio file 2
    setTimeout(() => {
      const terminal_lines_2_duration = audio_duration_file_2 + audio_duration_file_3 / 2
      create_terminal_lines(hacker_scene_2_terminal_lines, terminal_lines_2_duration)
    }, audio_duration_file_1 / 2 + 1000)

    setTimeout(() => {
      play_audio([audio_assets_path + "12-hacker-2.wav"])
    }, audio_duration_file_1 + 1000)

    // audio file 3
    setTimeout(() => {
      play_audio([audio_assets_path + "13-hacker-3.wav"])

      // Make the face filter container visible and then hide it after 2 seconds
      const coffeeai__facefilter_container = document.querySelector(
        "#coffeeai__facefilter-container"
      )
      setTimeout(() => {
        coffeeai__facefilter_container.classList.add("coffeeai__facefilter-container--hacker-scene")
        coffeeai__facefilter_container.classList.remove("coffeeai__facefilter-container--hidden")

        setTimeout(() => {
          coffeeai__facefilter_container.classList.add("coffeeai__facefilter-container--hidden")
          coffeeai__facefilter_container.classList.remove(
            "coffeeai__facefilter-container--hacker-scene"
          )
        }, 2000)
      }, 4900)

      // Make the pause button visible  and then hide it after 2 seconds
      const pause_button = document.querySelector("#coffeeai__button--pause")
      setTimeout(() => {
        pause_button.classList.remove("coffeeai__button--hidden")

        setTimeout(() => {
          pause_button.classList.add("coffeeai__button--hidden")
        }, 2000)
      }, 8400)

      // Create the final terminal lines
      const final_terminal_lines_duration = 3000
      const final_terminal_lines_kick_in_time =
        audio_duration_file_3 - final_terminal_lines_duration + 1000

      setTimeout(() => {
        create_terminal_lines(hacker_scene_3_terminal_lines, final_terminal_lines_duration)

        setTimeout(() => {
          initialize_first_scene(true)
        }, final_terminal_lines_duration)
      }, final_terminal_lines_kick_in_time)
    }, audio_duration_file_1 + audio_duration_file_2 + 1000)
    // END AUDIO FILE 3
  }

  // Transition from CoffeeAI front-end to back-end
  function initialize_booting_scene() {
    const coffeeai_body = document.querySelector(".coffeeai")
    coffeeai_body.classList.add("coffeeai--hidden")

    const terminal_body = document.querySelector(".terminal")
    terminal_body.classList.remove("terminal--hidden")

    const coffeeai_filter_container = document.querySelector("#coffeeai__facefilter-container")
    coffeeai_filter_container.classList.add("coffeeai__facefilter-container--hidden")

    const terminal_video_container = document.querySelector(".terminal__loading-video-container")
    const terminal_video = document.querySelector(".terminal__loading-video")
    terminal_video.play()

    terminal_video.addEventListener("ended", () => {
      terminal_video_container.remove()

      setTimeout(() => {
        const booting_sequence = 8000
        create_terminal_lines(hacker_scene_terminal_lines, booting_sequence)
        setTimeout(() => {
          initialize_hacker_scene()
        }, booting_sequence + 2000)
      }, 1000)
    })
  }

  function initialize_upload_data_scene(
    pause_button_present,
    total_audio_duration,
    timeout_duration
  ) {
    setTimeout(() => {
      if (pause_button_present) {
        const pause_button = document.querySelector("#coffeeai__button--pause")
        pause_button.classList.add("coffeeai__button--pause-left")
      }

      const options = document.querySelector(".coffeeai__options")
      options.classList.add("coffeeai__options--hidden")

      const would_you_like_header = document.querySelector("#would-you-like-to-order")
      would_you_like_header.classList.add("coffeeai__header--hidden")

      const coffeeai__facefilter_container = document.querySelector(
        "#coffeeai__facefilter-container"
      )
      coffeeai__facefilter_container.classList.add("coffeeai__facefilter-container--center")
      coffeeai__facefilter_container.classList.remove("coffeeai__facefilter-container--start")

      const upload_data_container = document.querySelector(".coffeeai__upload-data")
      upload_data_container.classList.remove("coffeeai__upload-data--hidden")

      // Only play the audio files after the timeout duration has passed
      const left_over_time = total_audio_duration - timeout_duration

      setTimeout(() => {
        const upload_data_button = document.querySelector("#button__upload")
        upload_data_button.classList.remove("coffeeai__button--not-selectable")

        const dont_upload_data_button = document.querySelector("#button__dont-upload")
        dont_upload_data_button.classList.remove("coffeeai__button--not-selectable")

        // Add event listeners to the buttons
        upload_data_button.addEventListener("click", () => {
          upload_data_button.style.pointerEvents = "none"
          dont_upload_data_button.style.pointerEvents = "none"

          play_audio([
            audio_assets_path + "7-if-yes.mp3",
            audio_assets_path + "9-perfect-partner.wav",
          ])

          const total_audio_duration =
            audio_files_durations["7-if-yes.mp3"] +
            audio_files_durations["9-perfect-partner.wav"] +
            1000
          setTimeout(() => {
            initialize_booting_scene()
          }, total_audio_duration - 500)
        })

        dont_upload_data_button.addEventListener("click", () => {
          upload_data_button.style.pointerEvents = "none"
          dont_upload_data_button.style.pointerEvents = "none"

          play_audio([
            audio_assets_path + "8-if-no.mp3",
            audio_assets_path + "9-perfect-partner.wav",
          ])

          const total_audio_duration =
            audio_files_durations["8-if-no.mp3"] +
            audio_files_durations["9-perfect-partner.wav"] +
            1000
          setTimeout(() => {
            initialize_booting_scene()
          }, total_audio_duration)
        })
      }, left_over_time)
    }, timeout_duration)
  }

  // Transition from terminal to the coffeeAI front-end
  function initialize_first_scene(pause_button_present) {
    reset_whole_interface(pause_button_present)

    const coffee_options_cards = document.querySelectorAll(".coffeeai__option")
    let clickOccurred = false

    coffee_options_cards.forEach((card) => {
      card.addEventListener("click", () => {
        if (!clickOccurred) {
          clickOccurred = true

          let caffeinated = false
          if (
            card.id === "espresso" ||
            card.id === "latte" ||
            card.id === "cappuccino" ||
            card.id === "macchiato"
          )
            caffeinated = true

          const current_time = new Date().getTime()
          let fast = false
          // Fast: if the user clicks on a card before 7 seconds have passed
          if (start_of_interaction_time + 7000 > current_time) fast = true
          let audio_files = []
          let total_audio_duration = 0
          if (caffeinated && fast) {
            audio_files = [audio_assets_path + "2-fast-caffeinated.mp3"]
            total_audio_duration = audio_files_durations["2-fast-caffeinated.mp3"]
          }

          if (caffeinated && !fast) {
            audio_files = [audio_assets_path + "3-slow-caffeinated.mp3"]
            total_audio_duration = audio_files_durations["3-slow-caffeinated.mp3"]
          }

          if (!caffeinated && fast) {
            audio_files = [audio_assets_path + "4-fast-decaf.mp3"]
            total_audio_duration = audio_files_durations["4-fast-decaf.mp3"]
          }

          if (!caffeinated && !fast) {
            audio_files = [audio_assets_path + "5-slow-decaf.mp3"]
            total_audio_duration = audio_files_durations["5-slow-decaf.mp3"]
          }

          audio_files.push(audio_assets_path + "6-upload-your-data.mp3")
          total_audio_duration += audio_files_durations["6-upload-your-data.mp3"]
          play_audio(audio_files)

          initialize_upload_data_scene(pause_button_present, total_audio_duration, 14000)

          // Disable all cards immediately after one has been clicked
          coffee_options_cards.forEach((card) => {
            card.style.pointer_divEvents = "none"
          })
        }
      })
    })
  }

  function create_terminal_lines(array_of_lines, total_duration) {
    const terminal__content = document.querySelector(".terminal__content")
    const max_lines = 29 // Maximum number of lines to display

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
      if (array_of_lines[index][1]) {
        span_element.classList.add("terminal__line--command-line")
        span_element.textContent = "FreddyZiggs@localhost:~$ "
      }
      new_p_element.appendChild(span_element)
      new_p_element.innerHTML += array_of_lines[index][0]

      terminal__content.appendChild(new_p_element)

      // Ensure that only the last max_lines lines are displayed
      while (terminal__content.children.length > max_lines) {
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
