import axios from "axios";

const COMP_API_URL = "http://localhost:8080/adm/companhias/";

class CompanhiaService {
    //get all
    getAllComp() {
        return axios.get(COMP_API_URL, {
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).token
            }
        });
    }

    //create
    createComp(companhia) {
        console.log(companhia)
        console.log(JSON.parse(localStorage.getItem("user")).token)
        console.log(JSON.parse(localStorage.getItem("user")).id)
        return axios.post(COMP_API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).token
            }, body: JSON.stringify(companhia)
        });
    }

    //get id
    getCompById(id) {
        return axios.get(COMP_API_URL + id);
    }

    //update
    updateComp(id, companhia) {
        return axios.put(COMP_API_URL + id, companhia);
    }

    //delete
    deleteComp(id) {
        return axios.delete(COMP_API_URL + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).token
            }
        })
    }
}

export default new CompanhiaService();