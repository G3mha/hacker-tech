# Roadmap 02 - Exploration on vulnerable environments (MetaExploitable2)

**Author**: Enricco Gemha

**Date**: 03/07/2024

## Task 01

### Discover the target machine IP

After booting up both machines, Kali (source) and MetaExploitable2 (target), on the same network (bridged connection), I executed an `ip a` on source machine, which returned that eth0 has a broadcast of **172.20.10.7/28**. Therefore, I ran a `nmap -sP 172.20.10.7/28` that did a ping on each of the IPs on this subnet, returning three IPs: **172.20.10.1, 172.20.10.6, and 172.20.10.7**. With a quick thought, we can exclude the IP 172.20.10.1, which is always related to the gateway on a subnet. We can also exclude the 172.20.10.7, because it is the IP that is associated with the source machine (Kali), as seen in the output of `ip a`. This leaves us with the IP **172.20.10.6** for the target (MetaExploitable).

![Task 01 - Exercise 00](./docs/img/task01-exercise00.png)

### 