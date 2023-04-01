<script lang="ts">
  export let src: string;
</script>

<div class="thumbnail">
  <img class="thumbnail__img" src="{src}" alt="Thumbnail" />
</div>

<style lang="scss" scoped>
  @use '../styles/globals.scss' as *;
  .thumbnail {
    z-index: 1;
    position: relative;
    height: $size;
    flex: 1 1 auto;
    transition: transform 500ms, box-shadow 500ms;

    &:hover {
      z-index: 2;
      transform: scale(1.1);
      box-shadow: 0 0 50px #0b0b0b;
    }

    &__img {
      z-index: 1;
      object-fit: cover;
      width: 100%;
      height: 100%;
      vertical-align: middle;
      background-color: rgb(32, 32, 32);
      border: 5px solid #0b0b0b;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
</style>
