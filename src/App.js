import React, { Suspense } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import routes from './Pages/Routes';
const Loader =()=>{
  <div>Loading....</div>
}
export const App = () => {
  return (
    <Suspense fallback={Loader()} >
      <BrowserRouter>
         <Routes>
            <>
              {
                  routes.map((route) =>(<Route path={route.path} element={route.component} />))
              }
           </>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
