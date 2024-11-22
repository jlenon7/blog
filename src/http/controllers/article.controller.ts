import { Controller, type Context } from '@athenna/http'
import { ArticleService } from '#src/services/article.service'

@Controller()
export class ArticleController {
  public async index({ response }: Context) {
    return response.view('pages/articles')
  }

  public async show({ request, response }: Context) {
    const articleService = new ArticleService()
    const article = await articleService.findById(request.param('id'))

    return response.view('pages/article', { article })
  }
}
