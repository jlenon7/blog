import { ulid } from 'ulid'
import { Article } from '#src/models/article'
import { BaseSeeder } from '@athenna/database'
import { Path, File, String } from '@athenna/common'

export class ArticlesSeeder extends BaseSeeder {
  public async run() {
    const articles = [
      {
        title: 'Heroku alternatives for Free API deployment',
        description:
          'Needs to deploy an API just to test something quick but now Heroku is paid only? Check out Render.com'
      },
      {
        title: 'Using GPT with RAG to answer questions about Athenna',
        description:
          'Showing off how we can use Retrieval-Augmented Generation (RAG) techniques to provide more knowledge to a LLM so he could provide better responses.'
      }
    ]

    const promises = articles.map(article => {
      const content = new File(
        this.getArticlePath(article.title)
      ).getContentAsStringSync()

      return Article.createOrUpdate(
        { title: article.title },
        {
          id: ulid(),
          title: article.title,
          description: article.description,
          content,
          read_time: `${Math.ceil(content.split(' ').length / 200)} min`
        }
      )
    })

    await Promise.all(promises)
  }

  public getArticlePath(title: string) {
    return Path.resources(`articles/${String.toSnakeCase(title)}.html`)
  }
}
