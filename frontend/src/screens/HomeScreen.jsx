import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import products from "../products";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useParams } from "react-router-dom";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarosel";
import Meta from "../components/Meta";
const HomeScreen = () => {
  const { keyword, pageNumber } = useParams();
  // The useGetQuery is imported from the productApiSlice. This contains the data that was fetched from the api, the is loading property as well as the eror property. This way we dont have to use the axios or fetch api and use effect!
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });
  //  we renamed the data to products so it will conform with the code here.
  return (
    <>
      {!keyword?(<ProductCarousel />):(
        <Link to="/" className="btn btn-light mb-4">
          Go back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {" "}
          {error?.data?.message || error.error}{" "}
        </Message>
      ) : (
        <>
          <h1>Latest Product</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
