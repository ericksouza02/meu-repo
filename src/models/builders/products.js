import products from './fixtures/products.json';
import CarImage from '../../assets/car-img.jpg';

export const buildProductList = (size) => {
    const result = [];

    for(let i = 0; i < size; i ++){
        result.push({
            ...products[i],
            image: CarImage,
        })
    }

    return result;
}

export const buildProduct = () => buildProductList(1)[0];

