var titles = [
    'Test1',
    'Test2',
    'Test3',
    'Test4',
    'Test5'
];


function newTitle(){
    var randomNumber = Math.floor(Math.random() * (titles.length)); 
    var text = $('#textField');
    text.val(titles[randomNumber]);
    updateText();
}