import { BaseSeeder } from '@athenna/database'
import { File, Ulid, Path } from '@athenna/common'
import { Experience } from '#src/models/experience'

export class ExperienceSeeder extends BaseSeeder {
  public async run() {
    const logosPath = Path.resources('logos.json')
    const images = await new File(logosPath).getContentAsJson()

    await Experience.truncate()

    await Experience.create({
      id: Ulid.generate(),
      role: 'System Engineer',
      company: 'Cloudflare',
      base64_company_logo: images.Cloudflare,
      start_date: Experience.getDate(6, 2024),
      end_date: null
    })

    await Experience.create({
      id: Ulid.generate(),
      role: 'Contributor',
      company: 'Node.js',
      base64_company_logo: images['Node.js'],
      start_date: Experience.getDate(2, 2023),
      end_date: null
    })

    await Experience.create({
      id: Ulid.generate(),
      role: 'Core Team (Co-Creator)',
      company: 'Athenna Framework',
      base64_company_logo: images['Athenna Framework'],
      start_date: Experience.getDate(11, 2021),
      end_date: null
    })

    await Experience.create({
      id: Ulid.generate(),
      role: 'Software Engineering Consultant at Reflaunt',
      company: 'Smart Consulting',
      base64_company_logo: images['Smart Consulting'],
      start_date: Experience.getDate(5, 2023),
      end_date: Experience.getDate(6, 2024)
    })

    await Experience.create({
      id: Ulid.generate(),
      role: 'Back-end Developer',
      company: 'Semantix',
      base64_company_logo: images.Semantix,
      start_date: Experience.getDate(3, 2021),
      end_date: Experience.getDate(5, 2023)
    })

    await Experience.create({
      id: Ulid.generate(),
      role: 'Back-end Developer and DevOps',
      company: 'BraPay',
      base64_company_logo: images.BraPay,
      start_date: Experience.getDate(5, 2018),
      end_date: Experience.getDate(3, 2021)
    })
  }
}
