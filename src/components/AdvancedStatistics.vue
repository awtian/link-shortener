<template>
  <div class="container">
    <h2>Advanced Statistics</h2>
    <p class="subtitle">
      Track how your links are performing across the web with <br />
      our advanced statistics dashboard.
    </p>
    <hr class="horizontal-line" />
    <div class="feature-card-container">
      <FeatureCard
        title="Brand Recognition"
        description="Boost your brand recognition with each click. Generic links don't mean a
        thing. Branded links help instil confidence in your content."
        topgap="0"
      >
        <template #icon>
          <img src="@/assets/images/icon-brand-recognition.svg" />
        </template>
      </FeatureCard>
      <FeatureCard
        title="Detailed Records"
        description="Gain insight into who is clicking your links. Knowing how and where people engage with your content helps inform better decisions."
        :line="true"
        topgap="1"
      >
        <template #icon>
          <img src="@/assets/images/icon-detailed-records.svg" />
        </template>
      </FeatureCard>
      <FeatureCard
        title="Fully Customizable"
        description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        :line="true"
        topgap="2"
      >
        <template #icon>
          <img src="@/assets/images/icon-fully-customizable.svg" />
        </template>
      </FeatureCard>
    </div>
  </div>
</template>

<script>
import FeatureCard from "./advancedstatistics/FeatureCard.vue";

export default {
  components: { FeatureCard },
};
</script>

<style scoped>
.container {
  background-color: var(--color-bg-gray);
  padding-bottom: 10px;
  text-align: center;
  /* opacity: 0.5; */
}

.container h2 {
  margin-top: 0;
  margin-bottom: 5px;
}

.subtitle {
  font-size: 16px;
  color: var(--color-neutral-gray);
  margin: 0px 20px;
  margin-bottom: 100px;
}

.horizontal-line {
  display: none;
}

@media screen and (min-width: 426px) {
  .feature-card-container {
    padding: 0px 100px;
    display: flex;
  }

  .container {
    text-align: center;
  }

  .container h2 {
    font-size: 36px;
  }

  .horizontal-line {
    position: relative;
    border: 5px solid var(--color-primary-cyan);
    top: 175px;
    display: block;
    margin: 0px 120px;
  }
}
</style>
