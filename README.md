# Twitch-Viewer

Bot em JavaScript para farm de pontos na Twitch.

## Descrição

Este é um bot desenvolvido em JavaScript que permite visualizar canais na Twitch para acumular pontos de visualização (farm de pontos). O bot automaticamente se conecta aos canais listados e começa a assistir aos streams, garantindo o acúmulo de pontos na conta pessoal.

## Conta Acessada

Deve ser criado um token de acesso para.

## Como Funciona

1. O bot utiliza um arquivo `canais.json` para listar todos os canais que serão visualizados.
2. O bot se conecta a esses canais e começa a assistir aos streams, acumulando pontos de visualização para a conta configurada.

## Arquivo `canais.json`

O arquivo `canais.json` contém todos os canais da Twitch que serão visualizados pelo bot.

## Instalação

1. Clone o repositório:
   ```bash
   cd twitch-viewer
   ```
2. Navegue até o diretório do projeto:
   ```bash
   git clone https://github.com/usuario/twitch-viewer.git
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o bot:
   ```bash
   node bot.js
   ```

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
