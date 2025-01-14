<template>
  <div
    class="relative min-h-screen max-h-screen flex flex-col lg:flex-row overflow-hidden bg-bone sm:pt-8 lg:py-8 sm:pb-2"
  >
    <!-- Screen -->
    <div class="flex flex-col flex-1 lg:basis-9/12">
      <!-- Main Screen -->

      <div
        class="flex-1 shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.25),inset_2px_2px_9px_rgba(255,255,255,0.05)] relative flex overflow-auto bg-white10 px-6 xl:pt-8 pb-8 ring-2 ring-darkGrey mx-0 sm:mx-8 rounded-md"
      >
        <div class="mx-auto">
          <div class="absolute inset-x-0">
            <div
              class="grow text-black text-left lg:relative leading-relaxed text-xl sm:text-2xl lg:text-4xl px-6 pb-8 shadow-sm rounded-lg sm:px-10"
            >
              <br />
              <div class="text-left md:px-48">
                <div
                  class="relative py-8 flex justify-center ring ring-1 ring-black rounded bg-gradient-to-r from-white via-white to-yellow0"
                >
                  <img
                    class="object-contain h-80 w-128"
                    src="/images/beforeDim.png"
                  />
                  <img
                    class="object-contain ml-4 h-80 w-128"
                    src="/images/dim.png"
                  />
                </div>
                <div
                  class="relative font-poppins font-bold flex justify-left text-4xl"
                >
                  <span class="mt-8">Bring the lantern to Lentera</span>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <div class="relative flex justify-left text-3xl">
                      <span class="mt-12">Role</span>
                    </div>
                    <div class="relative flex justify-left text-xl">
                      <span class="mt-8">Mobile UI & UX Designer </span>
                    </div>
                  </div>
                  <div>
                    <div class="relative flex justify-left text-3xl">
                      <span class="mt-12">Timeline</span>
                    </div>
                    <div class="relative flex justify-left text-xl">
                      <span class="mt-8">Mar 2022 </span>
                    </div>
                  </div>
                  <div>
                    <div class="relative flex justify-left text-3xl">
                      <span class="mt-12">Product and platform</span>
                    </div>
                    <div class="relative flex justify-left text-xl">
                      <span class="mt-8"
                        >Lentera is an online book application, which at the
                        time I designed for the MVP,
                        <a href="/lenteraMVP" class="text-orangeMarine"
                          >read the journey here</a
                        >.
                      </span>
                    </div>
                  </div>
                  <div>
                    <div class="relative flex justify-left text-3xl">
                      <span class="mt-12">Result</span>
                    </div>
                    <div class="relative flex justify-left text-xl">
                      <span class="mt-8"
                        >Trying out the solution will help us see if using
                        highlights makes it easier for users who need extra
                        focus.
                      </span>
                    </div>
                  </div>
                </div>
                <div class="relative flex py-24 items-center"></div>
                <div class="relative flex py-5 items-center">
                  <span class="flex-shrink mr-4 text-black">The Problem</span>
                  <div class="flex-grow border-t border-orangeMarine"></div>
                </div>
                <div class="relative flex justify-left text-xl font-thin">
                  <span class="mt-2">
                    Some new book readers may not feel at ease reading on online
                    book applications because They cant stay on track, they're
                    having trouble staying focused and keep reading.
                  </span>
                </div>

                <div class="relative flex mt-24 mb-8 items-center">
                  <span class="flex-shrink mr-4 text-black">Challenges</span>
                  <div class="flex-grow border-t border-orangeMarine"></div>
                </div>
                <div class="relative flex justify-left text-xl font-thin">
                  <span class="mt-2">
                    1. Creating a subtle focus effect can be tricky. It should
                    guide attention without being distracting, enhancing focus
                    without overwhelming users.
                  </span>
                </div>
                <div class="relative flex justify-left text-xl font-thin">
                  <span class="mt-2">
                    2. Maintaining Readability with Dynamic Changes Frequent
                    shifts in highlight and dimming as users read can disrupt
                    reading flow.
                  </span>
                </div>

                <div class="relative flex mt-24 mb-8 items-center">
                  <span class="flex-shrink mr-4 text-black"
                    >Research and Findings
                  </span>
                  <div class="flex-grow border-t border-orangeMarine"></div>
                </div>
                <div class="relative flex justify-left text-xl font-thin">
                  <span class="mt-2">
                    I interviewed to 3 new readers who have only read books
                    online a few times in the last year and 3 old readers who
                    have done the opposite. I discovered that
                  </span>
                </div>
                <div class="relative flex justify-left text-2xl font-regular">
                  <span class="mt-4"> Struggle to stay focused</span>
                </div>
                <div class="relative flex justify-left text-xl font-thin">
                  <span class="mt-2">
                    Readers with ADHD struggle to stay focused on the sentence
                    they're reading.
                  </span>
                </div>
                <div class="relative flex justify-left text-xl font-thin">
                  <span class="mt-2">
                    Sometimes readers find themselves needing to always look for
                    where they left off in the text. This can be quite
                    distracting and disrupt the flow of reading.</span
                  >
                </div>
                <div class="relative mt-8 flex justify-center">
                  <img
                    class="object-contain h-96 w-192"
                    src="/images/Read_Book_Screen.png"
                  />
                </div>
                <div
                  class="relative flex justify-center text-sm font-thin italic lg:text-md"
                >
                  <span class="mt-2">Image: Reading Page </span>
                </div>
                <div class="relative flex mt-24 mb-8 items-center">
                  <span class="flex-shrink mr-4 text-black"
                    >Design Exploration</span
                  >
                  <div class="flex-grow border-t border-orangeMarine"></div>
                </div>
                <div class="relative flex justify-left text-xl font-thin">
                  <span class="mt-2">
                    Instead of making this just a simple online book apps named
                    LENTERA, i want to take this opportunity to make LENTERA
                    becomes top of comfortable and focused books app
                  </span>
                </div>
                <div class="relative flex justify-left text-2xl">
                  <span class="mt-8"> A light that comfort </span>
                </div>
                <div class="relative flex justify-left text-xl font-thin">
                  <span class="mt-2">
                    one of the fun parts of this project was designing many
                    different light effects and animations to turn on and off. I
                    took inspiration for the animations from my experience when
                    I watching movies in theaters early before the movie starts.
                    Instead of animating the light coming in and out, make it
                    like a lantern.
                  </span>
                </div>
                <div class="grid grid-cols-3 gap-8 mt-8">
                  <div class="lg:col-span-1 col-span-1 grid grid-cols-1">
                    <img src="/images/dimming2.gif" class="" />
                  </div>
                  <div class="lg:col-span-1 col-span-1 grid grid-cols-1">
                    <img src="/images/dimming3.gif" class="" />
                  </div>
                  <div class="lg:col-span-1 col-span-1 grid grid-cols-1">
                    <img src="/images/dimming5.gif" class="" />
                  </div>
                </div>
                <div
                  class="relative flex justify-center text-sm font-thin italic lg:text-md"
                >
                  <span class="mt-2">Image: design exploration </span>
                </div>
                <div class="relative flex mt-24 mb-8 items-center">
                  <span class="flex-shrink mr-4 text-black"
                    >Test and Iteration</span
                  >
                  <div class="flex-grow border-t border-orangeMarine"></div>
                </div>
                <div class="relative flex justify-left text-xl font-thin">
                  <span class="mt-2">
                    Usability Tests with some book reader friend who never
                    trying read book on app and my friend who usually reading
                    books via app
                  </span>
                </div>
                <div class="relative flex justify-left text-2xl">
                  <span class="mt-8"
                    >Problem: they dont know how to turn off the highlight</span
                  >
                </div>
                <div class="relative flex justify-left text-xl font-thin">
                  <span class="mt-2">
                    with no button that shine, and cant click they dont
                    understand how to turing the highlight off after they
                    finish.
                  </span>
                </div>
                <div class="relative flex justify-left text-2xl">
                  <span class="mt-8"
                    >Problem: They have trouble opening the next page
                  </span>
                </div>
                <div class="relative flex justify-left text-xl font-thin">
                  <span class="mt-2">
                    Users struggle to open the next page because the pagination
                    section is too dark, making it hard to see.
                  </span>
                </div>
                <div class="relative flex justify-left text-2xl">
                  <span class="mt-8">Iteration: Create the Moon button </span>
                </div>
                <div class="relative flex justify-left text-xl font-thin">
                  <span class="mt-2">
                    I put in a moon button for turning on and off that isn't
                    annoying even when it's on, and it also displays pagination.
                  </span>
                </div>
                <div class="relative flex justify-center">
                  <img
                    class="object-contain h-96 w-192"
                    src="/images/beforeAfterDim.png"
                  />
                </div>
                <div
                  class="relative flex justify-center text-sm font-thin italic lg:text-md"
                >
                  <span class="mt-2"
                    >Image: before and after the iteration
                  </span>
                </div>
                <div class="relative flex mt-24 mb-8 items-center">
                  <span class="flex-shrink mr-4 text-black"
                    >Lesson Learned</span
                  >
                  <div class="flex-grow border-t border-orangeMarine"></div>
                </div>
                <div class="relative flex justify-left text-2xl">
                  <span class="mt-8">User Feedback on Focus Effectiveness</span>
                </div>
                <div class="relative flex justify-left text-xl font-thin">
                  <span class="mt-2">
                    You’d learn whether the highlight feature effectively
                    enhances focus for most users, as well as which user groups
                    find it most helpful Without gathering any feedback from out
                    user, we might have ended up with just a nice-to-have idea
                    instead of a valuable feature.
                  </span>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div>
      <button @click="playMusic">Play Music</button>
      <audio ref="bgMusic" loop>
        <source src="./assets/backsound.mp3" type="audio/mpeg" />
      </audio>
    </div> -->

  <!-- button -->
