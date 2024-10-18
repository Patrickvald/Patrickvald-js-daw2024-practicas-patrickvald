//1. Crea un array llamado paises que contenga: "España", "Francia", "Alemania", "Italia". Recorre el array e imprime el nombre de cada país. Después, elimina el primer país del array y vuelve a recorrerlo e imprimir el array de nuevo.
console.log('Exercise 1');

const countries = ["España", "Francia", "Alemania", "Italia"];
countries.forEach(country => console.log(country));
countries.shift();
countries.forEach(country => console.log(country));
console.log('############################');

//2. Crea un array vacío llamado letras. Inserta al principio del array las letras A, B y C. Luego, inserta al final las letras D y E. Finalmente, elimina el primer elemento y el último, e imprime el array final.
console.log('Exercise 2');

const letters = [];
letters.unshift('A', 'B', 'C');
letters.push('D', 'E');
letters.shift();
letters.pop();
console.log(letters);
console.log('############################');

//3. Creado el siguiente array
console.log('Exercise 3');
const data = [
    {name: "Nacho", telephone: "966112233", age: 40},
    {name: "Ana", telephone: "911223344", age: 35},
    {name: "Mario", phone: "611998877", age: 15},
    {name: "Laura", telephone: "633663366", age: 17}
];
/*a)	Añade dos elementos al final:
            {name: "Pedro", telephone: "611944444", age: 25},
            {name: "Julia", phone: "633232323", age: 37}*/
data.push({name: "Pedro", telephone: "611944444", age: 25},{name: "Julia", phone: "633232323", age: 37})

//b)	Comprueba con console.log (data) que se han añadido.
console.log(data);

//c)	Ordena el vector por edad, comprueba el resultado.
data.sort((a, b) => a.age - b.age);
console.log(data);
//d)	Ordena el vector por nombre, comprueba el resultado.
data.sort((a, b) => a.name.localeCompare(b.name));
console.log(data);
//e)	Crea y muestra un nuevo vector que contenga solo los mayores de 30 años.
const data30 = data.filter(a => a.age > 30);
console.log(data30);
console.log('############################');

//4. Crea un array llamado numeros con al menos seis números. Usa desestructuración para obtener los primeros dos números en variables individuales y almacena el resto de los números en un array llamado resto.
console.log('Exercise 4');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);
console.log('############################');

//5. Crea un array llamado valores que contenga números, algunos de los cuales son duplicados. Utiliza un Set para crear un nuevo array que contenga solo los números únicos y luego imprímelo.
console.log('Exercise 5');
const valors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const set = new Set(valors);
console.log(set);
console.log('############################');

//6. Crea un Map que almacene nombres como claves y edades como valores. Luego, agrega algunos nombres y edades, actualiza la edad de uno de ellos, y finalmente imprime todos los nombres con sus edades.
console.log('Exercise 6');
const map = new Map();
map.set('Pedro', 25);
map.set('Ana', 35);
map.set('Julia', 37);
map.set('Laura', 17);
map.set('Mario', 15);
map.set('Nacho', 40);
map.set('Ana', 20)
console.log(map);
console.log('############################');
//7. Mostrar por consola 50 combinaciones aleatorias de la lotería primitiva. Las combinaciones son 6 números del 1 al 49, pero debe tenerse en cuenta que no se pueden repetir los números en una misma combinación.
console.log('Exercise 7');
for (let i = 0; i < 50; i++) {
    let combination = new Set();
    while (combination.size < 6) {
        combination.add(Math.floor(Math.random() * 49) + 1);
    }
    console.log(`Combination: ${i+1}`, [...combination]);
}
console.log('############################');

//8. Se desea validar hasta qué punto la función Math.random es realmente aleatoria. Para tal fin, calcularemos 10.000 veces números aleatorios del 1 al 10. Por consola mostraremos cada número del 1 al 10 y a continuación el número de veces que ha salido ese número. Por ejemplo:
/* Frecuencias
Número 1: 1016
Número 2: 1019
Número 3: 1059
....
Número 10: 993 */
console.log('Exercise 8');
let frequencies = Array(10).fill(0);
for (let i = 0; i < 10000; i++) {
    const number = Math.floor(Math.random() * 10) + 1;
    frequencies[number - 1]++;   
}
frequencies.forEach((frequency, index) => console.log(`Number ${index+1}: ${frequency}`));
console.log('############################');
