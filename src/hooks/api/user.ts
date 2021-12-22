import { useMutation } from "react-query";
import { CreateAccountData } from "../../context/models";
import api from "../../services";

export const useRegister = () => {
  const { mutateAsync, isLoading } = useMutation(
    (accountData: CreateAccountData) => api.registerUser(accountData),
    {
      onSuccess: (user) => {
        console.log("User registered successfully");
      },
      onError: (e) => {
        console.error(e);
      },
    }
  );
  return {
    registerUser: mutateAsync,
    isRegistering: isLoading,
  };
};
