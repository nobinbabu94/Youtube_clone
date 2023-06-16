import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'
import SearchResults from './components/SearchResults'
import Main from './components/Main'


const rootLayout = createBrowserRouter([
    {

        path: '/',
        element:< Main/>,
        children: [
            {
                path: '/',
                element: <MainContainer />,

            },
            {
                path:'watch',
                element:<WatchPage/>
            },
            {
                path:'results',
                element:<SearchResults/>
            }
        ]
    }

])


const App = () => {

    return (
        <>
            <Provider store={store} >
            
                <RouterProvider router={rootLayout} />
            </Provider>
        </>
    )
}

 
export default App;