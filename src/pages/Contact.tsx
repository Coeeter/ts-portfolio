import {
  Backdrop,
  Button,
  Card,
  CardHeader,
  CircularProgress,
  Grid,
  Snackbar,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import Header from '../components/Header';
import { SubmitHandler, useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { RefObject, useRef, useState } from 'react';
import Navbar, { NavTypes } from '../components/Navbar';

type FormValues = {
  user_name: string;
  user_email: string;
  message: string;
};

const contactInfo = [
  {
    name: 'Email',
    icon: <Email />,
    value: 'nasrullah01n@gmail.com',
    href: 'mailto:nasrullah01n@gmail.com',
  },
  {
    name: 'Github',
    icon: <GitHub />,
    value: 'https://github.com/Coeeter',
  },
  {
    name: 'LinkedIn',
    icon: <LinkedIn />,
    value: 'https://www.linkedin.com/in/noorullah-nasrullah-50a413225/',
  },
];

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const form = useRef<HTMLFormElement>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  document.title = "N. Nasrullah - Contact Me"

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    setIsLoading(true);
    document.body.style.overflow = 'hidden';
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID!,
        process.env.REACT_APP_TEMPLATE_ID!,
        form.current!,
        process.env.REACT_APP_PUBLIC_KEY!
      )
      .then((value) => {
        reset();
        setIsLoading(false);
        document.body.style.overflowY = 'scroll';
        setMessage('Successfully sent email!');
        setIsOpen(true);
      })
      .catch((error) => {
        reset();
        setIsLoading(false);
        document.body.style.overflowY = 'scroll';
        setMessage('Something went wrong. Try again later!');
        setIsOpen(true);
      });
  };
  return (
    <>
      <Navbar isBgActive={true} selected={NavTypes.Contacts} />
      <Box
        component="div"
        id="contact"
        sx={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        pt={1}
        paddingTop="1rem"
      >
        <Stack>
          <Header header="Contact Me" />
          <Grid
            container
            maxWidth="lg"
            marginX="auto"
            alignItems="center"
            marginTop="1rem"
            pt={5}
            sx={{
              backgroundColor: 'background.paper',
              boxShadow:
                '0px 3px 5px -1px rgb(0 0 0 / 20%), ' +
                '0px 5px 8px 0px rgb(0 0 0 / 14%), ' +
                '0px 1px 14px 0px rgb(0 0 0 / 12%)',
            }}
          >
            <Grid item sm={6} md={4} xs={12} mb={5} px={5}>
              <Stack gap={1}>
                {contactInfo.map((contact) => {
                  return (
                    <a
                      key={contact.name}
                      href={contact.href ?? contact.value}
                      style={{ textDecoration: 'none' }}
                    >
                      <Card
                        elevation={8}
                        sx={
                          isMobile
                            ? {}
                            : {
                                transition: 'all 0.3s',
                                '&:hover': {
                                  transform: 'scale(1.1)',
                                },
                              }
                        }
                      >
                        <CardHeader
                          avatar={contact.icon}
                          title={contact.name}
                        />
                      </Card>
                    </a>
                  );
                })}
              </Stack>
            </Grid>
            <Grid item sm={6} md={8} xs={12} mb={5} px={5}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                ref={form as RefObject<HTMLFormElement>}
              >
                <Stack gap={2}>
                  <TextField
                    key="user_name"
                    variant="outlined"
                    placeholder="Name"
                    {...register('user_name', {
                      required: 'Name is required',
                    })}
                    error={errors?.user_name != null}
                    helperText={
                      errors?.user_name ? errors.user_name.message : null
                    }
                  />
                  <TextField
                    key="user_email"
                    variant="outlined"
                    placeholder="Email"
                    {...register('user_email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    error={errors?.user_email != null}
                    helperText={
                      errors?.user_email ? errors.user_email.message : null
                    }
                  />
                  <Stack>
                    <TextField
                      key="message"
                      placeholder="Message"
                      variant="outlined"
                      multiline
                      rows={6}
                      {...register('message', {
                        required: 'Message is required',
                      })}
                      error={errors?.message != null}
                      helperText={
                        errors?.message ? errors.message.message : null
                      }
                    />
                  </Stack>
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Stack>
              </form>
            </Grid>
          </Grid>
        </Stack>
        <Backdrop open={isLoading}>
          <CircularProgress color="primary" />
        </Backdrop>
        <Snackbar
          open={isOpen}
          autoHideDuration={6000}
          onClose={() => {
            setIsOpen(false);
            setMessage('');
          }}
          message={message}
        />
      </Box>
    </>
  );
}
