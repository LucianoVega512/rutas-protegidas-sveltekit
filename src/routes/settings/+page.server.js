import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({cookies})
 {
    const acceso = cookies.get('estado_login') === 'activo';

    if(!acceso)
    {
        throw redirect(303, '/login')
    }
}