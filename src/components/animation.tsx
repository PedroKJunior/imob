'use client'

import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useEffect, useState } from 'react'

const initial = {
	rotation: [0, 5.6, 0],
	position: [8, 0, 0],
	scale: [1.5, 1.5, 1.5],
}

const middle = {
	rotation: [0, 4.5, 0],
	position: [-15, -1.5, 0],
	scale: [1.3, 1.3, 1.3],
}

const final = {
	rotation: [0, 3.45, 0],
	position: [-12, -1.25, 0],
	scale: [1.3, 1.3, 1.3],
}

function lerp(start: any, end: any, t: any) {
	return start + (end - start) * t
}

function interpolateValues(scrollPosition: any) {
	let position, rotation, scale

	if (scrollPosition <= 805) {
		const t = scrollPosition / 805
		position = [lerp(initial.position[0], middle.position[0], t), lerp(initial.position[1], middle.position[1], t), lerp(initial.position[2], middle.position[2], t)]
		rotation = [lerp(initial.rotation[0], middle.rotation[0], t), lerp(initial.rotation[1], middle.rotation[1], t), lerp(initial.rotation[2], middle.rotation[2], t)]
		scale = [lerp(initial.scale[0], middle.scale[0], t), lerp(initial.scale[1], middle.scale[1], t), lerp(initial.scale[2], middle.scale[2], t)]
	} else if (scrollPosition > 805 && scrollPosition <= 1920) {
		const t = (scrollPosition - 805) / 805
		position = [lerp(middle.position[0], final.position[0], t), lerp(middle.position[1], final.position[1], t), lerp(middle.position[2], final.position[2], t)]
		rotation = [lerp(middle.rotation[0], final.rotation[0], t), lerp(middle.rotation[1], final.rotation[1], t), lerp(middle.rotation[2], final.rotation[2], t)]
		scale = [lerp(middle.scale[0], final.scale[0], t), lerp(middle.scale[1], final.scale[1], t), lerp(middle.scale[2], final.scale[2], t)]
	} else {
		position = final.position
		rotation = final.rotation
		scale = final.scale
	}

	return { position, rotation, scale }
}

export const Animation = () => {
	const [scrollPosition, setScrollPosition] = useState(0)
	const { scene } = useGLTF('/house.glb')

	const handleScroll = () => {
		const position = window.scrollY
		setScrollPosition(position)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const values = interpolateValues(scrollPosition)

	useEffect(() => {
		if (scene) {
			scene.rotation.set(values.rotation[0], values.rotation[1], values.rotation[2])
			scene.position.set(values.position[0], values.position[1], values.position[2])
			scene.scale.set(values.scale[0], values.scale[1], values.scale[2])
		}
	}, [values, scene])

	return (
		<div className='h-screen w-screen fixed overflow-hidden'>
			<Canvas camera={{ position: [0, 5, 20], rotation: [0, 0, 0] }}>
				<primitive object={scene} rotation={values.rotation} position={values.position} scale={values.scale} />
			</Canvas>
			<div className='absolute w-[250px] h-6 bg-black rounded-full'></div>
		</div>
	)
}

useGLTF.preload('/house.glb')
