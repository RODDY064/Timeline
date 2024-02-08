import Create from "@app/ui/create/create"
import Edit from "@app/ui/edited/edit"
import Nav from "@app/ui/navbar/nav"
import Search from "@app/ui/search/search"
import RightTab from "@app/ui/tabs/right"

export default function HomeLayout({ children }:{
    children:React.ReactNode
}) {
  return (
   <>
    <Nav/>
    <RightTab/>
    <Search/>
    <Create/>
    <Edit/>
    {children}
   </>
  )
}
