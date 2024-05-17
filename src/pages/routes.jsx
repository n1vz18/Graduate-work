import { Routes, Route, Link } from 'react-router-dom'
import Home from './Page_main/Page_main.jsx'
import Page_color from './Page_color/Page_color.jsx'


function PageRoutes() {
  return (
    <>
        <Routes>
            <Route path={'/'} element={ <Home /> } />
            <Route path={'/pageColor'} element={ <Page_color /> } />
        </Routes>
    </>
  )
}

export default  PageRoutes