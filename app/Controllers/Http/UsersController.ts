import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
    try {
      const users = await User.all()
      return users
    } catch (err) {
      console.log(err)
    }
  }

  public async show({ params }: HttpContextContract) {
    try {
      const user = await User.findOrFail(params.id)
      return user
    } catch (err) {
      console.log(err)
    }
  }

  public async store({ request }: HttpContextContract) {
    try {
      const createData = request.all()

      const user = await User.create(createData)
      return user
    } catch (err) {
      console.log(err)
    }
  }

  public async update({ request, params }: HttpContextContract) {
    try {
      const updateData = request.all()

      const user = await User.findOrFail(params.id)
      user.merge(updateData)
      await user.save()
      return user
    } catch (err) {
      console.log(err)
    }
  }

  public async destroy({ params }: HttpContextContract) {
    try {
      const user = await User.findOrFail(params.id)
      await user.delete()
    } catch (err) {
      console.log(err)
    }
  }
}
