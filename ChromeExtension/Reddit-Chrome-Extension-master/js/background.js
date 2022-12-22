  chrome.commands.onCommand.addListener((command) => {
    
    switch (command) {
      case 'toggle-feature-one':
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { msg: "feature1"})
        })
          break;
      case 'toggle-feature-two':
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, { msg: "feature2"})
      })
          break;
      default:
          console.log(`Command ${command} not found`);
  }
});