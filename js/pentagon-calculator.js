//pentagon area calculate
// function pentagonAreaCalculate(){
//     const perimeterInput = document.getElementById('perimeter').value;
//     const perimeter = parseFloat(perimeterInput);
//     const baseInput = document.getElementById('base').value;
//     const base = parseFloat(baseInput);
//     const pentagonArea = perimeter*base;
//     const area = document.getElementById('pentagon-area');
//     area.innerText = pentagonArea;
// }

function pentagonAreaCalculate() {
    const perimeter = getInputValueById('perimeter');
    const base = getInputValueById('base');
    const pentagonArea =0.5* perimeter * base;
    setInnerTextById('pentagon-area', pentagonArea);
}


//create function for track input value
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const inputFieldValue = parseFloat(inputFieldText);
    return inputFieldValue;
}

//create function for set area in a element
function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
    return element;
}