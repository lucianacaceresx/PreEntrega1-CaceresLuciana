import NavBar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContainerCardItems from './components/components item/ContainerCardItems'


function App() { 

    
    
    // link -> navegar a una url
    return (
       <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route path='/' element={<ContainerCardItems/>}/>
        <Route path='/item/:id' element={<ContainerCardItems/>}/>
        <Route path='/category/:idCategory' element={<ContainerCardItems/>}/>
       </Routes>
       </BrowserRouter>
    )
}

export default App
