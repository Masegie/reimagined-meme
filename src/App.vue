<template>
  <div
    class="relative min-h-screen max-h-screen grid grid-rows-1 place-items-stretch content-between overflow-hidden bg-agumon py-6 sm:py-12 "
  >
    <!-- //layar -->
    
    <div class="">
      <div
        class="relative flex overflow-auto  h-full z-0 bg-midnight px-6 pt-10 pb-8 shadow-xl ring-2 ring-darkGrey sm:mx-8 sm:rounded-md sm:px-10"
      >

        <div class="mx-auto">
          <div class="">
            <div
              class="font-cursive text-midnight relative text-center text-4xl bg-neonGreen px-6 pt-10 pb-8 shadow-sm sm:mx-auto sm:rounded-lg sm:px-10"
            >
              Hello
            </div>
            <div class="">
              <div
                class="grow mr-4 mt-4 font-cursive text-neonGreen relative text-center text-4xl ring-2 ring-neonGreen bg-neonGreen2 px-6 pt-10 pb-8 shadow-sm sm:mx-auto sm:rounded-lg sm:px-10"
              >
              {{ content }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fixed top-12 left-0 right-0 max-h-full">
        <div v-for="n in 85" :key="n">
          <div
            class="opacity-10 bg-neonGreen mt-1 pt-1 shadow-xl sm:mx-8 sm:max-w-full sm:rounded-lg sm:px-10"
          ></div>
        </div>
      </div>
    </div>

    <!-- button -->
    <div class=" text-center items-center justify-center text-4xl mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:ml-8 sm:mr-8 lg:h-36 sm:h-24 ">

      <button
        class="relative grow font-rubik "
        @click="() => me()"
      >
        <!-- background -->
        <div class="absolute h-full inset-x-0 -bottom-4  bg-yellow2 border-4 border-darkGrey rounded-sm "></div>
        <div class="absolute h-full inset-x-0  bg-yellow3 border-4 border-darkGrey rounded-sm "></div>
        <!-- text -->
        <div v-if="isMeActive === false" class="relative text-yellow2 bg-yellow1 py-8 px-10 border-4 border-darkGrey rounded-sm transition transform duration-200 active:translate-y-3 hover:text-white active:bg-yellow2"> 
          <div class="">
            Me
          </div>
        </div> 
        <div v-if="isMeActive === true" class="relative text-white bg-yellow2 py-8 px-10 border-4 translate-y-4 border-darkGrey rounded-sm transition transform duration-350 active:translate-y-2 active:bg-yellow1"> 
          <div class="">
            Me
          </div>
        </div> 
      </button>

      <button
        class="relative grow font-rubik "
        @click="() => myWork()"
      >
        <!-- background -->
        <div class="absolute h-full inset-x-0 -bottom-4  bg-yellow2 border-4 border-darkGrey rounded-sm "></div>
        <div class="absolute h-full inset-x-0  bg-yellow3 border-4 border-darkGrey rounded-sm "></div>
        <!-- text -->
        <div v-if="isMyWorkActive === false" class="relative text-yellow2 bg-yellow1 py-8 px-10 border-4 border-darkGrey rounded-sm transition transform duration-200 active:translate-y-3 hover:text-white active:bg-yellow2"> 
          <div class="">
            My Work
          </div>
        </div> 
        <div v-if="isMyWorkActive === true" class="relative text-white bg-yellow2 py-8 px-10 border-4 translate-y-4 border-darkGrey rounded-sm transition transform duration-350 active:translate-y-2 active:bg-yellow1"> 
          <div class="">
            My Work
          </div>
        </div> 
      </button>
      
      <button
        class="relative grow font-rubik "
        
      >
        <!-- background -->
        <div class="absolute h-full inset-x-0 -bottom-4  bg-yellow2 border-4 border-darkGrey rounded-sm "></div>
        <div class="absolute h-full inset-x-0  bg-yellow3 border-4 border-darkGrey rounded-sm "></div>
        <!-- text -->
        <div class="relative text-yellow2 bg-yellow1 py-8 px-10 border-4 border-darkGrey rounded-sm transition transform duration-150 hover:translate-y-4 hover:text-white hover:bg-yellow2"> 
        <div class="">
          Contact

        </div>
        </div> 
      </button>
      <div
        class="flex-none flex  text-manggo2 font-rubik bg-manggo shadow-xl md:mr-8 ring-4 ring-darkGrey sm:mx-4 lg:mx-8 sm:max-w-full rounded-full"
      >
      <div class="m-auto">s
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 1,
      content:"Ini halaman pertama",
      isMeActive:false,
      isMyWorkActive:false
      
    };
  },
  methods: {
    me() {
      const delay = ms => new Promise(res => setTimeout(res, ms));

      this.content="Ini halaman Me"
      
      if (this.isMeActive==true) {
        this.isMeActive=false
        this.isMyWorkActive=false
      }else{
        this.isMeActive=true
        this.isMyWorkActive=false
      }
    },
    myWork() {
      this.content="Ini halaman My Work"
      if (this.isMyWorkActive==true) {
        this.isMyWorkActive=false
        this.isMeActive=false
      }else{
        this.isMyWorkActive=true
        this.isMeActive=false
      }
    }
  }
};
</script>
