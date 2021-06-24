module.exports = {
    userRouter: require('./user/routes'),
    roleRouter: require('./user/role/routes'),
    setupRouter: require('./user/setupPanel/routes'),
    newsRouter: require('./news/routes'),
    categoryNewsRouter: require('./news/category/routes'),
    categoryServiceRouter: require('./services/service-category/routes'),
    serviceRouter : require('./services/routes')
}