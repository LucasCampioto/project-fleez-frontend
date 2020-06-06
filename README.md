# Fleez

## Stack
Projeto frontend nele foi utilizando ReactJS, HTML, e CSS  como gerenciador de pacotes do NodeJS o yarn. A divisão de arquivos está separada em quatro setores. Os 'components' que seria meu CardGoals. E possui alguns containers. Na parte de usuário temos, login, signup e home page. E para finalizar o container onde fica todas suas metas/tarefas. Para controlar as interações que o usuário tem com o site. Possui uma pasta de actions e redurcers onde é feita a integração com o banco de dados da aplicação. Nelas é controlada as funções que acessa o banco de dados para pegar informações dos videos.

## Sobre

Este projeto é um site onde nele é possível cadastrar suas metas/tarefas. Ele consiste em apenas duas páginas, homepage onde é feito o signup e login, e a página principal onde é cadastradas novas metas.Nele é possível cadastrar uma nova conta e se logar. Além de cadastrar,editar,deletar e marcar como feita uma meta/tarefa. Esse projeto foi feito todo baseado nos serviços da AWS. Foi utilizado o API GATEWAY para gerar os links dos endpoints para fazer as requisições ao backend, além de ter hospedado todo o frontend no S3 para poder gerar um link para que qualquer pessoa possa acessar o site


## Instruções para rodar
Por ser um projeto com ReactJS, há a necessidade do NodeJS. Com ele em sua máquina, basta abrir o terminal e navegar até o repositório clonado e rodar:
1. `yarn install` para instalar todas as dependências;
2. `yarn run start` para rodar localmente o projeto
3. `yarn run build` para gerar uma versão estática do projeto (que ficará na pasta `build`)

## Contato
Lucas Campioto Constantino
l_campioto@hotmail.com
(011) 94783-7190