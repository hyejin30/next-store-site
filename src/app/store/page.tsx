import Store from '@/pages/Store';

async function getStores() {
  const res = await fetch('http://localhost:9000/stores', { cache: 'force-cache' });
  const stores = await res.json();
  return stores;
}

async function StorePage() {
  const stores = await getStores();
  return <Store stores={stores} />;
}

export default StorePage;
