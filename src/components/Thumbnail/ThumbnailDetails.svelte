<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { ImgTile } from '../../types';
  import Description from '../atoms/Description.svelte';
  import Title from '../atoms/Title.svelte';

  export let img: ImgTile;
  export let isHovered = false;
</script>

{#if isHovered}
  <div class="details" transition:fade="{{ duration: 200 }}">
    <Title title="{img.title}" />
    <Description description="{img.description}" />
  </div>
{/if}

<style lang="scss" scoped>
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
  }
</style>
