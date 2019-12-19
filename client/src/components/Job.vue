<template>
  <div class="job card" style="width: 18rem;">
    <div class="card-body">
      <router-link :to="{name: 'jobDetails', params: {id: jobData.id}}">
        <h3 class="card-title">{{jobData.company}}</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <p class="m-0">Position:</p>
            <h4>{{jobData.position}}</h4>
          </li>
          <li class="list-group-item">Location: {{jobData.location}}</li>
          <li class="list-group-item">Salary: {{jobData.salary}}</li>
        </ul>
      </router-link>
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

<style scoped>
.card {
  background: none;
  font-family: "Playfair Display", serif;
  font-weight: bold;
}

.list-group-item {
  background: none;
  border-bottom: 2px solid black;
}
</style>