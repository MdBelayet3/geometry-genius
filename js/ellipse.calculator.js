//Ellipse area calculator
// function ellipseAreaCalculate(){
//     const aInput = document.getElementById('ellipse-a').value;
//     const a = parseFloat(aInput);
//     const bInput = document.getElementById('ellipse-b').value;
//     const b = parseFloat(bInput);
//     const ellipseArea = (3.1416 * a * b).toFixed(2);
//     const area = document.getElementById('ellipse-area');
//     area.innerText = ellipseArea;
// }

function ellipseAreaCalculate(){
    const a = getInputValueById('ellipse-a');
    const b = getInputValueById('ellipse-b');
    const ellipseArea = (3.1416 * a * b).toFixed(2);
    setInnerTextById('ellipse-area', ellipseArea);

}

//create a function for input value to reuseable
function getInputValueById(inputFieldId){
const inputField = document.getElementById(inputFieldId);
const inputFieldText = inputField.value;
const inputFieldValue = parseFloat(inputFieldText);
return inputFieldValue;
}

//create a function for set the area value 
function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
    return element;
}