<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import api from '$lib/util/api';

    let user;

    // 페이지 로드 시 사용자 정보를 가져옵니다.
    onMount(async () => {
        try {
            const response = await api.get(`/user/me`);
            user = response.data;
        } catch (e) {
            if (e.response.status === 401) {
                alert(e.response.data.message);
                goto('/login');
            }
        }
    });

    async function logout() {
        await api.post(`/user/logout`);
        goto('/login');
    }
</script>

<section class="d-flex flex-column justify-content-center align-items-center vh-100">
    <h1 class="mb-3">환영합니다, {user?.name}님!</h1>
    <button class="btn btn-primary" on:click={logout}>로그아웃</button>
</section>
