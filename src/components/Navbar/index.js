import Image from 'next/image'
import Bars3Icon from '@heroicons/react/20/solid/Bars3Icon'

export default function Navbar() {

  return (
    <div className="h-14 bg-base">
      <div className="flex h-full items-center">
        <div className="rounded-full w-8 h-8  hover:bg-gray-800 flex justify-center items-center ml-4 mr-4 cursor-pointer">
          <Bars3Icon className="text-slate-100 w-5"/>
        </div>
        <div>
          <Image
            src="/img/logo.png"
            width="130"
            height="23"
          />
        </div>
        <div></div>
      </div>
    </div>
  )
}