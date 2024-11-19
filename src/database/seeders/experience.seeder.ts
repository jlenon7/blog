import { File, Path } from '@athenna/common'
import { BaseSeeder } from '@athenna/database'
import { Experience } from '#src/models/experience'

export class ExperienceSeeder extends BaseSeeder {
  public async run() {
    const images = await new File(
      Path.resources('img/logos.json')
    ).getContentAsJson()

    await Experience.create({
      role: 'System Engineer',
      company: 'Cloudflare',
      base64_company_logo: images.Cloudflare,
      start_date: Experience.getDate(6, 2024),
      end_date: null
    })

    await Experience.create({
      role: 'Contributor',
      company: 'Node.js',
      base64_company_logo: images['Node.js'],
      start_date: Experience.getDate(2, 2023),
      end_date: null
    })

    await Experience.create({
      role: 'Core Team (Co-Creator)',
      company: 'Athenna Framework',
      base64_company_logo: images['Athenna Framework'],
      start_date: Experience.getDate(11, 2021),
      end_date: null
    })

    await Experience.create({
      role: 'Software Engineering Consultant at Reflaunt',
      company: 'Smart Consulting',
      base64_company_logo: images['Smart Consulting'],
      start_date: Experience.getDate(5, 2023),
      end_date: Experience.getDate(6, 2024)
    })

    await Experience.create({
      role: 'Back-end Developer',
      company: 'Semantix',
      base64_company_logo: images.Semantix,
      start_date: Experience.getDate(3, 2021),
      end_date: Experience.getDate(5, 2023)
    })

    await Experience.create({
      role: 'Back-end Developer and DevOps',
      company: 'BraPay',
      base64_company_logo: images.BraPay,
      start_date: Experience.getDate(12, 2019),
      end_date: Experience.getDate(3, 2021)
    })

    await Experience.create({
      role: 'Freelance Software Engineer',
      company: 'Netliv',
      base64_company_logo: images.Netliv,
      start_date: Experience.getDate(5, 2018),
      end_date: Experience.getDate(12, 2019)
    })
  }
}
