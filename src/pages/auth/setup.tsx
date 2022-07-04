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

export default function SetupPasswordAndCode() {
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [error1, setError1] = React.useState('');
  const [error2, setError2] = React.useState('');
  const [error3, setError3] = React.useState('');
  const [error4, setError4] = React.useState('');
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
                  <div>Please enter your new password and 6-digit security code.</div>
                </div>
                <div style={{ height: '2rem' }}></div>
                <div style={{ marginTop: '1rem' }}>New Password</div>
                <InputGroup fullWidth>
                  <div style={{ ...roundedBordersTextField, width: '100%', borderRadius: 3 }}>
                    <input
                      type="password"
                      id="password"
                      placeholder=""
                      style={{ border: 0, background: 'transparent' }}
                      onChange={(e) => {
                        var password = e.target.value;
                        var error = '';
                        if (password.length > 20 || password.length < 6) error = 'Should be 6-20 characters.';
                        if (
                          password.toLowerCase().indexOf(firstname.toLowerCase()) > -1 ||
                          password.toLowerCase().indexOf(lastname.toLowerCase()) > -1
                        ) {
                          error = 'Should not contain your first/last name.';
                        }
                        if (!password.match(/[a-z]/g)) error = 'Should contain lowercase letter.';
                        if (!password.match(/[A-Z]/g)) error = 'Should contain uppercase letter.;';
                        if (!password.match(/[0-9]/g)) error = 'Should contain number;';
                        setError1(error);
                      }}
                    />
                  </div>
                </InputGroup>
                <div style={{ marginTop: '1rem' }}>Confirm Password</div>
                <InputGroup fullWidth>
                  <div style={{ ...roundedBordersTextField, width: '100%', borderRadius: 3 }}>
                    <input
                      type="password"
                      id="password1"
                      placeholder=""
                      style={{ border: 0, background: 'transparent' }}
                      onChange={(e) => {
                        if (document.getElementById('password').value != e.target.value) setError2('');
                        else setError2("Passwords don't match.");
                      }}
                    />
                  </div>
                </InputGroup>
                <div style={{ marginTop: '1rem' }}>Pin code</div>
                <InputGroup fullWidth>
                  <div style={{ ...roundedBordersTextField, width: '100%', borderRadius: 3 }}>
                    <input
                      type="password"
                      id="pincode"
                      placeholder="Should be 6 digits"
                      style={{ border: 0, background: 'transparent' }}
                      onChange={(e) => {
                        if (/^[0-9]*$/.test(e.target.value)) setError3('');
                        else setError3('Pin code should be 6 digits.');
                      }}
                      onBlur={(e) => {
                        if (/^[0-9]*$/.test(e.target.value) && e.target.value.length == 6) setError3('');
                        else setError3('Pin code should be 6 digits.');
                      }}
                    />
                  </div>
                </InputGroup>
                <div style={{ color: 'red' }}>{error3}</div>
                <div style={{ marginTop: '1rem' }}>New Pin Code</div>
                <InputGroup fullWidth>
                  <div style={{ ...roundedBordersTextField, width: '100%', borderRadius: 3 }}>
                    <input
                      type="password"
                      id="pincode1"
                      placeholder=""
                      style={{ border: 0, background: 'transparent' }}
                      onChange={(e) => {
                        if (document.getElementById('pincode').value == e.target.value) setError4('');
                        else setError4("Pincodes don't match.");
                      }}
                      onBlur={(e) => {
                        if (/^[0-9]*$/.test(e.target.value) && e.target.value.length == 6) setError4('');
                        else setError4("Pincodes don't match.");
                      }}
                    />
                  </div>
                </InputGroup>
                <div style={{ color: 'red' }}>{error4}</div>
                {/* <Row>
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
                              onKeyDown={(e) => {
                                // alert(e.key);
                                if (e.key < '0' || e.key > '9') {
                                  document.getElementById('pintext_' + (i - 1)).value = '';
                                }
                              }}
                              onKeyUp={(e) => {
                                if (e.key < '0' || e.key > '9') {
                                  document.getElementById('pintext_' + (i - 1)).value = '';
                                  return;
                                }
                                var t = document.getElementById('pintext_' + (i - 1)).value;
                                document.getElementById('pintext_' + (i - 1)).value = e.key;
                                setTimeout(() => {
                                  document.getElementById('pintext_' + i)
                                    ? document.getElementById('pintext_' + i).focus()
                                    : document.getElementById('pintext_' + (i - 1)).blur();
                                }, 0);
                              }}
                            />
                          </div>
                        </InputGroup>
                      </Col>
                    );
                  })}
                </Row> */}
                <div style={{ height: '2rem' }}></div>
                <Button
                  status="Success"
                  type="button"
                  shape="SemiRound"
                  fullWidth
                  style={{ background: 'linear-gradient(89.33deg, #0075FF 0.58%, #00D1FF 104.03%)' }}
                  onClick={() => {
                    var sum = '';
                    if (error1 || error2 || error3 || error4 || isSubmitting) return;
                    setSubmitting(true);
                    APICall(
                      '/api/login3',
                      {
                        password: document.getElementById('password').value,
                        pincode: document.getElementById('pincode').value,
                      },
                      (data) => {
                        alert('Successfully set up. Please try login with your new credentials.');
                        setSubmitting(false);
                        setTimeout(() => (window.location.href = '/auth/login'), 500);
                      },
                      (e) => {
                        console.log(e);
                        setSubmitting(false);
                        if (e[0] === -2) window.alert('No account existed');
                        else window.alert(e[1] || 'Failed to setup');
                      },
                    );
                  }}
                >
                  {isSubmitting ? 'Setting up...' : 'Confirm'}
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
