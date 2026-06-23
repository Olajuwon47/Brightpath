# GENERATE schema for prima

📌 Important Notes
Redis support via Prisma is experimental or limited depending on what you're trying to model (e.g., key-value models).

For real-world Redis tasks (e.g., caching tokens, pub/sub)

Make sure both Prisma clients are generated using the correct outputs

```bash
# iniatia l is the the prima makesure u have db create
$ npx prisma init  --datasource-provider PostgreSQL 
# prima generate and Required after every change to your schema.prisma
$ npx prisma generate
# After creating the database and defining models:
$ npx prisma migrate dev --name init
# production
$ npx prisma migrate deploy
```

## [more on about above read more](https://satisfyhost.com/blog/prisma-migrate-could-not-create-the-shadow-database/)

## [prima doc for above](https://www.prisma.io/docs/orm/prisma-migrate/understanding-prisma-migrate/shadow-database)
