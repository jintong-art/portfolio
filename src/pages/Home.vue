<template>
  <div class="home-shell">
    <div class="frame">
      <header class="frame-top">
        <div class="brand">
          <span class="brand-dot" aria-hidden="true" />
          <span class="brand-name">Li Jin Tong</span>
        </div>
        <RouterLink to="/about" class="top-link">About me</RouterLink>
      </header>

      <aside class="rail rail-left" aria-hidden="true">
        <span class="rail-text">About Li Jin Tong</span>
      </aside>

      <div class="frame-scroll">
        <section id="hero" class="hero">
          <div class="hero-deco" aria-hidden="true">
            <span class="deco i1">📖</span>
            <span class="deco i2">✎</span>
            <span class="deco i3">◇</span>
            <span class="deco i4">✦</span>
            <span class="deco i5">⌘</span>
          </div>
          <div class="hero-inner">
            <h1 class="hero-title">Li Jin Tong</h1>
            <p class="hero-kicker">PORTFOLIO</p>
            <p class="hero-lead">
              Show you my works.
            </p>
          </div>
        </section>

        <section
          v-for="(work, index) in projects"
          :id="'work-' + work.id"
          :key="work.id"
          class="spread"
          :style="{ '--spread-tint': spreadTints[index % spreadTints.length] }"
        >
          <div class="spread-row">
            <div class="spread-cover">
              <RouterLink
                :to="{ name: 'WorkDetail', params: { id: work.id } }"
                class="spread-img-link"
              >
                <img :src="work.image" :alt="work.title" width="900" height="560" loading="lazy" />
              </RouterLink>
            </div>

            <div class="spread-detail">
              <h2 class="spread-heading">{{ work.title }}</h2>
              <div class="spread-meta">
                <p class="meta-line meta-strong">SELECTED WORK</p>
                <p class="meta-line muted">Year · 2024</p>
                <p class="meta-line meta-tools">Motion · Short film · YouTube</p>
                <RouterLink
                  class="meta-tag"
                  :to="{ name: 'WorkDetail', params: { id: work.id } }"
                >
                  OPEN FILM →
                </RouterLink>
              </div>
              <div class="spread-desc">
                <p class="desc-label">DESCRIPTION</p>
                <p class="desc-body">
                  {{
                    work.description ||
                    '点击左侧封面或下方链接观看完整影像。短片包含概念阐述与成片演示；详情页内嵌播放器并可在 YouTube 打开。'
                  }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="also-enjoy" class="also">
          <div class="also-head">
            <h3 class="also-title">You May Also Enjoy</h3>
            <RouterLink to="/works" class="also-random">VIEW ALL WORKS</RouterLink>
          </div>
          <div class="also-grid">
            <RouterLink
              v-for="work in projects"
              :key="'also-' + work.id"
              :to="{ name: 'WorkDetail', params: { id: work.id } }"
              class="also-card"
            >
              <div class="also-thumb">
                <img :src="work.image" :alt="work.title" loading="lazy" />
              </div>
              <span class="also-name">{{ work.title }}</span>
            </RouterLink>
          </div>
        </section>
      </div>

      <aside class="rail rail-right" aria-hidden="true">
        <span class="rail-text rail-text--down">Selected works</span>
      </aside>

      <footer class="frame-foot">
        <span class="corner corner-l">LJT</span>
        <div class="pill-row">
          <span
            v-for="pill in footerPills"
            :key="pill.label"
            class="pill"
            :style="{ background: pill.bg, color: pill.fg || '#111' }"
          >
            {{ pill.label }}
          </span>
        </div>
        <span class="corner corner-r">LJT</span>
      </footer>
    </div>
  </div>
</template>

<script>
import { portfolioWorks } from '../data/portfolioWorks.js'

export default {
  name: 'Home',
  data() {
    return {
      projects: portfolioWorks,
      spreadTints: ['#e8f0fe', '#fde8ef', '#e8f7ef', '#f5f0ff'],
      footerPills: [
        { label: 'WRITING', bg: '#111111', fg: '#fff' },
        { label: 'ICONOGRAPHY', bg: '#e8c547', fg: '#111' },
        { label: 'LAYOUT', bg: '#4a6fa5', fg: '#fff' },
        { label: 'SYSTEMS', bg: '#9ec5ff', fg: '#111' },
        { label: 'ILLUSTRATION', bg: '#e8926c', fg: '#111' },
        { label: 'TYPOGRAPHY', bg: '#8c6239', fg: '#fff' },
        { label: 'COLLECTION', bg: '#6bbd7e', fg: '#111' }
      ]
    }
  }
}
</script>

<style scoped>
.home-shell {
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  background: #ffffff;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.frame {
  display: grid;
  grid-template-columns: 2rem minmax(0, 1fr) 2rem;
  grid-template-rows: auto minmax(0, 1fr) auto;
  width: 100%;
  max-width: none;
  margin: 0;
  min-height: 100vh;
  min-height: 100dvh;
  background: #ffffff;
  border: 1px solid #111;
  border-radius: 0;
  overflow: hidden;
  font-family: 'Inter', system-ui, sans-serif;
}

.frame-top {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.65rem 1rem;
  border-bottom: 1px solid #111;
  background: #fff;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.brand-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #c41e3a;
  flex-shrink: 0;
}

.brand-name {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.top-link {
  font-size: 0.7rem;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  white-space: nowrap;
}

.top-link:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.rail {
  grid-row: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #111;
  background: #fff;
  min-height: 0;
}

.rail-right {
  grid-column: 3;
  border-right: none;
  border-left: 1px solid #111;
}

.rail-text {
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  color: #222;
  padding: 0.5rem 0;
}

.rail-text--down {
  transform: none;
  writing-mode: vertical-rl;
}

.frame-scroll {
  grid-column: 2;
  grid-row: 2;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 0;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: min(72vh, 520px);
  background: #fff9d0;
  border-bottom: 1px solid #111;
  font-family: 'Playfair Display', Georgia, serif;
}

.hero-deco {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.deco {
  position: absolute;
  font-size: 1.25rem;
  opacity: 0.55;
  color: #3d3d3d;
}

.deco.i1 {
  top: 14%;
  left: 10%;
}
.deco.i2 {
  top: 22%;
  right: 14%;
  font-size: 1rem;
}
.deco.i3 {
  bottom: 28%;
  left: 16%;
}
.deco.i4 {
  top: 38%;
  right: 22%;
}
.deco.i5 {
  bottom: 18%;
  right: 12%;
}

.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 34rem;
  width: 100%;
  margin: 0 auto;
  padding: clamp(1.25rem, 4vw, 2rem) 1.5rem;
  text-align: center;
}

.hero-title {
  font-size: clamp(1.75rem, 4.5vw, 2.65rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #111;
  margin-bottom: 0.75rem;
}

.hero-kicker {
  font-size: 0.68rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
  color: #444;
}

.hero-lead {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  line-height: 1.65;
  color: #333;
}

.spread {
  padding: clamp(1.75rem, 4vw, 2.75rem) clamp(1rem, 3vw, 2rem);
  background: var(--spread-tint, #fff);
  border-bottom: 1px solid #111;
}

.spread-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(1rem, 3vw, 2rem);
  align-items: start;
}

.spread-cover {
  min-width: 0;
}

.spread-detail {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 0.15rem;
}

.spread-heading {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(1.35rem, 3vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0;
  color: #111;
  line-height: 1.15;
}

.spread-img-link {
  display: block;
  border: 1px solid #111;
  background: #fff;
  line-height: 0;
}

.spread-img-link img {
  width: 100%;
  aspect-ratio: 1 / 1;
  height: auto;
  object-fit: cover;
  display: block;
}

.spread-meta {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 0.8rem;
  line-height: 1.55;
}

.meta-line {
  margin: 0 0 0.35rem;
}

.meta-strong {
  font-family: 'Inter', sans-serif;
  font-size: 0.58rem;
  letter-spacing: 0.14em;
  font-weight: 600;
}

.meta-line.muted {
  color: #555;
}

.meta-tools {
  font-family: 'Inter', sans-serif;
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  color: #444;
}

.meta-tag {
  display: inline-block;
  margin-top: 0.65rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #2e7d32;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.meta-tag:hover {
  opacity: 0.75;
}

.spread-desc {
  font-family: 'Playfair Display', Georgia, serif;
}

.desc-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.58rem;
  letter-spacing: 0.16em;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.desc-body {
  font-size: 0.88rem;
  line-height: 1.65;
  color: #222;
  margin: 0;
}

.spread-detail .spread-meta {
  margin: 0;
}

.spread-detail .spread-desc {
  margin-top: 0.25rem;
}

.also {
  padding: clamp(1.75rem, 4vw, 2.5rem) clamp(1rem, 3vw, 2rem) 2rem;
  background: #fff;
}

.also-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
}

.also-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  font-weight: 700;
}

.also-random {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #111;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.also-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.also-card {
  text-decoration: none;
  color: inherit;
  border: 1px solid #111;
  background: #fafafa;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.also-card:hover {
  transform: translateY(-2px);
  box-shadow: 4px 4px 0 #111;
}

.also-thumb {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-bottom: 1px solid #111;
}

.also-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.also-name {
  display: block;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.5rem 0.45rem;
  text-align: center;
}

.frame-foot {
  grid-column: 1 / -1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  flex-wrap: wrap;
  padding: 0.55rem 2.25rem;
  border-top: 1px solid #111;
  background: #fff;
}

.pill-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.35rem;
}

.pill {
  font-size: 0.52rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 0.28rem 0.45rem;
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.corner {
  position: absolute;
  bottom: 0.35rem;
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #444;
}

.corner-l {
  left: 0.5rem;
}

.corner-r {
  right: 0.5rem;
}

@media (max-width: 720px) {
  .frame {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto minmax(0, 1fr) auto;
    min-height: 100vh;
    min-height: 100dvh;
  }

  .rail {
    grid-column: 1;
    grid-row: auto;
    border: none;
    border-bottom: 1px solid #111;
    padding: 0.35rem 0;
  }

  .rail-left .rail-text {
    writing-mode: horizontal-tb;
    transform: none;
    letter-spacing: 0.2em;
  }

  .rail-right .rail-text {
    writing-mode: horizontal-tb;
    letter-spacing: 0.2em;
  }

  .frame-scroll {
    grid-column: 1;
    grid-row: auto;
    min-height: 50vh;
  }

  .spread-row {
    grid-template-columns: 1fr;
  }

  .spread-detail {
    padding-top: 0;
  }

  .also-grid {
    grid-template-columns: 1fr;
  }

  .corner {
    display: none;
  }
}
</style>
