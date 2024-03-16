import "../navigation/navistyle.css";

const Header = ({ title }) => {
    return (
        <main>
            <div className="search ml-4 relative ">
                <h1 className=" title text-fontColor">{ title }</h1>
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="h-5 w-5">
                                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <div className="w-5 h-5 m-2 bg-white rounded-full"></div>
                        <div className="w-5 h-5 m-2 bg-white rounded-full"></div>
                        <div className="w-5 h-5 m-2 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Header;
