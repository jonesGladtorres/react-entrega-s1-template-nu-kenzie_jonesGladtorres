import { StyledButtonsCards, StyledCard, StyledDiv1, StyledDiv2, StyledParagraph, StyledTitle } from "./style";

export function Cards({value, removeValueList}){

    const newValue = parseFloat(value.value)

    return(
        <StyledCard type={value.type}>
            <StyledDiv1>
                <StyledTitle>{value.title}</StyledTitle>
                <StyledParagraph>{value.type}</StyledParagraph>
            </StyledDiv1>
            <StyledDiv2>
                <StyledParagraph>{newValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</StyledParagraph>
                <StyledButtonsCards onClick={() => removeValueList(value.id)}>Excluir</StyledButtonsCards>
            </StyledDiv2>
        </StyledCard>
    )
}