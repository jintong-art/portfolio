# Project Map

这个文件是给以后快速找页面用的。

## 先看哪里

每次切回这个项目，先看这 4 个文件：

1. [src/router/index.js](/C:/Users/lenovo/Desktop/lijintong/src/router/index.js)
2. [src/App.vue](/C:/Users/lenovo/Desktop/lijintong/src/App.vue)
3. [src/pages/Home.vue](/C:/Users/lenovo/Desktop/lijintong/src/pages/Home.vue)
4. [src/pages/Works.vue](/C:/Users/lenovo/Desktop/lijintong/src/pages/Works.vue)

## 页面对应关系

- `/` -> [src/pages/Home.vue](/C:/Users/lenovo/Desktop/lijintong/src/pages/Home.vue)
- `/works` -> [src/pages/Works.vue](/C:/Users/lenovo/Desktop/lijintong/src/pages/Works.vue)
- `/about` -> [src/pages/About.vue](/C:/Users/lenovo/Desktop/lijintong/src/pages/About.vue)

这里最重要的是 [src/router/index.js](/C:/Users/lenovo/Desktop/lijintong/src/router/index.js)。
以后只要忘了“当前网页到底是哪个文件”，先打开它。

## 文件夹怎么理解

- `src/pages/`：整页
- `src/components/`：页面里的局部模块
- `src/router/`：网址和页面的映射
- `src/App.vue`：全局外壳，主要是顶部导航、内容容器、底部页脚

## 这个项目里常见修改位置

- 改首页整体内容或配色： [src/pages/Home.vue](/C:/Users/lenovo/Desktop/lijintong/src/pages/Home.vue)
- 改作品页整体布局或视频卡片逻辑： [src/pages/Works.vue](/C:/Users/lenovo/Desktop/lijintong/src/pages/Works.vue)
- 改关于页： [src/pages/About.vue](/C:/Users/lenovo/Desktop/lijintong/src/pages/About.vue)
- 改全站导航和页脚： [src/App.vue](/C:/Users/lenovo/Desktop/lijintong/src/App.vue)
- 改单张项目卡片样式： [src/components/ProjectCard.vue](/C:/Users/lenovo/Desktop/lijintong/src/components/ProjectCard.vue)

## 最快定位方法

### 方法 1：从路由找

1. 打开 [src/router/index.js](/C:/Users/lenovo/Desktop/lijintong/src/router/index.js)
2. 找当前网址，比如 `/`
3. 看它对应哪个页面文件

### 方法 2：从页面文案找

在 VS Code 里按 `Ctrl + Shift + F`，搜索页面上能看到的文字，比如：

- `LiJinTong`
- `首页`
- `作品`
- `关于`
- 某个按钮文案

### 方法 3：从文件名找

在 VS Code 里按 `Ctrl + P`，直接搜：

- `Home.vue`
- `Works.vue`
- `About.vue`
- `App.vue`

## 一个很好用的判断

如果你不确定自己打开的是不是“整页”：

- 在 `src/pages/` 里，通常就是整页
- 在 `src/components/` 里，通常只是页面的一部分

## 回到项目时的固定动作

以后你从别的项目切回来，只做这三步就够了：

1. 打开 [src/router/index.js](/C:/Users/lenovo/Desktop/lijintong/src/router/index.js)
2. 确认当前网址对应的页面文件
3. 再决定要不要进 `components`

