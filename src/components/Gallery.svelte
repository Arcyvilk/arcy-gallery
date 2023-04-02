<script lang="ts">
  import Thumbnail from './Thumbnail/Thumbnail.svelte';
  import type { ImgTile, Options } from '../types';
  import { getOptions } from '../utils/getOptions';
  import Preview from './Preview.svelte';

  export let images: ImgTile[];
  export let options: Options;

  let fixedOptions;
  let selectedImage: ImgTile = undefined;

  const selectImage = (img: ImgTile) => {
    selectedImage = img;
  };
  const close = () => (selectedImage = undefined);

  $: {
    fixedOptions = getOptions(options);
  }
</script>

<div class="gallery">
  {#each images as img}
    <Thumbnail
      img="{img}"
      --max-height="{fixedOptions.maxHeight}px"
      selectImage="{selectImage}" />
  {/each}
  <Preview image="{selectedImage}" onClose="{close}" />
</div>

<style lang="scss" scoped>
  .gallery {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
</style>
