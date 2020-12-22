function Footer() {
	return (
		<>
			<footer>
				<div className='footer'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-2 col-md-6 col-sm-12 width'>
								<div className='address'>
									<h3>Address</h3>
									<i>
										<img src='icon/3.png' alt='Icon' />
										Locations
									</i>
								</div>
							</div>
							<div className='col-lg-2 col-md-6 col-sm-12 width'>
								<div className='address'>
									<h3>Menus</h3>
									<i>
										<img src='icon/2.png' alt='Icon' />
										Locations
									</i>
								</div>
							</div>
							<div className='col-lg-2 col-md-6 col-sm-12 width'>
								<div className='address'>
									<h3>Useful Linkes</h3>
									<i>
										<img src='icon/1.png' alt='Icon' />
										Locations
									</i>
								</div>
							</div>
							<div className='col-lg-2 col-md-6 col-sm-12 width'>
								<div className='address'>
									<h3>Social Media </h3>
									<ul className='contant_icon'>
										<li>
											<img src='icon/fb.png' alt='icon' />
										</li>
										<li>
											<img src='icon/tw.png' alt='icon' />
										</li>
										<li>
											<img src='icon/lin (2).png' alt='icon' />
										</li>
										<li>
											<img src='icon/instagram.png' alt='icon' />
										</li>
									</ul>
								</div>
							</div>
							<div className='col-xl-3 col-lg-3 col-md-12 col-sm-12 width'>
								<div className='address'>
									<h3>Newsletter </h3>
									<input
										className='form-control'
										placeholder='Enter your email'
										type='type'
										name='Enter your email'
									/>
									<button className='submit-btn'>Subscribe</button>
								</div>
							</div>
						</div>
					</div>
					<div className='copyright'>
						<p>
							Copyright 2019 All Right Reserved By
							<a href='https://html.design/'>Free html Templates</a>
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
