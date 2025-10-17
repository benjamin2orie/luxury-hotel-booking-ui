//fan login types definition

import { ReactElement } from 'react';

export type LoginProps = {
  name: string;
  password: string;
  rememberMe: boolean;
};

export type LoginFormProps = {
  onSubmit: (data: LoginProps) => void;
};

export type FanProps = {
  id: number;
  name: string;
  icon: ReactElement;
};

export type RegisterProps = {
  title: string;
  firstname: string;
  lastname: string;
  email: string;
  emailConfirmation: string;
  country: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  policyAgreement: boolean;
  servicePolicy: boolean;
};

export interface BookingDrawerProps {
  open: boolean;
  onClose: () => void;
  location: string | null;
  services: string | null;
  setServices: (value: string | null) => void;
  setOpen: (value: boolean) => void;
}
