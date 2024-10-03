import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function HomePage() {
    return (
        <Menu>
            <MenuButton className="text-5xl animate-rotateColors">kbiz1</MenuButton>
            <MenuItems className="text-2xl" anchor="bottom">
                <MenuItem>
                    <a className="block data-[focus]:bg-blue-100" href="https://github.com/kbiz1">GitHub</a>
                </MenuItem>
                <MenuItem>
                    <a className="block data-[focus]:bg-blue-100" href="/Projects">Projects</a>
                </MenuItem>
            </MenuItems>
        </Menu>
    );
}