function copyShort() {
  var copyText = arguments.callee.caller.arguments['0'].target;
  var target = document.getElementById('copyBuffer');
  var numberColumn = copyText.innerText;
  var tempDescription = shortDescription.replace("{numberColumn}", numberColumn);
  target.value = tempDescription;
  target.select();
  target.setSelectionRange(0, 99999)
  document.execCommand("copy");
  //alert("Copied the text: " + target.value);
}

function copyLong() {
  var copyText = arguments.callee.caller.arguments['0'].target;
  var target = document.getElementById('copyBuffer');
  var numberColumn = copyText.parentElement.parentElement.previousSibling.textContent;
  var par = copyText.parentElement;
  var dev = par.children[0].textContent;
  var iast = par.children[1].textContent.replace(/\//g, "");
  var tempDescription = dev + " " + iast + " " + longDescrtiption.replace("{numberColumn}", numberColumn);
  target.value = tempDescription;
  target.select();
  target.setSelectionRange(0, 99999);
  document.execCommand("copy");
  //alert("Copied the text: " + target.value);
}

const shortDescription = "(KEWA {numberColumn})";
const longDescrtiption = "// Mayrhofer, Manfred (1926-2011). Kurzgefasstes etymologisches Wörterbuch des Altindischen. A concise etymological Sanskrit dictionary / von Manfred Mayrhofer. - Heidelberg : Winter, 1953-1980. - (Indogermanische Bibliothek. R. 2, Wörterbücher). {numberColumn}.";