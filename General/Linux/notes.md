# Linux Notes - by Aidan Butler

## man

The "man" command is short for "manual", and will output a manual or help page for a specified command, which has been written by the developer and packaged with the tool.

Usage: man \<command\>

You can also use a tool called "tldr" from https://tldr.sh/, which gives a quick overview of a command.

## ls

You can use the "ls" command inside a folder to list its contents. "ls" stands for "list". If you add a folder name or path, it will print that folder's contents.

| Option | Description |
|---------|-----------|
| ls -a | list all files including hidden file starting with '.'
| ls --color | colored list [=always/never/auto]
| ls -d | list directories - with ' */'
| ls -F | add one char of */=>@| to enteries
| ls -i | list file's inode index number
| ls -l | list with long format - show permissions
| ls -la | list long format including hidden files
| ls -lh | list long format with readable file size
| ls -ls | list with long format with file size
| ls -r | list in reverse order
| ls -R | list recursively directory tree
| ls -s | list file size
| ls -S | sort by file size
| ls -t | sort by time & date
| ls -X | sort by extension name

## cd

The "cd" command stands for "change directory". You can specify the name of a folder, or a relative/absolute path, or ".." option to indicate the parent folder, aka to move up a level in the directory.

To specify relative paths, start the path with "./", e.g. "cd ./cars/bmw".

To specify absolute paths, simply start the path with "/", e.g. "/etc".

Another example:

```bash
mkdir fruits\
mkdir cars\
cd fruits\
cd ../cars
```

## pwd

The "pwd" command stands for "print working directory" and simply returns the current directory you are working in within the terminal.

## mkdir

"mkdir" stands for "make directory" and is used to create a folder.

You can create multiple folders with one command:\
"mkdir dogs cars"

You can also create multiple nested folders by adding the -p option:\
"mkdir -p fruits/apples"

## mv

"mv" stands for "move" and moves a file to a specified path or folder. You can also rename files with this command:\
"mv pear new_pear"

## cp

"cp" stands for "copy" and copies a file to another location, or into another version of the same file. It works nearly identically to "mv".

You can copy folders by adding the "-r" option to recursively copy the whole folder contents.

## open

"open" opens a file using the syntax "open \<filename\>"

You can also open a folder in the native file explorer by specifying a directory name instead.

This command also works for applications

## touch

"touch" creates an empty file. If the file already exists, it opens it using write mode.

## find

The find command can be used to find files or folders matching a particular search pattern. It searches recursively.

Find all the files under the current tree that have the .js extension and print the relative path of each file matching:\
find . -name '*.js'

It's important to use quotes around special characters like * to avoid the shell interpreting them.

Find directories under the current tree matching the name "src":\
find . -type d -name src

Use -type f to search only files, or -type l to only search symbolic links. -name is case sensitive. Use -iname to perform a case-insensitive search.

You can search under multiple root trees:\
find folder1 folder2 -name filename.txt

Find directories under the current tree matching the name "node_modules" or 'public':\
find . -type d -name node_modules -or -name public

You can also exclude a path, using -not -path :\
find . -type d -name '*.md' -not -path 'node_modules

You can search files that have more than 100 characters (bytes) in them:\
find . -type f -size +100c

Search files bigger than 100KB but smaller than 1MB:\
find . -type f -size +100k -size -1M

Search files edited more than 3 days ago:\
find . -type f -mtime +3

Search files edited in the last 24 hours:\
find . -type f -mtime -1

You can delete all the files matching a search by adding the -delete option. This deletes all the files edited in the last 24 hours:
find . -type f -mtime -1 -delete


You can execute a command on each result of the search. In this example we run cat to print the file content:\
find . -type f -exec cat {} \\;\
notice the terminating "\\;". {} is filled with the file name at execution time.

## ln

"ln" is part of the linux file system commands and is used to create links, which are basically pointers to other files. They work like shortcuts in Windows. 

Hard links are identical copies of files, and when edited, both files reflect the edits.

Soft links work in a similar way and can link to other filesystems or directories (where hard links can't), however when the original file is removed, the link is broken. Soft links are created with a "-s" option.

## gzip

"gzip" is used to compress a file using the "LZ77" protocol. The new compressed file will have a .gz extension appended to it, e.g. "video.mp4.gz".

## gunzip

"gunzip" is the command used to decompress a .gz file.

## tar

"tar" is used to create an archive, grouping multiple files in a single .tar file. 

To extract tar archives, use "tar -xf archive.tar".

You can also use tar in conjunction with gzip with the "-z" option.

