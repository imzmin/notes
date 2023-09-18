public class OperatorDemo2 {
    public static void main(String[] args){
        //把10赋值给int类型的变量
        int i = 10;
        System.out.println("i:" + i);    // 10

        // 单独使用  i++ ++i 没有区别，结果都一样
        // i++;
        // System.out.println("i:"  + i);    //11
        // ++i;
        // System.out.println("i:"  + i);    //11

        //参与操作使用：
        //参与操作的时候，i++即：先拿变量参与操作（这里是赋值），后拿变量作++或--
        //参与操作的时候，++i即：先拿变量作++或--，后拿变量参与操作（这里是赋值）
        int j=i++;
        System.out.println("i:"+i);   // 11
        System.out.println("j:"+j);  // 10
       // int j=++i;
       // System.out.println("i:"+i);   // 11
       // System.out.println("j:"+j);  // 11

    }
}
