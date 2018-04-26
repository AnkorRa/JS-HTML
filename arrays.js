/*palabra1 = "norte";
palabra2 = "norte";

console.log(palabra1);
console.log(palabra2);

let palabra1Array = [];
let palabra2Array = [];

console.log(palabra1Array);
console.log(palabra2Array);

let tamPalabras = 0;

let estadotemporal = 1;

if (palabra1.length == palabra2.length){
    palabra1Array = palabra1.split("");
    palabra2Array = palabra2.split("");
    
    console.log(palabra1Array);
    console.log(palabra2Array);

    palabra1Array = palabra1Array.sort();
    palabra2Array = palabra2Array.sort();

    console.log(palabra1Array);
    console.log(palabra2Array);

    let tamPalabras = palabra1.length;

    console.log(tamPalabras);

    for (i = 0; i<tamPalabras;i++){
        if (estadotemporal==1){
            if (palabra1Array[i]===palabra2Array[i]){
                estadotemporal = 1;
                console.log(estadotemporal);
            }
            else{
                estadotemporal = 0;
            }   
        }
        else {
            i = tamPalabras;
        }
    }
    if (estadotemporal==0){
        console.log("No es anagrama una de otra.")
    }
    else {
        console.log("Son anagramas una de otra")
    }
}
else {
    console.log("No es anagrama una de otra")
}*/

/*
palabra1 = "norte";
palabra2 = "norte";

let tamPalabras = 0;
let estadotemporal = 1;

if (palabra1.length == palabra2.length){
    palabra1Array = palabra1.split("");
    palabra2Array = palabra2.split("");
    
    palabra1Array = palabra1Array.sort();
    palabra2Array = palabra2Array.sort();

    let tamPalabras = palabra1.length;

    for (i = 0; i<tamPalabras;i++){
        if (estadotemporal==1){
            if (palabra1Array[i]==palabra2Array[i]){
                estadotemporal = 1;
                console.log(estadotemporal);
            }
            else{
                estadotemporal = 0;
            }   
        }
        else {
            i = tamPalabras;
        }
    }
    if (estadotemporal==0){
        console.log("No es anagrama una de otra.")
    }
    else {
        console.log("Son anagramas una de otra")
    }
}
else {
    console.log("No es anagrama una de otra")
}*/

/*array1 = ['r','o','m','a'];
array2 = ['A','m','o','r'];

if (array1.length == array2.length){
    
    let estadotemporal = 1;

    array1 = array1.sort();
    array2 = array2.toLocaleUpperCase().sort();
   
    for (i = 0; i<array1.length; i++){
        if (array1[i] != array2[i]){
            i = array1.length;
            estadotemporal = 0;
            console.log("No es anagrama una de otra.")
        }
    }
    if (estadotemporal==1){
        console.log("Son anagramas una de otra")
    }          
}
else {
    console.log("No es anagrama una de otra")
}*/

/*array1 = ['r','o','m','a'];
array2 = ['b','m','o','r'];

if (array1.length == array2.length){
    
    let estadotemporal = 1;

    array1 = array1.sort();
    array2 = array2.sort();
   
    for (i = 0; i<array1.length; i++, (array1[i] != array2[i])?(i=array1.length, estadotemporal = 0):true){
        console.log("No es anagrama una de otra.")
        console.log(estadotemporal)
        console.log(i)
    }
            
    if (estadotemporal == 1){
        console.log("Son anagramas una de otra")
    }
}
else {
    console.log("No es anagrama una de otra")
}*/


/*let h1 = document.createElement('h1');
let texto_h1= document.createTextNode("Eh que onda, soy un h1");
h1.appendChild(texto_h1);

let elBody = document.getElementById('elBody');
elBody.appendChild(h1);*/

let datos = [ 
    {"name":"Omar","age":31,"city":"New York"},
    {"name":"Paco","age":31,"city":"New York"},
    {"name":"Nora","age":31,"city":"New York"},
];          

/*for(i=0;i<datos.length;i++){
    let h1 = document.createElement('h1');
    let texto = document.createTextNode('Este wey se llama '+datos[i].name+
    ' y tiene'+datos[i].age+' años');
    h1.appendChild(texto);
    elBody.appendChild(h1);
}*/

for(i=0;i<datos.length;i++){
    let h1 = $('<h1>'+'Este wey se llama '+datos[i].name+' y tiene'+datos[i].age+' años'+'</h1>')
    $('#elBody').append(h1);
}