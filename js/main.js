var network = new brain.NeuralNetwork();
network.train([
    {input: {rojo: 0, verde: 0, azul: 0}, output: {color: 1}},      //NEGRO
    {input: {rojo: 1, verde: 1, azul: 1}, output: {color: 0}},      //BLANCO
    {input: {rojo: 1, verde: 0, azul: 0}, output: {color: 1}},      //ROJO
    {input: {rojo: 0, verde: 1, azul: 0}, output: {color: 0}},      //VERDE
    {input: {rojo: 0, verde: 0, azul: 1}, output: {color: 1}},      //AZUL
]);

function normalizar(cadena) {
    return cadena.toLowerCase().trim(); 
}

function traducir(color) {
    switch (color) {
        case 'rojo':
            $('#color-en').text('Red')
            aplicarColor(255, 0, 0)
            break;
        case 'naranja':
            $('#color-en').text('Orange')
            aplicarColor(255, 165, 0)
            break;
        case 'amarillo':
            $('#color-en').text('Yellow')
            aplicarColor(255, 255, 0)
            break;
        case 'verde':
            $('#color-en').text('Green')
            aplicarColor(0, 255, 0)
            break;
        case 'cian':
            $('#color-en').text('Cian')
            aplicarColor(0, 255, 255)
            break;
        case 'azul':
            $('#color-en').text('Blue')
            aplicarColor(0, 0, 255)
            break;
        case 'magenta':
            $('#color-en').text('Magenta')
            aplicarColor(255, 0, 255)
            break;
        case 'negro':
            $('#color-en').text('Black')
            aplicarColor(0, 0, 0)
            break;
        case 'gris':
            $('#color-en').text('Gray')
            aplicarColor(128, 128, 128)
            break;
        case 'blanco':
            $('#color-en').text('White')
            aplicarColor(255, 255, 255)
            break;
        default:
            Swal.fire('Error!', 'Ese color no esta considerado', 'error');
            break;
    }
}

function aplicarColor(r, g, b) {
    $('#color-en').css("color", `rgb(${r}, ${g}, ${b})`)

    var entrada = {
        rojo: r/255,
        verde: g/255,
        azul: b/255,
    };

    network.run(entrada).color > .5 ? $('#color-en').css("background", "white") : $('#color-en').css("background", "black");
}

$(document).ready(() => {
    $('#traducir').click(() => {
        color = normalizar($('#color-es').val());
        traducir(color);
    });
});