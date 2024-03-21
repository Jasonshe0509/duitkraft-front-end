import "../navigation/navistyle.css";
import { ArrowLeftEndOnRectangleIcon, BellIcon, CurrencyDollarIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";


const Header = ({ title }) => {
    return (
        <main>
            <div className="search ml-4 relative  ">
                <h1 className=" title text-fontColor">{title}</h1>
                <div className="search relative  justify-end mb-3 xl:w-96">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <input
                            type="search"
                            className="searchbar relative m-0 flex-auto rounded bg-transparent px-3"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="button-addon2"
                        />
                        <span className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base" id="basic-addon2">
                            <MagnifyingGlassIcon className="text-fontColor w-5 h-5" />
                        </span>
                        <div className="m-2"><CurrencyDollarIcon className="text-fontColor w-5 h-5" /></div>
                        <div className="m-2"><BellIcon className="text-fontColor w-5 h-5" /></div>
                        <Link to='/'>
                            <div className="m-2"><ArrowLeftEndOnRectangleIcon className="text-fontColor w-5 h-5" /></div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Header;
