import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  styled,
} from '@mui/material';

const TimeSlotButton = styled(Button)(({ theme }) => ({
  width: '100%',
  marginBottom: '8px',
  padding: '12px',
  color: '#1f2022',
  backgroundColor: '#eeecec',
  '&:hover': {
    backgroundColor: '#f46811',
  },
  border: '1px solid #f46811',
}));

const StyledPaper = styled(Paper)({
  padding: '24px',
  backgroundColor: '#eeecec',
  color: '#1f2022',
});

const Reservations = () => {
  const timeSlots = [
    '10:00 - 11:00',
    '11:30 - 12:30',
    '13:00 - 14:00',
    '14:30 - 15:30',
    '16:00 - 17:00',
    '17:30 - 18:30',
    '19:00 - 20:00',
    '20:30 - 21:30',
  ];

  const weekDays = ['Pon', 'Wt', 'Śro', 'Czw', 'Pt', 'Sob', 'Nd'];
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  return (
    <Container maxWidth='lg' sx={{ py: 4 }}>
      <Typography
      variant='h4'
      align='center'
        sx={{
          backgroundColor: '#f46811',
          color: 'white',
          py: 2,
          mb: 4,
        }}
      >
        Kalendarz rezerwacji
      </Typography>
      <Typography variant='h4' align='center' color='white' gutterBottom>
        Dokonaj rezerwacji
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <StyledPaper>
            <Box component='form'>
              <TextField
                fullWidth
                placeholder='Twoje imię lub nazwa drużyny'
                margin='normal'
                InputProps={{
                  sx: {
                    color: '#1f2022',
                    backgroundColor: '#ececec',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#f46811',
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                placeholder='Email'
                margin='normal'
                InputProps={{
                  sx: {
                    color: '#1f2022',
                    backgroundColor: '#ececec',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#f46811',
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                placeholder='Telefon'
                margin='normal'
                InputProps={{
                  sx: {
                    color: '#1f2022',
                    backgroundColor: '#ececec',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#f46811',
                    },
                  },
                }}
              />
              <Typography color='#1f2022' sx={{ mt: 2, mb: 1 }}>
                Liczba graczy:
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {[1, 2, 3, 4, 5].map((num) => (
                  <Button
                    key={num}
                    sx={{
                      flex: 1,
                      color: '#1f2022',
                      backgroundColor: '#ececec',
                      '&:hover': {
                        backgroundColor: '#f46811',
                      },
                      minWidth: 0,
                      height: '40px',
                    }}
                  >
                    {num}
                  </Button>
                ))}
              </Box>
            </Box>
          </StyledPaper>
        </Grid>

        <Grid item xs={12} md={4}>
          <StyledPaper>
            <Grid container spacing={1}>
              {weekDays.map((day) => (
                <Grid item xs={12 / 7} key={day}>
                  <Typography align='center' color='#f46811'>
                    {day}
                  </Typography>
                </Grid>
              ))}
              {Array.from({ length: 35 }, (_, i) => (
                <Grid item xs={12 / 7} key={i}>
                  <Button
                    fullWidth
                    sx={{
                      color: '#1f2022',
                      minWidth: 0,
                      p: 1,
                      '&:hover': {
                        backgroundColor: '#f46811',
                      },
                    }}
                  >
                    {i + 1}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </StyledPaper>
        </Grid>

        <Grid item xs={12} md={4}>
          <StyledPaper>
            <Typography variant='h6' gutterBottom>
              Wybierz godzinę:
            </Typography>
            <Box>
              {timeSlots.map((slot, index) => (
                <TimeSlotButton key={index} variant='contained' sx={{backgroundColor: '#fff' }}>
                  {slot}
                </TimeSlotButton>
              ))}
            </Box>
          </StyledPaper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Button
          fullWidth
          variant='contained'
          sx={{
            backgroundColor: '#f46811',
            color: '#fff',
            py: 2,
            '&:hover': {
              backgroundColor: '#f4511e',
            },
          }}
        >
          Zarezerwuj
        </Button>
      </Box>
    </Container>
  );
};

export default Reservations;
