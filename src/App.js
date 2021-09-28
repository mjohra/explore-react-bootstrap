import { Button, Row, Spinner } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import News from "./components/News/News";

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=Apple&from=2021-09-28&sortBy=popularity&apiKey=df6a226b03d54a46a7c1bd7d1443cceb"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);
  return (
    <div className="App">
    { news.length===0?
    <Spinner animation="border" />
    :
      <Row xs={1} md={3} className="g-4">
      {news.map((nw) => (
        <News news={nw}></News>
      ))}
    </Row>
    }
    </div>
  );
}

export default App;
