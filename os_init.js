/*
 * Publisher: Alpro Development
 * Author: Alpro
 * Description: This JavaScript file imports AlproOS File.
 * Version: 1.0.0
 * Date: March 28, 2024
 */
try {
    const fs = require("fs")
    const path = require("path")
    const user = path.join(require("os").homedir(), "Desktop")
    const username = require("os").userInfo().username
    const { exec } = require("child_process")
    const lockJSON = fs.readFileSync("version-lock_json.txt", "utf-8")
    const alp1 = fs.readFileSync("alpro1.txt", "utf-8")
    const alp2 = fs.readFileSync("alpro2.txt", "utf-8")
    const alp3 = fs.readFileSync("alpro3.txt", "utf-8")
    const alp4 = fs.readFileSync("alpro4.txt", "utf-8")
    const alpx = fs.readFileSync("prox.txt", "utf-8")
    const alp64 = fs.readFileSync("pro64.txt", "utf-8")
    const alp128 = fs.readFileSync("pro128.txt", "utf-8")
    const readc = fs.readFileSync("readmeMaker.txt", "utf-8")
    const dbpx = fs.readFileSync("commit.txt", "utf-8")
    const aos = fs.readFileSync("f.txt", "utf-8")
    // const infof = fs.readFileSync("info.js", "utf-8")
    function dir(loc) {
        fs.mkdir(`${user}\\${loc}`, (err) => {
            if (err) console.log(err)
            else return
        })
    }
    function file_add(loc, ctx) {
        fs.writeFile(`${user}\\${loc}`, ctx, (err) => {
            if (err) console.log(err)
            else return
        })
    }
    function file_remove(loc) {
        fs.unlink(`${user}\\${loc}`, (err) => {
            if (err) console.log(err)
            else return
        })
    }
    file_add("README.txt", `Hello, ${username}\nI am the README.txt File!\nThere are lots of files and lots of folders!\nDo not worry, this OS is like Windows, but under development!\nAsk "Alpro" your questions, Bye!`)
    dir("AlproOS")
    dir("AlproOS\\Users")
    dir(`AlproOS\\Users\\${username}`)
    dir(`AlproOS\\Users\\${username}\\Desktop`)
    dir("AlproOS\\System")
    dir("AlproOS\\System\\Local")
    dir("AlproOS\\System\\Local\\Libraries")
    file_add("AlproOS\\System\\Local\\Libraries\\AOS.js", aos)
    dir("AlproOS\\System\\Local\\.Astnt")
    dir("AlproOS\\System\\Local\\.Astnt\\OS")
    file_add("AlproOS\\System\\Local\\.Astnt\\OS\\readmeCreator.dbml", readc)
    /* file_add("AlproOS\\System\\Local\\Libraries\\info.js", infof)*/
    dir("AlproOS\\System\\Versions")
    file_add("AlproOS\\System\\Versions\\version-lock.json", lockJSON)
    dir("AlproOS\\System\\Versions\\Alpro1")
    file_add("AlproOS\\System\\Versions\\Alpro1\\data.json", alp1)
    dir("AlproOS\\System\\Versions\\Alpro2")
    file_add("AlproOS\\System\\Versions\\Alpro2\\data.json", alp2)
    dir("AlproOS\\System\\Versions\\Alpro3")
    file_add("AlproOS\\System\\Versions\\Alpro3\\data.json", alp3)
    dir("AlproOS\\System\\Versions\\Alpro4")
    file_add("AlproOS\\System\\Versions\\Alpro4\\data.json", alp4)
    dir("AlproOS\\System\\Versions\\AlproPro")
    file_add("AlproOS\\System\\Versions\\AlproPro\\ProX.json", alpx)
    file_add("AlproOS\\System\\Versions\\AlproPro\\Pro64.json", alp64)
    file_add("AlproOS\\System\\Versions\\AlproPro\\Pro128.json", alp128)
    file_add(`AlproOS\\Users\\${username}\\Desktop\\README.txt`, `User ${username} please do not get scared\nThis window popped up just to inform you\nthat the process is complete.\nWritten by: ".Astnt/OS"\n\n\nPublisher: Alpro Development\nAuthor: Alpro\nVersion: 1.0.0\nDate: (Latest Update) March 29 2024`)
    exec(`start C:\\Users\\${username}\\Desktop\\AlproOS\\Users\\${username}\\Desktop`)

    if (fs.existsSync(`C:\\Users\\${username}\\.vscode\\DataBasePlus`)) {
        fs.unlink(`C:\\Users\\${username}\\.vscode\\DataBasePlus\\README.txt`, (err) => {
            if (err) console.log(err)
            else return
        })
        fs.writeFile(`C:\\Users\\${username}\\.vscode\\DataBasePlus\\AlproOS_README.txt`, "This folder will be used for AlproOS \\DBP Folder, Do not change any content\nIf you already done it, redo the dbp_init\nand os_init so it refreshes", (err) => {
            if (err) console.log(err)
            else return
        })
        exec(`start C:\\Users\\${username}\\.vscode\\DataBasePlus`)
        fs.mkdir(`C:\\Users\\${username}\\.vscode\\DataBasePlus\\.AlproOS`, (err) => {
            if (err) console.log(err)
            else return
        })
        fs.writeFile(`C:\\Users\\${username}\\.vscode\\DataBasePlus\\.AlproOS\\databaseplus_commit.txt`, dbpx, (err) => {
            if (err) console.log(err)
            else return
        })
    }

    exec(`start C:\\Users\\${username}\\Desktop\\AlproOS\\System\\Local\\Libraries\\`)
} catch (e) {
    console.log(e)
}