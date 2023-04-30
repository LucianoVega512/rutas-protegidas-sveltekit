<script>
    export let data;

    let valor = data.dato_1.nombre
    
    //Enviar dato a la API
    function enviar(){
        console.log(valor);
    }
</script>

<p>Setting</p>

<!-- <form method="POST"> -->
    <label>
        Email
        <input name="email" type="text" bind:value={valor}/>
    </label>
    <button on:click={enviar}>Enviar</button>
<!-- </form> -->
