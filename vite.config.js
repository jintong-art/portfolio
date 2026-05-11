import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/**
 * GitHub Pages 项目页：https://<用户>.github.io/<仓库名>/
 * - CI 会设置 GITHUB_REPOSITORY；本地请用 `npm run build`（默认与仓库路径一致）。
 * - 部署在域名根目录时用：`npm run build:root`（base 为 `/`）。
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
