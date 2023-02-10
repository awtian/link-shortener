<template>
  <div class="boost-link">
    <h3>Boost your links today</h3>
    <button>Get started</button>
  </div>
</template>

<style scoped>
.boost-link button {
  border: 0;
  font-weight: 700;
  font-size: 18px;
  background-color: var(--color-primary-cyan);
  color: white;
  padding: 15px;
  width: 50%;
  border-radius: 2rem;
  margin-bottom: 30px;
}

.boost-link button:hover {
  background-color: var(--color-primary-cyan-hover);
  cursor: pointer;
}

.boost-link {
  background-color: var(--color-primary-dark-violet);
  color: white;
  text-align: center;
}

@media screen and (max-width: 425px) {
  .boost-link {
    background-image: url("@/assets/images/bg-boost-mobile.svg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: top right;
    padding: 50px 20px;
  }
}

@media screen and (min-width: 426px) {
  .boost-link {
    padding: 30px 0px;
    background-image: url("@/assets/images/bg-boost-desktop.svg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: top right;
  }

  .boost-link h3 {
    font-size: 48px;
    margin-bottom: 24px;
  }

  .boost-link button {
    width: 200px;
  }
}
</style>
