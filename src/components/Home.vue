<template>
  <div
    class="relative min-h-screen max-h-screen flex flex-col lg:flex-row overflow-hidden bg-bone sm:pt-8 lg:py-8 sm:pb-2"
  >
    <!-- Screen -->
    <div class="flex flex-col flex-1 lg:basis-9/12">
      <!-- Teks Berjalan -->
      <!-- <div
        class="z-40 drop-shadow-button text-grey20 shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.25),inset_2px_2px_9px_rgba(255,255,255,0.05)] bg-black0 mx-0 sm:mx-8 rounded-md h-16"
      >
        <div :class="backgroundClass">
          <div
            class="relative text-2xl flex items-center justify-center overflow-x-hidden"
          >
            <div
              class="py-4 animate-marquee sm:animate-none items-center whitespace-nowrap"
            >
              <span class="mx-4">Seeking cool opportunities, Text Me!</span>
            </div>

            <div
              class="absolute top-0 py-4 animate-marquee2 sm:animate-none whitespace-nowrap"
            >
              <span class="mx-4">Seeking cool opportunities, Text Me!</span>
            </div>
          </div>
        </div>
      </div> -->

      <!-- Main Screen -->

      <div
        class="ring-2 ring-black flex-1 shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.25),inset_2px_2px_9px_rgba(255,255,255,0.05)] relative flex overflow-auto bg-gradient-to-br from-white to-white10 px-6 xl:pt-8 pb-8 ring-2 ring-darkGrey mx-0 sm:mx-8 rounded-md"
      >
        <div class="mx-auto">
          <div class="absolute inset-x-0">
            <div
              class="drop-shadow-[0_0px_5px_rgba(255,92,0,1)] font-cursive text-orangeMarine text-center text-4xl sm:text-5xl sm:px-10 lg-text7xl px-6 pt-10 shadow-sm rounded-lg"
            >
              {{ displayText.join("") }}
            </div>
            <div
              class="grow mt-4 font-poppins text-black text-center lg:relative leading-relaxed text-xl sm:text-2xl lg:text-4xl px-6 pt-10 pb-8 shadow-sm rounded-lg sm:px-10"
            >
              <div v-if="isMyWorkActive === false" class="mb-4">
                <span>
                  {{ displayText2nd.join("") }}
                </span>
              </div>
              <br />
              <div
                v-if="isMeActive === true"
                class="text-left"
                data-aos="fade-right"
              >
                <div class="relative flex py-5 items-center">
                  <div class="flex-grow border-t border-orangeMarine"></div>
                  <span class="flex-shrink mx-4 text-black">Experiences</span>
                </div>
                <div class="text-2xl sm:text-4xl font-black pt-8">
                  Indomaret Group
                </div>
                <div
                  class="text-sm sm:text-2xl relative flex pt-8 items-center"
                >
                  <div class="flex-grow">Lead FE Developer</div>
                  <div class="flex-grow text-right">2022-Present</div>
                </div>
                <div
                  class="text-sm sm:text-2xl relative flex pt-4 items-center"
                >
                  <div class="flex-grow">[Seasonal] UI/UX Designer</div>
                  <div class="flex-grow text-right">2021-Present</div>
                </div>
                <div
                  class="text-sm sm:text-2xl text-grey5 relative flex pt-4 items-center"
                >
                  <div class="flex-grow">Full Stack Developer</div>
                  <div class="flex-grow text-right">2021-2022</div>
                </div>
                <div
                  class="text-sm sm:text-2xl text-grey5 relative flex pt-4 items-center"
                >
                  <div class="flex-grow">FE Developer</div>
                  <div class="flex-grow text-right">2020-2021</div>
                </div>
                <div class="relative flex py-5 items-center">
                  <div class="flex-grow border-t border-orangeMarine"></div>
                  <span class="flex-shrink mx-4 text-black">Educations</span>
                </div>
                <div class="text-2xl sm:text-4xl font-black pt-8">
                  Universitas Atma Jaya Yogyakarta
                </div>
                <div
                  class="text-sm sm:text-2xl relative flex pt-8 items-center"
                >
                  <div class="flex-grow">Informatics Engineering</div>
                  <div class="flex-grow text-right">2015-2019</div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
              <div v-if="isMyContactActive === true" class="text-left">
                <div class="body">
                  <div class="line">
                    <div
                      @mouseenter="manageMouseEnter"
                      @mousemove="manageMouseMove"
                      @mouseleave="manageMouseLeave"
                      class="box"
                    >
                      _
                    </div>
                    <svg>
                      <path ref="path">a</path>
                    </svg>
                  </div>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
              <div v-if="isMyWorkActive === true">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <!-- 0 -->
                  <div
                    @click="handleClickVariable"
                    class="p-4 cursor-pointer border border-grey20 hover:border-orangeMarine rounded-xl relative item-center hover:bg-white hover:drop-shadow-[0_0px_8px_rgba(255,92,0,1)]"
                  >
                    <div
                      class="text-left text-grey10 flex justify-between text-xs py-2"
                    >
                      <div>MOBILE APP . UI DESIGNER</div>
                      <div>2023</div>
                    </div>
                    <div class="text-grey10 text-left">
                      <div class="text-2xl lg:text-2xl text-black">
                        Prototyping results are like coding with NEW Figma
                        Variables!
                      </div>
                    </div>
                    <div class="grid grid-cols-3 gap-8 mt-4">
                      <div class="lg:col-span-3 col-span-3 grid grid-cols-1">
                        <img src="/images/thumbnailVar.png" class="" />
                      </div>
                    </div>
                    <div class="grid grid-cols-5 gap-8 mt-4">
                      <div
                        class="text-xl text-grey10 text-left lg:col-span-4 col-span-4 grid grid-cols-1"
                      >
                        Exploring Figma Variable
                      </div>
                      <div
                        class="lg:col-span-1 col-span-1 grid grid-cols-1 content-end"
                      >
                        <div class="lg:justify-end">
                          <div class="flex text-sm justify-end rounded-lg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-4 h-4 ml-2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 1 -->
                  <div
                    @click="handleClickLentera"
                    class="p-4 cursor-pointer border border-grey20 hover:border-orangeMarine rounded-xl relative item-center hover:bg-white hover:drop-shadow-[0_0px_8px_rgba(255,92,0,1)]"
                  >
                    <div
                      class="text-left text-grey10 flex justify-between text-xs py-2"
                    >
                      <div>MOBILE APP . UI DESIGNER</div>
                      <div>2022</div>
                    </div>
                    <div class="text-grey10 text-left">
                      <div class="text-2xl lg:text-2xl text-black">
                        My client disappeared after approving my design on my
                        first project.
                      </div>
                    </div>
                    <div class="grid grid-cols-3 gap-8 mt-4">
                      <div class="lg:col-span-3 col-span-3 grid grid-cols-1">
                        <img src="/images/moon.png" class="" />
                      </div>
                    </div>
                    <div class="grid grid-cols-5 gap-8 mt-4">
                      <div
                        class="text-xl text-grey10 text-left lg:col-span-4 col-span-4 grid grid-cols-1"
                      >
                        Bring the lantern to Lentera
                      </div>
                      <div
                        class="lg:col-span-1 col-span-1 grid grid-cols-1 content-end"
                      >
                        <div class="lg:justify-end">
                          <div class="flex text-sm justify-end rounded-lg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-4 h-4 ml-2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 2 -->
                  <div
                    @click="handleClickDadJokesLoading"
                    class="p-4 cursor-pointer border border-grey20 hover:border-orangeMarine rounded-xl relative item-center hover:bg-white hover:drop-shadow-[0_0px_8px_rgba(255,92,0,1)]"
                  >
                    <div
                      class="text-left text-grey10 flex justify-between text-xs py-2"
                    >
                      <div>WEB APP . UI/UX DESIGNER</div>
                      <div>2024</div>
                    </div>
                    <div class="text-grey10 text-left">
                      <div class="text-2xl lg:text-2xl text-black">
                        Our users are frustrated with the slow loading times,
                        but we're stuck with outdated tech.
                      </div>
                    </div>
                    <div class="grid grid-cols-3 gap-8 mt-4">
                      <div class="lg:col-span-3 col-span-3 grid grid-cols-1">
                        <img src="/images/loading.png" class="" />
                      </div>
                    </div>
                    <div class="grid grid-cols-5 gap-8 mt-4">
                      <div
                        class="text-xl text-grey10 text-left lg:col-span-4 col-span-4 grid grid-cols-1"
                      >
                        Dad jokes loading
                      </div>
                      <div
                        class="lg:col-span-1 col-span-1 grid grid-cols-1 content-end"
                      >
                        <div class="lg:justify-end">
                          <div class="flex text-sm justify-end rounded-lg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-4 h-4 ml-2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 3 -->
                  <div
                    @click="handleClickLentera"
                    class="p-4 cursor-pointer border border-grey20 hover:border-orangeMarine rounded-xl relative item-center hover:bg-white hover:drop-shadow-[0_0px_8px_rgba(255,92,0,1)]"
                  >
                    <div
                      class="text-left text-grey10 flex justify-between text-xs py-2"
                    >
                      <div>MOBILE APP . UI DESIGNER</div>
                      <div>2021</div>
                    </div>
                    <div class="text-grey10 text-left">
                      <div class="text-2xl lg:text-2xl text-black">
                        My First MVP Porject.
                      </div>
                    </div>
                    <div class="grid grid-cols-3 gap-8 mt-4">
                      <div
                        class="lg:col-span-3 col-span-3 grid grid-cols-3 gap-4"
                      >
                        <img
                          src="/images/Home_Page.png"
                          class="object-contain h-80 w-192"
                        /><img
                          src="/images/Book_Detail.png"
                          class="object-contain h-80 w-192"
                        /><img
                          src="/images/Change Membership.png"
                          class="object-contain h-80 w-192"
                        />
                      </div>
                    </div>
                    <div class="grid grid-cols-5 gap-8 mt-4">
                      <div
                        class="text-xl text-grey10 text-left lg:col-span-4 col-span-4 grid grid-cols-1"
                      >
                        The Books APP "Lentera"
                      </div>
                      <div
                        class="lg:col-span-1 col-span-1 grid grid-cols-1 content-end"
                      >
                        <div class="lg:justify-end">
                          <div class="flex text-sm justify-end rounded-lg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-4 h-4 ml-2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 4 -->
                  <!-- <div
                    @click="handleClickLentera"
                    class="p-4 border border-grey20 rounded-xl relative item-center hover:bg-white"
                  >
                    <div
                      class="text-orangeMarine text-left flex justify-between text-xs font-cursive py-2"
                    >
                      <div>WEB APP . UI DESIGNER</div>
                      <div>2022</div>
                    </div>
                    <div class="text-left">
                      <div text-md>CDC</div>
                      <div class="text-lg text-grey20">
                        Journey to design the “LENTERA” book app MVP
                      </div>
                    </div>
                    <div class="grid grid-cols-3 gap-8 mt-4 h-max justify-end">
                      <div class="lg:col-span-2 col-span-3 grid grid-cols-1">
                        <img src="/images/Lentera_Thumbnail.png" class="" />
                      </div>
                      <div
                        class="lg:col-span-1 col-span-3 grid grid-cols-1 content-end"
                      >
                        <div
                          class="text-xs text-grey20 text-left lg:justify-end"
                        >
                          I'm sorry this project is confidential
                          <div
                            class="mt-2 flex text-sm text-black justify-center border border-grey70 hover:border-orangeMarine p-4 rounded-lg"
                          >
                            Email Me
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-4 h-4 ml-2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> -->
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Button -->
    <div
      class="fixed w-full sm:static bottom-0 border-t-2 sm:border-t-0 left-0 flex bg-bone pr-4 lg:basis-1/12 justify-center"
    >
      <div
        class="ml-8 lg:ml-4 m-4 my-8 lg:my-0 lg:flex-col flex justify-items-center w-full lg:items-center justify-start text-sm sm:text-lg"
      >
        <!-- ME BUTTON -->
        <button
          class="text-base hover:text-grey5 text-grey20 flex-col sm:grid justify-items-center font-poppins"
          @click="() => me()"
        >
          <!-- text -->
          <div
            @click="play"
            v-if="isMeActive === false"
            class="text-darkGrey justify-items-center rounded bg-bone p-3 w-20 h-20 border-2 border-grey50 drop-shadow-button shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.25),inset_2px_2px_9px_rgba(255,255,255,0.05)] hover:text-grey5 hover:bg-grey70"
          >
            <svg
              width="50"
              height="13"
              viewBox="0 0 43 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dii_155_1058)">
                <rect x="5" y="5" width="33" height="3" rx="1" fill="#646464" />
              </g>
              <defs>
                <filter
                  id="filter0_dii_155_1058"
                  x="0.7"
                  y="0.7"
                  width="41.6"
                  height="11.6"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_155_1058"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="1 1 1 0 1 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_155_1058"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_155_1058"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="1" dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_155_1058"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-1" dy="-1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_innerShadow_155_1058"
                    result="effect3_innerShadow_155_1058"
                  />
                </filter>
              </defs>
            </svg>

            <div class="mt-3">Me</div>
          </div>
          <!-- aktif -->
          <div
            @click="play"
            v-if="isMeActive === true"
            class="text-darkGrey rounded bg-bone p-3 w-20 h-20 border-2 border-grey50 shadow-[inset_3px_3px_4px_rgba(0,0,0,0.25),inset_-3px_-3px_9px_rgba(255,255,255,0.04)]"
          >
            <!-- <audio ref="typingMusic" loop>
              <source src="./src/assets/typingEffect.mp3" type="audio/mpeg" />
            </audio> -->
            <svg
              width="50"
              height="13"
              viewBox="0 0 43 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dii_155_1058)">
                <rect x="5" y="5" width="33" height="3" rx="1" fill="#FF752E" />
              </g>
              <defs>
                <filter
                  id="filter0_dii_155_1058"
                  x="0.7"
                  y="0.7"
                  width="41.6"
                  height="11.6"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_155_1058"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 0.458824 0 0 0 0 0.180392 0 0 0 0.35 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_155_1058"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_155_1058"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="1" dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_155_1058"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-1" dy="-1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_innerShadow_155_1058"
                    result="effect3_innerShadow_155_1058"
                  />
                </filter>
              </defs>
            </svg>

            <div class="mt-4">Me</div>
          </div>
        </button>
        <!-- Work BUTTON -->
        <button
          class="text-base hover:text-grey5 text-grey20 flex-col sm:grid justify-items-center font-poppins"
          @click="() => myWork()"
        >
          <!-- text -->
          <div
            @click="play"
            v-if="isMyWorkActive === false"
            class="text-darkGrey -mx-1 lg:-my-1 justify-items-center rounded bg-bone p-3 w-20 h-20 border-2 border-grey50 drop-shadow-button shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.25),inset_2px_2px_9px_rgba(255,255,255,0.05)] hover:text-grey5 hover:bg-grey70"
          >
            <svg
              width="50"
              height="13"
              viewBox="0 0 43 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dii_155_1058)">
                <rect x="5" y="5" width="33" height="3" rx="1" fill="#646464" />
              </g>
              <defs>
                <filter
                  id="filter0_dii_155_1058"
                  x="0.7"
                  y="0.7"
                  width="41.6"
                  height="11.6"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_155_1058"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="1 1 1 0 1 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_155_1058"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_155_1058"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="1" dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_155_1058"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-1" dy="-1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_innerShadow_155_1058"
                    result="effect3_innerShadow_155_1058"
                  />
                </filter>
              </defs>
            </svg>

            <div class="mt-3">Work</div>
          </div>
          <!-- aktif -->
          <div
            @click="play"
            v-if="isMyWorkActive === true"
            class="-mx-1 lg:-my-1 text-darkGrey rounded bg-bone p-3 w-20 h-20 border-2 border-grey50 shadow-[inset_3px_3px_4px_rgba(0,0,0,0.25),inset_-3px_-3px_9px_rgba(255,255,255,0.04)]"
          >
            <!-- <audio ref="typingMusic" loop>
              <source src="./src/assets/typingEffect.mp3" type="audio/mpeg" />
            </audio> -->
            <svg
              width="50"
              height="13"
              viewBox="0 0 43 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dii_155_1058)">
                <rect x="5" y="5" width="33" height="3" rx="1" fill="#FF752E" />
              </g>
              <defs>
                <filter
                  id="filter0_dii_155_1058"
                  x="0.7"
                  y="0.7"
                  width="41.6"
                  height="11.6"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_155_1058"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 0.458824 0 0 0 0 0.180392 0 0 0 0.35 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_155_1058"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_155_1058"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="1" dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_155_1058"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-1" dy="-1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_innerShadow_155_1058"
                    result="effect3_innerShadow_155_1058"
                  />
                </filter>
              </defs>
            </svg>

            <div class="mt-4">Work</div>
          </div>
        </button>
        <!-- Contact BUTTON -->
        <button
          class="text-basehover:text-grey5 text-grey20 flex-col sm:grid justify-items-center font-poppins"
          @click="() => myContact()"
        >
          <!-- text -->
          <div
            @click="play"
            v-if="isMyContactActive === false"
            class="text-darkGrey justify-items-center rounded bg-bone p-3 w-20 h-20 border-2 border-grey50 drop-shadow-button shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.25),inset_2px_2px_9px_rgba(255,255,255,0.05)] hover:text-grey5 hover:bg-grey70"
          >
            <svg
              width="50"
              height="13"
              viewBox="0 0 43 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dii_155_1058)">
                <rect x="5" y="5" width="33" height="3" rx="1" fill="#646464" />
              </g>
              <defs>
                <filter
                  id="filter0_dii_155_1058"
                  x="0.7"
                  y="0.7"
                  width="41.6"
                  height="11.6"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_155_1058"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="1 1 1 0 1 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_155_1058"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_155_1058"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="1" dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_155_1058"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-1" dy="-1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_innerShadow_155_1058"
                    result="effect3_innerShadow_155_1058"
                  />
                </filter>
              </defs>
            </svg>

            <div class="mt-3">Desire</div>
          </div>
          <!-- aktif -->
          <div
            @click="play"
            v-if="isMyContactActive === true"
            class="text-darkGrey rounded bg-bone p-3 w-20 h-20 border-2 border-grey50 shadow-[inset_3px_3px_4px_rgba(0,0,0,0.25),inset_-3px_-3px_9px_rgba(255,255,255,0.04)]"
          >
            <!-- <audio ref="typingMusic" loop>
              <source src="./src/assets/typingEffect.mp3" type="audio/mpeg" />
            </audio> -->
            <svg
              width="50"
              height="13"
              viewBox="0 0 43 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dii_155_1058)">
                <rect x="5" y="5" width="33" height="3" rx="1" fill="#FF752E" />
              </g>
              <defs>
                <filter
                  id="filter0_dii_155_1058"
                  x="0.7"
                  y="0.7"
                  width="41.6"
                  height="11.6"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_155_1058"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.65" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 0.458824 0 0 0 0 0.180392 0 0 0 0.35 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_155_1058"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_155_1058"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="1" dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_155_1058"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-1" dy="-1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_innerShadow_155_1058"
                    result="effect3_innerShadow_155_1058"
                  />
                </filter>
              </defs>
            </svg>

            <div class="mt-4">Desire</div>
          </div>
        </button>
        <div class="flex w-full lg:h-full"></div>
        <!-- button CV -->

        <a href="/files/cv_Masegie_Sep2023.pdf" download>
          <button
            class="text-base mx-1 rounded hover:text-grey5 text-grey20 flex-col sm:grid justify-items-center font-poppins"
          >
            <!-- text -->
            <div
              @click="play"
              class="text-white rounded justify-items-center bg-orangeMarine p-3 w-20 h-20 border-2 border-grey50 drop-shadow-button shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.25),inset_2px_2px_9px_rgba(255,255,255,0.05)] hover:text-grey5 hover:bg-manggo2"
            >
              <svg
                width="50"
                height="13"
                viewBox="0 0 43 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>

              <div class="mt-3">CV</div>
            </div>
          </button>
        </a>
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
import { FaceSmileIcon } from "@heroicons/vue/24/solid";
import { BeakerIcon } from "@heroicons/vue/24/solid";
import router from "../router";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { ref, onMounted } from "vue";

