import { Routes, Route } from "react-router-dom"
import { Product } from "./Product/Product"
import { Catalog } from "./Catalog"

export const CatalogApp = () => {
    return(
        <Routes>
            <Route index path="/" element={<Catalog />}></Route>
            <Route path="/:productId" element={<Product />}></Route>
        </Routes>
    )
}