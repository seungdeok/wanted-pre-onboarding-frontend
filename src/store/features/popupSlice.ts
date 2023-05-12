import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PopupType = 'alert' | 'confirm';

interface Params {
  popupType: PopupType;
  isOpen: boolean;
  message: string;
  onApprove: (() => void) | null;
}

const initialState: Params = {
  popupType: 'confirm',
  isOpen: false,
  message: '',
  onApprove: null,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup(
      state,
      action: PayloadAction<{
        popupType: PopupType;
        message: string;
        onApprove: () => void;
      }>,
    ) {
      const { popupType, message, onApprove } = action.payload;
      state.isOpen = true;
      state.popupType = popupType;
      state.message = message;
      state.onApprove = onApprove;
    },
    closePopup(state) {
      const { popupType, isOpen, message, onApprove } = initialState;
      state.popupType = popupType;
      state.isOpen = isOpen;
      state.message = message;
      state.onApprove = onApprove;
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;
export const popupReducer = popupSlice.reducer;
