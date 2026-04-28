<template>
  <div class="works">
    <!-- Header -->
    <div class="works-header">
      <div class="header-content">
        <h1>我的作品</h1>
        <p>精选项目和设计案例</p>
      </div>
    </div>

    <!-- Works Grid -->
    <div class="works-container">
      <div class="works-grid">
        <div v-for="work in works" :key="work.id" class="work-card">
          <!-- Video -->
          <div class="video-wrapper" 
               @mouseenter="handleMouseEnter(work.id)"
               @mouseleave="handleMouseLeave(work.id)">
            <video 
              :ref="`video-${work.id}`"
              :src="work.video"
              class="video"
              muted
            ></video>
            <div class="video-controls">
              <span class="play-btn">▶ 播放</span>
            </div>
          </div>

          <!-- Content -->
          <div class="card-content">
            <h3 class="work-title">{{ work.title }}</h3>
            <p class="work-desc">{{ work.description }}</p>
            <div class="tags">
              <span v-for="tag in work.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Works',
  data() {
    return {
      works: [
        {
          id: 1,
          title: '作品一',
          description: '简洁的项目描述',
          tags: ['设计', '2024'],
          video: '/videos/work1.mp4',
          startTime: 2  // 从第2秒开始
        },
        {
          id: 2,
          title: '作品二',
          description: '简洁的项目描述',
          tags: ['设计', '2024'],
          video: '/videos/work2.mp4',
          startTime: 265  // 从第265秒开始 (4分25秒)
        },
        {
          id: 3,
          title: '作品三',
          description: '简洁的项目描述',
          tags: ['设计', '2024'],
          video: '/videos/work3.mp4',
          startTime: 15  // 从第15秒开始
        }
      ]
    }
  },
  methods: {
    handleMouseEnter(id) {
      const work = this.works.find(w => w.id === id)
      const videoRef = this.$refs[`video-${id}`]
      if (videoRef && videoRef[0]) {
        // 设置开始时间
        videoRef[0].currentTime = work.startTime || 0
        // 播放
        videoRef[0].play()
      }
    },
    handleMouseLeave(id) {
      const work = this.works.find(w => w.id === id)
      const videoRef = this.$refs[`video-${id}`]
      if (videoRef && videoRef[0]) {
        videoRef[0].pause()
        // 回到开始时间
        videoRef[0].currentTime = work.startTime || 0
      }
    }
  }
}
</script>

<style scoped>
.works {
  width: 100%;
}

.works-header {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(123, 104, 238, 0.1) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
}

.header-content h1 {
  font-size: 2.8rem;
  color: #fff;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.header-content p {
  font-size: 1.1rem;
  color: #a0a0a0;
}

.works-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.work-card {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.work-card:hover {
  transform: translateY(-8px);
}

.video-wrapper {
  position: relative;
  aspect-ratio: 16 / 9;
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.video-controls {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.work-card:hover .video-controls {
  opacity: 1;
}

.play-btn {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  background: rgba(74, 144, 226, 0.9);
  border-radius: 6px;
  text-align: center;
}

.card-content {
  padding: 0;
}

.work-title {
  font-size: 1.3rem;
  color: #fff;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.work-desc {
  font-size: 0.95rem;
  color: #a0a0a0;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  display: inline-block;
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  background: rgba(74, 144, 226, 0.2);
  color: #4a90e2;
  border-radius: 4px;
  border: 1px solid rgba(74, 144, 226, 0.3);
}

@media (max-width: 768px) {
  .works-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .header-content h1 {
    font-size: 2rem;
  }

  .works-container {
    padding: 3rem 1rem;
  }
}
</style>
