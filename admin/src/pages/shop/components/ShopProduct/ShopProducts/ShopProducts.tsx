import  { useState } from 'react';
import { Grid, Pagination, TextField } from '@mui/material';
import { ShopProductItem } from '../ShopItem';
import {  useAppSelector } from '../../../../../app/store.ts';
import { ShopFilterPanel } from '../../ShopFilter';



export const ShopProducts = () => {
  const allProducts = useAppSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const applyFilters = (filters: any) => {
    const { priceRange, onlyInStock, outOfStock } = filters;

    const filtered = allProducts.filter((product) => {
      const isWithinPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const isInStock =
        onlyInStock && product.quantity > 0 ? true : !onlyInStock;
      const isOutOfStock =
        outOfStock && product.quantity === 0 ? true : !outOfStock;

      return isWithinPrice && isInStock && isOutOfStock;
    });

    if (searchTerm) {
      setFilteredProducts(
        filtered.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(filtered);
    }
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setFilteredProducts(allProducts);
    setSearchTerm('');
    setCurrentPage(1);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredProducts(
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      )
    );
    setCurrentPage(1);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <TextField
        label="Поиск товаров"
        variant="outlined"
        fullWidth
        style={{ marginBottom: '20px' }}
        value={searchTerm}
        onChange={handleSearch}
      />
      <ShopFilterPanel onApplyFilters={applyFilters} onResetFilters={resetFilters} />

      <Grid container spacing={4} style={{ padding: '20px' }}>
        {currentItems.map((product) => (
          <ShopProductItem key={product.id} product={product} />
        ))}
      </Grid>

      <Pagination
        count={Math.ceil(filteredProducts.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
      />
    </div>
  );
};

