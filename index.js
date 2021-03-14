var string = `
10 print "estando este programa simples"

20 a = 10

30 gosub 80

40 if a > 50 then goto 110

50 if a < 5 then goto 75
if a == 5 then goto 75
if a > 5 then goto 75
if a != 5 then goto 75
if 5 == a then goto 75
if 3 == 5 then goto 75

60 print a

65 a = a - 1

75 goto 110

80 a = a * 2 + 44
80 a = a % 2 ^ 44


90 print a

100 return

110 goto 10
`;

var bananaSplit = string.split("\n");

var bananaClear = bananaSplit.filter((value) => {
  return value !== "";
});

console.log("STRING ==>", bananaClear);

for (var i = 0; i < bananaClear.length; i++) {
  var type = "";
  var subType = "";
  var error = "";

  if (bananaClear[i].match(/print ([A-z]|"*")/g)) {
    type = "command";
    subType = "print";
  }

  if (
    bananaClear[i].match(
      /([a-zA-Z])+ = (\d|(\d|[a-zA-Z] (\^|%|-|\+|\*|\/) \d|[a-zA-Z]))/g
    )
  ) {
    type = "attribution";
    subType = "expression";
  }

  if (bananaClear[i].match(/return ?/g)) {
    type = "command";
    subType = "return";
  }

  if (bananaClear[i].match(/goto \d+/g)) {
    type = "command";
    subType = "goto";
  }

  if (bananaClear[i].match(/gosub \d+/g)) {
    type = "command";
    subType = "gosub";
  }

  if (bananaClear[i].match(/if (.)+ ([=][=]|[!][=]|[>]|[<]) (.)+ ?\d+/g)) {
    type = "command";
    subType = "if";
  }

  if (error !== "") {
    bananaClear[i] = {
      error,
      type,
      value: bananaClear[i],
    };
  } else {
    bananaClear[i] = {
      type,
      subType,
      value: bananaClear[i],
    };
  }
}

console.log("RESULT ==> ", bananaClear);
