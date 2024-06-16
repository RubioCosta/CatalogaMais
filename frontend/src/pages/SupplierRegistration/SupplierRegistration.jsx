import { useEffect, useState, useRef } from 'react'

// Components
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { Input, SelectInput, InputMask } from '../../components/Inputs'

// Styles
import { DivForm } from './styles'

// Service
import ProductService from '../../services/ProductService'
import ValidationService from '../../services/ValidationService'
import SupplierService from '../../services/SupplierService'

export function SupplierRegistration() {

  const selectRef = useRef();

  const [ company, setCompany ] = useState('')
  const [ cnpj, setCnpj ] = useState('')
  const [ products, setProducts ] = useState('')

  const [ listProducts, setListProducts ] = useState('')

  const [ error, setError ] = useState('')

  const [ isValidateCnpj, setIsValidateCnpj ] = useState(false)

  const handleProductRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (isValidateCnpj) return
    if (!company) return setError('Informe o nome da empresa!');
    if (!cnpj) return setError('Informe o cnpj!');
    if (products.length <= 0) return setError('Selecione um produto!');

    try {

      const dataSupplier = {
        name: company,
        cnpjSupplier: cnpj.replace(/[^\d]/g, '')
      }

      const responseSupplier = await SupplierService.createdSupplier(dataSupplier)

      const supplierProducts = products.map((product) => ({ id: product.value }));

      const dataSupplierProducts = {
        idSupplier: responseSupplier.data.id,
        products: supplierProducts
      }

      console.log(supplierProducts)

      await SupplierService.createdSupplierProducts(dataSupplierProducts)

    }catch(err) {
      setError(err);
    }

    setCompany('');
    selectRef.current.clearValue();
    setProducts('');
    setCnpj('');
  }

  const handleSelectedOption = (options) => {
    if (options) setProducts(options);
  }

   // Get Product Options
  useEffect(() => {

    const getAllCategory = async () => {
      try {
  
        const resListProducts = await ProductService.getAllProduct();
  
        setListProducts(resListProducts);

      }catch(err) {
        setError(err)
      }
    }

    getAllCategory();

  }, [])

  // Validation CNPJ
  const handleValidateCnpj = async (e) => {
    setError('')
    const cnpjInput = e.target.value

    if (!cnpjInput) return

    try {

      setIsValidateCnpj(true)

      await ValidationService.validateCnpj(cnpjInput.replace(/[^\d]/g, ''))

      setIsValidateCnpj(false)
      setCnpj(cnpjInput)
    }catch(err) {
      setIsValidateCnpj(false)
      setError(err)
    }


  }

  return(
    <>
      <NavBar />
      <DivForm className='container'>
        <form onSubmit={handleProductRegister}>
          <h4>Cadastro de Fornecedor</h4>
          <Input 
            name='company'
            type='text'
            value={company}
            setData={setCompany}
            placeholder='Nome da Empresa'
            maxLength={50}
            minLength={1}
          />
          <InputMask 
            placeholder='CNPJ'
            setData={setCnpj}
            name='cnpj'
            value={cnpj}
            maskInput='00.000.000/0000-00'
            onBlur={handleValidateCnpj}
          />
          <SelectInput 
            name='products'
            onChange={handleSelectedOption}
            placeholder='Selecione os produtos'
            options={listProducts}
            isMulti={true}
            refInput={selectRef}
          />
          <p className='warning'>{error}</p>
          <button className={`btn ${isValidateCnpj ? 'btn-validate' : ''}`}>{isValidateCnpj ? 'Validando CNPJ' : 'Cadastrar'}</button>
        </form>
      </DivForm>
      <Footer />
    </>
  )

}