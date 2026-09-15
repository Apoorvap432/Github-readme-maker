export default function renderSpidermanInspired(data = {}) {
  return `# ${data.name || 'Spider Hero'}\n\n${data.bio || 'With great code, comes great responsibility.'}\n`
}
