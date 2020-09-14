/*
pie

| | | | horizontal swords

sword filling up

sword with bar

texture filling up vertically
*/

var container = document.getElementById("container");
function setJob(job) {
    container.innerHTML = "";
    for(buffId in actions[job].buffs) {
        var row = document.createElement("div");
        row.setAttribute("class","row");
        row.setAttribute("id", buffId);

        var item = actions[job].buffs[buffId].visual;
        if(item.type === "BAR") {
            row.innerHTML = "<div class='bar'><div class='progress-bar progress-bar-" + item.color + "'>" +
                            "<span style='width:0%'></span>" +
                            "</div><span class='data-text'>0</span>" +
                            "</div></div>";
        }
        container.appendChild(row);
    }
}

function setCount(buffId, count) {
    if(buffId in actions[me.job].buffs) {
        if(actions[me.job].buffs[buffId].visual.type === "BAR") {
            var elem = document.querySelector(".row[id='" + buffId + "']");
            elem.querySelector(".data-text").innerHTML = count;
            var width = 100 * count / actions[me.job].buffs[buffId].max;
            elem.querySelector(".progress-bar > span").setAttribute("style","width:" + width + "%");
        }
    }
}