import { StyledDivTitle, StyledMoneyContainer, StyledParagraphTotalMoney, StyledTitleTotalMoney, StyledValueTotalMoney } from "./style";

export function TotalMoney({valueList}){
    const valueTotal = valueList.reduce((acc, value) => {

        const transformValue = parseFloat(value.value)

        if(value.type === 'Entrada'){
            return acc + transformValue
        }else{
            return acc - transformValue
        }
    
    }, 0)

    return(
        <StyledMoneyContainer>
            <StyledDivTitle>
                <StyledTitleTotalMoney>Valor total:</StyledTitleTotalMoney>
                <StyledParagraphTotalMoney>O valor se refere ao saldo</StyledParagraphTotalMoney>
            </StyledDivTitle>
            <StyledValueTotalMoney>{valueTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</StyledValueTotalMoney>
        </StyledMoneyContainer>
    )
}