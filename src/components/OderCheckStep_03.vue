<script>
import OrderCheckProgressComponent from "../components/OrderCheckProgressComponent.vue";
import CartItemComponent from "../components/CartItemComponent.vue";

// pinia
import { mapState, mapActions } from "pinia";
import cartStore from "../stores/CartStore.js";

export default {
  components: {
    OrderCheckProgressComponent,
    CartItemComponent,
  },
  data() {
    return {
      item: {},
      orderInfo: "",
    };
  },
  computed: {
    ...mapState(cartStore, [
      "data",
      "couponData",
      "isCartsLoading",
      "useCouponPrice",
      "OrderEstablished",
    ]),
  },
  methods: {
    ...mapActions(cartStore, [
      "getCarts",
      "deleteCarts",
      "useCoupon",
      "checkout",
    ]),
  },
  mounted() {
    // 先取得購物車資訊
    this.getCarts();
    //取得上一步驟在 localStorage 存放的使用者資料
    this.orderInfo = JSON.parse(localStorage.getItem("orderEstablished"));
  },
};
</script>

<template>{{ orderInfo }}</template>

<style lang="scss" scoped>
// 讓 /n 文字換行
.text-br {
  white-space: pre-line;
}
</style>
