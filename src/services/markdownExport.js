export function copyMarkdown(markdown) {
  return navigator.clipboard?.writeText(markdown)
}

export function downloadMarkdown(markdown, filename = 'readme.md') {
  const blob = new Blob([markdown], { type: 'text/markdown' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = url
  link.download = filename
  link.click()

  URL.revokeObjectURL(url)
}
