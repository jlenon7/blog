import { Route } from '@athenna/http'

Route.get('/', 'HomeController.index')
Route.get('/articles', 'ArticleController.index')
Route.get('/articles/:id', 'ArticleController.show')

Route.group(() => {
  Route.get('/articles', 'ApiArticleController.index')
  Route.get('/articles/:id', 'ApiArticleController.show')

  Route.group(() => {
    Route.post('/articles', 'ApiArticleController.store')
    Route.put('/articles/:id', 'ApiArticleController.update')
    Route.delete('/articles/:id', 'ApiArticleController.delete')
  }).middleware('auth')
}).prefix('/api/v1')
