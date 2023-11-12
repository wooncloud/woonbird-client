<script>
  import { goto } from '$app/navigation';
  import api from '$lib/util/api';

  async function logout() {
    await api.post(`/user/logout`);
    goto('/user/login');
  }
</script>

<style>
  section {
    display: flex;
  }

  /* add some styles for the sidebar */
  .sidebar {
    position: sticky;
    top: 20px;
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .sidebar button {
    margin: 10px;
  }
</style>

<div class="container">
  <section>
    <!-- add a sidebar element -->
    <div class="sidebar">
      <!-- add a write button -->
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#writeModal">
        글쓰기
      </button>
      <!-- add a profile button -->
      <button class="btn btn-secondary" on:click={() => location.href = '/user/info'}>
        프로필
      </button>
      <button class="btn btn-secondary" on:click={logout}>로그아웃</button>
    </div>

    <!-- slot for the timeline -->
    <slot />
  </section>
</div>
