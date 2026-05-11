import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/**
 * GitHub Pages 项目页：https://<用户>.github.io/<仓库名>/
 * - `vite build`：使用 GITHUB_REPOSITORY 推导的 base（与线上子路径一致）。
 * - `vite` / `vite dev`：始终 base `/`，避免环境里带着 GITHUB_REPOSITORY 时
 *   `/src/main.js` 被错误地请求到域名根路径而 404。
 * - `vite preview`：与 build 相同（resolve 为 command=serve & mode=production）。
 * - 域名根部署：`npm run build:root`（不设置 GITHUB_REPOSITORY）。
 */
export default defineConfig(({ command, mode }) => {
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
  const pagesBase = repoName ? `/${repoName}/` : '/'

  const base =
    command === 'build'
      ? pagesBase
      : command === 'serve' && mode === 'production'
        ? pagesBase
        : '/'

  return {
    base,
    plugins: [vue()],
    server: {
      port: 5173,
      open: true
    }
  }
})
