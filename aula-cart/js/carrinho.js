//dados reais viriam do back end (banco de dados)
var produtos = [
    {//0
        codigo : 50,
        imagem : {
            src     : './img/camiseta.png',
            alt     : "texto alternativo",
            title   : "título da imagem"
        },
        descricao    : 'Puma Golf Raglan Tech Polo Tee',
        cor         : 'Purple',
        preco       : 72,
        qtd         : 3,
        tamanho     : 'G'
    },
    {//1
        codigo : 99,
        imagem : {
            src     : './img/camiseta.png',
            alt     : "texto alternativo",
            title   : "título da imagem"
        },
        descricao    : 'Nike Mens Running Shoe',
        cor         : 'White',
        preco       : 50,
        qtd         : 1,
        tamanho     : 'M'
    },
    {//2
        codigo : 287,
        imagem : {
            src     : './img/camiseta.png',
            alt     : "texto alternativo",
            title   : "título da imagem"
        },
        descricao    : 'DC Mens Axis Snowboard Jacket',
        cor         : 'White',
        preco       : 89.97,
        qtd         : 2,
        tamanho     : 'P'
    },
]


/**
    <div class="product">
        <i class="fa fa-times-circle"></i>
        <img src="img/camiseta.png" alt="t-shirt" class="product__img">
        <span id="p1" class="product__name"></span>
        <span id="c1" class="product__color"></span>
        <span id="s1" class="product__size"></span>
        <span id="v1" class="product__value"></span>*<input type="number" name="" id=""> = <span>$216</span>
    </div>

 */
function listarProdutos(){
 //Gerar o template através do array de objetos
    var template = "";
    
    for(var i = 0; i < produtos.length; i++){
        
        template += '<div class="product">';
        template +=     '<i class="fa fa-times-circle"></i>';
        template +=     '<img src="'+ produtos[i].imagem.src +'" alt="t-shirt" class="product__img">';
        template +=     '<span id="p1" class="product__name"> '+ produtos[i].descricao+'</span>';
        template +=     '<span id="c1" class="product__color">'+produtos[i].cor+'</span>';
        template +=     '<span id="s1" class="product__size">'+produtos[i].tamanho+'</span>';
        template +=     '<span id="v1" class="product__value">'+produtos[i].qtd+'</span>*<input type="number" name="" id="" value="'+produtos[i].preco+'"> = <span>$'+(produtos[i].preco *produtos[i].qtd )+'</span>';
        template += '</div>';
    }

    document.getElementById("products").innerHTML = template;
}




















// document.getElementById("p1").innerHTML = productInfo1.name;
// document.getElementById("c1").innerHTML ='Color: '+productInfo1.color;
// document.getElementById("v1").innerHTML = '$'+productInfo1.price;


// var productInfo2 = {
//     name:'Nike Mens Running Shoes',
//     color: 'White',
//     price: 119
// };

// document.getElementById("p2").innerHTML = productInfo2.name;
// document.getElementById("c2").innerHTML ='Color: '+productInfo2.color;
// document.getElementById("v2").innerHTML = '$'+productInfo2.price;

// var productInfo3 = {
//     name:'DC Mens Axis Snowboard Jacket',
//     color: 'Blue',
//     price: 89
// };

// document.getElementById("p3").innerHTML = productInfo3.name;
// document.getElementById("c3").innerHTML ='Color: '+productInfo3.color;
// document.getElementById("v3").innerHTML = '$'+productInfo3.price;