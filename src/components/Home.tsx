import { useCEP } from '../hooks/useCEP';

import SearchInput from './SearchInput';
import AddressDetails from './AddressDetails';
import SavedAddressesDetails from './SavedAddressesDetails';

function Home() {
  const {
    cep,
    setCep,
    isLoading,
    searchCEP,
    errorMessage,
    addressData,
    isAddressSaved,
    saveAddress,
    savedAddressData,
  } = useCEP();

  return (
    <div className='flex flex-col items-center text-center w-full'>
      <SearchInput
        cep={cep}
        setCep={setCep}
        isLoading={isLoading}
        searchCEP={searchCEP}
      />

      {errorMessage && <p className='text-red-500 mt-4'>{errorMessage}</p>}

      <AddressDetails
        addressData={addressData}
        isAddressSaved={isAddressSaved}
        saveAddress={saveAddress}
      />

      <SavedAddressesDetails savedAddressData={savedAddressData} />
    </div>
  );
}

export default Home;
