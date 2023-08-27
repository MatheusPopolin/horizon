<template>
  <div class="home">
    <img src="../assets/img/horizon-logo.png" alt="3C Plus" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home{
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  animation: bounce-in-top 1s both;
}

.home img {
  height: 250px;
}

@keyframes bounce-in-top {
  0% {
    transform: translateY(-500px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateY(-65px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(-28px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateY(-8px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
}
</style>
