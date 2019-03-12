

var dataController = (function(){
    
var Transaction = function(id, description, cost, polarity){
    this.id = id;
    this.description = description;
    this.cost = cost;
    this.polarity = polarity;
    this.percentage = -1;
}

Transaction.prototype.calcPercentage = function(income){
    if(income > 0)
    this.percentage = Math.round(this.cost/income *100);
    else
    this.percentage = -1;

}
var data = {

    transactions:{
        exp:[],
        inc:[]
    },
    totals:{
        exp:0,
        inc:0
    },
    budget:0,
    expPercent:-1

}

var calculateTotal = function(polarity){
    data.totals[polarity] = data.transactions[polarity].reduce((sum, value) => sum+=value.cost,0);

}

return{
    Transaction: Transaction, //let UI use this constructor
    addItem: function(transaction){
        var arr = data.transactions[transaction.polarity];
        //create new id being previous id+1. check for first item edgecase
        transaction.id = arr.length ? arr[arr.length -1].id + 1: 0; 
        arr.push(transaction);
        
    },
    removeTransaction: function(type, id){
        var ids, index;
        
        ids = data.transactions[type].map((el) => el.id);
        
        index = ids.indexOf(id);


        data.transactions[type].splice(index,1);
     
    },
    calculateBudget: function(){
        //calculate total income/expenses
        calculateTotal('inc');
        calculateTotal('exp');
        //calculate the budget: income - expenses
        data.budget = data.totals.inc - data.totals.exp;
        //calculate the percentage of expenses to income
        if(data.totals.inc > 0) {
            data.expPercent = Math.round(data.totals.exp / data.totals.inc * 100);
        } else data.expPercent = -1;

        data.transactions.exp.forEach((el) => el.calcPercentage(data.totals.inc));
       
    },

    getBudget: function(){
        return{
            totalInc: data.totals.inc,
            totalExp: data.totals.exp,
            budget: data.budget,
            expPercent: data.expPercent,
            itemPercentages: data.transactions.exp.map((el) => (
                {
                    id: el.id,
                    percentage: el.percentage
                }))
        }
    },
    test: data

    

    

}
   
})();

