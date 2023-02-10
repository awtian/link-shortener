<template>
  <div class="card-container" :class="cardContainerClass">
    <!-- <div v-if="verticalLine" class="vl"></div> -->
    <div class="circle" :class="{ vl: line }">
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
    line: { default: false, type: Boolean },
    topgap: { default: 0, type: Number },
  },
  computed: {
    cardContainerClass() {
      return {
        [`gap-${this.topgap}`]: true,
      };
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 426px) {
  .card-container {
    width: 30%;
    height: 200px;
    text-align: left !important;
    padding: 100px 10px 0px 10px;
    margin: 0px 15px;
  }

  .title {
    /* margin-top: -20px; */
    margin-left: 1em;
  }

  .description {
    font-size: 16px;
  }
  .circle {
    position: absolute;
    top: -37px;
    left: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 75px;
    height: 75px;
    background-color: var(--color-primary-dark-violet);
  }

  .gap-0 {
    margin-top: 0px;
  }
  .gap-1 {
    margin-top: 50px;
  }

  .gap-2 {
    margin-top: 100px;
  }
}

@media screen and (max-width: 425px) {
  .vl:before {
    content: "";
    position: absolute;
    height: 50px;
    border-right: 6px solid var(--color-primary-cyan);
    top: 0;
    margin-top: -40px;
    z-index: -1;
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
  .description {
    font-size: 14px;
  }

  .card-container {
    margin-top: 0px;
    margin: 0px 15px;
  }
}
.card-container {
  position: relative;
  background-color: white;
  text-align: center;
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
}
</style>
