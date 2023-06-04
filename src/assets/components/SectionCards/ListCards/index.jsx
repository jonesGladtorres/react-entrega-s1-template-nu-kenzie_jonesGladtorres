import { toast } from "react-toastify";
import { Cards } from "./Cards";
import { StyledList } from "./style";

export function ListCards({valueList, setValueList}){

    const removeValueList = (valueId) =>{
        if(confirm('Você deseja mesmo excluir?')){
            setValueList((valueList) => valueList.filter(value => value.id !== valueId))
            toast.success('Lançamento apagado com sucesso!')
        }
    }

    return(
        <StyledList>
            {valueList.map((value) => <Cards key={value.id} value={value} removeValueList={removeValueList}/>)}
        </StyledList>
    )
} 