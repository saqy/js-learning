function areaOfPolygon(num){
    let area = (num * num) + ((num - 1)*(num - 1));
    console.log(`Area of ${num} sides Polygon is ${area}`);
}

areaOfPolygon(1);
areaOfPolygon(2);
areaOfPolygon(3);
areaOfPolygon(4);
areaOfPolygon(5);