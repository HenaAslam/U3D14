import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IArticle } from "../interfaces/IArticle";
import { Spinner, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SingleDetails from "./SingleDetails";

const Details = () => {
  const [single, setSingle] = useState<null | IArticle>(null);
  const [isLoading, setiIsLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const fetchSingleArticle = async () => {
    try {
      setiIsLoading(true);
      let res = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles/" + params.id
      );
      if (res.ok) {
        let data = await res.json();

        setSingle(data);
        setiIsLoading(false);
      } else {
        console.log("error");
        setiIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setiIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Button
        variant="success"
        className="mt-5"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to home
      </Button>
      {isLoading && <Spinner animation="grow" variant="danger" />}
      {single && <SingleDetails art={single} />}
      {console.log(single)}
    </>
  );
};
export default Details;
