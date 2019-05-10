import { Request, Response, Router } from 'express'
import { getTasks } from '../database/taskQueries'
import { server_log_info } from '../server_loggers';

const router = Router()

router.get('/api/v1/tasks', async (request: Request, response: Response) => {
  server_log_info('GET /api/v1/tasks')
  const queryResult = await getTasks()
  response.send({ tasks: queryResult })
})

export default router