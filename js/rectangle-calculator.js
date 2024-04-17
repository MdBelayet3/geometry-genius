//rectangle area calculator function
function rectangleAreaCalculate(){
    //rectangle width
    const rectangleWidth = document.getElementById('rectangle-width');
    const width = parseFloat(rectangleWidth.value);
    //rectangle length
    const rectangleLength = document.getElementById('rectangle-length');
    const length = parseFloat(rectangleLength.value);
    //count rectangle area
    const rectangleArea = width * length;
    // display rectangle area
    const area = document.getElementById('rectangle-area');
    area.innerText = rectangleArea;
}