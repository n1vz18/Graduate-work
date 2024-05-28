import { Routes, Route, Link } from 'react-router-dom'
import Home from './Page_main/Page_main.jsx'
import Page_color from './Page_color/Page_color.jsx'
import Page_eat from './Page_eat/Page_eat.jsx'


function PageRoutes() {
  return (
    <>
        <Routes>
            <Route path={'/'} element={ <Home /> } />
            <Route path={'/pageColor'} element={ <Page_color /> } />
            <Route path={'/pageEat'} element={ <Page_eat /> } />
        </Routes>
    </>
  )
}

export default  PageRoutes