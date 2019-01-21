import { isClass } from './utils';

;(async function(){
    let fns = await import('./exported')
    Object.keys(fns).map(fn => {
        let f = fns[fn]
        return isClass(f) ? (new f(null)) : f.call(null)
    })
})();