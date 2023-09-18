public class OperatorDemo3 {
    public static void main(String[] args){
        //把10赋值给int类型的变量
        int i = 10;
        int j = 20;
        int k = 10;

        //把j的值赋值给了i，然后输出i的值
        System.out.println(i=j);     //20

        //关系运算符的结果是布尔值，不是true就是false
        System.out.println(i==j);    //false
        System.out.println(i==k);    //true

        System.out.println(i!=j);    //true
        System.out.println(i!=k);    //false

        System.out.println(i>=j);    //false
        System.out.println(i>=k);    //true


    }
}
