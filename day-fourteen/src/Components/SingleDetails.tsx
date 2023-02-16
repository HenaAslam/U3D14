import { IArticle } from "../interfaces/IArticle"
import { Container , Row, Col} from "react-bootstrap"
import { format, parseISO } from "date-fns"

interface SingelDetailsProps {
   art:IArticle
}


const SingelDetails=(props:SingelDetailsProps)=>{
    return(
        <Container>
            <Row>
                <Col xs={12}  lg={7} className="det ">
                    <h1>{props.art.title}</h1>
                    <img src={props.art.imageUrl} alt="img" className="mt-4"/>

                </Col>
                <Col xs={12} lg={5} className="mt-5">
                    <h6>{format(parseISO(props.art?.publishedAt), "PPP")}</h6>
                    <p className="mt-5">{props.art.summary}</p>
                    <span>source:</span><a href={props.art.url}> {props.art.url}</a> 
                </Col>
            </Row>
        </Container>
    )
}
export default SingelDetails