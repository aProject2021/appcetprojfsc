function filterTable() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("input_buscar_abogado");
    filter = input.value.toUpperCase();
    table = document.getElementById("tb_abogados");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        td1 = tr[i].getElementsByTagName("td")[1];
        td2 = tr[i].getElementsByTagName("td")[2];
        td3 = tr[i].getElementsByTagName("td")[3];
        td4 = tr[i].getElementsByTagName("td")[7];
        if (td) {
            if ((td.innerHTML.toUpperCase().indexOf(filter) > -1) || (td1.innerHTML.toUpperCase().indexOf(filter) > -1)
                || (td2.innerHTML.toUpperCase().indexOf(filter) > -1)
                || (td3.innerHTML.toUpperCase().indexOf(filter) > -1)
                || (td4.innerHTML.toUpperCase().indexOf(filter) > -1)) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

document.getElementById('input_buscar_abogado').addEventListener('keyup', filterTable, false);