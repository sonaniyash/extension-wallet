import { useMutation, useQuery } from 'react-query';
import api from '../../services';
import { filterArrayObjectByValue } from '../../utils/utils';

export const useGetContacts = (filterString: string, userId: string) => {
  const { data, isLoading } = useQuery('contacts',
    () => api.getContacts(userId),
    {
      onError: (e) => {
        console.error(e);
      },
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const dataFiltered = filterString ? filterArrayObjectByValue(
    filterString.toLowerCase(),
    data && data ? data : []
  ) : data;

  return {
    contacts: dataFiltered,
    isSearching: isLoading,
  };
};

export const useGetContact = (contactId: string | undefined) => {
  const { data, isLoading } = useQuery(['contact', contactId],
    () => api.getContact(contactId),
    {
      onError: (e) => {
        console.error(e);
      },
      enabled: !!contactId
    }
  );
  return {
    contact: data,
    isSearching: isLoading,
  };
};

export const useContact = (userId: any) => {
  const { mutateAsync, isLoading } = useMutation(
    (contactData: any) => api.createContact(contactData, userId),
    {
      onSuccess: () => {
        console.log('Contact created successfully');
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

export const useEditContact = (id: any, userId: any) => {
  const { mutateAsync, isLoading } = useMutation(
    (contactData: any) => api.editContact(contactData, userId, id),
    {
      onSuccess: () => {
        console.log('Contact created successfully');
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
