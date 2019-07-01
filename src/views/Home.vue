<template>
  <div class="home">
    <!-- <div id="box">
      <div class="front">正面</div>
      <div class="back">反面</div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style lang="less" scoped>
#box {
  width: 200px;
  height: 200px;
  position: relative;
  perspective: 500;
}
#box div {
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  // perspective: 1000;
  backface-visibility: hidden;
  transition: all 1s;
}
#box .front {
  background: #f00;
}
#box .back {
  background: #00f;
  transform: rotateX(180deg);
}
#box:hover .front {
  transform: rotateX(180deg);
}
#box:hover .back {
  transform: rotateX(360deg);
}
</style>
