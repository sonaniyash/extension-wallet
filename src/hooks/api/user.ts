import { useMutation } from "react-query";
import { CreateAccountData } from "../../context/models";
import api from "../../services";


export const useCreateAccount = () => {
  const { mutateAsync, isLoading } = useMutation(
    (accountData: CreateAccountData) => api.createAccount(accountData),
    {
      onSuccess: () => {
        console.log("User registered successfully");
      },
      onError: (e) => {
        console.error(e);
      },
    }
  );
  return {
    createAccount: mutateAsync,
    isCreatingAccount: isLoading,
  };
};

export const useLoginWithWallet = () => {
  const { mutateAsync, isLoading } = useMutation(
    (walletName: string) => api.loginWithWallet(walletName),
    {
      onSuccess: () => {
        console.log("User logged in successfully");
      },
      onError: (e) => {
        console.error(e);
      },
    }
  );
  return {
    loginWithWallet: mutateAsync,
    isLoggingIn: isLoading,
  };
};

export const useVerifyUser = () => {
  const { mutateAsync, isLoading } = useMutation(
    ({ walletName, code }: any) => api.useVerifyUser(walletName, code),
    {
      onSuccess: () => {
        console.log("User verified in successfully");
      },
      onError: (e) => {
        console.error(e);
      },
    }
  );
  return {
    verifyUser: mutateAsync,
    isVerifying: isLoading,
  };
};
