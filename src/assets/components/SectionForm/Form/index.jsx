import { StyleLabel, StyledButton, StyledHelperText, StyledInput, StyledSelect } from "../../../styles/form";
import { useState } from "react";
import { StyledForm } from "./style";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";


export function Form({setValueList}){
    const [title, setTitle] = useState('')
    const [value, setValue] = useState('')
    const [type, setType] = useState('')

    const addList = () =>{
        setValueList((valueList) => [...valueList, {id: uuidv4() ,title, value, type}])
    }

    const submit = (e) =>{
        e.preventDefault()
        addList()
        setTitle('')
        setValue('')
        setType('')
        toast.success('Lançamento adicionado com sucesso!')
    }

    return(
        <StyledForm onSubmit={submit}>
            <StyleLabel>{'Descrição'}</StyleLabel>
            <StyledInput type="text" placeholder="Digite aqui sua descrição" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <StyledHelperText>{'Ex: Compra de roupa'}</StyledHelperText>
            <StyleLabel>{'Valor (R$)'}</StyleLabel>
            <StyledInput type="number" value={value} placeholder="1" onChange={(e) => setValue(e.target.value)} required/>
            <StyleLabel>{'Tipo de valor'}</StyleLabel>
            <StyledSelect value={type} onChange={(e) => setType(e.target.value)} required>
                <option value="" hidden>Selecione...</option>
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
            </StyledSelect>
            <StyledButton type="submit">{'Inserir valor'}</StyledButton>
        </StyledForm>
    )
}