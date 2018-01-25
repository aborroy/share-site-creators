// Rebuild the list of columns and when we see the sites-related column
// go by, grab it and remove the action message and link.
var retColumns = [];
if (model.columns != undefined) {
    for each (var col in model.columns) {
        if (col != undefined) {
            if (col.title == "welcome.user.sites.title") {
                col.actionMsg = "";
                col.actionHref = "";
            }
            retColumns.push(col);
        }
    }
}
model.columns = retColumns;