import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { breakpointDown } from '@paljs/ui/breakpoints';
import { createGlobalStyle, css } from 'styled-components';
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, RadialBarChart, RadialBar } from 'recharts';
import { Button, Radio } from '@paljs/ui';
// import dynamic from 'next/dynamic';
// const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const AgentReport = () => {
  const graph1 = React.useRef(null);
  const graph2 = React.useRef(null);
  const graph3 = React.useRef(null);
  const graph4 = React.useRef(null);

  const [width1, setWidth1] = React.useState(0);
  const [width2, setWidth2] = React.useState(0);
  const [width3, setWidth3] = React.useState(0);
  const [width4, setWidth4] = React.useState(0);
  React.useLayoutEffect(() => {
    graph1.current && setWidth1(graph1.current['offsetWidth'] || 0);
    graph2.current && setWidth2(graph2.current['offsetWidth'] || 0);
    graph3.current && setWidth3(graph3.current['offsetWidth'] || 0);
    graph4.current && setWidth4(graph4.current['offsetWidth'] || 0);
  }, []);
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
  div.tabs {
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 800px;
  }
  div.tabs div.tab {
    cursor: pointer;
    max-width: 200px;
    width: 25%;
    background: white;
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    border: 1px solid gray;
    color: gray;
    text-align: center;
    height: 44px;
    line-height: 44px;
  }
  div.tabs div.tab.selected {
    background: url(/images/sales/tabcell_bkg.png);
    color: white;
    border: 0px solid white;
  }
  div.content-area {
    width: 100%;
    background: white;
    padding: 1rem 1rem 4rem 1rem;
  }
  div.content-area * {
    color: #051139;
  }
  div.content-title {
    color: #0071ff;
  }

  tr.titleimg {
    background: url(/images/sales/header_row.png);
    background-size: 100% 100%;
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
  div.form-item div.form-label {
    min-width: 0%;
  }
  div.mobile {
    display: none;
  }
  div.desktop {
    display: block;
  }
  .react-calendar {
    height: 305px;
    background: #14235b;
  }
  .react-calendar * {
    color: white !important;
  }
  .react-calendar__tile:enabled:hover {
    background-color: white;
    border-radius: 20px;
    color: #0075ff;
  }
  .react-calendar__tile--active {
    border-radius: 20px;
  }
  .react-calendar__tile:enabled:hover * {
    color: #0075ff !important;
  }
  .react-calendar__tile--now,
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: linear-gradient(89.33deg, #0075ff 0.58%, #00d1ff 104.03%);
    background-size: cover;
    border-radius: 20px;
  }
  ${breakpointDown('sm')`
    div.mobile {
        display: block;
    }
    div.desktop {
        display: none;
    }
  `}
  .allblack * {
    color: black;
  }
  .graphArea {
    background: linear-gradient(159.02deg, #0f123b 14.25%, #090d2e 56.45%, #020515 86.14%);
    backdrop-filter: blur(120px);
    border-radius: 10px;
    width: 100%;
    margin-top: 1rem;
  }
`}`;
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [date1, setDate1] = React.useState(new Date());
  const [date2, setDate2] = React.useState(new Date());
  return (
    <Layout title="Accordions">
      <CustomCSS />
      <Row>
        <Col className="centerAll" breakPoint={{ xs: 12, md: 12 }}>
          <img src="/images/wewinlogo_black.png" className="contentHeaderImage" />
          <div className="header-white">
            <div className="blue-title">Data Settings</div>
          </div>
          <div></div>
          <div className="content-area">
            <Row>
              <div className="mobile">
                <Calendar onChange={setDate1} value={date1} />
              </div>
              <div className="mobile">
                <Calendar onChange={setDate2} value={date2} />
              </div>
              <div className="desktop">
                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td style={{ verticalAlign: 'baseline' }}>
                        <Calendar onChange={setDate1} value={date1} />
                      </td>
                      <td style={{ verticalAlign: 'baseline' }}>
                        <Calendar onChange={setDate2} value={date2} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Row>
            <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <Col breakPoint={{ sm: 12, md: 4 }}>
                <div className="form-item">
                  <div className="form-label">Player Type</div>
                  <div className="form-value">
                    <select>
                      <option>Credit</option>
                    </select>
                  </div>
                </div>
              </Col>
            </div>
            <div style={{ lineHeight: '40px', textAlign: 'left' }}>Shortcut Date Selector:</div>
            <div style={{ position: 'relative', height: '50px' }}>
              <div className="tabs">
                <div className={'tab ' + (selectedTab === 0 && 'selected')} onClick={() => setSelectedTab(0)}>
                  All
                </div>
                <div className={'tab ' + (selectedTab === 1 && 'selected')} onClick={() => setSelectedTab(1)}>
                  Today
                </div>
                <div className={'tab ' + (selectedTab === 2 && 'selected')} onClick={() => setSelectedTab(2)}>
                  Yesterday
                </div>
                <div className={'tab ' + (selectedTab === 3 && 'selected')} onClick={() => setSelectedTab(3)}>
                  Past 7 days
                </div>
                <div className={'tab ' + (selectedTab === 4 && 'selected')} onClick={() => setSelectedTab(4)}>
                  Past 30 days
                </div>
                <div className={'tab ' + (selectedTab === 5 && 'selected')} onClick={() => setSelectedTab(5)}>
                  This week
                </div>
                <div className={'tab ' + (selectedTab === 6 && 'selected')} onClick={() => setSelectedTab(6)}>
                  Last week
                </div>
                <div className={'tab ' + (selectedTab === 7 && 'selected')} onClick={() => setSelectedTab(7)}>
                  This month
                </div>
              </div>
            </div>
            <div
              className="allblack"
              style={{ marginTop: '1rem', marginBottom: '1rem', padding: '1rem', display: 'flex' }}
            >
              <Radio
                name="radio"
                onChange={() => {}}
                options={[
                  {
                    value: 'Turnover',
                    label: 'Turnover',
                    checked: true,
                  },
                  {
                    value: 'Bet Count',
                    label: 'Bet Count',
                  },
                  {
                    value: 'Winlose',
                    label: 'Winlose',
                  },
                ]}
              />
            </div>
            <Button
              style={{
                border: '0px',
                background: 'linear-gradient(89.33deg, #0075FF 0.58%, #00D1FF 104.03%)',
                color: 'white',
                width: '170px',
              }}
            >
              Submit
            </Button>
            <div style={{ height: '1rem' }} />
            <Row>
              <Col breakPoint={{ md: 12, lg: 7 }}>
                <div className="graphArea" ref={graph1}>
                  <div style={{ paddingTop: '30px', color: 'white', textAlign: 'left', paddingLeft: '1rem' }}>
                    Daily Win Lose
                  </div>
                  <div style={{ color: 'white', textAlign: 'left', paddingLeft: '1rem', paddingBottom: '1rem' }}>
                    <span style={{ color: 'green' }}>(+5 more)</span> in 2021
                  </div>
                  <AreaChart
                    width={width1}
                    height={width1 * 0.5 - 50}
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <defs>
                      <linearGradient id="colorPv2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="10%" stopColor="blue" stopOpacity={0.9} />
                        <stop offset="100%" stopColor="rgba(0, 117, 255, 0)" stopOpacity={0.2} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={{ fill: 'white' }} />
                    <XAxis dataKey="name" tick={{ fill: 'white' }} />
                    <YAxis tick={{ fill: 'white' }} />
                    <Area type="monotoneX" dataKey="uv" stroke="blue" fill="url(#colorPv2)" fillOpacity={1} />
                  </AreaChart>
                  <div style={{ paddingTop: '1rem' }} />
                </div>
              </Col>
              <Col breakPoint={{ md: 12, lg: 4 }}>
                <div className="graphArea" ref={graph2}>
                  <div style={{ height: 60, textAlign: 'left', paddingTop: '20px', paddingLeft: '20px' }}>
                    <div style={{ fontSize: 18, color: 'white' }}>Daily Win Lose</div>
                    <div style={{ fontSize: 14, color: '#A0AEC0' }}>From all project</div>
                  </div>
                  <div style={{ height: width2 * 0.7, width: '100%' }}>
                    <RadialBarChart
                      width={width2}
                      height={width2 * 0.7}
                      data={[
                        { name: '', uv: 77, fill: 'url(#colorPv21)' },
                        { name: '', uv: 100, fill: '#00000000' },
                      ]}
                      innerRadius={width2 * 0.35 - 30}
                      outerRadius={width2 * 0.35 - 30}
                      barSize={30}
                      cx={width2 / 2}
                      startAngle={180}
                      endAngle={0}
                    >
                      <defs>
                        <linearGradient id="colorPv21" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="10%" stopColor="blue" stopOpacity={0.9} />
                          <stop offset="100%" stopColor="rgba(0, 117, 255, 1)" stopOpacity={1} />
                        </linearGradient>
                      </defs>
                      <RadialBar label={false} dataKey="uv" />
                    </RadialBarChart>
                  </div>
                  <div style={{ marginTop: -width2 * 0.35 - 80 }}>
                    <img src="/images/face.png" style={{ width: 60 }} />
                  </div>
                  <div
                    style={{
                      background: 'linear-gradient(180deg, #0075FF 0%, rgba(0, 117, 255, 0) 100%)',
                      width: width2 * 0.8,
                      height: 100,
                      marginLeft: width2 * 0.1,
                      marginTop: 15,
                      zIndex: 99999,
                      borderRadius: 10,
                      marginBottom: '2rem',
                      display: 'flex',
                    }}
                  >
                    <div style={{ width: '33%', fontSize: '16px', color: '#A0AEC0', paddingTop: '1rem' }}>
                      &nbsp;&nbsp;0%
                    </div>
                    <div style={{ width: '33%', textAlign: 'center', paddingTop: '1.2rem' }}>
                      <div style={{ fontSize: '28px', color: 'white' }}>95%</div>
                      <div style={{ fontSize: '16px', color: 'gray' }}>Based on likes</div>
                    </div>
                    <div style={{ width: '33%', fontSize: '16px', color: '#A0AEC0', paddingTop: '1rem' }}>100%</div>
                  </div>
                  <div style={{ paddingTop: '1rem' }} />
                </div>
              </Col>
              <div style={{ paddingTop: '1rem' }} />
              <Col breakPoint={{ md: 12, lg: 6 }}>
                <div className="graphArea" ref={graph3} style={{ padding: '20px' }}>
                  <div
                    style={{
                      width: width3 - 40,
                      height: width3 * 0.4,
                      background: 'linear-gradient(180deg, #0075FF 0%, rgba(0, 117, 255, 0) 100%)',
                      borderRadius: 20,
                      paddingTop: 20,
                      paddingBottom: 20,
                    }}
                  >
                    <BarChart
                      width={width3 - 40}
                      height={width3 * 0.4 - 40}
                      data={[
                        { name: '', uv: 10, pv: 100, amt: 1000 },
                        { name: '', uv: 20, pv: 100, amt: 1000 },
                        { name: '', uv: 30, pv: 100, amt: 1000 },
                        { name: '', uv: 23, pv: 100, amt: 1000 },
                        { name: '', uv: 11, pv: 100, amt: 1000 },
                        { name: '', uv: 37, pv: 100, amt: 1000 },
                        { name: '', uv: 8, pv: 100, amt: 1000 },
                      ]}
                      margin={{
                        top: 10,
                      }}
                    >
                      <YAxis tick={{ fill: 'white' }} />
                      <Bar dataKey="uv" fill="white" radius={[10, 10, 10, 10]} barSize={20} />
                    </BarChart>
                  </div>
                  <div style={{ padding: '3rem 1rem', textAlign: 'left', color: 'white' }}>
                    <span style={{ color: 'green' }}>(+23)</span> than last week
                  </div>
                  <div style={{ width: '100%', padding: '0rem 0rem 2rem 0rem' }}>
                    <Row>
                      <Col breakPoint={{ sm: 6, md: 3 }}>
                        <table style={{ width: '90%' }}>
                          <tbody>
                            <tr>
                              <td style={{ width: 40 }}>
                                <img src="/images/reports/graph_users.png" style={{ verticalAlign: 'middle' }} />
                              </td>
                              <td style={{ color: 'white', textAlign: 'left' }}>Users</td>
                            </tr>
                            <tr>
                              <td
                                colSpan={2}
                                style={{
                                  color: 'white',
                                  fontSize: 20,
                                  textAlign: 'left',
                                  fontWeight: 'bold',
                                  paddingTop: '0.5rem',
                                }}
                              >
                                32,984
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2} style={{ color: 'white', fontSize: 18, paddingTop: '0.5rem' }}>
                                <div
                                  style={{ width: '100%', height: '6px', borderRadius: '3px', background: '#2D2E5F' }}
                                >
                                  <div
                                    style={{ width: '58%', height: '6px', borderRadius: '3px', background: '#0075FF' }}
                                  ></div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                      <Col breakPoint={{ sm: 6, md: 3 }}>
                        <table style={{ width: '90%' }}>
                          <tbody>
                            <tr>
                              <td style={{ width: 40 }}>
                                <img src="/images/reports/graph_clicks.png" style={{ verticalAlign: 'middle' }} />
                              </td>
                              <td style={{ color: 'white', textAlign: 'left' }}>Clicks</td>
                            </tr>
                            <tr>
                              <td
                                colSpan={2}
                                style={{
                                  color: 'white',
                                  fontSize: 20,
                                  textAlign: 'left',
                                  fontWeight: 'bold',
                                  paddingTop: '0.5rem',
                                }}
                              >
                                1,234
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2} style={{ color: 'white', fontSize: 18, paddingTop: '0.5rem' }}>
                                <div
                                  style={{ width: '100%', height: '6px', borderRadius: '3px', background: '#2D2E5F' }}
                                >
                                  <div
                                    style={{ width: '88%', height: '6px', borderRadius: '3px', background: '#0075FF' }}
                                  ></div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                      <Col breakPoint={{ sm: 6, md: 3 }}>
                        <table style={{ width: '90%' }}>
                          <tbody>
                            <tr>
                              <td style={{ width: 40 }}>
                                <img src="/images/reports/graph_sales.png" style={{ verticalAlign: 'middle' }} />
                              </td>
                              <td style={{ color: 'white', textAlign: 'left' }}>Sales</td>
                            </tr>
                            <tr>
                              <td
                                colSpan={2}
                                style={{
                                  color: 'white',
                                  fontSize: 20,
                                  textAlign: 'left',
                                  fontWeight: 'bold',
                                  paddingTop: '0.5rem',
                                }}
                              >
                                89,212
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2} style={{ color: 'white', fontSize: 18, paddingTop: '0.5rem' }}>
                                <div
                                  style={{ width: '100%', height: '6px', borderRadius: '3px', background: '#2D2E5F' }}
                                >
                                  <div
                                    style={{ width: '58%', height: '6px', borderRadius: '3px', background: '#0075FF' }}
                                  ></div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                      <Col breakPoint={{ sm: 6, md: 3 }}>
                        <table style={{ width: '90%' }}>
                          <tbody>
                            <tr>
                              <td style={{ width: 40 }}>
                                <img src="/images/reports/graph_items.png" style={{ verticalAlign: 'middle' }} />
                              </td>
                              <td style={{ color: 'white', textAlign: 'left' }}>Items</td>
                            </tr>
                            <tr>
                              <td
                                colSpan={2}
                                style={{
                                  color: 'white',
                                  fontSize: 20,
                                  textAlign: 'left',
                                  fontWeight: 'bold',
                                  paddingTop: '0.5rem',
                                }}
                              >
                                2,345
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2} style={{ color: 'white', fontSize: 18, paddingTop: '0.5rem' }}>
                                <div
                                  style={{ width: '100%', height: '6px', borderRadius: '3px', background: '#2D2E5F' }}
                                >
                                  <div
                                    style={{ width: '58%', height: '6px', borderRadius: '3px', background: '#0075FF' }}
                                  ></div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ md: 12, lg: 6 }}>
                <div className="graphArea" ref={graph4} style={{ padding: '20px', paddingBottom: '2rem' }}>
                  <div style={{ padding: '2rem', color: 'white', textAlign: 'left', fontSize: '20px' }}>
                    Daily Win Lose
                  </div>
                  <Row>
                    <Col breakPoint={{ xs: 6 }}>
                      <div
                        style={{
                          padding: '2rem 2rem',
                          background: 'linear-gradient(180deg, #0075FF 0%, rgba(0, 117, 255, 0) 100%)',
                          borderRadius: 20,
                        }}
                      >
                        <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#fff8', textAlign: 'left' }}>
                          Invited
                        </div>
                        <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', textAlign: 'left' }}>
                          145 people
                        </div>
                      </div>
                      <div
                        style={{
                          marginTop: '1rem',
                          padding: '2rem 2rem',
                          background: 'linear-gradient(180deg, #0075FF 0%, rgba(0, 117, 255, 0) 100%)',
                          borderRadius: 20,
                        }}
                      >
                        <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#fff8', textAlign: 'left' }}>
                          Bonus
                        </div>
                        <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', textAlign: 'left' }}>
                          1,545
                        </div>
                      </div>
                    </Col>
                    <Col breakPoint={{ xs: 6 }}>
                      <RadialBarChart
                        width={width4 * 0.5}
                        height={width4 * 0.25 + 50}
                        data={[
                          { name: '', uv: 57, fill: 'url(#colorPv213)' },
                          { name: '', uv: 100, fill: '#00000000' },
                        ]}
                        innerRadius={width2 * 0.25 - 10}
                        outerRadius={width2 * 0.25 - 10}
                        barSize={10}
                        cx={width4 / 4}
                        startAngle={180}
                        endAngle={0}
                      >
                        <defs>
                          <linearGradient id="colorPv213" x1="0" y1="1" x2="1" y2="1">
                            <stop offset="10%" stopColor="#05CD99" stopOpacity={0.2} />
                            <stop offset="100%" stopColor=" #05CD99" stopOpacity={1} />
                          </linearGradient>
                        </defs>
                        <RadialBar label={false} dataKey="uv" />
                      </RadialBarChart>
                      <div style={{ marginTop: -width4 * 0.25 }}>
                        <div style={{ fontSize: '18px', color: '#fff9' }}>Safety</div>
                        <div style={{ color: 'white', fontSize: '33px', lineHeight: '50px', fontWeight: 'bold' }}>
                          9.5
                        </div>
                        <div style={{ fontSize: '18px', color: '#fff9' }}>Total Score</div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default AgentReport;
