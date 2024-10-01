document.getElementById('submit').addEventListener('click', function() {
    const tab1 = document.getElementById('tab1').value.split(',').map(Number);
    const tab2 = document.getElementById('tab2').value.split(',').map(Number);

    // tab3 avec les éléments positifs de tab1
    const tab3 = tab1.filter(num => num > 0);
    // Remplacement de tab2 par des zéros
    const newTab2 = tab2.map(() => 0);

    // Affichage des résultats dans le DOM
    document.getElementById('outputTab3').textContent = tab3.join(', ');
    document.getElementById('outputTab2').textContent = newTab2.join(', ');
});