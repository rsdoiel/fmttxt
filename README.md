fmttxt
======

Small plain text formatting library.

Say you want to create a simple text tile table but you want to format
some cell of it to specific length. Here's an simple example

```JavaScript

    var fmt = require("../fmttxt"),
        data = {
            "jane.doe@example.com": {date: "03/19/1902", hour: "9.6"},
            "john.doe@example": {date: "04/01/1902", hour: "3.5"}
        };

    // Create a simple heading line
    console.log("| " + 
        [fmt.right("Contact", 36), fmt.left("Hour", 24), fmt.center("Date", 24)].join(" | ") +
        " |");
    // Create a separator row
    console.log("+-" +
        [fmt.left("-", 36, "-"), fmt.left("-", 24, "-"), fmt.left("-", 24, "-")].join("-+-") +
        "-+");

    // Now our simple table.
    Object.keys(data).forEach(function (contact) {
        // Create a data row
        console.log("| " +
            [fmt.right(contact, 36), fmt.left(data[contact].hour, 24), fmt.center(data[contact].date, 24)].join(" | ") +
            " |");
        // Create a separator row
        console.log("+-" +
            [fmt.left("-", 36, "-"), fmt.left("-", 24, "-"), fmt.left("-", 24, "-")].join("-+-") +
            "-+");
    });
```
