<script lang="ts">
  import type { ImgTile } from '../../types';
  import ThumbnailDetails from './ThumbnailDetails.svelte';
  import ThumbnailImage from './ThumbnailImage.svelte';

  export let img: ImgTile;
  let isHovered = false;
</script>

<div
  class="thumbnail"
  on:mouseenter="{() => (isHovered = true)}"
  on:mouseleave="{() => (isHovered = false)}">
  <ThumbnailImage img="{img}" />
  <ThumbnailDetails img="{img}" isHovered="{isHovered}" />
</div>

<style lang="scss" scoped>
  @use '../../styles/globals.scss' as *;
  .thumbnail {
    z-index: 1;
    position: relative;
    height: var(--max-height);
    flex: 1 1 auto;
    transition: transform 500ms, box-shadow 500ms;
    grid-row-end: var(--span); // won't work cause it's flex, not grid
    background-color: rgb(32, 32, 32);
    border: 5px solid #0b0b0b;

    &:hover {
      z-index: 2;
      transform: scale(1.1);
      box-shadow: 0 0 50px #0b0b0b;
    }
  }
</style>
