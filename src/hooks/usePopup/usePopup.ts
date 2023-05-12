import { useDispatch, useSelector } from 'react-redux';
import { openPopup, closePopup, PopupType } from '@/store/features/popupSlice';
import { RootState } from '@/store';

export const usePopup = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.popup.isOpen);
  const isConfirm = useSelector(
    (state: RootState) => state.popup.popupType === 'confirm',
  );
  const popupMessage = useSelector((state: RootState) => state.popup.message);
  const approve = useSelector((state: RootState) => state.popup.onApprove);

  const open = (popupType: PopupType, message: string, onApprove: () => void) =>
    dispatch(openPopup({ popupType, message, onApprove }));

  const close = () => dispatch(closePopup());

  return { isOpen, isConfirm, popupMessage, open, close, approve };
};
