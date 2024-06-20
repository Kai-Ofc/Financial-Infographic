function MudarConteudo(cor) {
    let roxo = document.getElementById("main-roxo");
    let magenta = document.getElementById("main-magenta");
    let rosa = document.getElementById("main-rosa");
    let vermelho = document.getElementById("main-vermelho");

    let header_roxo = document.getElementById("header-roxo")
    let header_magenta = document.getElementById("header-magenta")
    let header_rosa = document.getElementById("header-rosa")
    let header_vermelho = document.getElementById("header-vermelho")


    if (cor === 'Roxo') {
        console.log('Roxo')

        header_roxo.style.height = "10vh"
        header_magenta.style.height = "7vh"
        header_rosa.style.height = "7vh"
        header_vermelho.style.height = "7vh"

        roxo.style.display = "grid"
        magenta.style.display = "none"
        rosa.style.display = "none"
        vermelho.style.display = "none"
    } else if (cor === 'Magenta') {
        console.log('Magenta');
        
        header_magenta.style.height = "10vh"
        header_roxo.style.height = "7vh"
        header_rosa.style.height = "7vh"
        header_vermelho.style.height = "7vh"

        magenta.style.display = "grid";
        roxo.style.display = "none";
        rosa.style.display = "none"
        vermelho.style.display = "none"
    } else if (cor === 'Rosa') {
        console.log('Rosa')
        
        header_rosa.style.height = "10vh"
        header_magenta.style.height = "7vh"
        header_roxo.style.height = "7vh"
        header_vermelho.style.height = "7vh"

        rosa.style.display = "grid"
        magenta.style.display = "none"
        roxo.style.display = "none"
        vermelho.style.display = "none"
    } else {
        console.log('Vermelho')
        
        header_vermelho.style.height = "10vh"
        header_magenta.style.height = "7vh"
        header_rosa.style.height = "7vh"
        header_roxo.style.height = "7vh"

        vermelho.style.display = "grid"
        magenta.style.display = "none"
        roxo.style.display = "none"
        rosa.style.display = "none"
    }    
}