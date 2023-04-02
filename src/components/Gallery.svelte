<script lang="ts">
  import Thumbnail from './Thumbnail/Thumbnail.svelte';
  import type { ImgTile, Options } from '../types';
  import { getOptions } from '../utils/getOptions';

  export let images: ImgTile[];
  export let options: Options;

  let fixedOptions;

  $: {
    fixedOptions = getOptions(options);
  }
</script>

<div class="gallery">
  {#each images as img}
    <Thumbnail img="{img}" --max-height="{fixedOptions.maxHeight}px" />
  {/each}
</div>

<style lang="scss" scoped>
  .gallery {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
</style>
