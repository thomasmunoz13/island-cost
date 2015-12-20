#!/bin/bash

function default(){
    FILE="result.txt"
    echo "---> Result file missing, default destination file is \"$FILE\""
}

if [ $# -eq 0 ] 
then
    default 
else
    if [[ $1 -eq "clean"  ]]
    then
        echo "---> Cleaning ..."
        rm -Rf "QGL-15-16" && rm logs.json
        default
    else
        FILE=$1
    fi
fi

echo "---> Cloning repository ..."

git clone  "https://github.com/mosser/QGL-15-16" &> /dev/null

cd "QGL-15-16/championships"

touch ../../logs.json

printf "var logs = []; \n" > ../../logs.json

i=0

echo "---> Processing logs ..."

for f in $(ls week*/q*.json)
do
    if [[ $2 -eq 1 ]]
    then
        echo "-> Processing $f"
    fi 
     
     echo "$(echo "$(cat ../../logs.json)" $(echo"") $(echo "logs[$i] = $(cat $f);"))" > ../../logs.json
     i=$((i+1)) 
done

cd ../.. 

echo "---> Writing results on $FILE ..."
echo "$(cat logs.json) $(cat script.js)" | node > $FILE

echo "---> Cleaning ..."
rm -Rf logs.json "QGL-15-16"


echo "---> Finished"
