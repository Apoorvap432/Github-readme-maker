export default function renderMinimal(data = {}) {
  return `# ${data.name || 'Your Name'}\n\n${data.bio || 'Profile description'}\n`
}
