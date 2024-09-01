import { RelayEnvironmentProvider } from 'react-relay'
import { RelayEnvironment } from './RelayEnvironment'
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout.tsx'
import { Router } from './Router.tsx'
import { Provider } from 'react-redux'
import store from './components/store/index.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <StrictMode>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={Router} />
          </Suspense>
        </Layout>
      </StrictMode>
    </RelayEnvironmentProvider>
  </Provider>
)
