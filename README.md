# Consulta de CEP - React, TypeScript e TailwindCSS  

Projeto desenvolvido como parte do **Desafio Técnico - Desenvolvedor(a) Frontend**. A aplicação permite que usuários consultem endereços via **API do ViaCEP**, armazenem localmente e listem os dados salvos.  

## Tecnologias Utilizadas  
- **React** com **TypeScript**  
- **TailwindCSS** para estilização  
- **Fetch API** para requisições HTTP  
- **LocalStorage** para persistência de dados  
- **Cache Local** para otimização de requisições  

## Funcionalidades  
✅ Campo de entrada para o **CEP** com formatação automática.  
✅ Consulta à API do **ViaCEP** ao sair do campo ou pressionar o botão.  
✅ Preenchimento automático dos dados retornados.  
✅ **Botão "Salvar"** para armazenar endereços localmente.  
✅ **Listagem** dos endereços salvos.  
✅ **Cache Local** para evitar requisições desnecessárias.  
✅ Interface **responsiva e estilizada** com TailwindCSS.

## Instalação e execução  

### Clone este repositório
```sh
git clone https://github.com/seu-usuario/consulta-cep.git

cd consulta-cep
```

### Instale as dependências
```sh
npm install
```

### Inicie o servidor de desenvolvimento
```sh
npm run dev
```
A aplicação estará disponível em http://localhost:5173/

## Decisões técnicas  
- **Componentização:** O código foi dividido em componentes reutilizáveis, como SearchInput, AddressDetails e SavedAddressesDetails. Isso melhora a organização e manutenção do projeto.
- **Cache Local:** Implementado usando useState para evitar requisições desnecessárias ao ViaCEP. Se um CEP já foi buscado, os dados são carregados do cache.
- **Persistência de dados:** Utilizado localStorage para manter os endereços salvos, garantindo que o usuário não perca os dados ao recarregar a página.
- **Formatação do CEP:** Criada uma função formatCEP para padronizar a entrada do usuário. Outra função, cleanCEP, remove a formatação antes de fazer a requisição.
- **Design responsivo:** TailwindCSS foi usado para criar uma interface moderna e responsiva.

## Declaração de uso de IA 
Este projeto foi desenvolvido por mim, com o auxílio do ChatGPT para:

- Esclarecimento de dúvidas sobre alguns pontos do desafio.
- Sugestões de layout.
- Revisão e sugestões para melhoria do código.
- Análise de possíveis erros e refatoração.
  
Todas as decisões de implementação, estruturação do código e lógica foram feitas por mim, com base nos requisitos do desafio.
