# Twitch-Viewer

Bot em JavaScript para farm de pontos na Twitch.

## Descrição

Este é um bot desenvolvido em JavaScript que permite visualizar canais na Twitch para acumular pontos de visualização (farm de pontos). O bot automaticamente se conecta aos canais listados e começa a assistir aos streams, garantindo o acúmulo de pontos na conta pessoal.


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

## Como Criar Credenciais da Twitch

Para utilizar este bot, você precisará criar credenciais de desenvolvedor da Twitch e gerar um token de acesso. Siga os passos abaixo:

### Passo 1: Criar Credenciais

1. Acesse [Twitch Developer Console](https://dev.twitch.tv/console/apps).
2. Clique em **"Register Your Application"** e preencha os campos necessários.
   - **Name**: Nome do aplicativo (ex: "Twitch Viewer Bot").
   - **OAuth Redirect URL**: Coloque uma URL válida, por exemplo: `http://localhost`.
   - **Category**: Escolha **"Chat Bot"** ou **"Streaming"**.
3. Após criar o aplicativo, guarde o **Client ID** e **Client Secret**.

### Passo 2: Gerar o Token de Acesso

1. Acesse [Twitch OAuth Token Generator](https://twitchtokengenerator.com/).
2. Escolha as permissões necessárias para o bot, como **"chat:read"** e **"chat:edit"**.
3. Copie o **Access Token** gerado.

### Passo 3: Configurar as Credenciais no Projeto

1. Crie um arquivo `.env` na raiz do projeto com `.env-exemple`. 
2. Adicione as variáveis de ambiente:

   ```env
   TWITCH_CLIENT_ID=seu-client-id
   TWITCH_CLIENT_SECRET=seu-client-secret
   TWITCH_ACCESS_TOKEN=seu-access-token
   ```
3. O bot utilizará essas credenciais para acessar a Twitch e realizar o farm de pontos.


## Licença

Este projeto está licenciado sob a **MIT License.** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

