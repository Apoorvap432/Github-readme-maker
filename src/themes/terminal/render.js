export default function renderTerminal(data = {}) {
  return `$ ${data.name || 'user'}@github:~$\n\n${data.bio || 'status: online'}\n`
}
