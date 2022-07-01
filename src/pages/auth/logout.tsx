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

export default function Logout() {
  const router = useRouter();
  React.useEffect(() => {
    document.cookie = '';
    localStorage.removeItem('user_info');
    router.push('/auth/login');
  }, []);
  return <div />;
}
