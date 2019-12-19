<template class="bg-success">
  <div class="car-details container-fluid">
    <header class="row">
      <div class="col">
        <router-link :to="{ name: 'home' }">
          <h1>
            C
            <img alt="Vue logo" src="../assets/logo.png" />rs
          </h1>
        </router-link>
      </div>
    </header>
    <main>
      <div class="row">
        <div class="col">
          <div class="card mb-3 mt-3" style="max-width: 100%;">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img :src="car.imgUrl" class="card-img" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title">{{car.year}} {{car.make}} {{car.model}}</h3>
                  <p class="card-text">${{car.price}}</p>
                  <p class="card-text">{{car.description}}</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "CarDetails",
  mounted() {
    this.$store.dispatch("getCarById", this.$route.params.id);
  },
  computed: {
    car() {
      return this.$store.state.activeCar;
    }
  }
};
</script>

<style></style>
