import PropTypes from 'prop-types';

// material-ui
import { ButtonBase } from '@mui/material';

// project import

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  return <ButtonBase sx={{ fontSize: '30px' }}>Dashboard</ButtonBase>;
};

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string
};

export default LogoSection;
