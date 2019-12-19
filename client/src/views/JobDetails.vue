<template>
  <div class="job-details container-fluid">Everything Goes Here</div>
</template>

<script>
export default {
  name: "JobDetails",
  mounted() {
    this.$store.dispatch("getJobById", this.$route.params.id);
  },
  methods: {},
  computed: {
    jobs() {
      return this.$store.state.activeCar;
    }
  }
};
</script>

<style>
</style>