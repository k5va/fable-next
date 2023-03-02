import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MAX_CITY_LENGTH,
  MAX_COMMENT_LENGTH,
  MAX_EMAIL_LENGTH,
  MAX_LOYALTY_CARD_LENGTH,
  MIN_FIELD_LENGTH,
} from '../const';
import { OrderFormFields } from '../types';

export const useOrderFormError = () => {
  const { t } = useTranslation();

  return useCallback(
    (field: keyof OrderFormFields, errorType?: unknown) => {
      if (!errorType) {
        return;
      }

      if (errorType === 'required') {
        return t('order.errors.required');
      }

      if (errorType === 'too_small') {
        return t('order.errors.minLength', { minLength: MIN_FIELD_LENGTH });
      }

      if (errorType === 'too_big') {
        let maxLength = 0;
        switch (field) {
          case 'city':
            maxLength = MAX_CITY_LENGTH;
            break;
          case 'email':
            maxLength = MAX_EMAIL_LENGTH;
            break;
          case 'loyaltyCard':
            maxLength = MAX_LOYALTY_CARD_LENGTH;
            break;
          case 'comment':
            maxLength = MAX_COMMENT_LENGTH;
            break;
        }

        return t('order.errors.maxLength', { maxLength });
      }

      if (field === 'email') {
        return t('order.errors.email');
      }
    },
    [t]
  );
};
