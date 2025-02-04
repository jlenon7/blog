import { Path } from '@athenna/common'

export default {
  /*
  |--------------------------------------------------------------------------
  | Application host
  |--------------------------------------------------------------------------
  |
  | This value is the HOST of your application, and it's used to access your
  | application.
  |
  */

  host: Env('HOST', '0.0.0.0'),

  /*
  |--------------------------------------------------------------------------
  | Application port
  |--------------------------------------------------------------------------
  |
  | This value is the PORT of your application, and it's used to access your
  | application.
  |
  */

  port: Env('PORT', 3000),

  /*
  |--------------------------------------------------------------------------
  | Application domain
  |--------------------------------------------------------------------------
  |
  | This value is the APP_DOMAIN of your application, and it's used to access your
  | application.
  |
  */

  domain: Env('APP_DOMAIN', 'http://localhost:3000'),

  /*
  |--------------------------------------------------------------------------
  | Log http requests
  |--------------------------------------------------------------------------
  |
  | This value defines if HttpKernel will register a Logger to log all the
  | server requests.
  |
  */

  logger: {
    enabled: Env('LOG_HTTP', true),
    ignoreCodes: [],
    ignoreStatuses: []
  },

  /*
  |--------------------------------------------------------------------------
  | Configurations for @fastify/cors plugin.
  |--------------------------------------------------------------------------
  |
  | This values defines all the configurations for @fastify/cors plugins. Check
  | the documentation for more information:
  |
  | https://github.com/fastify/fastify-cors
  |
  */

  cors: {
    enabled: true,
    origin: ['*'],
    methods: ['*'],
    allowedHeaders: ['*'],
    exposedHeaders: ['*'],
    maxAge: 0,
    credentials: false
  },

  /*
  |--------------------------------------------------------------------------
  | Configurations for cls-rtracer plugin.
  |--------------------------------------------------------------------------
  |
  | This values defines all the configurations for cls-rtracer plugins. Check
  | the documentation for more information:
  |
  | https://github.com/puzpuzpuz/cls-rtracer
  |
  */

  rTracer: {
    enabled: true,
    echoHeader: false,
    useHeader: false,
    headerName: 'X-Request-Id',
    useFastifyRequestId: false
  },

  /*
  |--------------------------------------------------------------------------
  | Configurations for @fastify/helmet plugin.
  |--------------------------------------------------------------------------
  |
  | This values defines all the configurations for @fastify/helmet plugins. Check
  | the documentation for more information:
  |
  | https://github.com/fastify/fastify-helmet
  |
  */

  helmet: {
    enabled: true,
    global: true,
    contentSecurityPolicy: {
      useDefaults: false,
      directives: {
        defaultSrc: [
          "'self'",
          "'unsafe-eval'",
          "'unsafe-inline'",
          'data:',
          'localhost',
          '*.googletagmanager.com',
          '*.google-analytics.com',
          '*.googleapis.com',
          '*.gstatic.com'
        ]
      }
    }
  },

  /*
  |--------------------------------------------------------------------------
  | Configurations for @fastify/swagger and @fastify/swagger-ui plugins.
  |--------------------------------------------------------------------------
  |
  | This values defines all the configurations for @fastify/swagger and
  | @fastify/swagger-ui plugins. Check the documentation for more information:
  |
  | https://github.com/fastify/fastify-swagger
  | https://github.com/fastify/fastify-swagger-ui
  |
  */

  swagger: {
    enabled: false,
    ui: {
      staticCSP: true,
      routePrefix: '/docs'
    },
    configurations: {
      mode: 'dynamic',
      swagger: {
        basePath: '/',
        consumes: ['application/json'],
        produces: ['application/json'],
        info: {
          title: Config.get('app.name'),
          version: Config.get('app.version'),
          description: Config.get('app.description')
        },
        externalDocs: {
          url: 'https://athenna.io',
          description: 'Find more info about Athenna here'
        }
      }
    }
  },

  /*
  |--------------------------------------------------------------------------
  | Configurations for @fastify/rate-limit plugin.
  |--------------------------------------------------------------------------
  |
  | This values defines all the configurations for @fastify/rate-limit plugin.
  | Check the documentation for more information:
  |
  | https://github.com/fastify/fastify-rate-limit
  |
  */

  rateLimit: {
    enabled: true,
    global: true,
    max: 1000,
    ban: null,
    timeWindow: 1000 * 60,
    cache: 5000,
    allowList: [],
    continueExceeding: false,
    enableDraftSpec: false
  },

  /*
  |--------------------------------------------------------------------------
  | Configurations for @fastify/static plugin.
  |--------------------------------------------------------------------------
  |
  | This values defines all the configurations for @fastify/static plugin.
  | Check the documentation for more information:
  |
  | https://github.com/fastify/fastify-static
  |
  */
  static: {
    enabled: true,
    root: Path.public(),
    prefix: '/public/'
  },

  /*
  |--------------------------------------------------------------------------
  | Configurations for @athenna/vite plugin.
  |--------------------------------------------------------------------------
  |
  | This values defines all the configurations for @athenna/vite plugin.
  | Check the documentation for more information:
  |
  | https://athenna.io/docs/the-basics/vite
  |
  */
  vite: {
    enabled: true,
    root: Path.pwd(),
    dev: Config.isNot('app.environment', 'production'),
    buildDirectory: Path.public('assets'),
    manifestFile: Path.public('assets/.vite/manifest.json'),
    assetsUrl: '/public/assets',
    scriptAttributes: {
      defer: true
    },

    ssrEntrypoint: 'src/resources/app/app.tsx',
    ssrBuildDirectory: Path.public('assets/server')
  }
}
