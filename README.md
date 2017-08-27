# CSV to Excel Converter for UTF-8
By default, Excel will not read UTF-8 characters correctly while importing CSVs encoded as UTF-8.

This simple script adds the Byte Order Marker (BOM) for UTF-8 at the start of a CSV. Excel will read the BOM and correctly interpret UTF-8 characters when when opening the CSV.

## How to Use
`npm convert your-file-path-here.csv`

Will output a converted copy of the CSV to the /output directory.
