<template>
  <div class="container">
    <h2>Advanced Statistics</h2>
    <p class="subtitle">
      Track how your links are performing across the web with our advanced
      statistics dashboard.
    </p>
    <FeatureCard
      title="Brand Recognition"
      description="Boost your brand recognition with each click. Generic links don't mean a
      thing. Branded links help instil confidence in your content."
    >
      <template #icon>
        <img src="@/assets/images/icon-brand-recognition.svg" />
      </template>
    </FeatureCard>
    <FeatureCard
      title="Detailed Records"
      description="Gain insight into who is clicking your links. Knowing how and where people engage with your content helps inform better decisions."
      :verticalLine="true"
    >
      <template #icon>
        <img src="@/assets/images/icon-detailed-records.svg" />
      </template>
    </FeatureCard>
    <FeatureCard
      title="Fully Customizable"
      description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
      :verticalLine="true"
    >
      <template #icon>
        <img src="@/assets/images/icon-fully-customizable.svg" />
      </template>
    </FeatureCard>
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
  padding-bottom: 30px;
  text-align: center;
  /* opacity: 0.5; */
}

.container h2 {
  margin-top: 0;
  margin-bottom: 5px;
}

.subtitle {
  font-size: 14px;
  color: var(--color-neutral-gray);
  margin: 0px 20px;
  margin-bottom: 100px;
}
</style>
