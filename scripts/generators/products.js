const faker = require('faker');

const buildProductList = (size) => {
    const result = [];

    for(let i = 0; i < size; i ++){
        result.push({
            id: i + 1,
            image: "",
            title: faker.Name.firstName(), 
            summary: faker.Lorem.paragraph(),
            slang: ""
        })
    }

    return result
}
