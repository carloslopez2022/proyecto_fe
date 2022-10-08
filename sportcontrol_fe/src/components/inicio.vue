<template>
    
    <div class="greetings">
        <h1>Bienvenido <span>{{email}}</span>!</h1>
    </div>
</template>

<script>
export default {
    name: "inicio",

    data: function(){
        return {
            email: localStorage.getItem('email') || "none"
        }
    }
}

</script>

<style> 
    .greetings{
        margin: 0;
        padding: 0%;
        padding-bottom: 0;
        height: 100%;
        width: 100%; 
        background-image: url(https://www.freepik.es/vector-gratis/doodle-pegatinas-entrenamiento-dibujadas-mano_18094054.htm#query=ejercicipo&position=21&from_view=search&track=ais);
        background-size: 100%;
        background-position: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .greetings h1{
        font-size:50px;
        color: #20b2aa;
    }

    .greetings span{
        color: crimson;
        font-weight: bold;
    }
</style>