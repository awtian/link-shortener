<template>
  <div class="container">
    <div class="right-desktop-container">
      <img
        width="300"
        height="auto"
        class="mobile-image"
        src="@/assets/images/illustration-working.svg"
      />
      <h1>More than just shorter links</h1>
      <p>
        Build your brand's recognition and get detailed insights on how your
        links are performing
      </p>
      <button>Get started</button>
    </div>
    <img
      width="600"
      height="400"
      class="desktop-image"
      src="@/assets/images/illustration-working.svg"
    />
  </div>
</template>

<style scoped>
@media screen and (min-width: 426px) {
  .container {
    display: flex;
    padding: 50px 0px 50px 100px;
    /* padding: 0px 0px 50px 50px; */
  }

  .container h1 {
    font-size: 56px;
    line-height: 1;
  }

  .right-desktop-container {
    padding: 0px 200px 0px 0px;
  }
  .right-desktop-container h1 {
    font-size: 68px;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .right-desktop-container button {
    border: 0;
    font-weight: 700;
    font-size: 18px;
    background-color: var(--color-primary-cyan);
    color: white;
    padding: 15px 50px;
    /* width: 50%; */
    border-radius: 2rem;
    margin-bottom: 30px;
    cursor: pointer;
  }

  .right-desktop-container button:hover {
    opacity: 0.8;
    /* background-color: var(--color-neutral-cyan); */
  }
  .right-desktop-container p {
    color: var(--color-neutral-gray);
    font-size: 16px;
    margin-top: 8px;
  }
  .mobile-image {
    display: none;
  }

  .desktop-image {
    object-fit: cover;
    object-position: 80px 0;
  }
}

@media screen and (max-width: 425px) {
  .container {
    text-align: center;
    /* padding: 10px; */
    font-weight: 500;
    margin-bottom: 110px;
  }

  .desktop-image {
    display: none;
  }
  .mobile-image {
    width: 100%;
    height: 275px;
    object-fit: cover;
    object-position: -20% 0;
  }

  .container h1 {
    margin: 0;
  }
  .container p {
    color: var(--color-neutral-gray);
    padding: 0 10px;
    font-size: 16px;
    margin-top: 8px;
  }

  .container button {
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
}
</style>
