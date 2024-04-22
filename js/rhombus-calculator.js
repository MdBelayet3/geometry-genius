//rhombus area calculate
// function rhombusAreaCalculate() {
//     const d1Input = document.getElementById('d1').value;
//     const d1 = parseFloat(d1Input);
//     const d2Input = document.getElementById('d2').value;
//     const d2 = parseFloat(d2Input);
//     const rhombusArea = 0.5 * d1 * d2;
//     const area = document.getElementById('rhombus-area');
//     area.innerText = rhombusArea;
// }

function rhombusAreaCalculate() {
    const d1 = getInputValueById('d1');
    const d2 = getInputValueById('d2');
    const rhombusArea =0.5* d1 * d2;
    setInnerTextById('rhombus-area', rhombusArea);
}