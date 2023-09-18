public class OperatorDemo4 {
    public static void main(String[] args){
        int i = 10;
        int j = 20;
        int k = 30;

        //逻辑与 有false则false
        System.out.println( (i>j) & (i>k) );    //false
        System.out.println( (i<j) & (i>k) );    //false
        System.out.println( (i>j) & (i<k) );    //false
        System.out.println( (i<j) & (i<k) );    //true

        //逻辑或 有true则true
        System.out.println( (i>j) | (i>k) );    //false
        System.out.println( (i<j) | (i>k) );    //true
        System.out.println( (i>j) | (i<k) );    //true
        System.out.println( (i<j) | (i<k) );    //true

        //逻辑异或^ 不一样则为true，一样为false
        System.out.println( (i>j) ^ (i>k) );    //false
        System.out.println( (i<j) ^ (i>k) );    //true
        System.out.println( (i>j) ^ (i<k) );    //true
        System.out.println( (i<j) ^ (i<k) );    //false

        //逻辑非
        System.out.println( !(i>j) ^ (i>k) );     //true
        System.out.println( !!(i>j) ^ (i>k) );    //false
        System.out.println( !!!(i>j) ^ (i>k) );   //true

        System.out.println( !(i<j) ^ (i>k) );    //false
        System.out.println( !(i>j) ^ (i<k) );    //false
        System.out.println( !(i<j) ^ (i<k) );    //true

    }
}
