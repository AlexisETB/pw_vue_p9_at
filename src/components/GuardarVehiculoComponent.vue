<template>
  <div class="Container">
    <h2>VEHICULO</h2>
    <div class="Form-Vehiculo">
        <form action="">
            <label for="">Token</label>
            <input type="text" v-model="token">
            <label for="">Marca</label>
            <input type="text" id="" v-model="marca">
            <label for="">Modelo</label>
            <input type="text" v-model="modelo">
            <label for="">chasis</label>
            <input type="text" v-model="chasis">
            <label for="">Fecha de matricula</label>
            <input type="date" v-model="fechaMatricula">
            <label for="">Fecha de Fabricacion</label>
            <input type="date" v-model="fechaFab">
        </form>
    </div>
    <div><button @click="guardar">Guardar</button></div>
  </div>
  <div><ConsultarVehiculos :array="arrayVehiculos"/></div>
</template>

<script>
import { guardarVehiculoFacade, obtenerVehiculosFacade } from '@/clients/ApiClient';
import ConsultarVehiculos from './ConsultarVehiculos.vue';
export default {
    data(){
        return{
            token: '',
            marca: '',
            modelo: '',
            chasis: '',
            fechaMatricula: '',
            fechaFab: '',
            arrayVehiculos: []
        }
    },
    methods: {
        async guardar(){
            const vehiculo = {
                marca : this.marca,
                modelo : this.modelo,
                chasis : this.chasis,
                fechaMatricula: this.fechaMatricula || null,
                fechaFab : this.fechaFab || null
            }
            this.token = localStorage.getItem("token")
            await guardarVehiculoFacade(vehiculo, this.token);
            await this.obtenerVehiculos();

            this.marca = '';
            this.modelo = '';
            this.chasis = '';
            this.fechaMatricula = '';
            this.fechaFab = '';
            this.token = '';
        },
        async obtenerVehiculos(){
            this.token = localStorage.getItem("token")
            this.arrayVehiculos = await obtenerVehiculosFacade(this.token);
            console.log(this.arrayVehiculos);
        }
    },
    mounted(){
        this.obtenerVehiculos();
    },
    components: {
        ConsultarVehiculos
    }
}
</script>

<style scoped>
.Container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.Form-Vehiculo form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.Form-Vehiculo label {
  text-align: left;
  font-weight: bold;
  margin-bottom: 5px;
}

.Form-Vehiculo input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>