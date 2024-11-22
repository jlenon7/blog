import { Controller, type Context } from '@athenna/http'
import { ArticleService } from '#src/services/article.service'

@Controller()
export class ArticleController {
  public async index({ request, response }: Context) {
    const articleService = new ArticleService()
    const articles = await articleService.findAll(request.query('page', 0))

    return response.view('pages/articles/index', { articles })
  }

  public async show({ request, response }: Context) {
    const articleService = new ArticleService()
    const article = await articleService.findById(request.param('id'))

    return response.view('pages/article', { article })
  }
}
