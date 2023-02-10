<template>
  <div class="container">
    <div class="shorten-card">
      <form class="form" @submit.prevent="handleUrlSubmit">
        <input
          type="text"
          v-model="url"
          :class="{ 'input-error': emptyUrl }"
          placeholder="Shorten a link here..."
          @focus="isDirty = true"
        />
        <span v-if="emptyUrl" class="error-message-mobile"
          >Please add a link</span
        >
        <button>Shorten it!</button>
      </form>
      <span v-if="emptyUrl" class="error-message-desktop"
        >Please add a link</span
      >
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
.input-error {
  outline: 2px solid var(--color-secondary-red);
}

.input-error::placeholder {
  color: var(--color-secondary-red);
  opacity: 0.5;
}
@media screen and (max-width: 425px) {
  .container {
    background-color: var(--color-bg-gray);
    padding-bottom: 70px;
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

  .error-message-mobile {
    color: var(--color-secondary-red);
    font-size: 12px;
    font-style: italic;
    font-weight: 500;
    margin: 0;
    margin-top: -5px;
  }
  .error-message-desktop {
    display: none;
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

@media screen and (min-width: 426px) {
  .container {
    padding: 0px 100px;
    background-color: var(--color-bg-gray);
    padding-bottom: 70px;
  }
  .shorten-card {
    height: 80px;
    background-image: url("@/assets/images/bg-shorten-desktop.svg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: top right;
    background-color: var(--color-primary-dark-violet);
    padding: 50px;
    margin-top: 100px;
    position: relative;
    top: -70px;
    border-radius: 10px;
  }

  .shorten-card input {
    width: 70%;
    padding: 10px;
    border-radius: 10px;
    /* margin-top: 5px; */
    font-size: 20px;
    height: 40px;
    border-width: 0;
  }
  .shorten-card button {
    font-size: 20px;
    height: 60px;
    width: 20%;
    border: none;
    padding: 16px 15px;
    border-width: 0;
    border-radius: 10px;
    margin: 0;
    margin-left: 1rem;
    /* margin-top: 5px; */
    cursor: pointer;
  }

  .shorten-card button:hover {
    background-color: var(--color-primary-cyan-hover);
  }
  .form {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .error-message-mobile {
    display: none;
  }

  .error-message-desktop {
    color: var(--color-secondary-red);
    font-size: 12px;
    font-style: italic;
    font-weight: 500;
    margin: 0;
    margin-left: 50px;
    margin-top: -5px;
  }
}
</style>
