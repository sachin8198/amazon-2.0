import Image from "next/image"
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'

function Header() {
    return (
        <header>
            {/* top nav */}
            <div className="bg-amazon_blue flex items-center p-1 py-2 flex-grow px-4 space-x-5" >
                <div className=" mt-1 flex items-center flex-grow sm:flex-grow-0">
                    <Image src="https://links.papareact.com/f90" width={150} height={40} alt="icon"
                        className=" cursor-pointer"
                    />
                </div>
                {/* Search */}
                <div className=" h-12 bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center rounded-md flex-grow">
                    <input type="text" className="p-2 h-full flex-grow rounded-l-md focus:outline-none" />
                    <SearchIcon className="h-12 p-4" />
                </div>

                {/* Right */}

                <div className=" text-white flex items-center text-xs space-x-6">
                    <div className=" cursor-pointer hover:underline">
                        <p>Hello Sachin</p>
                        <p className=" font-extrabold md:text-sm">Accoun & Lists</p>
                    </div>

                    <div className=" cursor-pointer hover:underline">
                        <p>Returns</p>
                        <p className=" font-extrabold md:text-sm">& Orders</p>

                    </div>

                    <div className=" cursor-pointer hover:underline flex items-center relative">
                        <span className=" absolute top-0 -right-1 md:right-10 bg-yellow-400 h-4 w-4 rounded-full text-center text-black font-bold">4</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className=" font-extrabold md:text-sm hidden md:inline-block">Basket</p>
                    </div>
                </div>
            </div>

            {/* bottom nav */}

            <div className=" bg-amazon_blue-light space-x-2 p-2 pl-6 flex items-center text-white ">
                <p className="flex items-center cursor-pointer hover:underline">
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p className="cursor-pointer hover:underline">Prime video</p>
                <p className="cursor-pointer hover:underline">Amazon Business</p>
                <p className="cursor-pointer hover:underline">Today's Deals</p>
                <p className="cursor-pointer hover:underline hidden lg:inline-flex">Electronics</p>

                <p className="cursor-pointer hover:underline hidden lg:inline-flex">Food & Grocery</p>
                <p className="cursor-pointer hover:underline hidden lg:inline-flex">Prime</p>
                <p className="cursor-pointer hover:underline hidden lg:inline-flex">Buy Again</p>
                <p className="cursor-pointer hover:underline hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="cursor-pointer hover:underline hidden lg:inline-flex">Health & Personal Care</p>


            </div>

        </header>
    )
}

export default Header