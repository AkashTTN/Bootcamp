// Module that returns an array of unique elements from an array

export function unique(arr=[]) {
    return Array.from(new Set(arr));
}