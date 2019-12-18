<template>
  <div class="jobs container-fluid">
    <header class="row">
      <div class="col">
        <h1>JOBS</h1>
      </div>
    </header>
    <main class="row search">
      <div class="col-12 col-md-4 mx-auto">
        <form @submit.prevent="createJob" class="text-left">
          <div class="form-group">
            <label>Company</label>
            <input class="form-control" type="text" v-model="newJob.company" placeholder="Company" />
          </div>
          <div class="form-group">
            <label>Position</label>
            <input
              class="form-control"
              type="text"
              v-model="newJob.position"
              placeholder="Position"
            />
          </div>
          <div class="form-group">
            <label>Location</label>
            <input
              class="form-control"
              type="text"
              v-model="newJob.location"
              placeholder="Location"
            />
          </div>
          <div class="form-group">
            <label>Salary</label>
            <input class="form-control" type="number" v-model="newJob.salary" placeholder="Salary" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <input
              class="form-control"
              type="text"
              v-model="newJob.description"
              placeholder="Description"
            />
          </div>
          <button class="btn btn-success" type="submit">Add Job</button>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "jobs",
  data() {
    return {
      newJob: {
        company: "",
        position: "",
        location: "",
        salary: null,
        description: ""
      }
    };
  },
  methods: {
    createJob() {
      let job = { ...newJob };
      this.$store.dispatch("createJob", job);
      this.newJob = {
        company: "",
        position: "",
        location: "",
        salary: null,
        description: ""
      };
    }
  }
};
</script>

<style></style>
