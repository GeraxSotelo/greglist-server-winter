<template>
  <div class="home container-fluid">
    <header class="row">
      <div class="col">
        <h1>
          C
          <img alt="Vue logo" src="../assets/logo.png" />rs
        </h1>
      </div>
    </header>
    <main class="row search">
      <div class="col-12 col-md-4 mx-auto">
        <form @submit.prevent="createCar" class="text-left">
          <div class="form-group">
            <label>Make</label>
            <input class="form-control" type="text" v-model="newCar.make" placeholder="Make" />
          </div>
          <div class="form-group">
            <label>Model</label>
            <input class="form-control" type="text" v-model="newCar.model" placeholder="Model" />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input class="form-control" type="number" v-model="newCar.price" placeholder="Price" />
          </div>
          <div class="form-group">
            <label>Year</label>
            <input class="form-control" type="number" v-model="newCar.year" placeholder="Year" />
          </div>
          <div class="form-group">
            <label>Image URL</label>
            <input class="form-control" type="text" v-model="newCar.imgUrl" placeholder="Image URL" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <input
              class="form-control"
              type="text"
              v-model="newCar.description"
              placeholder="description"
            />
          </div>
          <button class="btn btn-success" type="submit">Add Car</button>
        </form>
      </div>
      <div class="col-12 mt-4">
        <div class="row cars">
          <div v-show="car.sold == false" class="col-6 col-md-3" v-for="car in cars" :key="car.id">
            <!-- Props are data passed from parent to child with :propName="DATA" -->
            <car-component :carData="car" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import CarComponent from "@/components/Car";
export default {
  name: "home",
  mounted() {
    //runs when the component is first put (mounted) on the dom
    this.$store.dispatch("getCars");
  },
  data() {
    return {
      newCar: {
        make: "",
        model: "",
        price: 0,
        year: 0,
        imgUrl: "",
        description: ""
      }
    };
  },
  methods: {
    createCar() {
      let car = { ...this.newCar }; //NOTE makes a copy of the car data object
      this.$store.dispatch("createCar", car);
      this.newCar = {
        make: "",
        model: "",
        price: 0,
        year: 0,
        imgUrl: "",
        description: ""
      };
    }
  },
  computed: {
    cars() {
      return this.$store.state.cars;
    },
    unsoldCars() {
      this.cars.filter(c => !car.sold);
    }
  },
  components: {
    CarComponent
  }
};
</script>
<style>
h1 img {
  transform: rotate(180deg);
  height: 0.9em;
  margin-top: -0.3em;
  margin-left: -0.3em;
}

.form-group {
  margin-bottom: 0.25em;
}
</style>
