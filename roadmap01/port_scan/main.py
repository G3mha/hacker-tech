import socket
import threading
from time import time
import json
import whatportis

# Use the whatportis to get the port description for 443
print(whatportis)

# Função para escanear uma única porta
def scan_port(host, port):
  try:
    # Cria um socket TCP
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
      # Define o tempo limite de conexão
      sock.settimeout(0.5)
      # Conecta ao host e porta
      sock.connect((host, port))
      # Retorna True se a porta estiver aberta
      return True
  except socket.error:
    # Retorna False se a porta estiver fechada ou se ocorrer um erro
    return False

# Função para escanear um intervalo de portas
def scan_ports(host, ports, threads=1):
  # Lista para armazenar os resultados
  results = []

  # Se o número de threads for 1, usa a função scan_port diretamente
  if threads == 1:
      for port in ports:
          results.append((port, scan_port(host, port)))

  # Se o número de threads for maior que 1, usa multithreading
  else:
      # Cria um pool de threads
      with ThreadPool(max_workers=threads) as pool:
          # Enfileira as tarefas de scaneamento
          jobs = [(port, host) for port in ports]
          for port, result in pool.imap_unordered(scan_port, jobs):
              results.append((port, result))

  return results

# Função principal
def main():
  # Obtém o endereço IP ou nome do host
  host = input("Digite o endereço IP ou nome do host: ")

  # Obtém o intervalo
