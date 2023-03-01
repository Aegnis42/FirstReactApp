
import { DisplayDifficulty } from './Components/DisplayDifficulty/DisplayDifficulty.jsx'
import { MenuListItem } from './Components/menuListItem/MenuListItem.jsx'
export default function App() {
  return (
    <div>
      <MenuListItem difficulty="Low"></MenuListItem>
      <DisplayDifficulty  />
    </div>
  )
}