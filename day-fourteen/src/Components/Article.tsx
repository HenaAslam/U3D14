import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { IArticle } from "../interfaces/IArticle";

import SingleArticle from "./SingleArticle";

const Article = () => {
  const [news, setNews] = useState<IArticle[]>([]);
  const [isLoading, setiIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchNews = async () => {
    try {
      setiIsLoading(true);

      let res = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
      if (res.ok) {
        let newsfromapi = await res.json();
        console.log(newsfromapi);
        setNews(newsfromapi);
        setiIsLoading(false);
      } else {
        setIsError(true);
        setiIsLoading(false);
      }
    } catch (error) {
      setIsError(true);
      setiIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Container fluid>
      {isLoading && <Spinner animation="grow" variant="danger" />}
      {isError && <Alert variant="danger">Something's wrong..</Alert>}

      <Row className="justify-content-center mt-5 ">
        <Col>
          <h1>SPACEFLIGHT NEWS</h1>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5 text-dark">
        {news.map((n) => (
          <Col key={n.id} xs={8} md={4} lg={3} className="text-dark mb-3">
            <SingleArticle art={n} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Article;
