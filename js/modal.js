Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
}

class Modal {
    constructor(options) {
        this.options = options;

    }

    _createModalFooter(buttons = []) {
        if (buttons.length === 0) {
            return document.createElement('div');
        }

        const wrap = document.createElement('div');
        wrap.classList.add('modal-footer');

        buttons.forEach(btn => {
            const $btn = document.createElement('button');
            $btn.textContent = btn.text;
            $btn.classList.add('btn');
            btn.class ? $btn.classList.add(`${btn.class}`) : $btn.classList.add('');
            $btn.onclick = btn.handler || noop

            wrap.appendChild($btn)
        })

        return wrap;
    }

    _createModal() {
        const DEFAULT_WIDTH = '600px'
        const modal = document.createElement('div');
        modal.classList.add('vmodal');
        modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay" data-close = "true">
            <div class="modal-window" style="width: ${this.options.width || DEFAULT_WIDTH}">
                <div class="modal-header">
                    ${this.options.closable ? `<span class="modal-close" data-close = "true">&times;</span>` : ''}
                </div >
                <div class="modal-body" data-content>
                    ${this.options.content || ''}
                </div>
            </div >
        </div >
        `)

        const footer = this._createModalFooter(this.options.footerButtons);
        footer.appendAfter(modal.querySelector('[data-content]'));

        document.querySelector('.order').appendChild(modal);
        return modal;
    }

    returnModal() {
        const ANIMATION_SPEED = 200;
        const $modal = this._createModal();
        let closing = false;
        let destroyed = false;

        const modal = {
            open() {
                if (destroyed) {
                    return console.log('Modal is destroyed');
                }
                !closing && $modal.classList.add('open');
            },
            close() {
                closing = true
                $modal.classList.remove('open');
                $modal.classList.add('hide');
                setTimeout(() => {
                    $modal.classList.remove('hide');
                    closing = false;
                }, ANIMATION_SPEED);
            }
        }

        const listener = event => {
            if (event.target.dataset.close) {
                modal.close();
            }
        }

        $modal.addEventListener('click', listener)

        return Object.assign(modal, {
            destroy() {
                $modal.parentNode.removeChild($modal);
                $modal.removeEventListener('click', listener);
                destroyed = true;
            },

            setContent(html) {
                $modal.querySelector('[data-content]').innerHTML = html;
            }
        })
    }
}


let comments = [];

const submitModal = new Modal({
    closable: false,
    width: '620px',
}).returnModal();

document.addEventListener('click', event => {
    event.preventDefault();
    const btnType = event.target.dataset.btn;
    if (btnType === 'order') {
        submitModal.setContent(`<div class="modal_content"> 
            <p class="modal_text">Спасибо за заказ </p>
            <img src="./img/tick.png" class="modal_img">
        </div>
        `);
        submitModal.open();

        //ОЛЕГ, СЮДА!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //*код Олега//

        setTimeout(() => {
            submitModal.close();
        }, 3000)

    }
})


