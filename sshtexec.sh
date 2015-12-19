#!/bin/bash
DIR=`dirname \`readlink "$0"\``
cd $DIR
node sshtexec abc "$@"
