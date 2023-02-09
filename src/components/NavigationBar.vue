<template>
  <div class="container">
    <img class="logo" src="@/assets/images/logo.svg" />
    <label @click="toggleMobileMenu" class="nav-icon" for="nav-menu1">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  <transition name="fade">
    <div v-if="showMobileMenu" class="mobile-menu">
      <div>
        <p><a>Features</a></p>
        <p><a>Pricing</a></p>
        <p><a>Resources</a></p>
        <hr />
        <p><a>Login</a></p>
        <button>Sign Up</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    showMobileMenu: false,
  }),
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
}
.logo {
  padding: 10px;
}

.mobile-menu {
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 83vw;
  background-color: var(--color-primary-dark-violet);
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  text-align: center;
}

.mobile-menu div {
  padding: 0 10px;
}

.mobile-menu p {
  font-weight: 700;
  padding: 10px;
}
.mobile-menu hr {
  color: var(--color-neutral-gray);
  opacity: 0.1;
}

.mobile-menu button {
  border: 0;
  font-weight: 700;
  font-size: 18px;
  background-color: var(--color-primary-cyan);
  color: white;
  padding: 15px;
  width: 100%;
  border-radius: 2rem;
  margin-bottom: 30px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.nav-icon {
  padding: 10px;
  cursor: pointer;
}
.nav-icon span {
  display: block;
  margin: 5px;
  height: 3px;
  width: 25px;
  background: rgb(144, 143, 154);
}
</style>
