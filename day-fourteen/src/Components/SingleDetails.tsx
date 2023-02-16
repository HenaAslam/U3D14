import { IArticle } from "../interfaces/IArticle"

interface SingelDetailsProps {
   art:IArticle
}


const SingelDetails=(props:SingelDetailsProps)=>{
    return(
        <h1>{props.art.id}</h1>
    )
}
export default SingelDetails