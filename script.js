
var uTiltLabels = ["Hitbox Id", "Damage", "Angle", "KBG", "BKB", "SKB", "Hit Lag", "Shield Stun", "Shield Adv", "Size"];
var uTilt = [
    ["0", "9%", "95°", "122", "30", "0", "6", "6", "-14/-9", "3.6"],
    ["1", "9%", "85°", "130", "30", "0", "6", "6", "-14/-9", "4.2"],
    ["2", "9%", "85°", "124", "30", "0", "6", "6", "-14/-9", "2.8"],
    ["3", "9%", "85°", "123", "30", "0", "6", "6", "-14/-9", "2.8"]
];

var uSmashLabels = ["Hitbox Id", "Damage", "Angle", "KBG", "BKB", "SKB", "Hit Lag", "Shield Stun", "Shield Adv", "Size"];
var uSmash = [
    // first hit
    ["0", "4", "98°", "100", "40", "26", "4", "3", "-", "3.2"],
    ["1", "4", "98°", "100", "40", "30", "4", "3", "-", "3.2"],
    ["2", "4", "98°", "100", "40", "33", "4", "3", "-", "3.2"],
    ["3", "4", "98°", "100", "40", "33", "4", "3", "-", "2"],
    // second hit
    ["Hitbox Id", "Damage", "Angle", "KBG", "BKB", "SKB", "Hit Lag", "Shield Stun", "Shield Adv", "Size"],
    ["0", "2", "90°", "100", "0", "30", "3", "2", "-", "3.2"],
    ["1", "2", "90°", "100", "0", "33", "3", "2", "-", "3.2"],
    ["2", "2", "90°", "100", "0", "37", "3", "2", "-", "3.2"],
    ["3", "2", "90°", "100", "0", "40", "3", "2", "-", "2"],
    // third hit
    ["Hitbox Id", "Damage", "Angle", "KBG", "BKB", "SKB", "Hit Lag", "Shield Stun", "Shield Adv", "Size"],
    ["0", "10%", "90°", "80", "90", "0", "6", "6", "-4/-2", "3.2"],
    ["1", "10%", "90°", "80", "90", "0", "6", "6", "-4/-2", "3.6"],
    ["2", "9%", "90°", "80", "90", "0", "6", "6", "-4/-2", "3.2"],
    ["3", "9%", "90°", "80", "90", "0", "6", "6", "-4/-2", "2"]
];

var rapidJabLabels = ["Hitbox Id", "Damage", "Angle", "KBG", "BKB", "SKB", "Hit Lag", "Shield Stun", "Shield Adv", "Size"];
var rapidJab = [
    ["0", "1%", "0°", "40", "15", "0", "3", "2", "-10", "4.4"],
    ["1", "1%", "0°", "40", "15", "0", "3", "2", "-10", "4.4"],
    ["2", "1%", "0°", "40", "15", "0", "3", "2", "-10", "2.8"],
    ["3", "1%", "0°", "40", "15", "0", "3", "2", "-10", "2"]
];

var jab2Labels = ["Hitbox Id", "Damage", "Angle", "KBG", "BKB", "SKB", "Hit Lag", "Shield Stun", "Shield Adv", "Size"];
var jab2 = [
    ["0", "3%", "361°", "60", "10", "0", "4", "3", "-7", "4.4"],
    ["0", "3%", "361°", "60", "10", "0", "4", "3", "-7", "4"],
    ["0", "3%", "361°", "60", "10", "0", "4", "3", "-7", "2.4"],
    ["0", "3%", "361°", "60", "10", "0", "4", "3", "-7", "2.4"]
];


var jab1Labels = ["HitboxID", "Damage", "Angle", "KBG", "BKB", "SKB", "Hit Lag", "Shield Stun", "Shield Adv", "Size"];
var jab1 = [
    ['0', '5%', '361°', '60', '10', '0', '4', '4', '-9', '4.4'],
    ["1", "5%", "361°", "60", "10", "0", "4", "4", "-9", "4"], 
    ["2", "5%", "361°", "60", "10", "0", "4", "4", "-9", "2.4"],
    ["3", "5%", "361°", "60", "10", "0", "4", "4", "-9", "2.4"]
];

buildTable();
function buildTable() {
    console.log(jab1[1][9])
    console.log(jab1.length);
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var container = document.getElementById('table-container');
    
    // for loop for a to sort through rows
    // for loop for b to sort through columns
    //jab1[a[b]]
    
    // creates <th> and appends to <
    var theadTr = document.createElement('tr');
    for (var i = 0; i < jab1Labels.length; i++) {
        var theadTh = document.createElement('th');
    theadTh.innerHTML = jab1Labels[i];
    theadTr.appendChild(theadTh);
}
thead.appendChild(theadTr);
table.appendChild(thead);

// for loop length of object

for (var a = 0; a < jab1.length; a++) {
    console.log("test for loop a");
    var tbodyTr = document.createElement('tr');
    for (var b = 0; b < jab1Labels.length; b++) {
        console.log("test for loop b");
        var tbodyTd = document.createElement('td');
        tbodyTd.innerHTML = jab1[a][b];
        console.log(jab1[0][4]);
        tbodyTr.appendChild(tbodyTd);
    }
    tbody.appendChild(tbodyTr);
}
table.appendChild(tbody);

container.appendChild(table);
}


// buildTable(labels1, objects1, document.getElementById('a'));
// buildTable(labels2, objects2, document.getElementById('b'));
// buildTable(labels3, objects3, document.getElementById('c'));

// var Link = new Object();
//     Link.row0 = ["Weight", "Walk Speed", "Run Speed", "Air Speed", "Air Acceleration", "Fall Speed", "FF Speed", "Gravity", "Traction", "Jump Squat", "SH Air Time", "FH Air Time", "SH FF Air Time", "FH FF Air Time", "Earliest SH FF", "Earliest FH FF"];
//     Link.row1 = ["104", "1.2", "1.3", "1", ".06", "2.13", "3", ".11", ".1", "6 Frames", "32 Frames", "49 Frames", "20 Frames", "36 Frames", "Frame 14", "Frame 23"];
//     Link.row2 = ["6-7th", "6-7th", "23-24th", "6-7th", "5-11th", "7-9th", "4-5th", "8-11th", "1-4th", "23-25th", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A",];

    // var jab1 = new Object(); 
    // jab1.row0 = ["HitboxID", "Damage", "Angle", "KBG", "SKB", "HitLag", "ShieldStun", "ShieldAdv", "Size"];
    // jab1.row1 = ['0', '5%', '361°', '60', '10', '0', '4', '4', '-9', '4.4'];
    // jab1.row2 = ["1", "5%", "361°", "60", "10", "0", "4", "4", "-9", "4"];
    // jab1.row3 = ["2", "5%", "361°", "60", "10", "0", "4", "4", "-9", "2.4"];
    // jab1.row4 = ["3", "5%", "361°", "60", "10", "0", "4", "4", "-9", "2.4"];