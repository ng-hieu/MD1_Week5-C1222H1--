let data = [];

function Root() {
    const Root = parseFloat(document.getElementById("Root").value);
    document.getElementById("RsRoot").innerHTML = "Số tiền gốc: " + Root;
}

function minus() {
    let item_root = parseFloat(document.getElementById("Root").value);
    let item_num = parseInt(document.getElementById("Num").value);
    let item_date = document.getElementById("Date").value;
    let item_money = parseFloat(document.getElementById("Money").value);
    let item_text = document.getElementById("Textarea").value;

    class Obj {
        Money
        sum = 0

        constructor(item_Num, item_Date, item_Money, item_Text) {
            this.Num = item_Num;
            this.Date = item_Date;
            this.Money = item_Money;
            this.Text = item_Text;
            this.sum += this.Money

        }
    }

    let item = new Obj(item_num, item_date, item_money, item_text)
    data.push(item);
    render();
    clear();
    caculator(item_money);
}

function render() {
    let table = `<tr>
            <th>STT</th>
            <th>Ngày</th>
            <th>Số tiền</th>
            <th>Ghi chú</th>
            <th>Hành động</th>
        </tr>`
    for (let i = 0; i < data.length; i++) {
        table += `<tr>
            <td>${data[i].Num}</td>
            <td>${data[i].Date}</td>
            <td>${data[i].Money}</td>
            <td>${data[i].Text}</td>
            <td>
            <button onclick="editItem(${data[i].Num})">Sửa</button>
            <button onclick="deleteItem(${data[i].Num})">Xóa</button>
            </td>
        </tr>`
    }
    document.getElementById("table").innerHTML = table;
}

function clear() {
    parseInt(document.getElementById("Num").value = "");
    document.getElementById("Date").value = "";
    parseFloat(document.getElementById("Money").value = "");
    document.getElementById("Textarea").value = "";
}

function deleteItem(x) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].Num == x) {
            data.splice(i, 1);
        }
    }
    render();
}

function editItem(x) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].Num == x) {
        }
    }
}

function caculator(num2) {

}