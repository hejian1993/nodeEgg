'use strict';
/* 
  <font color=#d70051></font>
*/
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.post('/goods/create', controller.goods.create);
  router.get('/goods/lists', controller.goods.lists);
  router.get('/goods/detail/:id', controller.goods.detail);
};


