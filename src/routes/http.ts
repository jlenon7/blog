import { Route } from '@athenna/http'

Route.get('/', 'HomeController.index')
Route.get('/articles', 'ArticleController.index')
Route.get('/articles/:id', 'ArticleController.show')

Route.group(() => {
  Route.post('/articles', 'ArticleController.store')
})
  .prefix('/api/v1')
  .middleware('auth')
