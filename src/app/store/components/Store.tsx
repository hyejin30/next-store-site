'use client';

import { useState, useCallback } from 'react';

import { Cards, Modal } from '@/components/molecule';
import CardThumb from './Card/CardThumb';
import CardDetail from './Card/CardDetail';

import useGetStoreDetail from '../queries/useGetStoreDetail';
import { ICardData } from '@/types/store';

interface IStoreProps {
  stores: ICardData[];
}

export function Store({ stores }: IStoreProps) {
  const [storeId, setStoreId] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const { data } = useGetStoreDetail(storeId);

  const handleThumbClick = useCallback((id: number) => {
    setStoreId(id);
  }, []);

  const toggleModal = useCallback(() => {
    setShowModal((prev) => !prev);
  }, []);

  <>
    <Cards>
      {stores.map((store, idx) => (
        <CardThumb key={`store-${idx}`} id={store.id} src={store.thumb} onClick={handleThumbClick} />
      ))}
    </Cards>
    <Modal isOpen={showModal} onClose={toggleModal}>
      <CardDetail data={data} />
    </Modal>
  </>;
}

export default Store;
