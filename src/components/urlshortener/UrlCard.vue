<template>
  <div class="url-card">
    <p>{{ conciseLongUrl }}</p>
    <hr class="splitter" />
    <div class="url-button-container">
      <a class="short-url" :href="shortUrl" target="_blank">{{ shortUrl }}</a>
      <div class="button-container">
        <button :class="buttonClass" @click="handleCopyUrl">{{ text }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    text: "Copy",
    buttonClass: "button-idle",
  }),
  props: {
    longUrl: { type: String, required: true },
    shortUrl: { type: String, required: true },
  },
  computed: {
    conciseLongUrl() {
      if (this.longUrl.length > 30) {
        return this.longUrl.slice(0, 25) + "...";
      } else {
        return this.longUrl;
      }
    },
  },
  methods: {
    async handleCopyUrl() {
      await this.copyURL();
      this.text = "Copied!";
      this.buttonClass = "button-clicked";
      setTimeout(() => {
        this.text = "Copy";
        this.buttonClass = "button-idle";
      }, 500);
    },
    async copyURL() {
      try {
        await navigator.clipboard.writeText(this.shortUrl);
      } catch ($e) {
        alert("Something went wrong with our copying module");
      }
    },
  },
};
</script>

<style scoped>
.url-card {
  background-color: white;
  margin: 10px;
  border-radius: 10px;
}
.url-card button {
  width: calc(100% - 20px);
  padding: 10px;
  border-width: 0;
  margin: 10px 5px 15px 5px;
  font-family: "Poppins";
  border-radius: 5px;
  color: white;
  font-weight: 700;
}
.button-idle {
  background-color: var(--color-primary-cyan);
}

.button-clicked {
  background-color: var(--color-primary-dark-violet);
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

.short-url {
  color: var(--color-primary-cyan);
}

@media screen and (max-width: 425px) {
  .url-card hr {
    padding: 0;
    margin: 0;
    color: var(--color-neutral-gray);
    opacity: 0.1;
  }

  .short-url {
    padding-bottom: 0 !important;
  }
  .button-container {
    text-align: center;
  }
}

@media screen and (min-width: 426px) {
  .url-card {
    display: flex;
    height: 75px;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding: 0px 20px;
    border-radius: 5px;
  }

  .url-button-container {
    display: flex;
    gap: 20px;
    justify-content: space-around;
    align-items: center;
  }

  .url-button-container button {
    width: 150px;
    cursor: pointer;
  }
  .splitter {
    display: none;
  }
}
</style>
