const Controller = require('egg').Controller;

class GoodsController extends Controller {
  // async create() {
  //   const { ctx } = this;
  //   const data = {
  //     ...ctx.request.body,
  //     createTime: moment().format('YYYY-MM-DD HH:mm:ss'),
  //   };
  //   const res = await ctx.service.goods.create(data);
  //   if (res) {
  //     ctx.body = {
  //       status: 200,
  //       data: res
  //     }
  //   } else {
  //     ctx.body = {
  //       status: 500,
  //       msg: '发布文章失败'
  //     }
  //   }
  // }

  async lists() {
    const { ctx } = this;
    const res = await ctx.service.goods.lists();
    if (res) {
      ctx.body = {
        status: 200,
        data: res
      }
    } else {
      ctx.body = {
        status: 500,
        msg: '查询失败'
      }
    }
  }
  async detail() {
    const { ctx } = this;
    const res = await ctx.service.goods.detail(ctx.params.id);
    if (res) {
      ctx.body = {
        status: 200,
        data: res
      }
    } else {
      ctx.body = {
        status: 500,
        msg: '查询详情页失败'
      }
    }
  }
}
module.exports = GoodsController;