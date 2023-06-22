<template>
  <div
    class="relative min-h-screen max-h-screen grid grid-rows-1 place-items-stretch content-between overflow-hidden bg-agumon py-6 sm:py-12"
  >
    <!-- //layar -->

    <div class="">
      <div
        class="relative flex overflow-auto h-full z-0 bg-midnight px-6 pt-10 pb-8 shadow-xl ring-2 ring-darkGrey mx-4 sm:mx-8 rounded-md"
      >
        <div class="mx-auto">
          <div class="">
            <div
              class="font-cursive text-midnight relative text-center text-3xl bg-neonGreen px-6 pt-10 pb-8 shadow-sm sm:mx-auto rounded-lg sm:px-10"
            >
              Hello
            </div>
            <div class="">
              <div
                class="grow mt-4 font-cursive text-neonGreen relative text-left leading-relaxed text-2xl ring-2 ring-neonGreen bg-neonGreen2 px-6 pt-10 pb-8 shadow-sm sm:mx-auto rounded-lg sm:px-10"
              >
                <div class="mb-4">
                  <span>
                    {{ displayText.join("") }}
                  </span>
                </div>
                <div>
                  <span>
                    {{ displayText2nd.join("") }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="fixed top-12 left-0 right-0 max-h-full">
        <div v-for="n in 85" :key="n">
          <div
            class="opacity-10 bg-neonGreen mt-1 pt-1 shadow-xl sm:mx-8 sm:max-w-full sm:rounded-lg sm:px-10"
          ></div>
        </div>
      </div> -->
    </div>

    <!-- <div>
      <button @click="playMusic">Play Music</button>
      <audio ref="bgMusic" loop>
        <source src="./assets/backsound.mp3" type="audio/mpeg" />
      </audio>
    </div> -->

    <!-- button -->

    <div class="flex">
      <div
        class="lg:flex flex-auto mx-4 my-4 lg:text-4xl sm:mt-8 text-xl sm:text-2xl sm:mx-8"
      >
        <!-- ME BUTTON -->
        <button class="relative grow font-rubik" @click="() => me()">
          <!-- background -->
          <div
            v-if="isMeActive === false"
            class="absolute h-full inset-x-0 -bottom-6 bg-darkGrey opacity-40 rounded-sm"
          ></div>
          <div
            v-if="isMeActive === true"
            class="absolute h-full inset-x-0 -bottom-4 bg-darkGrey opacity-40 rounded-sm"
          ></div>
          <div
            class="absolute h-full inset-x-0 -bottom-4 bg-yellow2 border-4 border-yellow3 rounded-sm"
          ></div>
          <div
            class="absolute h-full inset-x-0 -bottom-4 bg-yellow2 border-4 border-yellow3 rounded-sm"
          ></div>
          <div
            class="absolute h-full inset-x-0 bg-yellow3 border-t-8 border-yellow1 rounded-sm"
          ></div>
          <!-- text -->
          <div
            @click="play"
            v-if="isMeActive === false"
            class="relative text-yellow2 bg-yellow1 py-2 sm:py-8 px-5 sm:px-10 border-4 border-yellow3 rounded-sm transition transform duration-200 active:translate-y-3 hover:text-white active:bg-yellow2"
          >
            <audio ref="typingMusic" loop>
              <source src="./assets/typingEffect.mp3" type="audio/mpeg" />
            </audio>
            <div class="">Me</div>
          </div>
          <div
            @click="play"
            v-if="isMeActive === true"
            class="relative text-white bg-yellow2 py-2 sm:py-8 px-5 sm:px-10 border-4 translate-y-4 border-yellow3 rounded-sm transition transform duration-350 active:translate-y-2 active:bg-yellow1"
          >
            <audio ref="typingMusic" loop>
              <source src="./assets/typingEffect.mp3" type="audio/mpeg" />
            </audio>
            <div class="">Me</div>
          </div>
        </button>
        <!-- mY WORK BUTTON -->
        <button class="relative grow font-rubik" @click="() => myWork()">
          <!-- background -->
          <div
            v-if="isMyWorkActive === false"
            class="absolute h-full inset-x-0 -bottom-6 bg-darkGrey opacity-40 rounded-sm transition transform duration-250 active:bottom-5"
          ></div>
          <div
            v-if="isMyWorkActive === true"
            class="absolute h-full inset-x-0 -bottom-4 bg-darkGrey opacity-40 rounded-sm transition transform duration-150 active:bottom-5"
          ></div>
          <div
            class="absolute h-full inset-x-0 -bottom-4 bg-yellow2 border-4 border-yellow3 rounded-sm"
          ></div>
          <div
            class="absolute h-full inset-x-0 bg-yellow3 border-t-8 border-yellow1 rounded-sm"
          ></div>
          <!-- text -->
          <div
            @click="play"
            v-if="isMyWorkActive === false"
            class="relative text-yellow2 bg-yellow1 border-4 py-2 sm:py-8 px-5 sm:px-10 border-yellow3 rounded-sm transition transform duration-200 active:translate-y-3 hover:text-white active:bg-yellow2"
          >
            <audio ref="typingMusic" loop>
              <source src="./assets/typingEffect.mp3" type="audio/mpeg" />
            </audio>
            <div>Work</div>
          </div>
          <div
            @click="play"
            v-if="isMyWorkActive === true"
            class="relative text-white bg-yellow2 py-2 sm:py-8 px-5 sm:px-10 border-4 translate-y-4 border-yellow3 rounded-sm transition transform duration-350 active:translate-y-2 active:bg-yellow1"
          >
            <audio ref="typingMusic" loop>
              <source src="./assets/typingEffect.mp3" type="audio/mpeg" />
            </audio>
            <div class="">Work</div>
          </div>
        </button>
        <!-- MY CONTACT -->
        <button
          class="mt-6 md:mt-0 relative grow font-rubik"
          @click="() => myContact()"
        >
          <!-- background -->
          <div
            v-if="isMyContactActive === false"
            class="absolute h-full inset-x-0 -bottom-6 bg-darkGrey opacity-40 rounded-sm transition transform duration-250 active:bottom-5"
          ></div>
          <div
            v-if="isMyContactActive === true"
            class="absolute h-full inset-x-0 -bottom-4 bg-darkGrey opacity-40 rounded-sm transition transform duration-150 active:bottom-5"
          ></div>
          <div
            class="absolute h-full inset-x-0 -bottom-4 bg-yellow2 border-4 border-yellow3 rounded-sm"
          ></div>
          <div
            class="absolute h-full inset-x-0 bg-yellow3 border-t-8 border-yellow1 rounded-sm"
          ></div>
          <!-- text -->
          <div
            @click="play"
            v-if="isMyContactActive === false"
            class="relative text-yellow2 bg-yellow1 border-4 py-2 sm:py-8 px-5 sm:px-10 border-yellow3 rounded-sm transition transform duration-200 active:translate-y-3 hover:text-white active:bg-yellow2"
          >
            <audio ref="typingMusic" loop>
              <source src="./assets/typingEffect.mp3" type="audio/mpeg" />
            </audio>
            <div>Contact</div>
          </div>
          <div
            @click="play"
            v-if="isMyContactActive === true"
            class="relative text-white bg-yellow2 py-2 sm:py-8 px-5 sm:px-10 border-4 translate-y-4 border-yellow3 rounded-sm transition transform duration-350 active:translate-y-2 active:bg-yellow1"
          >
            <audio ref="typingMusic" loop>
              <source src="./assets/typingEffect.mp3" type="audio/mpeg" />
            </audio>
            <div class="">Contact</div>
          </div>
        </button>
      </div>
      <!-- CV -->
      <div class="flex-none mx-4 my-4 lg:text-4xl sm:mt-8 text-2xl sm:mx-8">
        <button class="relative font-rubik">
          <!-- background -->
          <div
            class="absolute h-full inset-x-0 -bottom-6 bg-darkGrey opacity-40 rounded-full transition transform duration-250 active:bottom-5"
          ></div>
          <div
            class="absolute h-full inset-x-0 -bottom-4 bg-darkGrey opacity-40 rounded-full transition transform duration-150 active:bottom-5"
          ></div>
          <div
            class="absolute h-full inset-x-0 -bottom-4 bg-manggo2 border-4 border-manggo3 rounded-full"
          ></div>
          <!-- text -->
          <div
            @click="play"
            class="relative text-manggo3 bg-manggo border-4 border-manggo3 rounded-full transition transform duration-200 active:translate-y-3 hover:text-white active:bg-manggo3"
          >
            <audio ref="typingMusic" loop>
              <source src="./assets/typingEffect.mp3" type="audio/mpeg" />
            </audio>
            <div class="py-4 px-6 sm:py-8 sm:px-10">CV</div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useSound } from "@vueuse/sound";
