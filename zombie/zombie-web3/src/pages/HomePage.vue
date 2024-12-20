<template>
  <div class="home-page-box">
    <div class="zombie-preview">
      <div class="zombie-char">
        <div class="zombie-parts head-visible-1 eye-visible-1 shirt-visible-1">
          <img
              v-for="(partUrl,partName) in zombieSkin"
              :key="partName"
              :src="partUrl"
              :alt="partName"
              :class="partName"
              :style="{ filter: `hue-rotate(90deg)` }"
          />
        </div>
      </div>

      <!--      <ZombieFactory></ZombieFactory>-->
    </div>
    <div class="zombie-toggle">

    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch, onUnmounted } from 'vue';
import { ZombieSkin } from '../assets/zombie/ZombieSkin.ts';

export default defineComponent({
  name: 'HomePage',
  setup() {
    // DNA values for different parts of the zombie
    const headDna = ref(1);
    const eyeDna = ref(1);
    const shirtDna = ref(1);

    // Get zombie skin configuration (assuming ZombieSkin is properly set up)
    const zombieSkin = ZombieSkin.getConfig();

    // Watch changes in the DNA values and update zombie skin accordingly
    watch(headDna, (newVal) => {
      ZombieSkin.changeHead(newVal);
    });
    watch(eyeDna, (newVal) => {
      ZombieSkin.changeEye(newVal);
    });
    watch(shirtDna, (newVal) => {
      ZombieSkin.changeShirt(newVal);
    });

    // Timer setup to randomize the zombie's appearance
    let time = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const startTimer = () => {
      timeoutId = setInterval(() => {
        time += 1;
        randomizeZombie();
      }, 1000);
    };

    const stopTimer = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    };

    // Clean up the timer when component is unmounted
    onUnmounted(() => {
      stopTimer();
    });

    startTimer();

    // Function to randomize zombie parts
    const randomizeZombie = () => {
      headDna.value += 1;
      headDna.value = headDna.value > 6 ? 1 : headDna.value;

      eyeDna.value += 1;
      eyeDna.value = eyeDna.value > 6 ? 1 : eyeDna.value;

      shirtDna.value += 1;
      shirtDna.value = shirtDna.value > 6 ? 1 : shirtDna.value;
    };

    return {
      zombieSkin,
      // randomizeZombie,
    };
  },
});
</script>
<style scoped>


.zombie-loading {
  background: url('@/assets/zombiebg/zombierun.png') left center;
  background-size: cover;
  height: 287px;
  width: 192px;
  position: absolute;
  left: 16vh;
  animation: play 0.7s steps(24) infinite;
}

@keyframes play {
  100% {
    background-position: -4608px;
  }
}

.home-page-box {
  background-image: url("@/assets/zombie/background.png");
  background-size: cover;
  //background-size: contain;
  min-height: 100%;
  background-repeat: repeat;
}

.zombie-preview {
  height: 95vh;
  width: 55vh;
  background-size: cover;
  background-image: url('@/assets/zombie/complete-bg.png')
}

.zombie-char {
  position: absolute;
  margin-left: 2vh;
  margin-top: 36vh;

}

.share-page .zombie-parts {
  margin-left: 4vh;
}

.zombie-battle-component .zombie-parts {
  margin-left: -1vh;
}

.zombie-parts {
  position: relative;

  .head {
    width: 28vh;
    position: absolute;
    left: 13vh;
    top: -4vh;
  }

  .eye {
    width: 13vh;
    position: absolute;
    left: 23vh;
    top: 8vh;
  }


  .shirt {
    width: 13vh;
    position: absolute;
    left: 15.6vh;
    top: 13vh;
  }
}
.mouth {
  width: 6vh;
  position: absolute;
  left: 26.6vh;
  top: 15vh;
}

.torso {
  width: 13vh;
  position: absolute;
  left: 15.6vh;
  top: 13vh;
}

.thighLeft {
  width: 6vh;
  position: absolute;
  left: 17.3vh;
  top: 22vh;
}

.thighRight {
  width: 6vh;
  position: absolute;
  left: 20.4vh;
  top: 22vh;
}

.legCat {
  width: 10vh;
  position: absolute;
  left: 15.4vh;
  top: 18vh;
}

.handLeft {
  width: 4vh;
  position: absolute;
  left: 24.3vh;
  top: 19vh;
}

.handRight {
  width: 4vh;
  position: absolute;
  left: 28.4vh;
  top: 19vh;
}

.forearmLeft {
  width: 4vh;
  position: absolute;
  left: 22.3vh;
  top: 20vh;
}

.forearmRight {
  width: 4vh;
  position: absolute;
  left: 26.4vh;
  top: 20vh;

}

.armLeft {
  width: 6vh;
  position: absolute;
  left: 19.3vh;
  top: 16vh;
}

.armRight {
  width: 6vh;
  position: absolute;
  left: 23.4vh;
  top: 16vh;
}

.legLeft {
  width: 4vh;
  position: absolute;
  left: 18.3vh;
  top: 27vh;
}

.legRight {
  width: 3.3vh;
  position: absolute;
  left: 22.3vh;
  top: 27.6vh;
}

.feetLeft {
  width: 4vh;
  position: absolute;
  left: 18.3vh;
  top: 30vh;
}

.feetRight {
  width: 3.3vh;
  position: absolute;
  left: 22.3vh;
  top: 30.3vh;
}


.zombie-name {
  text-transform: uppercase;
  font-weight: bold;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2)
}

.zombie-details {
  position: absolute;
  bottom: 5%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  text-align: center;
  font-size: 24px;
  color: white;
  font-weight: bold;
}

.zombie-name {
  font-weight: bold;
}

.hide-overflow-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

</style>