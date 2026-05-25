# Landing page - Açaí da Maravilhosa

Projeto criado com HTML, CSS e JavaScript puro para uma vendedora de açaí.

## Como abrir

Abra o arquivo `index.html` no navegador.

## Estrutura

- `index.html`: cria as seções da página e define o conteúdo.
- `styles.css`: controla layout, cores, responsividade e aparência visual.
- `script.js`: adiciona comportamento ao menu mobile, destaque do item ativo no menu e envio local de feedback.
- `assets/`: guarda as imagens usadas na landing page.

## Como construir uma página assim

1. Comece pelo HTML sem pensar em beleza. Crie as seções principais: header, hero, apresentação, produtos, contato, localização, feedback e footer.
2. No CSS, defina primeiro as variáveis de cor em `:root`. Isso facilita trocar a identidade visual depois.
3. Monte o layout com `display: grid` e `display: flex`. Use `grid` para áreas grandes e `flex` para alinhar itens menores, como botões e menu.
4. Garanta responsividade com `@media`. Neste projeto, abaixo de `980px` o menu vira botão e os grids passam para uma coluna.
5. Use JavaScript apenas onde existe interação: abrir menu, marcar a seção ativa e adicionar feedback na tela.
6. Para transformar em um projeto Next.js depois, cada seção pode virar um componente React: `Hero`, `Products`, `Contact`, `Location` e `Feedback`.

## Pontos para personalizar

- Troque o número do WhatsApp nos links `https://wa.me/5500000000000`.
- Atualize endereço, cidade e horário em `index.html`.
- Substitua o e-mail `contato@acaidamaravilhosa.com`.
- Altere preços e sabores na seção `#produtos`.
