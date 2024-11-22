import { Controller, type Context } from '@athenna/http'
import { ArticleService } from '#src/services/article.service'

@Controller()
export class ApiArticleController {
  public async index({ request, response }: Context) {
    const articleService = new ArticleService()
    const articles = await articleService.findAll(request.query('page', 0))

    return response.status(200).send(articles)
  }

  public async show({ request, response }: Context) {
    const articleService = new ArticleService()
    const article = await articleService.findById(request.param('id'))

    return response.status(200).send(article)
  }

  public async store({ request, response }: Context) {
    const articleService = new ArticleService()
    const article = await articleService.create(
      request.only(['title', 'description', 'content'])
    )

    return response.status(201).send(article)
  }

  public async update({ request, response }: Context) {
    const articleService = new ArticleService()
    const article = await articleService.update(
      request.param('id'),
      request.only(['title', 'description', 'content'])
    )

    return response.status(200).send(article)
  }

  public async delete({ request, response }: Context) {
    const articleService = new ArticleService()
    await articleService.delete(request.param('id'))

    return response.status(204).send()
  }
}
