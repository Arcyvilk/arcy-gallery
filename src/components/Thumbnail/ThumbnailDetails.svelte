<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { ImgTile } from '../../types';

  export let img: ImgTile;
  export let isHovered = false;
</script>

{#if isHovered}
  <div class="details" transition:fade="{{ duration: 200 }}">
    <h3 class="details__title">{img.title}</h3>
    <p class="details__description">{img.description}</p>
  </div>
{/if}

<style lang="scss" scoped>
  @use '../../styles/globals.scss' as *;
  .details {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 100%;
    padding: 4px 12px;
    box-sizing: border-box;
    background-color: #0b0b0bcc;
    pointer-events: none;

    &__title {
      all: unset;
      font-size: 1.3em;
      font-weight: 600;
    }
    &__description {
      all: unset;
      font-size: 0.8em;
      font-family: $font-raleway;
    }
  }
</style>
