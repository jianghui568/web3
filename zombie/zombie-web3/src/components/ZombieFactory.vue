<script setup lang="ts">
import {reactive, ref, watch} from "vue";
import {ZombieSkin} from "../assets/zombie/ZombieSkin.ts";

const headDna = ref(1);
const eyeDna = ref(1);
const shirtDna = ref(1);

const zombieSkin = ZombieSkin.getConfig()
// 监听 count 变量的变化
watch(headDna, (newVal) => {
  ZombieSkin.changeHead(newVal);
});
watch(eyeDna, (newVal) => {
  ZombieSkin.changeHead(newVal);
});
watch(shirtDna, (newVal) => {
  ZombieSkin.changeHead(newVal);
});



import HeadImg  from '../assets/zombie/head-1.png';
// <script setup lang="ts">
const zombieDnav2 = reactive({
  head: HeadImg
});
const randomizeZombie = async () => {

  zombieDnav2.head = (await import('../assets/zombie/head-2.png')).toString();

  headDna.value += 1;
  headDna.value = headDna.value > 6 ? 1 : headDna.value;

  eyeDna.value += 1;
  eyeDna.value = eyeDna.value > 6 ? 1 : eyeDna.value;

  shirtDna.value += 1;
  shirtDna.value = shirtDna.value > 6 ? 1 : shirtDna.value;
};
</script>

<template>
  <div class="zombie-container">
<!--    <img src="@/assets/zombie/head-1.png"/>-->
    <div class="zombie-parts">
      <img
          v-for="(partName, partUrl) in zombieSkin"
          :key="partUrl"
          :src="partName"
          :alt="partName"
          :class="partName"
          :style="{ filter: `hue-rotate(90deg)` }"
      />
    </div>
    <button @click="randomizeZombie">Randomize Zombie</button>
  </div>
</template>

<style scoped>
.zombie-container {
  text-align: center;
  margin-top: 20px;
}

.zombie-parts {
  position: relative;
  width: 200px;
  height: 400px;
  margin: auto;
}

.zombie-parts img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>