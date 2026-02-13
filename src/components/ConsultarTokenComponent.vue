<template>
  <div class="Container">
    <h2>TOKEN</h2>
    <div class="form-token">
        <form action="">
            <label for="usuario_id">Usuario</label>
            <input id="usuario_id" type="text" v-model="usuario">
            <label for="password_id">Password</label>
            <input type="password" id="passsword_id" v-model="password">
            <label for="rol_id">Rol</label>
            <input id="rol_id" type="text" v-model="rol">
            <label for="token_id">Token</label>
            <input id="token_id" type="text" v-model="token">
        </form>
    </div>
    <div><button @click="obtenerToken()">Generar</button></div>
  </div>
</template>

<script>
import { getTokenFacade } from '@/clients/AuthClient';
export default {
    data(){
        return{
            usuario: "",
            password: "",
            rol: "", 
            token: ""
        }
    },
    methods: {
        async obtenerToken () {
            const tokenRes = await getTokenFacade(this.usuario, this.password, this.rol);
                this.token = tokenRes.accessToken;
                localStorage.setItem("token", this.token);
                return this.token;
            }
    }
}
</script>

<style scoped>
.Container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.form-token form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-token label {
  text-align: left;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-token input {
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