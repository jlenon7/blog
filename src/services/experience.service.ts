import { Ulid } from '@athenna/common'
import { Service } from '@athenna/ioc'
import { Experience } from '#src/database/models/experience'

@Service()
export class ExperienceService {
  public async findAll() {
    const experiences = await Experience.query()
      .orderByRaw('end_date IS NULL DESC')
      .orderBy('end_date', 'desc')
      .orderBy('start_date', 'desc')
      .findMany()

    return experiences.map(experience => experience.formatDates())
  }

  public async findById(id: string) {
    return Experience.query().where('id', id).findOrFail()
  }

  public async create(data: Partial<Experience>) {
    const startDate = new Date(data.start_date)
    const endDate = data.end_date ? new Date(data.end_date) : null

    return Experience.create({
      id: Ulid.generate(),
      company: data.company,
      duration: data.duration,
      start_date: Experience.getInitOfDayDateFromDate(startDate),
     end_date: Experience.getInitOfDayDateFromDate(endDate),
      base64_company_logo: data.base64_company_logo
    })
  }

  public async update(id: string, data: Partial<Experience>) {
    const startDate = new Date(data.start_date)
    const endDate = data.end_date ? new Date(data.end_date) : null

    return Experience.query()
      .where('id', id)
      .update({
        company: data.company,
        duration: data.duration,
        start_date: Experience.getInitOfDayDateFromDate(startDate),
        end_date: Experience.getInitOfDayDateFromDate(endDate),
        base64_company_logo: data.base64_company_logo
      })
  }

  public async delete(id: string) {
    return Experience.query().where('id', id).delete()
  }
}
