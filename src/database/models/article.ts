import { faker } from '@faker-js/faker'
import { String } from '@athenna/common'
import { Column, BaseModel } from '@athenna/database'

export class Article extends BaseModel {
  @Column()
  public id: string

  @Column()
  public title: string

  @Column()
  public read_time: string

  @Column()
  public description: string

  @Column()
  public content_path: string

  @Column({ isCreateDate: true })
  public created_at: Date

  @Column({ isUpdateDate: true })
  public updated_at: Date

  @Column({ isDeleteDate: true })
  public deleted_at: Date

  public content: string

  public static async definition(): Promise<Partial<Article>> {
    return {
      id: faker.string.ulid(),
      title: `${String.toSentenceCase(
        faker.lorem.word()
      )} ${faker.lorem.word()} ${faker.lorem.word()}`,
      description: faker.lorem.paragraph(),
      read_time: `${Math.ceil(faker.lorem.paragraph().split(' ').length / 200)} min`,
      content_path: `${String.toSnakeCase(faker.lorem.word())}.html`,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    }
  }
}
