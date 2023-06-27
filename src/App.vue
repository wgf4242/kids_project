<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {generateQuestion} from "./util/gen.js";
import {ref, watchEffect} from "vue";

let question = ref(0);
let result = ref(0);
let counter = ref(5);
const genNext = () => {
    const [ques, res] = generateQuestion();
    question.value = ques
    result.value = res;
}


const timer = setInterval(() => {
    if (counter.value > 0) {
        counter.value--;
    }
}, 1000)

// watchEffect(() => {
//     generateQuestion()
//     clearInterval(timer)
// })
genNext()
</script>

<template>
    <div>
        <h1> {{ question }}</h1>
        <button @click="genNext">Next</button>
        <h1>{{ result }}</h1>
        <h1>CountDown: {{ counter }}</h1>
    </div>
    <HelloWorld msg="Vite + Vue"/>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
