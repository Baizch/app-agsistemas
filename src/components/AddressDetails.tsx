import { AddressData } from '../types';

interface AddressDetailsProps {
  addressData: AddressData | null;
  isAddressSaved: boolean;
  saveAddress: () => void;
}

function AddressDetails({
  addressData,
  isAddressSaved,
  saveAddress,
}: AddressDetailsProps) {
  if (!addressData) {
    return null;
  }

  return (
    <>
      <h3 className='mt-8 text-lg font-bold mb-4'>Endereço</h3>
      <div className='space-y-2 border p-2 rounded-lg bg-gray-50 w-full max-w-sm'>
        <p>
          <strong>Bairro:</strong> {addressData.bairro}
        </p>
        <p>
          <strong>CEP:</strong> {addressData.cep}
        </p>
        {addressData.complemento && (
          <p>
            <strong>Complemento:</strong> {addressData.complemento}
          </p>
        )}
        <p>
          <strong>DDD:</strong> {addressData.ddd}
        </p>
        <p>
          <strong>Estado:</strong> {addressData.estado}
        </p>
        <p>
          <strong>GIA:</strong> {addressData.gia}
        </p>
        <p>
          <strong>IBGE:</strong> {addressData.ibge}
        </p>
        <p>
          <strong>Localidade:</strong> {addressData.localidade}
        </p>
        <p>
          <strong>Logradouro:</strong> {addressData.logradouro}
        </p>
        <p>
          <strong>Região:</strong> {addressData.regiao}
        </p>
        <p>
          <strong>SIAFI:</strong> {addressData.siafi}
        </p>
        <p>
          <strong>UF:</strong> {addressData.uf}
        </p>
        {addressData.unidade && (
          <p>
            <strong>Unidade:</strong> {addressData.unidade}
          </p>
        )}
        {addressData && !isAddressSaved && (
          <button
            onClick={saveAddress}
            className='w-full bg-blue-600 hover:bg-blue-500 text-white text-white p-2 rounded-lg mt-2 cursor-pointer'
          >
            Salvar endereço
          </button>
        )}
      </div>
    </>
  );
}

export default AddressDetails;
