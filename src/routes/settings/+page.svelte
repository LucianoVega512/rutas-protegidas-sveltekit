<script>
    export let data;
</script>

<p>Setting</p>

<form method="post">
    <label>
        Email
        <input name="email" type="text" value={data.dato_1.nombre}/>
    </label>
    <input type="submit" value = "enviar"/>
</form>
