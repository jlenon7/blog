import { Controller, type Context } from '@athenna/http'
import { ArticleService } from '#src/services/article.service'

@Controller()
export class ArticleController {
  public async index({ request, response }: Context) {
    const articleService = new ArticleService()
    const articles = await articleService.findAll(
      parseInt(request.query('page', 0))
    )

    if (request.header('hx-request')) {
      return response.view('components/article/list', { articles })
    }

    return response.view('articles', { articles })
  }

  public async show({ request, response }: Context) {
    const articleService = new ArticleService()
    const article = await articleService.findById(request.param('id'))

    return response.view('article', { article })
  }

  public async store({ request, response }: Context) {
    const articleService = new ArticleService()
    const article = await articleService.create(
      request.only(['title', 'description', 'content'])
    )

    return response.status(200).body(article)
  }
}
