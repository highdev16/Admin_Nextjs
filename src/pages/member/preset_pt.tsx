import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';

import { createGlobalStyle, css } from 'styled-components';
import { breakpointDown } from '@paljs/ui/breakpoints';
// import Select from '@paljs/ui/Select';
import { Button } from '@paljs/ui/Button';

const SimpleHTOE = () => {
  const CustomCSS = createGlobalStyle`
${() => css`
  .auth-layout .main-content {
    background-color: #e7e8ee;
    padding-top: 1rem;
  }
  .contentHeaderImage {
    margin-bottom: 0rem;
  }

  div.header-white {
    height: 50px;
    background: url(/images/white_table_head.png);
    background-size: cover;
    display: flex;
  }
  div.blue-title {
    margin: auto;
    width: 334px;
    height: 33px;
    margin-top: 0px;
    background: url(/images/black_title_bkg.png);
    background-size: 334px 33px;
    line-height: 33px;
    font-weight: bold;
  }

  div.header-blue {
    height: 100px;
    background: url(/images/totalbet/member_total/header.png);
    background-size: cover;
    display: flex;
  }
  div.white-title {
    position: absolute;
    margin: auto;
    margin-left: 3rem;
    margin-right: 0rem;
    padding-left: 3rem;
    padding-right: 3rem;
    height: 33px;
    margin-top: 0px;
    background: white;
    background-size: 334px 33px;
    color: black;
    line-height: 33px;
    font-weight: bold;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  div.cash-option,
  div.credit-option {
    color: gray;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border: 2px solid gray;
    border-top: 0px solid gray;
    background: #0000;
  }
  div.selected {
    background: url(/images/totalbet/member_total/credit.png);
    background-size: 100% 100%;
    color: white;
    border: 0px solid gray;
  }
  #contentTableObj {
    border: 0px solid black;
    border-collapse: collapse;
  }
  #contentTable tr {
    height: 35px;
    line-height: 35px;
    border-radius: 5px;
    border: 0px solid white;
    position: relative;
  }
  #contentTable tr {
    background-color: #d7f5eb;
    width: 50%;
    color: #051139;
  }
  #contentTableObj,
  #Main-contentTableObj {
    width: 100%;
  }
  #Main-contentTableObj {
    height: calc(100vh - 300px);
    background: white;
  }
  #Main-contentTableObj * {
    color: black;
  }
  ${breakpointDown('sm')`
    div.white-title {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      float: left;
    }
    div.header-blue {
      border-radius: 7px;
      height: 130px;
    }
    div.header-blue {
      display: block;
    }
  `}

  div.ticket {
    width: 200px;
    height: 70px;
    margin: auto;
    position: relative;
    background: linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 0.5) 91.2%);
    border-radius: 10px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 70px;
    grid-template-areas: 'small-title right-icon' 'big-title right-icon';
    display: grid;
  }
  div.ticket div.small-title {
    justify-content: bottom;
    display: flex;
    grid-area: small-title;
    margin-left: 1rem;
    margin-bottom: 0rem;
    text-align: left;
    color: #aaa;
    justify-content: end;
    flex-direction: column;
  }
  div.ticket div.right-icon {
    display: flex;
    background: url(/images/totalbet/member_total/Icon.png);
    width: 56px;
    height: 56px;
    grid-area: right-icon;
    margin: auto;
  }
  div.ticket div.right-icon > img {
    margin: auto;
  }
  div.ticket div.big-title {
    margin-left: 1rem;
    margin-top: 0rem;
    grid-area: big-title;
    text-align: left;
    font-weight: bold;
  }
  div.select {
    height: 36px;
  }
  div.ticket.select {
    display: block;
    margin-bottom: 1rem;
  }
  div.content-area {
    width: 100%;
    background: white;
    padding: 0rem 0rem 4rem 0rem;
  }
  div.content-area * {
    color: #051139;
  }
  div.grayRow {
    background: #dceffd;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    width: 100%;
  }
  div.grayRow:nth-child(2n + 1) {
    background: #d7f5eb;
  }
  div.grayRow table {
    width: 100%;
  }
