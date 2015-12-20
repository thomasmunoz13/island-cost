# Island Cost

A shell script that analyzes the logs available at [https://github.com/mosser/QGL-15-16](https://github.com/mosser/QGL-15-16)
and compute the average/max/min of every action used in the championships.

## Requirements 
In order to use it you must have both **Node.js** and **git** installed on your computer

## Usage
```
# Will put the result in a file named "result.txt"
./stats.sh

# Will put the result in a file named "costs.txt"
./stats.sh costs.txt

# Will put the result in a file named "costs.txt" and will be a little bit more verbose
./stats.sh costs.txt 1

# Will put the result in a file named "result.txt" and will clean the directory (in case the last command failed or be stopped too early)
./stats.sh clean

```

May the force be with you !
