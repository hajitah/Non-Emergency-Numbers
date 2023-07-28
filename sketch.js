var data;

function preload() {
    data = loadJSON("numbers.json");
}

function setup() {
    stateAsk();
  }

function stateAsk() {
    //variable to count which state
    var num;
    //ask user for state name
    var stateName = document.getElementById("state").value;
    //see what state to issue
    if(stateName == "Alabama"){
        num = 0;
    } else if (stateName == "Alaska"){
        num = 1;
    } else if (stateName == "Arizona"){
        num = 2;
    } else if (stateName == "Arkansas"){
        num = 3;
    } else if (stateName == "California"){
        num = 4;
    } else if (stateName == "Colorado"){
        num = 5;
    } else if (stateName == "Connecticut"){
        num = 6;
    } else if (stateName == "Delaware"){
        num = 7;
    } else if (stateName == "Florida"){
        num = 8;
    } else if (stateName == "Georgia"){
        num = 9;
    } else if (stateName == "Hawaii"){
        num = 10;
    } else if (stateName == "Idaho"){
        num = 11;
    } else if (stateName == "Illinois"){
        num = 12;
    } else if (stateName == "Indiana"){
        num = 13;
    } else if (stateName == "Iowa"){
        num = 14;
    } else if (stateName == "Kansas"){
        num = 15;
    } else if (stateName == "Kentucky"){
        num = 16;
    } else if (stateName == "Louisiana"){
        num = 17;
    } else if (stateName == "Maine"){
        num = 18;
    } else if (stateName == "Maryland"){
        num = 19;
    } else if (stateName == "Massachusetts"){
        num = 20;
    } else if (stateName == "Michigan"){
        num = 21;
    } else if (stateName == "Minnesota"){
        num = 22;
    } else if (stateName == "Mississippi"){
        num = 23;
    } else if (stateName == "Missouri"){
        num = 24;
    } else if (stateName == "Montana"){
        num = 25;
    } else if (stateName == "Nebraska"){
        num = 26;
    } else if (stateName == "Nevada"){
        num = 27;
    } else if (stateName == "New Hampshire"){
        num = 28;
    } else if (stateName == "New Jersey"){
        num = 29;
    } else if (stateName == "New Mexico"){
        num = 30;
    } else if (stateName == "New York"){
        num = 31;
    } else if (stateName == "North Carolina"){
        num = 32;
    } else if (stateName == "North Dakota"){
        num = 33;
    } else if (stateName == "Ohio"){
        num = 34;
    } else if (stateName == "Oklahoma"){
        num = 35;
    } else if (stateName == "Oregon"){
        num = 36;
    } else if (stateName == "Pennsylvania"){
        num = 37;
    } else if (stateName == "Rhode Island"){
        num = 38;
    } else if (stateName == "South Carolina"){
        num = 39;
    } else if (stateName == "South Dakota"){
        num = 40;
    } else if (stateName == "Tennessee"){
        num = 41;
    } else if (stateName == "Texas"){
        num = 42;
    } else if (stateName == "Utah"){
        num = 43;
    } else if (stateName == "Vermont"){
        num = 44;
    } else if (stateName == "Virginia"){
        num = 45;
    } else if (stateName == "Washington"){
        num = 46;
    } else if (stateName == "West Virginia"){
        num = 47;
    } else if (stateName == "Wisconsin"){
        num = 48;
    } else if (stateName == "Wyoming"){
        num = 49;
    } else if (num > 49 || num < 0){
        num = -1;
        createElement('h1', "This state does not exist.");
        return; 
    }
    //clear previous entry
    clearFields();
    //output numbers for cities in state
    var state = data.states[num].state;
    document.getElementById("StateName").innerHTML = state;
    var cities = data.states[num].cities;
    var phone = data.states[num].phone;
    for(var i = 0; i < cities.length; i++){
        document.getElementById("CityPhoneInfo").innerHTML += cities[i] + " - " + phone[i] + '<br/>';
    }
}

function clearFields() {
    document.getElementById("CityPhoneInfo").innerHTML = "";
}

function callFuncs(){
    setup();
    same();
}

function favTutorial() {  
    var mylist = document.getElementById("myList");  
    document.getElementById("state").value = mylist.options[mylist.selectedIndex].text;  
}

function same() {
       
    }