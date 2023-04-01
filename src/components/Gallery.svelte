<script lang="ts">
  import Thumbnail from './Thumbnail.svelte';
  import { getColumns } from '../utils/getColumns';

  export let images: string[];
  export let maxColumns: number = undefined;

  let columns: string[][];

  $: {
    columns = maxColumns ? getColumns(images, maxColumns) : [images];
  }
</script>

<div class="gallery">
  {#each columns as col}
    {#each col as img}
      <Thumbnail src="{img}" />
    {/each}
  {/each}
</div>

<style lang="scss" scoped>
  .gallery {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
</style>
