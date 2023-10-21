<script setup lang="ts">
// Vue Component -------------------------------------------------///
import CustomInput from "../component/global/CustomInput.vue"


// TS Module -----------------------------------------------------///
import { ref } from "vue";
import { $API_URL } from "../plugins/VITE_env";


const DLURL =  ref<string>("https://www.youtube.com/watch?v=ASgTelm7NW4")

const submit = () => { 
  if (DLURL.value !== "") { 
    fetch(`${$API_URL}/api/youtube-dl`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: DLURL.value
      }), 
    })
  }
}
</script>

<template>
  <div :class="$style.head">
    <p>YouTube Downloader!</p>
  </div>
  <div :class="$style.mainContents">
    <CustomInput placeholder="Download YouTube URL" @receive="e => DLURL = e" :class="$style.customInput"/><a :class="$style.submitButton" @click="submit()">Download</a>
  </div>
</template>


<style module lang="scss">
.head { 
  display: flex;
  align-items: center;

  height: 2em;
  
  padding: 0 1em;
  font-size: 1.5em;

  border-bottom: solid 1px;
}
.mainContents {
  display: flex;
  align-items: center;
  
  .customInput {
    width: 80%;
  }
  .submitButton {
    margin: 0.5rem 0;

    padding: 0.5rem 1rem;

    font-size: 0.8em;

    background-color: var(--secondary-bg-color);
    border-radius: var(--default-border-radius);

    &:hover {
      background-color: var(--tertiary-bg-color);
    }
  }
}
</style>