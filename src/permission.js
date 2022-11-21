import {router} from "./router";

//路由前置守卫
router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    if (to.path === '/child') {
        next();
    }

})
