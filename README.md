# DESING PATTERNS - GoF
Repositório criado a partir das aulas da sessão de Desing Patterns do [curso de JavaScript e TypeScript](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/) do professor [Luiz Otávio Miranda](https://www.udemy.com/user/luiz-otavio-miranda/) na Udemy. As anotações e abaixo são as que fiz durante as aulas e os diagramas foram baixados do [repositório](https://github.com/luizomf/design-patterns-typescript) do professor Luiz Otávio, as vídeo aulas desta sessão podem ser encontradas no seu canal do YouTube neste [link](https://www.youtube.com/watch?v=MqddY6Ochkc&list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H).
---
# CREATIONAL PATTERNS

* Padrões de criação, tem como objetivo abstrair o processo de instanciação dos objetos e encapsular o conhecimento sobre as classes concretas utilizadas.
* São padrões relacionados com a criação de objetos.
* Tem seu foco nas interfaces dos objetos e não na implementação. 

## SINGLETON

* Garantir que uma classe tenha somente uma instância no programa e fornecer um ponto de acesso global para a mesma.
* Geralmente utilizado para acessar recursos compartilhados como acesso à base de dados, interfaces gráficas, sistemas de arquivos, etc...
* Pode ser utilizado para substituir variáveis globais.
* Utiliza construtor privado e cria uma única instância através do getter.
* Utilizado para ter uma instância disponível em todo o programa.
* Utilizado para substituir variáveis globais.
Diagrama:
(diagrama-singleton)(/diagramas/01-creational-singleton.png)
---

## BUILDER

* Separar a construção de um objeto complexo da sua representação de modo que o mesmo processo de construção possa criar diferentes representações.
* Propõe separar o código que cria do código que usa o objeto.
* Refere-se a criação de objetos com grande complexidade, com construtores muito complexos, formado através da composição de vários objetos ou dependente de algoritmos complexos de criação.
* Permite construir objetos em etapas.
* Permite 'method chaining' sequencias de encadeamento de metódos.
* O objeto final pode variar de acordo com a necessidade.
* É um padrão complexo.
Diagrama:
(diagrama-builder)(/diagramas/01-creational-builder.png)
---

## PROTOTYPE

* Especificar os tipos de objeto a serem criados usando uma instância-protótipo e criar novos objetos pela cópia desse protótipo.
* JavaScritp e TypeScript são linguagens baseadas em protótipos. Para isso utiliza o método: Object.create(prototypeObject)
* É possivel literalmente fazer um objeto herdar de outro.
* A herança é delegada ao protótipo pelo objeto.
* Determina o tipo de objeto a ser criado pelo seu protótipo.
* É utilizado para evitar a recriação de objetos 'caros', que demandam muito serviço de construção ou recursos computacionais.
* Ajuda a evitar a explosão de subclasses (uso do extends).
* É possível manter registro dos objetos protótipos.
* Geralmente é criado apenas com um método 'clone' dentro do objeto protótipo.
* Não deixa as classes visiveis para os códigos que utilizam os objetos clone.
Diagrama:
(diagrama-prototype)(/diagramas/03-creational-prototype.png)
---

## FACTORY METHOD

* Definir a interface para criar um objeto, delegando as subclasses a decisão de que classe instanciar.
* Permite adiar a instanciação para as subclasses.
* Factorys são operações que criam objetos.
* Oculta a lógica de instanciação do código cliente.
* Pode ser criado ou sobrescrito por subclasses.
* Permite a criação de novas factorys sem alterar o código já escrito.
* Permite utilizar parâmetros para definir o objeto que será criado.
* Utilizado quando não se sabe os tipos de objeto que serão necessários ao código.
* Permite a exetensão da factory para criar novos objetos seguindo o OCP do SOLID.
* Desacopla o código que cria do que utiliza o código seguindo o SRP do SOLID.
* Serve de hook para que as subclasses decidam a lógica de criação do objeto.
* Utilizado para eliminar a duplicação de código na criação de objetos.
Diagrama:
(diagrama-factory-method)(/diagramas/04-creational-factory-method.png)
---

## ABSTRACT FACTORY

* Fornece interface de criação de familias/grupos de objetos relacionados ou dependentes sem espicificar suas classes concretas.
* Geralmente e composto por vários Factory Methods.
* Tende a agrupar famílias de produtos compatíveis criando uma fábrica concreta para cada grupo/família de objetos.
* Separa o código que cria do que utiliza os objetos seguindo o SRP do SOLID.
* Facilita a implementação de novos grupos/famílias de objetos seguindo o OCP do SOLID.
* Os grupos podem ser utilizados para definir configurações ou padrões distintos para grupos distintos, como por exemplo uma familia tem o padrão de um OS especifíco e a outra de outro, ou uma traz as configurações de conexão com um bd e a outra a de outro bd.
* Facilita para gerar relação e composição entre objetos de uma mesma família.
* Os objetos podem, ou não, ser utilizados em conjunto.
* É necessário restringir a relação dos objetos a sua família caso trabalhem em conjunto.
* Fornece uma biblioteca de classes de produtos revelando somente suas interfaces e não sua implementação.
* Garante a compatibilidade entre objetos da mesma família.
Diagramas:
(diagrama-abstract-factory-book)(/diagramas/05-creational-abstract-factory-book.png)
(diagrama-abstract-factory-example1)(/diagramas/06-creational-abstract-factory-example-1.png)
(diagrama-abstract-factory-example2)(/diagramas/07-creational-abstract-factory-example-2.png)
(diagrama-abstract-factory-example3)(/diagramas/08-creational-abstract-factory-example-3.png)
---

# STRUCTURAL

* Se preocupam com a forma como os objetos são compostos para formar estruturas maiores.

## COMPOSITE

* Utiliza estrutura de árvore para representar a hierarquia das partes.
* Permite que os clientes tratem de maneira uniforme, tanto objetos individuais, quanto composições de objetos.
* Permite utilizar objetos simples para criar estruturas complexas.
* Organiza a herança entre objetos atráves de hierarquia.
* Na organização da árvore/tree, os nós internos são os objetos Composite, e os nós externos (finais) são os objetos Leaf (responsável pelo serviço final do composite).
* Utiliza métodos para implementar, remover e obter os nós nos composites e leafs.
* Os objetos composite delegam o serviço para as estruturas filhos e os objetos leaf são os que executam o serviço.
* Serve para que o código cliente trate da mesma forma objetos simples e compostos.
* Facilita o polimorfismo, a recursão e a inclusão de novos elementos.
* Tende a quebrar o padrão ISP do SOLID.
Diagrama:
(diagrama-composite)(/diagramas/09-structural-composite.png)
---

## ADAPTER

* Tem como objetivo converter a interface de uma classe em outra classe, que seja esperada pelo código cliente.
* Permite que algumas classes trabalhem junto mesmo tendo interfaces imcompatíveis.
* Funciona com um adaptador, gera compatibilidade entre interfaces incompatíveis.
* Utilizado para definir limites dentro de camadas da aplicação.
* Pode ser utilizado para compatibilizar interfaces de código legado com um novo código.
* Utiliza estrutura por composição ou herança múltipla (herança múltipla nem todas as linguagens suportam).
* Liga a solicitação do código cliente com o framework, lib ou código próprio que irá executar a ação solicitada.
* Facilita a manutenção e troca de framework, libs e códigos legados concentrando em um único ponto (adapter) a necessidade de alteração de código para adaptar ao novo código.
* Utilizado para deixar o código sem dependência direta de código legado ou de terceiros.
* Pode servir para adicionar funcionalidades em subclasses sem ter que extende-las, similar ao que o Decorator faz.
* Diferente do bridge faz as ações funcionarem depois de terem sido projetadas.
* Aplica o SRP e o OCP do SOLID.
Diagramas:
(diagrama-adapter-class)(/diagramas/10-structural-adapter-class.png)
(diagrama-adapter-object)(/diagramas/11-structural-adapter-object.png)
---

## BRIDGE

* Bastante similar ao adapter (o que diferencia é a intenção).
* A intenção do bridge é desacoplar uma abstração de sua implementação, para que as duas possam variar e evoluir independemente ( ABSTRAÇÃO - é um código de alto nível que geralmente delega ações para outro objeto, IMPLEMENTAÇÃO - é o código que realiza as tarefas).
* Diferente do adapter faz as ações funcionarem antes de existirem.
* Utiliza composição em vez de herança.
* Utilizado no desenvolvimento do software quando o sistema for ter variações de abstrações e implementações (é aplicado no desenvolvimento quando se percebe que haverá a necessidade de criar adapters futuramente no código que esta sendo desenvolvido).
* Utilizado para trocar implementações durante o tempo de execução.
* Aplica o SRP e implementa o OCP do SOLID.
Diagrama:
(diagrama-bridge)(/diagramas/12-structural-bridge.png)
Problemas:
(diagrama-bridge-problem1)(/diagramas/13-structural-bridge-problem-1.png)
(diagrama-bridge-problem2)(/diagramas/14-structural-bridge-problem-2.png)
(diagrama-bridge-problem3)(/diagramas/15-structural-bridge-problem-3.png)
(diagrama-bridge-problem4)(/diagramas/16-structural-bridge-problem-4.png)
(diagrama-bridge-problem5)(/diagramas/17-structural-bridge-problem-5.png)
Solução:
(diagrama-bridge-solution)(/diagramas/18-structural-bridge-solution.png)
---

## DECORATOR

* Tem como função agregar responsabilidades adicionais a um objeto de forma dinâmica.
* Fornece uma alternativa flexível a utilização de subclasses para extender funcionalidades.
* Adiciona funcionalidades sem alterar o objeto original.
* Utiliza composição ao invés de herança.
* Utilizado para adicionar funcionalidades em tempo de execução.
* Finge ser o objeto decorado, mas repassa as chamadas de método ao objeto.
* Pode executar ações antes e depois das chamadas de método do objeto decorado.
* Pode manipular dados antes do retorno.
* Utilizado para adicionar funcionalidades sem alterar o código existente.
* Utilizado quando se quer ter composição ao invés de herança.
* Utilizado para reduzir as subclasses.
* Pode se utilizar mais de um decorator em um objeto.
* Aplica OCP do SOLID.
Diagrama:
(diagrama-decorator)(/diagramas/19-structural-decorator.png)
---

## FAÇADE

* Tem como intenção fornecer uma interface unificada para um conjunto de interfaces em um subsistema.
* Define uma interface de alto nível para facilitar o uso do subsistema (cria um objeto de fachada para um sistema mais complexo).
* Tem por objetivo unificar a chamada de métodos de diversos objetos em uma única interface.
* Não tem a intenção de ocultar nada do código cliente, somente facilitar o acesso aos metódos e valores.
* É comum se tornar uma 'God Class' que faz tudo, quebrando o SRP do SOLID, mas permite a criação de fachadas(façade) adicionais que podem ser utilizados por códigos cliente ou por outras fachadas minizando este problema.
* Utilizado para criar pontos de entrada para determinadas partes de um sistema.
* Tem como vantagem facilitar o acesso as entradas do sistema.
Diagrama:
(diagrama-façade)(/diagramas/20--structural-facade.png)
---