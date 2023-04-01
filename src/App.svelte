<script lang="ts">
  import Gallery from './components/Gallery.svelte';
  import { images } from './images';
</script>

<main>
  <header class="header">
    <h1 class="header__title">ARCYGALLERY</h1>
  </header>
  <div style="width: 100%; max-width: 1500px">
    <Gallery images="{images}" />
  </div>
</main>

<style lang="scss">
  main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header {
    z-index: 3;
    position: sticky;
    inset: 0;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    box-shadow: 0 0 10px black;
    gap: 16px;

    &__title {
      all: unset;
      font-size: 2em;
    }

    &__input {
      font-size: 2em;
      width: 100px;
    }
  }
</style>
