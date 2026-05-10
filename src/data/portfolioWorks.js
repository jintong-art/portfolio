/**
 * 作品集单一数据源：首页「精选作品」与作品列表、详情页共用。
 */

/** `public/` 下的静态资源（兼容 GitHub Pages 的 Base URL） */
const pub = (file) => `${import.meta.env.BASE_URL}${file}`

/** 从 YouTube 分享链接解析视频 ID，用于 embed */
export function youtubeVideoId(url) {
  if (!url || typeof url !== 'string') return null
  try {
    const u = new URL(url.trim())
    const host = u.hostname.replace(/^www\./, '')
    if (host === 'youtu.be') {
      return u.pathname.replace(/^\//, '').split('/')[0] || null
    }
    if (host === 'youtube.com' || host === 'm.youtube.com') {
      const v = u.searchParams.get('v')
      if (v) return v
      const m = u.pathname.match(/\/embed\/([^/]+)/)
      if (m) return m[1]
    }
  } catch {
    return null
  }
  return null
}

export function youtubeEmbedSrc(url) {
  const id = youtubeVideoId(url)
  return id ? `https://www.youtube.com/embed/${id}` : null
}

export const portfolioWorks = [
  {
    id: 1,
    category: '',
    title: 'JEEP',
    image: pub('ljt3.png'),
    description: '',
    tags: [],
    youtubeUrl: 'https://youtu.be/f5S9rP8NIkg?si=1JH0tXU5_7ThpoqL'
  },
  {
    id: 2,
    category: '',
    title: 'THE SEA',
    image: pub('ljt2.png'),
    description: '',
    tags: [],
    youtubeUrl: 'https://youtu.be/KNdo8s86aiY?si=K_HMv7aeZhX9cPuv'
  },
  {
    id: 3,
    category: '',
    title: 'THE DESERT SECRET',
    image: pub('ljt1.png'),
    description: '',
    tags: [],
    youtubeUrl: 'https://youtu.be/EFMsKjfEXjg?si=FEDAHunAhwoOWSDI'
  }
]
