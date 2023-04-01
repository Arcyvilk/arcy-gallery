<script lang="ts">
  import Gallery from './components/Gallery.svelte';
  import Header from './components/Header.svelte';
  import { images } from './images';

  const nrOfColumns = 4;
</script>

<main>
  <Header />
  <Gallery nrOfColumns="{nrOfColumns}" images="{images}" />
</main>

<style lang="scss">
  main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
