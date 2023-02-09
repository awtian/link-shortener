<template>
  <div class="container">
    <img class="logo" src="@/assets/images/logo-white.svg" />
    <div class="submenu-container">
      <p class="submenu-title">Features</p>
      <a href="#"><p class="submenu-item">Link Shortening</p></a>
      <a href="#"><p class="submenu-item">Branded Links</p></a>
      <a href="#"><p class="submenu-item">Analytics</p></a>
    </div>
    <div class="submenu-container">
      <p class="submenu-title">Resources</p>
      <a href="#"><p class="submenu-item">Blog</p></a>
      <a href="#"><p class="submenu-item">Developers</p></a>
      <a href="#"><p class="submenu-item">Support</p></a>
    </div>
    <div class="submenu-container">
      <p class="submenu-title">Company</p>
      <a href="#"><p class="submenu-item">About</p></a>
      <a href="#"><p class="submenu-item">Our Team</p></a>
      <a href="#"><p class="submenu-item">Careers</p></a>
      <a href="#"><p class="submenu-item">Contact</p></a>
    </div>
    <div class="submenu-container">
      <a href="#"
        ><img class="icon" src="@/assets/images/icon-facebook.svg"
      /></a>
      <a href="#"
        ><img class="icon" src="@/assets/images/icon-twitter.svg"
      /></a>
      <a href="#"
        ><img class="icon" src="@/assets/images/icon-pinterest.svg"
      /></a>
      <a href="#"
        ><img class="icon" src="@/assets/images/icon-instagram.svg"
      /></a>
    </div>
  </div>
</template>

<style scoped>
.logo {
  fill: white;
  margin-bottom: 20px;
}
.container {
  text-align: center;
  background-color: var(--color-bg-dark-footer);
  color: white;
  padding-top: 50px;
}

.submenu-container {
  padding-bottom: 20px;
}

.submenu-container a {
  text-decoration: none;
}

.submenu-title {
  font-size: 16px;
  font-weight: 700;
}

.submenu-item {
  font-size: 14px;
  color: var(--color-neutral-gray);
  margin: 5px 0px;
}

.submenu-item:hover {
  text-decoration: underline;
}

.icon {
  margin: 15px;
}
</style>
