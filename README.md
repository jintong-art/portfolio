# 个人主页 - Personal Portfolio

一个使用 Vue 3 构建的现代化个人主页，采用简洁的设计风格。

## ✨ 特性

- 🎨 现代化的简洁设计
- 📱 完全响应式（支持移动设备）
- ⚡ 基于 Vite 的快速开发体验
- 🎯 平滑的页面导航
- 💼 项目展示组件
- 📧 联系方式集成

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动本地开发服务器

```bash
npm run dev
```

开发服务器将在 `http://localhost:5173` 启动，并自动打开浏览器。

### 3. 构建生产版本

```bash
npm run build
```

### 4. 预览生产构建

```bash
npm run preview
```

## 📁 项目结构

```
personal-portfolio/
├── index.html              # 主HTML文件
├── package.json            # 项目配置和依赖
├── vite.config.js          # Vite配置文件
├── README.md               # 项目说明文档
└── src/
    ├── main.js             # Vue应用入口
    ├── App.vue             # 根组件
    └── components/
        └── ProjectCard.vue # 项目卡片组件
```

## 🎨 页面结构

- **Header** - 导航栏（顶部固定）
- **Hero Section** - 欢迎部分
- **About Section** - 关于我
- **Projects Section** - 项目展示
- **Contact Section** - 联系方式
- **Footer** - 页脚

## 🛠️ 技术栈

- **Vue 3** - 前端框架
- **Vite** - 构建工具
- **CSS3** - 样式（使用CSS Grid和Flexbox）
- **JavaScript** - 交互逻辑

## ✏️ 自定义内容

### 修改个人信息

编辑 [src/App.vue](src/App.vue)：
- 修改 Hero Section 中的欢迎文字
- 更新 About Section 的自我介绍
- 修改技能标签

### 添加项目

在 [src/App.vue](src/App.vue) 中的 `projects` 数组添加新项目：

```javascript
{
  id: 5,
  title: '你的项目名称',
  description: '项目描述',
  tags: ['标签1', '标签2'],
  link: '#'
}
```

### 更新联系方式

编辑 [src/App.vue](src/App.vue) 中的联系链接：
- Email: `your.email@example.com`
- GitHub, LinkedIn, Twitter 等社交媒体链接

## 📝 注意事项

- 所有个人信息需要在 src/App.vue 中手动更新
- 项目截图和详细信息可以根据需要进一步定制
- 如需添加更多功能，可以创建新的 Vue 组件

## 🌐 部署

项目可以部署到以下平台：
- Netlify
- Vercel
- GitHub Pages
- 自己的服务器

## 📄 许可证

MIT
