<script lang="ts">
  import { onMount } from 'svelte'

  import AppBar from 'smelte/src/components/AppBar'
  import Button from 'smelte/src/components/Button'
  import TextField from 'smelte/src/components/TextField'
  import { Spacer } from 'smelte/src/components/Util'
  import Tooltip from 'smelte/src/components/Tooltip'
  import dark from 'smelte/src/dark'

  import Post from './components/Post.svelte'
  import { loadPosts, loadMorePosts } from './stores/posts'

  const darkMode = dark()
  let postInterval: number = 6

  let posts = []
  let currentlyDisplayedPost = 0
  let interval

  const loadNextPosts = async () => {
    const newPosts = await loadMorePosts()
    posts = [...posts, ...newPosts]
    console.log(posts)
  }

  $: post = posts[currentlyDisplayedPost]
  $: {
    if (postInterval > 1) {
      clearInterval(interval)
      interval = setInterval(() => {
        currentlyDisplayedPost += 1
        if (currentlyDisplayedPost >= posts.length - 5) {
          loadNextPosts()
        }
      }, postInterval * 1000)
    }
  }

  onMount(async () => {
    posts = await loadPosts()
    console.log(posts)
  })

</script>

<AppBar class="pl-2 pr-2">
    <TextField label="Time between posts" type="number" min="2"
               bind:value={postInterval}/>
    <Spacer/>
    <Tooltip>
        <span slot="activator">
            <Button
                    bind:value={$darkMode}
                    icon="wb_sunny"
                    small
                    flat
                    remove="p-1 h-4 w-4"
                    iconClass="text-white"
                    text
            />
        </span>
        {$darkMode ? 'Disable' : 'Enable'} dark mode
    </Tooltip>
</AppBar>
<main transition:fade={{ duration: 300 }}>
    {#if !post}
        <h2>We are currently loading our best content for you <span class="material-icons">favorite</span></h2>
    {:else}
        <Post post={post}/>
    {/if}
</main>

<style>
    h1 {
        font-size: 2em;
    }

    main {
        height: 85vh;
    }
</style>