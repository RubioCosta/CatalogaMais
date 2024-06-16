import { useState, useEffect } from 'react'

// Components
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Inputs'

// Styles
import { DivForm } from './styles'

// Services
import CategoryService from '../../services/CategoryService'

export function CategoryRegistration() {

  const [ error, setError ] = useState('')
  const [ category, setCategory ] = useState('')

  const [ listCategory, setListCategory ] = useState('');

  // Register Category
  const handleCategoryRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (!category) return setError('Informe o nome da categoria!');

    try {

      const dataCategory = {
        name: category
      }

      await CategoryService.createdCategory(dataCategory);

    }catch(err) {
      setError(err);
    }

    setCategory('');
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
          <form onSubmit={handleCategoryRegister}>
            <h4>Cadastro de Categoria</h4>
            <Input 
              type='text'
              value={category}
              setData={setCategory}
              placeholder='Nome da Categoria'
              maxLength={50}
              minLength={1}
            />
            <p className='warning'>{error}</p>
            <button className='btn'>Cadastrar</button>
          </form>
        </DivForm>
      <Footer />
    </>
  )

}