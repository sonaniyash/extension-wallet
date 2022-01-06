import { useMutation } from "react-query";
import { CheckExistenceData, CreateAccountData } from "../../context/models";
import api from "../../services";

export const useCheckExistence = () => {
  const { mutateAsync, isLoading } = useMutation(
    (accountData: CheckExistenceData) => api.checkExistence(accountData),
    {
      onSuccess: () => {
        console.log("email/phone checked successfully");
      },
      onError: (e) => {
        console.error(e);
      },
    }
  );
  return {
    checkExistence: mutateAsync,
    isCheckingExistence: isLoading,
  };
};

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
