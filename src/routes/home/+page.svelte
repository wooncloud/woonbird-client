<svelte:head>
	<title>home</title>
	<meta name="description" content="Home this app" />
</svelte:head>

<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import api from '$lib/util/api';
  import TimelinePost from './TimelinePost.svelte'; 

  let posts = writable([]);
  let modal = false;
  let text = '';
  let image = '';
  
  onMount(async () => {
    // 임시 api
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    posts.set(data.slice(0, 10)); 
  });

  function handleSubmit() {
    const newPost = {
      id: Math.floor(Math.random() * 1000),
      title: text,
      body: image,
      userId: 1,
    };
    posts.update((posts) => [newPost, ...posts]);
    modal = false;
    text = '';
    image = '';
  }

  function handleCancel() {
    text = '';
    image = '';
    modal = false;
  }
</script>

<style>
  .input-group {
    margin-bottom: 10px;
  }
</style>

<div class="container">
  <div class="timeline">
    {#each $posts as post}
      <TimelinePost {post} />
    {/each}
  </div>

  <!-- modal -->
  <div class="modal fade" id="writeModal" tabindex="-1" aria-labelledby="writeModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="writeModalLabel">새 글 작성</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="input-group mb-3">
              <span class="input-group-text">글</span>
              <textarea class="form-control" aria-label="글" bind:value={text} placeholder="글을 입력하세요"></textarea>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">이미지</span>
              <input type="url" class="form-control" aria-label="이미지" bind:value={image} placeholder="이미지 URL을 입력하세요" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" on:click={handleCancel}>
            취소
          </button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" on:click={handleSubmit}>
            게시
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
