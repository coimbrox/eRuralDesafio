import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from '@ioc:Adonis/Core/Validator'
import Sala from 'App/Models/Sala'

export default class SalasController {
  public async index({}: HttpContextContract) {
    try {
      const salas = await Sala.all()
      return salas
    } catch (err) {
      console.log(err)
    }
  }

  public async store({ request }: HttpContextContract) {
    try {
      const importVideoSchema = schema.create({
        title: schema.string(),
        video: schema.file({
          size: '8mb',
          extnames: ['avi', 'mp4', 'mkv'],
        }),
      })

      // const createData = request.all()

      // const sala = await Sala.create(createData)

      // return sala
    } catch (err) {
      console.log(err)
    }
  }

  public async show({ params }: HttpContextContract) {
    try {
      const sala = await Sala.findOrFail(params.id)
      return sala
    } catch (err) {
      console.log(err)
    }
  }

  public async update({ request, params }: HttpContextContract) {
    try {
      const updateData = request.all()
      const sala = await Sala.findOrFail(params.id)
      sala.merge(updateData)
      await sala.save()
      return sala
    } catch (err) {
      console.log(err)
    }
  }

  public async destroy({ params }: HttpContextContract) {
    try {
      const sala = await Sala.findOrFail(params.id)
      await sala.delete()
    } catch (err) {
      console.log(err)
    }
  }
}
