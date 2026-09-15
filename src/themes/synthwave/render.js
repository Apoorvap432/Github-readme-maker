export default function renderSynthwave(data = {}) {
  return `# ${data.name || 'Synthwave Dev'}\n\n${data.bio || 'Chasing the sunset line'}\n`
}
