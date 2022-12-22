// alert('324234')
// copyTime()
// console.log("23423")
if (!window.firstTimeExecuted) {
    window.firstTimeExecuted = true;
    chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
        if (data.msg == 'feature1') {
            copyTime()
        }

        if (data.msg == 'feature2') {
            setTime()
        }
    });
}

async function copy(textToCopy){
   await navigator.clipboard.writeText(textToCopy);
   
}

async function setTime() {
    let x = await navigator.clipboard.readText()
    let myString = x.replace(/[^0-9:]+/g,'');
    console.log(myString)
    var a = myString.split(':').map(Number); // split it at the colons
    var seconds = (a[0]*60) + (a[1])
    console.log(seconds);
    if (seconds > 0)
    document.getElementsByTagName('video')[0].currentTime = seconds;
  }

function copyTime(){
    let x
    if(document!=undefined) 
    x =  document.evaluate(
        "/html/body/div[1]/div[1]/div/div/main/div/div[1]/div/div/div/div/div/div/div/div/div/section/div/div[1]/div/div[2]/div[1]/div[2]/div[2]/div[5]/div[1]/span[1]"
        , document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue

    if (x != null)
    copy(x.textContent)
}


