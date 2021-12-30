import {  useMutation, useQuery } from "react-query";
import api from "../../services";

export const useGetContacts = () => {
  const {data , isLoading} =  useQuery('contacts',
    () => api.getContacts(),
    {
      onError: (e) => {
        console.error(e);
      },
    }
  );
  return {
    contacts: data,
    isSearching: isLoading,
  };
};

export const useGetContact = (contactId: string) => {
  const {data , isLoading} =  useQuery('contact',
    () => api.getContact(contactId),
    {
      onError: (e) => {
        console.error(e);
      },
    }
  );
  return {
    contact: data,
    isSearching: isLoading,
  };
};

export const useContact = () => {
  const { mutateAsync, isLoading } = useMutation(
    (contactData: any) => api.createContact(contactData),
    {
      onSuccess: () => {
        console.log("Contact created successfully");
      },
      onError: (e) => {
        console.error(e);
      },
    }
  );
  return {
    createContact: mutateAsync,
    isCreating: isLoading,
  };
};

export const useEditContact = () => {
  const { mutateAsync, isLoading } = useMutation(
    (contactData: any) => api.editContact(contactData),
    {
      onSuccess: () => {
        console.log("Contact created successfully");
      },
      onError: (e) => {
        console.error(e);
      },
    }
  );
  return {
    editContact: mutateAsync,
    isCreating: isLoading,
  };
};
