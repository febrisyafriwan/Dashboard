import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Stack} from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppConnection,
  AppTraffic,
  AppStatusTransaction
} from '../sections/@dashboard/app';
import useResponsive from '../hooks/useResponsive';
import trafficSchema from '../store/schema/trafficSchema'
import {fTime} from '../utils/formatTime'

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
            <Grid container spacing={1} sx={{ maxHeight: 650, overflow: 'auto' }}>
              {Object.keys(trafficSchema).map((value, index) => (
                <Grid item key={index} sx={{minWidth:{xs:900,lg:'100%'}}}>
                  <AppTraffic
                    title={trafficSchema[value].name}
                    subheader={`Last updated at ${fTime(trafficSchema[value].updatedAt)}`}
                    chartLabels={trafficSchema[value].data.timewindow}
                    chartData={[
                      {
                        name: trafficSchema[value].name,
                        type: 'line',
                        fill: 'solid',
                        data: [...trafficSchema[value].data.count],
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
              list={[...Array(1)].map((_, index) => ({
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
              {[...Array(1)].map((product, index) => (
                <Grid item key={index} xs={12} sm={3} sx={{minWidth: {xs:'50%',md:'20%'}}}>
                  <AppStatusTransaction title="Bug Reports" total={1} color="error" icon={'ant-design:bug-filled'} />
                </Grid>
              ))}
            </Grid>
          </Grid>


        </Grid>
      </Container >
    </>
  );
}
