import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./Pages/Home'))

function App() {
  useEffect(() => {
    // Google Analytics placeholder: window.gtag should be configured in index.html
    if (window.gtag) {
      window.gtag('config', 'MEASUREMENT_ID')
    }
  }, [])

  return (
    <BrowserRouter>
      <Suspense fallback={<div className="app-loading" aria-live="polite">Loading…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}


export default App
