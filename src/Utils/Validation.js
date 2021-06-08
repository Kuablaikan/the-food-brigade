export function isString(obj) {
    return typeof obj === "string" && obj !== null
}

export function isInt(obj) {
    return typeof obj === "number" && obj !== null && !isNaN(obj) && isFinite(obj) && (obj | 0) === obj;
}

export function isFloat(obj) {
    return typeof obj === "number" && obj !== null && !isNaN(obj) && isFinite(obj);
}
