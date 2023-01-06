// import {PrismaClient} from '@prisma/client';
// 	const prisma = new PrismaClient();
// 	async function main() {
// 		const products = await prisma.produit.findMany();
// 		console.log(products);
// 	}
// 	main()
// 	.catch(e => {
// 		throw e
// 	})
// 	.finally(async () => {
// 		await prisma.$disconnect()
// 	})

// Path: decathlon\myDecathlon\src\lib\prisma.ts
import prisma from "$lib/prisma";
export async function load(){
    let result = await prisma.produit.findMany(
        {
            select: {
                id: true,
                nom: true,
                image : true,
                categorie : true,
                csp_moins : true,
                csp_med : true,
                csp_plus : true,
                moins_15_ans : true,
                entre_16_25_ans : true,
                entre_26_45_ans : true,
                plus_46 : true,
                homme : true,
                femme : true,
            }
        }
    );
    await prisma.$disconnect();
    console.log(result);
    return {
        stuff : 
        {
            result
        }
    };
}
