const Controller = require('egg').Controller;

class GoodsController extends Controller {
<<<<<<< Updated upstream
  async index() {
    const { ctx } = this;
    const res = await ctx.service.goods.index();
    const list = [
      1,2,3,4,5
    ];
    await ctx.render('home.html', {
      res,
      list
    });
  }
  // GET
  async detail() {
    const { ctx } = this;
    console.log(ctx.query);
    ctx.body = `hello, my id is ${ctx.query.id} and my name is ${ctx.query.name}`;
  }
  // GET
  async detailTwo() {
    const { ctx } = this;
    console.log(ctx.params);
    ctx.body = `hello, detailTwo, my id is ${ctx.params.id} and my name is ${ctx.params.name}`;
  }
  // POST
  async createGood() {
    const { ctx } = this;
    const { name, id } = ctx.request.body;
    console.log(ctx.request.body);
    ctx.body = {
      id: `back ${id}`,
      name: `back ${name}`,
    }
  }
  // PUT
  async updateGoods() {
    const { ctx } = this;
    console.log(ctx.params);
    ctx.body = {
      id: ctx.params.id,
    }
  }
  // DELETE
  async deleteGoods() {
    const { ctx } = this;
    console.log(ctx.params);
    ctx.body = {
      id: ctx.params.id,
=======
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
>>>>>>> Stashed changes
    }
  }
}
module.exports = GoodsController;