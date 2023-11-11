<script>
</script>

<div class="app">
	<main>
		<slot />
	</main>

	<footer>
	</footer>
</div>

<style>
  /* add some styles for the layout */
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    max-width: 768px; /* set the maximum width to 768px */
    margin: 0 auto; /* center the main content */
    padding: 20px; /* add some padding */
  }

  footer {
    background-color: #f0f0f0;
    padding: 10px;
    text-align: center;
  }

  /* use media queries to adjust the layout for mobile screens */
  @media (max-width: 768px) {
    main {
      padding: 10px; /* reduce the padding */
    }
  }
</style>
