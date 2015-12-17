# Island Cost

A shell script that analyze the logs available at [https://github.com/mosser/QGL-15-16](https://github.com/mosser/QGL-15-16)
and compute the average/max/min of every actions used in the championships.

## Requirements 
In order to use this you must have both *nodejs* and *git* installed on your computer

## Usage
```
# Will put the result in a file named "result.txt"
./stats

# Will put the result in a file named "costs.txt"
./stats costs.txt

# Will put the result in a file named "costs.txt" and will be a little bit more verbose
./stats costs.txt 1

# Will put the result in a file named "result.txt" and will clean the directory (in case the last command failed or be stopped to early)
./stats clean

```

May the force be with you !
