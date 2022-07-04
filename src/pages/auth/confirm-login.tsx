import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import React from 'react';
import Link from 'next/link';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import APICall from '../../utils/server_config';
import Auth from 'components/Auth';
import Layout from 'Layouts';

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

export default function ConfirmLogin() {
  const [pinCode, setPinCode] = React.useState([1, 2, 3, 4, 5, 6].map((s) => ''));
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
                <div style={{ textAlign: 'center' }}>
                  <h2>SECURITY CODE</h2>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div>Please enter your 6-digit security code</div>
                </div>
                <div style={{ height: '2rem' }}></div>
                <Row>
                  {[1, 2, 3, 4, 5, 6].map((i) => {
                    return (
                      <Col breakPoint={{ xs: 2 }}>
                        <InputGroup fullWidth>
                          <div style={{ ...roundedBordersTextField, width: '100%', borderRadius: 3 }}>
                            <input
                              autoComplete="off"
                              id={'pintext_' + (i - 1)}
                              type="text"
                              placeholder=""
                              style={{
                                border: 0,
                                background: 'transparent',
                                padding: '10px 0px',
                                color: 'white',
                                textAlign: 'center',
                              }}
                              value={pinCode[i - 1]}
                              onKeyUp={(e) => {
                                var value = e.key;
                                if (value >= '0' && value <= '9') {
                                  setPinCode((oldCode) => {
                                    var old = [...oldCode];
                                    old[i - 1] = value;
                                    return old;
                                  });
                                  document.getElementById('pintext_' + i)
                                    ? document.getElementById('pintext_' + i).focus()
                                    : document.getElementById('pintext_' + (i - 1)).blur();
                                }
                              }}
                            />
                          </div>
                        </InputGroup>
                      </Col>
                    );
                  })}
                </Row>
                <div style={{ height: '2rem' }}></div>
                <Button
                  status="Success"
                  type="button"
                  shape="SemiRound"
                  fullWidth
                  style={{ background: 'linear-gradient(89.33deg, #0075FF 0.58%, #00D1FF 104.03%)' }}
                  onClick={() => {
                    var sum = '';
                    for (let i = 0; i < 6; i++) {
                      if (
                        document.getElementById('pintext_' + i).value < '0' ||
                        document.getElementById('pintext_' + i).value > '9'
                      ) {
                        alert('Enter your 6-digit key code.');
                        return;
                      }
                      if (document.getElementById('pintext_' + i).value.length != 1) {
                        document.getElementById('pintext_' + i).value = '';
                        alert('Enter your 6-digit key code.');
                        return;
                      }
                      sum += document.getElementById('pintext_' + i).value;
                    }
                    APICall(
                      '/api/login2',
                      {
                        code: sum,
                      },
                      (data) => {
                        setTimeout(() => (window.location.href = '/sales/agent_group'), 500);
                      },
                      (e) => {
                        console.log(e);
                        if (e[0] === -2) window.alert('No account existed');
                        else if (e[0] === -7) window.alert('Invalid validation code. Try again.');
                        else window.alert(e[1] || 'Failed to login');
                      },
                    );
                  }}
                >
                  Confirm
                </Button>
              </div>
            </form>
            <p>
              <Link href="/auth/login">
                <a>Back</a>
              </Link>
            </p>
          </Auth>
        </Col>
      </Row>
    </Layout>
  );
}
