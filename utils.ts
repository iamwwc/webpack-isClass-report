export function isClass(fn: any) {
    return typeof fn === 'function' &&
        /^class\s/.test(Function.prototype.toString.call(fn))
}