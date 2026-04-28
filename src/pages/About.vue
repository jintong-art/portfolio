<template>
  <div class="about">
    <!-- About Header -->
    <section class="about-header">
      <div class="about-header-wrapper">
        <h1 class="page-title">关于我</h1>
        <p class="page-subtitle">设计师、研究者、问题解决者</p>
      </div>
    </section>

    <!-- About Content -->
    <section class="about-section">
      <div class="section-wrapper">
        <div class="about-content">
          <div class="about-text">
            <h2 class="section-title">我的故事</h2>
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

          <div class="about-stats">
            <div class="stat-item">
              <div class="stat-number">3+</div>
              <div class="stat-label">年设计经验</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">12</div>
              <div class="stat-label">完成项目</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">5</div>
              <div class="stat-label">发表论文</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">8+</div>
              <div class="stat-label">合作品牌</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section">
      <div class="section-wrapper">
        <h2 class="section-title">核心技能</h2>
        
        <div class="skills-grid">
          <div class="skill-group">
            <h3 class="skill-category">设计</h3>
            <ul class="skill-list">
              <li class="skill">UI Design</li>
              <li class="skill">UX Research</li>
              <li class="skill">Design System</li>
              <li class="skill">Prototyping</li>
              <li class="skill">User Testing</li>
            </ul>
          </div>

          <div class="skill-group">
            <h3 class="skill-category">工具</h3>
            <ul class="skill-list">
              <li class="skill">Figma</li>
              <li class="skill">Adobe XD</li>
              <li class="skill">Sketch</li>
              <li class="skill">Protopie</li>
              <li class="skill">Framer</li>
            </ul>
          </div>

          <div class="skill-group">
            <h3 class="skill-category">研究方法</h3>
            <ul class="skill-list">
              <li class="skill">用户访谈</li>
              <li class="skill">可用性测试</li>
              <li class="skill">数据分析</li>
              <li class="skill">竞品分析</li>
              <li class="skill">信息建筑</li>
            </ul>
          </div>

          <div class="skill-group">
            <h3 class="skill-category">其他</h3>
            <ul class="skill-list">
              <li class="skill">项目管理</li>
              <li class="skill">团队协作</li>
              <li class="skill">演讲展示</li>
              <li class="skill">学术写作</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="experience-section">
      <div class="section-wrapper">
        <h2 class="section-title">工作经历</h2>
        
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3 class="timeline-title">产品设计师</h3>
              <p class="timeline-company">科技公司 A</p>
              <p class="timeline-period">2021 - 至今</p>
              <p class="timeline-description">
                负责核心产品的 UI/UX 设计和用户研究，与产品经理和开发团队紧密合作。
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3 class="timeline-title">设计师</h3>
              <p class="timeline-company">设计工作室 B</p>
              <p class="timeline-period">2018 - 2021</p>
              <p class="timeline-description">
                参与多个品牌和产品的设计项目，从品牌设计到交互设计。
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3 class="timeline-title">初级设计师</h3>
              <p class="timeline-company">创业公司 C</p>
              <p class="timeline-period">2017 - 2018</p>
              <p class="timeline-description">
                学习产品设计的全流程，参与产品从 0 到 1 的打造。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  width: 100%;
}

/* About Header */
.about-header {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(123, 104, 238, 0.1) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.about-header-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.page-title {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #fff;
  letter-spacing: -0.5px;
}

.page-subtitle {
  font-size: 1.1rem;
  color: #a0a0a0;
  font-weight: 300;
}

/* Section */
.section-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 2rem;
  letter-spacing: -0.5px;
}

/* About Section */
.about-section {
  padding: 5rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.about-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-text p {
  font-size: 1rem;
  line-height: 1.8;
  color: #a0a0a0;
}

.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.stat-item {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #4a90e2;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.95rem;
  color: #b0b0b0;
}

/* Skills Section */
.skills-section {
  padding: 5rem 2rem;
  background: rgba(20, 20, 20, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
}

.skill-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-category {
  font-size: 0.9rem;
  font-weight: 600;
  color: #4a90e2;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.skill-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.skill {
  font-size: 0.95rem;
  color: #b0b0b0;
  padding-left: 1rem;
  position: relative;
}

.skill::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #4a90e2;
}

/* Experience Section */
.experience-section {
  padding: 5rem 2rem;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background: rgba(74, 144, 226, 0.3);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
}

.timeline-dot {
  position: absolute;
  left: -2.1rem;
  top: 0.3rem;
  width: 1rem;
  height: 1rem;
  background: #4a90e2;
  border: 3px solid #0f0f0f;
  border-radius: 50%;
}

.timeline-content {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
}

.timeline-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.3rem;
}

.timeline-company {
  font-size: 0.95rem;
  color: #4a90e2;
  margin-bottom: 0.3rem;
}

.timeline-period {
  font-size: 0.85rem;
  color: #808080;
  margin-bottom: 0.8rem;
}

.timeline-description {
  font-size: 0.95rem;
  color: #a0a0a0;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-stats {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .about-header {
    padding: 2rem;
  }

  .about-section,
  .skills-section,
  .experience-section {
    padding: 3rem 2rem;
  }
}
</style>
