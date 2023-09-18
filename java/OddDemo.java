import java.util.*;

public class OddDemo {
    //判断奇偶数
    public static void main(String[] args) {
        //录入数据
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入任意一个整数");
        int i = sc.nextInt();
        if (i % 2 == 0) {
            System.out.println(i + "是偶数");
        } else {
            System.out.println(i + "是奇数");
        }
        System.out.println("结束");
    }
}
