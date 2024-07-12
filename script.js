function mincost(arr) {
    if (arr.length === 1) return 0; 
    
    let minHeap = [];
    
    for (let rope of arr) {
        minHeap.push(rope);
    }
    
    let minCost = 0;
    
    while (minHeap.length > 1) {
        let first = minHeap.shift(); 
        let second = minHeap.shift(); 
        
        let mergeCost = first + second;
        
        minCost += mergeCost;
        
        minHeap.push(mergeCost);
        
    }
    
    return minCost;
}

module.exports = mincost;
