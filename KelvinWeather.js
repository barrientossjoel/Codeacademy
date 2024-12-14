const kelvin = 0 //actual temperature in kelvin
console.log(`The temperature is ${kelvin} degrees Kelvin`);

const celsius = kelvin - 273; //original temperature in celcius
console.log(`The temperature is ${celsius} degrees Celsius`)

const fahrenheit = Math.floor(celsius * (9/5) + 32); //temp in fahreinheit without decimal
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

const newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} degrees Newton.`)
