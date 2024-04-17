function triangleAreaCalculate() {
    //get triangle base
    const triangleBase = document.getElementById('triangle-base').value;
    const base = parseFloat(triangleBase);
    // get triangle height
    const triangleHeight = document.getElementById('triangle-hight').value;
    const height = parseFloat(triangleHeight);
    //count triangle area
    const area = 0.5 * base * height;
    //display triangle area in span tag
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
    base = '';
    height = '';
}