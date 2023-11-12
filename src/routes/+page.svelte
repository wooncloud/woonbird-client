<script>
	import { goto } from '$app/navigation';

	function handleLogin() {
			goto('/user/login');
	}

	function handleRegister() {
			goto('/user/register');
	}
</script>

<section class="d-flex flex-column justify-content-center align-items-center vh-100">
	<div class="mb-3">
			<h1 class="text-primary">woonbird</h1>
	</div>
	<div>
			<button class="btn btn-primary me-2" on:click={handleLogin}>로그인</button>
			<button class="btn btn-secondary" on:click={handleRegister}>회원가입</button>
	</div>
</section>
