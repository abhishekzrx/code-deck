import React, { Suspense } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import routes from './Pages/Routes';
import PlaygroundProvider from './Context/PlaygroundContext';
import ModalProvider from './Context/ModalContext';
const Loader =()=>{
  <div>
  Loading....</div>
}
export const App = () => {
  return (
    <Suspense fallback={Loader()} >
    <PlaygroundProvider>
         <ModalProvider>
           <BrowserRouter>
             <Routes>
               <>
              {
                  routes.map((route) =>(<Route path={route.path} element={route.component} />))
              }
              </>
           </Routes>
        </BrowserRouter>
        </ModalProvider>
      </PlaygroundProvider>
    </Suspense>
  )
}

export default App;
