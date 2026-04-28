<template>
  <div class="app">
    <!-- Header / Navigation -->
    <header class="header">
      <div class="header-wrapper">
        <RouterLink to="/" class="logo">LiJinTong</RouterLink>
        <nav class="nav-menu">
          <RouterLink to="/" class="nav-item">首页</RouterLink>
          <RouterLink to="/works" class="nav-item">作品</RouterLink>
          <RouterLink to="/about" class="nav-item">关于</RouterLink>
        </nav>
      </div>
    </header>

    <!-- Page Content -->
    <main class="main-content">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-wrapper">
        <p>&copy; 2024 Li Jin Tong. All rights reserved.</p>
        <p class="footer-text">Designed & Built with Vue.js</p>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  background: #0f0f0f;
  color: #e0e0e0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(15, 15, 15, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.header-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;
}

.logo:hover {
  color: #4a90e2;
}

.nav-menu {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav-item {
  text-decoration: none;
  color: #b0b0b0;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.3rem;
}

.nav-item:hover {
  color: #fff;
}

.nav-item.router-link-active {
  color: #4a90e2;
  border-bottom-color: #4a90e2;
}

/* Main Content */
.main-content {
  flex: 1;
}

/* Footer */
.footer {
  background: rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2rem;
  margin-top: auto;
}

.footer-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-wrapper p {
  color: #808080;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.footer-text {
  font-size: 0.85rem;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-menu {
    gap: 1.5rem;
    font-size: 0.9rem;
  }

  .header-wrapper {
    padding: 1rem 1.5rem;
  }
}
</style>
