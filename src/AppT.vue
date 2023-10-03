<template>
  <div class="relative bg-red-200 sm:bg-green-200 md:bg-blue-200">
  <div>
    <div>dummy</div>
    <div>content</div>
  </div>
  <div class="absolute text-3xl md:static top-0 right-0 z-10">this will be on top right corner if not md (blue)</div>
</div>
</template>

<script>
import { useSound } from "@vueuse/sound";
import buttonSfx from "./assets/buttonEffect3.mp3";
import backsoundSfx from "./assets/backsound.mp3";
import typingSfx from "./assets/typingEffect.mp3";
import { FaceSmileIcon } from '@heroicons/vue/24/solid';
import { BeakerIcon } from '@heroicons/vue/24/solid'
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
    downloadFile() {
      // Assuming 'file' is the locally stored file path
      const pdfPath = './assets/cv_Masegie_Sep2023.pdf';

      // Create a link element
      const link = document.createElement('a');

      // Set the download attribute with the desired file name
      link.download = 'cv_Masegie_Sep2023.pdf';

      // Create a Blob from the file path
      const blob = new Blob([pdfPath], { type: 'application/pdf' });

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
      this.content = [
        "Masegie Handoyo",
      ];
      this.content2nd = [
        "A Developer and Designer based in Jakarta, Indonesia"
      ];
      this.content3rd = [
        "A Developer and Designer based in Jakarta, Indonesia"
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
      this.content = ["My Work"];
      this.content2nd = ["Wait, i still working on it!"];

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
      this.content = ["Contact"];
      this.content2nd = ["Email : masegihandoyo@gmail.com"];

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
