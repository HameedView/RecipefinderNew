import Home from './pages/Home'
import ketosalad from './assets/images/Ketosalad.png'
import star from './assets/images/Star.png'
import rectangle7 from './assets/images/Rectangle7.png'
import frame from './assets/images/Frame.png'
import checkcircle from './assets/images/CheckCircle.png'
import rectangle2 from './assets/images/Rectangle2.png'
import avatar3 from './assets/images/Avatar3.png'
import mask from './assets/images/Mask.png'
import ellipse1 from './assets/images/Ellipse1.png'

import { AiOutlineUser, AiOutlineSearch, AiOutlineHeart, AiOutlineMenu } from 'react-icons/ai'

function App() {
	return (
		<>
			<Home />
			<div className='mt-[40px] ml-[20px] mr-[20px] md:ml-[70px] '>
				<div className=' font-extrabold	Urbanist'>Healthy Recipes</div>

				<div className='flex justify-between'>
					<div className='font-semibold	text-sm	text-[#F6B100]'>with features</div>
					<div className='text-[#9F9F9F] text-xs	'>See all</div>
				</div>
			</div>
			<section className='flex ml-[60px] mt-[40px]'>
				<div className=' mt-[50px] w-[300px] flex flex-col items-center relative mr-[30px] '>
					<img className=' ml-[-70px] z-0 max-w-[400px] md:w-[400px] absolute top-[-140px] md:top-[-100px]' src={ketosalad} />
					<div className='border-[1] ml-[-80px] rounded-3xl h-[160px] max-w-[150px] w-full shadow-md !important'>
						<div className='ml-[-35px] md:ml-[25px] mb-2 absolute bottom-0 left-0 Urbanist '>
							<span className='font-bold	text-lg'> Keto Salad</span>
							<div className='flex'>
								<span className='text-xs'>Beans & fruits</span>
								<img className='bg-[#F6B100] ml-6 p-0.5 rounded-l-lg' src={star} />
								<span className='text-xs bg-[#F6B100] p-0.5 rounded-r-lg'>4.9</span>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-[50px] w-[300px] flex flex-col items-center relative mr-[-25px] '>
					<img className=' ml-[-70px] z-0 max-w-[400px] md:w-[400px] absolute top-[-140px] md:top-[-100px]' src={ketosalad} />
					<div className='ml-[-80px] rounded-3xl h-[160px] max-w-[150px] w-full shadow-md'>
						<div className='ml-[-35px] md:ml-[25px] mb-2 absolute bottom-0 left-0 Urbanist '>
							<span className='font-bold	text-lg'> Keto Salad</span>
							<div className='flex'>
								<span className='text-xs'>Beans & fruits</span>
								<img className='bg-[#F6B100] ml-6 p-0.5 rounded-l-lg' src={star} />
								<span className='text-xs bg-[#F6B100] p-0.5 rounded-r-lg'>4.9</span>
							</div>
						</div>
					</div>
				</div>

				<div className='hidden md:flex mt-[50px] w-[300px]   flex-col items-center relative'>
					<img className='ml-[-70px] z-0 w-[400px] absolute top-[-100px]' src={ketosalad} />
					<div className='ml-[-80px] rounded-3xl h-[160px] w-[150px] shadow-md'>
						<div className='ml-[25px] mb-2 absolute bottom-0 left-0 Urbanist '>
							<span className='font-bold	text-lg'> Keto Salad</span>
							<div className='flex'>
								<span className='text-xs'>Beans & fruits</span>
								<img className='bg-[#F6B100] ml-6 p-0.5 rounded-l-lg' src={star} />
								<span className='text-xs bg-[#F6B100] p-0.5 rounded-r-lg'>4.9</span>
							</div>
						</div>
					</div>
				</div>

				<div className='hidden md:flex mt-[50px] w-[300px] flex-col items-center relative'>
					<img className=' ml-[-70px] z-0 w-[400px] absolute top-[-100px]' src={ketosalad} />
					<div className='ml-[-80px] rounded-3xl h-[160px] w-[150px] shadow-md'>
						<div className='ml-[25px] mb-2 absolute bottom-0 left-0 Urbanist '>
							<span className='font-bold	text-lg'> Keto Salad</span>
							<div className='flex'>
								<span className='text-xs'>Beans & fruits</span>
								<img className='bg-[#F6B100] ml-6 p-0.5 rounded-l-lg' src={star} />
								<span className='text-xs bg-[#F6B100] p-0.5 rounded-r-lg'>4.9</span>
							</div>
						</div>
					</div>
				</div>

				<div className='hidden md:flex mt-[50px] w-[300px] flex-col items-center relative'>
					<img className=' ml-[-70px] z-0 w-[400px] absolute top-[-100px]' src={ketosalad} />
					<div className='shadow-md ml-[-80px] rounded-3xl h-[160px] w-[150px]'>
						<div className='ml-[25px] mb-2 absolute bottom-0 left-0 Urbanist '>
							<span className='font-bold	text-lg'> Keto Salad</span>
							<div className='flex'>
								<span className='text-xs'>Beans & fruits</span>
								<img className='bg-[#F6B100] ml-6 p-0.5 rounded-l-lg' src={star} />
								<span className='text-xs bg-[#F6B100] p-0.5 rounded-r-lg'>4.9</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className='flex justify-between mt-[40px] ml-[20px] mr-[20px] md:ml-[70px] '>
				<div className='font-semibold	text-sm	text-[#F6B100] '>with benefits</div>
				<div className='text-[#9F9F9F] text-xs	'>See all</div>
			</div>

			<section className='md:mt-10'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 max-w-[1280px] mx-auto'>
					<div>
						<div className='items-center'>
            <div className='mt-[12px]'>
								<div className='flex h-[120px] rounded-2xl shadow-md '>
									<img className='p-[10px] h-[120px] w-[250px] ' src={rectangle7} />
									<div>
										<div className='mt-[40px] font-bold'>Pasta Salad</div>
										<div className='flex'>
											<img src={checkcircle} />
											<span className='text-sm md:text-base '>
												Protects against cancer
											</span>
										</div>
									</div>
									<div className='flex mt-10 md:ml-10 mr-3'>
										<img
											className='bg-[#F6B100] mt-[10px] h-[16px] w-[15px]  rounded-l-lg'
											src={star}
										/>
										<span className='text-xs  bg-[#F6B100] mt-[10px]  h-[16px] w-[23px] p-0.5 rounded-r-lg'>
											4.9
										</span>
									</div>
								</div>
							</div>
							<div className='mt-[12px]'>
								<div className='flex h-[120px] rounded-2xl shadow-md '>
									<img className='p-[10px] h-[120px] w-[250px] ' src={rectangle7} />
									<div>
										<div className='mt-[40px] font-bold'>Mung bean Salad</div>
										<div className='flex'>
											<img src={checkcircle} />
											<span className='text-sm md:text-base '>
												Reduce Chronic deseases risk
											</span>
										</div>
									</div>
									<div className='flex mt-10 md:ml-10 mr-3'>
										<img
											className='bg-[#F6B100] mt-[10px] h-[16px] w-[15px]  rounded-l-lg'
											src={star}
										/>
										<span className='text-xs  bg-[#F6B100] mt-[10px]  h-[16px] w-[23px] p-0.5 rounded-r-lg'>
											4.9
										</span>
									</div>
								</div>
							</div>

							<div className='mt-[12px]'>
								<div className='flex h-[120px] rounded-2xl shadow-md '>
									<img className='p-[10px] h-[120px] w-[250px] ' src={rectangle7} />
									<div>
										<div className='mt-[40px] font-bold'>Tuna Salad</div>
										<div className='flex'>
											<img className='h-[20px]' src={checkcircle} />
											<span className='text-sm md:text-base'>
												Helps with Blood Pressure
											</span>
										</div>
									</div>
									<div className='flex mt-10 md:ml-10 mr-3'>
										<img
											className='bg-[#F6B100] mt-[10px] h-[16px] w-[15px]  rounded-l-lg'
											src={star}
										/>
										<span className='text-xs  bg-[#F6B100] mt-[10px]  h-[16px] w-[23px] p-0.5 rounded-r-lg'>
											4.9
										</span>
									</div>
								</div>
							</div>

							<div className='mt-[12px]'>
								<div className='flex h-[120px] rounded-2xl shadow-md '>
									<img className='p-[10px] h-[120px] w-[250px] ' src={rectangle7} />
									<div>
										<div className='mt-[40px] font-bold'>Caesar Salad</div>
										<div className='flex'>
											<img className='h-[20px]' src={checkcircle} />
											<span className='text-sm md:text-base'>
												Boosts Immunity System
											</span>
										</div>
									</div>
									<div className='flex mt-10 md:ml-10 mr-3'>
										<img
											className='bg-[#F6B100] mt-[10px] h-[16px] w-[15px]  rounded-l-lg'
											src={star}
										/>
										<span className='text-xs  bg-[#F6B100] mt-[10px]  h-[16px] w-[23px] p-0.5 rounded-r-lg'>
											4.9
										</span>
									</div>
								</div>
							</div>

							<div className='mt-[12px]'>
								<div className='flex h-[120px] rounded-2xl shadow-md '>
									<img className='p-[10px] h-[120px] w-[250px] ' src={rectangle7} />
									<div>
										<div className='mt-[40px] font-bold'>Mung bean Salad</div>
										<div className='flex'>
											<img className='h-[20px]' src={checkcircle} />
											<span className='text-sm md:text-base'>
												Reduce Chronic Disease Risk
											</span>
										</div>
									</div>
									<div className='flex mt-10 md:ml-10 mr-3'>
										<img
											className='bg-[#F6B100] mt-[10px] h-[16px] w-[15px]  rounded-l-lg'
											src={star}
										/>
										<span className='text-xs  bg-[#F6B100] mt-[10px]  h-[16px] w-[23px] p-0.5 rounded-r-lg'>
											4.9
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className=''>
						<img className='w-full' src={frame} />

						<div className='relative'>
							<img src={rectangle2} className='w-full' />

							<div className='absolute top-10 left-[30px] md:left-[50px] bg-black mb-[20px]  p-1 rounded-lg bg-opacity-50'>
								<AiOutlineHeart className='  text-red-700' />
							</div>

							<h3 className='absolute top-10 right-[30px] md:right-[50px] bg-[#F6B100] mb-[14px]  text-white rounded-lg p-1'>
								Start cook
							</h3>

							<div className='absolute left-[30px] md:left-[70px] bottom-[30px] md:bottom-[70px]'>
								<h3 className='object-right-top font-bold text-xl text-white'>
									Weekly pick
								</h3>
								<p className=' text-white mt-[10px]'>
									This pumpkin cream soup <br /> will warm up the feintest of hearts.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='mt-[20px] md:mt-[50px] px-5'>
				<div className=' max-w-[1280px] mx-auto'>
					<h3 className='font-bold	'>Comments (45)</h3>
					<div className=''>
						<div className='flex mt-[30px]'>
							<img src={avatar3} />
							<h3 className='mt-[25px] ml-[30px] font-bold'>Richard Flynn</h3>
						</div>
						<h4 className='mt-[20px] font-medium'>
							Loving this recipe! So many delicious recipes to choose from...
						</h4>
						<div className='flex mt-[20px] '>
							<AiOutlineHeart className='mt-[3px] object-left-top text-red-700' />
							<h6 className='ml-5 text-[#9F9F9F]'>65</h6>
							<h6 className='ml-5 text-[#9F9F9F]'>1 month ago</h6>
						</div>

						<div className='flex mt-[30px]'>
							<img src={mask} />
							<h3 className='mt-[25px] ml-[30px] font-bold'>Mitchell Oconnor</h3>
						</div>
						<h4 className='mt-[20px] font-medium'>
							Loving this recipe! So many delicious recipes to choose from...
						</h4>
						<div className='flex mt-[20px] '>
							<AiOutlineHeart className='mt-[3px] object-left-top text-red-700' />
							<h6 className='ml-5 text-[#9F9F9F]'>65</h6>
							<h6 className='ml-5 text-[#9F9F9F]'>1 month ago</h6>
						</div>

						<div className='flex mt-[30px]'>
							<img src={ellipse1} />
							<h3 className='mt-[25px] ml-[30px] font-bold'>Finnegan Ortega</h3>
						</div>
						<h4 className='mt-[20px] font-medium'>
							Loving this recipe! So many delicious recipes to choose from...
						</h4>
						<div className='mb-[30px] flex mt-[20px] '>
							<AiOutlineHeart className='mt-[3px] object-left-top text-red-700' />
							<h6 className='ml-5 text-[#9F9F9F]'>65</h6>
							<h6 className='ml-5 text-[#9F9F9F]'>1 month ago</h6>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default App
