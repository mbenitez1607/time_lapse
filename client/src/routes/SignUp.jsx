import {
    Box,
    Button,
    LinearProgress,
    TextField,
    Typography,
  } from '@mui/material';
  import { useState } from 'react';
  import { useForm, Controller } from 'react-hook-form';
  
  import isEmail from 'is-email';
  import { useAuth } from '../auth';
  import { useNavigate } from 'react-router-dom';
  
  export default function SignUp() {
    const {
      control,
      handleSubmit,
      setError,
      formState: { errors },
    } = useForm();
    const [errorMessage, setErrorMessage] =
      useState(undefined);
    const [isSigningUp, setIsSigningUp] = useState(false);
    const { signUp } = useAuth();
    const navigate = useNavigate();
  
    const onSubmit = async (data) => {
      const { email, password, secureNote } = data;
      setIsSigningUp(true);
      setErrorMessage(undefined);
      try {
        await signUp({ email, password, secureNote });
        navigate('/home');
      } catch (error) {
        const res = error.response;
        if (res) {
          const code = res.data?.error?.code;
          if (code === 'email-already-in-use') {
            setError('email', {
              message: 'This email is taken',
            });
            return;
          }
        }
        setErrorMessage("Can't sign up right now");
      } finally {
        setIsSigningUp(false);
      }
    };
  
    return (
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Controller
            control={control}
            name="email"
            rules={{
              required: 'Enter an email',
              validate: {
                validateEmail: (email) =>
                  isEmail(email) || 'Enter a valid email',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                helperText={errors?.email?.message}
                error={Boolean(errors.email)}
                type="email"
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{ required: 'Enter a password' }}
            render={({ field }) => (
              <TextField
                label="Password"
                {...field}
                helperText={errors?.password?.message}
                error={Boolean(errors.password)}
                sx={{ marginTop: 2 }}
                type="password"
              />
            )}
          />
          <Controller
            control={control}
            name="secureNote"
            rules={{ required: 'Enter a secure note' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Secure note"
                helperText={errors?.secureNote?.message}
                error={Boolean(errors?.secureNote)}
                sx={{ marginTop: 2 }}
              />
            )}
          />
          <LinearProgress
            variant="indeterminate"
            sx={{
              marginTop: 2,
              visibility: isSigningUp ? 'visible' : 'hidden',
            }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ marginTop: 2 }}
          >
            Sign up
          </Button>
          <Box sx={{ marginTop: 2, textAlign: 'center' }}>
            <Typography
              sx={{
                visibility: errorMessage
                  ? 'visible'
                  : 'hidden',
              }}
              color="error"
            >
              {errorMessage}
            </Typography>
          </Box>
        </form>
      </Box>
    );
  }