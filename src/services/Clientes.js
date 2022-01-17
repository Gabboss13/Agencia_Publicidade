import axios from "axios";

export async function clientes () {
    try{ 
        return (await axios.get ('https://advertising-agency-clients.herokuapp.com/clientes').data)
    }
    catch(e){
        return e
    }

}

