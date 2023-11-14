import { Col, Container, Row   } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import {  useState,useEffect } from "react";
import { products } from "../utils/products";
import ShopList from "../components/ShopList";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import './ResultPage.css'
import "bootstrap/dist/css/bootstrap.min.css";

function ResultPage () {
  const [filterList, setFilterList] = useState(products);
  useWindowScrollToTop();
  const [value,onChange]=useState(1);
  useEffect(()=>{
      const ele = document.querySelector('.buble');
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  })
  return (
      <section className="filter-bar" >
        <Container className="filter-bar-contianer" >
          <Row className="justify-content-center">
            <Col md={12}  style={{ marginTop: '10rem' }}>
              <FilterSelect setFilterList={setFilterList} />
            </Col>
            </Row>
             <Row className="justify-content-center">
            <Col md={12}>
         
            <div className="slider-parent">
             <h4>Price Range</h4>  
      <input type="range" min="1" max="500" value={value} 
         onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                  }}
      />
      <div className="buble"> 
      {value}$
      </div>
    </div>
            </Col>
          </Row>
        </Container>
        <Container>
        <Col md = {12} style={{ marginTop: '1rem' }}>
          <ShopList productItems={filterList} />
          </Col>
        </Container>
        <Container>
  <Row className="justify-content-center">
    <Col md={2} className="pagination-container">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </Col>
  </Row>
</Container>
      </section>
  );
};

export default ResultPage;
