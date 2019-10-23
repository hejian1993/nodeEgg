'use strict';
/* 
  <font color=#d70051></font>
*/
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/goods', controller.goods.index);
  router.get('/goods/detail', controller.goods.detail);
  router.get('/goods/detailTwo/:id/:name', controller.goods.detailTwo);
  router.post('/goods/createGood', controller.goods.createGood);
  router.put('/goods/updateGoods/:id', controller.goods.updateGoods);
  router.delete('/goods/deleteGoods/:id', controller.goods.deleteGoods);
};


