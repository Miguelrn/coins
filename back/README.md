# Coin Project

## Running the PostgreSQL Database

To start the PostgreSQL database with persistent storage, run:

```sh
docker-compose up -d
```

- The database will be available on `localhost:5432`.
- Default credentials:
  - **User:** `coinuser`
  - **Password:** `coinpass`
  - **Database:** `coindb`

To stop the database:

```sh
docker-compose down
```

The data will be persisted in the `pgdata` Docker volume.

---

## TypeORM Migrations

**Generate a migration:**
```sh
yarn typeorm migration:generate -d src/migrations/ MigrationName
```

**Run migrations manually:**
```sh
yarn typeorm migration:run
```

**Revert the last migration:**
```sh
yarn typeorm migration:revert
```

**Note:**  
Migrations will run automatically on app start if `migrationsRun: true` is set in your TypeORM config.

**Create new migration:**
```sh
yarn typeorm migration:generate -d ./src/data-source.ts ./src/migrations/CreateCoinTable
```