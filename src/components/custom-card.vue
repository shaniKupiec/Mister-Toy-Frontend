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
