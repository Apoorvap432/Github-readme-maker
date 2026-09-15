export async function fetchUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`)

  if (!response.ok) {
    throw new Error('Unable to fetch GitHub user profile.')
  }

  return response.json()
}

export async function fetchRepos(username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)

  if (!response.ok) {
    throw new Error('Unable to fetch GitHub repositories.')
  }

  return response.json()
}
