import java.util.*;

public class IfDemo1 {
    //if语句格式3
    public static void main(String[] args) {
        //录入数据
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入一个星期数");
        int week = sc.nextInt();
        if (week == 1) {
            System.out.println(week + "是星期一");
        } else if (week == 2) {
            System.out.println(week + "是星期二");
        } else if (week == 3) {
            System.out.println(week + "是星期三");
        } else if (week == 4) {
            System.out.println(week + "是星期四");
        } else if (week == 5) {
            System.out.println(week + "是星期五");
        } else if (week == 6) {
            System.out.println(week + "是星期六");
        } else {
            System.out.println(week + "是星期日");
        }
        System.out.println("结束");
    }
}
