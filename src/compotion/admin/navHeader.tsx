const NavHeader = () => {
  return (
    <div>
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
    <i className="fa fa-bars"></i>
</button>

<form
    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
    <div className="input-group">
        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
            aria-label="Search" aria-describedby="basic-addon2"/>
        <div className="input-group-append">
            <button className="btn btn-primary" type="button">
                <i className="bi bi-search fa-sm"></i>
            </button>
        </div>
    </div>
</form>

<ul className="navbar-nav ml-auto">

    <li className="nav-item dropdown no-arrow d-sm-none">
        <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="bi bi-search fa-fw fs-3 "></i>
        </a>
        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
            aria-labelledby="searchDropdown">
            <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small"
                        placeholder="Search for..." aria-label="Search"
                        aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="bi bi-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </li>

    <li className="nav-item dropdown no-arrow mx-1">
        <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="bi bi-bell fa-fw fs-3 "></i>
            <span className="badge badge-danger badge-counter">3+</span>
        </a>
    </li>

    <li className="nav-item dropdown no-arrow mx-1">
        <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="bi bi-envelope fa-fw fs-3 "></i>
            <span className="badge badge-danger badge-counter">7</span>
        </a>
    </li>

    <div className="topbar-divider d-none d-sm-block"></div>

    <li className="nav-item dropdown no-arrow">
        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Hi! Admin</span>
            <i className="bi bi-person-circle fs-3 "></i>
        </a>
    </li>

</ul>

</nav>
    </div>
  )
}

export default NavHeader