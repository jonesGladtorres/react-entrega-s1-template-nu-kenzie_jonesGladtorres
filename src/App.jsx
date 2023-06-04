import { useState } from "react"
import { Header } from "./assets/components/Header/Index"
import { SectionCards } from "./assets/components/SectionCards"
import { SectionForm } from "./assets/components/SectionForm"
import { GlobalStyles } from "./assets/styles/global"
import { StyledMain } from "./assets/styles/main"
import { GlobalReset } from "./assets/styles/reset"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css';

function App() {

  const [valueList, setValueList] = useState([])

  return (
    <>
      <GlobalStyles />
      <GlobalReset />
      <Header/>
      <StyledMain>
        <SectionForm valueList={valueList} setValueList={setValueList}/>
        <SectionCards valueList={valueList} setValueList={setValueList}/>
      </StyledMain>
      <ToastContainer />
    </>
  )
}

export default App
