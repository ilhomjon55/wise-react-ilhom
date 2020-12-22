function About() {
	return (
		<>
			<section id='about' className='about'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='titlepage'>
								<h2>About Informations</h2>
								<span>
									It is a long established fact that a reader will be
									distracted by the readable content of a page when
									looking at its layout. The point of using Lorem Ipsum
									is that it has a more-or-less normal distribution of
									letters, as opposed to using 'Content here, content
									here', making it look like readable English. Many
									desktop publishing packages and
								</span>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-12'>
							<div className='img-box'>
								<figure>
									<img src='img/about.png' alt='img' />
								</figure>
								<a href='#readmore'>read more</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;
