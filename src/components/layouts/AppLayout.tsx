// Components
import Header from './Header'
import SearchFeature from '../features/SearchFeature'

// Hooks
import { Outlet, useLocation } from 'react-router-dom'

const AppLayout = () => {
  const location = useLocation()

  return (
    <>
      <Header />
      <main>
        {['/', '/search'].includes(location.pathname) && <SearchFeature />}
        <Outlet />
      </main>
    </>
  )
}

export default AppLayout