`}`;
  return (
    <Layout title="Accordions">
      <CustomCSS />
      <Row>
        <Col className="centerAll" breakPoint={{ xs: 12, md: 12 }}>
          <img src="/images/wewinlogo_black.png" className="contentHeaderImage" />
          <div className="header-blue" style={{ position: 'relative' }}>
            <div className="white-title">Preset</div>
            <table style={{ width: '100% ', position: 'absolute', bottom: '1rem' }}>
              <tbody>
                <tr>
                  <td style={{ width: '5%' }}>#</td>
                  <td style={{ width: '15%' }}>Username</td>
                  <td style={{ width: '15%' }}>First Name</td>
                  <td style={{ width: '15%' }}>Last Name</td>
                  <td style={{ width: '10%' }}>Edit</td>
                  <td style={{ width: '10%' }}>Min PT</td>
                  <td style={{ width: '10%' }}>Force PT</td>
                  <td style={{ width: '10%' }}>Take Remaining</td>
                  <td style={{ width: '10%' }}>Status</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="content-area">
            <table style={{ width: '100%', border: '1px solid white', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td colSpan={12}>
                    <div className="grayRow">
                      <table style={{ borderCollapse: 'collapse' }}>
                        <tbody>
                          <tr>
                            <td style={{ width: '5%', height: '44px' }}>#</td>
                            <td style={{ width: '15%' }}>Username</td>
                            <td style={{ width: '15%' }}>First Name</td>
                            <td style={{ width: '15%' }}>Last Name</td>
                            <td style={{ width: '10%' }}>Edit</td>
                            <td style={{ width: '10%' }}>Min PT</td>
                            <td style={{ width: '10%' }}>Force PT</td>
                            <td style={{ width: '10%' }}>Take Remaining</td>
                            <td style={{ width: '10%' }}>Status</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="grayRow">
                      <table style={{ borderCollapse: 'collapse' }}>
                        <tbody>
                          <tr>
                            <td style={{ width: '5%', height: '44px' }}>#</td>
                            <td style={{ width: '15%' }}>Username</td>
                            <td style={{ width: '15%' }}>First Name</td>
                            <td style={{ width: '15%' }}>Last Name</td>
                            <td style={{ width: '10%' }}>Edit</td>
                            <td style={{ width: '10%' }}>Min PT</td>
                            <td style={{ width: '10%' }}>Force PT</td>
                            <td style={{ width: '10%' }}>Take Remaining</td>
                            <td style={{ width: '10%' }}>Status</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="grayRow">
                      <table style={{ borderCollapse: 'collapse' }}>
                        <tbody>
                          <tr>
                            <td style={{ width: '5%', height: '44px' }}>#</td>
                            <td style={{ width: '15%' }}>Username</td>
                            <td style={{ width: '15%' }}>First Name</td>
                            <td style={{ width: '15%' }}>Last Name</td>
                            <td style={{ width: '10%' }}>Edit</td>
                            <td style={{ width: '10%' }}>Min PT</td>
                            <td style={{ width: '10%' }}>Force PT</td>
                            <td style={{ width: '10%' }}>Take Remaining</td>
                            <td style={{ width: '10%' }}>Status</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="header-white" style={{ marginTop: '1rem' }}>
            <div className="blue-title">Preset PT Settings</div>
          </div>
          <div className="content-area">
            <table style={{ width: '100%', border: '1px solid white', borderCollapse: 'collapse' }}>
              <thead style={{ background: 'url(/images/totalbet/member_total/header.png)', backgroundSize: 'cover' }}>
                <tr>
                  <td style={{ color: 'white', height: '44px', width: '35%' }}>Type</td>
                  <td style={{ color: 'white', width: '33%' }}>Min Value</td>
                  <td style={{ color: 'white', width: '32%' }}>Max Value</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={12}>
                    <Col breakPoint={{ sm: 12, md: 4 }}>
                      <div className="grayRow">
                        <div className="form-item">
                          <div className="form-label">Min PT:</div>
                          <div className="form-value">
                            <select>
                              <option></option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="grayRow">
                        <div className="form-item">
                          <div className="form-label">Forced PT:</div>
                          <div className="form-value">
                            <select>
                              <option></option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="grayRow">
                        <div className="form-item">
                          <div className="form-label">Is Take All: </div>
                          <div className="form-value">
                            <select>
                              <option></option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Button
            style={{
              border: '0px',
              background: 'linear-gradient(89.33deg, #0075FF 0.58%, #00D1FF 104.03%)',
              color: 'white',
              width: '150px',
              marginTop: '1rem',
              backgroundSize: 'cover',
              borderRadius: 10,
            }}
          >
            Update
          </Button>
        </Col>
      </Row>
    </Layout>
  );
};

export default SimpleHTOE;
