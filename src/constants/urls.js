const carsAPI = 'http://owu.linkpc.net/carsAPI/v1'

const urls = {
    cars: '/cars',
    byId: (id) => '/cars/' + id,

}

export {
    carsAPI, urls
};