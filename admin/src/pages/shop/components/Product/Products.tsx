import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, TextField } from '@mui/material';
import { ProductItem } from './ProductItem';
import { RootState } from '../../../../app/store.ts';
import { FilterPanel } from '../Filter/FilterPanel.tsx'; // Ваш компонент для отображения товара

export const Products = () => {
  const allProducts = useSelector((state: RootState) => state.products);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [searchTerm, setSearchTerm] = useState('');

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
  };

  const resetFilters = () => {
    setFilteredProducts(allProducts);
    setSearchTerm('');
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredProducts(
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
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
      <FilterPanel onApplyFilters={applyFilters} onResetFilters={resetFilters} />
      <Grid container spacing={4} style={{ padding: '20px' }}>
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Grid>
    </div>
  );
};

