<template>
  <div class="works">
    <header class="page-head">
      <h1 class="page-title">作品</h1>
      <p class="page-desc">精选项目与过程记录</p>
    </header>

    <div class="works-inner">
      <div class="grid">
        <RouterLink
          v-for="work in works"
          :key="work.id"
          :to="{ name: 'WorkDetail', params: { id: work.id } }"
          class="work-card"
        >
          <div class="media">
            <img :src="work.image" :alt="work.title" width="640" height="360" loading="lazy" />
          </div>
          <div class="body">
            <p v-if="work.tags.length" class="tags-inline">{{ work.tags.join(' · ') }}</p>
            <h2 class="work-title">{{ work.title }}</h2>
            <p v-if="work.description" class="work-desc">{{ work.description }}</p>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { portfolioWorks } from '../data/portfolioWorks.js'

export default {
  name: 'Works',
  data() {
    return {
      works: portfolioWorks
    }
  }
}
</script>

<style scoped>
.works {
  width: 100%;
  background: #ffffff;
  color: #000000;
}

.page-head {
  padding: clamp(2.5rem, 6vw, 4rem) clamp(1.25rem, 4vw, 2.5rem) clamp(1.5rem, 4vw, 2rem);
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 0.35rem;
}

.page-desc {
  font-size: 0.9375rem;
  color: #888888;
}

.works-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1.25rem, 4vw, 2.5rem) clamp(4rem, 10vw, 6rem);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
  gap: clamp(1.5rem, 4vw, 2.5rem);
}

.work-card {
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  overflow: hidden;
  background: #ffffff;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: box-shadow 0.25s ease;
}

.work-card:hover {
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.1);
}

.work-card:focus-visible {
  outline: 2px solid #000000;
  outline-offset: 3px;
}

.media {
  position: relative;
  aspect-ratio: 16 / 9;
  background: #f4f4f4;
  overflow: hidden;
}

.media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.work-card:hover .media img {
  transform: scale(1.03);
}

.body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tags-inline {
  font-size: 0.8125rem;
  color: #888888;
}

.work-title {
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.35;
}

.work-desc {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #444444;
}
</style>
