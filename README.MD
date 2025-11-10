<div align="center">
  <a href="#">
      <img src=".github/assets/badge.png" width="200" />
  </a>

  <!-- project name -->
  <h1 align="center">React Native Lamborghini App</h1>
  
  <!-- project badges -->
  <p align="center">
    <img 
      alt="Modified by Rogério Andrade" 
      src="https://img.shields.io/badge/modified%20by-Rogério%20Andrade-6A57D5"
    >
    <img 
      alt="Project top programming language" 
      src="https://img.shields.io/github/languages/top/rogerioaanjos/react-native-lamborghini?color=6A57D5"
    >
    <img 
      alt="Repository size" 
      src="https://img.shields.io/github/repo-size/rogerioaanjos/react-native-lamborghini?color=6A57D5"
    >
    <img 
      alt="GitHub license" 
      src="https://img.shields.io/github/license/rogerioaanjos/react-native-lamborghini?color=6A57D5"
    >
  </p> 

  <!-- project description and menu -->
  <p align="center">
      Exibe carros da Lamborghini de uma API fake, com navegação interativa por gestos e animações.
    <br />
    <a href="#usage">
      <strong>Go to usage now »</strong>
    </a>
    <br />
    <br />
    <a href="https://github.com/rogerioaanjos/react-native-lamborghini/issues">
      Report Bug
    </a>
    ·
    <a href="https://github.com/rogerioaanjos/react-native-lamborghini/issues/new">
      Request Feature
    </a>
  </p>
</div>

## Preview

<div align="center">
  <a href="#">
      <img src=".github/assets/preview.png" width="200" alt="preview" />
  </a>
</div>

## 🔥 Features

- [x] Exibe carros da Lamborghini de uma API fake
- [x] Navegação interativa por gestos de swipe (substituindo os botões de anterior/próximo)
- [x] Animações suaves ao trocar de carro
- [x] Animação interativa ao clicar no logo da Lamborghini
- [x] Layout responsivo, mantendo área fixa para nome do carro
- [x] Componente de carro animado modularizado (`DraggableCar`)
- [x] Botão de compra (`BuyButton`) integrado ao layout

## Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)
- [Animated API do React Native](https://reactnative.dev/docs/animated)

## Modificações realizadas

> Antes: Navegação entre carros feita apenas por botões `<` e `>`  
> Agora: Navegação por **gestos de swipe** com animações de slide e fade, mantendo área fixa para o nome do carro.  

- Removidos os botões de navegação anteriores
- Adicionado componente `DraggableCar` para encapsular a lógica de gestos e animações
- Adicionada animação ao clicar no logo da Lamborghini
- Ajuste do layout para manter consistência visual com nome do carro e botão de compra

## 🚀 Como rodar

Clone o projeto:

```bash
git clone https://github.com/rogerioaanjos/react-native-lamborghini.git
cd react-native-lamborghini
npm install
