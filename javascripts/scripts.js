const findElementByContent = (container, tag, content) => {
  var elements = container.getElementsByTagName(tag);
  for(var i = 0; i < elements.length; i++) {
      var element = elements[i];
      if(element.innerHTML === content) {
          return element;
      }
  }
  return null;
}

const iframe = document.getElementById('googleForm');

if (iframe) {
  const innerDoc = iframe.contentDocument || iframe.contentWindow.document;

  const buttonEnviar = findElementByContent(innerDoc, 'span', 'Enviar');

  if (buttonEnviar) {
    buttonEnviar.addEventListener('click', function() {
      console.log('Button clicked!');
    });
  }  
}
