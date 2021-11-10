import Api from './Api'

export default {
    /*Método responsável por listar todos os clientes*/
    async getClient() {
        const response = await Api().get('/clientes')
        return response.data;
    },

    /*Método responsável por listar todos os clientes*/
    async createNewClient(client){
        try{
            const response = await Api().post('./clientes', client)
            return response.data;
        }catch(error) {
            console.log(error);
        }
    },

    /*Método responsável por deletar um cliente pelo id*/
    async deleteClient(id){
        try{
            const response = await Api().delete('./clientes/${id}');
            return response.data;
        }catch(error){
            console.log(error);
        }
    }


}

