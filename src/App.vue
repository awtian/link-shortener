<script>
import NavigationBar from "@/components/NavigationBar.vue";
import UrlShortener from "@/components/UrlShortener.vue";
import MainIntroduction from "@/components/MainIntroduction.vue";

export default {
  components: { UrlShortener, NavigationBar, MainIntroduction },
};
</script>

<template>
  <div>
    <header>
      <NavigationBar />
    </header>

    <main>
      <MainIntroduction />
      <UrlShortener />
    </main>

    <footer>Hi footer</footer>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
