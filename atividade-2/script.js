document.getElementById('adicionarInfo').addEventListener('click', function () {
    document.getElementById('novaInfoForm').style.display = 'block';
});

document.getElementById('salvarInfo').addEventListener('click', function () {
    let novaInfo = document.getElementById('novaInfo').value;
    if (novaInfo) {
        let p = document.createElement('p');
        p.textContent = novaInfo;
        document.getElementById('perfil').appendChild(p);
        document.getElementById('novaInfoForm').style.display = 'none';
    }
});