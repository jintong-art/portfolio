<template>
  <div class="about">
    <header class="page-head">
      <h1 class="page-title">关于</h1>
      <p class="page-desc">设计师、研究者、问题解决者</p>
    </header>

    <section class="block">
      <div class="inner">
        <div class="layout">
          <div class="prose">
            <h2 class="block-title">我的故事</h2>
            <p>
              我是一名产品设计师和研究者，致力于通过设计解决实际问题。我相信好的设计应该是对用户需求的深刻理解。
            </p>
            <p>
              我的工作跨越多个领域：UI/UX 设计、产品策略、用户研究。在过去的多年里，我为各种项目工作，从小型初创公司到大型企业，积累了丰富的设计经验。
            </p>
            <p>
              除了设计，我也进行相关的学术研究，发表论文并参与行业讨论。我热衷于探索设计与研究的交叉点，寻找创新和实用的平衡。
            </p>
          </div>
          <div class="stats">
            <div v-for="s in stats" :key="s.label" class="stat">
              <div class="stat-num">{{ s.value }}</div>
              <div class="stat-label">{{ s.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="block block--soft">
      <div class="inner">
        <h2 class="block-title">核心技能</h2>
        <div class="skills">
          <div v-for="g in skillGroups" :key="g.title" class="skill-col">
            <h3 class="skill-head">{{ g.title }}</h3>
            <ul class="skill-list">
              <li v-for="item in g.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="block">
      <div class="inner">
        <h2 class="block-title">工作经历</h2>
        <ol class="timeline">
          <li v-for="(job, i) in jobs" :key="i" class="timeline-item">
            <div class="timeline-card">
              <h3 class="job-title">{{ job.title }}</h3>
              <p class="job-meta">{{ job.company }} · {{ job.period }}</p>
              <p class="job-desc">{{ job.description }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      stats: [
        { value: '3+', label: '年设计经验' },
        { value: '12', label: '完成项目' },
        { value: '5', label: '发表论文' },
        { value: '8+', label: '合作品牌' }
      ],
      skillGroups: [
        {
          title: '设计',
          items: ['UI Design', 'UX Research', 'Design System', 'Prototyping', 'User Testing']
        },
        {
          title: '工具',
          items: ['Figma', 'Adobe XD', 'Sketch', 'Protopie', 'Framer']
        },
        {
          title: '研究方法',
          items: ['用户访谈', '可用性测试', '数据分析', '竞品分析', '信息架构']
        },
        {
          title: '其他',
          items: ['项目管理', '团队协作', '演讲展示', '学术写作']
        }
      ],
      jobs: [
        {
          title: '产品设计师',
          company: '科技公司 A',
          period: '2021 — 至今',
          description: '负责核心产品的 UI/UX 设计和用户研究，与产品经理和开发团队紧密合作。'
        },
        {
          title: '设计师',
          company: '设计工作室 B',
          period: '2018 — 2021',
          description: '参与多个品牌和产品的设计项目，从品牌设计到交互设计。'
        },
        {
          title: '初级设计师',
          company: '创业公司 C',
          period: '2017 — 2018',
          description: '学习产品设计的全流程，参与产品从 0 到 1 的打造。'
        }
      ]
    }
  }
}
</script>

<style scoped>
.about {
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

.block {
  padding: clamp(2.5rem, 6vw, 4rem) clamp(1.25rem, 4vw, 2.5rem);
  border-top: 1px solid #eeeeee;
}

.block--soft {
  background: #fafafa;
}

.inner {
  max-width: 1200px;
  margin: 0 auto;
}

.block-title {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
}

.layout {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: clamp(2rem, 5vw, 3.5rem);
  align-items: start;
}

.prose p {
  font-size: 0.9375rem;
  line-height: 1.75;
  color: #444444;
  margin-bottom: 1rem;
}

.prose p:last-child {
  margin-bottom: 0;
}

.stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.stat {
  padding: 1.25rem;
  border: 1px solid #eeeeee;
  background: #ffffff;
  text-align: center;
}

.stat-num {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.8125rem;
  color: #888888;
}

.skills {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
}

.skill-head {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #888888;
  margin-bottom: 0.75rem;
}

.skill-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-list li {
  font-size: 0.9375rem;
  color: #333333;
  padding-left: 0.75rem;
  position: relative;
}

.skill-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #888888;
  font-size: 0.75rem;
}

.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.timeline-item {
  margin: 0;
}

.timeline-card {
  border: 1px solid #eeeeee;
  padding: 1.25rem 1.5rem;
  background: #ffffff;
}

.job-title {
  font-size: 1.0625rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.job-meta {
  font-size: 0.8125rem;
  color: #888888;
  margin-bottom: 0.75rem;
}

.job-desc {
  font-size: 0.9375rem;
  line-height: 1.65;
  color: #444444;
}

@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .stats {
    grid-template-columns: 1fr;
  }
}
</style>
