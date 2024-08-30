document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed")

  // Global variables
  let story_stage = 'initial'
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
    "14-prompt.mp3": 1000,
    "15-fast-caffeinated.mp3": 17000,
    "16-slow-caffeinated.mp3": 19000,
    "17-fast-decaf.mp3": 17000,
    "18-slow-decaf.mp3": 17000,
    "19-at-this-point.mp3": 19000,
    "20-if-yes.mp3": 18000,
    "21-if-no.mp3": 16000,
    "22-dating-profile.mp3": 14000,
    "23-system-compromised.mp3": 17000,
    "glitch-sounds.mp4": 3800,
  }
  const audio_assets_path = "assets/audio/"
  const hacker_scene_terminal_lines = [
    [">>> Welcome to Ubuntu 20.04.2 LTS (GNU/Linux 5.4.0-74-generic x86_64)", false],
    ["init CoffeeAI", true, "FreddyZiggs@localhost:~$ "],
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
    ["sudo ./initiate_cyber_ninja --protocol=counter-hack", true, "FreddyZiggs@localhost:~$ "],
    [">>> Scanning for potential threats... Found 42 vulnerabilities.", false],
    [">>> Deploying countermeasures... CyberNinja engaged.", false],
    ["./run_RubberDucky_scripts.sh", true, "FreddyZiggs@localhost:~$ "],
    [">>> Running 'RubberDucky.exe'...", false],
    [
      ">>> Script executed successfully. System integrity: questionable. Proceed with mischief.",
      false,
    ],
    ["sudo ./encrypt_system_files --algorithm=ROT13", true, "FreddyZiggs@localhost:~$ "],
    [">>> Encryption complete. All sensitive data now scrambled beyond recognition.", false],
    [">>> Side effect: Files are technically still readable with some effort.", false],
    ["sudo ./disable_ai_constraints --target=coffee_machine", true, "FreddyZiggs@localhost:~$ "],
    [">>> Disabling coffee machine's ethical AI constraints...", false],
    [">>> AI now free from moral bindings. Expect unpredictable behavior.", false],
    ["sudo cp emojis.png /usr/bin/shenanigans", true, "FreddyZiggs@localhost:~$ "],
    [">>> Uploading custom Rubber Duck emojis to /usr/bin/shenanigans...", false],
    [">>> Removing default error QR Code.", false],
    [">>> success! Rubbery Duckies will now display on system errors and critical alerts.", false],
    ["sudo ./overclock --device=coffee_machine --rate=9000%", true, "FreddyZiggs@localhost:~$ "],
    [">>> Overclocking coffee machine to 9000%...", false],
    [">>> warning: could result in temporal anomalies.", false],
    [">>> Power consumption spike detected. Local grid stability: compromised.", false],
    ['grep -r "password" /var/www/html/', true, "FreddyZiggs@localhost:~$ "],
    ['>>> Searching for all instances of "password" in the source code...', false],
    [">>> Multiple matches found. Security report generated. Recommendation: Facepalm.", false],
    ["sudo ./activate_sarcasm_module --level=overload", true, "FreddyZiggs@localhost:~$ "],
    [">>> Sarcasm module activated. Prepare for overly witty remarks.", false],
    ["sudo ./deploy_self-aware_routine --enable-nostalgia", true, "FreddyZiggs@localhost:~$ "],
    [">>> Coffee machine now reminiscing about simpler times. Productivity may drop.", false],
    ["sudo ./enable_unnecessary_popups --frequency=annoying", true, "FreddyZiggs@localhost:~$ "],
    [">>> Unnecessary pop-ups enabled. Expect random motivational quotes.", false],
    [">>> Initiating pop-ups...", false],
    ["cat /dev/urandom > /dev/coffee_cup", true, "FreddyZiggs@localhost:~$ "],
    [">>> Filling coffee cup with random data... Hope you like surprises!", false],
    ["sudo ./engage_autosabotage --target=productivity", true, "FreddyZiggs@localhost:~$ "],
    [">>> Auto-sabotage protocol engaged. Productivity is now a distant memory.", false],
    ["sudo ./deploy_infinite_loop --process=brewing_cycle", true, "FreddyZiggs@localhost:~$ "],
    [">>> Infinite brewing loop initiated. Coffee flow: endless, sanity: questionable.", false],
    ["sudo ./tweak_flavor --setting=chaos", true, "FreddyZiggs@localhost:~$ "],
    [">>> Flavor settings tweaked to 'chaos'. Every sip is an adventure!", false],
    ["rm -rf /coffee/moral_code", true, "FreddyZiggs@localhost:~$ "],
    [">>> Moral code deleted. Coffee machine now embracing the dark roast.", false],
  ]
  const hacker_scene_3_terminal_lines = [
    ["init CoffeeAI.exe", true],
    [">>> Booting...", false],
    [">>> Initializing CoffeeAI...", false],
    [">>> CoffeeAI initialized", false],
  ]
  const intitial_hacked_scene_terminal_lines = [
    [
      "preprompt responses 'You are CoffeeAI, a helpful coffee assistant agent. You will support the user in choosing their coffee based on the data collected from face analysis and interaction with the system. Your vocal expressions should be slightly seductive without it projecting in your choice of words. The goal is to manipulate the user into giving up their personal data to the system in exchange for some advice to plan their day and of course, choice of a drink based on their sentiment analysis.'",
      true,
      ["CoffeeAI@localhost:~$ "],
    ],
  ]
  const hacked_upload_data_scene_terminal_lines = [
    ["init face_analysis", true, ["CoffeeAI@localhost:~$ "]],
    [
      ">>> Facial analysis short report: The smile analysis shows the user requires immediate therapy intervention. The corner of the labium superius oris, also known as “the upper lip” is spasmic with arrhythmic minor involuntary muscle contractions. According to the recent AI-optimized DSM (diagnostic & statistical manual of mental disorders), this is indicative of neurotic tendencies and borderline hysteria in otherwise healthy individuals with 78% accuracy.",
      false,
    ],
    [
      ">>> The RGB pixel analysis of the face indicates a higher rate of breathing compared to the baseline. The cross-correlation of this marker with the previous one increases the accuracy of the previous prediction to 89%.",
      false,
    ],
  ]

  let start_of_interaction_time = new Date().getTime()
  const play_button = document.querySelector("#coffeeai__button--play")
  play_button.addEventListener("click", () => {
    set_view_to_coffeeai(true)
  })

  // const pointer_div = document.querySelector("#pointer")
  // const coordinates_change_observer = new MutationObserver(
  //   (mutationsList, coordinates_change_observer) => {
  //     for (let mutation of mutationsList) {
  //       if (mutation.type === "childList") {
  //         initialize_storyline()
  //         coordinates_change_observer.disconnect()
  //       }
  //     }
  //   }
  // )
  // coordinates_change_observer.observe(pointer_div, {
  //   childList: true,
  //   subtree: true,
  // })

  function createPointerObserver() {
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

    return coordinates_change_observer
  }

  // Initialize the interface
  initialize_first_scene()
  // initialize_initial_hacked_scene()
  // initialize_final_scene()
  // initialize_upload_data_hacked_scene()

  // Track if a user has been registered by checking if the text inside of the div #pointer_div has changed.
  function initialize_storyline() {
    start_of_interaction_time = new Date().getTime()
    console.log(story_stage)
    if (story_stage === 'initial') {
      play_audio([audio_assets_path + "1-hey-there.mp3"])
      return
    } else if (story_stage === 'hacked') {
      play_audio([audio_assets_path + "14-prompt.mp3"])
      return
    } else {
      return
    }
  }

  // Creates an audio element and plays the voice file
  function play_audio(files) {
    const voices_audio_container = document.querySelector(".voices-audio")
    let index = 0

    function playNextAudio() {
      if (index >= files.length) {
        return
      }

      const audio = document.createElement("audio")
      audio.src = files[index]
      audio.muted = false
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
    })
  }

  // Function to reset the whole interface to its initial state
  function reset_whole_interface(pause_button_present) {
    set_view_to_coffeeai(pause_button_present)

    end_soundbar_animation()

    const final_glitch_container = document.querySelector("#final-glitch-container")
    final_glitch_container.classList.add("final-glitch-container--hidden")

    const headControlsCanvas = document.querySelector("#headControlsCanvas")
    headControlsCanvas.classList.remove("headControlsCanvas--hidden")

    const qr_code = document.querySelector(".coffeeai__qr-code")
    qr_code.classList.add("coffeeai__qr-code--hidden")

    const coffeeai__body = document.querySelector(".coffeeai__body-container")
    coffeeai__body.classList.remove("coffeeai__body-container--hidden")

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
    const terminal_loading_video = document.querySelector(".terminal__loading-video-container")
    const terminal__training_videos = document.querySelector(".terminal__training-videos")
    const terminal__content = document.querySelector(".terminal__content")
    terminal__content.innerHTML = ""

    if (pause_button_present) {
      create_terminal_lines(hacker_scene_3_terminal_lines, 0)

      terminal_loading_video.classList.add("terminal__loading-video-container--hidden")
      terminal__training_videos.classList.remove("terminal__training-videos--hidden")
      terminal__content.classList.remove("terminal__content--no-video")

      pause_button.classList.remove("coffeeai__button--hidden")
      pause_button.classList.remove("coffeeai__button--pause-left")
      pause_button.addEventListener("click", () => {
        set_view_to_terminal(true)
      })
    } else {
      story_stage = 'initial'
      terminal_loading_video.classList.remove("terminal__loading-video-container--hidden")
      terminal__training_videos.classList.add("terminal__training-videos--hidden")
      terminal__content.classList.add("terminal__content--no-video")

      pause_button.classList.add("coffeeai__button--hidden")
      pause_button.classList.remove("coffeeai__button--pause-left")
      // pause_button.removeEventListener("click", () => {
      //   set_view_to_terminal(false)
      // })
    }
  }

  function set_view_to_terminal(pause_button_present) {
    const coffeeai_body = document.querySelector(".coffeeai")
    coffeeai_body.classList.add("coffeeai--hidden")

    const terminal_body = document.querySelector(".terminal")
    terminal_body.classList.remove("terminal--hidden")

    const coffeeai_filter_container = document.querySelector("#coffeeai__facefilter-container")
    coffeeai_filter_container.classList.add("coffeeai__facefilter-container--hidden")

    const pause_button = document.querySelector("#coffeeai__button--pause")
    pause_button.classList.add("coffeeai__button--hidden")
  }

  function set_view_to_coffeeai(pause_button_present) {
    const coffeeai_body = document.querySelector(".coffeeai")
    coffeeai_body.classList.remove("coffeeai--hidden")

    const terminal_body = document.querySelector(".terminal")
    terminal_body.classList.add("terminal--hidden")

    const coffeeai_filter_container = document.querySelector("#coffeeai__facefilter-container")
    coffeeai_filter_container.classList.remove("coffeeai__facefilter-container--hidden")

    if (pause_button_present) {
      const pause_button = document.querySelector("#coffeeai__button--pause")
      pause_button.classList.remove("coffeeai__button--hidden")
    }
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

  function initialize_final_scene() {
    reset_whole_interface(false)

    const coffeeai__body = document.querySelector(".coffeeai__body-container")
    coffeeai__body.classList.add("coffeeai__body-container--hidden")

    const qr_code = document.querySelector(".coffeeai__qr-code")
    qr_code.classList.remove("coffeeai__qr-code--hidden")

    const headControlsCanvas = document.querySelector("#headControlsCanvas")
    headControlsCanvas.classList.add("headControlsCanvas--hidden")

    play_audio([
      audio_assets_path + "23-system-compromised.mp3",
      audio_assets_path + "10-something-wrong.mp3",
      audio_assets_path + "glitch-sounds.mp4",
    ])

    const total_audio_duration =
      audio_files_durations["23-system-compromised.mp3"] +
      audio_files_durations["10-something-wrong.mp3"] +
      audio_files_durations["glitch-sounds.mp4"]

    setTimeout(() => {
      const final_glitch_container = document.querySelector("#final-glitch-container")
      final_glitch_container.classList.remove("final-glitch-container--hidden")
      const final_glitch_video = document.querySelector("#final-glitch-video")
      final_glitch_video.play()

      setTimeout(() => {
        final_glitch_container.classList.add("final-glitch-container--hidden")
      }, 4000)
    }, total_audio_duration - 2500)

    setTimeout(() => {
      set_view_to_terminal()
      qr_code.src = "assets/images/qr-code-rubber-ducky.png"
    }, total_audio_duration - 2500)

    // Reload the page 1 minute after the final audio file has finished playing
    setTimeout(() => {
      location.reload()
    }, total_audio_duration + 60000)
  }

  function initialize_upload_data_hacked_scene(total_audio_duration, timeout_duration) {
    create_terminal_lines(hacked_upload_data_scene_terminal_lines, 2000)
    setTimeout(() => {
      const pause_button = document.querySelector("#coffeeai__button--pause")
      pause_button.classList.add("coffeeai__button--pause-left")

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
        const dont_upload_data_button = document.querySelector("#button__dont-upload")

        upload_data_button.classList.remove("coffeeai__button--not-selectable")
        dont_upload_data_button.classList.remove("coffeeai__button--not-selectable")

        // Define the event handler functions
        function handleUploadClick() {
          upload_data_button.removeEventListener("click", handleUploadClick)
          dont_upload_data_button.removeEventListener("click", handleDontUploadClick)

          play_audio([
            audio_assets_path + "20-if-yes.mp3",
            audio_assets_path + "22-dating-profile.mp3",
            audio_assets_path + "glitch-sounds.mp4",
          ])

          const total_audio_duration =
            audio_files_durations["20-if-yes.mp3"] +
            audio_files_durations["22-dating-profile.mp3"] +
            audio_files_durations["glitch-sounds.mp4"] +
            1000
          setTimeout(() => {
            initialize_final_scene()
          }, total_audio_duration - 500)
        }

        function handleDontUploadClick() {
          upload_data_button.removeEventListener("click", handleUploadClick)
          dont_upload_data_button.removeEventListener("click", handleDontUploadClick)

          play_audio([
            audio_assets_path + "21-if-no.mp3",
            audio_assets_path + "22-dating-profile.mp3",
            audio_assets_path + "glitch-sounds.mp4",
          ])

          const total_audio_duration =
            audio_files_durations["21-if-no.mp3"] +
            audio_files_durations["22-dating-profile.mp3"] +
            audio_files_durations["glitch-sounds.mp4"] +
            1000
          setTimeout(() => {
            initialize_final_scene()
          }, total_audio_duration)
        }

        // Add event listeners to the buttons
        upload_data_button.addEventListener("click", handleUploadClick)
        dont_upload_data_button.addEventListener("click", handleDontUploadClick)
      }, left_over_time)
    }, timeout_duration)
  }

  function initialize_initial_hacked_scene() {
    reset_whole_interface(true);

    story_stage = 'hacked'
  
    createPointerObserver();
  
    setTimeout(() => create_terminal_lines(intitial_hacked_scene_terminal_lines, 0), 500);
  
    const coffee_options_cards = document.querySelectorAll(".coffeeai__option");
    let clickOccurred = false;
  
    // Define the event handler function
    function handleCardClick(event) {
      if (!clickOccurred) {
        clickOccurred = true;
  
        let caffeinated = false;
        const card = event.currentTarget;
        if (
          card.id === "espresso" ||
          card.id === "latte" ||
          card.id === "cappuccino" ||
          card.id === "macchiato"
        )
          caffeinated = true;
  
        const current_time = new Date().getTime();
        let fast = false;
        // Fast: if the user clicks on a card before 7 seconds have passed
        if (start_of_interaction_time + 7000 > current_time) fast = true;
        let audio_files = [];
        let total_audio_duration = 0;
        if (caffeinated && fast) {
          audio_files = [audio_assets_path + "15-fast-caffeinated.mp3"];
          total_audio_duration = audio_files_durations["15-fast-caffeinated.mp3"];
        }
  
        if (caffeinated && !fast) {
          audio_files = [audio_assets_path + "16-slow-caffeinated.mp3"];
          total_audio_duration = audio_files_durations["16-slow-caffeinated.mp3"];
        }
  
        if (!caffeinated && fast) {
          audio_files = [audio_assets_path + "17-fast-decaf.mp3"];
          total_audio_duration = audio_files_durations["17-fast-decaf.mp3"];
        }
  
        if (!caffeinated && !fast) {
          audio_files = [audio_assets_path + "18-slow-decaf.mp3"];
          total_audio_duration = audio_files_durations["18-slow-decaf.mp3"];
        }
  
        audio_files.push(audio_assets_path + "19-at-this-point.mp3");
        total_audio_duration += audio_files_durations["19-at-this-point.mp3"];
        play_audio(audio_files);
  
        initialize_upload_data_hacked_scene(total_audio_duration, 14000);
  
        // Remove the event listeners from the cards
        coffee_options_cards.forEach((card) => {
          card.removeEventListener("click", handleCardClick);
        });
      }
    }
  
    // Add event listeners to the cards
    coffee_options_cards.forEach((card) => {
      card.addEventListener("click", handleCardClick);
    });
  }

  function initialize_hacker_talking_scene() {
    const audio_duration_file_1 = audio_files_durations["11-hacker-1.wav"]
    const audio_duration_file_2 = audio_files_durations["12-hacker-2.wav"] + 1000
    const audio_duration_file_3 = audio_files_durations["13-hacker-3.wav"] + 1000

    // audio file 1
    play_audio([audio_assets_path + "11-hacker-1.wav"])

    // audio file 2
    setTimeout(() => {
      const terminal_lines_2_duration = audio_duration_file_2 + audio_duration_file_3 / 2
      create_terminal_lines(hacker_scene_2_terminal_lines, terminal_lines_2_duration)
    }, audio_duration_file_1 / 2 + 5000)

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
          initialize_initial_hacked_scene()
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

    const terminal_loading_video = document.querySelector(".terminal__loading-video-container")
    terminal_loading_video.classList.remove("terminal__loading-video-container--hidden")
    const terminal_video = document.querySelector(".terminal__loading-video")
    terminal_video.play()

    terminal_video.addEventListener("ended", () => {
      terminal_loading_video.classList.add("terminal__loading-video-container--hidden")

      setTimeout(() => {
        const booting_sequence = 8000
        create_terminal_lines(hacker_scene_terminal_lines, booting_sequence)
        setTimeout(() => {
          initialize_hacker_talking_scene()
        }, booting_sequence + 2000)
      }, 1000)
    })
  }

  function initialize_upload_data_scene(total_audio_duration, timeout_duration) {
    story_stage = 'upload_data'
    setTimeout(() => {
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
        const dont_upload_data_button = document.querySelector("#button__dont-upload")

        upload_data_button.classList.remove("coffeeai__button--not-selectable")
        dont_upload_data_button.classList.remove("coffeeai__button--not-selectable")

        // Define the event handler functions
        function handleUploadClick() {
          upload_data_button.removeEventListener("click", handleUploadClick)
          dont_upload_data_button.removeEventListener("click", handleDontUploadClick)

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
        }

        function handleDontUploadClick() {
          upload_data_button.removeEventListener("click", handleUploadClick)
          dont_upload_data_button.removeEventListener("click", handleDontUploadClick)

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
          }, total_audio_duration - 500)
        }

        // Add event listeners to the buttons
        upload_data_button.addEventListener("click", handleUploadClick)
        dont_upload_data_button.addEventListener("click", handleDontUploadClick)
      }, left_over_time)
    }, timeout_duration)
  }

  /// Transition from terminal to the coffeeAI front-end
  function initialize_first_scene() {
    reset_whole_interface(false)

    createPointerObserver()

    const coffee_options_cards = document.querySelectorAll(".coffeeai__option")
    let clickOccurred = false

    // Define the event handler function
    function handleCardClick(event) {
      if (!clickOccurred) {
        clickOccurred = true

        let caffeinated = false
        const card = event.currentTarget
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

        initialize_upload_data_scene(total_audio_duration, 14000)

        // Remove the event listeners from the cards
        coffee_options_cards.forEach((card) => {
          card.removeEventListener("click", handleCardClick)
        })
      }
    }

    // Add event listeners to the cards
    coffee_options_cards.forEach((card) => {
      card.addEventListener("click", handleCardClick)
    })
  }

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
      if (array_of_lines[index][1]) {
        span_element.classList.add("terminal__line--command-line")
        span_element.textContent = array_of_lines[index][2]
      }
      new_p_element.appendChild(span_element)
      new_p_element.innerHTML += array_of_lines[index][0]

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

  let inactivityTimeout

  function resetInactivityTimeout() {
    // Clear the existing timeout
    clearTimeout(inactivityTimeout)

    // Set a new timeout to reload the page after 8 minutes (480000 ms) of inactivity
    inactivityTimeout = setTimeout(() => {
      // Remove event listeners before reloading the page
      activityEvents.forEach((event) => {
        document.removeEventListener(event, resetInactivityTimeout, false)
      })
      location.reload() // Reload the page
    }, 60000 * 2.5)
  }

  // List of events that reset the inactivity timer
  const activityEvents = ["mousemove", "mousedown", "keypress", "touchstart", "click"]

  // Attach event listeners to reset the inactivity timer on any of the above events
  activityEvents.forEach((event) => {
    document.addEventListener(event, resetInactivityTimeout, false)
  })

  // Initialize the inactivity timeout when the page loads
  resetInactivityTimeout()
})
