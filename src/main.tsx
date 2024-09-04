import { RelayEnvironmentProvider } from 'react-relay'
import { RelayEnvironment } from './RelayEnvironment'
import { StrictMode, Suspense } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import './index.css'
import store from './components/store/index.ts'
import App from './App.tsx'
import Skeleton from './components/Skeleton.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <StrictMode>
        <Suspense fallback={<Skeleton />}>
          <App />
        </Suspense>
      </StrictMode>
    </RelayEnvironmentProvider>
  </Provider>
)
