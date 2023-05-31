var findMedianSortedArrays = function (nums1 = [1], nums2 = []) {
    const temp = [];
    let prev = 0, j = 0, i = 0;
    const half = ~~((nums1.length + nums2.length) / 2);
    const isOdd = (nums1.length + nums2.length) & 1;
    while (true) {
      console.log( i, j )
      if (isOdd && half == i + j - 1) return temp.pop();
      if (!isOdd && half == i + j - 1) return (temp.pop() + prev) / 2;
      prev = temp[temp.length - 1];
      if (j == nums2.length || nums1[i] < nums2[j]) temp.push(nums1[i++]);
      else temp.push(nums2[j++]);
    }
  };
console.log(findMedianSortedArrays([1,2],[3,4]))

const ary = [5,17,0,6,8]

const selectSort = (ary) => {
    var len = ary.length;
    var min;
    for(var i = 0; i < len - 1; i++){
        min = i
        for(var j = i+1; j < len; j++){
            if(ary[j] < ary[min]){
                min = j
            }
        };
        let temp = ary[i]
        ary[i] = ary[min]
        ary[min] = temp
    }
    return ary
}

// 选择排序
// function selectionSort(arr) {
//     var minIndex = 0
//     for (var i = 0; i < arr.length-1; i++) { // 长度-1，是因为剩下最后一个数时不用做判断
//       minIndex = i
//       for (var j = i + 1; j < arr.length; j++) { // j = i + 1 是因为自身不需要做比较
//         if (arr[j] < arr[minIndex]) {
//           minIndex = j
//         }
//       }
//       var temp = arr[i]
//       arr[i] = arr[minIndex]
//       arr[minIndex] = temp
//     }
//     return arr
//   }
console.log(selectSort(ary))