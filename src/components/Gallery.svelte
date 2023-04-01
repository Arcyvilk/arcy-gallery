<script lang="ts">
  import Thumbnail from './Thumbnail.svelte';
  import { getColumns } from '../utils/getColumns';

  export let images: string[];
  export let nrOfColumns: number;

  const columns = getColumns(images, nrOfColumns);
</script>

<div class="gallery">
  {#each columns as col}
    <div class="column">
      {#each col as img}
        <Thumbnail src="{img}" />
      {/each}
    </div>
  {/each}
</div>

<style lang="scss" scoped>
  @use '../styles/globals.scss' as *;
  .gallery {
    display: flex;
    flex-direction: row;
    gap: 8px;
    max-width: 1500px;
  }
  .column {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
</style>
