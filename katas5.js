// Function para add o kata a pagina
const bodyResident = document.querySelector('body');

function addKataPege(Fornecido, result, name){ 

    const newKata = document.createElement('h1');
    const newKataStr = document.createElement('p');
    newKata.textContent = (name); 
    newKataStr.textContent = (`Fornecido: ${Fornecido}. Obitido: ${result}`);

    bodyResident.appendChild(newKata);
    bodyResident.appendChild(newKataStr);
}

//Kata1
function testReverseString1 (){
    let result =  reverseString('Caneca Azul');
    let expected = 'luzA acenaC';
    console.assert(result === expected, `esperado:${expected}, obitido:${result}`);
}
function testReverseString2 (){
    let result =  reverseString('Batata Frita');
    let expected = 'atirF atataB';
    console.assert(result === expected, `esperado:${expected}, obitido:${result}`);
}

function reverseString (str){
    let result = str.split('');
    result.reverse();
    result = result.join('');
    
    let name = 'Kata1';
    addKataPege (str, result, name);
    
    return result; 
}

testReverseString1();

testReverseString2();

//Kata2
function testReverseSentence1 (){
    let result =  reverseSentence('Eu estou desaparecendo');
    let expected = 'odnecerapased uotse uE';
    console.assert(result === expected, `esperado:${expected}, obitido:${result}`);
}
function testReverseSentence2 (){
    let result =  reverseSentence('Eu gosto de x-burguer');
    let expected = 'reugrub-x ed otsog uE';
    console.assert(result === expected, `esperado:${expected}, obitido:${result}`);
}

function reverseSentence (str){
    let result = str.split('');
    result.reverse();
    result = result.join('');
    
    let name = 'Kata2';
    addKataPege (str, result, name);
    
    return result; 
}

testReverseSentence1();

testReverseSentence2();

//kata3
function testMinimumValue1 (){
    let result =  minimumValue([8,5,3,4,58,4,25,64,456,0,67]);
    let expected = 0;
    console.assert(result === expected, `esperado:${expected}, obitido:${result}`);
}
function testMinimumValue2 (){
    let result =  minimumValue([5,8,41,5,55,6,8,98,20,55,]);
    let expected = 5;
    console.assert(result === expected, `esperado:${expected}, obitido:${result}`);
}

function minimumValue (arrNumber){
    let result = arrNumber.reduce(function(a,b){
        return Math.min(a,b);
    }) 

    let nome = 'Kata3';
    addKataPege(arrNumber, result, nome);

    return result;
}

testMinimumValue1();

testMinimumValue2();

//Kata4
function testMaximumValue1  (){
    let result =  maximumValue ([8,5,3,4,58,4,25,64,456,0,67]);
    let expected = 456;
    console.assert(result === expected, `esperado:${expected}, obitido:${result}`);
}
function testMaximumValue2 (){
    let result =  maximumValue ([1,2,5,8,41,5,55,6,8,98,0,20,55,1,2,0,]);
    let expected = 98 ;
    console.assert(result === expected, `esperado:${expected}, obitido:${result}`);
}

function maximumValue  (arrNumber){
    let result = arrNumber.reduce(function(a,b){
        return Math.max(a,b);
    }) 

    let nome = 'Kata4';
    addKataPege(arrNumber, result, nome);

    return result;
}

testMaximumValue1 ();

testMaximumValue2();

//kata5
function testCalculateRemainder1   (){
    let result =  calculateRemainder  (15,5);
    let expected = 0;
    console.assert(result === expected, `esperado:${expected}, obitido:${result}`);
}
function testCalculateRemainder2 (){
    let result =  calculateRemainder  (20,8);
    let expected = 4;
    console.assert(result === expected, `esperado:${expected}, obitido:${result}`);
}

function calculateRemainder (dividendo, divisor){
    let result = dividendo % divisor;

    let nome = 'Kata5';
    addKataPege([dividendo,divisor], result, nome);

    return result;
}

testCalculateRemainder1  ();

testCalculateRemainder2();

//kata6

//kata7
function testCountValues1    (){
    let result =  countValues ([8,5,3,4,58,4,25,64,456,0,67]);
    let expected = '8(1) 5(1) 3(1) 4(2) 58(1) 25(1) 64(1) 456(1) 0(1) 67(1) ' ;
    console.assert(result === expected, `esperado:${expected}, obitido:${result}`);
}
function testCountValues2 (){
    let result =  countValues ([1,2,5,8,41,5,55,6,8,98,0,20,55,1,2,0,]);
    let expected = '1(2) 2(2) 5(2) 8(2) 41(1) 55(2) 6(1) 98(1) 0(2) 20(1) ';
    console.assert(result === expected, `esperado:${expected}, obitido:${result}`);
}

function countValues (arrNumber){
    let arrTest = [];
    let result = [];
    for (let i =0; i < arrNumber.length; i++){
        let numberTest = arrNumber[i];
        let counter = 0;
        for (let j = 0; j < arrNumber.length; j++){
            if (numberTest === arrNumber[j]){
                counter = counter + 1;
            }
        } 
        arrTest.push(numberTest);
        let counter2 = 0;
        for (let j = 0; j < arrTest.length; j++){
            if (numberTest === arrTest[j]){
                counter2 = counter2 + 1;
            }
        }
        if (counter2 < 2){
            numberTest = numberTest.toString() + '(' + counter.toString() + ') ';
            result.push(numberTest);    
        }
    }

    let nome = 'Kata7'
    addKataPege(arrNumber, result, nome);

    return result.join('');
}

testCountValues1();

testCountValues2();

//katas8
