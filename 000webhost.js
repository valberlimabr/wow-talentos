        // Aguarde o carregamento completo da página
        window.addEventListener('load', function () {
            // Selecione o elemento pelo atributo href
            var elementToRemove = document.querySelector('a[href="https://www.000webhost.com/?utm_source=000webhostapp&utm_campaign=000_logo&utm_medium=website&utm_content=footer_img"]');

            // Verifique se o elemento foi encontrado antes de tentar removê-lo
            if (elementToRemove) {
                // Remova o elemento pai (a tag <a>)
                elementToRemove.parentNode.removeChild(elementToRemove);
            }
        });
