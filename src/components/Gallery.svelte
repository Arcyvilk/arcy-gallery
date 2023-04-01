<script lang="ts">
  import Thumbnail from './Thumbnail.svelte';

  import img01 from '../_data/01.jpg';
  import img02 from '../_data/02.jpg';
  import img03 from '../_data/03.jpg';
  import img04 from '../_data/04.jpg';
  import img05 from '../_data/05.jpg';
  import img06 from '../_data/06.jpg';
  import img07 from '../_data/07.jpg';
  import img08 from '../_data/08.jpg';

  const allImgs = [
    img03,
    img02,
    img05,
    img04,

    img01,
    img06,
    img08,
    img07,

    img07,
    img04,
    img03,
    img01,

    img08,
    img05,
    img02,
    img06,
  ];

  const breakpoints = [
    Math.round(allImgs.length * 0.25),
    Math.round(allImgs.length * 0.5),
    Math.round(allImgs.length * 0.75),
  ];

  // split the images to chunks of random sizes from 1 to 3
  const column = [
    allImgs.slice(0, breakpoints[0]),
    allImgs.slice(breakpoints[0], breakpoints[1]),
    allImgs.slice(breakpoints[1], breakpoints[2]),
    allImgs.slice(breakpoints[2]),
  ];
</script>

<div class="gallery">
  {#each column as col}
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
