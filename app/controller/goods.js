const Controller = require('egg').Controller;

class GoodsController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'goods';
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
      id:`back ${id}`,
      name:`back ${name}`,
    }
  }
  // PUT
  async updateGoods(){
    const { ctx } = this;
    console.log(ctx.params);
    ctx.body = {
      id:ctx.params.id,
    }
  }
  // DELETE
  async deleteGoods(){
    const { ctx } = this;
    console.log(ctx.params);
    ctx.body = {
      id:ctx.params.id,
    }
  }

}
module.exports = GoodsController;