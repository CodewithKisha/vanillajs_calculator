let calculator_buttons = [
    {
        name : "delete",
        symbol : "⌫",
        formula : false,
        type : "key"
    },{
        name : "clear",
        symbol : "C",
        formula : false,
        type : "key"
    },{
        name : "percent",
        symbol : "%",
        formula : "/100",
        type : "number"
    },{
        name : "division",
        symbol : "÷",
        formula : "/",
        type : "operator"
    },{
        name : "7",
        symbol : 7,
        formula : 7,
        type : "number"
    },{
        name : "8",
        symbol : 8,
        formula : 8,
        type : "number"
    },{
        name : "9",
        symbol : 9,
        formula : 9,
        type : "number"
    },{
        name : "multiplication",
        symbol : "×",
        formula : "*",
        type : "operator"
    },{
        name : "4",
        symbol : 4,
        formula : 4,
        type : "number"
    },{
        name : "5",
        symbol : 5,
        formula : 5,
        type : "number"
    },{
        name : "6",
        symbol : 6,
        formula : 6,
        type : "number"
    },{
        name : "addition",
        symbol : "+",
        formula : "+",
        type : "operator"
    },,{
        name : "1",
        symbol : 1,
        formula : 1,
        type : "number"
    },{
        name : "2",
        symbol : 2,
        formula : 2,
        type : "number"
    },{
        name : "3",
        symbol : 3,
        formula : 3,
        type : "number"
    },{
        name : "subtraction",
        symbol : "–",
        formula : "-",
        type : "operator"
    },{
        name : "0",
        symbol : 0,
        formula : 0,
        type : "number"
    },{
        name : "comma",
        symbol : ".",
        formula : ".",
        type : "number"
    },{
        name : "calculate",
        symbol : "=",
        formula : "=",
        type : "calculate"
    }
];

const output_operation_element = document.querySelector(".operation .value");
const output_result_element = document.querySelector(".result .value");
const input_element = document.querySelector(".input");



function addButtons(){
    const btns_per_row = 4;
    let btn_num = 0;
    calculator_buttons.forEach(button => {
        if(btn_num % btns_per_row == 0) {
            input_element.innerHTML += `<div class="row"></div>`;
    }
    const row = document.querySelector(".row:last-child");
    row.innerHTML += `<button id="${button.name}">${button.symbol}</button>`;
    btn_num++;
    });
}

addButtons();

// adding  click event listners
input_element.addEventListener("click", e => {
    let btn_target = e.target;
    calculator_buttons.forEach(button => {
        if(button.name == btn_target.id) {
            calculator(button);
        }
    });
});


// setting to default
let output_data = {
    operation: [],
    result: []
}

// Calculating 
function calculator(button) {
    if(button.type == "operator") {
        output_data.operation.push(button.symbol)
        output_data.result.push(button.formula)
    }

   else if(button.type == "number") {
        output_data.operation.push(button.symbol)
        output_data.result.push(button.formula)
    }

    else if(button.type == "key") {
        if(button.name == "clear") {
            output_data.operation = [];
            output_data.result = [];
            updateOutputResult(0);
        }
        else if (button.name == "delete"){
            output_data.operation.pop(); 
            output_data.result.pop(); 
        }
    }

   else if(button.type == "calculate") {
        let join_output = output_data.result.join("");

        let saved_data = eval(join_output);

        updateOutputResult(saved_data);

        output_data.operation = [];
        output_data.result = [];

        output_data.operation.push(saved_data);
        output_data.result.push(saved_data);

        return;

   }

    updateOutputOperation(output_data.operation.join(""));
}


function updateOutputOperation(operation){
    output_operation_element.innerHTML = operation;
};

function updateOutputResult(result){
    output_result_element.innerHTML = result;
};