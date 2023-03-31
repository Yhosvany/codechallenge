let baf = [{ba:'123'},'asd','asd', 'ffasga'];

console.log(baf);

console.log(baf.filter((i) => i!== 'asd'));

console.log(baf.find((i) => i === '123' ));

console.log(baf.includes('123'));


baf.splice(1, 1);
console.log(baf);
// baf.forEach((i) => console.log(`En la posicion: ${baf[i].findIndex()} se encuentra el valor: ${i}`));
