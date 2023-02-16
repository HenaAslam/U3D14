import { useEffect, useState } from "react"
import { Container, Row,Col,} from "react-bootstrap"
import { IArticle } from "../interfaces/IArticle"

import SingleArticle from "./SingleArticle"



const Article=()=>{

    const[news,setNews]=useState<IArticle[]>([])


   
    

    const fetchNews=async()=>{
        try{

            let res= await fetch("https://api.spaceflightnewsapi.net/v3/articles")
            if(res.ok){
                let newsfromapi=await res.json()
                console.log(newsfromapi)
                setNews(newsfromapi)
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
        fetchNews()
    },[])

    return(
       <Container>
       
            <Row className="justify-content-center mt-5">
                <Col>
                <h2>Spaceflight News</h2>
                </Col>
            </Row>
            <Row className="justify-content-center mt-5">
           
                {news.map(n=>(
                  
                  <Col  key={n.id} xs={8} md={4} lg={3} className="text-dark mb-3"  >
<SingleArticle art={n} />



</Col>     

                )
                    )}
                
                
            </Row>
       </Container>

    )
}
export default Article