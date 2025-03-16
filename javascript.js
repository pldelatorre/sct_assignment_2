function vulnerableFunction(userInput) {
    // Insecure use of eval()
    eval(userInput);
  
    // Insecure use of innerHTML
    document.getElementById('output').innerHTML = userInput;
  
    // Potential prototype pollution
    Object.prototype.polluted = userInput;
  
    // Insecure regular expression (ReDoS)
    const regex = /^(a+)+$/;
    regex.test(userInput);
  
    // Insecure use of setTimeout with a string
    setTimeout(userInput, 1000);
  
    // Missing input validation
    let parsedInt = parseInt(userInput);
    if (isNaN(parsedInt)) {
      parsedInt = 0; //Defaulting, but not validating type or range.
    }
  
    // Potential XSS from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const paramValue = urlParams.get('param');
    document.getElementById('paramOutput').innerHTML = paramValue;
  
    //Using document.write which can be dangerous after the initial page load.
    document.write(userInput);
  
  }
  
  // Example usage (simulating user input)
  const userInput = "<img src=x onerror=alert(1)>"; // Example XSS payload
  vulnerableFunction(userInput);
  