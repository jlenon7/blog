import { BaseSeeder } from '@athenna/database'
import { Article } from '#src/database/models/article'
import { Path, Ulid, File, String } from '@athenna/common'

export class ArticlesSeeder extends BaseSeeder {
  public async run() {
    const articles = [
      {
        title: 'Using GPT with RAG to answer questions about Athenna',
        content_path: 'using_gpt_with_rag_to_answer_questions_about_athenna.html',
        description:
          'Showing off how we can use Retrieval-Augmented Generation (RAG) techniques to provide more knowledge to an LLM for better responses.'
      }
    ]

    for (const article of articles) {
      const contentPath = Path.resources(`articles/${article.content_path}`)
      const content = new File(contentPath).getContentAsStringSync()

      const articleToUpdate = await Article.query()
        .where('title', article.title)
        .find()

      const data = {
        title: article.title,
        description: article.description,
        content_path: article.content_path,
        read_time: `${Math.ceil(content.split(' ').length / 200)} min`
      }

      if (articleToUpdate) {
        await Article.update({ id: articleToUpdate.id }, data)

        continue
      }

      await Article.create({ id: Ulid.generate(), ...data })
    }
  }
}
