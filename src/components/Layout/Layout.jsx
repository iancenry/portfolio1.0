import './Layout.scss'
import { Sidebar } from '..'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='App'>
      <Sidebar />
      <div className="page">
        <span className='page__tags page__top-tags'>&lt;body&gt;</span>
        <Outlet />
        <span className='page__tags page__bottom-tags'>&lt;body&gt;</span>
      </div>
    </div>
  )
}

export default Layout
