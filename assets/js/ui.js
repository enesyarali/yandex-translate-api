function UI(){

    
    this.countrySvg = document.getElementById("countrySvg");
    this.countryText = document.getElementById("countryText");
    this.translateWord = document.getElementById("translateWord");

    this.languageList = document.getElementById("languages");
}


UI.prototype.changeUI = function() {
    // Chage UI
    this.countrySvg.src = `assets/country/${this.languageList.value}.svg`;
    this.countryText.innerHTML = this.languageList.options[this.languageList.selectedIndex].textContent;
}


UI.prototype.displayTranslate = function(word){
    this.translateWord.textContent = word;
}