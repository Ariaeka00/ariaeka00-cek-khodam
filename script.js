const userInput = document.getElementById('userInput')
const cekKhodam = ['Maaf anda tidak memiliki Khodam', 'Kingkong \nObat Nyamuk', 'Beruang \nBearbernd', 'Lipan \nJogja', 'Kupu-kupu \nKiranti',]
const p = document.getElementsByTagName('p')
const btn = document.querySelector('.btn')
const h2 = document.querySelector('h2')

btn.addEventListener('click', function () {
    const name = userInput.value
    if (name == '') {
        alert('silahkan tulis nama terlebih dahulu!!!')
        return;
    }

    let comp = localStorage.getItem(name)
    if (!comp) {
        comp = cekKhodam[Math.floor(Math.random() * cekKhodam.length)]
        localStorage.setItem(name, comp)
    }
    p[0].innerHTML = `Khodam yang ada di dalam diri <span>${userInput.value}</span> adalah :`
    h2.innerHTML = comp
    userInput.style.display = 'none'

    p[1].innerHTML = 'Jangan lupa share ke teman-teman kalian yang lain \nagar mereka tahu sosok asli yang ada di dalam diri mereka'

    btn.innerHTML = 'Ulangi'
    btn.onclick = function() {
        location.reload();
    }
})



