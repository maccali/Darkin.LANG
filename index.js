// # = if
// |# = else
// : = variable
// === = equality
// /n = broken line

var string = `
    |Comment|

    :r = 0
    #( :r === 0 ) {
        !('certo')
    } |# {
        !('errado')
    }
`;

var bananaSplit = string.split(" ");

var bananaClear = bananaSplit.filter((value) => {
  return value !== "";
});

for (var i = 0; i < bananaClear.length; i++) {
  bananaClear[i] = bananaClear[i].replace(/\s/g, "");
  var type = "";
  var error = "";

  if (!isNaN(bananaClear[i])) {
    type = "number";
  }

  if (bananaClear[i].includes(":")) {
    type = "variable";
  }

  if (bananaClear[i] === "") {
    type = "clear";
  }

  if (bananaClear[i].includes("#(")) {
    type = "if";
    if (bananaClear[i] !== "#(") {
      error = "Invalid if statment";
    }
  }

  if (bananaClear[i].includes("|#")) {
    type = "else";
    if (bananaClear[i] !== "|#") {
      error = "Invalid reverse if statment";
    }
  }

  if (bananaClear[i].includes("!('") & bananaClear[i].includes("')")) {
    type = "print";
  }

  if (
    bananaClear[i] === "{" ||
    bananaClear[i] === "}" ||
    bananaClear[i] === "(" ||
    bananaClear[i] === ")"
  ) {
    type = "token";
  }

  if (bananaClear[i] === "=") {
    type = "relational";
  }

  if (bananaClear[i] === "===" || bananaClear[i] === "!==") {
    type = "comparable";
  }

  if (bananaClear[i].includes("|")) {
    if (
      bananaClear[i].charAt(0) ===
      bananaClear[i].charAt(bananaClear[i].length - 1)
    ) {
      type = "comment";
    }
  }

  if (!type) {
    error = "Sintax Error";
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
      value: bananaClear[i],
    };
  }
}

console.log("result ==D ", bananaClear);
