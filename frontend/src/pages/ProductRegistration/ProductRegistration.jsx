import { useState, useEffect, useRef } from 'react'

// Components
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { Input, SelectInput } from '../../components/Inputs'

// Styles
import { DivForm } from './styles'

// Services
import CategoryService from '../../services/CategoryService'
import ProductService from '../../services/ProductService'

export function ProductRegistration() {

  const refSelect = useRef();

  const [ description, setDescription ] = useState('');
  const [ category, setCategory ] = useState('');

  const [ listCategory, setListCategory ] = useState([]);

  const [ error, setError ] = useState('');

  // Register Product
  const handleProductRegister = async (e) => {
    e.preventDefault();
    setError('')

    if (!description) return setError('Informe o nome do produto!');
    if (!category) return setError('Selecione uma categoria!');

    try {
      const dataProduct = {
        name: description,
        idCategory: category
      }

      await ProductService.createdProduct(dataProduct);
    }catch(err) {
      setError(err)
    }

    setDescription('')
    setCategory('')
    refSelect.current.clearValue()
  }

  // Select Option
  const handleSelectedOption = (option) => {
    if (option) setCategory(option.value);
  }

  // Get Category Options
  useEffect(() => {

    const getAllCategory = async () => {
      try {
  
        const categorys = await CategoryService.getAllCategory();
  
        setListCategory(categorys);

      }catch(err) {
        setError(err)
      }
    }

    getAllCategory();

  }, []);

  return(
    <>
      <NavBar />
      <DivForm className='container'>
        <form onSubmit={handleProductRegister}>
          <h4>Cadastro de Produto</h4>
          <Input 
            type='text'
            value={description}
            setData={setDescription}
            placeholder='Descrição do Produto'
            maxLength={50}
            minLength={1}
          />
          <SelectInput 
            onChange={handleSelectedOption}
            placeholder='Selecione uma categoria'
            options={listCategory}
            refInput={refSelect}
          />
          <p className='warning'>{error}</p>
          <button className='btn'>Cadastrar</button>
        </form>
      </DivForm>
      <Footer />
    </>
  )

}