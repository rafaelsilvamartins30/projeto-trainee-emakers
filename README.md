# 🖥️ Meu Projeto Trainee

Este é um projeto front-end de 4 páginas desenvolvido em React como parte do processo trainee para a Emakers Jr.

## 🗂️ Organização do Repositório

Primeiro, escolhi as 4 páginas que seriam:  

- Página de **Login, Recuperação e Registro**  

- Página de **Conta**  

- Página **Principal**  

- Página dos **Populares**
  
Organizei o projeto utilizando o React Router, criando as rotas no arquivo `App.jsx`. Assim, na pasta `src`, criei pastas para os componentes reutilizáveis, como cabeçalho e rodapé, uma pasta para as imagens utilizadas e uma pasta para cada tela.

## ⚙️ Funcionalidades
- **Todas telas tem responsividade trabalhada nas larguras de**: 
  - 320px
  - 375px
  - 425px
  - 768px
  - 1024px 
  - 1440px

- **Telas de Login, Recuperação e Registro**:  
  - Os inputs, botões e links dessas telas estão funcionais.  
  - Adaptei eles para funcionarem com link do React Router, já que, por exemplo, não implementei a verificação de usuário nos inputs da tela de login ou no registro.

- **Cabeçalho**:   
  - O input de busca foi implementado, mas não realiza buscas reais.  
  - O link "Gêneros" está inativo, pois não há uma página para gêneros.  
  - O restante da navbar foi configurado:  
    - "Lançamentos" está vinculado ao carrossel inferior da página inicial.  
    - "Populares" leva à página de populares.  
    - "Promoções" está associado ao carrossel superior da página inicial.  
    - "Conta" redireciona para a página de conta.  
    - A logo do site redireciona para a página principal.

- **Rodapé**:  
  - Os links de "Explorar" funcionam corretamente.

- **Página de Conta**:  
  - Adicionei o uso de `useState` no primeiro botão, permitindo que os dados do usuário sejam alterados nos inputs que aparecem.  
  - Os outros botões ainda não possuem funcionalidade.  
  - Nas avaliações de jogos, fiz uma alteração no design do Figma, adicionando outro `useState` e implementando uma função de avaliação por estrela, que pode ser alterada em tempo real.  
  - O botão de carrinho não redireciona para a página de compra, pois ela não foi implementada.

- **Página Principal**:  
  - Adicionei dois carrosséis utilizando o React Slick.  
  - Repeti as imagens usadas no Figma, pois não sabia quais outras adicionar.  
  - Adicionei um efeito de hover nos itens do carrossel para melhorar a experiência do usuário.  
  -  O botão de carrinho não redireciona para a página de compra, pois ela não foi implementada.

- **Página de Populares**:  
  - É uma página de visualização dos 3 jogos mais populares e suas sinopses, sem funcionalidades extras.

## 🚀 Como Rodar o Projeto

1. Clone o repositório:  
   ```bash
   git clone https://github.com/rafaelsilvamartins30/projeto-trainee-emakers
   ```  
2. Navegue até a pasta do projeto:  
   ```bash
   cd projeto-trainee-emakers
   ```  
3. Instale as dependências:  
   ```bash
   npm install
   ```  
4. Inicie o servidor de desenvolvimento:  
   ```bash
   npm run dev
   ```  
5. Acesse o projeto no navegador pelo link exibido no terminal.

## 🛠️ Tecnologias Utilizadas



- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat)  

- ![React Slick](https://img.shields.io/badge/-React%20Slick-FFCC00?logo=javascript&logoColor=black&style=flat)  

- ![React Router](https://img.shields.io/badge/-React%20Router-CA4245?logo=react-router&logoColor=white&style=flat)  

- ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat)  

- ![CSS](https://img.shields.io/badge/-CSS-1572B6?logo=css3&logoColor=white&style=flat)



---



![gatinho](https://cataas.com/cat)
