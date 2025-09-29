import { Ulid } from '@athenna/common'
import { Service } from '@athenna/ioc'
import { Experience } from '#src/database/models/experience'

@Service()
export class ExperienceService {
  public async findAll() {
    const experiences = await Experience.query().findMany()

    return experiences
      .map(experience => experience.formatDates())
      .sort((a, b) => {
        if (!a.end_date && !b.end_date) {
          return b.start_date.getTime() - a.start_date.getTime()
        }

        if (!a.end_date) {
          return -1
        }

        if (!b.end_date) {
          return 1
        }

        const endDateComparison = b.end_date.getTime() - a.end_date.getTime()

        if (endDateComparison !== 0) {
          return endDateComparison
        }

        return b.start_date.getTime() - a.start_date.getTime()
      })
  }

  public async findById(id: string) {
    return Experience.query().where('id', id).findOrFail()
  }

  public async create(data: Partial<Experience>) {
    return Experience.create({
      id: Ulid.generate(),
      company: data.company,
      duration: data.duration,
      start_date: Experience.getDate(
        data.start_date.getMonth(),
        data.start_date.getFullYear()
      ),
      end_date: Experience.getDate(
        data.end_date.getMonth(),
        data.end_date.getFullYear()
      ),
      base64_company_logo: data.base64_company_logo
    })
  }

  public async update(id: string, data: Partial<Experience>) {
    return Experience.query()
      .where('id', id)
      .update({
        company: data.company,
        duration: data.duration,
        start_date: Experience.getDate(
          data.start_date.getMonth(),
          data.start_date.getFullYear()
        ),
        end_date: Experience.getDate(
          data.end_date.getMonth(),
          data.end_date.getFullYear()
        ),
        base64_company_logo: data.base64_company_logo
      })
  }

  public async delete(id: string) {
    return Experience.query().where('id', id).delete()
  }
}
