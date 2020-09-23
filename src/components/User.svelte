<script>
  import breakpoints from 'smelte/src/breakpoints'

  export let mediaDetails
  export let userInfos
  export let post

  const bp = breakpoints()

  $: differenceInDays =
    new Date().getDate() - new Date(post.created).getDate()

  const getProfileImage = (urls) => {
    if (!urls) return 'page-not-found.png'
    return $bp === 'sm' ? urls.small :
      $bp === 'md' ? urls.medium : urls.large
  }

  const getUserName = () => {
    if (userInfos.first_name && userInfos.last_name)
        return `${userInfos.first_name} ${userInfos.last_name}`
    return userInfos.username
  }
</script>

{#if mediaDetails && userInfos}
    <div id="user" class="relative sm:h-screen sm:w-full md:w-1/2 lg:w-1/3 flex pt-20 pb-10">
        <div class="sm:ml-auto sm:mr-2 sm:flex sm:flex-col sm:justify-between sm:h-screen w-full">
            <div class="w-full text-right pr-2">
                <span>{getUserName()}</span>
                <img alt="Profile picture" src={getProfileImage(userInfos.profile_images)}
                     class="inline rounded-full w-16 h-16"/>
            </div>
            <div class="w-full pl-2">
                <h3>{post.title}</h3>
                <div>{post.description ?? ""}</div>
            </div>
            <div class="w-full pl-2 pt-4">
                <div><span class="material-icons pr-1">thumb_up</span>{post.likes} {post.likes > 1 ? 'people' : 'person'} liked this post</div>
                <div>Posted {differenceInDays < 1 ? 'today' : differenceInDays < 2 ? 'yesterday' : `${differenceInDays} days ago`}</div>
            </div>
        </div>
    </div>
{/if}

<style>
    .material-icons {
        font-size: 16px;
    }

    @media (min-width: 767px) {
        #user {
            border-left: black 1px solid;
        }
    }

    #user {
        flex-direction: column;
    }
</style>