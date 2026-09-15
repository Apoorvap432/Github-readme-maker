export default function renderDeveloper(data = {}) {
  return `# ${data.name || 'Developer'}\n\n${data.bio || 'Code, build, ship'}\n`
}
