<svelte:head>
	<title>User</title>
	<meta name="description" content="User this app" />
</svelte:head>

<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import api from '$lib/util/api';
  import TimelinePost from '../../../home/TimelinePost.svelte';

  let user = {}; // 사용자 정보를 저장할 객체
  let posts = []; // 사용자의 게시물을 저장할 배열
  let likes = []; // 사용자가 좋아요한 게시물을 저장할 배열
  let tab = 'posts'; // 현재 선택된 탭을 저장할 변수

  onMount(async () => {
    // const response = await api.get('/user/me');
    // user = response.data;

    // const postsResponse = await api.get(`/posts?userId=${user.id}`);
    // posts = postsResponse.data;

    // const likesResponse = await api.get(`/likes?userId=${user.id}`);
    // likes = likesResponse.data;
  });

  function editProfile() {
    goto('/user/edit');
  }

  function changeTab(value) {
    tab = value;
  }
</script>

<style>
  .profile {
    display: flex;
    align-items: center;
    margin: 10px;
  }

  .profile img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .profile-info {
    display: flex;
    flex-direction: column;
  }

  .profile-name {
    font-weight: bold;
    font-size: 1.5rem;
  }

  .profile-id {
    color: #666;
    margin-bottom: 10px;
  }

  .tab-buttons {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .tab-button {
    border: none;
    background: none;
    color: #333;
    cursor: pointer;
    padding: 10px;
  }

  .tab-button.active {
    font-weight: bold;
    border-bottom: 2px solid blue;
  }
</style>

<div class="container">
	<div class="profile">
		<img src={user.profileImage} alt="user" />
		<div class="profile-info">
			<p class="profile-name">{user.name}</p>
			<p class="profile-id">@{user.id}</p>
			<button class="btn btn-secondary" on:click={editProfile}>프로필 수정</button>
		</div>
	</div>
	<!-- 탭 버튼 -->
	<ul class="nav nav-tabs" id="myTab" role="tablist">
		<li class="nav-item" role="presentation">
			<button class="nav-link active" id="posts-tab" data-bs-toggle="tab" data-bs-target="#posts" type="button" role="tab" aria-controls="posts" aria-selected="true">내 게시물</button>
		</li>
		<li class="nav-item" role="presentation">
			<button class="nav-link" id="likes-tab" data-bs-toggle="tab" data-bs-target="#likes" type="button" role="tab" aria-controls="likes" aria-selected="false">마음에 들어요</button>
		</li>
	</ul>
	<!-- 탭 내용 -->
	<div class="tab-content" id="myTabContent">
		<div class="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
			<!-- 내 게시물을 보여준다 -->
			{#if tab === 'posts'}
			내 게시물
				<!-- {#each posts as post}
					<TimelinePost {post} />
				{/each} -->
			{:else if tab === 'likes'}
			마음에 들어요
				<!-- {#each likes as like}
					<TimelinePost {like.post} />
				{/each} -->
			{/if}
		</div>
	</div>
</div>
