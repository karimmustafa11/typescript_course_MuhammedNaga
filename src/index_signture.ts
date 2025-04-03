//** Index Signature
interface ICityDictionary {
    [key: string]: string;
}

const cityDictionary: ICityDictionary = {
    cairo: "Egypt",
    paris: "France",
};

console.log(cityDictionary['cairo'])
console.log(cityDictionary['fasdfads as'])