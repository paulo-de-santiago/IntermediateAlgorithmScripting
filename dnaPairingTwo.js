function dnaPairing(str) {
  let pairDna = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  let strr = str.split("").map((x) => [x, pairDna[x]]);
  console.log(strr);

  return str;
}

console.log(dnaPairing("ATCGA")); // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

console.log(dnaPairing("TTGAG")); // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

console.log("CTCTA"); // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
