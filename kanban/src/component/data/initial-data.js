const initialData = {
    tasks: {
       

    }, // end of task object contains id and content 


    columns: {
        'column-1': {
            id: 'column-1',
            title: 'In Progress ',
            taskIds: [],
            checkId:1
        },
        'column-2' : {
            id: 'column-2',
            title: 'Impediments',
            taskIds:[],
            checkId:2
        },
        'column-3' : {
            id: 'column-3',
            title: 'Done',
            taskIds:[],
            checkId:3
        },
        'column-4': {
            id: 'column-4',
            title: 'Backlog',
            taskIds: [],
            checkId:4    
        }
    }, // end of columns 

    columnOrder: ['column-4','column-1','column-2','column-3'],

};
export default initialData; 