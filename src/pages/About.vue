<template>
  <div class="about-shell">
    <div class="frame">
      <header class="frame-top">
        <RouterLink to="/" class="brand brand-link">
          <span class="brand-dot" aria-hidden="true" />
          <span class="brand-name">Li Jin Tong</span>
        </RouterLink>
        <div class="top-actions">
          <RouterLink to="/works" class="top-link">Works</RouterLink>
          <RouterLink to="/" class="top-link">Home</RouterLink>
        </div>
      </header>

      <aside class="rail rail-left" aria-hidden="true">
        <span class="rail-text">Biography · Academic</span>
      </aside>

      <div class="frame-scroll">
        <section class="hero">
          <RouterLink to="/" class="back-home">← Home</RouterLink>
          <div class="hero-inner">
            <div class="hero-layout">
              <div
                class="portrait-wrap"
                :style="portraitWrapStyle"
              >
                <img
                  class="portrait"
                  :src="portraitSrc"
                  alt="Li Jintong portrait"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div ref="heroCopy" class="hero-copy">
                <h1 class="hero-title">LI JINTONG</h1>
                <p class="hero-sub">
                  LI JINTONG 이근동<span class="sep">｜</span>박사 M.S.
                </p>
                <p class="hero-fields">
                  연구 분야: Animation design / Game design / AI-generated animation
                </p>
                <a class="hero-email" href="mailto:lijintong@hanyang.ac.kr">
                  lijintong@hanyang.ac.kr
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="panel">
          <h2 class="panel-label">일정표 <span class="panel-en">Schedule</span></h2>
          <p class="panel-body">
            미팅·방문 일정은 이메일로 조율합니다.<br />
            Meetings & visits by email inquiry.
          </p>
        </section>

        <section class="panel panel-tint">
          <h2 class="panel-label">학력 <span class="panel-en">Education</span></h2>
          <ul class="edu-list">
            <li v-for="(row, i) in education" :key="i" class="edu-row">
              <span class="edu-years">{{ row.years }}</span>
              <span class="edu-text">{{ row.text }}</span>
            </li>
          </ul>
        </section>

        <section class="panel">
          <h2 class="panel-label">
            연구 실적 <span class="panel-en">Research output</span>
          </h2>
          <div class="pub-block">
            <time class="pub-date">2024.06</time>
            <p class="pub-title">
              Publication: An Analysis of the Ideographic Function of Color Language in 2D
              Animation: A Case Study of <em>The Pool</em>
            </p>
          </div>
        </section>
      </div>

      <aside class="rail rail-right" aria-hidden="true">
        <span class="rail-text rail-text--down">HANSEO · HANYANG</span>
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
export default {
  name: 'About',
  data() {
    return {
      copyBlockHeight: null,
      copyResizeObserver: null,
      education: [
        {
          years: '2019—2023',
          text: 'Hubei Institute of Fine Arts | Bachelor of Fine Arts'
        },
        {
          years: '2023—2024',
          text: 'Hanseo University | Master of Animation'
        },
        {
          years: '2025—',
          text: 'Hanyang University'
        }
      ],
      footerPills: [
        { label: 'WRITING', bg: '#111111', fg: '#fff' },
        { label: 'ANIMATION', bg: '#e8c547', fg: '#111' },
        { label: 'GAME', bg: '#4a6fa5', fg: '#fff' },
        { label: 'AI FILM', bg: '#9ec5ff', fg: '#111' },
        { label: 'RESEARCH', bg: '#e8926c', fg: '#111' },
        { label: 'COLOR', bg: '#8c6239', fg: '#fff' },
        { label: 'COLLECTION', bg: '#6bbd7e', fg: '#111' }
      ]
    }
  },
  computed: {
    portraitSrc() {
      return `${import.meta.env.BASE_URL}slefi.jpg`
    },
    portraitWrapStyle() {
      if (!this.copyBlockHeight) return {}
      return {
        height: `${this.copyBlockHeight}px`
      }
    }
  },
  mounted() {
    this.$nextTick(() => this.setupCopyHeightObserver())
    window.addEventListener('resize', this.syncCopyHeight, { passive: true })
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.syncCopyHeight)
    this.copyResizeObserver?.disconnect()
    this.copyResizeObserver = null
  },
  methods: {
    isWideHeroLayout() {
      return typeof window !== 'undefined' && window.innerWidth > 720
    },
    syncCopyHeight() {
      const el = this.$refs.heroCopy
      if (!el) return
      if (!this.isWideHeroLayout()) {
        this.copyBlockHeight = null
        return
      }
      this.copyBlockHeight = Math.round(el.getBoundingClientRect().height)
    },
    setupCopyHeightObserver() {
      const el = this.$refs.heroCopy
      if (!el || typeof ResizeObserver === 'undefined') {
        this.syncCopyHeight()
        return
      }
      this.syncCopyHeight()
      this.copyResizeObserver = new ResizeObserver(() => this.syncCopyHeight())
      this.copyResizeObserver.observe(el)
    }
  }
}
</script>

