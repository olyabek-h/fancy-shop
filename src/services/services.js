import DATA from './products.json'

export function fakeApi() {
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(DATA);
        }, 1000);
    })
}