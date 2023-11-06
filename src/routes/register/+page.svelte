<script>
	import { goto } from '$app/navigation';
	import api from '$lib/util/api';

	let userId = '';
	let password = '';
	let name = '';
	let email = '';
	let errorMessage = '';
	let showToast = false;

	const userIdRegex = /^[A-Za-z]+[A-Za-z0-9]{2,99}$/;
	const passwordRegex = /^(?=.*[\w])(?=.*\d)(?=.*[@$!%*?&])[\w\d@$!%*?&]{7,15}$/;

	async function register() {
			if (!userId || !password || !name || !email) {
					errorMessage = '모든 필드를 채워주세요.';
					showToast = true;
					return;
			}

			if (!userIdRegex.test(userId)) {
					errorMessage = '아이디가 유효하지 않습니다.';
					showToast = true;
					return;
			}

			if (!passwordRegex.test(password)) {
					errorMessage = '비밀번호가 유효하지 않습니다.';
					showToast = true;
					return;
			}

			try {
				const response = await api.post(`/user/signup`, { user_id: userId, password, name, email });

				if (response.status === 200) {
						alert(response.data.message);
						goto('/login');
				} else {
						errorMessage = '회원가입에 실패했습니다. 입력한 정보를 확인해주세요.';
						console.error(response.data.message);
						showToast = true;
				}
			} catch (error) {
					// 네트워크 에러 처리
					errorMessage = '네트워크 에러가 발생했습니다. 잠시 후 다시 시도해주세요.';
					console.error(response.data.message);
					showToast = true;
			}
	}

	function handleLogin() {
			goto('/login');
	}

	// Toast 메시지를 닫는 함수
	function closeToast() {
			showToast = false;
	}
</script>

<section class="d-flex flex-column justify-content-center align-items-center vh-100">
	<form on:submit|preventDefault={register} class="d-flex flex-column align-items-center">
			<label class="mb-3">
					아이디:
					<input type="text" bind:value={userId} required class="form-control">
			</label>
			<label class="mb-3">
					비밀번호:
					<input type="password" bind:value={password} required class="form-control">
			</label>
			<label class="mb-3">
					이름:
					<input type="text" bind:value={name} required class="form-control">
			</label>
			<label class="mb-3">
					이메일:
					<input type="email" bind:value={email} required class="form-control">
			</label>
			<div>
				<button class="btn btn-secondary me-2" on:click={handleLogin}>로그인</button>
				<button type="submit" class="btn btn-primary">회원가입</button>
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
