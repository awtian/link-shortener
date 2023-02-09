<template>
  <div class="container">
    <img class="logo" src="@/assets/images/logo.svg" />
    <div class="desktop-nav">
      <div class="main-nav">
        <span>Features</span>
        <span>Pricing</span>
        <span>Resources</span>
      </div>

      <div class="right-nav">
        <span>Login</span>
        <button>Sign up</button>
      </div>
    </div>

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
@media screen and (max-width: 425px) {
  .desktop-nav {
    display: none;
  }
  .container {
    margin-top: 25px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
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

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
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
}

@media screen and (min-width: 426px) {
  .container {
    width: 100%;
    display: flex;
    padding: 50px;
    align-items: center;
  }

  .logo {
    margin-right: 10px;
  }

  .desktop-nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: var(--color-neutral-gray);
  }

  .main-nav span {
    font-size: 14px;
    margin: 0px 10px;
  }

  .main-nav span:hover,
  .right-nav span:hover {
    cursor: pointer;
    color: black;
  }
  .right-nav span {
    margin: 20px;
    /* float: right; */
    /* align-self: flex-end; */
  }

  .right-nav button {
    cursor: pointer;
    border: 0;
    font-weight: 700;
    font-size: 14px;
    background-color: var(--color-primary-cyan);
    color: white;
    padding: 10px 15px;
    /* width: 50%; */
    border-radius: 2rem;
    /* margin-bottom: 30px; */
  }
}
</style>
