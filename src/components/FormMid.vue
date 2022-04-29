<template>
  <div>
    <!-- 寄送地址 -->
    <template v-if="step === 0">
      <form class="part">
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="gender">稱謂</label>
            <select id="gender" class="form-control">
              <option selected>先生</option>
              <option>女士</option>
            </select>
          </div>
          <div class="form-group col-md-8">
            <label for="name">姓名</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="請輸入姓名"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="cell-phone">電話</label>
            <input
              type="password"
              class="form-control"
              id="cell-phone"
              placeholder="請輸入行動電話"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="請輸入電子郵件"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="city">縣市</label>
            <select id="city" class="form-control">
              <option value="">請選擇縣市</option>
              <option value="male">新北市</option>
              <option value="female">高雄市</option>
            </select>
          </div>

          <div class="form-group col-md-8">
            <label for="address">地址</label>
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="請輸入地址"
            />
          </div>
        </div>
      </form>
    </template>

    <!-- 運送方式 -->
    <template v-if="step === 1">
      <div class="part">
        <div
          v-for="shipInfo in shipInfos"
          :key="shipInfo.id"
          class="ship-way-wrapper"
        >
          <div class="ship-way">
            <input
              class="mr-3"
              name="ship"
              type="radio"
              :value="shipInfo.id"
              v-model="shipWayId"
            />
            <label for="" class="mt-2"
              >{{ shipInfo.shipWay }} <br />
              {{ shipInfo.shipTime }}</label
            >
          </div>
          <div class="ship-price">{{ shipInfo.shipPrice }}<br /></div>
        </div>
      </div>
    </template>

    <!-- 付款資訊 -->
    <template v-if="step === 2">
      <form class="part">
        <div class="form-row">
          <div class="form-group col-md-8">
            <label for="owner-name">持卡人姓名</label>
            <input
              type="text"
              class="form-control"
              id="owner-name"
              placeholder="John Doe"
            />
          </div>
          <div class="form-group col-md-8">
            <label for="card-number">卡號</label>
            <input
              type="text"
              class="form-control"
              id="card-number"
              placeholder="1111 2222 3333 4444"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="expiration-date">有效期限</label>
            <input
              type="password"
              class="form-control"
              id="expiration-date"
              placeholder="MM/YY"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="card-code">CVC / CCV</label>
            <input
              type="text"
              class="form-control"
              id="card-code"
              placeholder="123"
            />
          </div>
        </div>
      </form>
    </template>
  </div>
</template>

<style scoped>
.part {
  height: 300px;
}
.ship-way-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  height: 60px;
  border: 1px solid #f0f0f5;
  border-radius: 4px;
}
.ship-way {
  display: flex;
  align-items: center;
  flex-basis: 37%;
  height: 100%;
  padding-left: 15px;
}
.ship-price {
  margin-right: 34px;
  white-space: nowrap;
  font-size: 14px;
}
</style>

<script>
export default {
  data() {
    return {
      shipWayId: this.initialShipWayId,
    };
  },
  props: {
    step: {
      type: Number,
      required: true,
    },
    shipInfos: {
      type: Array,
      required: true,
    },
    initialShipWayId: {
      type: Number,
      required: true,
    },
  },
  watch: {
    shipWayId: {
      handler: function () {
        console.log("shipWayId change");
        this.$emit("change-ship-way-id", this.shipWayId);
      },
    },
  },
};
</script>