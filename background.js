chrome.contextMenus.create({
    id: "myContextMenu",
    title: "Save to Camlistore",
    contexts: ["image"]
});

chrome.contextMenus.onClicked.addListener(function(info) {

  var url = 'popup.html' + '?imgSrc=' + info.srcUrl + '&pageSrc=' + info.pageUrl;

  chrome.windows.create({ url: url, type: "popup", width: 500, height: 700 });
});