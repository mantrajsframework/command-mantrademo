# Mantra command-mantrademo application

This Mantra project defines a simple command to get in real time Bitcoin prices from exchanges.

Install with:

```bash
$ mantrad install
```

The command is defined in *simplecommand* component and is named as *getbtcprice*.

After installation, call the command with the coin you want to get the current price (usd, eur, etc.). If the parameter is missing, then all coins are shown.

```bash
$ mantrad getbtcprice usd
```

The project defines two Mantra components:

* getapi: defines a simple api to make get API Rest calls.
* simplecommand: implements the command

# More about Mantra Framework

Read official documentation at [Mantra site](https://www.mantrajs.com).

Download demos at [Mantra site demos](https://www.mantrajs.com/mantrademos/showall) and learn by example.

Download common Mantra components at [Mantra site components](https://www.mantrajs.com/marketplacecomponent/components).