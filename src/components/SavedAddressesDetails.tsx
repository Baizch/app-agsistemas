import { AddressData } from '../types';

interface SavedAddressesDetailsProps {
  savedAddressData: AddressData[];
}

function SavedAddressesDetails({
  savedAddressData,
}: SavedAddressesDetailsProps) {
  return (
    <>
      {savedAddressData.length > 0 && (
        <div className='mt-8 w-full max-w-sm mb-8'>
          <h3 className='text-lg font-bold mb-4'>Endereços salvos</h3>
          {JSON.parse(localStorage.getItem('savedAddresses') || '[]').map(
            (item: AddressData, index: number) => (
              <div
                key={index}
                className='space-y-2 border p-2 rounded-lg bg-gray-50 mb-4'
              >
                <p>
                  <strong>Bairro:</strong> {item.bairro}
                </p>
                <p>
                  <strong>CEP:</strong> {item.cep}
                </p>
                {item.complemento && (
                  <p>
                    <strong>Complemento:</strong> {item.complemento}
                  </p>
                )}
                <p>
                  <strong>DDD:</strong> {item.ddd}
                </p>
                <p>
                  <strong>Estado:</strong> {item.estado}
                </p>
                <p>
                  <strong>GIA:</strong> {item.gia}
                </p>
                <p>
                  <strong>IBGE:</strong> {item.ibge}
                </p>
                <p>
                  <strong>Localidade:</strong> {item.localidade}
                </p>
                <p>
                  <strong>Logradouro:</strong> {item.logradouro}
                </p>
                <p>
                  <strong>Região:</strong> {item.regiao}
                </p>
                <p>
                  <strong>SIAFI:</strong> {item.siafi}
                </p>
                <p>
                  <strong>UF:</strong> {item.uf}
                </p>
                {item.unidade && (
                  <p>
                    <strong>Unidade:</strong> {item.unidade}
                  </p>
                )}
              </div>
            )
          )}
        </div>
      )}
    </>
  );
}

export default SavedAddressesDetails;
