// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;

import type { RequestHandler } from '@sveltejs/kit'


// export const GET: RequestHandler = async () => {
//     const products = await prisma.produit.findMany()
//     return {
//         headers: { 'Content-Type': 'application/json' },
// 		status: 200,
//         body: products
//     }   
// }

// /** @type {import('@sveltejs/kit').GetData} */
// export async function getProducts() {
//     let products = await prisma.produit.findMany();
    
//     return {
//         headers: { 'Content-Type': 'application/json' },
//         body: products
//     };
// }


// import { mysqlconnectionFunc } from "$lib/db/mysql";

// export async function load(){
//     const mysqlconnection = await mysqlconnectionFunc();
//     let result = await mysqlconnection.query('SELECT * FROM Produits').then(([rows, fields]) => {
//         return rows;
//     });
//     return {
//         body: result
//     };

// }