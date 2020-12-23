import ServiceType from '../../Components/ServiceType/ServiceType';

function ServicePage() {
	return (
		<>
			<section id='service' className='service'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='titlepage'>
								<h2>Services </h2>
								<span>
									It is a long established fact that a reader will be
									distracted by the readable content of a page when
									looking at its layout. The point of <br />
									using Lorem Ipsum is that it has a more-or-less
									normal distribution of letters,
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className='container margin-r-l'>
					<ServiceType />
				</div>
			</section>
		</>
	);
}

export default ServicePage;
