import { Ignite } from '@athenna/core'

const ignite = await new Ignite().installSourceMaps().load(import.meta.url)

await ignite.httpServer()
