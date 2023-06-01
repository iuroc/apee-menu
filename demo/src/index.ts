import { menuConfig } from './config'
import { ApeeMenu } from '../../src'

const apeeMenu = new ApeeMenu()
apeeMenu.setMenuConfig(menuConfig)
apeeMenu.setLocation(100, 50)
document.querySelector('button')?.addEventListener('click', () => {
    apeeMenu.show()
})