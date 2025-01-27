import type { Context, MiddlewareContract } from '@athenna/http'
import { Middleware, UnauthorizedException } from '@athenna/http'

@Middleware({ name: 'auth' })
export class AuthMiddleware implements MiddlewareContract {
  public async handle({ request }: Context): Promise<void> {
    const apiKey = request.query('api_key')

    if (!apiKey) {
      throw new UnauthorizedException()
    }

    if (apiKey !== Config.get('secrets.API_KEY')) {
      throw new UnauthorizedException()
    }
  }
}
