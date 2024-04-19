var nome = document.getElementById("nome");

function ValidaCampos() {
    var regex = /[#$%&*()_+\-=\[\]{};':"\\|<>\/]/;
    var input = nome.value;

    if (regex.test(input)) {
        alert("Campo contém caracteres especiais!");
        nome.value = ""; 
        return false;
    }
    return true;
}