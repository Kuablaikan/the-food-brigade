export function isString(obj) {
    return typeof obj === "string" && obj !== null
}

export function isInt(obj) {
    return typeof obj === "number" && obj !== null && !isNaN(obj) && isFinite(obj) && (obj | 0) === obj;
}

export function isFloat(obj) {
    return typeof obj === "number" && obj !== null && !isNaN(obj) && isFinite(obj);
}
<<<<<<< Updated upstream
=======

export function isDate(obj) {
    return typeof obj === "object" && obj !== null && !isNaN(Date.parse(obj));
}
>>>>>>> Stashed changes
