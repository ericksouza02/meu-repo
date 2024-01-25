import CardImage from '../assets/car-img.jpg'

const products = [
    {
        id: 1, 
        title: "1 Habilitação Carro e Moto", 
        slang: "habilitação-de-carro-moto",
        summary: "lorem ipsum dolor sit met consectur adipiscing elit", 
        image: CardImage
    },
    {
        id: 2, 
        title: "1 Habilitação Carro",
        slang: "habilitação-de-carro", 
        summary: "lorem ipsum dolor sit met consectur adipiscing elit", 
        image: CardImage
    },
    {
        id: 3, 
        title: "1 Habilitação Moto", 
        slang: "habilitação-de-moto",
        summary: "lorem ipsum dolor sit met consectur adipiscing elit", 
        image: CardImage
    },
    {
        id: 4, 
        title: "Mudança de Categoria Caminhão",
        slang: "mudança-de-categoria-caminhão", 
        summary: "lorem ipsum dolor sit met consectur adipiscing elit", 
        image: CardImage
    },
    {
        id: 5, 
        title: "Aulas Avulsas",
        slang: "aulas-avulsas", 
        summary: "lorem ipsum dolor sit met consectur adipiscing elit", 
        image: CardImage
    },
]

export const useProducts = () => {
    return products;
}

export const useProduct = ({ slang }) => {
    return products.find(p => p.slang === slang)
} 