import Image from 'next/image'
import Link from 'next/link'

export function Menu() {
	return (
		<ul className='flex bg-blueGray-500 text-gold-100 text-bold z-[100] font-bold h-[80px] fixed top-0 w-full	'>
			<li className='flex items-center justify-center h-full px-10 gap-1'>
				<h1 className='text-5xl font-serif'>IM</h1>
				<Image src='/logo.svg' alt='Imob' width={60} height={60} />
				<h1 className='text-5xl font-serif'>B</h1>
			</li>
			<li className='flex items-center justify-center h-full px-8 hover:bg-blueGray-600 cursor-pointer'>
				<a href='#home'>Inicial</a>
			</li>
			<li className='flex items-center justify-center h-full px-8 hover:bg-blueGray-600 cursor-pointer'>
				<a href='#about'>Quem Somos</a>
			</li>
			<li className='flex items-center justify-center h-full px-8 hover:bg-blueGray-600 cursor-pointer'>
				<a href='#work'>Trabalhe Conosco</a>
			</li>
			<li className='flex items-center justify-center h-full px-8 hover:bg-blueGray-600 cursor-pointer'>
				<a href='#news'>Lançamentos</a>
			</li>
			<li className='flex items-center justify-center h-full px-8 hover:bg-blueGray-600 cursor-pointer'>
				<a href='#contact'>Anuncie seu Imóvel</a>
			</li>
		</ul>
	)
}
