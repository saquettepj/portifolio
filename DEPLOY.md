# 🚀 Deploy no GitHub Pages

## Configuração do Repositório

1. **Crie um repositório no GitHub** com o nome `home-port`
2. **Faça o push do código** para o repositório
3. **Configure o GitHub Pages**:
   - Vá em Settings > Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)

## Deploy Manual

### 1. Build do Projeto
```bash
npm run build
```

### 2. Deploy da Pasta dist
```bash
# Opção 1: Usando gh-pages (recomendado)
npm install --save-dev gh-pages

# Adicione ao package.json:
"scripts": {
  "deploy": "gh-pages -d dist"
}

# Execute o deploy
npm run deploy
```

### 3. Configuração Automática (GitHub Actions)

Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## ⚠️ Importante

- **Altere o base path** no `vite.config.ts` se o nome do repositório for diferente de `home-port`
- **Teste localmente** com `npm run preview` antes do deploy
- **Verifique** se todos os assets estão carregando corretamente

## 🔗 URL Final

Após o deploy, seu portfolio estará disponível em:
`https://seu-usuario.github.io/home-port/`
