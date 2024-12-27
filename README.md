# Blog 🖼️

> My blog implementation using Athenna Framework and AlpineJS.

## Running

Install dependencies and set up the environment variables (don't forget to define a valid `DB_URL` inside your `.env` file):

```shell
npm install && cp .env.example .env
```

Run seeders to get my experience and articles defined in your database, might need to change the content of those files for your case:

```shell
node artisan db:seed
```

Run Vite in watch mode for js/css compilation:

```shell
vite build --watch
```

Run the HTTP server in watch mode:

```shell
node artisan serve --watch
```

Voilà! Open http://localhost:3000 to see the blog
