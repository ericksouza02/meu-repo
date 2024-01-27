import {faker} from '@faker-js/faker';

export const buildProductList = (size) => {
    const result = [];

    for(let i = 0; i < size; i ++){
        result.push({
            id: i + 1,
            image: faker.image.avatarGitHub(),
            title: faker.commerce.productName(), 
            summary: faker.commerce.productDescription(),
            slang: faker.lorem.slug()
        })
    }

    return result
}

