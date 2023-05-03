import { redirect } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */

export const actions = {
    default: async ({cookies, request}) => 
    {
        const datoFormulario = await request.formData();

        if(datoFormulario.get('usuario') === 'admin' && datoFormulario.get('clave') === 'admin')
        {
            cookies.set("estado_login", "activo", { maxAge:10 });
            throw redirect(302, '/settings');
        }   
        cookies.set("estado_login", "activo", { maxAge:10 });  
        throw redirect(302, '/settings');       
    }
};