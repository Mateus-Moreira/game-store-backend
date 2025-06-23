# Guia de Migração de Estrutura

- Todos os arquivos relacionados a um domínio devem ficar em uma pasta própria.
- Exemplo: `user/` para tudo relacionado a usuários.
- O módulo principal (`AppModule`) importa os módulos de domínio.
- Use `autoLoadEntities: true` no TypeORM para facilitar o registro das entidades.
