<script>
export default {
  props: {
    item: { type: Object, require: true },
    editMode: { type: Boolean, default: true },
  },
  emits: ["cartItemClicked", "deleteItemClicked"],
  methods: {
    deleteItemClickedEmit() {
      if (this.editMode) {
        this.$emit("deleteItemClicked");
      }
    },
    cartItemClickedEmit() {
      if (this.editMode) {
        this.$emit("cartItemClicked");
      }
    },
  },
};
</script>

<template>
  <div class="position-relative">
    <button
      v-if="editMode"
      type="button"
      class="deleteBtn position-absolute end-0 badge rounded-pill text-bg-dark"
      @click="deleteItemClickedEmit()"
    >
      -
    </button>
    <div
      class="d-flex rounded shadow-sm p-3 my-3"
      @click="cartItemClickedEmit()"
    >
      <div class="imgContainer me-2">
        <img
          class="w-100 h-100 object-fit-cover rounded"
          :src="item.product.imageUrl"
          :alt="item.title"
        />
      </div>
      <br />
      <div class="contentContainer position-relative">
        <span
          ><h4 class="d-inline-block">{{ item.product.title }} &nbsp;</h4>
          <h6 class="badge rounded-pill text-bg-primary">
            {{ item.product.category }}
          </h6></span
        >
        <h6>{{ item.product.content }}</h6>
        <p>選擇數量： {{ item.qty }}</p>
      </div>
      <h5 class="position-absolute bottom-0 end-0 m-2">NT$ {{ item.total }}</h5>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.imgContainer {
  width: 120px;
  height: 120px;
}
.checkProductInfo {
  width: 500px;
}
</style>
