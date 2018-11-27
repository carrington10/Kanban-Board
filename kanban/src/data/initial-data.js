const initialData = {
    tasks: {
        'task-1': { id: 'task-1', author:'Sean',content: 'Create a server '},
        'task-2': { id: 'task-2', author:'Nick',content: 'Run patching'},
        'task-3': { id: 'task-3', author:'Mike',content: 'rebuild a server'},
        'task-4': { id: 'task-4', author: 'Carrington',content: 'create a kanban board'},

    }, // end of task object contains id and content 

    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Work in Progress ',
            taskIds: ['task-1','task-2','task-3','task-4'],
        },
    }, // end of columns 

    columnOrder: ['column-1'],

};
export default initialData; 