import { servicesData } from '../../Data/services-data';

function ServiceType() {
	return (
		<div className='services__list row'>
			{servicesData.map((service) => {
				return (
					<div
						className='col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb'
						key={service.id}>
						<div className='service-box'>
							<figure>
								<a
									href={service.imgSource}
									className='fancybox'
									rel='ligthbox'>
									<img
										src={service.imgSource}
										className='zoom img-fluid '
										alt=''
									/>
								</a>
								<span className='hoverle'>
									<a
										href={service.imgSource}
										className='fancybox'
										rel='ligthbox'>
										{service.name}
									</a>
								</span>
							</figure>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ServiceType;
