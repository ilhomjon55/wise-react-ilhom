import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<>
			{/* header */}
			<header>
				{/* header inner */}
				<div className='header'>
					<div className='container'>
						<div className='row'>
							<div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section'>
								<div className='full'>
									<div className='center-desk'>
										<div className='logo'>
											<a href='index.html'>Wise</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-9 col-lg-9 col-md-9 col-sm-9'>
								<div className='menu-area'>
									<div className='limit-box'>
										<nav className='main-menu'>
											<ul className='menu-area-main'>
												<li>
													<NavLink to='/'>Home</NavLink>
												</li>
												<li>
													<NavLink to='/about'>About</NavLink>
												</li>
												<li>
													<NavLink to='/service'> Service</NavLink>
												</li>
												<li>
													<NavLink to='/screenshot'>
														Screenshot
													</NavLink>
												</li>
												<li>
													<NavLink to='/contact'>
														Contact us
													</NavLink>
												</li>
												<li className='mean-last'>
													<a href='#search'>
														<img
															src='img/search_icon.png'
															alt='Icon'
														/>
													</a>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* end header inner */}
				</div>
			</header>
			{/* end header */}
		</>
	);
}

export default Header;
