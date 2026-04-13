function generate() {
  let input = document.getElementById("input").value.toLowerCase();
  let output = "";

  if (input.includes("file case") || input.includes("how to file case")) {
    output = "Steps to file a case in India:\n\n" +
    "1. Consult a lawyer\n" +
    "2. Prepare plaint\n" +
    "3. File case in court\n" +
    "4. Pay court fees\n" +
    "5. Attend hearings";
  } 
  else if (input.includes("legal notice")) {
    output = "How to send a legal notice:\n\n" +
    "1. Draft notice\n" +
    "2. Mention issue clearly\n" +
    "3. Send via advocate\n" +
    "4. Wait for response";
  } 
  else if (input.includes("affidavit")) {
    output = "Affidavit meaning:\n\n" +
    "An affidavit is a written statement sworn under oath.\n\n" +
    "Steps:\n1. Write statement\n2. Print on stamp paper\n3. Sign before notary";
  } 
  else {
    output = "Ask something like:\n- How to file a case\n- Legal notice\n- Affidavit";
  }

  document.getElementById("output").innerText = output;
}
