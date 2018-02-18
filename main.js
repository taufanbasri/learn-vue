Vue.component('modal', {
    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">
                    <slot name="header">
                    You can add default header here.
                    </slot>
                </p>
                <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <slot>
                You can add default body here.
                </slot>
            </section>
            <footer class="modal-card-foot">
                <slot name="footer">
                    You can add default footer here.
                </slot>
            </footer>
            </div>
        </div>
    `
});

new Vue({
   el: '#root',
})