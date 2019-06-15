import { db, yesql } from './connection'
import { Tables } from '../../src-common/entity/Combined';

interface pgResult {
  rows: Array<any>,
  fields: Array<any>,
  rowCount: number,
  command: string
}

function firstRow( result: pgResult ) {
  return result.rows[0] || undefined
}

export async function getAllData() {
  const tables: Tables = firstRow(await db.query(yesql.getAllAsJson().text, null))
  return tables
}