function maxNumberOfBalloons(text: string): number {
  const counts = new Map()
  const characters = ["b", "a", "l", "o", "n"]
  
  for (const c of text) {
    if (characters.includes(c)) {
      counts.set(c, (counts.get(c) || 0) + 1)
    }
  }
  
  const b = counts.get("b") || 0
  const a = counts.get("a") || 0
  const l = Math.floor((counts.get("l") || 0) / 2)
  const o = Math.floor((counts.get("o") || 0) / 2)
  const n = counts.get("n") || 0
  
  return Math.min(b, a, l, o, n)
}
