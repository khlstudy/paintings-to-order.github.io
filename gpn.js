function calculatePaintingPrice(width, height, canvasType, complexity, paintingType, technique, materials) {
    const basePricePerSquareMeter = 2000;
    let canvasMultiplier;
    let complexityMultiplier;
    let typeMultiplier;
    let techniqueMultiplier;
    let materialsMultiplier;

    if (canvasType === 'звичайне') {
        canvasMultiplier = 1;
    } else if (canvasType === 'преміум') {
        canvasMultiplier = 1.5;
    } else {
        throw new Error('Невідомий тип полотна');
    }

    if (complexity === 'проста') {
        complexityMultiplier = 1;
    } else if (complexity === 'середня') {
        complexityMultiplier = 2;
    } else if (complexity === 'складна') {
        complexityMultiplier = 3;
    } else {
        throw new Error('Невідома складність малюнка');
    }

    if (paintingType === 'натюрморти' || paintingType === 'портрети' || paintingType === 'абстракції' || paintingType === 'пейзажі') {
        typeMultiplier = 1;
    } else {
        throw new Error('Невідомий вид картини');
    }

    if (technique === 'реалізм') {
        techniqueMultiplier = 1;
    } else if (technique === 'пастозний живопис') {
        techniqueMultiplier = 1.2;
    } else if (technique === 'декоративний живопис') {
        techniqueMultiplier = 1.5;
    } else {
        throw new Error('Невідома техніка виконання');
    }

    if (materials === 'олійні фарби' || materials === 'акрилові фарби' || materials === 'поталь' || materials === 'текстурна паста' || materials === 'акварель') {
        materialsMultiplier = 1;
    } else {
        throw new Error('Невідомі матеріали');
    }

    const area = width * height;
    const price = basePricePerSquareMeter * area * canvasMultiplier * complexityMultiplier * typeMultiplier * techniqueMultiplier * materialsMultiplier;

    return price;
}

function getPaintingDetails() {
    var width = parseFloat(window.prompt('Введіть ширину картини (в метрах)', '0.5'));
    var height = parseFloat(window.prompt('Введіть висоту картини (в метрах)', '0.7'));
    var canvasType = window.prompt('Введіть тип полотна (звичайне або преміум)', 'звичайне');
    var complexity = window.prompt('Введіть складність малюнка (проста, середня, складна)', 'проста');
    var paintingType = window.prompt('Введіть вид картини (натюрморти, портрети, абстракції, пейзажі)', 'натюрморти');
    var technique = window.prompt('Введіть техніку виконання (реалізм, пастозний живопис, декоративний живопис)', 'реалізм');
    var materials = window.prompt('Введіть матеріали (олійні фарби, акрилові фарби, поталь, текстурна паста, акварель)', 'олійні фарби');

    try {
        var price = calculatePaintingPrice(width, height, canvasType, complexity, paintingType, technique, materials);
        window.alert('Вартість вашої картини: ' + price + ' грн.');
    } catch (error) {
        window.alert('Помилка: ' + error.message);
    }
}

document.getElementById('calculate-button').addEventListener('click', getPaintingDetails);
