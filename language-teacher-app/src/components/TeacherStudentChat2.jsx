
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const VideoContainer = styled(Box)({
  width: '100%',
  height: '100%',
  backgroundColor: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontSize: '1.5rem',
});

const App = () => {
  return (
    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} height="100vh">
      <Box flex={1} p={2}>
        <VideoContainer>
          Відео співрозмовника 1
        </VideoContainer>
      </Box>
      <Box flex={1} p={2}>
        <VideoContainer>
          Відео співрозмовника 2
        </VideoContainer>
      </Box>
    </Box>
  );
};

export default App;




