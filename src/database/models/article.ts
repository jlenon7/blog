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
  public content: string

  @Column({ isCreateDate: true })
  public created_at: Date

  @Column({ isUpdateDate: true })
  public updated_at: Date

  @Column({ isDeleteDate: true })
  public deleted_at: Date

  public static async definition(): Promise<Partial<Article>> {
    const content = `<h1>${String.toSentenceCase(
      `${faker.lorem.word()} ${faker.lorem.word()} ${faker.lorem.word()}`
    )}</h1>\n<p class="mt-2">${faker.lorem.paragraphs()}</p>`

    return {
      id: faker.string.ulid(),
      title: `${String.toSentenceCase(
        faker.lorem.word()
      )} ${faker.lorem.word()} ${faker.lorem.word()}`,
      description: faker.lorem.paragraph(),
      read_time: `${Math.ceil(content.split(' ').length / 200)} min`,
      content,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    }
  }
}
