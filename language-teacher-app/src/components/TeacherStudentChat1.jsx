
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const VideoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100vh',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const VideoBox = styled(Box)(({ theme }) => ({
  flex: 1,
  position: 'relative',
  backgroundColor: '#000',
  margin: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    height: '50vh',
  },
}));

const Caption = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(2),
  left: theme.spacing(2),
  color: '#fff',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

const TeacherStudentChat1 = () => {
  return (
    <VideoContainer>
      <VideoBox>
        <Caption>Учень: Привіт!</Caption>
      </VideoBox>
      <VideoBox>
        <Caption>Вчитель: Привіт!</Caption>
      </VideoBox>
    </VideoContainer>
  );
};

export default TeacherStudentChat1;
