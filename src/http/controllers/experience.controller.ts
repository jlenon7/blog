import { Controller, type Context } from '@athenna/http'
import { ExperienceService } from '#src/services/experience.service'

@Controller()
export class ExperienceController {
  public async index({ response }: Context) {
    const experienceService = new ExperienceService()
    const experiences = await experienceService.findAll()

    return response.status(200).send(experiences)
  }

  public async show({ request, response }: Context) {
    const experienceService = new ExperienceService()
    const experience = await experienceService.findById(request.param('id'))

    return response.status(200).send(experience)
  }

  public async store({ request, response }: Context) {
    const experienceService = new ExperienceService()
    const experience = await experienceService.create(
      request.only([
        'company',
        'duration',
        'start_date',
        'end_Date',
        'base64_company_logo'
      ])
    )

    return response.status(201).send(experience)
  }

  public async update({ request, response }: Context) {
    const experienceService = new ExperienceService()
    const experience = await experienceService.update(
      request.param('id'),
      request.only([
        'company',
        'duration',
        'start_date',
        'end_Date',
        'base64_company_logo'
      ])
    )

    return response.status(200).send(experience)
  }

  public async delete({ request, response }: Context) {
    const experienceService = new ExperienceService()
    await experienceService.delete(request.param('id'))

    return response.status(204).send()
  }
}
