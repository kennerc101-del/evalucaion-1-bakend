import { marcas } from "../database/db.js";
import {v4 as uuidv4} from "uuid"

class MarcasController {
    mostrarMarcaTodas() {
        return({
            status: marcas.length === 0 ? 400 : 200,
            data: marcas.length === 0 ? null : nombres,
            message: marcas.length === 0 ? "no hay marcas registradas" : "marcas listadas correctamente",
        })
    }
    mostrarMarcaUna(idMarca){
        const marca = marcas.filter(marca => marca.id === idMarca)
        return({
            status: marcas.length === 0 ? 400 : 200,
            data: marcas.length === 0 ? null : nombres,
            message: marcas.length === 0 ? "no hay marcas registradas con ese id" : "marca listada correctamente",
        })
    }
    agregarMarcas(newMarca){
        if(!newMarca.nombreMarca || !newMarca.lugarDistribucionMarca || !newMarca.dueñoMarca )
            return({
        status: 400,
        data: null, 
        message: "faltan datos necesarios"
            })
            const crearMarcas ={
                id: uuidv4(),
                nombreMarca: newMarca.nombreMarca,
                lugarDistribucionMarca: newMarca.lugarDistribucionMarca,
                dueñoMarca: newMarca.dueñoMarca,

            }
            marcas.push(crearMarcas)
            return({
                status: 201,
                data: {
                    newMarca,
                    marcas
                },
                message:"se agrego la marca con exito"
            })
            
    }
actualizarMarca(newMarca, idMarca){
    for (let i = 0; i < marcas.length; i++) {
        if(marcas[i].id === idMarca) {
            marcas[i].nombreMarca = newMarca.nombreMarca ? newMarca.nombreMarca : marcas[i].nombreMarca
            marcas[i].lugarDistribucionMarca = newMarca.lugarDistribucionMarca ? newMarca.lugarDistribucionMarca : marcas[i].lugarDistribucionMarca
            marcas[i].dueñoMarca = newMarca.dueñoMarca ? newMarca.dueñoMarca : marcas[i].dueñoMarca
        return({
             status: 201,
        data: {
            newMarca: marcas[i],
            marcas
        }, 
        message: "actualizado exitosamente"
        })
        }   
    }
    return({
        status: 400,
        data: null,
        message: "marca no existe"
    })
}

eliminarMarca(idMarca){
    for (let i = 0; i < marcas.length; i++) {
        if(marcas[i].id === idMarca) {
            marcas.splice(i,1);
            return({
                 status: 201,
        data: {
            marcas
        },
        message: "marca eliminada con exito"
            })
        }
}
return({
     status: 400,
        data: null,
        message: "marca no existe"
})
}

}

const marcasController = new MarcasController
export default marcasController