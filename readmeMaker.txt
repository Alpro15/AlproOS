<!DOCTYPE dbml>

<dbml>
    <head>
        <title>readmeCreator</title>
        <ext>dbml</ext>
    </head>
    <body>
        <content>
            <script type="dbmlScript/3">
                -require lib("fs")
                -require lib("os")
                -com os.returnFileContent(fs.readFileSync("./readmeMaker.txt"))
            </script>
        </content
    </body>
    <footer>
        <createDate>
            <script type="dbmlScript/3">
                -require lib("fs")
                -require lib("os")
                -com os.returnFileDate(fs.readFileSync(this))
            </script>
        </createDate>
    </footer>
</dbml>