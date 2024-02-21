import { Outlet } from 'react-router-dom'
import { Header } from '../components'

export const DashboardLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}