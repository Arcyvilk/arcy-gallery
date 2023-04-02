<script lang="ts">
  import type { ImgTile } from '../../types';
  export let img: ImgTile;
</script>

<img class="thumbnail__img" src="{img.thumbnail}" alt="Thumbnail" />

<style lang="scss" scoped>
  @use '../../styles/globals.scss' as *;
  .thumbnail__img {
    z-index: 1;
    object-fit: cover;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    box-sizing: border-box;
    cursor: pointer;
  }
</style>
