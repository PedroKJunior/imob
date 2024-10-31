import Image from 'next/image'
import Marquee from 'react-fast-marquee'

import { House, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react'

import { Animation } from '@/components/animation'
import { Menu } from '@/components/menu'

export default function Home() {
	return (
		<>
			<Animation />
			<Menu />

			{/* <section id='home' className='h-screen pt-20 z-[90]'>
				<div className='grid grid-cols-2'>
					<div className='flex justify-end items-center gap-4 px-28'>
						<div className='w-7/12 space-y-8'>
							<h1 className='text-blueGray-600 text-8xl font-bold font-serif italic'>Encontre o Lar Perfeito para Você</h1>
							<p className='text-gold-600 text-xl '>
								Descubra ofertas exclusivas de casas e apartamentos em diversas regiões. Sua nova jornada começa aqui, encontre o imóvel dos seus sonhos com facilidade e segurança.
							</p>
							<button className='w-full bg-blueGray-500 py-4 rounded-full text-white hover:bg-blueGray-600'>Fale com um de nossos corretores</button>
						</div>
					</div>
					<div className='rounded-custom bg-blueGray-500 w-[75vh] h-[75vh] mt-16 ml-16'></div>
				</div>
			</section>
			<section id='about' className='grid grid-cols-2 h-screen bg-gradient-to-b from-blueGray-500 from-80% to-white to-20%'>
				<div className='flex items-end justify-center p-40'></div>
				<div className='text-gold-100 space-y-4 flex flex-col justify-center items-center p-20'>
					<h1 className='text-4xl font-bold mb-4 w-full text-left'>Quem Somos</h1>
					<p className='text-xl'>
						Somos uma imobiliária comprometida em transformar o seu sonho de morar ou investir em realidade. Com anos de experiência no mercado, nos dedicamos a oferecer um atendimento personalizado e
						soluções que se adaptam às suas necessidades. Nossa missão é facilitar o processo de compra, venda ou aluguel de imóveis, garantindo transparência, segurança e satisfação em cada etapa.
					</p>
					<p className='text-xl'>
						Contamos com uma equipe de profissionais qualificados, sempre prontos para orientar e fornecer o suporte necessário para que você tome a melhor decisão. Seja qual for o seu objetivo —
						adquirir a casa dos sonhos, investir em um imóvel comercial ou encontrar o aluguel perfeito — estamos aqui para te ajudar a conquistar.
					</p>
					<p className='text-xl'>Na nossa imobiliária, você encontra mais do que imóveis, encontra um parceiro para todas as suas conquistas. Venha conhecer as oportunidades que temos para você!</p>
				</div>
			</section>
			<section id='work' className='h-screen bg-white grid grid-cols-2'>
				<div></div>
				<div className='text-blueGray-500 space-y-4 flex flex-col justify-center items-center p-20'>
					<h1 className='text-4xl font-bold mb-4 w-full text-left'>Trabalhe Conosco </h1>
					<div className='flex gap-8 w-full'>
						<div className='flex-none w-[350px] h-[350px] bg-gradient-to-br from-blueGray-500 from-5% via-white  to-blueGray-500 to-95% p-1 rounded-custom overflow-hidden'>
							<Image src='/trabalheconosco.webp' width={1024} height={1024} alt='' className='rounded-custom' />
						</div>
						<div className='space-y-8'>
							<p className='text-xl '>
								Se você é corretor(a) e está em busca de novas oportunidades, venha fazer parte do nosso time! Aqui, valorizamos o talento, a dedicação e o espírito empreendedor de quem trabalha com
								paixão e profissionalismo. Oferecemos um ambiente colaborativo, onde você terá o suporte necessário para crescer, se desenvolver e alcançar seus objetivos. Junte-se a nós e faça parte
								de uma equipe que está sempre em busca de inovação e resultados!
							</p>
							<p className='font-bold'>
								Envie seu curriculo para <span className='italic text-gold-600 underline hover:text-gold-700 cursor-pointer z-[100]'>trabalhe_conosco@imob.com.br</span>
							</p>
						</div>
					</div>
				</div>
			</section>
			<section id='news' className='h-screen bg-gold-500 p-20 flex flex-col justify-center items-center'>
				<Marquee pauseOnHover speed={80} gradient gradientColor='#c2b280'>
					<Image src='/1.jpg' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/2.png' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/3.png' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/4.webp' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/5.jpeg' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/1.jpg' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/2.png' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/3.png' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/4.webp' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/5.jpeg' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
				</Marquee>
				<div className='p-20 w-full flex justify-center text-7xl font-serif italic text-blueGray-500'>Conheça nossos empreendimentos.</div>
				<Marquee pauseOnHover direction='right' speed={80} gradient gradientColor='#c2b280'>
					<Image src='/1.jpg' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/2.png' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/3.png' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/4.webp' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/5.jpeg' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/1.jpg' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/2.png' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/3.png' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/4.webp' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/5.jpeg' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
				</Marquee>
			</section>
			<section id='contact' className='bg-blueGray-500 grid grid-cols-2 p-20'>
				<div className='space-y-8 self-end '>
					<div>
						<div className='flex gap-2 items-center'>
							<Image src='/logo.svg' alt='Imob' width={120} height={120} />
							<span className='font-serif text-8xl text-gold-100'>IMOB</span>
						</div>
						<p className='text-gold-100 text-4xl'>A sua Imobiliária na WEB</p>
					</div>
					<div className='flex gap-3 text-white'>
						<h4 className='text-white text-xl flex items-center gap-2'>Nos siga em nossas redes sociais</h4>
						<Instagram size={30} />
						<Facebook size={30} />
						<Youtube size={30} />
						<Linkedin size={30} />
					</div>
				</div>
				<div className='flex flex-col gap-4'>
					<h4 className='text-white text-4xl flex items-center gap-2 font-bold'>
						<House size={50} />
						Anuncie Seu Imóvel
					</h4>
					<p className='text-white'>Preencha o formulário abaixo e um de nossos especialistas entrará em contato com você. Valorize seu imóvel e anuncie com a gente!!!!</p>
					<input type='text' placeholder='Nome' className='bg-blueGray-100/75  rounded-sm h-8 outline-none p-2 placeholder:text-blueGray-500 text-blueGray-700' />
					<input type='email' placeholder='Email' className='bg-blueGray-100/75  rounded-sm h-8 outline-none p-2 placeholder:text-blueGray-500 text-blueGray-700' />
					<input type='tel' placeholder='Telefone' className='bg-blueGray-100/75  rounded-sm h-8 outline-none p-2 placeholder:text-blueGray-500 text-blueGray-700' />
					<button className='bg-gold-100 p-2 rounded-sm text-blueGray-500 font-bold hover:bg-gold-500  active:shadow-inner active:border-t-2 active:border-t-gold-600'>Enviar</button>
				</div>
			</section> */}

			<section id='home' className='h-screen pt-20 z-[90]'>
				<div className='grid grid-cols-1 lg:grid-cols-2'>
					<div className='flex justify-center lg:justify-end items-center gap-4 px-8 lg:px-28'>
						<div className='w-full lg:w-7/12 space-y-8'>
							<h1 className='text-blueGray-600 text-4xl lg:text-8xl font-bold font-serif italic'>Encontre o Lar Perfeito para Você</h1>
							<p className='text-gold-600 text-lg lg:text-xl'>
								Descubra ofertas exclusivas de casas e apartamentos em diversas regiões. Sua nova jornada começa aqui, encontre o imóvel dos seus sonhos com facilidade e segurança.
							</p>
							<button className='w-full bg-blueGray-500 py-3 lg:py-4 rounded-full text-white hover:bg-blueGray-600'>Fale com um de nossos corretores</button>
						</div>
					</div>
					<div className='rounded-custom bg-blueGray-500 w-full lg:w-[75vh] h-[50vh] lg:h-[75vh] mt-8 lg:mt-16 mx-4 lg:ml-16'></div>
				</div>
			</section>

			<section id='about' className='grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-screen bg-gradient-to-b from-blueGray-500 from-80% to-white to-20%'>
				<div className='flex items-end justify-center p-8 lg:p-40'></div>
				<div className='text-gold-100 space-y-4 flex flex-col justify-center items-center p-8 lg:p-20'>
					<h1 className='text-2xl lg:text-4xl font-bold mb-4 w-full text-left'>Quem Somos</h1>
					<p className='text-lg lg:text-xl'>
						Somos uma imobiliária comprometida em transformar o seu sonho de morar ou investir em realidade. Com anos de experiência no mercado, nos dedicamos a oferecer um atendimento personalizado e
						soluções que se adaptam às suas necessidades.
					</p>
					<p className='text-lg lg:text-xl'>Contamos com uma equipe de profissionais qualificados, sempre prontos para orientar e fornecer o suporte necessário para que você tome a melhor decisão.</p>
					<p className='text-lg lg:text-xl'>
						Na nossa imobiliária, você encontra mais do que imóveis, encontra um parceiro para todas as suas conquistas. Venha conhecer as oportunidades que temos para você!
					</p>
				</div>
			</section>

			<section id='work' className='h-auto lg:h-screen bg-white grid grid-cols-1 lg:grid-cols-2'>
				<div></div>
				<div className='text-blueGray-500 space-y-4 flex flex-col justify-center items-center p-8 lg:p-20'>
					<h1 className='text-2xl lg:text-4xl font-bold mb-4 w-full text-left'>Trabalhe Conosco</h1>
					<div className='flex flex-col lg:flex-row gap-8 w-full'>
						<div className='flex-none w-full lg:w-[350px] h-[250px] lg:h-[350px] bg-gradient-to-br from-blueGray-500 from-5% via-white to-blueGray-500 to-95% p-1 rounded-custom overflow-hidden'>
							<Image src='/trabalheconosco.webp' width={1024} height={1024} alt='' className='rounded-custom' />
						</div>
						<div className='space-y-8'>
							<p className='text-lg lg:text-xl'>
								Se você é corretor(a) e está em busca de novas oportunidades, venha fazer parte do nosso time! Aqui, valorizamos o talento, a dedicação e o espírito empreendedor de quem trabalha com
								paixão e profissionalismo.
							</p>
							<p className='font-bold'>
								Envie seu currículo para <span className='italic text-gold-600 underline hover:text-gold-700 cursor-pointer z-[100]'>trabalhe_conosco@imob.com.br</span>
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id='news' className='h-auto lg:h-screen bg-gold-500 p-8 lg:p-20 flex flex-col justify-center items-center'>
				<Marquee pauseOnHover speed={80} gradient gradientColor='#c2b280'>
					<Image src='/1.jpg' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/2.png' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/3.png' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/4.webp' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/5.jpeg' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/1.jpg' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/2.png' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/3.png' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/4.webp' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/5.jpeg' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
				</Marquee>
				<div className='p-8 lg:p-20 w-full flex justify-center text-4xl lg:text-7xl font-serif italic text-blueGray-500'>Conheça nossos empreendimentos.</div>
				<Marquee pauseOnHover direction='right' speed={80} gradient gradientColor='#c2b280'>
					<Image src='/1.jpg' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/2.png' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/3.png' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/4.webp' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/5.jpeg' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/1.jpg' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/2.png' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/3.png' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/4.webp' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
					<Image src='/5.jpeg' width={200} height={100} alt='' className='h-[100px] w-[200px] ml-24 border' />
				</Marquee>
			</section>

			<section id='contact' className='bg-blueGray-500 grid grid-cols-1 lg:grid-cols-2 p-8 lg:p-20'>
				<div className='space-y-8 self-end'>
					<div className='flex gap-2 items-center'>
						<Image src='/logo.svg' alt='Imob' width={80} height={80} />
						<span className='font-serif text-5xl lg:text-8xl text-gold-100'>IMOB</span>
					</div>
					<p className='text-gold-100 text-2xl lg:text-4xl'>A sua Imobiliária na WEB</p>
					<div className='flex gap-3 text-white'>
						<h4 className='text-xl flex items-center gap-2'>Nos siga em nossas redes sociais</h4>
						<Instagram size={30} />
						<Facebook size={30} />
						<Youtube size={30} />
						<Linkedin size={30} />
					</div>
				</div>
				<div className='flex flex-col gap-4'>
					<h4 className='text-white text-2xl lg:text-4xl flex items-center gap-2 font-bold'>
						<House size={40} />
						Anuncie Seu Imóvel
					</h4>
					<p className='text-white'>Preencha o formulário abaixo e um de nossos especialistas entrará em contato com você.</p>
					<input type='text' placeholder='Nome' className='bg-blueGray-100/75 rounded-sm h-8 outline-none p-2 placeholder:text-blueGray-500 text-blueGray-700' />
					<input type='email' placeholder='Email' className='bg-blueGray-100/75 rounded-sm h-8 outline-none p-2 placeholder:text-blueGray-500 text-blueGray-700' />
					<input type='tel' placeholder='Telefone' className='bg-blueGray-100/75 rounded-sm h-8 outline-none p-2 placeholder:text-blueGray-500 text-blueGray-700' />
					<button className='bg-gold-100 p-2 rounded-sm text-blueGray-500 font-bold hover:bg-gold-500'>Enviar</button>
				</div>
			</section>
		</>
	)
}
