<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-wrapper">
        <h1 class="hero-title">设计师 & 研究者</h1>
        <p class="hero-subtitle">探索创意，推动创新</p>
        <p class="hero-description">
          通过设计和研究，我创造有意义的作品。关注用户体验、产品策略和前沿思想。
        </p>
        <div class="hero-cta">
          <RouterLink to="/works" class="btn btn-primary">查看作品</RouterLink>
          <a href="#contact" @click.prevent="scrollToContact" class="btn btn-secondary">联系我</a>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact-section">
      <div class="section-wrapper">
        <div class="contact-content">
          <h2 class="section-title">让我们合作</h2>
          <p class="contact-subtitle">有项目或想法想要讨论？很乐意聊聊</p>

          <div class="contact-methods">
            <a href="mailto:your.email@example.com" class="contact-method">
              <span class="method-icon">✉️</span>
              <span>your.email@example.com</span>
            </a>
            <a href="https://twitter.com" target="_blank" class="contact-method">
              <span class="method-icon">𝕏</span>
              <span>Twitter / X</span>
            </a>
            <a href="https://linkedin.com" target="_blank" class="contact-method">
              <span class="method-icon">in</span>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com" target="_blank" class="contact-method">
              <span class="method-icon">⚙️</span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    scrollToContact() {
      const element = document.getElementById('contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  background: #4a90e2;
}

/* Hero Section */
.hero {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
}

.hero-wrapper {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #ffffff;
  letter-spacing: -0.5px;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1.5rem;
  font-weight: 300;
}

.hero-description {
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.78);
  margin-bottom: 2.5rem;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.8rem 1.8rem;
  border-radius: 6px;
  border: none;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: #ffffff;
  color: #357abd;
}

.btn-primary:hover {
  background: #f3f8ff;
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.35);
}

.btn-secondary:hover {
  border-color: #ffffff;
  background: rgba(255, 255, 255, 0.14);
}

/* Section General */
.section {
  padding: 5rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.section-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
  letter-spacing: -0.5px;
}

/* Contact Section */
.contact-section {
  background: linear-gradient(135deg, #3f86da 0%, #2f6fb7 100%);
}

.contact-content {
  text-align: center;
  padding: 1rem;
}

.contact-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
  font-weight: 300;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.contact-method {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 12px 30px rgba(18, 52, 96, 0.18);
}

.contact-method:hover {
  border-color: rgba(255, 255, 255, 0.32);
  background: rgba(255, 255, 255, 0.14);
  transform: translateY(-4px);
}

.method-icon {
  font-size: 1.5rem;
}

.contact-method span:last-child {
  color: #ffffff;
  font-weight: 500;
  font-size: 0.95rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .hero-cta {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 300px;
  }

  .contact-methods {
    grid-template-columns: 1fr;
  }
}
</style>
