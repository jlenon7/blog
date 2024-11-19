import { Service } from '@athenna/ioc'
import { Article } from '#src/models/article'

@Service()
export class ArticleService {
  public async findAll(page = 0) {
    return Article.query()
      .select('id', 'title', 'description', 'created_at')
      .paginate(page, 5)
  }

  public async findById(id: string) {
    return Article.query().where('id', id).findOrFail()
  }

  public async create(data: Partial<Article>) {
    return Article.create({
      title: data.title,
      content: data.content,
      description: data.description,
      read_time: `${Math.ceil(data.content.split(' ').length / 200)} min`
    })
  }
}
