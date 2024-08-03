import {
  Box,
  Link,
  Paper,
  Stack,
  Button,
  Divider,
  Checkbox,
  FormGroup,
  TextField,
  IconButton,
  Typography,
  InputAdornment,
  FormControlLabel,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { useState, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { rootPaths } from 'routes/paths';
import Image from 'components/base/Image';
import logoWithText from '/Logo-with-text.png';
import axios from 'axios'; // Import axios

const Login = (): ReactElement => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [mobile, setMobile] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://liveapi.sattalives.com/api/login', {
        mobile,
        password,
      });

      if (response.status === 200) {
        const { data } = response;

        if (data.user.role === 'admin') {
          localStorage.setItem('authToken', data.token);

          navigate(rootPaths.homeRoot);
        } else {
          setError('You do not have admin access.');
        }
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <Box component="figure" mb={5} mx="auto" textAlign="center">
        <Link href={rootPaths.homeRoot}>
          <Image src={logoWithText} alt="logo with text" height={60} />
        </Link>
      </Box>
      <Paper
        sx={{
          py: 6,
          px: { xs: 5, sm: 7.5 },
        }}
      >
        <Stack justifyContent="center" gap={5}>
          <Typography variant="h3" textAlign="center" color="text.secondary">
            Log In
          </Typography>
          <Typography variant="h6" fontWeight={500} textAlign="center" color="text.primary">
            Don’t have an account?{' '}
            <Link href="/authentication/sign-up" underline="none">
              Sign up
            </Link>
          </Typography>
          <TextField
            variant="filled"
            label="Mobile"
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            sx={{
              '.MuiFilledInput-root': {
                bgcolor: 'grey.A100',
                ':hover': {
                  bgcolor: 'background.default',
                },
                ':focus': {
                  bgcolor: 'background.default',
                },
                ':focus-within': {
                  bgcolor: 'background.default',
                },
              },
              borderRadius: 2,
            }}
          />
          <TextField
            variant="filled"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              '.MuiFilledInput-root': {
                bgcolor: 'grey.A100',
                ':hover': {
                  bgcolor: 'background.default',
                },
                ':focus': {
                  bgcolor: 'background.default',
                },
                ':focus-within': {
                  bgcolor: 'background.default',
                },
              },
              borderRadius: 2,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    size="small"
                    edge="end"
                    sx={{
                      mr: 2,
                    }}
                  >
                    {showPassword ? (
                      <IconifyIcon icon="el:eye-open" color="text.secondary" />
                    ) : (
                      <IconifyIcon icon="el:eye-close" color="text.primary" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormGroup sx={{ ml: 1, width: 'fit-content' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Keep me signed in"
              sx={{
                color: 'text.secondary',
              }}
            />
          </FormGroup>
          {error && (
            <Typography color="error" textAlign="center">
              {error}
            </Typography>
          )}
          <Button
            onClick={handleSubmit}
            sx={{
              fontWeight: 'fontWeightRegular',
            }}
          >
            Log In
          </Button>
          <Divider />
          <Typography textAlign="center" color="text.secondary" variant="body1">
            Or sign in using:
          </Typography>
          <Stack gap={1.5} direction="row" justifyContent="space-between">
            <Button
              startIcon={<IconifyIcon icon="flat-color-icons:google" />}
              variant="outlined"
              fullWidth
              sx={{
                fontSize: 'subtitle2.fontSize',
                fontWeight: 'fontWeightRegular',
              }}
            >
              Google
            </Button>
            <Button
              startIcon={<IconifyIcon icon="logos:facebook" />}
              variant="outlined"
              fullWidth
              sx={{
                fontSize: 'subtitle2.fontSize',
                fontWeight: 'fontWeightRegular',
              }}
            >
              Facebook
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
};

export default Login;
