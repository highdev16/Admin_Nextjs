import { MenuItemType } from '@paljs/ui/types';

const items: MenuItemType[] = [
  // {
  //   title: 'Home Page',
  //   icon: { name: 'home' },
  //   link: { href: '/dashboard' },
  // },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  // {
  //   title: 'Extra Components',
  //   icon: { name: 'star-outline' },
  //   children: [
  //     {
  //       title: 'Accordion',
  //       link: { href: '/extra-components/accordion' },
  //     },
  //     {
  //       title: 'Actions',
  //       link: { href: '/extra-components/actions' },
  //     },
  //     {
  //       title: 'Alert',
  //       link: { href: '/extra-components/alert' },
  //     },
  //     {
  //       title: 'List',
  //       link: { href: '/extra-components/list' },
  //     },
  //     {
  //       title: 'Spinner',
  //       link: { href: '/extra-components/spinner' },
  //     },
  //     {
  //       title: 'Progress Bar',
  //       link: { href: '/extra-components/progress' },
  //     },
  //     {
  //       title: 'Tabs',
  //       link: { href: '/extra-components/tabs' },
  //     },
  //     {
  //       title: 'Chat',
  //       link: { href: '/extra-components/chat' },
  //     },
  //     {
  //       title: 'Cards',
  //       link: { href: '/extra-components/cards' },
  //     },
  //     {
  //       title: 'Flip Card',
  //       link: { href: '/extra-components/flip-card' },
  //     },
  //     {
  //       title: 'Reveal Card',
  //       link: { href: '/extra-components/reveal-card' },
  //     },
  //   ],
  // },
  // {
  //   title: 'Forms',
  //   icon: { name: 'edit-2-outline' },
  //   children: [
  //     {
  //       title: 'Inputs',
  //       link: { href: '/forms/inputs' },
  //     },
  //     {
  //       title: 'Layout',
  //       link: { href: '/forms/form-layout' },
  //     },
  //     {
  //       title: 'Buttons',
  //       link: { href: '/forms/buttons' },
  //     },
  //     {
  //       title: 'Select',
  //       link: { href: '/forms/select' },
  //     },
  //   ],
  // },
  // {
  //   title: 'UI Features',
  //   icon: { name: 'keypad-outline' },
  //   children: [
  //     {
  //       title: 'Grid',
  //       link: { href: '/ui-features/grid' },
  //     },
  //     {
  //       title: 'Animated Searches',
  //       link: { href: '/ui-features/search' },
  //     },
  //   ],
  // },
  // {
  //   title: 'Modal & Overlays',
  //   icon: { name: 'browser-outline' },
  //   children: [
  //     {
  //       title: 'Popover',
  //       link: { href: '/modal-overlays/popover' },
  //     },
  //     {
  //       title: 'Tooltip',
  //       link: { href: '/modal-overlays/tooltip' },
  //     },
  //     {
  //       title: 'Toastr',
  //       link: { href: '/modal-overlays/toastr' },
  //     },
  //   ],
  // },
  // {
  //   title: 'Editors',
  //   icon: { name: 'text-outline' },
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: { href: '/editors/tinymce' },
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: { href: '/editors/ckeditor' },
  //     },
  //   ],
  // },
  // {
  //   title: 'Miscellaneous',
  //   icon: { name: 'shuffle-2-outline' },
  //   children: [
  //     {
  //       title: '404',
  //       link: { href: '/miscellaneous/404' },
  //     },
  //   ],
  // },

  {
    title: 'Auth',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Login',
        link: { href: '/auth/login' },
      },
      {
        title: 'Confirm Login',
        link: { href: '/auth/confirm-login' },
      },
      // {
      //   title: 'Request Password',
      //   link: { href: '/auth/request-password' },
      // },
      // {
      //   title: 'Reset Password',
      //   link: { href: '/auth/reset-password' },
      // },
    ],
  },
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
    title: 'Member Management',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'New SH',
        link: { href: '/member/new_sh' },
      },
      {
        title: 'New SSMA',
        link: { href: '/member/new_ssma' },
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
        link: { href: '/member/credit' },
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
    ],
  },
  {
    title: 'Sales team management',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Create Agent',
        link: { href: '/sales/agent_create' },
      },
      {
        title: 'Agent Group',
        link: { href: '/sales/agent_group' },
      },
      {
        title: 'Agent Report',
        link: { href: '/sales/agent_report' },
      },
      {
        title: 'Sales team commission report',
        link: { href: '/sales/commission_report' },
      },
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
    ],
  },
  {
    title: 'Report',
    icon: { name: 'lock-outline' },
    children: [],
  },
  {
    title: 'Account',
    icon: { name: 'lock-outline' },
    children: [],
  },
  {
    title: 'Transfer',
    icon: { name: 'lock-outline' },
    children: [],
  },
  {
    title: 'Security',
    icon: { name: 'lock-outline' },
    children: [],
  },
  {
    title: 'Sub Account',
    icon: { name: 'lock-outline' },
    children: [],
  },
  {
    title: 'Transaction',
    icon: { name: 'lock-outline' },
    children: [],
  },
  {
    title: 'Game & Provider',
    icon: { name: 'lock-outline' },
    children: [],
  },
  {
    title: 'Resource',
    icon: { name: 'lock-outline' },
    children: [],
  },
  {
    title: 'Web Admin',
    icon: { name: 'lock-outline' },
    children: [],
  },
  {
    title: 'Company',
    icon: { name: 'lock-outline' },
    children: [],
  },
  {
    title: 'Monitor ',
    icon: { name: 'lock-outline' },
    children: [],
  },
];

export default items;
