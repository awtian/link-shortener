<template>
  <div class="card-container">
    <!-- <div v-if="verticalLine" class="vl"></div> -->
    <div class="circle" :class="{ vl: verticalLine }">
      <slot name="icon"> </slot>
    </div>
    <h3 class="title">{{ title }}</h3>
    <p class="description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: { required: true, type: String },
    description: { required: true, type: String },
    verticalLine: { required: true, type: Boolean },
  },
};
</script>

<style scoped>
.card-container {
  position: relative;
  background-color: white;
  text-align: center;
  margin: 0px 30px;
  margin-top: 0px;
  border-radius: 10px;
  margin-bottom: 80px;
  padding-bottom: 20px;
  z-index: 3;
}

.title {
  margin-top: -20px;
}
.description {
  padding: 0px 25px;
  color: var(--color-neutral-gray);
  font-size: 14px;
}
.circle {
  position: relative;
  top: -40px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  background-color: var(--color-primary-dark-violet);
}

.vl:before {
  content: "";
  position: absolute;
  height: 50px;
  border-right: 6px solid var(--color-primary-cyan);
  top: 0;
  margin-top: -40px;
  z-index: -1;
}
</style>
