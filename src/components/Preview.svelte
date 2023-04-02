<script lang="ts">
  import { scale } from 'svelte/transition';
  import type { ImgTile } from '../types';
  import Description from './atoms/Description.svelte';
  import Title from './atoms/Title.svelte';

  export let image: ImgTile = undefined;
  export let onClose: () => void;
</script>

{#if image}
  <div
    class="preview"
    on:click="{onClose}"
    on:keypress="{onClose}"
    transition:scale="{{ start: 0.3 }}">
    <div class="preview__left">
      <img class="preview__img" src="{image.url}" alt="{image.title}" />
    </div>
    <div class="preview__right">
      <Title title="{image.title}" />
      <Description description="{image.description}" />
    </div>
  </div>
{/if}

<style lang="scss" scoped>
  .preview {
    display: flex;
    position: absolute;
    inset: 0;
    z-index: 3;
    width: 100vw;
    height: 100vh;
    background-color: #0b0b0bcc;
    box-sizing: border-box;
    &__img {
      box-shadow: 0 0 50px 20px #0b0b0b;
      border: 5px solid #000000;
    }
    &__left {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1 1 50%;
      box-sizing: border-box;
    }
    &__right {
      display: flex;
      flex-direction: column;
      flex: 1 1 50%;
      padding-left: 24px;
      box-sizing: border-box;
      justify-content: center;
    }
  }
</style>
