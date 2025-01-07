import { Route } from '@athenna/http'

Route.get('*', 'AppController.index')

Route.group(() => {
  Route.get('/articles', 'ArticleController.index')
  Route.get('/articles/:id', 'ArticleController.show')

  Route.get('/experiences', 'ExperienceController.index')
  Route.get('/experiences/:id', 'ExperienceController.show')

  Route.group(() => {
    Route.post('/articles', 'ArticleController.store')
    Route.put('/articles/:id', 'ArticleController.update')
    Route.delete('/articles/:id', 'ArticleController.delete')

    Route.post('/experiences', 'ExperienceController.store')
    Route.put('/experiences/:id', 'ExperienceController.update')
    Route.delete('/experiences/:id', 'ExperienceController.delete')
  }).middleware('auth')
})
  .interceptor('response')
  .prefix('/api/v1')
