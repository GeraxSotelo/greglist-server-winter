<template>
  <div class="jobs container-fluid">
    <header class="row">
      <div class="col">
        <h1>JOBS</h1>
      </div>
    </header>
    <main class="row search">
      <div class="col-12 col-md-4 mb-3 mx-auto">
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
      <div class="col-12 classifieds">
        <div class="row mt-3">
          <div class="col-6 col-md-3" v-for="job in jobs" :key="job.id">
            <job-component :jobData="job" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import JobComponent from "@/components/Job";
export default {
  name: "jobs",
  mounted() {
    this.$store.dispatch("getJobs");
  },
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
      let job = { ...this.newJob };
      this.$store.dispatch("createJob", job);
      this.newJob = {
        company: "",
        position: "",
        location: "",
        salary: null,
        description: ""
      };
    }
  },
  computed: {
    jobs() {
      return this.$store.state.jobs;
    }
  },
  components: {
    JobComponent
  }
};
</script>

<style>
.classifieds {
  background: url("http://www.lantidote-paris.com/wp-content/uploads/2013/04/bg-1.jpg")
    no-repeat center;
}
.card {
  border: 2px solid black;
}
</style>
