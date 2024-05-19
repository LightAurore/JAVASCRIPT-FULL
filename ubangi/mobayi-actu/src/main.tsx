import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Use Internationalization-framework (i18next)
import './lang/i18n.ts';

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes.tsx'

// Use Recoil (Stockage du Token) [npm i recoil]
import { RecoilRoot } from 'recoil';

const router = createBrowserRouter(routes);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
)
