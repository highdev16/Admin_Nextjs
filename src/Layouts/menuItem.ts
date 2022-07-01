import { MenuItemType } from '@paljs/ui/types';

const items = (user) => [
  // {
  //   title: 'Auth',
  //   icon: { name: 'lock-outline' },
  //   children: [
  //     {
  //       title: 'Login',
  //       link: { href: '/auth/login' },
  //     },
  //     {
  //       title: 'Confirm Login',
  //       link: { href: '/auth/confirm-login' },
  //     },
  //   ],
  // },
  {
    title: 'Total Bet',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Dashboard',
        link: { href: '/totalbet/dashboard' },
      },
      {
        title: 'Member Total',
        link: { href: '/totalbet/membertotal' },
      },
      {
        title: 'Simple FT HDP & OU',
        link: { href: '/totalbet/simple_ft_hdp' },
      },
      {
        title: 'Simple HT HDP & OU',
        link: { href: '/totalbet/simple_ht_hdp' },
      },
      {
        title: 'Simple HT OE',
        link: { href: '/totalbet/simple_ht_oe' },
      },
      {
        title: 'Simple FT OE',
        link: { href: '/totalbet/simple_ft_oe' },
      },
      {
        title: '1X2',
        link: { href: '/totalbet/1x2' },
      },
      {
        title: 'Double Chance',
        link: { href: '/totalbet/double_chance' },
      },
      {
        title: 'Money Line',
        link: { href: '/totalbet/money_line' },
      },
      {
        title: 'Total Gold',
        link: { href: '/totalbet/total_gold' },
      },
      {
        title: 'HT/FT',
        link: { href: '/totalbet/ht_ft' },
      },
      {
        title: 'FG/LG',
        link: { href: '/totalbet/fg_lg' },
      },
      {
        title: 'Asian LX2',
        link: { href: '/totalbet/asian_lx2' },
      },
    ],
  },
  {
    title: 'Sales team management',
    icon: { name: 'lock-outline' },
    children: [
      // {
      //   title: user['aLevel'] != 'admin' && user['aLevel'] != 'SH' ? 'Create Agent' : '',
      //   link: { href: '/sales/agent_create' },
      // },
      {
        title: 'Agent Group',
        link: { href: '/sales/agent_group' },
      },
      {
        title: 'Agent Report',
        link: { href: '/sales/agent_report' },
      },
      // {
      //   title: 'Sales team commission report',
      //   link: { href: '/sales/commission_report' },
      // },
      {
        title: 'Player List',
        link: { href: '/sales/player_list' },
      },
      {
        title: 'Player Report',
        link: { href: '/sales/player_report' },
      },
      {
        title: 'Betting History',
        link: { href: '/sales/betting_history' },
      },
      {
        title: 'All Transaction Logs',
        link: { href: '/sales/all_transaction_log' },
      },
    ].filter((s) => s.title.length > 0),
  },
  {
    title: 'Member Management',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: user['aLevel'] == 'admin' ? 'New SH' : '',
        link: { href: '/member/new_sh' },
      },
      {
        title: user['aLevel'] == 'admin' || user['aLevel'] == 'SH' ? 'New SSMA' : '',
        link: { href: '/member/new_ssma' },
      },
      {
        title: user['aLevel'] == 'SSMA' ? 'New SMA' : '',
        link: { href: '/member/new_sma' },
      },
      {
        title: user['aLevel'] == 'SMA' ? 'New MA' : '',
        link: { href: '/member/new_ma' },
      },
      {
        title: user['aLevel'] == 'MA' ? 'New Agent' : '',
        link: { href: '/member/new_agent' },
      },
      {
        title: 'Account List',
        link: { href: '/member/account_list' },
      },
      {
        title: 'Credit Bet Setting',
        link: { href: '/member/credit_bet_setting' },
      },
      {
        title: 'Commission',
        link: { href: '/member/commission' },
      },
      {
        title: 'Credit',
        link: { href: '/member/credit1' },
      },
      {
        title: 'Preset PT',
        link: { href: '/member/preset_pt' },
      },
      {
        title: 'Effective PT',
        link: { href: '/member/effective_pt' },
      },
      {
        title: 'Credit & Balance',
        link: { href: '/member/credit_balance' },
      },
      {
        title: 'Update League Bet Setting',
        link: { href: '/member/update_league_bet_setting' },
      },
      {
        title: 'Update League Group Bet Setting',
        link: { href: '/member/update_league_groupbet_setting' },
      },
      {
        title: 'Third Party Game Bet Setting',
        link: { href: '/member/third_party_game_bet_setting' },
      },
    ].filter((s) => s.title.length),
  },

  {
    title: 'Report',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Win Lose by Player',
        link: { href: '/report/winlose_by_player' },
      },
      {
        title: 'Win Lose Simple',
        link: { href: '/report/winlose_simple' },
      },
      {
        title: 'Win Lose Chart Report',
        link: { href: '/report/winlose_chart_report' },
      },
      {
        title: 'Cancelled Bet List',
        link: { href: '/report/cancelled_bet_list' },
      },
      {
        title: 'Match Result',
        link: { href: '/report/match_result' },
      },
    ],
  },
  {
    title: 'Account',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Balance',
        link: { href: '/account/balance' },
      },
      {
        title: 'Log out',
        link: { href: '/account/logout' },
      },
    ],
  },
  {
    title: 'Transfer',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Full Transfer',
        link: { href: '/transfer/full_transfer' },
      },
    ],
  },
  {
    title: 'Security',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Change Password',
        link: { href: '/security/change_password' },
      },
      {
        title: 'Change Login Name',
        link: { href: '/security/change_login_name' },
      },
    ],
  },
  {
    title: 'Sub Account',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Create Sub Account',
        link: { href: '/subaccount/create_sub_account' },
      },
      {
        title: 'Sub Account List',
        link: { href: '/subaccount/sub_account_list' },
      },
    ],
  },
  {
    title: 'Transaction',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Balance History',
        link: { href: '/transaction/balance_history' },
      },
    ],
  },
  {
    title: 'Game & Provider',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Game List',
        link: { href: '/game_provider/game_list' },
      },
    ],
  },
  {
    title: 'Resource',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Manage',
        link: { href: '/resource/manage_n' },
      },
      {
        title: 'Manage Simple',
        link: { href: '/resource/manage_simple' },
      },
    ],
  },
  {
    title: 'Web Admin',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Customize Themes',
        link: { href: '/webadmin/customize_themes' },
      },
      {
        title: 'Admin Control',
        link: { href: '/webadmin/admin_control' },
      },
    ],
  },
  {
    title: 'Company',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Currency',
        link: { href: '/company/currency' },
      },
      {
        title: 'Language',
        link: { href: '/company/language' },
      },
    ],
  },
  {
    title: 'Monitor ',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Running Order',
        link: { href: '/monitor/running_order' },
      },
      {
        title: 'Forecast',
        link: { href: '/monitor/forecast' },
      },
      {
        title: 'Last 50 page',
        link: { href: '/monitor/last_50_page' },
      },
    ],
  },
];

export default items;
