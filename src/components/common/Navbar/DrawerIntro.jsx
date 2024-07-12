import React from 'react'
import DrawerLayout from '../DrawerLayout'
import Introduction from '../Introduction/Index'

export const DrawerIntro = ({ setIsOpen, isOpen }) => {
    return (
        <DrawerLayout setIsOpen={setIsOpen} isOpen={isOpen}>
            <Introduction/>
        </DrawerLayout>
    )
}
