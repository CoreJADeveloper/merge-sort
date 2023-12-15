class MergeSort {

    merge(array, left, middle, right) {
        var n1 = middle - left + 1;
        var n2 = right - middle;

        var LEFT = new Array(n1);
        var RIGHT = new Array(n2);

        for (var i = 0; i < n1; i++)
            LEFT[i] = array[left + i];
        for (var j = 0; j < n2; j++)
            RIGHT[j] = array[middle + 1 + j];

        var i = 0;

        var j = 0;

        var k = left;

        while (i < n1 && j < n2) {
            if (LEFT[i] <= RIGHT[j]) {
                array[k] = LEFT[i];
                i++;
            }
            else {
                array[k] = RIGHT[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            array[k] = LEFT[i];
            i++;
            k++;
        }

        while (j < n2) {
            array[k] = RIGHT[j];
            j++;
            k++;
        }
    }

    mergeSort(array, left, right) {
        if (left >= right) {
            return;
        }
        var middle = left + parseInt((right - left) / 2);
        this.mergeSort(array, left, middle);
        this.mergeSort(array, middle + 1, right);
        this.merge(array, left, middle, right);
    }

    printArray(A, size) {
        for (var i = 0; i < size; i++) {
            console.log(A[i] + " ");
        }
    }
}

let MS = new MergeSort();
let array = [12, 11, 13, 5, 6, 7];
let array_size = array.length;
console.log("Given array is ");
MS.printArray(array, array_size);
MS.mergeSort(array, 0, array_size - 1);
console.log("Sorted array is ");
MS.printArray(array, array_size);