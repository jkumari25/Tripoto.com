function navbar(){
    return `<div id="navbar-container">
            <img class="logo-img" src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg"
                alt="logo">
            <div id="in-visible">
                <input id="in-visible" type="text" placeholder="Search for itineraries, destinations, hotels or activities">
                <button><img
                        src="data:image/svg+xml,%3csvg viewBox='0 0 34 32' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='16px' width='17px'%3e %3cpath style='fill:%23506066' d='M20.571 14.857q0-3.304-2.348-5.652t-5.652-2.348-5.652 2.348-2.348 5.652 2.348 5.652 5.652 2.348 5.652-2.348 2.348-5.652zM29.714 29.714q0 0.929-0.679 1.607t-1.607 0.679q-0.964 0-1.607-0.679l-6.125-6.107q-3.196 2.214-7.125 2.214-2.554 0-4.884-0.991t-4.018-2.679-2.679-4.018-0.991-4.884 0.991-4.884 2.679-4.018 4.018-2.679 4.884-0.991 4.884 0.991 4.018 2.679 2.679 4.018 0.991 4.884q0 3.929-2.214 7.125l6.125 6.125q0.661 0.661 0.661 1.607z'%3e %3c/path%3e %3c/svg%3e"
                        alt="Search" style="height: 16px; width: 17px;"></button>
            </div>
            <div class="nav-dropdown">
                <ul>
                    <li ><a >Inspirations <i style="color: aliceblue;" class="fa-solid fa-caret-down"></i></a>
                        <ul>
                            <li><a>Visit Singapore</a></li>
                            <li><a>Beaches</a></li>
                            <li><a>Mountains</a></li>
                            <li><a>Heritage</a></li>
                            <li><a>Weekend Guide</a></li>
                            <li><a>Upcoming Festivals</a></li>
                            <li><a>Honeymoon Packages</a></li>
                            <li><a>Wildlife Tourism</a></li>
                            <li><a>Road Trips</a></li>
                            <li><a>Getaways Guide</a></li>
                            <li><a>Luxury Travel</a></li>
                            <li><a>Explore More</a></li>
                        </ul>
                    </li>
                    <li><a href="forum.html">Forum</a>
                    </li>
                    <li><a>Packages</a></li>
                    <li><a>Publish Trip <i style="color: aliceblue;" class="fa-solid fa-caret-down"></i></a>
                        <ul>
                            <li><a href="createnew.html">Create New</a></li>
                            <li><a href="upload.html">Upload Photos/Videos</a></li>
                            <li><a href="importblog.html">Import Blog</a></li>
                        </ul>
                    </li>
                    <li><a href="./signup&login.html">Sign in</a></li>
                </ul>
            </div>

        </div>`;
}

export default navbar;