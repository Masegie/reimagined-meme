<template>
  <div
    class="relative min-h-screen max-h-screen flex flex-col lg:flex-row overflow-hidden bg-darkGrey sm:pt-8 lg:py-8 sm:pb-2"
  >
    <!-- Screen -->
    <div class="flex flex-col flex-1 lg:basis-9/12">
      <!-- Teks Berjalan -->

      <div
        class="drop-shadow-button shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.25),inset_2px_2px_9px_rgba(255,255,255,0.05)] bg-black0 ring-darkGrey mx-0 sm:mx-8 rounded-md h-16"
      >
        <div class="relative text-2xl text-blueMarine flex overflow-x-hidden">
          <div class="animate-marquee py-4 whitespace-nowrap">
            <span class="mx-4"
              >Looking for new and interesting opportunities.</span
            >
            <span class="mx-4">Text Me!</span>
          </div>

          <div class="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
            <span class="mx-4"
              >Looking for new and interesting opportunities.</span
            >
            <span class="mx-4">Text Me!</span>
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
              class="drop-shadow-[0_0px_5px_rgba(28,138,157,0.8)] font-cursive text-blueMarine text-center text-4xl sm:text-5xl sm:px-10 lg-text7xl px-6 pt-10 shadow-sm rounded-lg"
            >
              {{ displayText.join("") }}
            </div>
            <div
              class="grow mt-4 font-poppins text-white text-center lg:relative leading-relaxed text-xl sm:text-2xl lg:text-4xl px-6 pt-10 pb-8 shadow-sm rounded-lg sm:px-10"
            >
              <div v-if="isMyWorkActive === false" class="mb-4">
                <span>
                  {{ displayText2nd.join("") }}
                </span>
              </div>
              <br />
              <div v-if="isMeActive === true" class="text-left">
                <div class="relative flex py-5 items-center">
                  <div class="flex-grow border-t border-blueMarine"></div>
                  <span class="flex-shrink mx-4 text-white">Experience</span>
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
                  class="text-sm sm:text-2xl text-grey20 relative flex pt-4 items-center"
                >
                  <div class="flex-grow">Full Stack Developer</div>
                  <div class="flex-grow text-right">2021-2022</div>
                </div>
                <div
                  class="text-sm sm:text-2xl text-grey20 relative flex pt-4 items-center"
                >
                  <div class="flex-grow">FE Developer</div>
                  <div class="flex-grow text-right">2020-2021</div>
                </div>
                <div class="relative flex py-5 items-center">
                  <div class="flex-grow border-t border-blueMarine"></div>
                  <span class="flex-shrink mx-4 text-white">Education</span>
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
              </div>
              <div v-if="isMyWorkActive === true">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <!-- 1 -->
                  <div
                    @click="handleClickLentera"
                    class="p-4 cursor-pointer border border-grey20 hover:border-blueMarine rounded-xl relative item-center hover:bg-black hover:drop-shadow-[0_0px_8px_rgba(28,138,157,0.8)]"
                  >
                    <div
                      class="text-blueMarine text-left flex justify-between text-xs font-cursive py-2"
                    >
                      <div>MOBILE APP . UI DESIGNER</div>
                      <div>2022</div>
                    </div>
                    <div class="text-left">
                      <div text-md>Lentera Books APP</div>
                      <div class="text-sm lg:text-lg text-grey20">
                        Journey to design the “LENTERA” book app MVP
                      </div>
                    </div>
                    <div class="grid grid-cols-3 gap-8 mt-4">
                      <div class="lg:col-span-2 col-span-2 grid grid-cols-1">
                        <img src="/images/Lentera_Thumbnail.png" class="" />
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

                  <!-- 3 -->
                  <div
                    @click="handleClickLentera"
                    class="p-4 border border-grey20 rounded-xl relative item-center hover:bg-black"
                  >
                    <div
                      class="text-blueMarine text-left flex justify-between text-xs font-cursive py-2"
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
                            class="mt-2 flex text-sm text-white justify-center border border-grey70 hover:border-blueMarine p-4 rounded-lg"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Button -->
    <div class="flex lg:basis-2/12 justify-center">
      <div
        class="p-4 lg:flex-col flex lg:gap-4 justify-items-center lg:items-center justify-center lg:text-xl sm:mt-4 text-sm sm:text-lg"
      >
        <!-- ME BUTTON -->
        <button
          class="mx-1 hover:text-grey5 font-semibold text-grey20 flex-col sm:grid justify-items-center font-poppins"
          @click="() => me()"
        >
          <!-- text -->
          <div
            @click="play"
            v-if="isMeActive === false"
            class="flex mt-0 mb-4 text-grey20 rounded-2xl sm:rounded-3xl bg-darkGrey lg:p-5 p-4 w-16 h-16 sm:p-6 sm:w-20 sm:h-20 border-4 border-grey50 drop-shadow-button shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.25),inset_2px_2px_9px_rgba(255,255,255,0.05)] hover:text-grey5 hover:bg-grey70"
          >
            <audio ref="typingMusic" loop>
              <source src="./assets/typingEffect.mp3" type="audio/mpeg" />
            </audio>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21"
              fill="currentColor"
            >
              <g filter="url(#filter0_ii_998_929)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5 18.5C14.9183 18.5 18.5 14.9183 18.5 10.5C18.5 6.08172 14.9183 2.5 10.5 2.5C6.08172 2.5 2.5 6.08172 2.5 10.5C2.5 14.9183 6.08172 18.5 10.5 18.5ZM7.5 9.5C8.05228 9.5 8.5 9.05228 8.5 8.5C8.5 7.94772 8.05228 7.5 7.5 7.5C6.94772 7.5 6.5 7.94772 6.5 8.5C6.5 9.05228 6.94772 9.5 7.5 9.5ZM14.5 8.5C14.5 9.05228 14.0523 9.5 13.5 9.5C12.9477 9.5 12.5 9.05228 12.5 8.5C12.5 7.94772 12.9477 7.5 13.5 7.5C14.0523 7.5 14.5 7.94772 14.5 8.5ZM14.0355 14.0354C14.4261 13.6449 14.4261 13.0118 14.0355 12.6212C13.645 12.2307 13.0118 12.2307 12.6213 12.6212C11.4497 13.7928 9.55025 13.7928 8.37868 12.6212C7.98816 12.2307 7.35499 12.2307 6.96447 12.6212C6.57394 13.0118 6.57394 13.6449 6.96447 14.0354C8.91709 15.9881 12.0829 15.9881 14.0355 14.0354Z"
                />
              </g>
              <defs>
                <filter
                  id="filter0_ii_998_929"
                  x="1.5"
                  y="1.5"
                  width="18"
                  height="18"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-1" dy="-1" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.03 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_998_929"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="1" dy="1" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_innerShadow_998_929"
                    result="effect2_innerShadow_998_929"
                  />
                </filter>
              </defs>
            </svg>

            <!-- <h1 class="[text-shadow:2px_1px_1px_rgb(0_0_0_/_40%)]">M</h1> -->
          </div>
          <div
            @click="play"
            v-if="isMeActive === true"
            class="flex mt-0 mb-4 text-blueMarine rounded-2xl sm:rounded-3xl bg-darkGrey lg:p-5 p-4 w-16 h-16 sm:p-6 sm:w-20 sm:h-20 border-4 border-grey50 shadow-[inset_3px_3px_4px_rgba(0,0,0,0.25),inset_-3px_-3px_9px_rgba(255,255,255,0.04)]"
          >
            <audio ref="typingMusic" loop>
              <source src="./assets/typingEffect.mp3" type="audio/mpeg" />
            </audio>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="drop-shadow-[0_0px_5px_rgba(28,138,157,0.8)]"
              viewBox="0 0 21 21"
              fill="currentColor"
            >
              <g filter="url(#filter0_ii_998_929)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5 18.5C14.9183 18.5 18.5 14.9183 18.5 10.5C18.5 6.08172 14.9183 2.5 10.5 2.5C6.08172 2.5 2.5 6.08172 2.5 10.5C2.5 14.9183 6.08172 18.5 10.5 18.5ZM7.5 9.5C8.05228 9.5 8.5 9.05228 8.5 8.5C8.5 7.94772 8.05228 7.5 7.5 7.5C6.94772 7.5 6.5 7.94772 6.5 8.5C6.5 9.05228 6.94772 9.5 7.5 9.5ZM14.5 8.5C14.5 9.05228 14.0523 9.5 13.5 9.5C12.9477 9.5 12.5 9.05228 12.5 8.5C12.5 7.94772 12.9477 7.5 13.5 7.5C14.0523 7.5 14.5 7.94772 14.5 8.5ZM14.0355 14.0354C14.4261 13.6449 14.4261 13.0118 14.0355 12.6212C13.645 12.2307 13.0118 12.2307 12.6213 12.6212C11.4497 13.7928 9.55025 13.7928 8.37868 12.6212C7.98816 12.2307 7.35499 12.2307 6.96447 12.6212C6.57394 13.0118 6.57394 13.6449 6.96447 14.0354C8.91709 15.9881 12.0829 15.9881 14.0355 14.0354Z"
                />
              </g>
              <defs>
                <filter
                  id="filter0_ii_998_929"
                  x="1.5"
                  y="1.5"
                  width="18"
                  height="18"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-1" dy="-1" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.03 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_998_929"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="1" dy="1" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_innerShadow_998_929"
                    result="effect2_innerShadow_998_929"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div
            :class="
              isMeActive
                ? 'text-blueMarine drop-shadow-[0_0px_5px_rgba(28,138,157,0.8)]'
                : text - blueMarine
            "
          >
            Me
          </div>
        </button>
        <!-- Work BUTTON -->
        <button
          class="mx-1 hover:text-grey5 font-semibold text-grey20 flex-col sm:grid justify-items-center font-poppins"
          @click="() => myWork()"
        >
          <!-- text -->
          <div
            @click="play"
            v-if="isMyWorkActive === false"
            class="flex mt-0 mb-4 text-grey20 rounded-2xl sm:rounded-3xl bg-darkGrey p-4 w-16 h-16 sm:p-6 sm:w-20 sm:h-20 border-4 border-grey50 drop-shadow-button shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.25),inset_2px_2px_9px_rgba(255,255,255,0.05)] hover:text-grey5 hover:bg-grey70"
          >
            <audio ref="typingMusic" loop>
              <source src="./assets/typingEffect.mp3" type="audio/mpeg" />
            </audio>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 15"
              fill="currentColor"
            >
              <g filter="url(#filter0_ii_998_799)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 2.5C0 1.39543 0.895431 0.5 2 0.5H10C11.1046 0.5 12 1.39543 12 2.5V12.5C12 13.6046 12.8954 14.5 14 14.5H2C0.895431 14.5 0 13.6046 0 12.5V2.5ZM3 3.5H9V7.5H3V3.5ZM9 9.5H3V11.5H9V9.5Z"
                />
                <path
                  d="M13 4.5H14C15.1046 4.5 16 5.39543 16 6.5V12C16 12.8284 15.3284 13.5 14.5 13.5C13.6716 13.5 13 12.8284 13 12V4.5Z"
                />
              </g>
              <defs>
                <filter
                  id="filter0_ii_998_799"
                  x="-1"
                  y="-0.5"
                  width="18"
                  height="16"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-1" dy="-1" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.03 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_998_799"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="1" dy="1" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_innerShadow_998_799"
                    result="effect2_innerShadow_998_799"
                  />
                </filter>
              </defs>
            </svg>

            <!-- <h1 class="[text-shadow:2px_1px_1px_rgb(0_0_0_/_40%)]">M</h1> -->
          </div>
          <div
            @click="play"
            v-if="isMyWorkActive === true"
            class="flex mt-0 mb-4 text-blueMarine rounded-2xl sm:rounded-3xl bg-darkGrey p-4 w-16 h-16 sm:p-6 sm:w-20 sm:h-20 border-4 border-grey50 shadow-[inset_3px_3px_4px_rgba(0,0,0,0.25),inset_-3px_-3px_9px_rgba(255,255,255,0.04)]"
          >
            <audio ref="typingMusic" loop>
              <source src="./assets/typingEffect.mp3" type="audio/mpeg" />
            </audio>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="drop-shadow-[0_0px_5px_rgba(28,138,157,0.8)]"
              viewBox="0 0 16 15"
              fill="currentColor"
            >
              <g filter="url(#filter0_ii_998_799)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 2.5C0 1.39543 0.895431 0.5 2 0.5H10C11.1046 0.5 12 1.39543 12 2.5V12.5C12 13.6046 12.8954 14.5 14 14.5H2C0.895431 14.5 0 13.6046 0 12.5V2.5ZM3 3.5H9V7.5H3V3.5ZM9 9.5H3V11.5H9V9.5Z"
                />
                <path
                  d="M13 4.5H14C15.1046 4.5 16 5.39543 16 6.5V12C16 12.8284 15.3284 13.5 14.5 13.5C13.6716 13.5 13 12.8284 13 12V4.5Z"
                />
              </g>
              <defs>
                <filter
                  id="filter0_ii_998_799"
                  x="-1"
                  y="-0.5"
                  width="18"
                  height="16"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-1" dy="-1" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.03 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_998_799"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="1" dy="1" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_innerShadow_998_799"
                    result="effect2_innerShadow_998_799"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div
            :class="
              isMyWorkActive
                ? 'text-blueMarine drop-shadow-[0_0px_5px_rgba(28,138,157,0.8)]'
                : text - blueMarine
            "
          >
            Work
          </div>
        </button>
        <!-- Contact BUTTON -->
        <button
          class="mx-1 hover:text-grey5 font-semibold text-grey20 flex-col sm:grid justify-items-center font-poppins"
          @click="() => myContact()"
        >
          <!-- text -->
          <div
            @click="play"
            v-if="isMyContactActive === false"
            class="flex mt-0 mb-4 text-grey20 rounded-2xl sm:rounded-3xl bg-darkGrey p-4 w-16 h-16 sm:p-6 sm:w-20 sm:h-20 border-4 border-grey50 drop-shadow-button shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.25),inset_2px_2px_9px_rgba(255,255,255,0.05)] hover:text-grey5 hover:bg-grey70"
          >
            <audio ref="typingMusic" loop>
              <source src="./assets/typingEffect.mp3" type="audio/mpeg" />
            </audio>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 21"
              fill="currentColor"
            >
              <g filter="url(#filter0_ii_998_907)">
                <path
                  d="M2 3.5C2 2.94772 2.44772 2.5 3 2.5H5.15287C5.64171 2.5 6.0589 2.85341 6.13927 3.3356L6.87858 7.77147C6.95075 8.20451 6.73206 8.63397 6.3394 8.8303L4.79126 9.60437C5.90756 12.3783 8.12168 14.5924 10.8956 15.7087L11.6697 14.1606C11.866 13.7679 12.2955 13.5492 12.7285 13.6214L17.1644 14.3607C17.6466 14.4411 18 14.8583 18 15.3471V17.5C18 18.0523 17.5523 18.5 17 18.5H15C7.8203 18.5 2 12.6797 2 5.5V3.5Z"
                />
              </g>
              <defs>
                <filter
                  id="filter0_ii_998_907"
                  x="1"
                  y="1.5"
                  width="18"
                  height="18"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-1" dy="-1" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.03 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_998_907"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="1" dy="1" />
                  <feGaussianBlur stdDeviation="2" />
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
                    in2="effect1_innerShadow_998_907"
                    result="effect2_innerShadow_998_907"
                  />
                </filter>
              </defs>
            </svg>

            <!-- <h1 class="[text-shadow:2px_1px_1px_rgb(0_0_0_/_40%)]">M</h1> -->
          </div>
          <div
            @click="play"
            v-if="isMyContactActive === true"
            class="flex mt-0 mb-4 text-blueMarine rounded-2xl sm:rounded-3xl bg-darkGrey p-4 w-16 h-16 sm:p-6 sm:w-20 sm:h-20 border-4 border-grey50 shadow-[inset_3px_3px_4px_rgba(0,0,0,0.25),inset_-3px_-3px_9px_rgba(255,255,255,0.04)]"
          >
            <audio ref="typingMusic" loop>
              <source src="./assets/typingEffect.mp3" type="audio/mpeg" />
            </audio>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="drop-shadow-[0_0px_5px_rgba(28,138,157,0.8)]"
              viewBox="0 0 20 21"
              fill="currentColor"
            >
              <g filter="url(#filter0_ii_998_907)">
                <path
                  d="M2 3.5C2 2.94772 2.44772 2.5 3 2.5H5.15287C5.64171 2.5 6.0589 2.85341 6.13927 3.3356L6.87858 7.77147C6.95075 8.20451 6.73206 8.63397 6.3394 8.8303L4.79126 9.60437C5.90756 12.3783 8.12168 14.5924 10.8956 15.7087L11.6697 14.1606C11.866 13.7679 12.2955 13.5492 12.7285 13.6214L17.1644 14.3607C17.6466 14.4411 18 14.8583 18 15.3471V17.5C18 18.0523 17.5523 18.5 17 18.5H15C7.8203 18.5 2 12.6797 2 5.5V3.5Z"
                />
              </g>
              <defs>
                <filter
                  id="filter0_ii_998_907"
                  x="1"
                  y="1.5"
                  width="18"
                  height="18"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-1" dy="-1" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.03 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_998_907"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="1" dy="1" />
                  <feGaussianBlur stdDeviation="2" />
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
                    in2="effect1_innerShadow_998_907"
                    result="effect2_innerShadow_998_907"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div
            :class="
              isMyContactActive
                ? 'text-blueMarine drop-shadow-[0_0px_5px_rgba(28,138,157,0.8)]'
                : text - blueMarine
            "
          >
            Contact
          </div>
        </button>
        <div class="w-6"></div>
        <div
          class="mx-1 px-1 rounded-full grid w-fit justify-items-center sm:drop-shadow-button shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.25),inset_2px_2px_9px_rgba(255,255,255,0.05)]"
        >
          <a href="/files/cv_Masegie_Sep2023.pdf" download>
            <button
              class="hover:text-redCVHoverfont-semibold text-redCV flex-col sm:grid justify-items-center font-poppins active:text-grey20"
            >
              <!-- text -->
              <div
                @click="play"
                class="flex mt-0 mb-4 redCVHover rounded-full bg-darkGrey p-4 w-16 h-16 sm:p-6 sm:w-20 sm:h-20 border-4 border-grey50 drop-shadow-button active:drop-shadow-sm shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.25),inset_2px_2px_9px_rgba(255,255,255,0.05)] hover:text-redCVHover hover:bg-grey70 transition transform duration-150 active:shadow-[inset_3px_3px_4px_rgba(0,0,0,0.25),inset_-3px_-3px_9px_rgba(255,255,255,0.04)] active:text-grey50"
              >
                <audio ref="typingMusic" loop>
                  <source src="./assets/typingEffect.mp3" type="audio/mpeg" />
                </audio>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19 19"
                  fill="currentColor"
                >
                  <g filter="url(#filter0_ii_1050_1074)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.5366 9.76365C15.8881 10.1151 15.8881 10.685 15.5366 11.0364L10.1366 16.4364C9.78512 16.7879 9.21527 16.7879 8.8638 16.4364L3.4638 11.0364C3.11233 10.685 3.11233 10.1151 3.4638 9.76365C3.81527 9.41218 4.38512 9.41218 4.73659 9.76365L8.6002 13.6273L8.6002 3.20005C8.6002 2.70299 9.00314 2.30005 9.5002 2.30005C9.99725 2.30005 10.4002 2.70299 10.4002 3.20005L10.4002 13.6273L14.2638 9.76365C14.6153 9.41218 15.1851 9.41218 15.5366 9.76365Z"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_ii_1050_1074"
                      x="2.2002"
                      y="1.30005"
                      width="14.6001"
                      height="16.3999"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="1" dy="1" />
                      <feGaussianBlur stdDeviation="2" />
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
                        result="effect1_innerShadow_1050_1074"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="-1" dy="-1" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.03 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_innerShadow_1050_1074"
                        result="effect2_innerShadow_1050_1074"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div class="mb-4 font-black">CV</div>
            </button>
          </a>
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
import typingSfx from "../assets/typingEffect.mp3";
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

      //      file: "../assets/buttonEffect3.mp3",
    };
  },
  methods: {
    playMusic() {
      this.$refs.bgMusic.play();
    },
    handleClickLentera() {
      this.play;
      router.push("/lentera");
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
