# bleadvparse

A Node.js command line utility to parse BLE advertisement packets. Uses [bleadvertise](https://github.com/tessel/bleadvertise).

## Usage

Clone, run `npm install`, and then parse a packet:

```bash
node . 02011a1bff4c000c0e0008c69ae1fab7f0c391281a0d6e10064b1e2ae6fdf7
```
Gives the output:
```
Parsing input: 02011a1bff4c000c0e0008c69ae1fab7f0c391281a0d6e10064b1e2ae6fdf7

Parsed output:

Flags
[
  'LE General Discoverable Mode',
  'Simultaneous LE and BR/EDR to Same Device Capable (Controller)',
  'Simultaneous LE and BR/EDR to Same Device Capable (Host)'
]

Manufacturer Specific Data
<Buffer 4c 00 0c 0e 00 08 c6 9a e1 fa b7 f0 c3 91 28 1a 0d 6e 10 06 4b 1e 2a e6 fd f7>
```
