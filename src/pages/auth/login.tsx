import { Button } from '@paljs/ui/Button';
import { useRouter } from 'next/router';
import { InputGroup } from '@paljs/ui/Input';
import { Checkbox } from '@paljs/ui/Checkbox';
import React from 'react';
import Link from 'next/link';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import Select from '@paljs/ui/Select';

import Auth, { Group } from 'components/Auth';
import Layout from 'Layouts';
import Encryption from '../../utils/encryption';
import APICall from '../../utils/server_config';

const options = [{ value: 'English', label: 'English' }];

const roundedBorders = {
  border: 'double 1px transparent',
  borderRadius: '1rem',
  backgroundImage: 'linear-gradient(#121537, #0d0f20), linear-gradient(to bottom right, #aaa, #2f2f2f,#aaa)',
  backgroundOrigin: 'border-box',
  backgroundClip: 'content-box, border-box',
};
const roundedBordersTextField = {
  border: 'double 1px transparent',
  borderRadius: '1rem',
  backgroundImage: 'linear-gradient(#121537, #121537), linear-gradient(to bottom right, #aaa, #2f2f2f,#aaa)',
  backgroundOrigin: 'border-box',
  backgroundClip: 'content-box, border-box',
};

export default function Login() {
  const [checked, setChecked] = React.useState(true);
  const [calling, setCalling] = React.useState(false);
  const router = useRouter();
  React.useEffect(() => {
    document.cookie = '';
    localStorage.removeItem('user_info');
  }, []);
  const onCheckbox = (v) => {
    setChecked(v);
  };
  const onLogin = () => {
    if (calling) return;
    console.log('calling');
    setCalling(true);
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    APICall(
      '/api/login',
      {
        username,
        password,
      },
      (data) => {
        localStorage.setItem('user_info', data[1]);
        setTimeout(() => router.push('/sales/agent_create'), 500);
      },
      (e) => {
        console.log(e);
        setCalling(false);
        if (e === -2) window.alert('No account existed');
        else window.alert('Failed to login');
      },
    );
  };
  return (
    <Layout title="Login">
      <Row>
        <Col breakPoint={{ xs: 0, lg: 7 }}>
          <div
            style={{
              background: 'url(/images/background.png)',
              backgroundSize: 'cover',
              height: '100vh',
              position: 'absolute',
              width: '100%',
              left: 0,
              top: 0,
            }}
          ></div>
          <div style={{ position: 'absolute', margin: 'auto', width: '100%', display: 'flex', height: '100vh' }}>
            <div style={{ margin: 'auto', display: 'block', textAlign: 'center' }}>
              <h1 style={{ color: 'white' }}>Welcome!</h1>
              <h5 style={{ color: 'white' }}>Betting Rules + Bets Offered</h5>
              <img src="/images/footballguys.png" style={{ width: '90%' }}></img>
            </div>
          </div>
        </Col>
        <Col breakPoint={{ xs: 12, lg: 5 }}>
          <div
            style={{
              background: 'linear-gradient(180deg, #121537 0%, #0D0F20 100%)',
              height: '100vh',
              position: 'absolute',
              width: '100%',
              left: 0,
              top: 0,
            }}
          ></div>
          <Auth title="" subTitle="">
            <div style={{ textAlign: 'center' }}>
              <img src="/images/logo.png" style={{ width: '60%', textAlign: 'center', marginBottom: '2rem' }}></img>
            </div>
            <form className="" style={{ ...roundedBorders }}>
              <div style={{ padding: '2rem 2rem' }}>
                <div>Language</div>
                <InputGroup fullWidth>
                  <div style={{ ...roundedBordersTextField, width: '100%', borderRadius: 3 }}>
                    <Select options={options} placeholder="English" />
                    {/* <input type="text" placeholder="" style={{ border: 0, background: 'transparent' }} /> */}
                  </div>
                </InputGroup>
                <div style={{ marginTop: '1rem' }}>Username</div>
                <InputGroup fullWidth>
                  <div style={{ ...roundedBordersTextField, width: '100%', borderRadius: 3 }}>
                    <input type="text" id="username" placeholder="" style={{ border: 0, background: 'transparent' }} />
                  </div>
                </InputGroup>
                <div style={{ marginTop: '1rem' }}>Password</div>
                <InputGroup fullWidth>
                  <div style={{ ...roundedBordersTextField, width: '100%', borderRadius: 3 }}>
                    <input
                      type="password"
                      id="password"
                      placeholder=""
                      style={{ border: 0, background: 'transparent' }}
                    />
                  </div>
                </InputGroup>
                <div style={{ marginTop: '1rem' }}>Validation Code</div>
                <InputGroup fullWidth>
                  <div style={{ ...roundedBordersTextField, width: '100%', borderRadius: 3 }}>
                    <input
                      type="text"
                      placeholder=""
                      id="validationCode"
                      style={{ border: 0, background: 'transparent' }}
                    />
                  </div>
                </InputGroup>
                <Group>
                  <Checkbox checked onChange={onCheckbox}>
                    Remember me
                  </Checkbox>
                  <Link href="/auth/request-password">
                    <a>Forgot Password?</a>
                  </Link>
                </Group>
                <Button
                  status="Success"
                  type="button"
                  shape="SemiRound"
                  fullWidth
                  style={{ background: 'linear-gradient(89.33deg, #0075FF 0.58%, #00D1FF 104.03%)' }}
                  onClick={onLogin}
                >
                  Login
                </Button>
              </div>
            </form>
            <p>
              Don&apos;t have account?{' '}
              <Link href="/auth/register">
                <a>Register</a>
              </Link>
            </p>
          </Auth>
        </Col>
      </Row>
    </Layout>
  );
}
