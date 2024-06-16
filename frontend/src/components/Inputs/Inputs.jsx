import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';
import { IMaskInput } from 'react-imask';

// Styles
import { DivInput, DivSelectInput } from './styles'

export function Input({ type, value, setData, name , placeholder, maxLength, minLength }) {

  return(
    <DivInput>
      <label>
        <input 
          autoComplete='off'
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => setData(e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
          minLength={minLength}
        />
      </label>
    </DivInput>
  )

}

export function SelectInput({ name, refInput, onChange, placeholder, options, isMulti }) {

  return(
    <DivSelectInput>
      <Select 
        id={name}
        name={name}
        options={options} 
        ref={refInput}
        placeholder={placeholder}
        isMulti={isMulti}
        noOptionsMessage={() => 'Nenhuma opção disponível'}
        loadingMessage={() => 'Carregando...'}
        onChange={onChange}
        isDisabled={options.length <= 0 ? true : false}
      />
    </DivSelectInput>
  )

}

export function InputMask({ placeholder, setData, name, value, maskInput, onBlur }) {

  return(
    <DivInput>
      <IMaskInput
        mask={maskInput}
        value={value}
        name={name}
        id={name}
        placeholder={placeholder}
        autoComplete="off"
        onAccept={(e) => setData(e)}
        onBlur={onBlur}
      />
    </DivInput>
  )

}