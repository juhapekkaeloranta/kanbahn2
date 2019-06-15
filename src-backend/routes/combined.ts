import { Request, Response, Router } from 'express'
import { getTasks } from '../database/taskQueries'
import { server_log_info } from '../server_loggers';
import { getAllData } from '../database/commonQueries';
import { Tables } from '../../src-common/entity/Combined';

const router = Router()

router.get('/api/v1/state', async (request: Request, response: Response) => {
  server_log_info('GET /api/v1/state')
  const tables: Tables = await getAllData()
  response.send({ state: tables })
})

export default router