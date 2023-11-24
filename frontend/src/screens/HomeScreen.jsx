import { Row, Col } from "react-bootstrap";
// import products from "../products";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
const HomeScreen = () => {
  // The useGetQuery is imported from the productApiSlice. This contains the data that was fetched from the api, the is loading property as well as the eror property. This way we dont have to use the axios or fetch api and use effect!
const{data: products, isLoading, error}=useGetProductsQuery()
//  we renamed the data to products so it will conform with the code here.
  return (
    <>
    {isLoading?(<h2>Loading.....</h2>):error?(<div>{error?.data?.message || error.error}</div>):(<><h1>Latest Product</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row></>)}
      
    </>
  );
};

export default HomeScreen;
