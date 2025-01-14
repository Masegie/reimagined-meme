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
              class="grow text-black text-left tracking-wide lg:relative leading-relaxed text-xl sm:text-2xl lg:text-4xl px-6 pb-8 shadow-sm rounded-lg sm:px-10"
            >
              <br />
              <div class="text-left md:px-48">
                <div
                  class="relative py-8 flex justify-center ring ring-1 ring-black rounded bg-gradient-to-r from-white via-white to-yellow0"
                >
                  <img
                    class="object-contain h-80 w-128"
                    src="/images/loading.png"
                  />
                </div>
                <div class="relative flex justify-left text-5xl">
                  <span class="mt-8">Dad Jokes Loading </span>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <div class="relative flex justify-left text-3xl">
                      <span class="mt-12">Role</span>
                    </div>
                    <div class="relative flex justify-left text-xl">
                      <span class="mt-8">UI & UX Designer </span>
                    </div>
                  </div>
                  <div>
                    <div class="relative flex justify-left text-3xl">
                      <span class="mt-12">Timeline</span>
                    </div>
                    <div class="relative flex justify-left text-xl">
                      <span class="mt-8">Q1 2024 </span>
                    </div>
                  </div>
                  <div>
                    <div class="relative flex justify-left text-3xl">
                      <span class="mt-12">Product and platform</span>
                    </div>
                    <div class="relative flex justify-left text-xl">
                      <span class="mt-8">Its our Internal websites </span>
                    </div>
                  </div>
                  <div>
                    <div class="relative flex justify-left text-3xl">
                      <span class="mt-12">Result</span>
                    </div>
                    <div class="relative flex justify-left text-xl">
                      <span class="mt-8"
                        >Feeling good about how this solution can boost user
                        experience. We came up with lots of ideas, not just dad
                        jokes, but also fun facts to add some excitement.
                      </span>
                    </div>
                  </div>
                </div>
                <div class="relative flex mt-24 mb-8 items-center">
                  <span class="flex-shrink mr-4 text-black">Overview </span>
                  <div class="flex-grow border-t border-orangeMarine"></div>
                </div>
                <div
                  class="relative flex justify-left text-sm lg:text-xl font-thin"
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
                <div class="relative flex mt-24 mb-8 items-center">
                  <span class="flex-shrink mr-4 text-black">Obstacles</span>
                  <div class="flex-grow border-t border-orangeMarine"></div>
                </div>
                <div
                  class="relative flex justify-left text-sm font-thin lg:text-xl"
                >
                  <span class="mt-4">
                    So, initially we thought that simply tweaking a few queries
                    and logic in the code would do the trick.
                  </span>
                </div>
                <div
                  class="relative flex justify-left text-sm font-thin lg:text-xl"
                >
                  <span class="mt-2">
                    We found some issues causing the slow data processing.
                  </span>
                </div>
                <div
                  class="relative flex justify-left text-sm font-thin lg:text-xl"
                >
                  <span class="mt-1">
                    - Multiple websites share a single server
                  </span>
                </div>

                <div
                  class="relative flex justify-left text-sm font-thin lg:text-xl"
                >
                  <span class="mt-1">
                    - Each site has over a million data entries that can't be
                    deleted
                  </span>
                </div>
                <div
                  class="relative flex justify-left text-sm font-thin lg:text-xl"
                >
                  <span class="mt-1">
                    - When the server is full, it can't be upgraded
                  </span>
                </div>
                <div
                  class="relative flex justify-left text-sm font-thin lg:text-xl"
                >
                  <span class="mt-1">
                    - Many branches are still using old Windows XP computers
                  </span>
                </div>
                <div class="relative flex mt-24 mb-8 items-center">
                  <span class="flex-shrink mr-4 text-black"
                    >Design Exploration</span
                  >
                  <div class="flex-grow border-t border-orangeMarine"></div>
                </div>

                <div
                  class="relative flex justify-left text-sm font-thin lg:text-xl"
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
                  class="relative flex justify-left text-sm font-thin lg:text-xl"
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
                  class="relative flex justify-left text-sm font-thin lg:text-xl"
                >
                  <span class="mt-2"
                    >And we ended up creating hundreds dad jokes and fun facts.
                  </span>
                </div>
                <div class="relative flex mt-24 mb-8 items-center">
                  <span class="flex-shrink mr-4 text-black"
                    >Lesson Learned</span
                  >
                  <div class="flex-grow border-t border-orangeMarine"></div>
                </div>
                <div
                  class="relative flex justify-left text-sm font-thin lg:text-xl"
                >
                  <span class="mt-4"
                    >By providing more ways for users to engage, we can really
                    boost how comfortable and relaxed they feel. This boost adds
                    to the whole user experience, making the interaction
                    environment more enjoyable.
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
