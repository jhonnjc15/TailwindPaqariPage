import React from 'react'

interface Props{
  toggle: boolean
  setToggle: (toggle: boolean) => void
}

const MenuButton = ({ toggle, setToggle }:Props) => {
  return (
    <div className='flex justify-center items-center w-[28px] h-[28px] object-contain'>
        <button className="relative group" onClick={() => setToggle(!toggle) }>
            <div className={`relative flex items-center justify-center rounded-full w-[30px] h-[30px] transform transition-all bg-slate-600 ring-0 ring-gray-300 hover:ring-0 ${!toggle ? 'bg-blue-200': 'ring-2 shadow-md'} ring-opacity-30 duration-1000 `}>
                <div className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 ${!toggle ? '': '-rotate-[45deg]'} origin-center`}>
                    <div className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 ${!toggle ? '': '-rotate-90 h-[1px] -translate-y-[1px]'} origin-right delay-75`}></div>
                    <div className={`bg-white h-[1px] rounded`}></div>
                    <div className={`bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 ${!toggle ? '': '-rotate-90 h-[1px] translate-y-[1px]'} origin-left delay-75`}></div>
                </div>
            </div>
        </button>
    </div>
  )
}

export default MenuButton
