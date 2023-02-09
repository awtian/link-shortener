<template>
  <div class="container">
    <div class="shorten-card">
      <form @submit.prevent="handleUrlSubmit">
        <input
          type="text"
          v-model="url"
          :class="{ 'input-error': emptyUrl }"
          placeholder="Shorten a link here..."
          @focus="isDirty = true"
        />
        <span v-if="emptyUrl" class="error-message">Please add a link</span>
        <button>Shorten it!</button>
      </form>
    </div>
    <div class="url-card-container">
      <UrlCard
        v-for="(short, long) in history"
        :key="short"
        :shortUrl="short"
        :longUrl="long"
      />
    </div>
  </div>
</template>

<script>
import UrlCard from "./urlshortener/UrlCard.vue";

export default {
  components: {
    UrlCard,
  },
  data: () => ({
    url: "",
    history: {},
    isDirty: false,
  }),
  created() {
    this.getHistoryFromLocalStorage();
  },
  computed: {
    emptyUrl() {
      return this.isDirty && this.url.length === 0;
    },
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
        console.log(resp);
        if (resp.ok) {
          this.url = "";
          this.isDirty = false;
          // i did this so the history would put the latest one on top
          this.history = {
            [resp.result.original_link]: resp.result.full_short_link,
            ...this.history,
          };
          this.setHistoryToLocalStorage();
        } else {
          alert(resp.error.split(",")[0]);
        }
      } else {
        this.emptyUrl = true;
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
.container {
  background-color: var(--color-bg-gray);
  padding-bottom: 30px;
  /* opacity: 0.5; */
}
.shorten-card {
  background-image: url("@/assets/images/bg-shorten-mobile.svg");
  background-repeat: no-repeat;
  background-size: 70% 80%;
  background-position: top right;
  background-color: var(--color-primary-dark-violet);
  margin: 10px;
  margin-top: 75px;
  padding: 20px;
  position: relative;
  top: -70px;
  border-radius: 10px;
}

.url-card-container {
  margin-top: -50px;
  /* margin-bottom: 100px; */
}

.error-message {
  color: var(--color-secondary-red);
  font-size: 12px;
  font-style: italic;
  font-weight: 500;
  margin: 0;
  margin-top: -5px;
}

.input-error {
  outline: 2px solid var(--color-secondary-red);
}

.input-error::placeholder {
  color: var(--color-secondary-red);
  opacity: 0.5;
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

.shorten-card input {
  margin-bottom: 0;
}

.shorten-card button {
  color: white;
  background-color: var(--color-primary-cyan);
  font-weight: 700;
  margin-top: 10px;
}
</style>
