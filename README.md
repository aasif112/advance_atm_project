# Advance ATM Project
<p>Tow ATM project made.</p>
<p>One Simple ATM by following the class instructions. File name in package dist/simple-atm.js</p>
<p>Other Advance ATM by adding more features: File name in package dist/index.js</p>
<p>The Advance ATM can be run by:  npx @aasifali/atm_project</p>

<p><b>Explaination: of Advance ATM</b></p>
<ul>
  <li>It asks a PIN code to start| The PIN code is 1122</li>
  <li>If PIN code is correct then it Ask to select Account Type:</li>
  <li>It gives Three options: Balance inquiry | Amount Withdraw | Amount Transfer</li>
  <li>After each transaction the program shows: Amount withdraw/transfer | Remaining Balance</li>
   <li>If selected transfer ammount</li>
  <ul>
      <li>It asks for an Account number| enter any 8-digit number that should not start with 0</li>
      <li>Then it generates an OTP: and displays it(resembling ssms we get) | As OTP is entered the amount is transferred</li>
  </ul>
  <li>It asks to continue after each transaction. If selected No: It asks to print the receipt of all transanctions</li>
  <li>If selected Yes it prints all transactions made and time of that transaction</li>
</ul>
<p>Thing to improve:</p>
<ol>
  <li>Advance ATM ends:
  <ul>
    <li>Wrong PIN code is entered</li>
    <li>Wrong Account Type is selected</li>
    <li>More Amount is entered than the remaining balance</li>
  </ul>
  </li>
  <li>Changes to Makde in Advance ATM ending:
  <ul>
    <li>If the wrong PIN code is entered it should Display a message and Ask to continue</li>
    <li>It should continue three times if the wrong PIN code is entered then it should End</li>
    <li>Similarly, if the amount entered is more than the balance the program should Ask to continue two times</li>
  </ul>
  </li>
  <li>Make simple-atm.js executable in npx command</li>
</ol>
