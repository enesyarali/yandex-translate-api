function eventListeners() {
    document.getElementById("languages").onchange = function() {
        ui.changeUI();

    }
    document.getElementById("languages").addEventListener("change",translateWord);
    document.getElementById("word").addEventListener("input",translateWord);
}

const translate = new Translate(document.getElementById("word").value,document.getElementById("languages").value);
const ui = new UI();

function translateWord(e) {

    translate.changeParameters(document.getElementById("word").value,document.getElementById("languages").value)
    translate.translateWord(function(err,response){
        if (err) {
            console.log(err);
        }
        else {
            ui.displayTranslate(response);
        }
    });
    e.preventDefault();
}

eventListeners();

