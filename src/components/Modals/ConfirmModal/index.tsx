import React from 'react';

import Checkmark from '@/assets/icons/checkmark.png';
import { ModalContainer } from '@/components/ModalContainer';
import { Portal } from '@/components/Portal';

import { IConfirmModalProps } from './interface';

import './style.css';

export const ConfirmModal = ({ children, onPortalClose }: IConfirmModalProps) => {
  return (
    <Portal onPortalClose={onPortalClose}>
      <ModalContainer onPortalClose={onPortalClose}>
        <img src={Checkmark} className="checkmark" alt="done" />
        {children}
      </ModalContainer>
    </Portal>
  );
};
