<script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import bs from 'bootstrap/dist/js/bootstrap.min.js?url';
  import bsBundle from 'bootstrap/dist/js/bootstrap.bundle.min.js?url';
</script>
<svelte:head>
  <script src={bs}></script>
  <script src={bsBundle}></script>
</svelte:head>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    max-width: 768px;
    margin: 0 auto;
    padding: 20px;
  }

  @media (max-width: 768px) {
    main {
      padding: 10px;
    }
  }
</style>
