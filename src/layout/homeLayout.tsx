import Box from '@mui/material/Box';
import Sidebar from './component/sidebarComponent';
// import Footer from './component/footerComponent';

const HomepageLayout = (props: any) => {
  return (
    <Box id="top-id">
      <Sidebar />
    </Box>
  );
};

export default HomepageLayout;
