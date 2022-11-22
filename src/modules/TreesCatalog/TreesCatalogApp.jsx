import { Routes, Route } from "react-router-dom"
import { Product } from "../Catalog/Product/Product"
import { TreesCatalog } from "./TreesCatalog"

export const TreesCatalogApp = () => {
    return(
        <Routes>
            <Route index path="/" element={<TreesCatalog />}></Route>
            <Route path="/:productId" element={<Product />}></Route>
        </Routes>
    )
}