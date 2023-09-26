import PropTypes from 'prop-types';
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import useResponsive from '../../../hooks/useResponsive';
import Iconify from '../../../components/iconify';

const StyledIcon = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(5),
  height: theme.spacing(5),
  justifyContent: 'center'
}));

AppConnection.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function AppConnection({ title, subheader, list, ...other }) {
  const isDesktop = useResponsive('up', 'sm');
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader}/>
    
      <Stack spacing={3} sx={{ p: 3, pr: 0, maxHeight: 500, overflow: 'auto'}} direction= {isDesktop?"column":"row"}>
        {list.map((news) => (
          <NewsItem key={news.id} news={news} isDesktop = {isDesktop}/>
        ))}
      </Stack>
    </Card>
  );
}

// ----------------------------------------------------------------------

NewsItem.propTypes = {
  news: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    postedAt: PropTypes.instanceOf(Date),
    title: PropTypes.string,
  }),
};

function NewsItem({ news, color = 'primary', isDesktop }) {
  const {title} = news;
  
  return (
    <Stack direction= {isDesktop?"row":"column"} alignItems = 'flex-start' spacing={1} sx={{pr:2}}
     divider={<Divider orientation={isDesktop?"vertical":"horizontal"} flexItem />}>

      <Box sx={{ minWidth: 240, flex: 1 }}>
        <Typography variant="subtitle2"noWrap>
          {title}
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }} noWrap>
          {title}
        </Typography>
      </Box>

      <StyledIcon
        sx={{
          color: (theme) => theme.palette[color].dark,
          backgroundImage: (theme) =>
            `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
              theme.palette[color].dark,
              0.24
            )} 100%)`,
        }}
      >
        <Iconify icon={'ant-design:bug-filled'} width={24} height={24} />
      </StyledIcon>
    </Stack>
  );
}
