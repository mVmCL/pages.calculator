let lengthEl = document.getElementById('length');
let widthEl = document.getElementById('width');
let heightEl = document.getElementById('height');
let resultEl = document.getElementById('result');

function calculateConcrete() {
    // Convert dimensions from feet to yards
    let length = parseFloat(lengthEl.value) / 3;
    let width = parseFloat(widthEl.value) / 3;
    let height = parseFloat(heightEl.value) / 3;

    // Calculate volume in cubic yards
    let volume = length * width * height;
    
    // Print result
    resultEl.innerHTML = `You will need ${volume.toFixed(2)} cubic yards of concrete.`;
}

let diameterEl = document.getElementById('diameter');
let depthEl = document.getElementById('depth');

function calculateConcrete() {
    // Convert dimensions from feet to yards
    let radius = parseFloat(diameterEl.value) / 2 / 3;
    let depth = parseFloat(depthEl.value) / 3;

    // Calculate volume in cubic yards
    let volume = Math.PI * Math.pow(radius, 2) * depth;
    
    // Print result
    resultEl.innerHTML = `You will need ${volume.toFixed(2)} cubic yards of concrete.`;
}
