import { Interceptor } from '@athenna/http'
import type { InterceptorContract, InterceptContext } from '@athenna/http'

@Interceptor({ name: 'response' })
export class ResponseInterceptor implements InterceptorContract {
  public async intercept(ctx: InterceptContext): Promise<unknown> {
    return {
      statusCode: ctx.response.statusCode,
      data: ctx.response.body
    }
  }
}
