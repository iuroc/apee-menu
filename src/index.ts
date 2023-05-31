import { menuConfig } from './config'
import { makeNewMenu, removeSubMenu } from './util'

makeNewMenu(menuConfig, 5, 50)
window.addEventListener('mouseover', (event) => {
    const taregt = event.target as HTMLElement
    if (!taregt.hasAttribute('data-menu-app')) removeSubMenu()
})