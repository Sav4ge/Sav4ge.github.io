var sav4ge = {
  compact: function(ary) {
    return ary.filter(it => it)
  },
  reduce:function (ary,reducer,initialval){
    for(var i = 0 ; i < ary.length ; i++){
      initialval = reducer(initialval,ary[i]);
      return initialval;
    }
  },
}
