import './styles.css'
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

import { Typography, Stack, Box } from '@mui/material';
import Searchbar from './Searchbar';
import Button from '@mui/material/Button';
import useCoin from './useCoinfeatch';
import Productlist from './Productlist';

const Displaycoin = () => {

    const {products, isLoading, error} = useCoin();

    const [searchTerm, setSearchTerm] = useState('');
const filteredProducts = products?.filter((product) =>
product.name.toLowerCase().includes(searchTerm.toLowerCase())
);

if (isLoading) {
    return <Stack>Loading...</Stack>;
  }

  if (error) {
    return <Stack>Error: {error.message}</Stack>;
  }
  const handleRefresh = () => {
    // Refresh the page or reset the search term
    setSearchTerm('');
  };
  


    return ( <>
    <div className='disbox'>
    <Box sx={{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
      justifyContent: 'center',
      marginBottom: '1rem',
      marginTop: '1rem'

  }}>
  <Searchbar  searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
</Box>
{filteredProducts.length === 0 && searchTerm !== '' ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
          <Typography sx={{
      color: 'white',
      textAlign: 'center'
      

    }} variant='body1'>We're sorry, but we don't have this coin listed here at the moment.</Typography>
          <Button variant="contained" onClick={handleRefresh}  sx={{ mt: 2 }}>
            Refresh List
          </Button>
        </Box>
      ) : (
        <Productlist products={filteredProducts} />
      )}
    </div>
    </> );
}
 
export default Displaycoin;