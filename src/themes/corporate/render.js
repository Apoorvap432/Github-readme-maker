export default function renderCorporate(data = {}) {
  return `# ${data.name || 'Company Profile'}\n\n${data.bio || 'Professional bio'}\n`
}
