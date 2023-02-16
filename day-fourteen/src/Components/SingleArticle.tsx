
import { parseISO, format } from 'date-fns'
import {  Card, Badge} from "react-bootstrap"
import {Link} from "react-router-dom"

import { IArticle } from '../interfaces/IArticle'
interface SingleArticleProps {

    art: IArticle
   
  }


const SingleArticle=(props:SingleArticleProps)=>{
    return(
        <Link to={"/details/"+props.art?.id}><Card className="article-card" >
        <Card.Img variant="top" src={props.art?.imageUrl} />
        <Card.Body>
          <Card.Title>{props.art?.title}</Card.Title>
          <Card.Text>
          <Badge variant="danger" style={{fontSize:"10px"}}>{format(parseISO(props.art?.publishedAt), "PPP")}</Badge>
          <span className="summary mt-3">{props.art?.summary}</span>
          </Card.Text>
        
        </Card.Body>
      </Card>
      </Link>

    )
}
export default SingleArticle