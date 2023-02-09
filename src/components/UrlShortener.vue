<template>
  <div>
    <div class="shorten-card">
      <form @submit.prevent="handleUrlSubmit">
        <input type="text" v-model="url" placeholder="Shorten a link here..." />
        <button>Shorten it!</button>
      </form>
    </div>
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

<style scoped>
.shorten-card {
  background-image: url("@/assets/images/bg-shorten-mobile.svg");
  background-repeat: no-repeat;
  background-size: 70% 80%;
  background-position: top right;
  background-color: var(--color-primary-dark-violet);
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
}
.shorten-card input,
.shorten-card button {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  border-width: 0;
  margin: 5px 0px;
  font-family: "Poppins";
  border-radius: 5px;
}

.shorten-card button {
  color: white;
  background-color: var(--color-primary-cyan);
  font-weight: 700;
}
</style>
