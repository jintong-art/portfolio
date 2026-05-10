<template>
  <div class="app">
    <main class="main">
      <RouterView />
    </main>

    <footer class="footer">
      <div class="footer-inner">
        <p>© 2026 Li Jin Tong</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  color: #000000;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    sans-serif;
}

.main {
  flex: 1;
}

.footer {
  border-top: 1px solid #eeeeee;
  padding: 1.5rem clamp(1.25rem, 4vw, 2.5rem);
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-inner p {
  margin: 0;
  font-size: 0.8125rem;
  color: #888888;
}
</style>
