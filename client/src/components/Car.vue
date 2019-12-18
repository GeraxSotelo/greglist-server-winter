<template>
  <div class="car card" :class="{ greyscale: carData.sold }" style="width: 18rem;">
    <router-link :to="{ name: 'carDetails', params: { id: carData.id } }">
      <img :src="carData.imgUrl" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ carMakeUpperCase }}</h5>
        <p class="card-text">{{ carData.model }}</p>
      </div>
    </router-link>
    <button class="btn btn-primary" @click="sold">SOLD</button>
  </div>
</template>

<script>
export default {
  name: "Car",
  props: ["carData"], //NOTE props come from parents
  computed: {
    carMakeUpperCase() {
      return this.carData.make.toUpperCase();
    }
  },
  methods: {
    sold() {
      this.$store.dispatch("sold", this.carData.id);
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100%;
}
.greyscale {
  filter: grayscale(1);
}
</style>
