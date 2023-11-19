import { useRecoilState } from 'recoil';
import { modalIsOpenState } from 'recoil/atoms/commonAtoms';
import * as styled from './ChatBtn.styles';

export const ChatBtn = () => {
  const [modalIsOpen, setModalIsOpen] = useRecoilState(modalIsOpenState);

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <styled.ChatButton onClick={openModal} $isOpen={modalIsOpen}>
      <styled.Icon />
    </styled.ChatButton>
  );
};
