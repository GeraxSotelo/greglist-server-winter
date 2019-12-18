<template>
  <div class="job card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">job</h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">Some quick example text.</p>
      <a href="#" class="card-link">Apply</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Job",
  props: {
    jobData: {
      type: Object,
      required: true;
    }
  },
  methods: {}
};
</script>

<style>
</style>