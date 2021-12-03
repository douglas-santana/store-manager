# Boas vindas ao repositório do projeto Store Manager!

![image](https://user-images.githubusercontent.com/78758947/144609819-58b7a7af-263a-47df-869f-52de65931f7f.png)

*A API que está sendo construída trata-se de um sistema de gerenciamento de vendas, onde será possível criar, visualizar, deletar e atualizar produtos e vendas.*

Esse projeto foi criado com integração com o **MongoDB** e **arquitetura MSC**:
- **Camada de Modelo (M)**: Arquivos onde iremos executar as operações do banco de dados, como criar conexões e executar queries.
- **Camada de Serviço (S)**: Arquivos onde iremos estruturar nossas regras de negócio, geralmente é quem chama os métodos definidos na camada de modelo.
- **Camada de Controladores (C)**: Interface mais próxima da pessoa usuária ou de uma requisição, vai processar e chamar as devidas funções da camada de serviço.

---

# Sumário

- [Habilidades](#habilidades)
- [Conexão com o Banco](#conexão-com-o-banco)

---

# Habilidades

- Funcionamento da camada de Model;
- Responsabilidades específicas para essa camada;
- Conexão com o MongoDB;
- Aplicação em camadas;
- Responsabilidades específicas para cada parte do app;
- Manutenibilidade e reusabilidade do código;
- Padraõ REST;
- Assinaturas para APIs intuitivas e facilmente entendíveis.


### Conexão com o Banco:

O avaliador da Trybe não consegue ler as informações que estão no local (localhost).
Portanto, para a conexão com o banco, foi utilizado os seguintes parâmetros:

```javascript
require('dotenv').config();
const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/StoreManager`;
const DB_NAME = 'StoreManager';
```
Além disso, **alterei o arquivo `.env.dev` para `.env`**.

Com essas configurações, enquanto estiver na máquina local, o banco será executado normalmente via localhost (possibilitando os testes via `npm test`).
