export type LoginState = {
  success?: boolean;
  statusCode?: number;
  message?: string;
  data?: {
    accessToken?: string;
    refreshToken?: string;
  };
  error?: LoginFormValidation;
};

export type LoginFormValidation = {
  password?: string;
  email?: string;
};


