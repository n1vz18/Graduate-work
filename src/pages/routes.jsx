import { Routes, Route} from 'react-router-dom'
import Home from './Page_main/Page_main.jsx'
import Page_color from './Page_color/Page_color.jsx'
import Page_eat from './Page_eat/Page_eat.jsx'
import Page_cloth from './Page_cloth/Page_cloth.jsx'


function PageRoutes() {
  return (
    <>
        <Routes>
            <Route path={'/'} element={ <Home /> } />
            <Route path={'/pageColor'} element={ <Page_color /> } />
            <Route path={'/pageEat'} element={ <Page_eat /> } />
            <Route path={'/pageCloth'} element={ <Page_cloth /> } />
        </Routes>
    </>
  )
}

export default  PageRoutes