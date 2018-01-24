
var notas=[];

function atualizaSection(section){
    //criar uma variavel q vai guardar o html de todas as notas q devem aparecer na tela
var corpo ='';
    //percorrer a list de notas e criar o template de cada nota
    for (var index = 0; index < notas.length; index++) {
        corpo += '<form class="note">'+
                        '<button class="note__control" type="button" onclick="removerNota('+ index +', this.form.parentElement)">' +
                            '<i class="fa fa-times" aria-hidden="true"></i>' +
                        '</button>' +
                         '<h1 class="note__title">' + notas[index].titulo + '</h1>' +
                         '<p class="note__body">' + notas[index].texto + '</p>' +
                     '</form>';
    };
section.innerHTML = corpo;
    // colocar o html de todo mundo dentro da section;

}

function addNota(inputTitulo, textareaTexto, form, section){
//criar uma variavel notat
var nota ={
    titulo:inputTitulo.value,
    texto:textareaTexto.value
};

console.log(nota);

//adicionar nota dentro da lista
notas.push(nota)

// limpar o formulário
// document.getElementsByClassName("note").reset(); 
atualizaSection(section);

form.reset();

}

function removerNota(index, section){ 

notas.splice(index, 1);

// atualizar tela
atualizaSection(section);

}