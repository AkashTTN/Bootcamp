export const PI = 3.14;

export function calculateArea(shape='', radius=0, height=0) {
    if(shape === 'circle') {
        return areaCircle(radius);
    } else if(shape === 'rectangle') {
        return areaRectangle(radius, height);
    } else {
        return areaCylinder(radius, height);
    }
}

function areaCircle(radius) {
    return PI*radius*radius;
}

function areaRectangle(radius, height) {
    return radius*height;
}

function areaCylinder(radius, height) {
    return 2*(PI*radius*height + PI*radius*radius);
}