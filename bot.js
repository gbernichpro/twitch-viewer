require('dotenv').config();
const { ChatClient } = require('@twurple/chat');
const { StaticAuthProvider } = require('@twurple/auth');
const fs = require('fs');

// 1. Carrega os canais do JSON
const channels = JSON.parse(fs.readFileSync('canais.json', 'utf8')).canais;

// 2. Verifica o token
if (!process.env.ACCESS_TOKEN || !process.env.ACCESS_TOKEN.startsWith('oauth:')) {
  console.error('❌ Token inválido! Gere um novo em: https://twitchtokengenerator.com/');
  process.exit(1);
}

// 3. Configuração do Chat
const authProvider = new StaticAuthProvider(
  process.env.CLIENT_ID,
  process.env.ACCESS_TOKEN.replace('oauth:', '') // Remove o prefixo
);

const chatClient = new ChatClient({
  authProvider,
  channels, // Usa os canais do JSON
  logger: { minLevel: 'ERROR' } // logs
});

// 4. Eventos
chatClient.onConnect(() => {
  console.log(`✅ Conectado aos canais: ${channels.join(', ')}`);
  // Envia mensagem de teste no PRIMEIRO canal
  if (channels.length > 0) {
    chatClient.say(channels[0], 'SabaPing');
  }
});

chatClient.onMessage((channel, user, message) => {
  console.log(`[${channel}] ${user}: ${message}`);
  if (message.toLowerCase() === '!ola') {
    chatClient.say(channel, `Olá, ${user}! 👋`);
  }
});

chatClient.onAuthenticationFailure(() => {
  console.error('❌ Token inválido/expirado. Gere um NOVO token.');
  process.exit(1);
});

// 5. Inicia a conexão
console.log(`🔗 Conectando aos canais: ${channels.join(', ')}`);
chatClient.connect();