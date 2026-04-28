<template>
  <div class="project-card">
    <div class="card-header">
      <h3 class="project-title">{{ project.title }}</h3>
    </div>
    <p class="project-description">{{ project.description }}</p>
    <div class="project-tags">
      <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <a :href="project.link" class="project-link">查看项目 →</a>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.project-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
  transform: translateY(-5px);
  border-color: #667eea;
}

.card-header {
  margin-bottom: 1rem;
}

.project-title {
  color: #333;
  margin: 0;
  font-size: 1.3rem;
}

.project-description {
  color: #666;
  margin: 0.5rem 0 1rem 0;
  font-size: 0.95rem;
  flex-grow: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background: #f0f0f0;
  color: #667eea;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.85rem;
}

.project-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  align-self: flex-start;
}

.project-link:hover {
  color: #764ba2;
}
</style>