<style scoped>
.about-shell {
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #ffffff;
}

.frame {
  display: grid;
  grid-template-columns: 2rem minmax(0, 1fr) 2rem;
  grid-template-rows: auto minmax(0, 1fr) auto;
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  background: #ffffff;
  border: 1px solid #111;
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

.brand-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  color: inherit;
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

.top-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
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
}

.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: min(56vh, 460px);
  padding-block: clamp(1.5rem, 5vw, 2.75rem);
  box-sizing: border-box;
  background: #fff9d0;
  border-bottom: 1px solid #111;
  font-family: 'Playfair Display', Georgia, serif;
}

.back-home {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #111;
  text-decoration: none;
}

.back-home:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.hero-inner {
  width: 100%;
  max-width: 52rem;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-layout {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: clamp(1rem, 3vw, 1.75rem);
  width: fit-content;
  max-width: 100%;
  margin: 0 auto;
}

.portrait-wrap {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  max-width: min(40vw, 300px);
  border-right: 1px solid #111;
  padding-right: clamp(1rem, 3vw, 1.5rem);
  box-sizing: border-box;
}

.portrait {
  display: block;
  max-height: 100%;
  width: auto;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  object-position: center;
  border: 1px solid #111;
  background: #eee;
}

.hero-copy {
  text-align: left;
  min-width: 0;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  letter-spacing: 0.06em;
  margin: 0 0 0.65rem;
  color: #111;
  text-align: left;
}

.hero-sub {
  font-size: clamp(0.95rem, 2.2vw, 1.1rem);
  margin: 0 0 1rem;
  color: #222;
  line-height: 1.45;
}

.sep {
  margin: 0 0.15em;
}

.hero-fields {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  line-height: 1.55;
  letter-spacing: 0.02em;
  color: #333;
  margin: 0 0 1rem;
}

.hero-email {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #111;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.hero-email:hover {
  opacity: 0.65;
}

.panel {
  padding: clamp(1.5rem, 4vw, 2.25rem) clamp(1rem, 3vw, 2rem);
  border-bottom: 1px solid #111;
  background: #fff;
}

.panel-tint {
  background: #f8fafc;
}

.panel-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin: 0 0 1rem;
  color: #111;
}

.panel-en {
  font-weight: 600;
  letter-spacing: 0.12em;
  color: #666;
  text-transform: uppercase;
}

.panel-body {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 0.92rem;
  line-height: 1.65;
  color: #222;
  margin: 0;
}

.edu-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.edu-row {
  display: grid;
  grid-template-columns: 6.5rem 1fr;
  gap: 0.75rem 1rem;
  padding: 0.65rem 0;
  border-top: 1px solid #111;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 0.88rem;
  line-height: 1.5;
}

.edu-row:first-of-type {
  border-top: none;
  padding-top: 0;
}

.edu-years {
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #444;
}

.pub-block {
  border: 1px solid #111;
  padding: 1rem 1.15rem;
  background: #fff;
}

.pub-date {
  font-family: 'Inter', sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
}

.pub-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 0.92rem;
  line-height: 1.55;
  margin: 0;
  color: #111;
}

.pub-title em {
  font-style: italic;
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
  }

  .rail {
    grid-column: 1;
    grid-row: auto;
    border: none;
    border-bottom: 1px solid #111;
    padding: 0.35rem 0;
  }

  .rail-left .rail-text,
  .rail-right .rail-text {
    writing-mode: horizontal-tb;
    transform: none;
    letter-spacing: 0.18em;
  }

  .frame-scroll {
    grid-column: 1;
    min-height: 50vh;
  }

  .edu-row {
    grid-template-columns: 1fr;
  }

  .edu-years {
    margin-bottom: -0.25rem;
  }

  .hero-layout {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .portrait-wrap {
    width: 100%;
    max-width: 16rem;
    justify-content: center;
    margin-bottom: 0.75rem;
    border-right: none;
    padding-right: 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid #111;
  }

  .hero-copy {
    text-align: center;
  }

  .hero-title {
    text-align: center;
  }

  .portrait {
    height: auto;
    width: 100%;
    max-width: 100%;
    max-height: none;
    object-fit: contain;
    object-position: center;
  }

  .corner {
    display: none;
  }
}
</style>
