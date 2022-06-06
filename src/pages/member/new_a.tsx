import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';
import 'react-calendar/dist/Calendar.css';
import { breakpointDown } from '@paljs/ui/breakpoints';
import { createGlobalStyle, css } from 'styled-components';
import { Button } from '@paljs/ui/Button';
import APICall from '../../utils/server_config';
import { useRouter } from 'next/router';

const SportsTab = () => {
  return (
    <div style={{ width: '100%' }}>
      <table style={{ width: '100%', border: '1px solid white' }}>
        <thead style={{ background: 'url(/images/totalbet/member_total/header.png)', backgroundSize: 'cover' }}>
          <tr>
            <td colSpan={6} style={{ color: 'white', height: '44px' }}>
              Max Credit / Bet Setting
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={6}>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '16%', height: '40px' }}>Sports:</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <select style={{ width: '100%' }}>
                          <option>Allowed</option>
                        </select>
                      </td>
                      <td style={{ width: '16%' }} />
                      <td style={{ width: '16%' }}>Min Bet: </td>
                      <td style={{ width: '16%' }}>
                        <input type="text" style={{ width: '100%' }} />
                      </td>
                      <td style={{ width: '16%' }}>Min: 1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '16%', height: '40px' }}>Credit:</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <input type="text" style={{ width: '100%' }} />
                      </td>
                      <td style={{ width: '16%', color: 'gray' }}>Max: 1,800,000.00</td>
                      <td style={{ width: '16%', height: '40px' }}>Max Bet</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <input type="text" style={{ width: '100%' }} />
                      </td>
                      <td style={{ width: '16%' }}>Max: 10,000,000.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '16%', height: '40px' }}>Password</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <input type="text" style={{ width: '100%' }} />
                      </td>
                      <td style={{ width: '16%', color: 'gray' }}>Max: 1,800,000.00</td>
                      <td style={{ width: '16%', height: '40px' }}>Max per match:</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <select style={{ width: '100%' }}>
                          <option>SGD</option>
                        </select>
                      </td>
                      <td style={{ width: '16%' }}>Max: 20,000,000.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table style={{ width: '100%', border: '1px solid white' }}>
        <thead style={{ background: 'url(/images/totalbet/member_total/header.png)', backgroundSize: 'cover' }}>
          <tr>
            <td colSpan={6} style={{ color: 'white', height: '44px' }}>
              Commission
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={6}>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '16%', height: '40px' }}>Sports:</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <select style={{ width: '100%' }}>
                          <option>Allowed</option>
                        </select>
                      </td>
                      <td style={{ width: '16%' }} />
                      <td style={{ width: '16%' }}>Min Bet: </td>
                      <td style={{ width: '16%' }}>
                        <input type="text" style={{ width: '100%' }} />
                      </td>
                      <td style={{ width: '16%' }}>Min: 1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '16%', height: '40px' }}>Credit:</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <input type="text" style={{ width: '100%' }} />
                      </td>
                      <td style={{ width: '16%', color: 'gray' }}>Max: 1,800,000.00</td>
                      <td style={{ width: '16%', height: '40px' }}>Max Bet</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <input type="text" style={{ width: '100%' }} />
                      </td>
                      <td style={{ width: '16%' }}>Max: 10,000,000.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '16%', height: '40px' }}>Password</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <input type="text" style={{ width: '100%' }} />
                      </td>
                      <td style={{ width: '16%', color: 'gray' }}>Max: 1,800,000.00</td>
                      <td style={{ width: '16%', height: '40px' }}>Max per match:</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <select style={{ width: '100%' }}>
                          <option>SGD</option>
                        </select>
                      </td>
                      <td style={{ width: '16%' }}>Max: 20,000,000.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table style={{ width: '100%', border: '1px solid white' }}>
        <thead style={{ background: 'url(/images/totalbet/member_total/header.png)', backgroundSize: 'cover' }}>
          <tr>
            <td colSpan={6} style={{ color: 'white', height: '44px' }}>
              Position Taking
            </td>
          </tr>
        </thead>
        <thead>
          <tr>
            <td style={{ width: '10%', height: '44px' }}>Type</td>
            <td style={{ width: '20%' }}>Min PT</td>
            <td style={{ width: '20%' }}>Forced PT</td>
            <td style={{ width: '10%' }}>Total</td>
            <td style={{ width: '20%' }}>Take Remaining</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={6}>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '10%', height: '40px' }}>PT1:</td>
                      <td style={{ width: '20%', height: '40px' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '10%' }}>100</td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '10%', height: '40px' }}>PT2:</td>
                      <td style={{ width: '20%', height: '40px' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '10%' }}>100</td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '10%', height: '40px' }}>Outlight:</td>
                      <td style={{ width: '20%', height: '40px' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '10%' }}>100</td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '10%', height: '40px' }}>AH LIVE:</td>
                      <td style={{ width: '20%', height: '40px' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '10%' }}>100</td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '10%', height: '40px' }}>OU Live:</td>
                      <td style={{ width: '20%', height: '40px' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '10%' }}>100</td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const GameTab = () => {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ lineHeight: '44px' }}> Product Setting </div>
      <table style={{ width: '100%', border: '1px solid white' }}>
        <thead style={{ background: 'url(/images/totalbet/member_total/header.png)', backgroundSize: 'cover' }}>
          <tr>
            <td colSpan={6} style={{ color: 'white', height: '44px' }}>
              Games
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={6}>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '16%', height: '40px' }}>Player Max Win:</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <select style={{ width: '100%' }}>
                          <option>Allowed</option>
                        </select>
                      </td>
                      <td style={{ width: '16%' }} />
                      <td style={{ width: '16%' }}>Player Max Lose: </td>
                      <td style={{ width: '16%' }}>
                        <input type="text" style={{ width: '100%' }} />
                      </td>
                      <td style={{ width: '16%' }}></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '16%', height: '40px' }}>Daily Reset:</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <input type="text" style={{ width: '100%' }} />
                      </td>
                      <td style={{ width: '16%', color: 'gray' }}></td>
                      <td style={{ width: '16%', height: '40px' }}></td>
                      <td style={{ width: '16%', height: '40px' }}></td>
                      <td style={{ width: '16%' }}></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table style={{ width: '100%', border: '1px solid white' }}>
        <thead style={{ background: 'url(/images/totalbet/member_total/header.png)', backgroundSize: 'cover' }}>
          <tr>
            <td colSpan={6} style={{ color: 'white', height: '44px' }}>
              Commission
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={6}>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '16%', height: '40px' }}>Game:</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <input style={{ width: '100%' }}></input>
                      </td>
                      <td style={{ width: '16%', color: 'gray' }}> % Max 10</td>
                      <td style={{ width: '16%' }}></td>
                      <td style={{ width: '16%' }}></td>
                      <td style={{ width: '16%' }}></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table style={{ width: '100%', border: '1px solid white' }}>
        <thead style={{ background: 'url(/images/totalbet/member_total/header.png)', backgroundSize: 'cover' }}>
          <tr>
            <td colSpan={6} style={{ color: 'white', height: '44px' }}>
              Position Taking
            </td>
          </tr>
        </thead>
        <thead>
          <tr>
            <td style={{ width: '10%', height: '44px' }}>Type</td>
            <td style={{ width: '20%' }}>Min PT</td>
            <td style={{ width: '20%' }}>Forced PT</td>
            <td style={{ width: '10%' }}>Total</td>
            <td style={{ width: '20%' }}>Take Remaining</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={6}>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '10%', height: '40px' }}>PT1:</td>
                      <td style={{ width: '20%', height: '40px' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '10%' }}>100</td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const LiveCasino = () => {
  return (
    <div style={{ width: '100%' }}>
      <table style={{ width: '100%', border: '1px solid white' }}>
        <thead style={{ background: 'url(/images/totalbet/member_total/header.png)', backgroundSize: 'cover' }}>
          <tr>
            <td colSpan={6} style={{ color: 'white', height: '44px' }}>
              Games
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={6}>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '16%', height: '40px' }}>Player Max Win:</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <select style={{ width: '100%' }}>
                          <option>Allowed</option>
                        </select>
                      </td>
                      <td style={{ width: '16%' }} />
                      <td style={{ width: '16%' }}>Player Max Lose: </td>
                      <td style={{ width: '16%' }}>
                        <input type="text" style={{ width: '100%' }} />
                      </td>
                      <td style={{ width: '16%' }}></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '16%', height: '40px' }}>Live Casino Min Bet:</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <select style={{ width: '100%' }}>
                          <option>Allowed</option>
                        </select>
                      </td>
                      <td style={{ width: '16%', color: 'gray' }}>Min: 1</td>
                      <td style={{ width: '16%' }}>Live Casino Max Bet: </td>
                      <td style={{ width: '16%' }}>
                        <input type="text" style={{ width: '100%' }} />
                      </td>
                      <td style={{ width: '16%', color: 'gray' }}>Max: 100000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '16%', height: '40px' }}>Daily Reset:</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <input type="text" style={{ width: '100%' }} />
                      </td>
                      <td style={{ width: '16%', color: 'gray' }}></td>
                      <td style={{ width: '16%', height: '40px' }}></td>
                      <td style={{ width: '16%', height: '40px' }}></td>
                      <td style={{ width: '16%' }}></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table style={{ width: '100%', border: '1px solid white' }}>
        <thead style={{ background: 'url(/images/totalbet/member_total/header.png)', backgroundSize: 'cover' }}>
          <tr>
            <td colSpan={6} style={{ color: 'white', height: '44px' }}>
              Table Limit
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={6}>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '16%', height: '40px' }}>Table Limit:</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <input style={{ width: '100%' }}></input>
                      </td>
                      <td style={{ width: '16%', color: 'gray' }}>Max: 4 ( 1 Low, 2 : Medium, 3: High, 4 : VIP)</td>
                      <td style={{ width: '16%' }}></td>
                      <td style={{ width: '16%' }}></td>
                      <td style={{ width: '16%' }}></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table style={{ width: '100%', border: '1px solid white' }}>
        <thead style={{ background: 'url(/images/totalbet/member_total/header.png)', backgroundSize: 'cover' }}>
          <tr>
            <td colSpan={6} style={{ color: 'white', height: '44px' }}>
              Commission
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={6}>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '16%', height: '40px' }}>Commission:</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <input style={{ width: '100%' }}></input>
                      </td>
                      <td style={{ width: '16%', color: 'gray' }}>Max: 10%</td>
                      <td style={{ width: '16%' }}></td>
                      <td style={{ width: '16%' }}></td>
                      <td style={{ width: '16%' }}></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table style={{ width: '100%', border: '1px solid white' }}>
        <thead style={{ background: 'url(/images/totalbet/member_total/header.png)', backgroundSize: 'cover' }}>
          <tr>
            <td colSpan={6} style={{ color: 'white', height: '44px' }}>
              Position Taking
            </td>
          </tr>
        </thead>
        <thead>
          <tr>
            <td style={{ width: '10%', height: '44px' }}>Type</td>
            <td style={{ width: '20%' }}>Min PT</td>
            <td style={{ width: '20%' }}>Forced PT</td>
            <td style={{ width: '10%' }}>Total</td>
            <td style={{ width: '20%' }}>Take Remaining</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={6}>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '10%', height: '40px' }}>Live Casino:</td>
                      <td style={{ width: '20%', height: '40px' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '10%' }}>100</td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const GameProvider = () => {
  var colTitles = [
    'WAN MEI',
    'Pragmatic Play',
    'Big Gaming',
    'Real Time Gaming',
    'IONLC',
    'WORLDMatch',
    'IDN Live',
    'SaGaming',
    'ALLBET',
    'Green Dragon',
    'RedTiger Casino',
    'Pragmatic Play Casino',
    'Joker Gaming',
    'CQNine',
    'Funky Games',
    'Evolution Gaming',
    'Red Tiger',
    'Yggdrasil',
    'Huawei 4D',
    'Flow Gaming',
    'Saba',
    'IDNPoker',
    'SV388Cockfighting',
    'PG Soft',
    'GiocoPlus',
    'MicroGaming',
    'LionGaming',
    'Default',
  ];
  return (
    <div style={{ width: '100%' }}>
      <table style={{ width: '100%', border: '1px solid white' }}>
        <thead style={{ background: 'url(/images/totalbet/member_total/header.png)', backgroundSize: 'cover' }}>
          <tr>
            <td colSpan={6} style={{ color: 'white', height: '44px' }}>
              Position Taking
            </td>
          </tr>
        </thead>
        <thead>
          <tr>
            <td style={{ width: '10%', height: '44px' }}>Type</td>
            <td style={{ width: '20%' }}>Min PT</td>
            <td style={{ width: '20%' }}>Forced PT</td>
            <td style={{ width: '10%' }}>Total</td>
            <td style={{ width: '20%' }}>Take Remaining</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={6}>
              {colTitles.map((r) => {
                return (
                  <div className="grayRow">
                    <table style={{ borderCollapse: 'collapse' }}>
                      <tbody>
                        <tr>
                          <td style={{ width: '10%', height: '40px', textAlign: 'left', paddingLeft: '1rem' }}>{r}:</td>
                          <td style={{ width: '20%', height: '40px' }}>
                            <select style={{ width: '80%' }}>
                              <option>0</option>
                            </select>
                          </td>
                          <td style={{ width: '20%' }}>
                            <select style={{ width: '80%' }}>
                              <option>0</option>
                            </select>
                          </td>
                          <td style={{ width: '10%' }}>100</td>
                          <td style={{ width: '20%' }}>
                            <select style={{ width: '80%' }}>
                              <option>0</option>
                            </select>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const ThirdPartyService = () => {
  return (
    <div style={{ width: '100%' }}>
      <table style={{ width: '100%', border: '1px solid white' }}>
        <thead style={{ background: 'url(/images/totalbet/member_total/header.png)', backgroundSize: 'cover' }}>
          <tr>
            <td colSpan={6} style={{ color: 'white', height: '44px' }}>
              Third Party Sports
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={6}>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '16%', height: '40px' }}>Sports:</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <select style={{ width: '100%' }}>
                          <option>Saba Sports</option>
                        </select>
                      </td>
                      <td style={{ width: '16%' }} />
                      <td style={{ width: '16%' }}></td>
                      <td style={{ width: '16%' }}></td>
                      <td style={{ width: '16%' }}></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table style={{ width: '100%', border: '1px solid white' }}>
        <thead style={{ background: 'url(/images/totalbet/member_total/header.png)', backgroundSize: 'cover' }}>
          <tr>
            <td colSpan={6} style={{ color: 'white', height: '44px' }}>
              Commission
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={6}>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '16%', height: '40px' }}>Sports:</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <select style={{ width: '100%' }}>
                          <option>Allowed</option>
                        </select>
                      </td>
                      <td style={{ width: '16%' }} />
                      <td style={{ width: '16%' }}>Min Bet: </td>
                      <td style={{ width: '16%' }}>
                        <input type="text" style={{ width: '100%' }} />
                      </td>
                      <td style={{ width: '16%' }}>Min: 1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '16%', height: '40px' }}>Credit:</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <input type="text" style={{ width: '100%' }} />
                      </td>
                      <td style={{ width: '16%', color: 'gray' }}>Max: 1,800,000.00</td>
                      <td style={{ width: '16%', height: '40px' }}>Max Bet</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <input type="text" style={{ width: '100%' }} />
                      </td>
                      <td style={{ width: '16%' }}>Max: 10,000,000.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '16%', height: '40px' }}>Password</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <input type="text" style={{ width: '100%' }} />
                      </td>
                      <td style={{ width: '16%', color: 'gray' }}>Max: 1,800,000.00</td>
                      <td style={{ width: '16%', height: '40px' }}>Max per match:</td>
                      <td style={{ width: '16%', height: '40px' }}>
                        <select style={{ width: '100%' }}>
                          <option>SGD</option>
                        </select>
                      </td>
                      <td style={{ width: '16%' }}>Max: 20,000,000.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table style={{ width: '100%', border: '1px solid white' }}>
        <thead style={{ background: 'url(/images/totalbet/member_total/header.png)', backgroundSize: 'cover' }}>
          <tr>
            <td colSpan={6} style={{ color: 'white', height: '44px' }}>
              Position Taking
            </td>
          </tr>
        </thead>
        <thead>
          <tr>
            <td style={{ width: '10%', height: '44px' }}>Type</td>
            <td style={{ width: '20%' }}>Min PT</td>
            <td style={{ width: '20%' }}>Forced PT</td>
            <td style={{ width: '10%' }}>Total</td>
            <td style={{ width: '20%' }}>Take Remaining</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={6}>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '10%', height: '40px' }}>PT1:</td>
                      <td style={{ width: '20%', height: '40px' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '10%' }}>100</td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '10%', height: '40px' }}>PT2:</td>
                      <td style={{ width: '20%', height: '40px' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '10%' }}>100</td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '10%', height: '40px' }}>Outlight:</td>
                      <td style={{ width: '20%', height: '40px' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '10%' }}>100</td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '10%', height: '40px' }}>AH LIVE:</td>
                      <td style={{ width: '20%', height: '40px' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '10%' }}>100</td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grayRow">
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '10%', height: '40px' }}>OU Live:</td>
                      <td style={{ width: '20%', height: '40px' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                      <td style={{ width: '10%' }}>100</td>
                      <td style={{ width: '20%' }}>
                        <select style={{ width: '80%' }}>
                          <option>0</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const AgentReport = () => {
  const router = useRouter();
  const createAccount = () => {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var phone = document.getElementById('phone').value;
    var currency = document.getElementById('currency').value;
    var agent_level = document.getElementById('agent_level').value;
    var email = document.getElementById('email').value;
    APICall(
      '/api/signup',
      {
        username,
        password,
        firstname,
        lastname,
        phone,
        currency,
        agent_level,
        email,
      },
      (e) => {
        alert('Successfully Created');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('firstname').value = '';
        document.getElementById('lastname').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('currency').value = 'USD';
        document.getElementById('agent_level').value = 'MA';
        document.getElementById('email').value = '';
      },
      (e) => {
        if (e == 'login_issue') {
          router.push('/auth/login');
        } else if (e == -10) {
          alert('Already existing username or email');
        } else alert('Failed to create the new Agent');
      },
    );
  };

  const CustomCSS = createGlobalStyle`
${() => css`
  .auth-layout .main-content {
    background-color: #e7e8ee;
    padding-top: 1rem;
  }
  .contentHeaderImage {
    border-width: 0rem;
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
    left: 80px;
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
    background-size: cover;
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

  div.middle-title-area {
    background: url(/images/sales/agent_group_header_bkg.png);
    background-size: cover;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    color: white;
  }
  div.middle-title-area div.button:hover {
    background: #fff3;
  }
  div.middle-title-area div {
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    color: white;
  }
  div.middle-title-area div.button {
    background: #0000;
    border: 1px solid #fff9;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 0.5rem;
    float: left;
  }
`}`;
  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <Layout title="Accordions">
      <CustomCSS />
      <Row>
        <Col className="centerAll" breakPoint={{ xs: 12, md: 12 }}>
          <img src="/images/logo_black.png" className="contentHeaderImage" />
          <div className="header-white">
            <div className="blue-title">New Agent</div>
          </div>
          <div className="content-area">
            <table style={{ width: '100%', border: '1px solid white' }}>
              <thead style={{ background: 'url(/images/totalbet/member_total/header.png)', backgroundSize: 'cover' }}>
                <tr>
                  <td colSpan={6} style={{ color: 'white', height: '44px' }}>
                    User Information
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6}>
                    <div className="grayRow">
                      <table style={{ borderCollapse: 'collapse' }}>
                        <tbody>
                          <tr>
                            <td style={{ width: '16%', height: '40px' }}>Account Type</td>
                            <td style={{ width: '16%', height: '40px' }}>
                              <select style={{ width: '100%' }} id="agent_level">
                                <option value="A">Agent</option>
                              </select>
                            </td>
                            <td style={{ width: '16%' }} />
                            <td style={{ width: '16%' }} />
                            <td style={{ width: '16%' }} />
                            <td style={{ width: '16%' }} />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="grayRow">
                      <table style={{ borderCollapse: 'collapse' }}>
                        <tbody>
                          <tr>
                            <td style={{ width: '16%', height: '40px' }}>UserName</td>
                            <td style={{ width: '16%', height: '40px' }}>
                              <input type="text" style={{ width: '100%' }} id="username" />
                            </td>
                            <td style={{ width: '16%', color: 'gray' }}>*Required</td>
                            <td style={{ width: '16%', height: '40px' }}>Email</td>
                            <td style={{ width: '16%', height: '40px' }}>
                              <input type="text" style={{ width: '100%' }} id="email" />
                            </td>
                            <td style={{ width: '16%' }}></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="grayRow">
                      <table style={{ borderCollapse: 'collapse' }}>
                        <tbody>
                          <tr>
                            <td style={{ width: '16%', height: '40px' }}>Password</td>
                            <td style={{ width: '16%', height: '40px' }}>
                              <input type="password" style={{ width: '100%' }} id="password" />
                            </td>
                            <td style={{ width: '16%', color: 'gray' }}>*Required</td>
                            <td style={{ width: '16%', height: '40px' }}>Currency</td>
                            <td style={{ width: '16%', height: '40px' }}>
                              <select style={{ width: '100%' }} id="currency">
                                <option value="USD">USD</option>
                                <option value="SGD">SGD</option>
                              </select>
                            </td>
                            <td style={{ width: '16%' }}></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="grayRow">
                      <table style={{ borderCollapse: 'collapse' }}>
                        <tbody>
                          <tr>
                            <td style={{ width: '16%', height: '40px' }}>First Name</td>
                            <td style={{ width: '16%', height: '40px' }}>
                              <input type="text" style={{ width: '100%' }} id="firstname" />
                            </td>
                            <td style={{ width: '16%' }}></td>
                            <td style={{ width: '16%', height: '40px' }}>Phone</td>
                            <td style={{ width: '16%', height: '40px' }}>
                              <input type="text" style={{ width: '100%' }} id="phone" />
                            </td>
                            <td style={{ width: '16%' }}></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="grayRow">
                      <table style={{ borderCollapse: 'collapse' }}>
                        <tbody>
                          <tr>
                            <td style={{ width: '16%', height: '40px' }}>Last Name</td>
                            <td style={{ width: '16%', height: '40px' }}>
                              <input type="text" style={{ width: '100%' }} id="lastname" />
                            </td>
                            <td style={{ width: '16%' }}></td>
                            <td style={{ width: '16%' }} />
                            <td style={{ width: '16%' }} />
                            <td style={{ width: '16%' }} />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div style={{ position: 'relative', marginTop: '2rem', display: 'flex' }}>
              <div style={{ lineHeight: '40px', marginLeft: '1rem' }}>Product: </div>
              <div className="tabs">
                <div className={'tab ' + (selectedTab === 0 && 'selected')} onClick={() => setSelectedTab(0)}>
                  Sports
                </div>
                <div className={'tab ' + (selectedTab === 1 && 'selected')} onClick={() => setSelectedTab(1)}>
                  Game
                </div>
                <div className={'tab ' + (selectedTab === 2 && 'selected')} onClick={() => setSelectedTab(2)}>
                  Live Casino
                </div>
                <div className={'tab ' + (selectedTab === 3 && 'selected')} onClick={() => setSelectedTab(3)}>
                  Game Provider
                </div>
                <div className={'tab ' + (selectedTab === 4 && 'selected')} onClick={() => setSelectedTab(4)}>
                  Third Party Sports
                </div>
              </div>
            </div>
            {selectedTab == 0 ? <SportsTab /> : null}
            {selectedTab == 1 ? <GameTab /> : null}
            {selectedTab == 2 ? <LiveCasino /> : null}
            {selectedTab == 3 ? <GameProvider /> : null}
            {selectedTab == 4 ? <ThirdPartyService /> : null}
            <Col breakPoint={{ xs: 12 }}>
              <Button
                style={{
                  border: '0px',
                  background: 'linear-gradient(89.33deg, #0075FF 0.58%, #00D1FF 104.03%)',
                  color: 'white',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                }}
                onClick={createAccount}
              >
                Create Account
              </Button>
            </Col>
            <table style={{ marginTop: '2rem' }}>
              <tbody>
                <tr>
                  <td>
                    <img src="/images/sales/Key_fill.png" />
                  </td>
                  <td style={{ textAlign: 'left' }}>Password Policy</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/sales/Subtract.png" />
                  </td>
                  <td style={{ textAlign: 'left' }}>Your password length must between 6-20 characters</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/sales/Subtract.png" />
                  </td>
                  <td style={{ textAlign: 'left' }}>
                    Your password must include a combination of characters (uppercase or lowercase letters) and numbers
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/sales/Subtract.png" />
                  </td>
                  <td style={{ textAlign: 'left' }}>
                    Your password must not contain your login name first and last name
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default AgentReport;
