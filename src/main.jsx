import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './user/redux/store.jsx'
import { MenuProvider } from './user/components/ContextProvider/MenuContext.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <MenuProvider>
    <Provider store = {store} >
    <App/>
    </Provider>
    </MenuProvider> 
    </BrowserRouter>
   
 
)
