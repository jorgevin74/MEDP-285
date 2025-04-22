function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

dragElement(document.getElementById('jar_top'))
dragElement(document.getElementById('butterfly1'));
dragElement(document.getElementById('butterfly2'));
dragElement(document.getElementById('butterfly3'));
dragElement(document.getElementById('butterfly4'));
dragElement(document.getElementById('butterfly5'));
dragElement(document.getElementById('butterfly6'));
dragElement(document.getElementById('butterfly7'));
dragElement(document.getElementById('dinosaur1'));
dragElement(document.getElementById('dinosaur2'));
dragElement(document.getElementById('dinosaur3'));
dragElement(document.getElementById('easter-egg1'));
dragElement(document.getElementById('easter-egg2'));
dragElement(document.getElementById('flower1'));
dragElement(document.getElementById('flower2'));