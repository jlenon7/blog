import { faker } from '@faker-js/faker'
import { String } from '@athenna/common'
import { Column, BaseModel } from '@athenna/database'
import { differenceInMonths, format } from 'date-fns'

export class Experience extends BaseModel {
  @Column()
  public id: string

  @Column()
  public role: string

  @Column()
  public company: string

  @Column()
  public base64_company_logo: string

  @Column()
  public start_date: Date

  @Column()
  public end_date: Date

  @Column({ isCreateDate: true })
  public created_at: Date

  @Column({ isUpdateDate: true })
  public updated_at: Date

  @Column({ isDeleteDate: true })
  public deleted_at: Date

  public duration: string
  public end_date_formatted: string
  public start_date_formatted: string

  public formatDates() {
    const startDate = new Date(this.start_date)
    const endDate = this.end_date ? new Date(this.end_date) : new Date()

    const totalMonths = differenceInMonths(endDate, startDate) + 1
    const years = Math.floor(totalMonths / 12)
    const months = totalMonths % 12

    this.duration = `${
      years > 0 ? `${years} year${years > 1 ? 's' : ''}` : ''
    } ${months > 0 ? `${months} month${months > 1 ? 's' : ''}` : ''}`.trim()

    this.start_date_formatted = format(startDate, 'MMM yyyy')
    this.end_date_formatted = this.end_date
      ? format(endDate, 'MMM yyyy')
      : 'Present'

    return this
  }

  public static getDate(month: number, year: number) {
    const date = new Date()

    date.setDate(1)
    date.setHours(12, 0, 0, 0)
    date.setMonth(month - 1)
    date.setFullYear(year)

    return date
  }

  public static async definition(): Promise<Partial<Experience>> {
    return {
      id: faker.string.ulid(),
      role: 'Software Engineer',
      company: String.toSentenceCase(faker.lorem.word()),
      base64_company_logo: '',
      start_date: this.getDate(6, 2024),
      end_date: null,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    }
  }
}
