# :musical_note: API Sidoka 
## Fazendo a intalação
Para instalar a API, siga as instruções abaixo:
- Clonar ou baixar este repositório;
- Instalar as dependências da API: ```npm install``` ou ```yarn install```
- Iniciar o servidor ```node src/server.js```

Ok! A API do Sidoka já está instalada e pronta para receber suas requisições.

>O banco de dados da API está na plataforma Atlas do MongoDB. Dessa forma, está na nuvem!
---
## Compreendendo o conteúdo
Nesta API você vai encontrar informações de todos os álbuns do Sidoka.

Os três **álbuns** possuem as seguintes informações:

| Chave | Valor | 
| ----- | ----- |
| albumName | String com o nome do álbum |
|   songs   | Vetor de objetos. Cada objeto possui informações de cada música |

Exemplo de json:
``` 
{
    "albumName": "Sommelier",
    "songs": [...]
  }
```
As informações dos objetos de **músicas** são:
>Importante ressaltar que os *songs* estão dentro dos *álbuns*.

| Chave | Valor |
| ----- | ----- |
| musicName | String com o nome da música |
| musicFt | String com o nome de um participante na musica (caso tenha algum) |
| musicDate | String com o dia de lançamento da música |
| musicBeat | String com o nome do produtor do beat da música |
| musicDuration | String com a duração da música |
| musicLink | String com o link da música no YouTube|

Exemplo de json:

```
  {
    ...
    "songs": [
      {
        "_id": "5dd601ee8681762f9c76cc33",
        "musicName": "Sommelier",
        "musicFt": "n/a",
        "musicDate": "20/03/2019",
        "musicBeat": "BlackMayo",
        "musicDuration": "2:52",
        "musicLink": "https://youtu.be/stII-tKzI3k"
      },
      {
        "_id": "5dd601ee8681762f9c76cc32",
        "musicName": "Scarlett",
        "musicFt": "n/a",
        "musicDate": "20/03/2019",
        "musicBeat": "BlackMayo",
        "musicDuration": "2:55",
        "musicLink": "https://youtu.be/kFQdCoH1vYo"
      }
    ]
  }
```

---
## Consumindo a API

Primeiro de tudo, você precisará de um cliente que faça requisições HTTP. Para este exemplo, usarei o Axios.

- Primeiro instale o Axios: ``` npm install axios ``` ou ``` yarn add axios ```

- Depois importe ele no seu código: ``` const axios = require('axios') ```

E está tudo certo! ;)

No momento esta API conta com apenas uma rota para consulta no banco.

A url base é ```http://localhost:8000```

> Pode ser que algum dia este serviço se expande, por isso se encontra em uma tabela.

| Rota | Requisição esperada | Resposta |
| ---- | ------------------- | -------- |
| /album | JSON com uma ou duas chaves query. A primeira chave é a "type", que pode receber os valores 'all', 'album', 'music'. A segunda chave é a 'name', esta pode receber o nome de um álbum ou música *Requisição POST* | Caso ```type: 'all'```, retornará um objeto com todos os álbuns. Caso ```type: 'album'``` e ```name: 'nomeDoAlbum'```, retornará informações apenas do álbum específicado. Caso ```type: 'music'``` e ```name: 'nomeDaMusica'```, retornará informações apenas da música específicada. *Caso o valor de query seja inválido, retornará um JSON com a chave 'error'.* |

*Os álbuns são:*
>doka language, Sommelier e Elevate

#### Requisição na prática
Voltando ao Axios, você fará uma requisição POST na rota acima:
``` axios.post('http://localhost:8000/album?type=all') ```

Este é um exemplo de requisição de todos os álbuns.

Você consegue acessar a resposta da API através de uma promisse:
```
axios.post('http://localhost:8000/album?type=all').then(response => {
    // Todas as informações estão no parâmetro response
    console.log(response.data) // Exemplo de utilização
})
```
A resposta esperada é este JSON (resumido):

```
[
  {
    "_id": "5dd601e28681762f9c76cc1f",
    "albumName": "doka language",
    "songs": [
      {
        "_id": "5dd601e28681762f9c76cc2c",
        "musicName": "espanha",
        "musicFt": "n/a",
        "musicDate": "11/07/2019",
        "musicBeat": "Woodpecker",
        "musicDuration": "2:49",
        "musicLink": "https://youtu.be/zrNWdHXUPm8"
      },
      {
        "_id": "5dd601e28681762f9c76cc2a",
        "musicName": "um olho pra dois",
        "musicFt": "Pexande",
        "musicDate": "11/07/2019",
        "musicBeat": "Pluto",
        "musicDuration": "3:27",
        "musicLink": "https://youtu.be/90XY1WXmFrU"
      },
      ...
    ]
  },
  {
    "_id": "5dd66732bda14307840756ee",
    "albumName": "Elevate",
    "songs": [
      {
        "_id": "5dd66732bda14307840756fb",
        "musicName": "Scotch",
        "musicFt": "n/a",
        "musicDate": "07/01/2019",
        "musicBeat": "Yung Lando",
        "musicDuration": "3:41",
        "musicLink": "https://youtu.be/Pco10hjWAFA"
      },
      {
        "_id": "5dd66732bda14307840756f9",
        "musicName": "Papelzinho",
        "musicFt": "n/a",
        "musicDate": "07/01/2019",
        "musicBeat": "Josh Petruccio",
        "musicDuration": "3:02",
        "musicLink": "https://youtu.be/bfPn5c4ofHU"
      },
      ...
    ]
  },
  ...
]
```
---
