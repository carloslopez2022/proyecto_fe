<template>
    <div class="contenedor-main">
        <div class="contenedor-tarjeta" v-for="servicio in servicios" :key="servicio.id">
            <!-- <h2>{{servicio}}</h2> -->
            <div class="contenedor-imagen" v-on:click="loadservicioindividual">
                <img src="" alt="">
            </div>
            <div class="contenedor-info">
                <h1>{{servicio.nombre}}</h1>
                <p>${{servicio.precio}}</p>
            </div>
            <div class="contenedor-boton">
                <button class="boton" v-on:click="loadservicioindividual">leer más sobre <br> "{{servicio.nombre}}"</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    

    export default {
        
        async created() {
            const response = await axios.get
            ('');
            this.servicios = response.data;
        },
        data() {
            return {
                servicios: [],
            }
        },
        methods: {
            loadservicioindividual: function(){
                this.$router.push({name:"servicioindividual"})
            }
        }
    }
</script>

<style>
    .contenedor-main{
        background-color: none;
        padding-top: 40px;
        padding-bottom: 60px;
        margin-bottom: 50px;
    }

    .contenedor-tarjeta{
        background-color: #20b2aa;
        border: 1px solid;
        border-radius: 15px;
        margin: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        height: 300px;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .contenedor-imagen{
        background-color: white;
        width: 300px;
        height: 250px;
        border-radius: 15px;
        padding: 0px 20px;
        transition: all 0.4s;
        cursor: pointer;
    }

    .contenedor-imagen:hover{
        padding: 5px 30px
    }

    .contenedor-imagen img{
        width: 200px;
        height: 200px;
        margin: 20px;
    }

    .contenedor-boton{
        height: 40px;
        width: 200px;
        border-radius: 20px;
        background-color: aliceblue;
        transition: all 0.4s;
        padding: 1px 0px;
        border: none;   
    }

    .contenedor-boton button{
        height: 100%;
        width: 100%;
        background: none;
        border-radius: 20px;
        transition: all 0.5s;
        cursor: pointer;
        font-size: 13px;
        border: none;
    }

    .contenedor-boton:hover{
        background: #a8f3ef;
        padding: 3px 10px;
        border: solid 1px;
    }

    .contenedor-info{
        background-color: none;
        text-align: left;
        width: 60%;
        height: 150px;
        padding-left: 20px;
        cursor: context-menu;
    }

    .contenedor-info p{
        font-size: 20px;
    }
    
</style>