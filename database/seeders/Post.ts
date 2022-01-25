import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post';
import { PostFactory } from 'Database/factories'

export default class PostSeeder extends BaseSeeder {
  public async run () {
      const posts = await PostFactory.createMany(40);
      Post.createMany(posts)
  }
}
