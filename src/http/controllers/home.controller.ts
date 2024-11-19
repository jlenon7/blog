import { HomeService } from '#src/services/home.service'
import { Controller, type Context } from '@athenna/http'

@Controller()
export class HomeController {
  public async index({ response }: Context) {
    const homeService = new HomeService()

    return response.view('home', await homeService.index())
  }
}
