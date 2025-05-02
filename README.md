# Sobre o e-cattle-host

Esta é a ferramenta oficial de *scaffolding* para a plataforma e-Cattle, projetada para lhe dar uma vantagem inicial na construção da sua nova aplicação microfrontend. Ela gera um modelo base para uma aplicação micro-frontend hospedeira com todas as configurações necessárias e estrutura de diretórios padrão, permitindo que você inicie o desenvolvimento sem o incômodo de configurar o projeto do zero.

Este é um *template* para uma aplicação remota (*Remote*), nele já estão instaladas todas as bibliotecas e os *plugins* indispensáveis, bem como foram feitas todas as configurações necessárias para a construção de uma aplicação com arquitetura micro-frontend e com todos os recursos de uma aplicação progressiva *web* (PWA). 

## ✨ Características

Este projeto foi desenvolvido utilizando:
- JavaScript
- Vue.js
- Vutify
- Vite
- Arquitetura Micro-frontend
- *Progressive Web App* (PWA)

Além disso, para manter o padrão de codificação do projeto temos os seguintes módulos instalados e configurados:
- Husk
- Prettier
- Eslint
- Commitlint

Para que esta seja uma aplicação com arquitetura de Micro-frontends com recursos de PWA foi necessário instalar alguns módulos externos, quais sejam:
- [vite-plugin-federation](https://github.com/originjs/vite-plugin-federation)
- [Vite PWA](https://vite-pwa-org.netlify.app/)

A instalação e configuração adequada de cada um desses *plugins* irão garantir o adequado funcionamento de uma aplicação com as características descritas anteriomente.

## 👩🏿‍💻 Pós instalação

Este *template* executará sem a necessidade de qualquer alteração ou ajuste em seu código. Ele acompanha um compoenete simples para teste, podendo ser excluído ou reaproveitado conforme necessidade ou vontade. Ele já está exposto no arquivo `config.federation.js` contido na raiz do projeto: 

```javascript
// config.federation da aplicação remota
export default {
  name: 'e_cattle_remote',
  filename: 'remoteEntry.js',
  exposes: {
    // componente sendo exposto
    './ComponentApp1': './src/pages/index.vue'
  },
  shared: ['vue', 'vuetify']
}
```

Tudo que foi desenvolvido em `ComponentApp1` será mostrado na aplicação hospedeira com todos os recursos e funcionalidades definidos na aplicação remota.

Neste projeto você pode criar um micro-frontend com as funcionalidades que desejar e expor ele para que seja usado por uma aplicação hospedeira. Lembrando que em arquitetura micro-frontends poderão ser criados quantas aplicações remotas sejam necessárias para compor a aplicação completa.


## Contribuir 🚀

Se quiser contribuir, clone este repositório, crie sua própria *branch* de trabalho e mãos à obra!

```bash
git clone https://github.com/andre-violin/e-cattle-remote.git
```

```bash
git checkout -b feature/NAME
```

No final, abra um *Pull Request* explicando o problema resolvido ou a funcionalidade adicionada. Se existir, adicione capturas de tela das modificações visuais e aguarde pela revisão!

[Como criar uma Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request) |
[Padrão de Commits](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)

## Licença 📃

Este projeto está sob a licença [MIT](./LICENSE) license
