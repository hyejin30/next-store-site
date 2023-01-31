'use client';

import { Cards } from '@/components/molecule';
import Card from './Card';

import { ICardData } from '@/types/store';

interface IStoreProps {
  stores: ICardData[];
}

export function Store({ stores }: IStoreProps) {
  return (
    <Cards>
      {stores.map((store, idx) => (
        <Card key={`card-${idx}`} data={store} />
      ))}
    </Cards>
  );
}

export default Store;
