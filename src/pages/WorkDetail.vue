<template>
  <div class="detail">
    <template v-if="work">
      <nav class="breadcrumb">
        <RouterLink to="/" class="crumb">首页</RouterLink>
        <span class="sep" aria-hidden="true">/</span>
        <RouterLink to="/works" class="crumb">作品</RouterLink>
        <span class="sep" aria-hidden="true">/</span>
        <span class="crumb crumb--current">{{ shortTitle }}</span>
      </nav>

      <header class="head">
        <p v-if="work.category" class="category">{{ work.category }}</p>
        <h1 class="title">{{ work.title }}</h1>
        <p v-if="tagLine" class="tags">{{ tagLine }}</p>
        <p v-if="work.description" class="desc">{{ work.description }}</p>
      </header>

      <div v-if="embedSrc" class="player-wrap">
        <iframe
          class="player"
          :src="embedSrc"
          :title="`${work.title} · 视频`"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
      <p v-else class="no-video">暂时无法加载视频</p>

      <p class="external">
        <a :href="work.youtubeUrl" class="yt-link" target="_blank" rel="noopener noreferrer">
          在 YouTube 打开 →
        </a>
      </p>
    </template>

    <div v-else class="empty">
      <p>未找到该作品</p>
      <RouterLink to="/works" class="back">返回作品列表</RouterLink>
    </div>
  </div>
</template>

<script>
import { portfolioWorks, youtubeEmbedSrc } from '../data/portfolioWorks.js'

export default {
  name: 'WorkDetail',
  computed: {
    idNum() {
      return Number(this.$route.params.id)
    },
    work() {
      return portfolioWorks.find((w) => w.id === this.idNum)
    },
    embedSrc() {
      return this.work ? youtubeEmbedSrc(this.work.youtubeUrl) : null
    },
    tagLine() {
      if (!this.work?.tags?.length) return ''
      return this.work.tags.join(' · ')
    },
    shortTitle() {
      if (!this.work) return ''
      const t = this.work.title
      return t.length > 24 ? `${t.slice(0, 24)}…` : t
    }
  }
}
</script>

<style scoped>
.detail {
  width: 100%;
  background: #ffffff;
  color: #000000;
  padding: clamp(1.5rem, 4vw, 2.5rem) clamp(1.25rem, 4vw, 2.5rem)
    clamp(4rem, 10vw, 6rem);
}

.breadcrumb {
  max-width: 960px;
  margin: 0 auto 1.5rem;
  font-size: 0.8125rem;
  color: #888888;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
}

.sep {
  color: #cccccc;
  user-select: none;
}

.crumb {
  color: #888888;
  text-decoration: none;
  transition: color 0.2s ease;
}

.crumb:hover {
  color: #000000;
}

.crumb--current {
  color: #444444;
  max-width: 100%;
}

.head {
  max-width: 960px;
  margin: 0 auto 1.5rem;
}

.category {
  font-size: 0.8125rem;
  color: #888888;
  margin-bottom: 0.5rem;
}

.title {
  font-size: clamp(1.35rem, 3.5vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  margin-bottom: 0.5rem;
}

.tags {
  font-size: 0.8125rem;
  color: #888888;
  margin-bottom: 1rem;
}

.desc {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: #444444;
  max-width: 42rem;
}

.player-wrap {
  max-width: 960px;
  margin: 0 auto;
  aspect-ratio: 16 / 9;
  background: #f4f4f4;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
}

.player {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

.no-video {
  max-width: 960px;
  margin: 0 auto;
  font-size: 0.9375rem;
  color: #888888;
}

.external {
  max-width: 960px;
  margin: 1.25rem auto 0;
}

.yt-link {
  font-size: 0.9375rem;
  font-weight: 500;
  color: #000000;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.yt-link:hover {
  opacity: 0.55;
}

.empty {
  max-width: 480px;
  margin: 4rem auto;
  text-align: center;
}

.empty p {
  color: #888888;
  margin-bottom: 1rem;
}

.back {
  font-size: 0.9375rem;
  color: #000000;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.back:hover {
  opacity: 0.65;
}
</style>
