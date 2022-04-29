<template>
  <div class="container py-5">
    <h4 class="mb-4">結帳</h4>
    <main class="row">
      <!-- check-left-section -->
      <section class="col-6">
        <FormTop :step="step" />
        <FormMid
          :step="step"
          :ship-infos="shipInfos"
          :initial-ship-way-id="shipWayId"
          @change-ship-way-id="changeShipWayId"
        />
        <hr />

        <!-- form control -->
        <div
          id="btn-control"
          class="control-panel d-flex justify-content-between"
        >
          <button @click="onPrevStep" class="btn btn-prev">上一步</button>
          <button @click="onNextStep" class="btn btn-next text-center">
            <span>下一步</span>
          </button>
        </div>
      </section>

      <!-- check-right-section -->
      <section class="col-5">
        <Cart
          :ship-infos="shipInfos"
          :ship-way-id="shipWayId"
        />
        <hr />
      </section>
    </main>
  </div>
</template>

<style scoped>
.btn-prev::before {
  content: "\27F5";
}
.btn-next {
  width: 125px;
  background-color: #f67599;
  color: #fff;
}
.btn-next::after {
  content: "\2192";
  padding-left: 16px;
}
</style>

<script>
import FormTop from "../components/FormTop.vue";
import FormMid from "../components/FormMid.vue";
import Cart from "../components/Cart.vue";
const dummyData = {
  shipInfos: [
    {
      id: 1,
      shipWay: "標準運送",
      shipTime: "約 3~7 個工作天",
      shipPrice: "免費",
    },
    {
      id: 2,
      shipWay: "DHL 貨運",
      shipTime: "48 小時內送達",
      shipPrice: "$500",
    },
  ],
};
export default {
  components: {
    FormTop,
    FormMid,
    Cart,
  },
  data() {
    return {
      step: 0,
      shipInfos: dummyData.shipInfos,
      shipWayId: 1,
    };
  },
  methods: {
    onPrevStep() {
      if (this.step <= 0) return;
      this.step--;
    },
    onNextStep() {
      if (this.step >= 2) return;
      this.step++;
    },
    changeShipWayId(shipWayId) {
      this.shipWayId = shipWayId;
      console.log("shipWayId", this.shipWayId);
    },
  },
};
</script>