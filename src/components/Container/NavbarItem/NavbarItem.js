import "./NavbarItem.css"



const NavbarItem = (props) => {
  return (
    <li className="nav-item">
        {props.children}
    </li>
  )
}


const NavbarItemDropDown = (props) => {
    return (
      <li className="nav-item dropdown">
          {props.children}
      </li>
    )
  }
export default NavbarItem
export {NavbarItemDropDown}