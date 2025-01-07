# Blog 🖼️

> My blog implementation using Athenna Framework and React.

## Running

Install dependencies and set up the environment variables (don't forget to define a valid `DB_URL` inside your `.env` file):

```shell
npm install && cp .env.example .env
```

Run seeders to get my experience and articles defined in your database, might need to change the content of seeder files (`src/database/seeders`) for your case:

```shell
node artisan db:seed
```

Run the HTTP server:

```shell
node artisan serve --watch
```

Voilà! Open http://localhost:3000 to see the blog
