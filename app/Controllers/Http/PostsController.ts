import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index({}: HttpContextContract) {
    return Post.all()
  }

  public async store({ request }: HttpContextContract) {
    const body = request.only(['title', 'content']);

    return Post.create({
      title: body.title,
      content: body.content,
    })
  }

  public async show({ request }: HttpContextContract) {
    return Post.findBy('id', request.param('id'));
  }

  public async update({ request }: HttpContextContract) {
    const post = await Post.findByOrFail('id', request.param('id'));

    return post.merge(request.body()).save()
  }

  public async destroy({ request }: HttpContextContract) {
    const post = await Post.findByOrFail('id', request.param('id'));
    await post.delete()
  }
}
