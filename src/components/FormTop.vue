<template>
  <div id="step-control" class="stepper-panel">
    <div class="stepper-container d-flex justify-content-between mb-5">
      <!-- 1 寄送地址 -->
      <div class="step d-flex align-items-center">
        <div v-show="step === 0" class="circle-container active mr-2">1</div>
        <div
          v-show="step === 1 || step === 2"
          class="circle-container checked mr-2"
        ></div>
        <div class="label-container">寄送地址</div>
      </div>
      <div class="connect-line active"></div>

      <!-- 2 運送方式 -->
      <div class="step d-flex align-items-center">
        <div v-show="step === 0" class="circle-container mr-2">2</div>
        <div v-show="step === 1" class="circle-container active mr-2">2</div>
        <div v-show="step === 2" class="circle-container checked mr-2"></div>
        <div class="label-container">運送方式</div>
      </div>
      <div v-show="step === 0" class="connect-line"></div>
      <div v-show="step === 1 || step === 2" class="connect-line active"></div>

      <!-- 3 付款資訊 -->
      <div class="step d-flex align-items-center">
        <div v-show="step === 0 || step === 1" class="circle-container mr-2">
          3
        </div>
        <div v-show="step === 2" class="circle-container active mr-2">3</div>
        <div class="label-container">付款資訊</div>
      </div>
    </div>

    <h3 v-show="step === 0" class="mb-4">寄送地址</h3>
    <h3 v-show="step === 1" class="mb-4">運送方式</h3>
    <h3 v-show="step === 2" class="mb-4">付款資訊</h3>
  </div>
</template>

<style scoped>
.stepper-container {
  height: 32px;
}
.circle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid #afb1bd;
  border-radius: 50%;
  color: #afb1bd;
}
.circle-container.active {
  background-color: black;
  color: white;
}
.circle-container.checked {
  background-color: black;
  color: white;
}
.circle-container.checked::after {
  content: "\2714";
  color: white;
}
.connect-line {
  width: 12%;
  position: relative;
}
.connect-line::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 2px;
  background: #f0f0f5;
}
.connect-line.active::before {
  background-color: black;
}
</style>



<script>
export default {
  data() {
    return {
      // step: 0,
    };
  },
  props: {
    step: {
      type: Number,
      required: true,
    },
  },
};
</script>