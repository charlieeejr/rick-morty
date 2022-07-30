import { useParams } from "react-router-dom"
export default function Profile(){
    const {name}= useParams();
    console.log(name);

    return(
        <div>
            <h1> hola desdes profile con el nombre de {name}</h1>
        </div>
    )

}