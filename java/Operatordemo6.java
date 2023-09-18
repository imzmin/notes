public class OperatorDemo6 {
    public static void main(String[] args){

        //格式：关系运算符?表达式1:表达式2
        // a > b ? a : b
        //计算规则：首先计算关系表达式，如果值为true，表达式1的值就是运算结果；如果值为false，表达式2的值就是运算结果

        int a = 10;
        int b = 20;
        //获取两个数据中的较大值
        int max= a > b ? a : b;
        //输出结果
        System.out.println("max:"+max);  //20

    }
}
