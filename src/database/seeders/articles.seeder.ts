import { Article } from '#src/models/article'
import { BaseSeeder } from '@athenna/database'
import { Path, Ulid, File, String } from '@athenna/common'

export class ArticlesSeeder extends BaseSeeder {
  public async run() {
    const articles = [
      {
        title: 'Heroku alternatives for free API deployment',
        description:
          'Needs to deploy an API just to test something quick but now Heroku is paid only? Check out Render.com'
      },
      {
        title: 'Using GPT with RAG to answer questions about Athenna',
        description:
          'Showing off how we can use Retrieval-Augmented Generation (RAG) techniques to provide more knowledge to an LLM for better responses.'
      }
    ]

    for (const article of articles) {
      const articlePath = this.getArticlePath(article.title)
      const content = new File(articlePath).getContentAsStringSync()

      const articleToUpdate = await Article.query()
        .where('title', article.title)
        .find()

      const data = {
        title: article.title,
        description: article.description,
        content,
        read_time: `${Math.ceil(content.split(' ').length / 200)} min`
      }

      if (articleToUpdate) {
        await Article.update({ id: articleToUpdate.id }, data)

        continue
      }

      await Article.create({ id: Ulid.generate(), ...data })
    }
  }

  public getArticlePath(title: string) {
    return Path.resources(`articles/${String.toSnakeCase(title)}.html`)
  }
}
