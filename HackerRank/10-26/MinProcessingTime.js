function minTime(processorTime, taskTime) {
    // Write your code here
    let res = -Infinity;
    const sortedProcessor = processorTime.sort((a,b) => a-b);
    const sortedTask = taskTime.sort((a,b) => a-b);
    //console.log(sortedTask);
    let sortedIdx = 3;
    for(let i = sortedProcessor.length-1; i >=0; i--) {
        res = Math.max(sortedProcessor[i] + sortedTask[sortedIdx], res);
        sortedIdx+=4;
    }
    return res;
}