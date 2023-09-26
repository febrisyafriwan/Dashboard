import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Stack } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppConnection,
  AppTraffic,
  AppStatusTransaction
} from '../sections/@dashboard/app';
import PRODUCTS from '../_mock/products';
import Scrollbar from '../components/scrollbar';
import useResponsive from '../hooks/useResponsive';
// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const isDesktop = useResponsive('up', 'xl');
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          PMN Dashboard
        </Typography>

        <Grid container spacing={2}>

          <Grid item xs={12} md ={12} xl ={8} sx={{ height: isDesktop?650:"auto"}}>
            <Grid container spacing={1} sx={{ maxHeight: 650, overflow: 'auto' }} direction= {isDesktop?"row":"column"}>
              {[...Array(20)].map((product, index) => (
                <Grid item key={index} xs={12} sm={6}>
                  <AppTraffic
                    title="Website Visits1"
                    subheader="(+43%) than last year"
                    chartLabels={[
                      '01/01/2003',
                      '02/01/2003',
                      '03/01/2003',
                      '04/01/2003',
                      '05/01/2003',
                      '06/01/2003',
                      '07/01/2003',
                      '08/01/2003',
                      '09/01/2003',
                      '10/01/2003',
                      '11/01/2003',
                    ]}
                    chartData={[
                      {
                        name: 'Team A',
                        type: 'line',
                        fill: 'solid',
                        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                      }
                    ]}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          
          <Grid item xs={12} md ={12} xl={4}>
            <AppConnection
              title="News Update"
              list={[...Array(20)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={1} sx={{ maxHeight: 250, overflow: 'auto' }} direction= {"column"}>
              {[...Array(20)].map((product, index) => (
                <Grid item key={index} xs={12} sm={3} sx={{minWidth: {xs:'50%',md:'20%'}}}>
                  <AppStatusTransaction title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} />
                </Grid>
              ))}
            </Grid>
          </Grid>


        </Grid>
      </Container >
    </>
  );
}
