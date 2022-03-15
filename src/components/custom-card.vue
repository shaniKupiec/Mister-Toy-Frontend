<template>
  <article class="custom-card flex flex-col gap-1 items-center justify-between">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="default"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </article>
</template>

<style scoped>
.custom-card {
  padding: 1em;
  border-radius: 5px;
  width: 345px;
}

.custom-card header {
  font-size: 2rem;
}

.custom-card main {
  text-align: center;
}

.custom-card footer {
  font-size: 1rem;
}
</style>
