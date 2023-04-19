//START FILE CHECK FOR 1.1
fetch('https://example.com/file.txt')
  .then(response => response.text())
  .then(text => {
    if (text.includes('go')) {
      /
      /
      chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.action === 'continueScript') {
          var s = document.createElement('script');
          s.src = chrome.runtime.getURL('inject.js');
          s.onload = function() {
              this.remove();
          };
          (document.head || document.documentElement).appendChild(s);
          console.log('Password entered correctly! Continuing script...');
        }
      });
      // END PASSWORD CHECK
    }
  })
  .catch(error => console.log(error));
