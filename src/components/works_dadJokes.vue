<template>
  <div
    class="relative min-h-screen max-h-screen flex flex-col lg:flex-row overflow-hidden bg-darkGrey sm:pt-8 lg:py-8 sm:pb-2"
  >
    <!-- Screen -->
    <div class="flex flex-col flex-1 lg:basis-9/12">
      <div
        class="drop-shadow-button shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.25),inset_2px_2px_9px_rgba(255,255,255,0.05)] bg-black0 ring-darkGrey mx-0 sm:mx-8 rounded-md h-16"
      >
        <div
          class="mx-5 py-6 sm:mx-10 relative text-xs text-blueMarine grid grid-cols-2 sm:flex justify-between p-2 gap-2"
        >
          <div class="col-span-1 flex">
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 mr-2"
              @click="handleClickHome"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            UI/UX Designer
          </div>
          <div class="col-span-1 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
            Mar 2024
          </div>
        </div>
      </div>
      <!-- Main Screen -->

      <div
        class="flex-1 shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.25),inset_2px_2px_9px_rgba(255,255,255,0.05)] relative flex overflow-auto bg-black px-6 xl:pt-8 pb-8 ring-2 ring-darkGrey mx-0 sm:mx-8 rounded-md"
      >
        <div class="mx-auto">
          <div class="absolute inset-x-0">
            <div
              class="grow text-white text-left tracking-wide lg:relative leading-relaxed text-xl sm:text-2xl lg:text-4xl px-6 pb-8 shadow-sm rounded-lg sm:px-10"
            >
              <br />
              <div class="text-left md:px-48">
                <div class="relative flex justify-center hidden">
                  <img
                    class="object-contain h-64 w-128"
                    src="/images/Home_Page.png"
                  />
                  <img
                    class="object-contain ml-4 h-64 w-128"
                    src="/images/Read_Book_Screen.png"
                  />
                </div>
                <div class="relative flex justify-left text-5xl">
                  <span class="mt-8">Dad Jokes Loading </span>
                </div>

                <div class="relative flex justify-left text-lg lg:text-2xl">
                  <span class="mt-8"> Overview </span>
                </div>
                <div
                  class="relative flex justify-left text-sm lg:text-lg font-thin"
                >
                  <span class="mt-4">
                    Lately, our users have been complaining about our website
                    slowing down compared to when it first launched. We have
                    over 10 internal sites used daily across all Indomaret and
                    Indogrosir branches in Indonesia.
                  </span>
                </div>
                <div class="grid grid-cols-3 gap-8 mt-8">
                  <div class="lg:col-span-3 col-span-3 grid grid-cols-1">
                    <img src="/images/chatSlow.png" class="" />
                  </div>
                </div>
                <div
                  class="relative flex justify-left text-sm text-grey10 italic font-thin lg:text-sm"
                >
                  <span class="mt-2">
                    *Certain work details are obscured due to company policy.
                  </span>
                </div>
                <div class="relative flex justify-left text-sm lg:text-2xl">
                  <span class="mt-8"> Obstacle </span>
                </div>
                <div
                  class="relative flex justify-left text-sm font-thin lg:text-lg"
                >
                  <span class="mt-4">
                    So, initially we thought that simply tweaking a few queries
                    and logic in the code would do the trick.
                  </span>
                </div>
                <div
                  class="relative flex justify-left text-sm font-thin lg:text-lg"
                >
                  <span class="mt-2">
                    We found some issues causing the slow data processing.
                  </span>
                </div>
                <div
                  class="relative flex justify-left text-sm font-thin lg:text-lg"
                >
                  <span class="mt-1">
                    - Multiple websites share a single server
                  </span>
                </div>

                <div
                  class="relative flex justify-left text-sm font-thin lg:text-lg"
                >
                  <span class="mt-1">
                    - Each site has over a million data entries that can't be
                    deleted
                  </span>
                </div>
                <div
                  class="relative flex justify-left text-sm font-thin lg:text-lg"
                >
                  <span class="mt-1">
                    - When the server is full, it can't be upgraded
                  </span>
                </div>
                <div
                  class="relative flex justify-left text-sm font-thin lg:text-lg"
                >
                  <span class="mt-1">
                    - Many branches are still using old Windows XP computers
                  </span>
                </div>
                <div class="relative flex justify-left text-sm lg:text-2xl">
                  <span class="mt-8"> Design Exploration </span>
                </div>
                <div
                  class="relative flex justify-left text-sm font-thin lg:text-lg"
                >
                  <span class="mt-4">
                    We think we've made it clear what the issue is, and we're
                    eager to solve it right away. We've looked into different
                    ways to keep our users at ease during loading times. Our
                    plan is to entertain them with fun facts or jokes to make
                    the wait more enjoyable.
                  </span>
                </div>
                <div class="grid grid-cols-3 gap-8 mt-8">
                  <div class="lg:col-span-3 col-span-3 grid grid-cols-1">
                    <img src="/images/loadingAnimation.gif" class="" />
                  </div>
                </div>
                <div
                  class="relative flex justify-left text-sm font-thin italic lg:text-md"
                >
                  <span class="mt-2"
                    >" If we can't make it load faster, let's make waiting more
                    comfy for users "
                  </span>
                </div>
                <div
                  class="relative flex justify-left text-sm font-thin lg:text-lg"
                >
                  <span class="mt-8"
                    >After running our tests, we're feeling quite positive about
                    how this solution can improve user experience. We
                    brainstormed various ideas, not limited to just dad jokes,
                    but also including some interesting fun facts to spice
                    things up a bit.
                  </span>
                </div>
                <div
                  class="relative flex justify-left text-sm font-thin lg:text-lg"
                >
                  <span class="mt-2"
                    >And we ended up creating hundreds dad jokes and fun facts.
                  </span>
                </div>
                <div class="relative flex justify-left text-sm lg:text-2xl">
                  <span class="mt-8"> Result </span>
                </div>
                <div
                  class="relative flex justify-left text-sm font-thin lg:text-lg"
                >
                  <span class="mt-4"
                    >After running our tests, we're feeling quite positive about
                    how this solution can improve user experience. We
                    brainstormed various ideas, not limited to just dad jokes,
                    but also including some interesting fun facts to spice
                    things up a bit.
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
      content2nd: ["A Developer and Designer based in Jakarta, Indonesia"],
      isMeActive: true,
      isMyWorkActive: false,
      isMyContactActive: false,
      //porto
      firstPorto: false,

      displayText: [],
      currentWord: "",
      wordIdx: 0,

      displayText2nd: ["A Developer and Designer based in Jakarta, Indonesia"],
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
        "A Developer and Designer based in Jakarta, Indonesia",
      ];
      this.content3rd = [
        "A Developer and Designer based in Jakarta, Indonesia",
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
