import * as dateFns from 'date-fns'

import { Service } from '@athenna/ioc'
import { Path, Ulid, File } from '@athenna/common'
import { Article } from '#src/database/models/article'

@Service()
export class ArticleService {
  public async findAll(page: string = '0') {
    const articles = await Article.query()
      .select('id', 'title', 'description', 'created_at', 'deleted_at')
      .orderBy('created_at', 'desc')
      .paginate(parseInt(page), 5)

    articles.data = articles.data.map(article => {
      article.created_at = dateFns.format(article.created_at, 'PP')

      return article
    })

    return articles
  }

  public async findById(id: string) {
    const article = await Article.query().where('id', id).findOrFail()
    const articlePath = Path.resources(`articles/${article.content_path}`)
    const content = await new File(articlePath).getContentAsString()

    article.content = content

    return article
  }

  public async create(data: Partial<Article>) {
    const articlePath = Path.resources(`articles/${data.content_path}`)
    const content = await new File(articlePath, data.content).getContentAsString()

    return Article.create({
      id: Ulid.generate(),
      title: data.title,
      description: data.description,
      content_path: data.content_path,
      read_time: `${Math.ceil(content.split(' ').length / 200)} min`
    })
  }

  public async update(id: string, data: Partial<Article>) {
    const articlePath = Path.resources(`articles/${data.content_path}`)
    const content = await new File(articlePath, data.content).getContentAsString()

    return Article.query()
      .where('id', id)
      .update({
        title: data.title,
        description: data.description,
        content_path: data.content_path,
        read_time: `${Math.ceil(content.split(' ').length / 200)} min`
      })
  }

  public async delete(id: string) {
    const article = await this.findById(id)

    const articlePath = Path.resources(`articles/${article.content_path}`)

    await new File(articlePath).remove()

    await article.delete()

    return article
  }
}
