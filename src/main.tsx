import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home.tsx'
import { Store } from './pages/Store.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)

const router = createBrowserRouter([
  {
    path: "/react-types-store/",
    element: <App />,
    children: [
      {
        path: "/react-types-store/pages/Home",
        element: <Home />,
      },
      {
        path: "/react-types-store/pages/store",
        element: <Store />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);