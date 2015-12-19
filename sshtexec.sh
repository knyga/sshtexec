#!/bin/bash
MYDIR="`dirname \"$0\"`"
cd $MYDIR
node sshtexec abc "$@"
