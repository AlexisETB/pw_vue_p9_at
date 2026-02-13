<template>
  <div class="Container">
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Marca</th>
                    <th>Chasis</th>
                    <th>Fecha Matricula</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="vehiculos in array" :key="vehiculos.id">
                    <td>{{ vehiculos.id }}</td>
                    <td>{{ vehiculos.marca }}</td>
                    <td>{{ vehiculos.chasis }}</td>
                    <td>{{ vehiculos.fechaMatricula }}</td>
                    <td><button @click="eliminar(vehiculos.id)">Borrar</button></td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import { eliminarVehiculoFacade } from '@/clients/ApiClient';
export default {
    data(){
        return{
            
        }
    },
    props: {
        array: []
    },
    methods: {
        async eliminar(id){
            const token = localStorage.getItem("token");
            eliminarVehiculoFacade(id, token);
    }
    }
}
</script>

<style>

</style>