# Arduino Notes - Elegoo Super Starter Kit UNO R3 Project

## Lesson 0-1: Installation

Installed software & drivers, configured IDE.

## Lesson 2: Blink

Used preset Arduino project to blink the onboard LED light on on the R3 board.

Learnt about setup and loop functions:
- Setup function is ran once, when board is powered on or reset, and is used to configure variables/modes for the rest of the program.
- Loop is repeatedly ran nonstop - entire function is executed and then once it is finished it is executed again.

Standard baud value is 9600.

## Lesson 3: LED

Used breadboard and resistors to power a red LED bulb.

Learnt about resistors and units of resistance:
- Resistors restrict/resist the flow of electricity, which is important for an LED as without it the LED may receive too much power and destroy the junction where the light is produced.
- Resistance is measured in "Ohms", which is usually shortened to "Ω" the Greek letter Omega.
- Because an Ohm is a low value of resistance (it doesn't resist much at all), we also denote the values of resistors in kΩ (1,000 Ω) and MΩ (1,000,000 Ω). These are called kilo-ohms and mega-ohms.
- The resistance level of a resistor is indicated by coloured bands on the middle of the resistor. 
- On a 4 band code, the first and second bands indicate the first 2 digits, and the 3rd band indicates the multiplier, with the 4th gold band indicating the "tolerance".
- On a 5 band code, the first 3 bands indicate the first 3 digits, the 4th band indicates the multiplier, and the 4th band indicates the tolerance.

![title](images/lesson3resistance.png)

- I connected a red jumper cable into the 5v connection, and a black jumper cable into the ground connection, connecting them both to the top rail of a breadboard. 
- I then connected the negative side of the LED further down in the same rail as the red jumper cable, and the positive side of the LED into the inner "i" row of the breadboard, allowing space for the resistor. 
- I then connected one leg of a 220Ω resistor into the "j" row, right above the positive leg of the LED, and the second leg into the same outer rail as the red jumper cable and the negative LED leg. 

See the diagram below:

![title](images/lesson3wiringdiagram.png)