var uiController = (function(dataCtrl){
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        itemPercentage: '.item__percentage',
        addBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetValue: '.budget__value',
        incomeTotal: '.budget__income--value',
        expenseTotal: '.budget__expenses--value',
        expensePercent: '.budget__expenses--percentage',
        deleteBtn: '.item__delete--btn',
        container: '.container',
        month: '.budget__title--month'

    };
    var getMonth = function(){
        var now, year, month;
        var months = ['January','Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        now = new Date();
        return months[now.getMonth()];
    }

    return{
        getInputs: function(){
            return new dataController.Transaction(-1,
                document.querySelector(DOMStrings.inputDescription).value,
                parseFloat(document.querySelector(DOMStrings.inputValue).value),
                document.querySelector(DOMStrings.inputType).value
            )

                
            
        },
        getDomeStrings: function(){
            return DOMStrings;
        },
        addListItem: function(transaction){
            var html, newHtml, el;

            //Create HTML string
            if (transaction.polarity === 'inc'){
                html = `<div class="item clearfix" id="inc-%id%">
                            <div class="item__description">%description%</div>
                            <div class="right clearfix">
                                <div class="item__value">%value%</div>
                                <div class="item__delete">
                                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                </div>
                            </div>
                        </div>`;
                el = DOMStrings.incomeContainer;
            } else{
                html = `<div class="item clearfix" id="exp-%id%">
                            <div class="item__description">%description%</div>
                            <div class="right clearfix">
                                <div class="item__value">%value%</div>
                                <div class="item__percentage">%percentage%</div>
                                <div class="item__delete">
                                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                </div>
                            </div>
                        </div>`;
                el = DOMStrings.expensesContainer;
            }

            newHtml = html.replace('%id%', transaction.id);
            newHtml = newHtml.replace('%description%', transaction.description);
            newHtml = newHtml.replace('%value%', transaction.cost);

            
 
            document.querySelector(el).insertAdjacentHTML('beforeend', newHtml);
        },
        clearFields: function(){
            var fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);
            //convert list to array
            feilds = Array.prototype.slice.call(fields);

            feilds.forEach((el) => el.value = "");
            feilds[0].focus();
            
        },
        displayBudget: function(data){
            document.querySelector(DOMStrings.month).textContent =  getMonth();
            document.querySelector(DOMStrings.budgetValue).textContent =  data.budget;
            document.querySelector(DOMStrings.incomeTotal).textContent = data.totalInc;
            document.querySelector(DOMStrings.expenseTotal).textContent = data.totalExp;
            if(data.expPercent > 0){
            document.querySelector(DOMStrings.expensePercent).textContent =  data.expPercent + '%';
            } else {
                document.querySelector(DOMStrings.expensePercent).textContent = '---';
            }
            data.itemPercentages.forEach((el) => {
                var node = document.querySelector('#exp-' + el.id + ' ' + DOMStrings.itemPercentage);
                if(el.percentage > 0){
                    node.textContent =  el.percentage + '%';
                } else {
                    node.textContent = '---';
                }
            });

            //alternative to above - QSA node list loop
            /*var list = document.querySelectorAll(DOMStrings.itemPercentage);

            var nodeListForEach = function(list, callback){
                for(var i = 0; i < list.length; i++){
                    callback(list[i], i);
                }
            };

            nodeListForEach(list, function(current,index){


            }*/
            
        },
        removeTransaction:function(itemID){
            document.getElementById(itemID).remove();
        
        },
        formatNumber: function(num, type){
            var numSplit, int, dec;

            num = Math.abs(num);
            num = num.toFixed(2);
            numSplit = num.split('.');
            int = numSplit[0];
            if(int.length > 3){
                int = int.substr(0,int.length-3) + ',' + int.substr(int.length -3 ,int.length);
            }
            dec = numSplit[1];
            return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;

            
        },
        changedType: function(){

            var feilds = document.querySelectorAll(
                DOMStrings.inputType + ',' +
                DOMStrings.inputDescription + ',' +
                DOMStrings.inputValue + ',' +
                DOMStrings.addBtn
            );
            [].forEach.call(feilds, (el) => {
                el.classList.toggle('red-focus');
            });

            document.querySelector(DOMStrings.addBtn).classList.toggle('red');

        }

    };
})(dataController);

var controller = (function(uiCtrl, dataCtrl){

    var setupEventListeners = function(){
        var DOM = uiCtrl.getDomeStrings();

        document.querySelector(DOM.inputType).addEventListener('change', changedType);
        document.querySelector(DOM.addBtn).addEventListener('click', addTransaction);

        document.querySelector(DOM.container).addEventListener('click', deleteTransaction);

        document.addEventListener('keyup', function(event){
            if(event.keyCode === 13 || event.which === 13){
                addTransaction();
                
            };
        });

    }
    var changedType = function(){
        uiCtrl.changedType();
    }
    var deleteTransaction = function(event){
        //find item id
        var itemID, splitID,type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if(itemID){
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
            //remove from data
            dataCtrl.removeTransaction(type, ID);
            //remove from ui
            uiCtrl.removeTransaction(itemID);
            //update
            updateBudget();

        }

        
    }

    var updateBudget = function(){
        //1. Calculate the budget
        dataCtrl.calculateBudget();
        //2. Return the budget
        var data = dataCtrl.getBudget();
        //3. Display the budget on the UI
        uiCtrl.displayBudget(data);
        
    }

    var updatePercentages = function(){
        //calculate percentages

        // read percentages from the budget controller

        //
    }
    addTransaction = function(){
        //1. Get field input data
        var newTransaction = uiCtrl.getInputs();
      
        if(newTransaction.description !== "" && !isNaN(newTransaction.cost)){
            
            //2. Add the item to the budget controller
            dataCtrl.addItem(newTransaction);
            //3. Add the item to the UI controller
            uiCtrl.addListItem(newTransaction);
            //4. clear fields
            uiCtrl.clearFields();
            //5. Calculate the budget and update
            updateBudget();
        }
    };

    return {
        init: function(){
            console.log('Application has started');
            setupEventListeners();
            updateBudget();
        }
    }
   
})(uiController,dataController);

controller.init();