import { ListCards } from "./ListCards";
import { StyledTitle } from "./ListCards/Cards/style";
import { StyledH1EmptyList, StyledSectionCards } from "./style";

export function SectionCards({valueList, setValueList}){
    return(
        <StyledSectionCards>
            <StyledTitle>Resumo financeiro</StyledTitle>
            {valueList.length > 0 ? (
                <ListCards valueList={valueList} setValueList={setValueList}/>
            ):(
                <StyledH1EmptyList>Você não possui nenhum lançamento</StyledH1EmptyList>
            )}
        </StyledSectionCards>
    )
}