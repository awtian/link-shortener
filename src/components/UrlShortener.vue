<template>
  <div>
    <h1>URL Shortener</h1>
    <form @submit.prevent="handleUrlSubmit">
      <input type="text" v-model="url" />
      <button>Shorten it!</button>
    </form>
    <ul>
      <li v-for="(short, long) in history" :key="short">
        {{ short + " : " + long }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    url: "",
    history: {},
  }),
  created() {
    this.getHistoryFromLocalStorage();
  },
  methods: {
    getHistoryFromLocalStorage() {
      const stringifiedHistory = localStorage.getItem("history");
      if (stringifiedHistory) {
        this.history = JSON.parse(localStorage.getItem("history"));
      }
    },
    setHistoryToLocalStorage() {
      localStorage.setItem("history", JSON.stringify(this.history));
    },
    async handleUrlSubmit() {
      if (this.url.length) {
        const resp = await this.apiShortenUrl(this.url);
        if (resp.ok) {
          this.history[resp.result.original_link] = resp.result.full_short_link;
          this.setHistoryToLocalStorage();
        } else {
          alert(resp.error.split(",")[0]);
        }
      } else {
        alert("url cant be empty");
      }
    },
    async apiShortenUrl(longUrl) {
      return await fetch(
        `https://api.shrtco.de/v2/shorten?url=${longUrl}`
      ).then((resp) => resp.json());
    },
  },
};
</script>

<style scoped></style>
