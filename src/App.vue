<template>
  <div
    class="relative flex max-h-screen flex-col justify-center overflow-hidden bg-white py-6 sm:py-12"
  >
    <!-- //layar -->
    <div class="justify-center">
      <div
        class="relative z-0 bg-midnight px-6 pt-10 pb-8 shadow-xl ring-2 ring-darkGrey sm:mx-8 sm:max-w-full sm:rounded-lg sm:px-10"
      >
        <div class="mx-auto">
          <div class="">
            <div
              class="font-cursive text-midnight relative text-center text-4xl bg-neonGreen px-6 pt-10 pb-8 shadow-sm sm:mx-auto sm:rounded-lg sm:px-10"
            >
              Hello
            </div>
            <div class="flex">
              <div
                class="grow mr-4 mt-4 font-cursive text-neonGreen relative text-center text-4xl ring-2 ring-neonGreen bg-neonGreen2 px-6 pt-10 pb-8 shadow-sm sm:mx-auto sm:rounded-lg sm:px-10"
              >
                content content content contentcontentcontentcontent content
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fixed top-12 left-0 right-0">
        <div v-for="n in 49" :key="n">
          <div
            class="opacity-20 bg-neonGreen mt-1 pt-1 shadow-xl ring-2 ring-darkGrey sm:mx-8 sm:max-w-full sm:rounded-lg sm:px-10"
          ></div>
        </div>
      </div>
    </div>

    <!-- button -->
    <div class="text-center text-4xl flex items-stretch mt-8">
      <div
        class="grow font-rubik text-yellow2 bg-yellow1 px-6 py-12 shadow-xl ring-4 ring-darkGrey sm:mx-8 sm:max-w-full sm:rounded-sm sm:px-10"
      >
        btn {{ n }}
      </div>
      <div
        class="grow font-rubik text-yellow2 bg-yellow1 px-6 py-12 shadow-xl ring-4 ring-darkGrey sm:mx-8 sm:max-w-full sm:rounded-sm sm:px-10"
      >
        btn 2
      </div>
      <div
        class="grow font-rubik text-yellow2 bg-yellow1 px-6 py-12 shadow-xl ring-4 ring-darkGrey sm:mx-8 sm:max-w-full sm:rounded-sm sm:px-10"
      >
        btn 3
      </div>
      <div
        class="flex-none text-manggo2 font-rubik w-32 h-32 bg-manggo px-6 py-12 shadow-xl ring-4 ring-darkGrey sm:mx-8 sm:max-w-full sm:rounded-full sm:px-10"
      >
        b
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
