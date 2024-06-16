import { Routes, Route } from 'react-router-dom'

// Pages
import { CategoryRegistration } from '../pages/CategoryRegistration';
import { ListProducts } from '../pages/ListProducts';
import { ProductRegistration } from '../pages/ProductRegistration';
import { SupplierRegistration } from '../pages/SupplierRegistration';

export function PublicRoutes() {

  return(
    <Routes>
      <Route path='/' >
        <Route exact index element={ <ListProducts /> } />
        <Route exact path='category-registration' element={ <CategoryRegistration /> } />
        <Route exact path='product-registration' element={ <ProductRegistration /> } />
        <Route exact path='supplier-registration' element={ <SupplierRegistration /> } />
      </Route>
    </Routes>
  )

}