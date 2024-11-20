import { Service } from '@athenna/ioc'
import { Experience } from '#src/models/experience'

@Service()
export class HomeService {
  public async index() {
    const experiences = await Experience.query().findMany()

    return {
      experiences: experiences
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
  }
}
