import logo from '../../icons/logo.svg'
import { StyledHeader } from './style'

export function Header(){
    return(
        <StyledHeader>
            <img src={logo} alt="Logomarca da Nu Kenzie" />
        </StyledHeader>
    )
}