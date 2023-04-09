export const fetchDEVToArticle = async (id: string) => {
  try {
    const response = await fetch(`https://dev.to/api/articles/${id}`)

    const article = await response.json()

    return article
  } catch (error) {
    console.error("Error fetching article:", error)
  }
}
