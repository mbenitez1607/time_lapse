import { Gif } from 'make-a-gif';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import fs from 'fs/promises';
import fetch from 'node-fetch';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


(async () => {
	// This is an example
	// Fetch the buffer of an image
	const res = await fetch(
		'https://w7.pngwing.com/pngs/150/217/png-transparent-green-seedling-illustration-chicken-skin-plant-planting-trees-leaf-plants-crop.png'
	)

	//We instance the class Gif and give the proportions of width 500 and height 500
	const myGif = new Gif(200, 300)
	//We set 3 images that will be 3 frames
	await myGif.setFrames([
		{
			src: 'https://simg.nicepng.com/png/small/399-3997696_growing-plant-png-transparent-picture-plant-growing-out.png'
		},
		{
			src: new Uint8Array(await res.arrayBuffer())
		},
		{
			src: 'https://www.kindpng.com/picc/m/55-554640_plant-seedling-png-images-growing-plant-png-transparent.png',
			background:
				'https://cdn.discordapp.com/attachments/724014357343895703/960220070976565378/unknown.png'
		}
	])

	//Render the image, it will return a Buffer or it will give an error if anything goes wrong
	const Render = await myGif.encode()

	//Writes the gif in this folder
	await fs.writeFile(join(__dirname, 'make-a-gif.gif'), Render)
})()