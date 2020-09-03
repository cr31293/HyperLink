var attacks = [
    {
        name: 'Tilt',
        stats: [
            {
                id: "0",
                damage: "9%",
                angle: "95°",
                kbg: "122",
                bkb: "30",
                skb: "0",
                lag: "6",
                stun: "6",
                adv: "-14/-9",
                size: "3.6"
            }
                
            {
                id: 1,"1",
                damage: "9%",
                angle: "85°",
                kbg: "130",
                bkb: "30",
                skb: "0",
                lag: "6",
                stun: "6",
                adv: "-14/-9",
                size: "4.2"
            },
            {
                id: "2",
                damage: "9%",
                angle: "85°",
                kbg: "124",
                bkb: "30",
                skb: "0",
                lag: "6",
                stun: "6",
                adv: "-14/-9",
                size: "2.8"
            },
            {
                id: "3",
                damage: "9%",
                angle: "85°",
                kbg: "123",
                bkb: "30",
                skb: "0",
                lag: "6",
                stun: "6",
                adv: "-14/-9",
                size: "2.8"
            }
        ]
    },
    {
        name: 'Rapid Jab'
               stats: [
            {
                HitboxId: "0",  
                Damage: "1%",
                Angle: "0°",
                KBG: "40",
                BKB: "15",
                SKB: "0",
                HitLag:"3",
                ShieldStun: "2",
                ShieldAdv: "-10",
                Size: "4.4"     
            },
            {
                HitboxId: "1",
                Damage: "1%",
                Angle: "0°",
                KBG: "40",
                BKB: "15",
                SKB: "0",
                HitLag: "3",
                ShieldStun: "2",
                ShieldAdv: "-10",
                Size: "4.4"
            },
            {
                HitboxId: "2",
                Damage: "1%",
                Angle: "0°",
                KBG: "40",
                BKB: "15",
                SKB: "0",
                HitLag: "3",
                ShieldStun: "2",
                ShieldAdv: "-10",
                Size: "2.8"
            },
            {
                HitboxId: "3",
                Damage: "1%",
                Angle: "0°",
                KBG: "40",
                BKB: "15",
                SKB: "0",
                HitLag: "3",
                ShieldStun: "2",
                ShieldAdv: "-10",
                Size: "2"
            },
        ]
    }
  ];

// var uTiltLabels = ["Hitbox Id", "Damage", "Angle", "KBG", "BKB", "SKB", "Hit Lag", "Shield Stun", "Shield Adv", "Size"];
// var uTilt = [
//     ["0", "9%", "95°", "122", "30", "0", "6", "6", "-14/-9", "3.6"],
//     ["1", "9%", "85°", "130", "30", "0", "6", "6", "-14/-9", "4.2"],
//     ["2", "9%", "85°", "124", "30", "0", "6", "6", "-14/-9", "2.8"],
//     ["3", "9%", "85°", "123", "30", "0", "6", "6", "-14/-9", "2.8"]
// ];

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

// var rapidJabLabels = ["Hitbox Id", "Damage", "Angle", "KBG", "BKB", "SKB", "Hit Lag", "Shield Stun", "Shield Adv", "Size"];
// var rapidJab = [
//     ["0", "1%", "0°", "40", "15", "0", "3", "2", "-10", "4.4"],
//     ["1", "1%", "0°", "40", "15", "0", "3", "2", "-10", "4.4"],
//     ["2", "1%", "0°", "40", "15", "0", "3", "2", "-10", "2.8"],
//     ["3", "1%", "0°", "40", "15", "0", "3", "2", "-10", "2"]
// ];

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

$('#jab1').on('click', function(event) {
    event.preventDefault();
    console.log("click");
    buildTable(jab1Labels, jab1);
});


function buildTable(labels, data) {
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var container = document.getElementById('table-container');
    var newImg = $('<img>');
    var img = newImg.attr('src', "gif/" + data + ".gif")
    
    var theadTr = document.createElement('tr');
    for (var i = 0; i < labels.length; i++) {
        var theadTh = document.createElement('th');
    theadTh.innerHTML = labels[i];
    theadTr.appendChild(theadTh);
}
thead.appendChild(theadTr);
table.appendChild(thead);

for (var a = 0; a < data.length; a++) {
    var tbodyTr = document.createElement('tr');
    for (var b = 0; b < labels.length; b++) {
        var tbodyTd = document.createElement('td');
        tbodyTd.innerHTML = data[a][b];
        tbodyTr.appendChild(tbodyTd);
    }
    tbody.appendChild(tbodyTr);
}
table.appendChild(tbody);

container.append

container.appendChild(table);
}

var Link = new Object();
    Link.row0 = ["Weight", "Walk Speed", "Run Speed", "Air Speed", "Air Acceleration", "Fall Speed", "FF Speed", "Gravity", "Traction", "Jump Squat", "SH Air Time", "FH Air Time", "SH FF Air Time", "FH FF Air Time", "Earliest SH FF", "Earliest FH FF"];
    Link.row1 = ["104", "1.2", "1.3", "1", ".06", "2.13", "3", ".11", ".1", "6 Frames", "32 Frames", "49 Frames", "20 Frames", "36 Frames", "Frame 14", "Frame 23"];
    Link.row2 = ["6-7th", "6-7th", "23-24th", "6-7th", "5-11th", "7-9th", "4-5th", "8-11th", "1-4th", "23-25th", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A",];