import feather from 'feather-icons'

export function articlesComponent(articles) {
  articles = JSON.parse(articles)

  return {
    articles,
    async fetchArticles(page = 0) {
      try {
        if (page !== articles.meta.currentPage) {
          const response = await fetch(`/api/v1/articles?page=${page}`)
          const data = await response.json()

          this.articles.data = data.data
          this.articles.meta = data.meta
        }

        feather.replace()
      } catch (err) {
        console.error('Failed to fetch articles', err)
      }
    },
    async loadMoreArticles() {
      if (this.articles.meta.currentPage + 1 <= this.articles.meta.totalPages) {
        this.articles.meta.currentPage += 1
        await this.fetchArticles(this.articles.meta.currentPage)
        feather.replace()
      }
    },
    async init() {
      await this.fetchArticles()
      feather.replace()
    }
  }
}
