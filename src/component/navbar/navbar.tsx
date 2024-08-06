import { useState } from 'react'
import logoSVG from '../../assets/logo.svg'
import AppButton from '../button/appButton'

const NavBar = () => {

  const [menu, setMenu] = useState<string>('Tapos')
  const [activeButton, setActiveButton] = useState<string>('Mainnet')

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white shadow font-mono">
      <div className="flex-1 items-center">
        <img src={logoSVG} alt="logo" className='h-8 w-8 mr-2' />
      </div>
      <div className='flex-1 items-center space-x-4'>
        <a onClick={() => { setMenu('Tapos') }} href="#" className={`text-gray-700 ${menu == 'Tapos' ? 'underline' : ''}`}>Tapos</a>
        <a onClick={() => { setMenu('Wallet') }} href="#" className={`text-gray-700 ${menu == 'Wallet' ? 'underline' : ''}`}>Wallet</a>
        <a onClick={() => { setMenu('Leaderboard') }} href="#" className={`text-gray-700 ${menu == 'Leaderboard' ? 'underline' : ''}`}>Leaderboard</a>
        <a onClick={() => { setMenu('Shop') }} href="#" className={`text-gray-700 ${menu == 'Shop' ? 'underline' : ''}`}>Shop</a>
        <a href="">More&#9662;</a>
      </div>
      <div className='flex flex-1 justify-end'>
        <div className='flex items-center bg-gray-500 rounded-full '>
          <AppButton onClick={() => { setActiveButton('Mainnet') }} className={activeButton == 'Mainnet' ? 'bg-orange-500' : 'bg-gray-500'}>Mainnet</AppButton>
          <AppButton onClick={() => { setActiveButton('Testnet') }} className={activeButton == 'Testnet' ? 'bg-orange-500' : 'bg-gray-500'}>Testnet</AppButton>
        </div>

      </div>
    </div >
  )
}

export default NavBar
