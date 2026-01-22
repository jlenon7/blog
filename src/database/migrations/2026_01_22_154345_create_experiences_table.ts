import { BaseMigration, type DatabaseImpl } from '@athenna/database'

export class CreateExperiencesTable extends BaseMigration {
  public tableName = 'experiences'

  public async up(db: DatabaseImpl) {
    return db.createTable(this.tableName, builder => {
      builder.string('id').primary()
      builder.string('role').notNullable()
      builder.string('company').notNullable()
      builder.string('base64_company_logo').notNullable()
      builder.timestamp('start_date').notNullable()
      builder.timestamp('end_date').nullable()
      builder.timestamps(true, true, false)
      builder.timestamp('deleted_at').nullable()
    })
  }

  public async down(db: DatabaseImpl) {
    return db.dropTable(this.tableName)
  }
}
