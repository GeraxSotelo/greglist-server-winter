<template>
  <div class="job card" style="width: 18rem;">
    <div class="card-body">
      <h3 class="card-title">{{jobData.company}}</h3>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <h4>{{jobData.position}}</h4>
        </li>
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
.card {
  background: url("http://www.lantidote-paris.com/wp-content/uploads/2013/04/bg-1.jpg")
    no-repeat center;
  font-family: "Playfair Display", serif;
  font-weight: bold;
}

.list-group-item {
  background: none;
}
</style>