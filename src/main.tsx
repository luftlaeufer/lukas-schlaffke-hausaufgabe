import { RelayEnvironmentProvider } from 'react-relay'
import { RelayEnvironment } from './RelayEnvironment'
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/Layout.tsx'
import { Provider } from 'react-redux'
import store from './components/store/index.ts'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <StrictMode>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <App />
          </Suspense>
        </Layout>
      </StrictMode>
    </RelayEnvironmentProvider>
  </Provider>
)
