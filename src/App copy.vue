<template>
  <div
    class="relative min-h-screen max-h-screen grid grid-rows-1 place-items-stretch content-between overflow-hidden bg-white py-6 sm:py-12 "
  >
    <!-- //layar -->
    <div class="justify-center ">
      <div
        class="relative  overflow-hidden h-full z-0 bg-midnight px-6 pt-10 pb-8 shadow-xl ring-2 ring-darkGrey sm:mx-8 sm:rounded-lg sm:px-10"
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
                class="grow mr-4 mt-4 font-cursive text-neonGreen relative text-center text-4xl ring-2 ring-neonGreen  bg-neonGreen2 px-6 pt-10 pb-8 shadow-sm sm:mx-auto sm:rounded-lg sm:px-10"
              >
              content content content content content content content content contentcontent content content content content content content content content
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
    <div class=" text-center text-4xl mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:ml-8 sm:mr-8 lg:h-36 sm:h-24 sm:h-">
      <button
        class="grow font-rubik sm:h-24 lg:h-36 text-yellow2 bg-yellow1 flex shadow-xl ring-4 ring-darkGrey  sm:mx-4 lg:mx-8 md:max-w-full sm:rounded-sm "
      >
      <div class="m-auto"> 
        b
      </div>
      </button>
      <div
        class="grow font-rubik text-yellow2 bg-yellow1 flex shadow-xl ring-4 ring-darkGrey sm:mx-4 lg:mx-8 sm:max-w-full sm:rounded-sm "
      >
      <div class="m-auto">s
      </div>
      </div>
      <div
        class="grow font-rubik text-yellow2 bg-yellow1 flex shadow-xl ring-4 ring-darkGrey sm:mx-4 lg:mx-8 sm:max-w-full sm:rounded-sm "
      >
      <div class="m-auto">s
      </div>
      </div>
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
    };
  },
};
</script>
