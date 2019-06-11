function Translate(word, language) {

    this.apikey = "API KEY";
    this.word = word;
    this.languages = language;

    this.xhr = new XMLHttpRequest();
}


Translate.prototype.translateWord = function(callback) {

    if(this.word.length < 1) return;

    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.languages}`;

    this.xhr.open("GET", endpoint);

    this.xhr.onload = () => {
        if(this.xhr.status === 200 && this.word !== "") {
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            
            callback(null,text);
        }
        else {
            callback(new Error("Bir hata oluştu", null));
        }
    }

    this.xhr.send();

}

Translate.prototype.changeParameters = function(newWord, newLanguage) {
    this.word = newWord;
    this.languages = newLanguage;
}
