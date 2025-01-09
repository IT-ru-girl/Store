import  { useState } from 'react';
import { Box, Slider, TextField, Button, Checkbox, FormControlLabel, Typography, Select, MenuItem } from '@mui/material';
import { FilterBox } from './FilterPanel.styles.ts';

interface FilterValues {
  priceRange:number[],
  onlyInStock: boolean,
  outOfStock: boolean,
  category: string
}
interface FiltersPanel {
  onApplyFilters: (filters: FilterValues) => void;
  onResetFilters: () => void;
}

export const FilterPanel = ({ onApplyFilters, onResetFilters }: FiltersPanel) => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 100000]);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  const [category, setCategory] = useState('');

  const handlePriceChange = (_: any, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const handleApplyFilters = () => {
    onApplyFilters({ priceRange, onlyInStock, outOfStock, category });
  };

  const handleResetFilters = () => {
    setPriceRange([0, 100000]);
    setOnlyInStock(false);
    setOutOfStock(false);
    setCategory('');
    onResetFilters();
  };

  return (
    <FilterBox>
      <Typography variant="h6">Фильтры</Typography>
      <Box>
        <Typography>Цена:</Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={100000}
          style={{ marginBottom: '16px' }}
        />
        <TextField
          label="Минимальная цена"
          type="number"
          value={priceRange[0]}
          onChange={(e) =>
            setPriceRange([Number(e.target.value), priceRange[1]])
          }
          style={{ width: '48%', marginRight: '4%' }}
        />
        <TextField
          label="Максимальная цена"
          type="number"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
          style={{ width: '48%' }}
        />
      </Box>
      <Box>
        <FormControlLabel
          control={
            <Checkbox
              checked={onlyInStock}
              onChange={(e) => setOnlyInStock(e.target.checked)}
            />
          }
          label="Только в наличии"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={outOfStock}
              onChange={(e) => setOutOfStock(e.target.checked)}
            />
          }
          label="Нет в наличии"
        />
      </Box>
      <Box>
        <Typography>Категория:</Typography>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          fullWidth
          style={{ marginBottom: '16px' }}
        >
          <MenuItem value="">Все</MenuItem>
          <MenuItem value="Лаптопы">Лаптопы</MenuItem>
          <MenuItem value="Смартфоны">Смартфоны</MenuItem>
          <MenuItem value="Периферия">Периферия</MenuItem>
        </Select>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleApplyFilters}
        style={{ marginRight: '8px' }}
      >
        Применить фильтры
      </Button>
      <Button variant="outlined" onClick={handleResetFilters}>
        Сбросить фильтры
      </Button>
    </FilterBox>
  );
};