import buttonSfx from "./assets/buttonEffect3.mp3";
import backsoundSfx from "./assets/backsound.mp3";
import typingSfx from "./assets/typingEffect.mp3";
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
      content: ["Welcome to my website "],
      content2nd: ["Welcome to my website 2nd"],
      isMeActive: false,
      isMyWorkActive: false,
      isMyContactActive: false,

      displayText: [],
      currentWord: "",
      wordIdx: 0,

      displayText2nd: [],
      currentWord2nd: "",
      wordIdx2nd: 0,

      file: "./assets/buttonEffect3.mp3",
    };
  },
  methods: {
    playMusic() {
      this.$refs.bgMusic.play();
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
      this.content = [
        "My name is Masegie Handoyo Putra, but u can call me egik",
      ];
      this.content2nd = [
        "My hours are mostly spent as a full-stack product designer at Gotrade↗, but in my spare time I watch lots of Youtube videos and Netflix, listen to RnBs, and last but not least, sleep. My hours are mostly spent as a full-stack product designer at Gotrade↗, but in my spare time I watch lots of Youtube videos and Netflix, listen to RnBs, and last but not least, sleep.",
      ];

      this.start();
      this.start2nd();

      if (this.isMeActive == true) {
        this.isMeActive = false;
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
      this.content = ["Ini halaman My Work"];
      this.content2nd = ["TBA TBA TBA TBA TBA TBA TBA TBA TBA TBA TBA"];

      this.start();
      this.start2nd();

      if (this.isMyWorkActive == true) {
        this.isMyWorkActive = false;
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
      this.content = ["Ini halaman My Contact"];
      this.content2nd = ["Email : masegi handoyo @gmail.com"];

      this.start();
      this.start2nd();

      if (this.isMyContactActive == true) {
        this.isMyWorkActive = false;
        this.isMeActive = false;
        this.isMyContactActive = false;
      } else {
        this.isMyWorkActive = false;
        this.isMeActive = false;
        this.isMyContactActive = true;
      }
    },
    type(word) {
      // if typing...
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
