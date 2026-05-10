/**
 * 作品集单一数据源：首页「精选作品」与作品列表、详情页共用。
 */

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
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
    description: '',
    tags: [],
    youtubeUrl: 'https://youtu.be/f5S9rP8NIkg?si=1JH0tXU5_7ThpoqL'
  },
  {
    id: 2,
    category: '',
    title: 'THE SEA',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    description: '',
    tags: [],
    youtubeUrl: 'https://youtu.be/KNdo8s86aiY?si=K_HMv7aeZhX9cPuv'
  },
  {
    id: 3,
    category: '',
    title: 'THE DESERT SECRET',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    description: '',
    tags: [],
    youtubeUrl: 'https://youtu.be/EFMsKjfEXjg?si=FEDAHunAhwoOWSDI'
  }
]
