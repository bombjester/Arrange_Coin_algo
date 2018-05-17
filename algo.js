var arrangeCoins = function(n) {
    var num = n;
    if(n == 1){
        return 1;
    }
    if(n == 0){
        return 0;
    }
    for(var i = 1; i<= n; i++){
        if(i ==num){
            return i;
        }
        if(i>num){
            return i-1;
            break;
        }
        
        num = num - i
       
    }
};