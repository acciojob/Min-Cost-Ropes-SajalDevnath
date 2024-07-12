function mincost(arr) {
    if (arr.length === 1) return 0; 
 
    arr.sort((a, b) => a - b); 
    
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
        
        minHeap.sort((a, b) => a - b);
    }
    
    return minCost;
}

module.exports = mincost;
