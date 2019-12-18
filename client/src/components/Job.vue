<template>
  <div class="job card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{jobData.company}}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{jobData.position}}</li>
        <li class="list-group-item">{{jobData.location}}</li>
        <li class="list-group-item">{{jobData.salary}}</li>
        <li class="list-group-item">{{jobData.description}}</li>
      </ul>
      <a href="#" class="card-link pt-2">Apply</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Job",
  props: {
    jobData: {
      type: Object,
      required: true
    }
  },
  methods: {}
};
</script>

<style>
</style>