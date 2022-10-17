import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/sala', 'SalasController.index')
  Route.get('/sala/:id', 'SalasController.show')
  Route.post('/sala', 'SalasController.store')
  Route.put('/sala/:id', 'SalasController.update')
  Route.delete('/sala/:id', 'SalasController.destroy')
})
