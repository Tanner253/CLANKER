export function tiktokVideoId(input) {
  const value = String(input).trim()
  if (/^\d{8,}$/.test(value)) return value
  const match = value.match(/\/video\/(\d+)/)
  return match?.[1] ?? null
}

export function tiktokEmbedSrc(id) {
  return `https://www.tiktok.com/embed/v2/${id}`
}
