let dataminus = [];
let dataadd = [];
let RootMoney = 0;
let SurplusMoney = 0;
let clickminus = 0;
let clickadd = 0;
function Root() {
    RootMoney = parseFloat(document.getElementById("Root").value);
    SurplusMoney = RootMoney;
    document.getElementById("RsRoot").innerHTML = "Số tiền gốc: " + RootMoney +"Vnđ";
    document.getElementById("RsRoot").style.color = '#198754';
}

function minus() {
    clickminus +=1;
    document.getElementById("RsClickM").innerHTML = "Số lần chi: "+ clickminus;
    let item_date = document.getElementById("Date").value;
    let item_money = parseFloat(document.getElementById("Money").value);
    let item_text = document.getElementById("Textarea").value;

    SurplusMoney -= item_money;
    document.getElementById("RsSurplus").innerHTML = "Số tiền dư: " + SurplusMoney;
    class Obj1 {
        constructor(item_Date, item_Money, item_Text) {
            this.Date = item_Date;
            this.Money = item_Money;
            this.Text = item_Text;

        }
    }

    let item = new Obj1(item_date, item_money, item_text)
    dataminus.push(item);
    renderMinus();
    clear();
}

function add() {
    clickadd +=1;
    document.getElementById("RsClickA").innerHTML = "Số lần thu: "+ clickadd;
    let item_date = document.getElementById("Date").value;
    let item_money = parseFloat(document.getElementById("Money").value);
    let item_text = document.getElementById("Textarea").value;
    SurplusMoney += item_money;
    document.getElementById("RsSurplus").innerHTML = "Số tiền dư: " + SurplusMoney;
    class Obj2 {
        constructor(item_Date, item_Money, item_Text) {
            this.Date = item_Date;
            this.Money = item_Money;
            this.Text = item_Text;
        }
    }

    let item = new Obj2(item_date, item_money, item_text)
    dataadd.push(item);
    renderAdd();
    clear();
}

function renderMinus() {
    let table = `<tr class="backgrminus">
            <th class="textcolortb2">STT</th>
            <th class="textcolortb2">Ngày</th>
            <th class="textcolortb2">Số tiền</th>
            <th class="textcolortb2">Ghi chú</th>
            <th class="textcolortb2">Hành động</th>
        </tr>`
    for (let i = 0; i < dataminus.length; i++) {
        table += `<tr class="backgrminus">
            <td class="textcolortb2">${i + 1}</td>
            <td class="textcolortb2">${dataminus[i].Date}</td>
            <td class="textcolortb2">${dataminus[i].Money}</td>
            <td class="textcolortb2">${dataminus[i].Text}</td>
            <td class="textcolortb2">
            <button class="btn btn-light" onclick="deleteItemMinus(${i+1})">Xóa</button>
            </td>
        </tr>`
    }
    document.getElementById("tableminus").innerHTML = table;
}
function renderAdd() {
    let table = `<tr class="backgradd">
            <th class="textcolortb2">STT</th>
            <th class="textcolortb2">Ngày</th>
            <th class="textcolortb2">Số tiền</th>
            <th class="textcolortb2">Ghi chú</th>
            <th class="textcolortb2">Hành động</th>
        </tr>`
    for (let i = 0; i < dataadd.length; i++) {
        table += `<tr class="backgradd"> 
            <td class="textcolortb2">${i + 1}</td>
            <td class="textcolortb2">${dataadd[i].Date}</td>
            <td class="textcolortb2">${dataadd[i].Money}</td>
            <td class="textcolortb2">${dataadd[i].Text}</td>
            <td class="textcolortb2">
            <button class="btn btn-light" onclick="deleteItemAdd(${i+1})">Xóa</button>
            </td>
        </tr>`
    }
    document.getElementById("tableadd").innerHTML = table;
}

function clear() {
    document.getElementById("Date").value = "";
    parseFloat(document.getElementById("Money").value = "");
    document.getElementById("Textarea").value = "";
}

function deleteItemMinus(x) {
    for (let i = 0; i < dataminus.length; i++) {
        if (i+1 == x) {
            dataminus.splice(i, 1);
        }
    }
    renderMinus();
}

function deleteItemAdd(x) {
    for (let i = 0; i < dataadd.length; i++) {
        if (i+1 == x) {
            dataadd.splice(i, 1);
        }
    }
    renderAdd();
}
