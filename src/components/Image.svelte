<script>
  import breakpoints from "smelte/src/breakpoints";

  export let mediaDetails

  const bp = breakpoints()

  const getBackgroundImage = (urls) => {
    if (!urls) return 'page-not-found.png'
    return urls.small
  }

  const getImage = (urls) => {
    if (!urls) return 'page-not-found.png'
    return $bp === 'sm' ? urls.small :
      $bp === 'md' ? urls.regular : urls.full
  }
</script>

{#if mediaDetails}
    <div class="relative h-screen w-full md:w-1/2 lg:w-2/3 pt-5 md:pt-20 pb-10">
        <div class="bg" style="background-image: url({getBackgroundImage(mediaDetails.urls)})"></div>
        <img class="object-contain" alt="Media picture" src={getImage(mediaDetails.urls)}>
    </div>
{/if}

<style>
    .bg {
        /* Add the blur effect */
        filter: blur(20px);
        -webkit-filter: blur(20px);

        width: 100%;
        height: 100%;

        /* Center and scale the image nicely */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    img {
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
    }
</style>