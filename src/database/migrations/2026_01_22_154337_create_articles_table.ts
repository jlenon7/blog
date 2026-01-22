import { BaseMigration, type DatabaseImpl } from '@athenna/database'

export class CreateArticlesTable extends BaseMigration {
  public tableName = 'articles'

  public async up(db: DatabaseImpl) {
    return db.createTable(this.tableName, builder => {
      builder.string('id').primary()
      builder.string('title').notNullable()
      builder.string('read_time').notNullable()
      builder.string('description').notNullable()
      builder.text('content_path').notNullable()
      builder.timestamps(true, true, false)
      builder.timestamp('deleted_at').nullable()
    })
  }

  public async down(db: DatabaseImpl) {
    return db.dropTable(this.tableName)
  }
}
