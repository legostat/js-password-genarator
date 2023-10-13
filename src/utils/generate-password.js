import { generateArray } from "./generate-array";

const UPPERCASE_CHARCODES = generateArray(65, 90);
const LOWERCASE_CHARCODES = generateArray(97, 122);
const NUMBER_CHARCODES = generateArray(48, 57);
const SYMBOL_CHARCODES = [
  ...generateArray(33, 47),
  ...generateArray(58, 64),
  ...generateArray(91, 96),
  ...generateArray(123, 126),
];

export const generatePassword = ({
  length,
  lowercase,
  uppercase,
  numbers,
  symbols,
}) => {
  const availableCharcodes = [
    ...(lowercase ? LOWERCASE_CHARCODES : []),
    ...(uppercase ? UPPERCASE_CHARCODES : []),
    ...(numbers ? NUMBER_CHARCODES : []),
    ...(symbols ? SYMBOL_CHARCODES : []),
  ];

  return Array(length)
    .fill(0)
    .map((_) =>
      String.fromCharCode(
        availableCharcodes[
          Math.floor(Math.random() * availableCharcodes.length)
        ],
      ),
    )
    .join("");
};
