chrome.contextMenus.create ({
    "title" : "DeepL翻訳",
    "type" : "normal",
    "contexts" : ["selection"],
    onclick: function (c) {
        var text = encodeURIComponent(c.selectionText);
        createTab("https://www.deepl.com/translator#en/ja/" + text);
    }
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
