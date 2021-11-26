import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import ProductCard from "../ProductCard";

const ProductsList = () => {
  const products = useSelector((store) => store.products);

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      sx={{ backgroundColor: "Background", py: 3 }}
    >
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={3} lg={3} align="center">
          <ProductCard
            description={product.description}
            image={product.image}
            title={product.title}
            rating={product.rating}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
