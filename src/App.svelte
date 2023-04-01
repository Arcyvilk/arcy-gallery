<script lang="ts">
  import Gallery from './components/Gallery.svelte';
  import Header from './components/Header.svelte';
</script>

<main>
  <Header />
  <Gallery />
</main>

<style lang="scss">
  main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
