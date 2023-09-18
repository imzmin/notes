public class OperatorDemo5 {
    public static void main(String[] args){
        int i = 10;
        int j = 20;
        int k = 30;

        //短路与&& 有false则false
        System.out.println( (i>j) && (i>k) );    //false
        System.out.println( (i<j) && (i>k) );    //false
        System.out.println( (i>j) && (i<k) );    //false
        System.out.println( (i<j) && (i<k) );    //true

        //短路或|| 有true则true
        System.out.println( (i>j) || (i>k) );    //false
        System.out.println( (i<j) || (i>k) );    //true
        System.out.println( (i>j) || (i<k) );    //true
        System.out.println( (i<j) || (i<k) );    //true

        //短路与、逻辑与的区别：
        //短路与：左边为false，右边就不执行了,有短路效果
        //逻辑与：无论左边真假，右边都要执行

        //短路或、逻辑或的区别：
        //短路或：左边为true，右边就不执行了,有短路效果
        //逻辑或：无论左边真假，右边都要执行

        // System.out.println( (i++>100) & (j++>100) );     //false
        // System.out.println("i:"+i);    // 11
        // System.out.println("j:"+j);    // 21

        System.out.println( (i++>100) && (j++>100) );    //false
        System.out.println("i:"+i);    // 11
        System.out.println("j:"+j);    // 20  左边为false，右边就不执行了

    }
}
