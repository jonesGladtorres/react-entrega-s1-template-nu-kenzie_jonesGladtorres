import { Form } from "./Form";
import { TotalMoney } from "../TotalMoney";
import { StyledSectionTotalValue } from "./style";

export function SectionForm({setValueList, valueList}){
    return(
        <StyledSectionTotalValue>
            <Form setValueList={setValueList}/>
            {valueList.length > 0 ? <TotalMoney valueList={valueList}/>: ''}
        </StyledSectionTotalValue>
    )
}