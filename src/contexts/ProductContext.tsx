import { createContext, useContext, useState } from "react";
import { ProductItem } from "../models/ProductModels";



interface ProductProviderType {
    children: any,
}

export interface ProductContextType {
    product: ProductItem,
    products: ProductItem[],
    featuredProducts: ProductItem[],
    productDisplay1: ProductItem[],
    productDisplay2: ProductItem[],
    getProduct: (articleNumber?: string) => void,
    getAllProducts: () => void,
    getFeatured: (take?: number) => void,
    getDisplay1: (take?: number) => void,
    getDisplay2: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}

const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
    const baseUrl:string = 'http://localhost:5000/api/products'
    const empty_product_values: ProductItem = { tag: '', articleNumber: '', name: '', description: '', category: '', price: 0, rating: 0, imageName: '' }

    const [product, setProduct] = useState<ProductItem>(empty_product_values)
    const [products, setProducts] = useState<ProductItem[]>([])
    const [featuredProducts, setFeatured] = useState<ProductItem[]>([])
    const [productDisplay1, setDisplay1] = useState<ProductItem[]>([])
    const [productDisplay2, setDisplay2] = useState<ProductItem[]>([])
    
    
    const getProduct = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const res = await fetch(`${baseUrl}/product/details/${articleNumber}`)
            setProduct(await res.json())
        }
    }
    
    const getAllProducts = async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }

    const getFeatured = async (take=0) => {
        let url = `${baseUrl}/featuredProducts`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setFeatured(await res.json())
    }

    const getDisplay1 = async (take=0) => {
        let url = `${baseUrl}/productDisplay1`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setDisplay1(await res.json())
    }

    const getDisplay2 = async (take=0) => {
        let url = `${baseUrl}/productDisplay2`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setDisplay2(await res.json())
    }



    return <ProductContext.Provider value={{product, products, featuredProducts, productDisplay1, productDisplay2, getProduct, getAllProducts, getFeatured, getDisplay1, getDisplay2 }}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider