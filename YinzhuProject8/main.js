const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007}, 
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category:"Technology", start: 2009, end: 2014},
    {name: "Company Six", category:"Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];
    
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//basic for loop
for(let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}

//forEach 
companies.forEach(function(company) {
    console.log(company);
});


//filter: Get age 21 and older:


let canDrink = [];
for (let i = 0; i < ages.length; i++) {
    if(ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
}

console.log(canDrink);

const canDrik = ages.filter(age => age >= 21); //arrow function way

// Filter retail companies:
const retailCompanies = companies.filter(function(company) {
    if(company.category === "Retail") {
        return true;
    }
});

// arrow function way:
const retailCompanies = companies.filter(company => company.category === "Retail");
console.log(retailCompanies)

// Get 80s companies
const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.end < 1990)
console.log(eightiesCompanies);

// Get companies last 10 years or more
const lastTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(lastTenYears)


// map
//Create array of company names

const testMap = companies.map(function(company) {
    return `${company.name} [${company.start} - ${company.end}]`;
});

const testMap = companies.map(company => company.name)
console.log(testMap);

const agesSquare2 = ages.map(age => Math.sqrt(age) * 2);
const agesSquare3 = ages
.map(age => Math.sqrt(age))
.map(age => age* 2);

console.log(agesSquare2);
console.log(agesSquare3);


// sort 
// just like comparator in Java:
const sortedCompanies = companies.sort(function(c1, c2) {
    if (c1.start > c2.start) {
        return 1
    } else {
        return -1;
    }
});

// arrow function:
const sortedCompanies = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));
console.log(sortedCompanies);

// Sort ages
const sortAges = ages.sort((a, b) => a - b); // a - b 相当于是在用正负来描述a和b的大小


//如果只是 const sortAges = ages.sort()的话，只会按照最左侧数字来sort，也就是说，45会在比5小的位置。

console.log(sortAges);

const onlySortFirstDigit = ages.sort();
console.log(onlySortFirstDigit)


// reduce

let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
    ageSum += ages[i];
}

const sum = ages.reduce(function(total, age){
    return total + age;
}, 0)

const sum2 = ages.reduce((total, age) => total + age, 0); // arrow function 
console.log(sum2);

// Get total years for all companies
const totalYears = companies.reduce(function(total, company) {
    return total + (company.end - company.start);
}, 0)

const totalYears2 = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears2)


// Combine Methods

const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a, b) => a - b)
.reduce((a, b) => a + b, 0);

console.log(combined)