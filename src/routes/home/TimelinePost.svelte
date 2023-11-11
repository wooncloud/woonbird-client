<script>
  export let post; // a prop to receive the post object
</script>

<style>
  /* some custom styles */
  .post {
    display: flex;
    align-items: flex-start;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }

  .post img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .post-content {
    flex: 1;
  }

  .post-title {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .post-body {
    max-width: 300px;
  }

  .post-body img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
</style>

<div class="post">
  <img src="https://i.pravatar.cc/50?u={post.userId}" alt="user" />
  <div class="post-content">
    <p class="post-title">{post.title}</p>
    <div class="post-body">
      {#if post.body.startsWith('http')}
        <img src={post.body} alt="image" />
      {:else}
        <p>{post.body}</p>
      {/if}
    </div>
  </div>
</div>
