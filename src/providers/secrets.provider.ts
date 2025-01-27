import { InfisicalSDK } from '@infisical/sdk'
import { ServiceProvider } from '@athenna/ioc'

export default class SecretsProvider extends ServiceProvider {
  public async boot() {
    const client = new InfisicalSDK()
    const { secrets } = await client
      .auth()
      .accessToken(Env('SECRETS_TOKEN'))
      .secrets()
      .listSecrets({
        environment: 'prod',
        projectId: '66a27b1b-9c51-411b-844b-26e4a5da9e64'
      })

    secrets.forEach(secret => {
      const key = secret.secretKey
      const value = secret.secretValue

      Config.set(`secrets.${key}`, value)
    })
  }
}
