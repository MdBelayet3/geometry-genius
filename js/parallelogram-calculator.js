//parallelogram area calculate function
function parallelogramAreaCalculate(){
    //parallelogram base
    const parallelogramBase = document.getElementById('parallelogram-base');
    const base = parseFloat(parallelogramBase.value);
    //parallelogram height
    const parallelogramHeight = document.getElementById('parallelogram-height');
    const height = parseFloat(parallelogramHeight.value);
    //count parallelogram area
    const parallelogramArea = base * height;
    //display parallelogram area
    const area = document.getElementById('parallelogram-area');
    area.innerText = parallelogramArea;
}