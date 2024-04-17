function triangleAreaCalculate() {
    //get triangle base
    const triangleBase = document.getElementById('triangle-base').value;
    const base = parseFloat(triangleBase);
    // get triangle hight
    const triangleHight = document.getElementById('triangle-hight').value;
    const hight = parseFloat(triangleHight);
    //count triangle area
    const area = 0.5 * base * hight;
    //display triangle area in span tag
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
    base = '';
    hight = '';
}