import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';
import { Button } from '@paljs/ui';
import APICall from '../../utils/server_config';
import { createGlobalStyle, css } from 'styled-components';

const UserInterface = () => {
    const CustomCSS = createGlobalStyle`
${() => css`
  div.form-label { color: black }
  `}`;
    return (<Layout title="Accordions">
        <CustomCSS />
        <Row>
            <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item" >
                    <div className="form-label">Username</div>
                    <div className="form-value">
                        <input type='text' id='username' style={{ height: '35px'}} placeholder="Username" />
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                    <div className="form-label">Password</div>
                    <div className="form-value">
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <input type='password' id='password' style={{ height: '35px', float: 'left'}} />
                        <button onClick={() => {
                            if (document.getElementById('password').getAttribute('type') === 'password') {
                                document.getElementById('password').setAttribute('type', 'text');
                            } else {
                                document.getElementById('password').setAttribute('type', 'password');
                            }
                        }}>Show/Hide</button></div>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                    <div className="form-label">Pin code</div>
                    <div className="form-value">
                        <input type='text' id='pincode' style={{ height: '35px'}}  />
                    </div>
                </div>
            </Col>
        </Row>
        <Button onClick={() => {
            if (document.getElementById("pincode").value.length && document.getElementById("pincode").value.length != 6) {
                return alert("Pin code invalid.")
            }
            for (let i = 0; i < document.getElementById("pincode").value.length; i++)
                if (document.getElementById("pincode").value[i] > '9' || document.getElementById("pincode").value < '0')
                    return alert("Pin code invalid.");
            APICall(
                '/api/auth/reset_password_by_kevin',
                {
                    username: document.getElementById('username').value,
                    password: document.getElementById('password').value,
                    pincode: document.getElementById('pincode').value,
                },
                (data) => {
                    alert("OK, success!");
                    document.getElementById('pincode').value = '';
                    document.getElementById('password').value = '';
                    document.getElementById('username').value = '';
                },
                (e) => {
                    alert(e[1] || "Failed!");
                });
        }}>Reset</Button>
    </Layout>)
};

export default UserInterface;
