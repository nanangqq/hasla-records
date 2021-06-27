import Router from 'koa-router'
import { executeQ } from './util'
// import Axios from 'axios'

const api = new Router()

api.get('/test', async ctx => {
    // ctx.body = 'test ok'
    const res = await executeQ('select * from hasla_records')
    // console.log(res)
    ctx.body = res.rows
})

export default api
