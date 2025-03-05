import { useState, useEffect } from 'react';
import { cleanCEP } from '../utils/cepUtils';
import { AddressData } from '../types';

export function useCEP() {
  const [cep, setCep] = useState<string>('');
  const [addressData, setAddressData] = useState<AddressData | null>(null);
  const [savedAddressData, setSavedAddressData] = useState<AddressData[]>([]);
  const [cache, setCache] = useState<Record<string, AddressData>>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const storedAddresses = JSON.parse(
      localStorage.getItem('savedAddresses') || '[]'
    );
    setSavedAddressData(storedAddresses);
  }, []);

  const searchCEP = async () => {
    const rawCep = cleanCEP(cep);

    setErrorMessage(null);
    setAddressData(null);
    setIsLoading(true);

    if (rawCep.length !== 8) {
      setErrorMessage(
        'CEP inválido. Certifique-se de digitar um CEP com 8 números.'
      );
      setIsLoading(false);
      return;
    }

    if (cache[rawCep]) {
      setAddressData(cache[rawCep]);
      console.log('CEP encontrado no cache.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${rawCep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setErrorMessage('CEP não encontrado.');
        setIsLoading(false);
        return;
      }

      setCache((prev) => ({ ...prev, [rawCep]: data }));
      setAddressData(data);
      setIsLoading(false);
    } catch (error: unknown) {
      setErrorMessage('Erro ao buscar CEP. Tente novamente.');
      setIsLoading(false);
      console.log(error);
    }
  };

  const saveAddress = () => {
    if (addressData) {
      const existingAddresses: AddressData[] = JSON.parse(
        localStorage.getItem('savedAddresses') || '[]'
      );

      const updatedAddresses = [...existingAddresses, addressData];

      setSavedAddressData((prev) => [...prev, addressData]);

      localStorage.setItem('savedAddresses', JSON.stringify(updatedAddresses));

      setAddressData(null);
    }
  };

  const isAddressSaved = savedAddressData.some(
    (item) => item.cep === addressData?.cep
  );

  return {
    cep,
    setCep,
    addressData,
    savedAddressData,
    isAddressSaved,
    errorMessage,
    isLoading,
    searchCEP,
    saveAddress,
  };
}
