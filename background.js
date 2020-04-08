chrome.contextMenus.create ({
    "title" : "DeepL翻訳",
    "type" : "normal",
    "contexts" : ["selection"],
    onclick: function (c) {
        var text = encodeURIComponent(c.selectionText);
        createTab("https://www.deepl.com/translator#en/ja/" + text);
    }
});

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response){
        encodeText = encodeURIComponent(response.data);
        createTab("https://www.deepl.com/translator#en/ja/" + encodeText);
    });
});

function createTab(url) {
    chrome.windows.getCurrent(function (f) {
        chrome.tabs.getSelected(f.id, function (g) {
            chrome.tabs.create({
                index: g.index + 1,
                url: url,
                selected: false
            });
        });
    });
}
