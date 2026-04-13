function generate() {
  let input = document.getElementById("input").value;

  let result = "LEGAL NOTICE:\n\n" +
  "This notice is issued regarding: " + input +
  "\n\nYou are requested to take necessary action.";

  document.getElementById("output").innerText = result;
}
