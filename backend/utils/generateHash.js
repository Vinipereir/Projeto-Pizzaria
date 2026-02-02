const bcrypt = require('bcryptjs');

// Script para gerar hashes de senhas para testes
// Execute: node backend/utils/generateHash.js

const generateHash = async (senha) => {
  const hash = await bcrypt.hash(senha, 10);
  console.log(`Senha: ${senha}`);
  console.log(`Hash: ${hash}`);
  console.log('---');
};

// Gerar hashes para as senhas de teste
(async () => {
  console.log('Gerando hashes...\n');
  await generateHash('admin123');
  await generateHash('123456');
})();
