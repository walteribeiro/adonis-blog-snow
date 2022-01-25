import Factory from '@ioc:Adonis/Lucid/Factory'
import Post from 'App/Models/Post'


export const PostFactory = Factory
  .define(Post, ({ faker }) => {
    return {
      title: faker.lorem.words(2),
      content: faker.lorem.sentences(7),
    }
  }).build()
