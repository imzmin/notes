//导包

import java.util.Scanner;  //导包的动作必须出现在类定义的上边  import java.util.* 一次导入所有

//数据输入
public class OperatorDemo9 {
    public static void main(String[] args) {
        //创建对象
        Scanner sc = new Scanner(System.in);  //只有sc是变量 可以变 其他的都不可以变
        //录入数据
        System.out.println("请输入第一个和尚的身高:");
        int i = sc.nextInt();   //只有i是变量
        System.out.println("请输入第二个和尚的身高:");
        int j = sc.nextInt();
        System.out.println("请输入第三个和尚的身高:");
        int k = sc.nextInt();
        //比较
        int h = i > j ? i : j;
        int max = h > k ? h : k;
        //输出数据
        System.out.println("这三个和尚中身高最高的是:" + max + "cm");
    }
}
