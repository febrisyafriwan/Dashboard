import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box } from '@mui/material';
// components
import { useChart } from '../../../components/chart';
import { getDataTotalCase } from '../../../store/slices/trafficSlice'

AppTraffic.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function AppTraffic({ title, subheader, chartLabels, chartData, ...other }) {

  const dataTotalCase = useSelector((state) => state.traffic.totalCase.data)
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(increment())
  }, []);


  const chartOptions = useChart({
    xaxis: { categories: [...chartLabels]},
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} visits`;
          }
          return y;
        },
      },
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={chartData} options={chartOptions} height={190} />
      </Box>
    </Card>
  );
}
