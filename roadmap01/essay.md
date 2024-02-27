# Roteiro 1 - Análise de tráfego de rede

## Pergunta 1

Tanto Cisco quanto Trend Micro oferecem soluções para IDS, sendo a Trend Micro com maior *market share*.

- [TrendMicro](https://www.trendmicro.com/en_us/ciso/22/l/intrusion-detection-prevention-systems.html)

- [Cisco](https://www.cisco.com/c/pt_br/products/security/ngips/index.html)

## Pergunta 2

Enquanto o IDS fornece somente alertas sobre possíveis ameaças e intrusões, e portanto demanda intervenção manual, o IPS também bloqueia conexões que possam apresentar comportamento suspeito, com base em *digital vacine signatures*. Além disso, também é possível configurar o IPS com parâmetros específicos para quarentenar ou bloquear conexões.

## Pergunta 3

O IP do DHCP desta rede é **10.0.19.14**.

![Pergunta 3](./question03.png)

## Pergunta 4

O nome do controlador de domínio (DC) desta rede é **BURNINCANDLE-DC**.

![Pergunta 4](./question04.png)

## Pergunta 5
Encontrei duas conexões que podem ser classificados como potencialmente maliciosas:

- Conexão 1: GET request em HTTP para um hostname suspeito, *oceriesfornot.top*, que foi descrito em pesquisas na Internet como um hostname que hospeda malware. Além disso, se seguirmos a HTTP stream podemos observar que a requisição resulta em um download de um arquivo texto `Cooper.txt`, que aparenta ser somente uma fachada. Mais que isso, ele pode estar relacionado ao decripting do zip file que também foi baixado nesta mesma conexão.

![Pergunta 5-1](./question05-1.png)

- Conexão 2: Tráfego HTTPS para site de compartilhamento de arquivos, que pode indicar que a infecção ocorreu após o download de um arquivo comprometido, no domínio `situla.bitbit.net`.

![Pergunta 5-2](./question05-2.png)
