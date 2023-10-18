// material-ui
import { useMediaQuery } from '@mui/material';

// project import
import Search from './Search';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return <>{!matchesXs && <Search />}</>;
};

export default HeaderContent;
