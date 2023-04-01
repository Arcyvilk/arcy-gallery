<script lang="ts">
  import { onMount } from 'svelte';

  export let src: string;
  let loaded = false;
  let thisThumbnail;

  onMount(() => {
    thisThumbnail.onload = () => {
      loaded = true;
    };
  });
</script>

<img class="thumbnail" src="{src}" alt="Thumbnail" />

<style lang="scss" scoped>
  @use '../styles/globals.scss' as *;
  .thumbnail {
    z-index: 1;
    max-width: $size;
    flex: 1 1 auto;
    object-fit: cover;
    cursor: pointer;
    transition: transform 500ms, box-shadow 500ms;
    background-color: rgb(32, 32, 32);
    border: 2px solid #0b0b0b;

    &:hover {
      z-index: 2;
      transform: scale(1.1);
      box-shadow: 0 0 50px #0b0b0b;
    }
  }
</style>
