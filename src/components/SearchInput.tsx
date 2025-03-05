import { formatCEP } from '../utils/cepUtils';

interface SearchInputProps {
  cep: string;
  setCep: (cep: string) => void;
  isLoading: boolean;
  searchCEP: () => void;
}

function SearchInput({ cep, setCep, isLoading, searchCEP }: SearchInputProps) {
  return (
    <>
      <h1 className='mt-8 text-lg font-bold'>
        Bem-vindo a tela de consulta de CEP
      </h1>
      <div className='mt-4 flex space-x-1 w-full max-w-sm'>
        <input
          type='text'
          placeholder='Insira um CEP'
          className='bg-white text-center p-2 border border-gray-300 rounded-lg w-full'
          value={cep}
          onChange={(e) => setCep(formatCEP(e.target.value))}
          onBlur={searchCEP}
        />
        <button
          className={`bg-blue-600 text-white p-2 rounded-lg w-1/3 cursor-pointer transition 
          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500'}`}
          onClick={searchCEP}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className='flex items-center justify-center space-x-2'>
              <div className='w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin'></div>
              <p>Buscando</p>
            </div>
          ) : (
            <p>Buscar</p>
          )}
        </button>
      </div>
    </>
  );
}

export default SearchInput;
