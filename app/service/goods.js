const Service = require('egg').Service;
class GoodsService extends Service {
  async index() {
    return {
      id: 789,
      name: 'test_hefen',
    }
  }
}
module.exports = GoodsService;