import { useEffect, useState } from 'react'

// Components
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { Item } from '../../components/Item/Item'

// Styles
import { DivList } from './styles'

// Service
import SupplierService  from '../../services/SupplierService'

export function ListProducts() {

  const [ listSupplierProducts, setListSupplierProducts ] = useState([])

  useEffect(() => {

    const getAllSupplierProducts = async () => {

      try {
        const response = await SupplierService.getAllSupplierProducts();

        setListSupplierProducts(response.data)

      }catch(err) {
        console.error(err)
      }

    }

    getAllSupplierProducts();

  }, [])

  return(
    <>
      <NavBar />
      <DivList className='container'>
        <div className='area-list'>
          <h4>Lista Produtos Fornecedores</h4>
          {listSupplierProducts && listSupplierProducts.length > 0 ? (
            listSupplierProducts.map((supplier) => (
              <Item key={supplier.id} data={supplier} />
            ))
          ) : (
            <p className='warning-messagem'>Nenhum cadastro!</p>
          )}
        </div>
      </DivList>
      <Footer />
    </>
  )

}