function Contact() {
	return (
		<>
			<section id='testimonial' className='testimonial'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='titlepage'>
								<h3>Testimonial</h3>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
							<div
								id='testimonial_slider'
								className='carousel slide banner-bg'
								data-ride='carousel'>
								<div className='carousel-inner'>
									<div className='carousel-item active'>
										<img
											className='first-slide'
											src='img/testimonial-img.png'
											alt='Pictures of section contacts'
										/>
										<div className='container'>
											<div className='carousel-caption relat'>
												<h3>Luka due</h3>
												<span>
													<i className='fa fa-quote-left' /> (
													foundery )
													<i className='fa fa-quote-right' />
												</span>
												<p>
													It is a long established fact that a
													reader will be distracted by the readable
													content of a page when looking at its
													layout. The point of using Lorem
												</p>
											</div>
										</div>
									</div>
									<div className='carousel-item'>
										<img
											className='second-slide'
											src='img/testimonial-img.png'
											alt='Pictures of section contacts'
										/>
										<div className='container'>
											<div className='carousel-caption relat'>
												<h3>Luka due</h3>
												<span>
													<i className='fa fa-quote-left' /> (
													foundery )
													<i className='fa fa-quote-right' />
												</span>
												<p>
													It is a long established fact that a
													reader will be distracted by the readable
													content of a page when looking at its
													layout. The point of using Lorem
												</p>
											</div>
										</div>
									</div>
									<div className='carousel-item'>
										<img
											className='third-slide'
											src='img/testimonial-img.png'
											alt='Pictures of section contacts'
										/>
										<div className='container'>
											<div className='carousel-caption relat'>
												<h3>Luka due</h3>
												<span>
													<i className='fa fa-quote-left' /> (
													foundery )
													<i className='fa fa-quote-right' />
												</span>
												<p>
													It is a long established fact that a
													reader will be distracted by the readable
													content of a page when looking at its
													layout. The point of using Lorem
												</p>
											</div>
										</div>
									</div>
								</div>
								<a
									className='carousel-control-prev'
									href='#testimonial_slider'
									role='button'
									data-slide='prev'>
									{' '}
									<i className='fa fa-angle-right' />
								</a>{' '}
								<a
									className='carousel-control-next'
									href='#testimonial_slider'
									role='button'
									data-slide='next'>
									{' '}
									<i className='fa fa-angle-left' />
								</a>
							</div>
						</div>
						<div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
							<div className='contact'>
								<h3>Contact Us</h3>
								<form>
									<div className='row'>
										<div className='col-sm-12'>
											<input
												className='contactus'
												placeholder='Name'
												type='text'
												name='Name'
											/>
										</div>
										<div className='col-sm-12'>
											<input
												className='contactus'
												placeholder='Phone'
												type='text'
												name='Email'
											/>
										</div>
										<div className='col-sm-12'>
											<input
												className='contactus'
												placeholder='Email'
												type='text'
												name='Email'
											/>
										</div>
										<div className='col-sm-12'>
											<textarea
												className='textarea'
												placeholder='Message'
												type='text'
												name='Message'
												defaultValue={''}
											/>
										</div>
										<div className='col-sm-12'>
											<button className='send'>Send</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Contact;
