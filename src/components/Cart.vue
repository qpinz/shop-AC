<template>
  <div class="cart">
    <div class="cart-container px-3">
      <h4>購物籃</h4>
      <div v-for="product in products" :key="product.id" class="cart-card">
        <img :src="require(`../assets/AC-photo-${product.id}.png`)" alt="" />
        <div class="product-info" data-price="3999">
          <h5>{{ product.name }}</h5>
          <div class="amount-area">
            <i
              @click="onMinusOneCount(product.id, product.eachPrice)"
              class="fas fa-minus"
              >-</i
            >
            <p>{{ product.count }}</p>
            <i
              @click="onAddOneCount(product.id, product.eachPrice)"
              class="fas fa-plus"
            >
              +
            </i>
          </div>
          <h5 class="product-total-price">
            {{ product.totalPriceByOneProduct | toCurrency }}
          </h5>
        </div>
      </div>

      <div class="product-price">
        <p>運費</p>
        <p>{{ shipWayId === 1 ? "免費" : 500 | toCurrency }}</p>
      </div>
      <div class="product-price">
        <p>小計</p>
        <p class="total-price">{{ totalPrice | toCurrency }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart {
  height: 100%;
}
.cart-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  border: 1px solid #afb1bd;
  border-radius: 8px;
}
.cart-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.product-info {
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  width: 50%;
  height: 90%;
}
.amount-area {
  display: flex;
  justify-content: space-between;
  width: 80%;
}
.amount-area i {
  width: 26px;
  height: 26px;
  background-color: #f0f0f5;
  border-radius: 50%;
  font-size: 16px;
  text-align: center;
}
img {
  margin-right: 10px;
  width: 100px;
  height: 100px;
}
.product-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  height: 50px;
  border-top: 1px solid #f0f0f5;
}
</style>

<script>
const dummyData = {
  products: [
    {
      id: 1,
      name: "破壞補釘修身牛仔褲",
      image: "../assets/AC-photo-1.png",
      count: 1,
      eachPrice: 3999,
      totalPriceByOneProduct: 3999,
    },
    {
      id: 2,
      name: "刷色直筒牛仔褲",
      image: "../assets/AC-photo-2.png",
      count: 1,
      eachPrice: 1299,
      totalPriceByOneProduct: 1299,
    },
  ],
};
export default {
  data() {
    return {
      products: dummyData.products,
      totalPrice: 5298,
    };
  },
  props: {
    shipInfos: {
      type: Array,
      required: true,
    },
    shipWayId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onAddOneCount(id, eachPrice) {
      this.products[id - 1].count++;
      this.products[id - 1].totalPriceByOneProduct += eachPrice;
      this.totalPrice += eachPrice;
    },
    onMinusOneCount(id, eachPrice) {
      if (this.products[id - 1].count <= 0) return;
      this.products[id - 1].count--;
      this.products[id - 1].totalPriceByOneProduct -= eachPrice;
      this.totalPrice -= eachPrice;
    },
  },
  filters: {
    toCurrency(value) {
      if (typeof value !== "number") {
        return value;
      }
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      });
      return formatter.format(value);
    },
  },
  watch: {
    shipWayId: {
      handler: function () {
        if (this.shipWayId === 1) {
          this.totalPrice -= 500;
        } else {
          this.totalPrice += 500;
        }
      },
    },
  },
};
</script>