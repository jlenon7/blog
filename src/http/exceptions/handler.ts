import { type ErrorContext, HttpExceptionHandler } from '@athenna/http'

export class Handler extends HttpExceptionHandler {
  public async handle(ctx: ErrorContext) {
    if (
      ctx.error.code === 'E_NOT_FOUND_ERROR' ||
      ctx.error.code === 'E_NOT_FOUND_DATA_ERROR'
    ) {
      await ctx.response.view('pages/not-found')

      return
    }

    super.handle(ctx)
  }
}
