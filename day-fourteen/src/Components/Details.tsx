import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { IArticle } from "../interfaces/IArticle"


// import SingleDetails from "./SingleDetails"

const Details=()=>{


    const[single,setSingle]=useState<IArticle[]>([])
    const params=useParams()
 
    


    const fetchSingleArticle=async()=>{
        try{
            let res=await fetch("https://api.spaceflightnewsapi.net/v3/articles/"+params.id)
            if(res.ok){
                let data= await res.json()
                
                setSingle(data)
                console.log(single)
               
            }
            else{
                console.log("error")
            }

        }
        catch(error){
            console.log(error)
        }

      
      

    }

    useEffect(()=>{
        fetchSingleArticle()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

   

console.log(single)
    return(
        <h1>hello</h1>

    //    single.length!==0 && (<h1>{single.title}</h1>)


        //  <SingleDetails art={single}/>

        // <h1>{single.title}</h1>
        // <h1>{single.title}</h1>

       
       

    )

}
export default Details

