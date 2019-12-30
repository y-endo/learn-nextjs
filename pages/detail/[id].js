import React from 'react';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';

export default function Detail() {
  const router = useRouter();
  const content = (
    <div>
      <h1>Detail {router.query.id}</h1>
    </div>
  );

  return <Layout content={content} />;
}