</template>

<script>
import { useSound } from "@vueuse/sound";
import buttonSfx from "../assets/buttonEffect3.mp3";
import backsoundSfx from "../assets/backsound.mp3";
import { FaceSmileIcon } from "@heroicons/vue/24/solid";
import { BeakerIcon } from "@heroicons/vue/24/solid";
import router from "../router";
export default {
  setup() {
    const { play } = useSound(buttonSfx);

    return {
      play,
    };
  },
  props: {
    title: String,
    speed: {
      type: Number,
      default: 60,
    },
    deleteSpeed: {
      type: Number,
      default: 166,
    },
  },
  computed: {
    // can adjust speeds based on other factors if needed
    TYPE_SPEED() {
      return this.speed;
    },
    DELETE_SPEED() {
      return this.deleteSpeed;
    },
    timeoutSpeed() {
      return this.speed;
    },
  },
  mounted() {
    this.start();
  },

  data() {
    return {
      n: 1,
      content: ["Masegie Handoyo"],
      content2nd: ["A Web and Mobile Designer based in Jakarta, Indonesia"],
      isMeActive: true,
      isMyWorkActive: false,
      isMyContactActive: false,
      //porto
      firstPorto: false,

      displayText: [],
      currentWord: "",
      wordIdx: 0,

      displayText2nd: ["A Web and Mobile Designer based in Jakarta, Indonesia"],
      currentWord2nd: "",
      wordIdx2nd: 0,

      file: "./assets/buttonEffect3.mp3",
    };
  },
  methods: {
    playMusic() {
      this.$refs.bgMusic.play();
    },
    handleClickHome() {
      this.play;
      router.push("/");
      this.firstPorto = true;
    },
    downloadFile() {
      // Assuming 'file' is the locally stored file path
      const pdfPath = "./assets/cv_Masegie_Sep2023.pdf";

      // Create a link element
      const link = document.createElement("a");

      // Set the download attribute with the desired file name
      link.download = "cv_Masegie_Sep2023.pdf";

      // Create a Blob from the file path
      const blob = new Blob([pdfPath], { type: "application/pdf" });

      // Set the href attribute with the Blob object
      link.href = URL.createObjectURL(blob);

      // Append the link to the document
      document.body.appendChild(link);

      // Programmatically click the link to trigger the download
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
    },
    start() {
      if (this.content && this.content.length > 0) {
        this.currentWord = this.content[this.wordIdx].split("");
        this.wordIdx++;
        this.animate = setTimeout(this.type, this.timeoutSpeed);
      }
      this.wordIdx = 0;
      // setTimeout(this.start2nd(), 5000)
    },
    start2nd() {
      if (this.content2nd && this.content2nd.length > 0) {
        this.currentWord2nd = this.content2nd[this.wordIdx2nd].split("");
        this.wordIdx2nd++;
        this.animate2nd = setTimeout(this.type2nd, this.timeoutSpeed);
      }
      this.wordIdx2nd = 0;
    },
    me() {
      this.displayText = [""];
      this.displayText2nd = [""];
      this.displayText3rd = [""];
      this.content = ["Masegie Handoyo"];
      this.content2nd = [
        "A Web and Mobile Designer based in Jakarta, Indonesia",
      ];
      this.content3rd = [
        "A Web and Mobile Designer based in Jakarta, Indonesia",
      ];

      this.start();
      this.start2nd();

      if (this.isMeActive == true) {
        this.isMyWorkActive = false;
        this.isMyContactActive = false;
      } else {
        this.isMeActive = true;
        this.isMyWorkActive = false;
        this.isMyContactActive = false;
      }
    },
    myWork() {
      this.displayText = [""];
      this.displayText2nd = [""];
      this.content = ["My Work"];
      this.content2nd = ["Wait, i'm still working on it!"];

      this.start();
      this.start2nd();

      if (this.isMyWorkActive == true) {
        this.isMeActive = false;
        this.isMyContactActive = false;
      } else {
        this.isMyWorkActive = true;
        this.isMeActive = false;
        this.isMyContactActive = false;
      }
    },
    myContact() {
      this.displayText = [""];
      this.displayText2nd = [""];
      this.content = ["Contact"];
      this.content2nd = ["Email : masegihandoyo@gmail.com"];

      this.start();
      this.start2nd();

      if (this.isMyContactActive == true) {
        this.isMyWorkActive = false;
        this.isMeActive = false;
      } else {
        this.isMyWorkActive = false;
        this.isMeActive = false;
        this.isMyContactActive = true;
      }
    },
    type(word) {
      this.$refs.typingMusic.play();
      if (this.currentWord.length > 0) {
        this.displayText.push(this.currentWord.shift());
        // if done typing, then delete
      } else if (this.currentWord.length === 0 && this.displayText.length > 0) {
        this.content = "";
        this.$refs.typingMusic.pause();
        // if done typing & deleting
      }
      setTimeout(this.type, this.timeoutSpeed);
    },
    type2nd(word) {
      // if typing...
      this.$refs.typingMusic.play();
      if (this.currentWord2nd.length > 0) {
        this.displayText2nd.push(this.currentWord2nd.shift());
        // if done typing, then delete
      } else if (
        this.currentWord2nd.length === 0 &&
        this.displayText2nd.length > 0
      ) {
        this.content = "";
        this.$refs.typingMusic.pause();
        // if done typing & deleting
      }

      setTimeout(this.type2nd, this.timeoutSpeed);
    },
  },
};
</script>

<style>
.no-pull-to-refresh {
  overscroll-behavior: none;
}

html {
  overscroll-behavior: none;
}
</style>
