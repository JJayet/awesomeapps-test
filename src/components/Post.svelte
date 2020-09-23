<script>
  import { onMount } from 'svelte'

  import { getMediaDetails } from '../stores/medias'
  import { getUserInfos } from '../stores/users'

  import Image from './Image.svelte'
  import User from './User.svelte'

  export let post

  let mediaDetails
  let userInfos

  onMount(async () => {
    mediaDetails = await getMediaDetails(post.mediaId)
    userInfos = await getUserInfos(post.user.username)
  })
</script>

<div>
    <Image mediaDetails={mediaDetails} />
    <User mediaDetails={mediaDetails} userInfos={userInfos} post={post} />
</div>

<style>
    div {
        display: flex;
        flex-direction: row;
    }

    @media (max-width: 639px) {
        div {
            flex-direction: column-reverse;
        }
    }
</style>
