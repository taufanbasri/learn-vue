Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks">{{ task.task }}</task>
        </div>`,
        
    data() {
        return {
            tasks: [
                { task: 'Learn Vue', complete: true },
                { task: 'Learn React', complete: false },
                { task: 'Learn Angular', complete: false },
                { task: 'Learn Laravel', complete: true },
            ]
        };
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
   el: '#root' 
});