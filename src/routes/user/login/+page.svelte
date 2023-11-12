<script>
	import { goto } from '$app/navigation';
	import api from '$lib/util/api';

	let userId = '';
	let password = '';
	let errorMessage = '';
	let showToast = false;

	async function login() {
		try {
			const response = await api.post(
				`/user/login`,
				{ user_id: userId, password },
				{ withCredentials: true }
			);

			if (response.status === 200) {
				// 로그인 성공 처리
				goto('/home');
			} else {
				// 에러 처리
				errorMessage = '로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.';
				showToast = true;
			}
		} catch (error) {
			// 네트워크 에러 처리
			errorMessage = '네트워크 에러가 발생했습니다. 잠시 후 다시 시도해주세요.';
			showToast = true;
		}
	}

	function handleRegister() {
			goto('/user/register');
	}

	// Toast 메시지를 닫는 함수
	function closeToast() {
			showToast = false;
	}
</script>

<section class="d-flex flex-column justify-content-center align-items-center vh-100">
	<div class="mb-3">
		<h1 class="text-primary">woonbird</h1>
		<h3 class="d-flex justify-content-center">로그인</h3>
	</div>
	<form on:submit|preventDefault={login} class="d-flex flex-column align-items-center">
			<label class="mb-3">
					아이디:
					<input type="text" bind:value={userId} required class="form-control">
			</label>
			<label class="mb-3">
					비밀번호:
					<input type="password" bind:value={password} required class="form-control">
			</label>
			<div>
				<button type="submit" class="btn btn-primary">로그인</button>
				<button class="btn btn-secondary" on:click={handleRegister}>회원가입</button>
			</div>
	</form>

	<!-- Toast 메시지 -->
	{#if showToast}
			<div class="toast align-items-center text-white bg-danger border-0" style="position: absolute; top: 0; right: 0;" role="alert" aria-live="assertive" aria-atomic="true">
				<div class="d-flex">
						<div class="toast-body">
								{errorMessage}
						</div>
						<button type="button" class="btn-close btn-close-white me-2 m-auto" on:click={closeToast} aria-label="Close"></button>
				</div>
			</div>
	{/if}
</section>
