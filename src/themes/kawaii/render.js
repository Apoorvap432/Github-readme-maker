export default function renderKawaii(data = {}) {
  return `# ${data.name || 'Cute Coder'}\n\n${data.bio || 'Making ideas adorable'}\n`
}
