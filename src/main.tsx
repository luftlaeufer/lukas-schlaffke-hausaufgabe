import { RelayEnvironmentProvider } from 'react-relay'
import { RelayEnvironment } from './RelayEnvironment'
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/Layout.tsx'
import { Provider } from 'react-redux'
import store from './components/store/index.ts'
import Router from './components/Router.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <StrictMode>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Router />
          </Suspense>
        </Layout>
      </StrictMode>
    </RelayEnvironmentProvider>
  </Provider>
)
