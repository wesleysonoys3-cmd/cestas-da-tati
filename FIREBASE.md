# 🔥 Tatiê Ateliê & Cestas — Guia de Configuração do Firebase (Plano Spark Gratuito)

Este documento explica como ativar o **Firebase SDK Web v10 (Modular)** no site. Com o Firebase você:
- Faz upload de **fotos das cestas** clicando em um botão (sem precisar de URLs)
- Salva as cestas no **Cloud Firestore** (qualquer alteração aparece em TODOS os dispositivos)
- Permite atualizar o catálogo **direto do celular**, sem precisar de servidor

---

## 📋 Índice

1. [Criar Projeto no Firebase Console](#1-criar-projeto-no-firebase-console)
2. [Pegar as Credenciais (firebaseConfig)](#2-pegar-as-credenciais-firebaseconfig)
3. [Colar as Credenciais no Código](#3-colar-as-credenciais-no-código)
4. [Ativar Firestore (Banco de Dados)](#4-ativar-firestore-banco-de-dados)
5. [Ativar Storage (Upload de Imagens)](#5-ativar-storage-upload-de-imagens)
6. [Aplicar as Regras de Segurança](#6-aplicar-as-regras-de-segurança)
7. [Testar o Site](#7-testar-o-site)
8. [Sincronizar Cestas Existentes (Local → Nuvem)](#8-sincronizar-cestas-existentes-local--nuvem)
9. [Estrutura dos Dados](#9-estrutura-dos-dados)

---

## 1. Criar Projeto no Firebase Console

1. Acesse: **https://console.firebase.google.com/** (logue com sua conta Google)
2. Clique no botão grande **"Criar um projeto"** (ou "Adicionar projeto")
3. Dê o nome: **`tatie-atelie-cestas`** → **Continuar**
4. Desative a opção **"Ativar o Google Analytics neste projeto"** (não precisamos, fica mais simples) → **Criar projeto**
5. Aguarde 10 segundos → **Continuar**

---

## 2. Pegar as Credenciais (`firebaseConfig`)

Agora vamos cadastrar o site como Aplicativo Web:

1. No painel do Firebase (dentro do projeto), clique no ícone **</>** ("Adicionar app") → escolha **Web App** (terceiro ícone, sem Android/iOS)
2. Dê um apelido (App nickname): **`site-tatie`**
3. **NÃO marque** "Also set up Firebase Hosting" — não precisamos.
4. Clique em **Registrar app**
5. **Mantenha essa janela aberta** — aparece um código assim:

```js
const firebaseConfig = {
  apiKey:            "AIzaSyAbCdEfGh123...",
  authDomain:        "tatie-atelie-cestas.firebaseapp.com",
  projectId:         "tatie-atelie-cestas",
  storageBucket:     "tatie-atelie-cestas.appspot.com",
  messagingSenderId: "123456789012",
  appId:             "1:123456789012:web:abc123def456"
};
```

6. Clique em **Continue no console**.

---

## 3. Colar as Credenciais no Código

Abra o arquivo **`firebase-init.js`** na pasta do site e cole as suas credenciais **onde indicado**:

```js
// firebase-init.js — linhas 10-17

const FIREBASE_CONFIG = {
    apiKey:            "COLE-AQUI-SUA-apiKey",
    authDomain:        "tatie-atelie-cestas.firebaseapp.com",
    projectId:         "tatie-atelie-cestas",
    storageBucket:     "tatie-atelie-cestas.appspot.com",
    messagingSenderId: "123456789012",
    appId:             "1:123456789012:web:abc123def456"
};
```

**Não coloque aspas de mais.** Certifique-se que `projectId` bate com o nome do seu projeto.

💡 **Dica**: Salve o arquivo e recarregue a página. No Painel Admin (aba Cestas) você verá um banner verde:  
"☁️ Conectado ao Firebase · Projeto: tatie-atelie-cestas". 👈 Isso significa que deu certo.

---

## 4. Ativar Firestore (Banco de Dados)

Vamos ativar o banco onde ficam cadastradas as cestas.

1. No menu esquerdo do Firebase, clique em **Build → Firestore Database**
2. Clique em **Criar banco de dados**
3. Na janela pop-up:
   - Escolha **"Começar no modo de produção"** (mais seguro)
   - **Próxima**
4. Escolha a **Região / Localidade**:
   - **Brasil**: procure **`southamerica-east1 (São Paulo)`** 👈 MELHOR OPÇÃO (baixa latência e dados no Brasil)
   - Se não tiver, escolha a mais próxima geograficamente.
5. Clique em **Ativar**. Aguarda ~1 minuto.

---

## 5. Ativar Storage (Upload de Imagens)

Vamos ativar o bucket onde ficam salvas as fotos.

1. No menu esquerdo: **Build → Storage**
2. Clique em **Primeiros passos** (ou "Começar")
3. Pop-up regras: selecione **"Começar no modo de produção"** → **Próxima**
4. Se pedir para escolher região, use a **mesma de Firestore** (São Paulo).
5. Clique em **Concluído**.

---

## 6. Aplicar as Regras de Segurança

Sem isso, upload e gravação dão erro de **"Permission denied"**. Cole EXATAMENTE o texto abaixo.

### 6a. Regras do Firestore

1. Firestore Database → aba **Regras**
2. Apague TUDO que está escrito e cole:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /cestas/{document} {
      allow read:  if true;          // Qualquer visitante do site pode ver as cestas
      allow write: if true;          // Painel Admin do site pode criar/editar/excluir
    }
  }
}
```

3. Clique em **Publicar** (botão azul). Confirma "Sim".

### 6b. Regras do Storage

1. Storage → aba **Regras**
2. Apague tudo e cole:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /cestas/{allPaths=**} {
      allow read:  if true;          // Qualquer visitante baixa a foto
      allow write: if request.resource.size < 10 * 1024 * 1024     // até 10MB
                   && request.resource.contentType.matches('image/.*'); // só imagem
    }
    match /{allPaths=**} {
      allow read, write: if false;   // impede upload fora da pasta /cestas
    }
  }
}
```

3. Clique em **Publicar**. Confirma "Sim".

---

## 7. Testar o Site

1. Recarregue a página do site.
2. Abra o Painel Admin (⚙️) → login `tati2026` / `tatiane2026`
3. Aba **Cestas**:
   - Banner deve estar **verde**: `☁️ Conectado ao Firebase`. ✅
4. Clique em **"+ Nova Cesta"**
5. Teste o upload:
   - Clique em **"Clique para selecionar foto"** → escolha uma imagem do seu computador/celular
   - Deve aparecer **prévia da foto** abaixo do botão
   - Preencha nome, preço, itens → **💾 Salvar**
   - Acompanhe: barra de progresso **"Enviando imagem... 57%"** → **"✅ Imagem enviada! Salvando cesta..."**
6. **Abra em OUTRO celular/dispositivo** → a nova cesta aparece automaticamente lá! 🎉

---

## 8. Sincronizar Cestas Existentes (Local → Nuvem)

Se você já criou cestas antes de ligar o Firebase (elas estão salvas no `localStorage` do seu navegador):

1. Painel Admin → aba **Cestas**
2. Clique no botão **☁️ Sincronizar** (dentro do banner de status)
3. Confirma o alerta
4. Prontinho! Todas as cestas locais são enviadas para o Firestore.
5. De agora em diante, qualquer alteração (editar/excluir/criar) é feita ao mesmo tempo **no Local e na Nuvem**.

---

## 9. Estrutura dos Dados

### Coleção `cestas` (Firestore)

| Campo | Tipo | Descrição |
|---|---|---|
| `titulo` | string | Nome da cesta |
| `descricao` | string | Descrição longa |
| `preco` | number | Preço base (ex: `239.90`) |
| `itens` | array\<string> | Lista dos itens inclusos |
| `imagem_url` | string | URL pública (gerada pelo `getDownloadURL`) |
| `ativo` | boolean | `true` por padrão |
| `criado_em` | timestamp | Data de criação (automático) |
| `atualizado_em` | timestamp | Data de última edição |

### Pasta Storage `cestas/`

As fotos são salvas com nome único:
```
cestas/1694328774512-cesta-aniversario.jpg
```
Usando `Date.now()` para evitar conflitos de nome.

---

## 💡 Cotas do Plano Spark (Gratuito) — NÃO PASSE DISSO!

| Recurso | Cota Gratuita / dia |
|---|---|
| 🔥 Leituras Firestore | **20.000** |
| ✏️ Gravações Firestore | **20.000** |
| 🗑️ Exclusões Firestore | **20.000** |
| 🖼️ Downloads Storage | **20 GB** |
| 🆙 Upload Storage | **5 GB total** / projeto |
| ⏱️ Largura de banda | **10 GB / dia** |

Para uma loja pequena como a **Tatiê**, isso **dura anos**. 💕

---

## 🆘 Troubleshooting rápido

| Erro / Sintoma | Causa | Correção |
|---|---|---|
| Banner diz "Modo Local" | `firebase-init.js` ainda tem placeholders | Cole `apiKey` e `projectId` corretos (passo 3) |
| Upload trava em 0% | Regras do Storage não publicadas | Vá em Storage → Regras → Cole o texto → Publicar |
| `PERMISSION_DENIED` ao salvar cesta | Regras do Firestore não publicadas | Mesma coisa, aba Regras → Publicar |
| Foto não carrega no site | Erro CORS Storage | No Storage → Regras → confirme `allow read: if true` na path `/cestas` |
| `storageBucket` vazio / undefined | Você copiou só metade do `firebaseConfig` | Volte ao projeto → ⚙️ Configurações → "Seus apps" → Web → copia TUDO |

Se travar em qualquer etapa, me avisa! 💖
