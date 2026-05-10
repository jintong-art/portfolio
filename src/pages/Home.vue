<template>
  <div class="home">
    <section class="intro">
      <div class="intro-row">
        <h1 class="intro-title">Li Jin Tong</h1>
        <RouterLink to="/about" class="intro-about">About me</RouterLink>
      </div>
    </section>

    <section class="featured" aria-labelledby="featured-heading">
      <div class="featured-head">
        <h2 id="featured-heading" class="featured-title">
          <span class="title-line">Portfolio</span>
        </h2>
        <div class="featured-nav" role="group" aria-label="作品轮播">
          <button
            type="button"
            class="nav-btn"
            aria-label="上一组"
            @click="scrollCarousel(-1)"
          >
            &lt;
          </button>
          <button
            type="button"
            class="nav-btn nav-btn--dark"
            aria-label="下一组"
            @click="scrollCarousel(1)"
          >
            &gt;
          </button>
        </div>
      </div>

      <div
        ref="carousel"
        class="carousel"
        tabindex="0"
        @scroll.passive="onCarouselScroll"
      >
        <RouterLink
          v-for="item in projects"
          :key="item.id"
          :to="{ name: 'WorkDetail', params: { id: item.id } }"
          class="card card-link"
        >
          <div class="card-media">
            <img :src="item.image" :alt="item.title" width="640" height="400" loading="lazy" />
          </div>
          <p v-if="item.category" class="card-category">{{ item.category }}</p>
          <h3 class="card-title">{{ item.title }}</h3>
        </RouterLink>
      </div>

      <div class="dots" role="tablist" aria-label="轮播页码">
        <button
          v-for="(_, index) in pageCount"
          :key="index"
          type="button"
          class="dot"
          :class="{ 'dot--active': index === activePage }"
          :aria-label="`第 ${index + 1} 页`"
          :aria-current="index === activePage ? 'true' : undefined"
          @click="goToPage(index)"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { portfolioWorks } from '../data/portfolioWorks.js'

export default {
  name: 'Home',
  data() {
    return {
      projects: portfolioWorks,
      activePage: 0,
      pageCount: 1,
      scrollRaf: null
    }
  },
  mounted() {
    this.updatePagination()
    window.addEventListener('resize', this.onResize, { passive: true })
    this.$nextTick(() => this.updatePagination())
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
    if (this.scrollRaf) cancelAnimationFrame(this.scrollRaf)
  },
  methods: {
    onResize() {
      this.updatePagination()
      this.syncActiveFromScroll()
    },
    getCarousel() {
      return this.$refs.carousel
    },
    updatePagination() {
      const el = this.getCarousel()
      if (!el) return
      const w = el.clientWidth
      if (w < 1) {
        this.pageCount = 1
        return
      }
      const pages = Math.ceil(el.scrollWidth / w - 0.001)
      this.pageCount = Math.max(1, pages)
    },
    syncActiveFromScroll() {
      const el = this.getCarousel()
      if (!el) return
      const w = el.clientWidth
      if (w < 1) return
      const idx = Math.round(el.scrollLeft / w)
      const last = this.pageCount - 1
      this.activePage = Math.min(last, Math.max(0, idx))
    },
    onCarouselScroll() {
      if (this.scrollRaf) cancelAnimationFrame(this.scrollRaf)
      this.scrollRaf = requestAnimationFrame(() => {
        this.syncActiveFromScroll()
        this.scrollRaf = null
      })
    },
    scrollCarousel(direction) {
      const el = this.getCarousel()
      if (!el) return
      const delta = direction * el.clientWidth * 0.92
      el.scrollBy({ left: delta, behavior: 'smooth' })
    },
    goToPage(index) {
      const el = this.getCarousel()
      if (!el) return
      const last = Math.max(0, this.pageCount - 1)
      const clamped = Math.min(Math.max(0, index), last)
      const w = el.clientWidth
      const maxScroll = Math.max(0, el.scrollWidth - w)
      const target = Math.min(maxScroll, clamped * w)
      el.scrollTo({ left: target, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.home {
  --text: #000000;
  --muted: #888888;
  --border: #d8d8d8;
  --surface: #1a1a1a;
  --page-pad: clamp(1.25rem, 4vw, 2.5rem);
  width: 100%;
  background: #ffffff;
  color: var(--text);
  padding: clamp(2.5rem, 6vw, 5rem) var(--page-pad) clamp(4rem, 10vw, 6rem);
}

.intro {
  margin-bottom: clamp(3rem, 8vw, 5.5rem);
}

.intro-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.intro-title {
  font-size: clamp(2.25rem, 5vw, 3.25rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin: 0;
}

.intro-about {
  flex-shrink: 0;
  font-size: clamp(0.9375rem, 2vw, 1rem);
  font-weight: 500;
  color: #888888;
  text-decoration: none;
  transition: opacity 0.2s ease, color 0.2s ease;
}

.intro-about:hover {
  color: #666666;
  opacity: 0.92;
}

.featured-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: clamp(2rem, 5vw, 3rem);
}

.featured-title {
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.12;
  margin: 0;
}

.title-line {
  display: block;
}

.featured-nav {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
  padding-top: 0.25rem;
}

.nav-btn {
  width: 2.75rem;
  height: 2.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  line-height: 1;
  border: 1px solid var(--border);
  background: #ffffff;
  color: var(--text);
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease,
    opacity 0.2s ease;
}

.nav-btn:hover {
  opacity: 0.85;
}

.nav-btn--dark {
  background: var(--surface);
  color: #ffffff;
  border-color: var(--surface);
}

.carousel {
  display: flex;
  gap: clamp(1rem, 2.5vw, 1.5rem);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 0.5rem;
  margin: 0 calc(-1 * var(--page-pad));
  padding-left: var(--page-pad);
  padding-right: var(--page-pad);
  scrollbar-width: thin;
}

.carousel:focus-visible {
  outline: 2px solid #000000;
  outline-offset: 4px;
}

.card-link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: box-shadow 0.25s ease;
}

.card-link:focus-visible {
  outline: 2px solid #000000;
  outline-offset: 3px;
}

.card-link:hover {
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.1);
}

.card {
  flex: 0 0 min(100%, 22rem);
  scroll-snap-align: start;
  background: #ffffff;
  border-radius: 2px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

@media (min-width: 640px) {
  .card {
    flex: 0 0 calc((100% - 1.25rem) / 2);
    max-width: none;
  }
}

@media (min-width: 1024px) {
  .card {
    flex: 0 0 calc((100% - 3 * 1.25rem) / 4);
  }
}

.card-media {
  aspect-ratio: 16 / 10;
  background: #f4f4f4;
  overflow: hidden;
}

.card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.card:hover .card-media img {
  transform: scale(1.03);
}

.card-category {
  font-size: 0.8125rem;
  color: var(--muted);
  margin: 1rem 1.25rem 0.35rem;
}

.card-media + .card-title {
  margin-top: 1rem;
}

.card-title {
  font-size: 1.0625rem;
  font-weight: 600;
  line-height: 1.45;
  margin: 0 1.25rem 1.25rem;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.dots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background: #d0d0d0;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.dot:hover {
  transform: scale(1.1);
}

.dot--active {
  background: #555555;
}
</style>