AOS.init();
export default {
  name: "Home",
  setup() {
    const { play } = useSound(buttonSfx);
    const path = ref(null);
    let progress = ref(0);
    let x = ref(0.5);
    let time = ref(Math.PI / 2);
    let reqId = null;

    const setPath = (progress) => {
      console.log("ca");
      const width = window.innerWidth * 0.7;
      if (path.value) {
        path.value.setAttribute(
          "d",
          `M0 250 Q${width * x.value} ${250 + progress}, ${width} 250`
        );
      }
    };

    const lerp = (x, y, a) => x * (1 - a) + y * a;

    const manageMouseEnter = () => {
      if (reqId) {
        cancelAnimationFrame(reqId);
        resetAnimation();
      }
    };

    const manageMouseMove = (e) => {
      const { movementY, clientX } = e;
      const pathBound = path.value.getBoundingClientRect();
      x.value = (clientX - pathBound.left) / pathBound.width;
      progress.value += movementY;
      setPath(progress.value);
    };

    const manageMouseLeave = () => {
      animateOut();
    };

    const animateOut = () => {
      const newProgress = progress.value * Math.sin(time.value);
      progress.value = lerp(progress.value, 0, 0.025);
      time.value += 0.2;
      setPath(newProgress);
      if (Math.abs(progress.value) > 0.75) {
        reqId = requestAnimationFrame(animateOut);
      } else {
        resetAnimation();
      }
    };

    const resetAnimation = () => {
      time.value = Math.PI / 2;
      progress.value = 0;
    };

    onMounted(() => {
      setPath(progress.value);
    });
    return {
      play,
      path,
      manageMouseEnter,
      manageMouseMove,
      manageMouseLeave,
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
    bezierPath() {
      // Generates the cubic Bézier path string
      return `M ${this.startX} ${this.startY} C ${this.controlX1} ${this.controlY1}, ${this.controlX2} ${this.controlY2}, ${this.endX} ${this.endY}`;
    },
  },
  mounted() {
    this.start();
    //this.changeBackground();
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

      backgroundClass: "",

      startX: 50, // Start point X
      startY: 150, // Start point Y
      controlX1: 150, // Control point 1 X
      controlY1: 50, // Control point 1 Y
      controlX2: 250, // Control point 2 X
      controlY2: 50, // Control point 2 Y
      endX: 350, // End point X
      endY: 150, // End point Y

      //      file: "../assets/buttonEffect3.mp3",
    };
  },
  methods: {
    setPath(value) {
      console.log("cc");
      const width = window.innerWidth * 0.7;
      const pathData = `M 0 50 Q ${width * x} ${50 + value} ${width} 50`;
      console.log(pathData); // Log path data for debugging

      if (path.value) {
        path.value.setAttributeNS(null, "d", pathData);
      }
    },
    changeBackground() {
      let cycleCount = 0;
      const interval = setInterval(() => {
        console.log(cycleCount);
        if (cycleCount < 2) {
          this.backgroundClass =
            " z-20 rounded-md text-shadow-glowPink ring-inset ring-2 ring-grey20 text-white"; // Tailwind class for red background
          setTimeout(() => {
            this.backgroundClass = ""; // Remove class after 1 second
          }, 100);
          cycleCount++;
        } else {
          clearInterval(interval);
          this.backgroundClass =
            " z-20 rounded-md text-shadow-glowPink ring-inset ring-2 ring-grey20 text-white"; // Tailwind class for red background
          setTimeout(() => {
            this.backgroundClass = ""; // Remove class after 7 seconds
            setTimeout(() => {
              this.changeBackground(); // Restart the cycle after the entire sequence
            }, 1000 * 10 - 9000);
          }, 7000);
        }
      }, 500); // 2 seconds interval
    },

    playMusic() {
      this.$refs.bgMusic.play();
    },
    handleClickLentera() {
      this.play;
      router.push("/lentera");
      this.firstPorto = true;
    },
    handleClickVariable() {
      this.play;
      router.push("/FigmaVariable");
      this.firstPorto = true;
    },
    handleClickDadJokesLoading() {
      this.play;
      router.push("/dadJokes");
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
      //  this.$refs.typingMusic.play();
      if (this.currentWord.length > 0) {
        this.displayText.push(this.currentWord.shift());
        // if done typing, then delete
      } else if (this.currentWord.length === 0 && this.displayText.length > 0) {
        this.content = "";
        ///   this.$refs.typingMusic.pause();
        // if done typing & deleting
      }
      setTimeout(this.type, this.timeoutSpeed);
    },
    type2nd(word) {
      // if typing...
      // this.$refs.typingMusic.play();
      if (this.currentWord2nd.length > 0) {
        this.displayText2nd.push(this.currentWord2nd.shift());
        // if done typing, then delete
      } else if (
        this.currentWord2nd.length === 0 &&
        this.displayText2nd.length > 0
      ) {
        this.content = "";
        // this.$refs.typingMusic.pause();
        // if done typing & deleting
      }

      setTimeout(this.type2nd, this.timeoutSpeed);
    },
  },
};
</script>

