const Service = require('egg').Service;
class GoodsService extends Service {
  async create(params) {
    const { app } = this;
    try {
      const result = await app.mysql.insert('goods', params);
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  
  async lists() {
    const { app } = this;
    try {
      const res = await app.mysql.select('goods');
      return res;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async detail(id) {
    if (!id) {
      console.log('id不能为空');
      return null;
    }
    const { app } = this;
    try {
      const res = await app.mysql.get('goods', { id });
      return res;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
module.exports = GoodsService;