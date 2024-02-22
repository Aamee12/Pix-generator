import MobileNav from '@/components/shared/mobilenav'
import SideBar from '@/components/shared/sidebar'


const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="root">
      <SideBar />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  )
}

export default Layout
