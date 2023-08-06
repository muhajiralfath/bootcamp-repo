public class Shorting {
    public static void main(String[] args) {

        int arr[] ={7,20,39,2,48,520,5,5};

        // mengurutkan dengan algoritma bubble short

        for (int i = 0; i < arr.length; i++){
            for (int j = 0; j < arr.length -1 ; j++){
                if (arr[j] > arr[j+1] ){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }

        //mencetak output agar sesuai dengan hasil yg diminta

        for (int ar : arr){
            System.out.println(ar);
        }


    }
}
