import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/**
 * GitHub Pages 项目页：https://<用户>.github.io/<仓库名>/
 * CI 中会设置 GITHUB_REPOSITORY=owner/repo，以便自动得到正确的 base。
 * 本地开发 / 本地 build 未设置时使用 '/'。
 */
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = repoName ? `/${repoName}/` : '/'

export default defineConfig({
  base,
  plugins: [vue()],
  server: {
    port: 5173,
    open: true
  }
})
