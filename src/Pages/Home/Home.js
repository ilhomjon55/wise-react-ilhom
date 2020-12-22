function Home() {
	return (
		<>
			<section className='slider_section'>
				<div
					id='myCarousel'
					className='carousel slide banner-main'
					data-ride='carousel'>
					<div className='carousel-inner'>
						<div className='carousel-item active'>
							<img
								className='first-slide'
								src='img/banner2.png'
								alt='First slide'
							/>
							<div className='container'>
								<div className='carousel-caption relative'>
									<h1>Basic template</h1>
									<p>
										It is a long established fact that a reader will
										be distracted by the readable content of a page
										when looking at its layout. The point of using
										Lorem Ipsum is that it has a more-or-less normal
										distribution of letters, as opposed to using
										'Content here, content here', making it look like
										readable English. Many desktop publishing packages
										and
									</p>
									<a href='#readmore'>Read More</a>
								</div>
							</div>
						</div>
						<div className='carousel-item'>
							<img
								className='second-slide'
								src='img/banner2.png'
								alt='Second slide'
							/>
							<div className='container'>
								<div className='carousel-caption relative'>
									<h1>Basic template</h1>
									<p>
										It is a long established fact that a reader will
										be distracted by the readable content of a page
										when looking at its layout. The point of using
										Lorem Ipsum is that it has a more-or-less normal
										distribution of letters, as opposed to using
										'Content here, content here', making it look like
										readable English. Many desktop publishing packages
										and
									</p>
									<a href='#readmore'>Read More</a>
								</div>
							</div>
						</div>
						<div className='carousel-item'>
							<img
								className='third-slide'
								src='img/banner2.png'
								alt='Third slide'
							/>
							<div className='container'>
								<div className='carousel-caption relative'>
									<h1>Basic template</h1>
									<p>
										It is a long established fact that a reader will
										be distracted by the readable content of a page
										when looking at its layout. The point of using
										Lorem Ipsum is that it has a more-or-less normal
										distribution of letters, as opposed to using
										'Content here, content here', making it look like
										readable English. Many desktop publishing packages
										and
									</p>
									<a href='#readmore'>Read More</a>
								</div>
							</div>
						</div>
					</div>
					<a
						className='carousel-control-prev'
						href='#myCarousel'
						role='button'
						data-slide='prev'>
						<i className='fa fa-angle-left' />
					</a>
					<a
						className='carousel-control-next'
						href='#myCarousel'
						role='button'
						data-slide='next'>
						<i className='fa fa-angle-right' />
					</a>
				</div>
			</section>
		</>
	);
}

export default Home;
