> Open this page at [https://pelikhan.github.io/clicker-box/](https://pelikhan.github.io/clicker-box/)

This project turns a microcontroller into a mouse / keyboard clicker, optimized for button smashing games.

## Materials

* 2 arcade buttons (optionally with LEDs)
* 1 board supported by maker
* A few jumper wires to connect everything
* A box to hold everything together
* 1 Micro-usb cable

## Make Instructions

* Join all ground cables into a single wire and connect to **GND** pin.
* Connect ground wires to buttons (including optional LEDs)
* Connect jumper wire from one arcade button to the **RST** pin. This will allow you to switch between bootloader/app mode.
* Connect jumper wire from the other arcade button to pin D12 (or D4) depending on the board. This is the button that turns on/off the clicking.
* If you have a LED button, connect the jumper wire from the arcade button LED pin to pin **A1**. The button will blink as it clicks.
* Compile and download to your board.

## Edit this project ![Build status badge](https://github.com/pelikhan/clicker-box/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://maker.makecode.com/](https://maker.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/pelikhan/clicker-box** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/pelikhan/clicker-box/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/maker
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
