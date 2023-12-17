// Nom : 
// Prénom : 
// Groupe :


const settings = {
    jsEnabled: 'js-enabled'
}

document.body.classList.add(settings.jsEnabled);

let i = 1;
let j = 200;

function test(number, max) {
    for (number; number <= max; number++) {
        if (number % 2) {
            document.getElementById('app').insertAdjacentHTML('beforeend', `<li class="grid__item">${number}</li>`);
        }
    }
}

test(i, j);

function test2() {
    document.querySelectorAll('li').forEach(li => {
        const number = parseInt(li.textContent);

        if (number % 3 === 0 && number % 9 === 0) {
            li.classList.add('multiple-3-9');
            li.insertAdjacentHTML('beforeend', `<div class="ribbon-wrapper"><div class="ribbon">3 et 9</div></div>`);
        } else if (number % 3 === 0) {
            li.classList.add('multiple-3');
            li.insertAdjacentHTML('beforeend', `<div class="ribbon-wrapper"><div class="ribbon">3</div></div>`);
        } else {
            li.classList.add('premier');
            li.insertAdjacentHTML('beforeend', `<div class="ribbon-wrapper"><div class="ribbon">premier</div></div>`);
            li.addEventListener('click', (e) => {
                e.currentTarget.classList.add('animate');
                document.querySelectorAll('li').forEach(item => {
                    item.classList.add('grid__item--lighter');

                });
                li.addEventListener('transitionend', (e) => {
                    e.currentTarget.classList.remove('animate');
                    document.querySelectorAll('li').forEach(item => {
                        item.classList.remove('grid__item--lighter');
                    });
                });
            })
        }
    });
}
test2();

window.addEventListener('scroll', () => {
    if (document.getElementById('app').getBoundingClientRect().bottom <= window.innerHeight) {
        if (i === i && j === j) {
            i = i + 200;
            j = j + 200;
            test(i, j);
            test2();
        }
    }
});



