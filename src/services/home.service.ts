import { Service } from '@athenna/ioc'
import { Experience } from '#src/models/experience'

@Service()
export class HomeService {
  public async index() {
    const experiences = await Experience.findMany()

    return {
      experiences: experiences.map(experience => experience.formatDates())
    }
  }
}
