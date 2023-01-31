'use client';

import { useState, useCallback, Suspense } from 'react';

import { Cards, Modal } from '@/components/molecule';
import StoreThumb from './StoreThumb';
import StoreDetail from './StoreDetail';

import useGetStoreDetail from '../queries/useGetStoreDetail';

import { IStoreData } from '@/types/store';

interface IStoreProps {
  stores: IStoreData[];
}

export function Store({ stores }: IStoreProps) {
  const [storeId, setStoreId] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const { data: storeDetail, isSuccess: getSuccess } = useGetStoreDetail(storeId);

  const handleThumbClick = useCallback((id: number) => {
    setStoreId(id);
    toggleModal();
  }, []);

  const toggleModal = useCallback(() => {
    setShowModal((prev) => !prev);
  }, []);

  return (
    <>
      <Cards>
        {stores?.map((store, idx) => (
          <StoreThumb key={`store-thumb-${idx}`} id={store.id} src={store.thumb} onClick={handleThumbClick} />
        ))}
      </Cards>
      <Modal isOpen={showModal} onClose={toggleModal}>
        {getSuccess && <StoreDetail data={storeDetail} />}
      </Modal>
    </>
  );
}

export default Store;