<style scoped>
.no-pull-to-refresh {
  overscroll-behavior: none;
}

html {
  overscroll-behavior: none;
}
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: black;
}

.body {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 70vw;
}

.description,
.tagsContainer {
  display: flex;
  justify-content: flex-end;
}

.description p {
  font-size: 12px;
  margin: 0px;
}
.description p:nth-of-type(1) {
  margin-top: 8px;
}
.description p:nth-of-type(2) {
  font-size: 28px;
  width: 700px;
  margin-left: 30px;
}
.tagsContainer {
  display: flex;
  margin-top: 50px;
}

.tagsContainer p {
  margin: 0px;
}

.tags {
  display: flex;
  width: 700px;
  margin-left: 30px;
  flex-wrap: wrap;
  gap: 10px;
}

.tags p {
  border: 1px solid black;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 16px;
  padding: 10px 12px 10px 12px;
}

.line {
  height: 1px;
  margin-bottom: 20px;
  width: 100%;
  position: relative;
}

.line svg {
  width: 100%;
  height: 500px;
  position: absolute;
  top: -250px;
}

.line svg path {
  stroke: black;
  stroke-width: 3px;
  fill: none;
}

.line .box {
  height: 40px;
  width: 100%;
  position: relative;
  top: -20px;
  z-index: 1;
}

.line .box:hover {
  height: 500px;
  top: -250px;
}
</style>
