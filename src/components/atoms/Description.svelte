<script lang="ts">
  export let description: string;
</script>

<p class="description">{description}</p>

<style lang="scss" scoped>
  @use '../../styles/globals.scss' as *;
  .description {
    all: unset;
    font-size: 0.8em;
    font-family: $font-raleway;
  }
</style>
