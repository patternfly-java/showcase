#!/usr/bin/env kotlin

import kotlin.io.path.*
import kotlin.time.measureTime

data class CodeBlock(val name: String, val code: List<String>)

fun CodeBlock.writeToFile() {
    println("Write code block $name")
    targetPath.div("${name}.java").apply {
        deleteIfExists()
        createFile()
        appendText(code.joinToString("\n"))
    }
}

val startComment = "// @code-start:"
val endComment = "// @code-end:"
val targetPath = Path("./target/code")
val sourcePaths = mapOf(
        "*Component.java" to Path("./src/main/java/org/patternfly/showcase/component"),
        "*Layout.java" to Path("./src/main/java/org/patternfly/showcase/layout")
)

var name = ""
var collectCode = false
var leadingWhitespace = 0
val code = mutableListOf<String>()
var counter = 0

if (!targetPath.exists()) {
    targetPath.createDirectory()
}

val timeTaken = measureTime {
    for ((suffix, sourcePath) in sourcePaths) {
        sourcePath.forEachDirectoryEntry(suffix) { path ->
            if (!path.isDirectory() && path.isReadable()) {
                path.forEachLine { line ->
                    if (line.contains(startComment)) {
                        leadingWhitespace = line.indexOf(startComment)
                        name = line.substringAfter(startComment)
                        collectCode = true
                    } else {
                        if (collectCode) {
                            if (line.contains(endComment + name)) {
                                CodeBlock(name, code).writeToFile()
                                counter++
                                reset()
                            } else {
                                code.add(if (line.length < leadingWhitespace) line else line.substring(leadingWhitespace))
                            }
                        }
                    }
                }
            }
        }
    }
}
println("-".repeat(40))
println("Processed $counter files in $timeTaken")

fun reset() {
    name = ""
    collectCode = false
    leadingWhitespace = 0
    code.clear()
}
