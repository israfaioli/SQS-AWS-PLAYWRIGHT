const { test, expect } = require('@playwright/test');
const { SQS } = require('aws-sdk');

const sqs = new SQS({ region: 'sua-regiao-aqui' }); // Substitua com sua região

test('Leitura de Mensagens da Fila SQS', async ({ page }) => {
  // Substitua com a URL da sua fila SQS real
  const filaUrl = 'https://sqs.sua-regiao-aqui.amazonaws.com/sua-conta-id/sua-fila';

  // Lê as mensagens da fila SQS
  const { Messages } = await sqs.receiveMessage({
    QueueUrl: filaUrl,
    MaxNumberOfMessages: 1,
    VisibilityTimeout: 0,
    WaitTimeSeconds: 0,
  }).promise();

  // Verifica se há mensagens na fila
  expect(Messages).toBeDefined();

  if (Messages && Messages.length > 0) {
    // Faça as verificações adicionais necessárias
    // Exemplo: expect(Messages[0].Body).toContain('TextoEsperado');
  }
});

test('Envio de Nova Mensagem para a Fila SQS', async () => {
  // Substitua com a URL da sua fila SQS real
  const filaUrl = 'https://sqs.sua-regiao-aqui.amazonaws.com/sua-conta-id/sua-fila';

  // Envia uma nova mensagem para a fila SQS
  await sqs.sendMessage({
    QueueUrl: filaUrl,
    MessageBody: 'Nova Mensagem de Teste',
  }).promise();

  // Aguarda um curto período de tempo para garantir que a mensagem seja processada
  await new Promise(resolve => setTimeout(resolve, 3000));

  // Verifica o incremento na contagem de mensagens na fila
  const { Attributes } = await sqs.getQueueAttributes({
    QueueUrl: filaUrl,
    AttributeNames: ['ApproximateNumberOfMessages'],
  }).promise();

  // A assertiva abaixo assume que a fila inicialmente não estava vazia
  expect(parseInt(Attributes.ApproximateNumberOfMessages)).toBeGreaterThan(0);
});