import { BrowserRouter } from 'react-router-dom'

import { IssueProvider } from './context/issueContext'
import { Router } from './Router'

export function App() {
  return (
    <BrowserRouter>
      <IssueProvider>
        <Router />
      </IssueProvider>
    </BrowserRouter>
  )
}
