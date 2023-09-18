public class Operator{
    public static void main(String[] args){
        //定义两个变量
        int a=6;
        int b=4;
        System.out.println(a+b);   //10
        System.out.println(a-b);   //2
        System.out.println(a*b);   //24
        //除法得到的是商，取余得到的是余数
        System.out.println(a/b);   //1
        System.out.println(a%b);   //2
        //整数相除只能得到整数，要想得到小数，必须有浮点数参与
        System.out.println(6.0/4);  //1.5
    }
}