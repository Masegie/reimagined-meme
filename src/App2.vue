<template>
  <div
    class="relative min-h-screen max-h-screen grid grid-rows-1 place-items-stretch content-between overflow-hidden bg-darkGrey py-6 sm:py-12"
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
    <div class="flex space-x-32">
      <div
         class="lg:flex flex-auto mx-4 my-4 lg:text-4xl sm:mt-8 text-xl sm:text-2xl sm:mx-8"
      >
        <!-- ME BUTTON -->
        <button 
        class="
                
              hover:text-grey5 font-semibold	text-3xl text-grey20 grid justify-items-center font-poppins" @click="() => me()">
          <!-- text -->
          <div
            @click="play"
            v-if="isMeActive === false"
            class="flex my-8
             text-grey20 rounded-3xl bg-darkGrey p-6
                  w-28 h-28
                  border-4 border-grey50 
                  drop-shadow-button shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.25),inset_2px_2px_9px_rgba(255,255,255,0.05)] 
                 hover:text-grey5 hover:bg-grey70"
          >
            <audio ref="typingMusic" loop>
              <source src="./assets/typingEffect.mp3" type="audio/mpeg" />
            </audio>

            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 21 21" fill="currentColor">
              <g filter="url(#filter0_ii_998_929)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 18.5C14.9183 18.5 18.5 14.9183 18.5 10.5C18.5 6.08172 14.9183 2.5 10.5 2.5C6.08172 2.5 2.5 6.08172 2.5 10.5C2.5 14.9183 6.08172 18.5 10.5 18.5ZM7.5 9.5C8.05228 9.5 8.5 9.05228 8.5 8.5C8.5 7.94772 8.05228 7.5 7.5 7.5C6.94772 7.5 6.5 7.94772 6.5 8.5C6.5 9.05228 6.94772 9.5 7.5 9.5ZM14.5 8.5C14.5 9.05228 14.0523 9.5 13.5 9.5C12.9477 9.5 12.5 9.05228 12.5 8.5C12.5 7.94772 12.9477 7.5 13.5 7.5C14.0523 7.5 14.5 7.94772 14.5 8.5ZM14.0355 14.0354C14.4261 13.6449 14.4261 13.0118 14.0355 12.6212C13.645 12.2307 13.0118 12.2307 12.6213 12.6212C11.4497 13.7928 9.55025 13.7928 8.37868 12.6212C7.98816 12.2307 7.35499 12.2307 6.96447 12.6212C6.57394 13.0118 6.57394 13.6449 6.96447 14.0354C8.91709 15.9881 12.0829 15.9881 14.0355 14.0354Z" />
              </g>
              <defs>
                <filter id="filter0_ii_998_929" x="1.5" y="1.5" width="18" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="-1" dy="-1"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.03 0"/>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_998_929"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="1" dy="1"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="effect1_innerShadow_998_929" result="effect2_innerShadow_998_929"/>
                </filter>
              </defs>
            </svg>

            <!-- <h1 class="[text-shadow:2px_1px_1px_rgb(0_0_0_/_40%)]">M</h1> -->
          </div>
          <div
            @click="play"
            v-if="isMeActive === true"
            class="flex my-8 
                  text-blueMarine rounded-3xl bg-darkGrey p-6
                  w-28 h-28
                  border-4 border-grey50 
                  shadow-[inset_3px_3px_4px_rgba(0,0,0,0.25),inset_-3px_-3px_9px_rgba(255,255,255,0.04)] 
                "
          >
            <audio ref="typingMusic" loop>
              <source src="./assets/typingEffect.mp3" type="audio/mpeg" />
            </audio>
           
            <svg xmlns="http://www.w3.org/2000/svg" class=" drop-shadow-[0_0px_5px_rgba(28,138,157,0.8)]" viewBox="0 0 21 21" fill="currentColor">
              <g filter="url(#filter0_ii_998_929)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 18.5C14.9183 18.5 18.5 14.9183 18.5 10.5C18.5 6.08172 14.9183 2.5 10.5 2.5C6.08172 2.5 2.5 6.08172 2.5 10.5C2.5 14.9183 6.08172 18.5 10.5 18.5ZM7.5 9.5C8.05228 9.5 8.5 9.05228 8.5 8.5C8.5 7.94772 8.05228 7.5 7.5 7.5C6.94772 7.5 6.5 7.94772 6.5 8.5C6.5 9.05228 6.94772 9.5 7.5 9.5ZM14.5 8.5C14.5 9.05228 14.0523 9.5 13.5 9.5C12.9477 9.5 12.5 9.05228 12.5 8.5C12.5 7.94772 12.9477 7.5 13.5 7.5C14.0523 7.5 14.5 7.94772 14.5 8.5ZM14.0355 14.0354C14.4261 13.6449 14.4261 13.0118 14.0355 12.6212C13.645 12.2307 13.0118 12.2307 12.6213 12.6212C11.4497 13.7928 9.55025 13.7928 8.37868 12.6212C7.98816 12.2307 7.35499 12.2307 6.96447 12.6212C6.57394 13.0118 6.57394 13.6449 6.96447 14.0354C8.91709 15.9881 12.0829 15.9881 14.0355 14.0354Z" />
              </g>
              <defs>
                <filter id="filter0_ii_998_929" x="1.5" y="1.5" width="18" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="-1" dy="-1"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.03 0"/>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_998_929"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="1" dy="1"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="effect1_innerShadow_998_929" result="effect2_innerShadow_998_929"/>
                </filter>
              </defs>
            </svg>
            
          </div>
          <div :class="isMeActive?'text-blueMarine drop-shadow-[0_0px_5px_rgba(28,138,157,0.8)]':text-blueMarine">Me</div>

        </button>
        
 <!-- ME BUTTON -->
        <button 
         class="hover:text-grey5 font-semibold	text-3xl text-grey20 grid justify-items-center font-poppins" @click="() => me()">
          <!-- text -->
          <div
            @click="play"
            v-if="isMeActive === false"
            class="flex my-8
             text-grey20 rounded-3xl bg-darkGrey p-6
                  w-28 h-28
                  border-4 border-grey50 
                  drop-shadow-button shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.25),inset_2px_2px_9px_rgba(255,255,255,0.05)] 
                 hover:text-grey5 hover:bg-grey70"
          >
            <audio ref="typingMusic" loop>
              <source src="./assets/typingEffect.mp3" type="audio/mpeg" />
            </audio>

            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 21 21" fill="currentColor">
              <g filter="url(#filter0_ii_998_929)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 18.5C14.9183 18.5 18.5 14.9183 18.5 10.5C18.5 6.08172 14.9183 2.5 10.5 2.5C6.08172 2.5 2.5 6.08172 2.5 10.5C2.5 14.9183 6.08172 18.5 10.5 18.5ZM7.5 9.5C8.05228 9.5 8.5 9.05228 8.5 8.5C8.5 7.94772 8.05228 7.5 7.5 7.5C6.94772 7.5 6.5 7.94772 6.5 8.5C6.5 9.05228 6.94772 9.5 7.5 9.5ZM14.5 8.5C14.5 9.05228 14.0523 9.5 13.5 9.5C12.9477 9.5 12.5 9.05228 12.5 8.5C12.5 7.94772 12.9477 7.5 13.5 7.5C14.0523 7.5 14.5 7.94772 14.5 8.5ZM14.0355 14.0354C14.4261 13.6449 14.4261 13.0118 14.0355 12.6212C13.645 12.2307 13.0118 12.2307 12.6213 12.6212C11.4497 13.7928 9.55025 13.7928 8.37868 12.6212C7.98816 12.2307 7.35499 12.2307 6.96447 12.6212C6.57394 13.0118 6.57394 13.6449 6.96447 14.0354C8.91709 15.9881 12.0829 15.9881 14.0355 14.0354Z" />
              </g>
              <defs>
                <filter id="filter0_ii_998_929" x="1.5" y="1.5" width="18" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="-1" dy="-1"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.03 0"/>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_998_929"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="1" dy="1"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="effect1_innerShadow_998_929" result="effect2_innerShadow_998_929"/>
                </filter>
              </defs>
            </svg>

            <!-- <h1 class="[text-shadow:2px_1px_1px_rgb(0_0_0_/_40%)]">M</h1> -->
          </div>
          <div
            @click="play"
            v-if="isMeActive === true"
            class="flex my-8 
                  text-blueMarine rounded-3xl bg-darkGrey p-6
                  w-28 h-28
                  border-4 border-grey50 
                  shadow-[inset_3px_3px_4px_rgba(0,0,0,0.25),inset_-3px_-3px_9px_rgba(255,255,255,0.04)] 
                "
          >
            <audio ref="typingMusic" loop>
              <source src="./assets/typingEffect.mp3" type="audio/mpeg" />
            </audio>
           
            <svg xmlns="http://www.w3.org/2000/svg" class=" drop-shadow-[0_0px_5px_rgba(28,138,157,0.8)]" viewBox="0 0 21 21" fill="currentColor">
              <g filter="url(#filter0_ii_998_929)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 18.5C14.9183 18.5 18.5 14.9183 18.5 10.5C18.5 6.08172 14.9183 2.5 10.5 2.5C6.08172 2.5 2.5 6.08172 2.5 10.5C2.5 14.9183 6.08172 18.5 10.5 18.5ZM7.5 9.5C8.05228 9.5 8.5 9.05228 8.5 8.5C8.5 7.94772 8.05228 7.5 7.5 7.5C6.94772 7.5 6.5 7.94772 6.5 8.5C6.5 9.05228 6.94772 9.5 7.5 9.5ZM14.5 8.5C14.5 9.05228 14.0523 9.5 13.5 9.5C12.9477 9.5 12.5 9.05228 12.5 8.5C12.5 7.94772 12.9477 7.5 13.5 7.5C14.0523 7.5 14.5 7.94772 14.5 8.5ZM14.0355 14.0354C14.4261 13.6449 14.4261 13.0118 14.0355 12.6212C13.645 12.2307 13.0118 12.2307 12.6213 12.6212C11.4497 13.7928 9.55025 13.7928 8.37868 12.6212C7.98816 12.2307 7.35499 12.2307 6.96447 12.6212C6.57394 13.0118 6.57394 13.6449 6.96447 14.0354C8.91709 15.9881 12.0829 15.9881 14.0355 14.0354Z" />
              </g>
              <defs>
                <filter id="filter0_ii_998_929" x="1.5" y="1.5" width="18" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="-1" dy="-1"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.03 0"/>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_998_929"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="1" dy="1"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="effect1_innerShadow_998_929" result="effect2_innerShadow_998_929"/>
                </filter>
              </defs>
            </svg>
            
          </div>
          <div :class="isMeActive?'text-blueMarine drop-shadow-[0_0px_5px_rgba(28,138,157,0.8)]':text-blueMarine">Me</div>

        </button>
        <!-- <button class="relative grow font-rubik" @click="() => myWork()">
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
          <div
            @click="play"
            v-if="isMyWorkActive === false"
            class="relative text-yellow2 bg-yellow1 border-4 py-2 sm:py-8 px-5 sm:px-10 border-yellow3 rounded-sm transition transform duration-200 active:translate-y-3 hover:text-white active:bg-yellow2"
          >
            <audio ref="typingMusic" loop>
              <source src="./assets/typingEffect.mp3" type="audio/mpeg" />
            </audio>
            <div>W</div>
          </div>
          <div
            @click="play"
            v-if="isMyWorkActive === true"
            class="relative text-white bg-yellow2 py-2 sm:py-8 px-5 sm:px-10 border-4 translate-y-4 border-yellow3 rounded-sm transition transform duration-350 active:translate-y-2 active:bg-yellow1"
          >
            <audio ref="typingMusic" loop>
              <source src="./assets/typingEffect.mp3" type="audio/mpeg" />
            </audio>
            <div class="">W</div>
          </div>
        </button> -->
        <!-- MY CONTACT -->
        <!-- <button
          class="mt-6 md:mt-0 relative grow font-rubik"
          @click="() => myContact()"
        >
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
        </button> -->
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
