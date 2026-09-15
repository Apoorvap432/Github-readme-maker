export default function renderCyberpunk(data = {}) {
  return `# ${data.name || 'Neon Dev'}\n\n> ${data.bio || 'Building the future'}\n`
}
