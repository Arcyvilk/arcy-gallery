<script lang="ts">
  import type { ImgTile } from '../../types';
  import ThumbnailDetails from './ThumbnailDetails.svelte';
  import ThumbnailImage from './ThumbnailImage.svelte';

  export let img: ImgTile;
  export let selectImage: (img: ImgTile) => void;
  let isHovered = false;
</script>

<button
  class="thumbnail"
  on:mouseenter="{() => (isHovered = true)}"
  on:mouseleave="{() => (isHovered = false)}"
  on:click="{() => selectImage(img)}">
  <ThumbnailImage img="{img}" />
  <ThumbnailDetails img="{img}" isHovered="{isHovered}" />
</button>

<style lang="scss" scoped>
  @use '../../styles/globals.scss' as *;
  .thumbnail {
    all: unset;
    z-index: 1;
    position: relative;
    height: var(--max-height);
    flex: 1 1 auto;
    transition: transform 500ms, box-shadow 500ms;
    grid-row-end: var(--span); // won't work cause it's flex, not grid
    background-color: rgb(32, 32, 32);
    border: 2px solid #0b0b0b;

    &:hover {
      z-index: 2;
      transform: scale(1.1);
      box-shadow: 0 0 50px #0b0b0b;
    }
  }
</style>
