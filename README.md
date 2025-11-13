# crc-project-
🚀 CRC Encoder-Decoder

A simple web-based tool to encode and validate data using the Cyclic Redundancy Check (CRC) technique.
It helps understand how CRC works at the bit level by performing mod-2 division, generating remainder, and detecting errors in received data.

📌 Features

🔹 CRC Encoding: Enter a dataword + generator polynomial → get remainder & final codeword
🔹 CRC Decoding: Enter received codeword → checks if any error occurred
🔹 Clean and responsive UI
🔹 100% client-side JavaScript (no backend required)

🛠️ How It Works
This project implements the CRC algorithm using:
XOR-based mod-2 division
Appending (generator length – 1) zeros during encoding
Syndrome checking during decoding
If remainder = 0 → No error
If remainder ≠ 0 → Error detected
The core logic is implemented in script.js using functions like:
mod2div() → performs binary polynomial division
xor() → performs bitwise XOR on strings
encode() → creates codeword
decode() → validates received data

▶️ How to Use

Clone or download the repository
Open index.html in any browser
For encoding:
Enter Data Frame (binary)
Enter Generator Polynomial (binary)
Click Encode
For decoding:
Enter received codeword
Enter the same generator polynomial
Click Check Validity

💡 Why I Built This

This project was created to:
Understand the working of CRC error detection
Visualize how remainder and codeword are generated
Build a simple frontend tool for networking students
Help others test CRC encoding/decoding without writing code

📂 Files Included

index.html → User interface
style.css → UI styling
script.js → CRC logic implementation

📜 License

Free to use, modify, and share for learning purposes ✨

