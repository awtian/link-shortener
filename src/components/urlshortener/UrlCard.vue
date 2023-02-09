<template>
  <div class="url-card">
    <p>{{ longUrl }}</p>
    <hr />
    <a class="short-url" :href="shortUrl" target="_blank">{{ shortUrl }}</a>
    <div class="button-container">
      <button>Copy</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    longUrl: { type: String, required: true },
    shortUrl: { type: String, required: true },
  },
};
</script>

<style scoped>
.url-card {
  background-color: white;
  margin: 10px;
  border-radius: 10px;
}

.url-card p,
.url-card a {
  padding: 10px;
  display: block;
  margin: 0;
  text-decoration: none;
}

.url-card a:hover {
  text-decoration: underline;
}

.url-card hr {
  padding: 0;
  margin: 0;
  color: var(--color-neutral-gray);
  opacity: 0.1;
}

.button-container {
  text-align: center;
}

.short-url {
  padding-bottom: 0 !important;
  color: var(--color-primary-cyan);
}
.url-card button {
  width: calc(100% - 20px);
  padding: 10px;
  border-width: 0;
  margin: 10px 5px 15px 5px;
  font-family: "Poppins";
  border-radius: 5px;
  color: white;
  background-color: var(--color-primary-cyan);
  font-weight: 700;
}
</style>
