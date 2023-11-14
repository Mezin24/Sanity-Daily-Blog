'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  route: string;
}

const ClientSideRoute = ({ children, route }: Props) => {
  return <Link href={route}>{children}</Link>;
};

export default ClientSideRoute;
