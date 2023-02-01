import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="bg-base-background h-full min-h-screen">
      <Header />
      <Outlet />
    </div>
  )
}
