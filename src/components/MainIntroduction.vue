<template>
  <div class="container">
    <img
      width="300"
      height="auto"
      style="
        width: 100%;
        height: 275px;
        object-fit: cover;
        object-position: -20% 0;
      "
      src="@/assets/images/illustration-working.svg"
    />
    <h1>More than just shorter links</h1>
    <p>
      Build your brand's recognition and get detailed insights on how your links
      are performing
    </p>
    <button>Get started</button>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  /* padding: 10px; */
  font-weight: 500;
}

.container p {
  color: var(--color-neutral-gray);
  padding: 0 20px;
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
</style>
