const products = [
    'dell hardcore i29  GB laptop',
    'iPhone 1TB camera flashlight mobile',
    'dell yellow laptop with blalck camera',
    '1x59 Lenovo commercial laptop',
    'htc low price mobile',
    'dell purple color phone witg Laptop'
];
const searching = 'dell'
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(product);
    }
}
// console.log(output);



for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);

for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);