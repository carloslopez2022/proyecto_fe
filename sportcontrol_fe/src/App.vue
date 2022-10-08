<template>

  <div id="app" class="app">
    <div class="header"> 

      <h1>Sport Control</h1>
      <nav>
        <button v-if="is_auth" v-on:click="loadinicio"> Inicio </button>
        <button v-on:click="loadservicios"> Servicios </button>
        <button v-if="is_auth" v-on:click="desconectar"> Cerrar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadconectar"> Iniciar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadregistro"> Registrarse </button>
      </nav> 
    </div>
  </div>
  <div class="main-component">
    <router-view
    v-on:completedconectar="completedconectar"
    v-on:completedregistro="completedregistro"
    v-on:desconectar="desconectar"
    >
    </router-view>
  </div>
     
  <div class="footer">
    <h2>Sportcontrol 2022</h2>
  </div>
</template>

<script> 
  export default {
    name: 'App',
  
    data: function(){
      return{
        is_auth: false  
      }
    },
  
    components: {
    },
    
    methods: {
      verifyAuth: function(){
        this.is_auth = localStorage.getItem("isAuth") || false;
        if(this.is_auth == false)
          this.$router.push({name: "servicios"});
        else 
          this.$router.push({name: "inicio"});
      },
  
      desconectar: function(){
        localStorage.clear();
        alert("Sesión Cerrada");
        this.verifyAuth();
      },
  
      loadinicio: function(){
        this.$router.push({name:"inicio"});
      },

      loadservicios: function(){
        this.$router.push({name:"servicios"})
      },
  
      loadconectar: function(){
        this.$router.push({name: "conectar"})
      },
  
      loadregistro: function(){
        this.$router.push({name: "registro"})
      },
      
      
      completedconectar: function(data){
        localStorage.setItem("isAuth", true);
        localStorage.setItem("email", data.email );
        localStorage.setItem("nombre", data.nombre);
        localStorage.setItem("token_access", data.token_access);
        localStorage.setItem("token_refresh", data.token_refresh);
        this.verifyAuth();
      },
      completedregistro: function(data){
        this.completedconectar(data);
      },
    },
  
    created: function(){
      this.verifyAuth()
    }
  }
  </script>
  <style>
      body{
    margin: 0 0 0 0;
  }

  

  .header{
    margin: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    justify-content: space-between;
    background-color: 	#20b2aa;
    color: #E5E7E9;
    position: fixed;
    display: flex;
    border-bottom: solid 1px black;
    align-items: center;
  }

  .header h1{
    width: 20%;
    text-align: center;
    font-style: italic;
  }

  .header nav {
    height: 100%;
    width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    padding-right: 20px;
  }
 
  .header nav button{
    color: #E5E7E9;
    background: #9932cc;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 20px;
    margin-left: 10px;
    
  }
 
  .header nav button:hover{
    color: #20b2aa;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  }
  
  .main-component{
    height: 75vh;
    margin: 0%;
    padding-top: 75px;
    background: #FDFEFE ;
    border-bottom: solid 1px white;
  }
  
  .footer{
    
    width: 100%;
    
    background: none;
    background-color: #20b2aa;
    color: #E5E7E9;
    position: fixed;
    bottom: 0;
    align-items: center;
    border-top: solid 1px black;
  }

  .footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 0;
  }


 
</style>
