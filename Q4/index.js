function IntervalCreator(intervals = []) {

    const monthMap = {
        Jan: '1',
        Feb: '2',
        Mar: '3',
        Apr: '4',
        May: '5',
        Jun: '6',
        Jul: '7',
        Aug: '8',
        Sep: '9',
        Oct: '10',
        Nov: '11',
        Dec: '12',
    }

    const sortIntervals = (intervals) => {
        return intervals.sort((a, b) => {
            a = +monthMap[a.split('-')[1]]
            b = +monthMap[b.split('-')[1]]
            if (a < b) {
                return -1;
            } else {
                return 1;
            }
        })
    }

    const parsedIntervals = (intervals) => {
        return intervals.reduce((acc, [start, end]) => {
            acc.push(start)
            acc.push(end)
            return acc
        }, [])
    }

    let newIntervals = parsedIntervals(intervals);

    console.log('Parsed Interval', newIntervals);

    let sortedIntervals = sortIntervals(newIntervals);

    console.log('Sorted Intervals', sortedIntervals);

    this.createInterval = function (type = '') {

        if (type === "StrategyOne") {
            interval = new StrategyOne(newIntervals);
            interval.createIntervals();
        } else if (type === "StrategyTwo") {
            interval = new StrategyTwo(newIntervals, breakAt=intervals.length);
            interval.createIntervals();
        }

        interval.type = type;

        interval.showInterval = function () {
            console.log(`Intervals according to ${this.type}`, this.intervals)
        }

        return interval;
    }

}

const StrategyOne = function (intervals) {
    this.intervals = [];
    this.createIntervals = () => {
        intervals.forEach((interval, index, array) => {
            if(index < array.length-2) {
                this.intervals.push(`${interval}-${--array[index+1].split('-')[0]}${array[index+1].split('-')[1]}`);
            } else {
                if(index !== array.length-1)
                this.intervals.push(`${interval}-${array[index+1]}`);
            }
        })
    };
};

const StrategyTwo = function (intervals, breakAt) {
    this.intervals = [];
    this.createIntervals = () => {
        intervals.forEach((interval, index, array) => {
            if(index <= breakAt-1) {
                if(index === breakAt-1) {
                    this.intervals.push(`${interval}-${array[array.length-1]}`)
                } else {
                    this.intervals.push(`${interval}-${--array[index+1].split('-')[0]}${array[index+1].split('-')[1]}`)
                }
            }
        })
    };
};

const factory = new IntervalCreator([
    ['1-Jan', '30-Jun'],
    ['2-Feb', '23-May'],
    ['3-Mar', '8-Jul']
]);

const one = factory.createInterval(type = 'StrategyOne');
one.showInterval();
const two = factory.createInterval(type = 'StrategyTwo');
two.showInterval();