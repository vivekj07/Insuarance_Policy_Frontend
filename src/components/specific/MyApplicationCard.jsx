import React from 'react';
import { Box, Typography, Button, Card, CardContent, Grid } from '@mui/material';

const MyApplicationCard = ({
  name,
  email,
  phone,
  address,
  policyNumber,
  cropType,
  cropArea,
  region,
  coverageType,
  status,
}) => {
  return (
    <Card sx={{ marginBottom: 3, padding: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Application Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography><strong>Name:</strong> {name}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography><strong>Email:</strong> {email}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography><strong>Phone:</strong> {phone}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography><strong>Address:</strong> {address}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography><strong>Policy Number:</strong> {policyNumber}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography><strong>Status:</strong> {status}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography><strong>Crop Type:</strong> {cropType}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography><strong>Crop Area (Acres):</strong> {cropArea}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography><strong>Region:</strong> {region}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography><strong>Coverage Type:</strong> {coverageType}</Typography>
          </Grid>
        </Grid>

        {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <Button variant="contained" color="primary">
            View Details
          </Button>
        </Box> */}
      </CardContent>
    </Card>
  );
};

export default MyApplicationCard;
